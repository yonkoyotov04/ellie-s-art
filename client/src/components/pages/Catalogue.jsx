import { Link } from "react-router";
import ProductCard from "../products/ProductCard.jsx";

export default function Catalogue() {
    return (
        <>
            <section className="page-header section--tint">
                <div className="page-header__inner">
                    <span className="eyebrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="7" />
                            <path d="M21 21l-4.3-4.3" />
                        </svg>
                        Цялото ателие на едно място
                    </span>
                    <h1 className="script-heading">Каталог</h1>
                    <p className="section-sub">Разгледай всички ръчно рисувани творби и авторски подаръци — от платна до
                        картички и керамика.</p>
                </div>
            </section>

            <svg className="citrus-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{color:'var(--lemon-100)'}}>
                <path
                    d="M0 30 Q 50 60 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 V0 H0 Z"
                    fill="currentColor" />
            </svg>

            <div className="catalogue-toolbar">
                <div className="search-field">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.3-4.3" />
                    </svg>
                    <label htmlFor="catalogue-search" className="sr-only">Търсене в каталога</label>
                    <input type="search" id="catalogue-search" placeholder="Търси продукт, напр. „лимон“ или „картичка“…" />
                </div>

                <div className="sort-field">
                    <label for="catalogue-sort">Подреди по:</label>
                    <select id="catalogue-sort">
                        <option value="newest">Най-нови</option>
                        <option value="bestselling">Най-продавани</option>
                        <option value="price-asc">Цена: ниска към висока</option>
                        <option value="price-desc">Цена: висока към ниска</option>
                        <option value="name-asc">Име: А–Я</option>
                        <option value="name-asc">Име: Я–А</option>
                    </select>
                </div>
            </div>

            <div className="filter-chips">
                <a to="categories.html" className="chip is-selected">
                    Всички
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </a>
                <a to="catalogue.html?category=paintings" className="chip">Картини</a>
                <a to="catalogue.html?category=cards" className="chip">Картички</a>
                <a to="catalogue.html?category=ceramics" className="chip">Керамика</a>
                <a to="catalogue.html?category=accessories" className="chip">Аксесоари</a>
                <a to="catalogue.html?category=gifts" className="chip">Комплекти подаръци</a>
            </div>

            <div className="results-row">
                <span>Показани <strong>12</strong> от <strong>48</strong> продукта</span>
            </div>

            <section className="catalogue-section">
                <div className="catalogue-section__inner">
                    <div className="product-grid">

                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        
                    </div>

                    <nav className="pagination" aria-label="Странициране">
                        <Link to="#" className="pagination-arrow" aria-label="Предишна страница">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </Link>
                        <span className="is-current">1</span>
                        <Link to="#">2</Link>
                        <Link to="#">3</Link>
                        <Link to="#">4</Link>
                        <span className="pagination-dots">…</span>
                        <Link to="#">12</Link>
                        <Link to="#" className="pagination-arrow" aria-label="Следваща страница">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </Link>
                    </nav>

                    {/* <div className="empty-state">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                        <h3>Няма намерени продукти</h3>
                        <p>Опитай с друга дума за търсене или премахни някой от филтрите.</p>
                    </div> */}

                </div>
            </section>
        </>
    )
}