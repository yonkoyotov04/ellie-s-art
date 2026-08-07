import { Link } from "react-router";
import DashboardProduct from "./DashProductCard.jsx";
import DashboardPosts from "./DashPostCard.jsx";
import DashPostCard from "./DashPostCard.jsx";
import DashProductCard from "./DashProductCard.jsx";

export default function Dashboard() {
    return (
        <>
            <div className="dash-content__head">
                <span className="eyebrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="9" rx="1.5" />
                        <rect x="14" y="3" width="7" height="5" rx="1.5" />
                        <rect x="14" y="12" width="7" height="9" rx="1.5" />
                        <rect x="3" y="16" width="7" height="5" rx="1.5" />
                    </svg>
                    Добре дошла обратно
                </span>
                <h1 className="script-heading dash-content__heading">Табло</h1>
                <p className="section-sub">Преглед на магазина — продукти, публикации и активност на едно място.</p>
            </div>

            <div className="stat-grid">
                <div className="stat-card stat-card--teal">
                    <span className="stat-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                            strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="3" />
                            <circle cx="8.5" cy="8.5" r="1.6" />
                            <path d="M21 15l-5-5L5 21" />
                        </svg>
                    </span>
                    <div>
                        <span className="stat-card__value">24</span>
                        <span className="stat-card__label">Продукта в каталога</span>
                    </div>
                </div>

                <div className="stat-card stat-card--lemon">
                    <span className="stat-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 5h16M4 12h16M4 19h10" />
                        </svg>
                    </span>
                    <div>
                        <span className="stat-card__value">18</span>
                        <span className="stat-card__label">Публикации</span>
                    </div>
                </div>

                <div className="stat-card stat-card--leaf">
                    <span className="stat-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path
                                d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
                        </svg>
                    </span>
                    <div>
                        <span className="stat-card__value">146</span>
                        <span className="stat-card__label">Харесвания тази седмица</span>
                    </div>
                </div>

                <div className="stat-card stat-card--teal">
                    <span className="stat-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                            strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                    </span>
                    <div>
                        <span className="stat-card__value">37</span>
                        <span className="stat-card__label">Продадени артикула този месец</span>
                    </div>
                </div>
            </div>

            <div className="quick-actions">
                <Link to="add-product.html" className="quick-action-card quick-action-card--primary">
                    <span className="quick-action-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                            strokeLinecap="round">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </span>
                    <span>
                        <span className="quick-action-card__title">Добави продукт</span>
                        <span className="quick-action-card__hint">Качи нов артикул в каталога</span>
                    </span>
                </Link>

                <Link to="add-post.html" className="quick-action-card quick-action-card--outline">
                    <span className="quick-action-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                            strokeLinecap="round">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </span>
                    <span>
                        <span className="quick-action-card__title">Добави публикация</span>
                        <span className="quick-action-card__hint">Сподели новина или процес на работа</span>
                    </span>
                </Link>
            </div>


            <div className="dash-panels">

                <section className="dash-panel">
                    <div className="dash-panel__head">
                        <h2>Последни продукти</h2>
                        <Link to="products.html">Виж всички →</Link>
                    </div>
                    <div className="recent-list">
                        <DashProductCard />
                        <DashProductCard />
                        <DashProductCard />
                        <DashProductCard />
                    </div>
                </section>

                <section className="dash-panel">
                    <div className="dash-panel__head">
                        <h2>Последни публикации</h2>
                        <Link to="posts-admin.html">Виж всички →</Link>
                    </div>
                    <div className="recent-list">
                        <DashPostCard />
                        <DashPostCard />
                        <DashPostCard />
                        <DashPostCard />
                       
                    </div>
                </section>

            </div>
        </>

    )
}