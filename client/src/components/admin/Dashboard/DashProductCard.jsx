import { Link } from "react-router";

export default function DashProductCard({ id, title, image, price, category }) {

    const apiUrl = 'http://localhost:2105/'

    return (
        <Link to={`/product/${id}/details`} className="recent-item">
            <span className="recent-item__media">
                {image 
                ? 
                <img src={`${apiUrl}${image}`} /> 
                : 
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <circle cx="8.5" cy="8.5" r="1.6" />
                    <path d="M21 15l-5-5L5 21" />
                </svg>}

            </span>
            <span className="recent-item__body">
                <span className="recent-item__title">{title}</span>
                <span className="recent-item__meta">    {category} · {price} €.</span>
            </span>
        </Link>
    )
}