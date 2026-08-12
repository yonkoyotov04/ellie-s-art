import { useContext } from "react"
import { Link } from "react-router"
import UserContext from "../../contexts/UserContext.jsx"

export default function Header() {
    const { user, isAuthenticated, logoutHandler } = useContext(UserContext);

    return (
        <header className="site-header">
            <nav className="navbar">

                <Link to="Home.html" className="nav-logo">
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
                    <li><Link to="/" className="is-active">Начало</Link></li>
                    <li><Link to="/catalogue">Каталог</Link></li>
                    <li><Link to="/categories">Категории</Link></li>
                    <li><Link to="/posts">Публикации</Link></li>
                    <li><Link to="/about">За нас</Link></li>
                </ul>

                <div className="nav-actions">
                    {isAuthenticated ? <>
                        <button onClick={logoutHandler} className="btn btn-outline">Изход</button>
                        <Link to="/cart" className="nav-cart" aria-label="Количка">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                            <span className="nav-cart__count">2</span>
                        </Link>
                    </> : <>
                        <Link to="/login" className="btn btn-ghost">Вход</Link>
                        <Link to="/register" className="btn btn-outline">Регистрация</Link>
                    </>}

                </div>

            </nav>
        </header>
    )
}