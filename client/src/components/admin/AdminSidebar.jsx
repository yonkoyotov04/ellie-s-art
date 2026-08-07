import { Link } from "react-router";

export default function AdminSideBar() {
    return (
        <aside className="dash-sidebar">
            <nav className="dash-nav">
                <Link to="/admin/dashboard" className="dash-nav__link is-active">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="9" rx="1.5" />
                        <rect x="14" y="3" width="7" height="5" rx="1.5" />
                        <rect x="14" y="12" width="7" height="9" rx="1.5" />
                        <rect x="3" y="16" width="7" height="5" rx="1.5" />
                    </svg>
                    Табло
                </Link>
                <Link to="/admin/products" className="dash-nav__link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <circle cx="8.5" cy="8.5" r="1.6" />
                        <path d="M21 15l-5-5L5 21" />
                    </svg>
                    Продукти
                </Link>
                <Link to="/admin/products/add" className="dash-nav__link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                    Добави продукт
                </Link>
                <Link to="/admin/posts" className="dash-nav__link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M4 5h16M4 12h16M4 19h10" />
                    </svg>
                    Публикации
                </Link>
                <Link to="/admin/posts/add" className="dash-nav__link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                    Добави публикация
                </Link>
            </nav>
        </aside>
    )
}