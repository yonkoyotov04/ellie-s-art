import { Link } from "react-router"

export default function Footer() {

    return (

        <footer className="site-footer">
            <div className="footer-main">

                <div className="footer-brand">
                    <Link className="brand-logo footer-logo" to="/" aria-label="Ellie's Art — Home">
                        <img src="/logo.png" alt="Ellie's Art" />
                    </Link>

                    <p className="footer-description">
                        Ръчно изработени красоти, вдъхновени от малките неща, които правят живота по-красив.
                    </p>

                    <div className="social-links" aria-label="Social media">
                        <Link
                            to="https://www.facebook.com/profile.php?id=61554987511639"
                            aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                            </svg>
                        </Link>
                        <Link
                            to="https://www.instagram.com/ellie_art._?stkn=aDhhajM3MXBjaW96"
                            aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1" />
                            </svg>
                        </Link>
                        <Link to="#" aria-label="Pinterest">p</Link>
                        <Link to="#" aria-label="YouTube">yt</Link>
                    </div>
                </div>

                <nav className="footer-navigation" aria-label="Footer navigation">
                    <Link to="/catalogue">Каталог <span>→</span></Link>
                    <Link to="/categories">Категории <span>→</span></Link>
                    <Link to="/about">За Мен <span>→</span></Link>
                </nav>

                <div className="footer-note" aria-hidden="true">
                    <span>✿</span>
                    <span>✿</span>
                    <span>♡</span>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Ellie's Art</p>
                <p className="footer-message">
                    Направено с <span>♥</span> и много труд.
                </p>
            </div>
        </footer>
    )
}