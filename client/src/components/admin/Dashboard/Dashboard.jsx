import { Link } from "react-router";
import DashProductCard from "./DashProductCard.jsx";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch.js";

export default function Dashboard() {

    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(0);

    useFetch('/products', setProducts, { sort: 'newest', limit: 4 })
    useFetch('/products/count', setProductCount);

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

            <div className="quick-actions">
                <div className="stat-card stat-card--teal">
                    <span className="stat-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                            strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="3" />
                            <circle cx="8.5" cy="8.5" r="1.6" />
                            <path d="M21 15l-5-5L5 21" />
                        </svg>
                    </span>
                    <span className="stat-card__value">{productCount}</span>
                    <span className="stat-card__label">Продукта в каталога</span>
                </div>
                <Link to="/admin/addProduct" className="quick-action-card quick-action-card--primary">
                    <span className="quick-action-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                            strokeLinecap="round">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </span>
                    <span>
                        <span className="quick-action-card__title">Добави продукт</span>
                        <span className="quick-action-card__hint"> Качи нов артикул в каталога</span>
                    </span>
                </Link>
            </div>


            <div className="dash-panels">
                <section className="dash-panel">
                    <div className="dash-panel__head">
                        <h2>Последни продукти</h2>
                        <Link to="/admin/products">Виж всички →</Link>
                    </div>
                    <div className="recent-list">
                        {products ? products.map(product => <DashProductCard key={product.id} {...product} />) : ''}
                    </div>
                </section>

            </div>
        </>

    )
}