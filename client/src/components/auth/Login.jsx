import { Link } from "react-router"

export default function Login() {

    return (
        <>
            <section className="auth">
                <div className="auth__showcase">
                    <div className="auth__showcase-content">
                        <img src="./logo.png" alt="Ellie Art лого" className="nav-logo__img" />
                            <h2>Радваме се да те видим отново 🍋</h2>
                            <p>Влез в акаунта си, за да продължиш пазаруването, следиш поръчките си и се включиш в разговора под
                                последните публикации.</p>

                            <div className="auth__quote">
                                „Всяка поръчка е опакована с толкова грижа, сякаш е за близък приятел.“
                                <strong>— Мария, клиент на Ellie Art</strong>
                            </div>
                    </div>
                </div>

                <div className="auth__form-side">
                    <div className="auth__form-wrap">
                        <span className="eyebrow">Добре дошъл отново</span>
                        <h1>Вход в акаунта</h1>
                        <p>Въведи данните си, за да продължиш.</p>

                        <form>
                            <div className="field">
                                <label htmlFor="login-email">Имейл</label>
                                <div className="field-input">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="m22 6-10 7L2 6" />
                                    </svg>
                                    <input type="email" id="login-email" placeholder="ti@example.com" autoComplete="email" />
                                </div>
                            </div>

                            <div className="field">
                                <label htmlFor="login-password">Парола</label>
                                <div className="field-input">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="11" width="18" height="10" rx="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                    <input type="password" id="login-password" placeholder="Твоята парола"
                                        autoComplete="current-password" />
                                        <button type="button" className="field-input__toggle" aria-label="Покажи паролата">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        </button>
                                </div>
                            </div>

                            <div className="field-check field-check--row">
                                <Link to="#" className="field-check__link">Забравена парола?</Link>
                            </div>

                            <button type="submit" className="btn btn-primary">Вход</button>
                        </form>

                        <div className="auth__divider">или влез с</div>

                        <div className="auth__social">
                            <button type="button">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                                </svg>
                                Facebook
                            </button>
                            <button type="button">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
                                </svg>
                                Google
                            </button>
                        </div>

                        <p className="auth__switch">Нямаш акаунт? <Link to="/register">Регистрирай се</Link></p>
                    </div>
                </div>

            </section>
        </>
    )
}