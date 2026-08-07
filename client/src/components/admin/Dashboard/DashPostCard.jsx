import { Link } from "react-router";

export default function DashPostCard() {
    return (
        <Link to="posts-admin.html" className="recent-item">
            <span className="recent-item__media recent-item__media--post">Е</span>
            <span className="recent-item__body">
                <span className="recent-item__title">Нова партида лимонови акварели съхне на масата!</span>
                <span className="recent-item__meta">преди 2 часа · 24 харесвания</span>
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