import { Link } from "react-router";

export default function CategoryCard({id, name}) {
    return (
        <Link to="catalogue.html?category=paintings" className="category-card category-card--pink">
            <span className="category-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <circle cx="8.5" cy="8.5" r="1.6" />
                    <path d="M21 15l-5-5L5 21" />
                </svg>
            </span>
            <span className="category-card__title">{name}</span>
            <span className="category-card__count">18 продукта</span>
        </Link>
    )
}