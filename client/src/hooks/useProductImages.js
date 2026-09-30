import { useEffect, useMemo, useState } from "react";

export default function useProductImages(max = 8) {
    const [imageFiles, setImageFiles] = useState([]);

    const previews = useMemo(() => imageFiles.map(file => URL.createObjectURL(file)), [imageFiles]);

    useEffect(() => {
        return () => previews.forEach(url => URL.revokeObjectURL(url))
    }, [previews]);

    const onImagesChange = (e) => {
        const picked = Array.from(e.target.files);
        setImageFiles(prev => [...prev, ...picked].slice(0, max));
        e.target.value = '';
    };

    const removeImage = (index) => {
        setImageFiles(prev => prev.filter((_, i) => i != index));
    };

    return {imageFiles, previews, onImagesChange, removeImage};
}