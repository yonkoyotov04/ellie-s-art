import { useContext } from "react"
import { Link, NavLink } from "react-router"
import AdminContext from "../../contexts/AdminContext.jsx";

export default function Header() {
    const { user, isAuthenticated, logoutHandler } = useContext(AdminContext);

    return (
        <header className="site-header">
            <nav className="navbar">

                <Link to="/" className="nav-logo">
                    <img src="./logo.png" alt="Ellie Art лого" className="nav-logo__img" />
                    <span className="nav-logo__text">
                        <strong>Ellie's</strong>
                        <span>ART</span>
                    </span>
                </Link>

                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <label htmlFor="nav-toggle" className="nav-toggle-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </label>

                <ul className="nav-links">
                    <li><NavLink to="/" className={({isActive}) =>  isActive ? 'is-active' : ''}>Начало</NavLink></li>
                    <li><NavLink to="/catalogue" className={({isActive}) =>  isActive ? 'is-active' : ''}>Каталог</NavLink></li>
                    <li><NavLink to="/categories" className={({isActive}) =>  isActive ? 'is-active' : ''}>Категории</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) =>  isActive ? 'is-active' : ''}>За нас</NavLink></li>
                </ul>

                <div className="nav-actions">
                    {isAuthenticated ? <>
                        <button onClick={logoutHandler} className="btn btn-outline">Изход</button>
                        <li className="btn btn-ghost"><Link to="/admin/dashboard">Управление</Link></li>
                    </> : <>
                        <Link to="/login" className="btn btn-ghost">Вход</Link>
                        <Link to="/register" className="btn btn-outline">Регистрация</Link>
                    </>}

                </div>

            </nav>
        </header>
    )
}