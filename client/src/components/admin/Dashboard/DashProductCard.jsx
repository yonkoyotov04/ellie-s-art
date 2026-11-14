import { Link } from "react-router";

export default function DashProductCard({ id, title, image, price, category }) {

    const apiUrl = 'http://localhost:2105/uploads/'

    return (
        <Link to={`/product/${id}/details`} className="dashboard-product-row">
            {image
                ?
                <img src={`${apiUrl}${image}`} alt="Ръчно изработена декорация" className="dashboard-product-image" />
                :
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <circle cx="8.5" cy="8.5" r="1.6" />
                    <path d="M21 15l-5-5L5 21" />
                </svg>
            }

            <div className="dashboard-product-details">
                <h3>{title}</h3>
                <span>{category}</span>
            </div>

            <span className="dashboard-product-price">{price} €</span>
            <span className="dashboard-product-arrow">→</span>
        </Link>
    )
}