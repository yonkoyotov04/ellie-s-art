import { Link } from "react-router"

export default function Footer() {

    return (
        <footer className="site-footer">
            <div className="footer__inner">

                <div className="footer__brand">
                    <Link to="home.html" className="nav-logo">
                        <img src="./logo.png" alt="Ellie Art лого" className="nav-logo__img" />
                            <span className="nav-logo__text">
                                <strong>Ellie's</strong>
                                <span>ART</span>
                            </span>
                    </Link>
                    <p>Ръчно рисувано изкуство и авторски подаръци, направени с много любов и по чаша лимонада.</p>
                    <div className="footer__social">
                        <Link to="#" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                            </svg>
                        </Link>
                        <Link to="#" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="footer__nav">
                    <h4>Разгледай</h4>
                    <div className="footer__links">
                        <Link to="catalogue.html">Каталог</Link>
                        <Link to="categories.html">Категории</Link>
                        <Link to="posts.html">Публикации</Link>
                        <Link to="about.html">За нас</Link>
                    </div>
                </div>

                <div className="footer__account">
                    <h4>Акаунт</h4>
                    <div className="footer__links">
                        <Link to="login.html">Вход</Link>
                        <Link to="register.html">Регистрация</Link>
                        <Link to="cart.html">Количка</Link>
                    </div>
                </div>

            </div>

            <div className="footer__bottom">
                <span>2026 Ellie Art.</span>
                <span>Направено с ❤️ и много боя.</span>
            </div>
        </footer>
    )
}