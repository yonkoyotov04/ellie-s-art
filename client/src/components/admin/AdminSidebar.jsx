import { useContext } from "react";
import { Link, NavLink } from "react-router";
import AdminContext from "../../contexts/AdminContext.jsx";

export default function AdminSideBar() {
    const { isAuthenticated } = useContext(AdminContext);
    return (
        <aside className="dash-sidebar">
            <nav className="dash-nav">
                <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'dash-nav__link is-active' : 'dash-nav__link'}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="9" rx="1.5" />
                        <rect x="14" y="3" width="7" height="5" rx="1.5" />
                        <rect x="14" y="12" width="7" height="9" rx="1.5" />
                        <rect x="3" y="16" width="7" height="5" rx="1.5" />
                    </svg>
                    Табло
                </NavLink>
                <NavLink to="/admin/products" className={({ isActive }) => isActive ? 'dash-nav__link is-active' : 'dash-nav__link'}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <circle cx="8.5" cy="8.5" r="1.6" />
                        <path d="M21 15l-5-5L5 21" />
                    </svg>
                    Продукти
                </NavLink>
                <NavLink to="/admin/addProduct" className={({ isActive }) => isActive ? 'dash-nav__link is-active' : 'dash-nav__link'}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                    Добави продукт
                </NavLink>
                {isAuthenticated ?
                    <NavLink to="/admin/info" className={({ isActive }) => isActive ? 'dash-nav__link is-active' : 'dash-nav__link'}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                        </svg>
                        Профил
                    </NavLink> : ''}

            </nav>
        </aside>
    )
}