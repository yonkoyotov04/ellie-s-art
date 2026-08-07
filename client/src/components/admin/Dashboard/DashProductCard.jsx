import { Link } from "react-router";

export default function DashProductCard() {
    return (
        <Link to="products.html" className="recent-item">
            <span className="recent-item__media">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <circle cx="8.5" cy="8.5" r="1.6" />
                    <path d="M21 15l-5-5L5 21" />
                </svg>
            </span>
            <span className="recent-item__body">
                <span className="recent-item__title">Лимонова градина — платно 30×40</span>
                <span className="recent-item__meta">Платна · 45.00 лв.</span>
            </span>
            <span className="recent-item__edit" aria-label="Редактирай">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
            </span>
        </Link>
    )
}