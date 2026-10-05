import { useEffect, useMemo, useState } from "react";

const empty_images = [];

export default function useProductImages(initialImages = empty_images, apiUrl= '', max = 8) {
    const [existingImages, setExistingImages] = useState(initialImages);
    const [newFiles, setNewFiles] = useState([]);

    useEffect(() => {
        setExistingImages(initialImages)
    }, [initialImages])

    const newPreviews = useMemo(() => newFiles.map(file => URL.createObjectURL(file)), [newFiles]);

    useEffect(() => {
        return () => newPreviews.forEach(url => URL.revokeObjectURL(url))
    }, [newPreviews]);

    const items = [
        ...existingImages.map(path => ({type: 'existing', src: `${apiUrl}${path}`, path})),
        ...newFiles.map((file, i) => ({type: 'new', src: newPreviews[i], file}))
    ]

    const onImagesChange = (e) => {
        const picked = Array.from(e.target.files);
        const remainingSlots = max - existingImages.length - newFiles.length;
        setNewFiles(prev => [...prev, ...picked].slice(0, prev.length + remainingSlots));
        e.target.value = '';
    };

    const removeImage = (index) => {
        if (index < existingImages.length) {
            setExistingImages(prev => prev.filter((_, i) => i !== index));
        } else {
            const newIndex = index - existingImages.length;
            setNewFiles(prev => prev.filter((_, i) => i !== newIndex));
        }
    };

    return {items, existingImages, newFiles, onImagesChange, removeImage};
}