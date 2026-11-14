export default function ImagePreviewItem({ src, setCover, index, onRemove }) {
    return (

        <div className="product-form-preview-item">

            <img src={src} onClick={() => setCover(index)} alt="Преглед на продукта" />

            {index === 0 && <span className="product-form-cover-badge">Корица</span>}

            <button
                type="button"
                onClick={() => onRemove(index)}
                className="product-form-remove-image"
                aria-label="Премахни снимката"
                title="Премахни снимката">
                ×
            </button>

        </div>
    )
}