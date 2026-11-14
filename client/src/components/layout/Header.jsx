import { useContext } from "react"
import { Link, NavLink } from "react-router"
import AdminContext from "../../contexts/AdminContext.jsx";

export default function Header() {
    const { user, isAuthenticated, logoutHandler } = useContext(AdminContext);

    return (
        <header className="site-header">
            <Link className="brand-logo" to="/" aria-label="Ellie's Art — Home">
                <img src="/logo.png" alt="Ellie's Art" />
            </Link>

            <nav className="main-navigation" aria-label="Main navigation">
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>Начало</NavLink>
                <NavLink to="/catalogue" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>Каталог</NavLink>
                <NavLink to="/categories" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>Категории</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>За мен</NavLink>
            </nav>

            <div className="header-actions">
                {isAuthenticated ? <>
                    <Link className="management-button" to="/admin/dashboard">
                        <span aria-hidden="true">⚙</span> Управление
                    </Link>
                    <button onClick={logoutHandler} className="logout-button" type="button">
                        <span aria-hidden="true">↪</span> Изход
                    </button>
                </> : <></>}
            </div>

        </header>
    )
}