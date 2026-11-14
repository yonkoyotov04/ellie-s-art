import { Link } from "react-router";
import DashProductCard from "./DashProductCard.jsx";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch.js";

export default function Dashboard() {

    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(0);

    useFetch('/products', setProducts, { active: true, sort: 'newest', limit: 4 })
    useFetch('/products/count', setProductCount);

    return (

        <>
            <section className="dashboard-welcome">
                <div>
                    <span className="dashboard-eyebrow">ТАБЛО ЗА УПРАВЛЕНИЕ</span>
                    <h1>Добре дошла обратно!</h1>
                </div>
            </section>

            <section className="dashboard-overview">

                <div className="dashboard-stat-card">
                    <div className="dashboard-stat-info">
                        <span className="dashboard-card-label">ОБЩО ПРОДУКТИ</span>
                        <h2>{productCount}</h2>
                        <p>Продукта в твоя каталог</p>
                    </div>

                    <div className="dashboard-stat-icon">
                        <span>▤</span>
                    </div>
                </div>

                <div className="dashboard-add-card">
                    <div className="dashboard-add-info">
                        <span className="dashboard-card-label">ИМАШ НЕЩО НОВО?</span>
                        <h2>Добави ново творение!</h2>
                        <p>
                            Сподели следващата си идея с всички,
                            които обичат твоите ръчни изделия.
                        </p>
                    </div>

                    <Link to="/admin/addProduct" className="dashboard-add-link">
                        <span>＋</span>
                        Добави продукт
                    </Link>
                </div>

            </section>

            <section className="dashboard-latest">

                <div className="dashboard-section-heading">
                    <div>
                        <span className="dashboard-eyebrow">ТВОИТЕ ПОСЛЕДНИ ТВОРЕНИЯ</span>
                        <h2>Най-новите продукти</h2>
                        <p>Четирите продукта, които последно добави в каталога.</p>
                    </div>

                    <Link to="/admin/products" className="dashboard-view-all">
                        Всички продукти
                        <span>→</span>
                    </Link>
                </div>

                <div className="dashboard-products-list">

                    {products ? products.map(product => <DashProductCard key={product.id} {...product} />) : ''}

                </div>
            </section>
        </>

    )
}