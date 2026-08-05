import { Link } from "react-router";

export default function Categories() {
    return (
        <>
            <section className="page-header section--tint">
                <div className="page-header__inner">
                    <span className="eyebrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="7" height="7" rx="1.5" />
                            <rect x="14" y="3" width="7" height="7" rx="1.5" />
                            <rect x="3" y="14" width="7" height="7" rx="1.5" />
                            <rect x="14" y="14" width="7" height="7" rx="1.5" />
                        </svg>
                        Разгледай по вид
                    </span>
                    <h1 className="script-heading">Категории</h1>
                    <p className="section-sub">Избери категория, за да откриеш точните творби за теб — от платна до дребни
                        авторски подаръци.</p>
                </div>
            </section>

            <svg className="citrus-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{color:'var(--lemon-100)'}}>
                <path
                    d="M0 30 Q 50 60 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 V0 H0 Z"
                    fill="currentColor" />
            </svg>

            <section className="category-grid">

                <Link to="catalogue.html?category=paintings" className="category-card">
                    <div className="category-card__media">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <rect x="3" y="3" width="18" height="18" rx="3" />
                            <circle cx="8.5" cy="8.5" r="1.6" />
                            <path d="M21 15l-5-5L5 21" />
                        </svg>
                        <span className="category-card__count">18 продукта</span>
                        <span className="category-card__title">Картини</span>
                    </div>
                    <div className="category-card__body">
                        <p className="category-card__desc">Оригинални платна и авторски рисунки — от малки скици до големи
                            декоративни платна за дома.</p>
                        <span className="category-card__link">
                            Разгледай категорията
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </span>
                    </div>
                </Link>

                <Link to="catalogue.html?category=cards" className="category-card">
                    <div className="category-card__media">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <rect x="3" y="3" width="18" height="18" rx="3" />
                            <circle cx="8.5" cy="8.5" r="1.6" />
                            <path d="M21 15l-5-5L5 21" />
                        </svg>
                        <span className="category-card__count">24 продукта</span>
                        <span className="category-card__title">Картички</span>
                    </div>
                    <div className="category-card__body">
                        <p className="category-card__desc">Ръчно рисувани картички за всеки повод — рождени дни, празници или
                            просто, за да зарадваш някого.</p>
                        <span className="category-card__link">
                            Разгледай категорията
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </span>
                    </div>
                </Link>

                <Link to="catalogue.html?category=ceramics" className="category-card">
                    <div className="category-card__media">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <rect x="3" y="3" width="18" height="18" rx="3" />
                            <circle cx="8.5" cy="8.5" r="1.6" />
                            <path d="M21 15l-5-5L5 21" />
                        </svg>
                        <span className="category-card__count">9 продукта</span>
                        <span className="category-card__title">Керамика</span>
                    </div>
                    <div className="category-card__body">
                        <p className="category-card__desc">Чаши, чинийки и малки съдове, изрисувани на ръка — уникални парчета
                            за кухнята или като подарък.</p>
                        <span className="category-card__link">
                            Разгледай категорията
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </span>
                    </div>
                </Link>

                <Link to="catalogue.html?category=accessories" className="category-card">
                    <div className="category-card__media">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <rect x="3" y="3" width="18" height="18" rx="3" />
                            <circle cx="8.5" cy="8.5" r="1.6" />
                            <path d="M21 15l-5-5L5 21" />
                        </svg>
                        <span className="category-card__count">15 продукта</span>
                        <span className="category-card__title">Аксесоари</span>
                    </div>
                    <div className="category-card__body">
                        <p className="category-card__desc">Гривни, магнити и малки бижута с ръчно рисовани детайли — за да носиш
                            изкуство със себе си.</p>
                        <span className="category-card__link">
                            Разгледай категорията
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </span>
                    </div>
                </Link>

                <Link to="catalogue.html?category=gifts" className="category-card">
                    <div className="category-card__media">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <rect x="3" y="3" width="18" height="18" rx="3" />
                            <circle cx="8.5" cy="8.5" r="1.6" />
                            <path d="M21 15l-5-5L5 21" />
                        </svg>
                        <span className="category-card__count">7 продукта</span>
                        <span className="category-card__title">Комплекти подаръци</span>
                    </div>
                    <div className="category-card__body">
                        <p className="category-card__desc">Готови комплекти от няколко продукта, опаковани и готови за подарък —
                            просто избери и поръчай.</p>
                        <span className="category-card__link">
                            Разгледай категорията
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </span>
                    </div>
                </Link>

                <Link to="catalogue.html?category=stationery" className="category-card">
                    <div className="category-card__media">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <rect x="3" y="3" width="18" height="18" rx="3" />
                            <circle cx="8.5" cy="8.5" r="1.6" />
                            <path d="M21 15l-5-5L5 21" />
                        </svg>
                        <span className="category-card__count">11 продукта</span>
                        <span className="category-card__title">Скицници и хартия</span>
                    </div>
                    <div className="category-card__body">
                        <p className="category-card__desc">Скицници, тефтери и хартиени изделия с илюстрации на Ели — за
                            собствено вдъхновение или подарък.</p>
                        <span className="category-card__link">
                            Разгледай категорията
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </span>
                    </div>
                </Link>
            </section>
        </>

    )
}