export default function ImagePreviewItem({src, setCover, index, onRemove}) {
    return (
        <div className="image-previews__item">
            <img src={src} onClick={() => setCover(index)} alt="" />
            {index === 0 && <span className="image-previews__badge">Корица</span>}
            <button type="button" onClick={() => onRemove(index)} className="image-previews__remove" aria-label="Премахни снимката">
                ×
            </button>
        </div>
    )
}