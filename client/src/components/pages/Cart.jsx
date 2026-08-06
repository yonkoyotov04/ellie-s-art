import { Link } from "react-router";

export default function Cart() {

    return (
        <>
            <section className="section cart-top">
                <div className="section__inner">
                    <span className="eyebrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        Твоята поръчка
                    </span>
                    <h1 className="script-heading cart-top__heading">Количка</h1>
                    <p className="section-sub">Провери какво си избрал/а преди да продължиш към поръчката — количествата и
                        промо кодовете може да се редактират тук.</p>
                </div>
            </section>

            <svg className="citrus-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{color:'var(--cream-50)'}}>
                <path
                    d="M0 30 Q 50 60 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 V0 H0 Z"
                    fill="currentColor" />
            </svg>

            <section className="section cart-section">
                <div className="section__inner">

                    <div className="cart-layout">

                        <div className="cart-items">

                            <div className="cart-items__head">
                                <span>Продукт</span>
                                <span className="cart-items__head-qty">Количество</span>
                                <span className="cart-items__head-price">Цена</span>
                            </div>

                            <article className="cart-item">
                                <div className="cart-item__media" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                        <rect x="3" y="3" width="18" height="18" rx="3" />
                                        <circle cx="8.5" cy="8.5" r="1.6" />
                                        <path d="M21 15l-5-5L5 21" />
                                    </svg>
                                </div>
                                <div className="cart-item__info">
                                    <h3 className="cart-item__name">Лимонова градина — платно 30×40</h3>
                                    <p className="cart-item__variant">Размер: 30×40 см · Оригинал</p>
                                    <button type="button" className="cart-item__remove">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path
                                                d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6" />
                                        </svg>
                                        Премахни
                                    </button>
                                </div>
                                <div className="cart-item__qty">
                                    <button type="button" className="cart-item__qty-btn"
                                        aria-label="Намали количеството">−</button>
                                    <input type="text" className="cart-item__qty-input" value="1" aria-label="Количество"
                                        inputmode="numeric" />
                                        <button type="button" className="cart-item__qty-btn"
                                            aria-label="Увеличи количеството">+</button>
                                </div>
                                <div className="cart-item__price">
                                    <span className="cart-item__price-current">45.00 лв.</span>
                                </div>
                            </article>

                            <article className="cart-item">
                                <div className="cart-item__media" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                        <rect x="3" y="3" width="18" height="18" rx="3" />
                                        <circle cx="8.5" cy="8.5" r="1.6" />
                                        <path d="M21 15l-5-5L5 21" />
                                    </svg>
                                </div>
                                <div className="cart-item__info">
                                    <h3 className="cart-item__name">Ръчно рисувана картичка „Цветя“</h3>
                                    <p className="cart-item__variant">Комплект: 1 бр.</p>
                                    <button type="button" className="cart-item__remove">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path
                                                d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6" />
                                        </svg>
                                        Премахни
                                    </button>
                                </div>
                                <div className="cart-item__qty">
                                    <button type="button" className="cart-item__qty-btn"
                                        aria-label="Намали количеството">−</button>
                                    <input type="text" className="cart-item__qty-input" value="2" aria-label="Количество"
                                        inputmode="numeric" />
                                        <button type="button" className="cart-item__qty-btn"
                                            aria-label="Увеличи количеството">+</button>
                                </div>
                                <div className="cart-item__price">
                                    <span className="cart-item__price-current">17.00 лв.</span>
                                </div>
                            </article>

                            <article className="cart-item">
                                <div className="cart-item__media" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                        <rect x="3" y="3" width="18" height="18" rx="3" />
                                        <circle cx="8.5" cy="8.5" r="1.6" />
                                        <path d="M21 15l-5-5L5 21" />
                                    </svg>
                                </div>
                                <div className="cart-item__info">
                                    <h3 className="cart-item__name">Керамична чаша „Клонка мента“</h3>
                                    <p className="cart-item__variant">Цвят: Мента</p>
                                    <button type="button" className="cart-item__remove">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path
                                                d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6" />
                                        </svg>
                                        Премахни
                                    </button>
                                </div>
                                <div className="cart-item__qty">
                                    <button type="button" className="cart-item__qty-btn"
                                        aria-label="Намали количеството">−</button>
                                    <input type="text" className="cart-item__qty-input" value="1" aria-label="Количество"
                                        inputmode="numeric" />
                                        <button type="button" className="cart-item__qty-btn"
                                            aria-label="Увеличи количеството">+</button>
                                </div>
                                <div className="cart-item__price">
                                    <span className="cart-item__price-current">22.00 лв.</span>
                                </div>
                            </article>

                            <Link to="/catalogue" className="cart-continue">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                                Продължи пазаруването
                            </Link>

                        </div>

                        <aside className="cart-summary">
                            <h2 className="cart-summary__title">Обобщение</h2>

                            <div className="cart-summary__row">
                                <span>Междинна сума</span>
                                <span>84.00 лв.</span>
                            </div>
                            <div className="cart-summary__row">
                                <span>Доставка</span>
                                <span>5.00 лв.</span>
                            </div>

                            <div className="cart-summary__row cart-summary__row--total">
                                <span>Общо</span>
                                <span>89.00 лв.</span>
                            </div>

                            <button type="button" className="btn btn-primary cart-summary__checkout">Продължи към
                                поръчката</button>

                            <p className="cart-summary__note">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="10" rx="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                                Плащането се обработва сигурно.
                            </p>
                        </aside>

                    </div>

                </div>
            </section>

            {/* <section className="section cart-empty" hidden>
                <div className="section__inner cart-empty__inner">
                    <svg className="cart-empty__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                        strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <h2 className="script-heading">Количката ти е празна</h2>
                    <p className="section-sub">Разгледай каталога и открий нещо ръчно рисувано, което ще ти хареса.</p>
                    <a href="catalogue.html" className="btn btn-primary">Разгледай каталога</a>
                </div>
            </section> */}
        </>
    )
}