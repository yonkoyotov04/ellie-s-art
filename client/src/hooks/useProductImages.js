import { useEffect, useMemo, useState } from "react";

const empty_images = [];

export default function useProductImages(initialImages = empty_images, apiUrl= '', max = 8) {

    const [images, setImages] = useState([]);

    const onImagesChange = (e) => {
        const picked = Array.from(e.target.files);
        const processedPicks = picked.map(file => ({type: 'new', file, src: URL.createObjectURL(file)}))
        const remainingSlots = max - images.length;
        setImages(prev => [...prev, ...processedPicks].slice(0, prev.length + remainingSlots));
        e.target.value = '';
    };

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const setCover = (index) => {
        setImages(prev => {
            const newOrder = [...prev];
            const [image] = newOrder.splice(index, 1);
            newOrder.unshift(image);

            return newOrder;
        })
    }

    return {images, onImagesChange, removeImage, setCover};
}