export default function ProductCard() {

    return (
        <article className="product-card">
            <div className="product-card__media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.6" />
                <path d="M21 15l-5-5L5 21" />
            </svg></div>
            <span className="badge">Ново</span>
            <div className="product-card__body">
                <h3 className="product-card__name">Лимонова градина — платно 30×40</h3>
                <div className="product-card__meta">
                    <span className="product-card__price">45.00 лв.</span>
                    <button className="product-card__add" aria-label="Добави в количката">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                            strokeLinecap="round">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    )
}