import { Link } from "react-router"

export default function ProductCard({ id, title, price, image }) {

    const apiURL = 'http://localhost:2105/'

    return (
        <article className="product-card">
            <Link to={`/product/${id}/details`}>
                <div className="product-card__media">
                    {image
                        ?
                        <img src={`${apiURL}${image}`} alt="image" />
                        :
                        <>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="1.6">
                                <rect x="3" y="3" width="18" height="18" rx="3" />
                                <circle cx="8.5" cy="8.5" r="1.6" />
                                <path d="M21 15l-5-5L5 21" />
                            </svg>
                        </>
                    }
                </div>
                <span className="badge">Ново</span>
                <div className="product-card__body">
                    <h3 className="product-card__name">{title}</h3>
                    <div className="product-card__meta">
                        <span className="product-card__price">{price} €</span>
                    </div>
                </div>
            </Link>
        </article>
    )
}