export default function ImagePreviewItem({src, isCover, onRemove}) {
    return (
        <div className="image-previews__item">
            <img src={src} alt="" />
            {isCover && <span className="image-previews__badge">Корица</span>}
            <button type="button" onClick={onRemove} className="image-previews__remove" aria-label="Премахни снимката">
                ×
            </button>
        </div>
    )
}