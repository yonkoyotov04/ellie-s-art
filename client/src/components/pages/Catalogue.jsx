import { Link } from "react-router";
import ProductCard from "../products/ProductCard.jsx";
import { useState } from "react";
import useFetch from "../../hooks/useFetch.js";

export default function Catalogue() {

    const [products, setProducts] = useState([]);

    useFetch('/products', setProducts)

    return (
        <>
            <section className="page-header section--tint">
                <div className="page-header__inner">
                    <span className="eyebrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

            <svg className="citrus-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ color: 'var(--lemon-100)' }}>
                <path
                    d="M0 30 Q 50 60 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 V0 H0 Z"
                    fill="currentColor" />
            </svg>

            <div className="catalogue-toolbar">
                <div className="search-field">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.3-4.3" />
                    </svg>
                    <label htmlFor="catalogue-search" className="sr-only">Търсене в каталога</label>
                    <input type="search" id="catalogue-search" placeholder="Търси продукт, напр. „лимон“ или „картичка“…" />
                </div>

                <div className="sort-field">
                    <label htmlFor="catalogue-sort">Подреди по:</label>
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
                <Link to="/categories" className="chip is-selected">
                    Всички
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </Link>
                <Link to="catalogue.html?category=paintings" className="chip">Картини</Link>
                <Link to="catalogue.html?category=cards" className="chip">Картички</Link>
                <Link to="catalogue.html?category=ceramics" className="chip">Керамика</Link>
                <Link to="catalogue.html?category=accessories" className="chip">Аксесоари</Link>
                <Link to="catalogue.html?category=gifts" className="chip">Комплекти подаръци</Link>
            </div>

            <div className="results-row">
                <span>Показани <strong>12</strong> от <strong>48</strong> продукта</span>
            </div>

            <section className="catalogue-section">
                <div className="catalogue-section__inner">
                    <div className="product-grid">
                        {products.length > 0
                            ?
                            products.map(product => <ProductCard key={product.id} {...product} />)
                            :
                            <div className="empty-state">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                                <h3>Няма намерени продукти</h3>
                                <p>Опитай с друга дума за търсене или премахни някой от филтрите.</p>
                            </div>
                        }


                    </div>

                    <nav className="pagination" aria-label="Странициране">
                        <Link to="#" className="pagination-arrow" aria-label="Предишна страница">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                strokeLinecap="round" strokeLinejoin="round">
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
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </Link>
                    </nav>

                </div>
            </section>
        </>
    )
}