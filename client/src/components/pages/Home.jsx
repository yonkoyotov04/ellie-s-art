import { Link } from "react-router"

export default function Home() {

    return (
        <>
            <section className="section section--tint">
                <div className="latest_posts__inner">
                    <span className="eyebrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v20M2 12h20" />
                        </svg>
                        Свежо от ателието
                    </span>
                    <h1 className="latest_posts__heading script-heading">Последни публикации</h1>
                    <p className="latest_posts__sub section-sub">Погледни какво ново изработва Ели тази седмица — истории,
                        снимки от
                        процеса и завършени творби, направо от нейната страница.</p>

                    <div className="post-carousel">
                        <button className="carousel-arrow" aria-label="Предишна публикация">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        <article className="post-card">
                            <div className="post-card__media" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                    <rect x="3" y="3" width="18" height="18" rx="3" />
                                    <circle cx="8.5" cy="8.5" r="1.6" />
                                    <path d="M21 15l-5-5L5 21" />
                                </svg>
                            </div>
                            <div className="post-card__body">
                                <div className="post-card__author">
                                    <span className="post-card__avatar">Е</span>
                                    <span className="post-card__author-meta">
                                        <strong>Ели · Ellie Art</strong><br />
                                            <span>преди 2 часа</span>
                                    </span>
                                </div>
                                <p className="post-card__text">Нова картина от поредицата „Цитрусова градина“ вече суши боите
                                    си! Вдъхновена е от лятото и мириса на прясно откъснати лимони. Скоро ще я добавя и в
                                    каталога 🍋🎨</p>
                                <div className="post-card__stats">
                                    <span>24 харесвания</span>
                                    <span>8 коментара</span>
                                </div>
                                <div className="post-card__actions">
                                    <button type="button">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path
                                                d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
                                        </svg>
                                        Харесай
                                    </button>
                                    <button type="button">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path
                                                d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1-5.5a8.38 8.38 0 0 1-1-4A8.5 8.5 0 0 1 11.5 3 8.38 8.38 0 0 1 21 11.5Z" />
                                        </svg>
                                        Коментирай
                                    </button>
                                </div>
                            </div>
                        </article>

                        <button className="carousel-arrow" aria-label="Следваща публикация">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>

                    <div className="carousel-dots">
                        <span className="is-active"><svg viewBox="0 0 24 24" fill="#F2A900">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20M12 2v20" stroke="#FFFBF2" strokeWidth="1.4" />
                        </svg></span>
                        <span><svg viewBox="0 0 24 24" fill="#1B8A80">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20M12 2v20" stroke="#FFFBF2" strokeWidth="1.4" />
                        </svg></span>
                        <span><svg viewBox="0 0 24 24" fill="#1B8A80">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20M12 2v20" stroke="#FFFBF2" strokeWidth="1.4" />
                        </svg></span>
                    </div>
                </div>
            </section>

            <svg className="citrus-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{color: 'var(--lemon-100)'}}>
                <path
                    d="M0 30 Q 50 60 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 V0 H0 Z"
                    fill="currentColor" />
            </svg>

            <svg className="citrus-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{color: 'var(--lemon-100)'}}>
                <path
                    d="M0 30 Q 50 0 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 V60 H0 Z"
                    fill="currentColor" />
            </svg>

            <section className="section section--tint">
                <div className="section__inner">
                    <div className="section__head">
                        <div className="section__head-text">
                            <span className="eyebrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5z" />
                                </svg>
                                Току-що пристигнали
                            </span>
                            <h2 className="script-heading">Нови продукти</h2>
                        </div>
                        <Link to="catalogue.html?sort=newest" className="btn btn-outline">Разгледай всички →</Link>
                    </div>

                    <div className="product-grid">

                        <article className="product-card">
                            <div className="product-card__media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="1.6">
                                <rect x="3" y="3" width="18" height="18" rx="3" />
                                <circle cx="8.5" cy="8.5" r="1.6" />
                                <path d="M21 15l-5-5L5 21" />
                            </svg></div>
                            <span className="badge">Ново</span>
                            <div className="product-card__body">
                                <h3 className="product-card__name">Лимонова градина — платно 30×40</h3>
                                <div className="product-card__meta">
                                    <span className="product-card__price">45.00 лв.</span>
                                    <button className="product-card__add" aria-label="Добави в количката">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                            strokeLinecap="round">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>

                        <article className="product-card">
                            <div className="product-card__media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="1.6">
                                <rect x="3" y="3" width="18" height="18" rx="3" />
                                <circle cx="8.5" cy="8.5" r="1.6" />
                                <path d="M21 15l-5-5L5 21" />
                            </svg></div>
                            <span className="badge">Ново</span>
                            <div className="product-card__body">
                                <h3 className="product-card__name">Ръчно рисована картичка „Цветя“</h3>
                                <div className="product-card__meta">
                                    <span className="product-card__price">8.50 лв.</span>
                                    <button className="product-card__add" aria-label="Добави в количката">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                            strokeLinecap="round">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>

                        <article className="product-card">
                            <div className="product-card__media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="1.6">
                                <rect x="3" y="3" width="18" height="18" rx="3" />
                                <circle cx="8.5" cy="8.5" r="1.6" />
                                <path d="M21 15l-5-5L5 21" />
                            </svg></div>
                            <span className="badge">Ново</span>
                            <div className="product-card__body">
                                <h3 className="product-card__name">Керамична чаша „Клонка мента“</h3>
                                <div className="product-card__meta">
                                    <span className="product-card__price">22.00 лв.</span>
                                    <button className="product-card__add" aria-label="Добави в количката">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                            strokeLinecap="round">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>

                        <article className="product-card">
                            <div className="product-card__media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="1.6">
                                <rect x="3" y="3" width="18" height="18" rx="3" />
                                <circle cx="8.5" cy="8.5" r="1.6" />
                                <path d="M21 15l-5-5L5 21" />
                            </svg></div>
                            <span className="badge">Ново</span>
                            <div className="product-card__body">
                                <h3 className="product-card__name">Мини скицник — акварел</h3>
                                <div className="product-card__meta">
                                    <span className="product-card__price">14.00 лв.</span>
                                    <button className="product-card__add" aria-label="Добави в количката">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                            strokeLinecap="round">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </section>

            <svg className="citrus-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{color: 'var(--lemon-100)'}}>
                <path
                    d="M0 30 Q 50 60 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 V0 H0 Z"
                    fill="currentColor" />
            </svg>

            <svg className="citrus-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{color: 'var(--lemon-100)'}}>
                <path
                    d="M0 30 Q 50 0 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 V60 H0 Z"
                    fill="currentColor" />
            </svg>

            <section className="section section--tint">
                <div className="section__inner">
                    <div className="section__head">
                        <div className="section__head-text">
                            <span className="eyebrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5z" />
                                </svg>
                                Любимците на клиентите
                            </span>
                            <h2 className="script-heading">Най-продавани</h2>
                        </div>
                        <a to="catalogue.html?sort=bestselling" className="btn btn-outline">Разгледай всички →</a>
                    </div>

                    <div className="product-grid">

                        <article className="product-card">
                            <div className="product-card__media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="1.6">
                                <rect x="3" y="3" width="18" height="18" rx="3" />
                                <circle cx="8.5" cy="8.5" r="1.6" />
                                <path d="M21 15l-5-5L5 21" />
                            </svg></div>
                            <span className="badge badge--bestseller">Бестселър</span>
                            <div className="product-card__body">
                                <h3 className="product-card__name">Портрет по поръчка — акварел</h3>
                                <div className="product-card__meta">
                                    <span className="product-card__price">65.00 лв.</span>
                                    <button className="product-card__add" aria-label="Добави в количката">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                            strokeLinecap="round">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>

                        <article className="product-card">
                            <div className="product-card__media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="1.6">
                                <rect x="3" y="3" width="18" height="18" rx="3" />
                                <circle cx="8.5" cy="8.5" r="1.6" />
                                <path d="M21 15l-5-5L5 21" />
                            </svg></div>
                            <span className="badge badge--bestseller">Бестселър</span>
                            <div className="product-card__body">
                                <h3 className="product-card__name">Комплект картички „Пролет“ (6бр.)</h3>
                                <div className="product-card__meta">
                                    <span className="product-card__price">38.00 лв.</span>
                                    <button className="product-card__add" aria-label="Добави в количката">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                            strokeLinecap="round">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>

                        <article className="product-card">
                            <div className="product-card__media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="1.6">
                                <rect x="3" y="3" width="18" height="18" rx="3" />
                                <circle cx="8.5" cy="8.5" r="1.6" />
                                <path d="M21 15l-5-5L5 21" />
                            </svg></div>
                            <span className="badge badge--bestseller">Бестселър</span>
                            <div className="product-card__body">
                                <h3 className="product-card__name">Лимонов венец — платно 20×20</h3>
                                <div className="product-card__meta">
                                    <span className="product-card__price">32.00 лв.</span>
                                    <button className="product-card__add" aria-label="Добави в количката">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                            strokeLinecap="round">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>

                        <article className="product-card">
                            <div className="product-card__media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="1.6">
                                <rect x="3" y="3" width="18" height="18" rx="3" />
                                <circle cx="8.5" cy="8.5" r="1.6" />
                                <path d="M21 15l-5-5L5 21" />
                            </svg></div>
                            <span className="badge badge--bestseller">Бестселър</span>
                            <div className="product-card__body">
                                <h3 className="product-card__name">Магнити „Ботаника“ — комплект 4бр.</h3>
                                <div className="product-card__meta">
                                    <span className="product-card__price">18.00 лв.</span>
                                    <button className="product-card__add" aria-label="Добави в количката">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                            strokeLinecap="round">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </section>
        </>
    )
}