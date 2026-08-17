import { Link, useFetcher } from "react-router";
import AdminProductCard from "./AdminProductCard.jsx";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch.js";

export default function AdminProducts() {

    const [products, setProducts] = useState([]);
    useFetch('/products', setProducts);

    return (
        <>
            <div className="dash-content__head">
                <span className="eyebrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <circle cx="8.5" cy="8.5" r="1.6" />
                        <path d="M21 15l-5-5L5 21" />
                    </svg>
                    Управление на каталога
                </span>
                <h1 className="script-heading dash-content__heading">Продукти</h1>
                <p className="section-sub">Редактирай, скривай или изтривай продукти от магазина.</p>
            </div>

            <div className="table-toolbar">
                <div className="table-search">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.3-4.3" />
                    </svg>
                    <label htmlFor="products-search" className="sr-only">Търсене на продукт</label>
                    <input type="search" id="products-search" placeholder="Търси по име…" />
                </div>

                <label htmlFor="products-filter" className="sr-only">Филтър по категория</label>
                <select id="products-filter" className="table-filter select-input">
                    <option value="">Всички категории</option>
                    <option value="platna">Платна</option>
                    <option value="kartichki">Картички</option>
                    <option value="keramika">Керамика</option>
                    <option value="portreti">Портрети по поръчка</option>
                </select>

                <Link to="/admin/products/add" className="btn btn-primary btn-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"
                        width="16" height="16">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                    Добави продукт
                </Link>
            </div>

            <div className="table-panel">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Продукт</th>
                            <th>Категория</th>
                            <th className="col-price">Цена</th>
                            <th className="col-status">Статус</th>
                            <th className="col-actions">Действия</th>
                        </tr>
                    </thead>
                    <tbody>

                        {products.map(product => <AdminProductCard key={product.id} {...product} />)}

                    </tbody>
                </table>

                <div className="table-pagination">
                    <span>Показани <strong>6</strong> от <strong>24</strong> продукта</span>
                    <div className="table-pagination__pages">
                        <span className="is-current">1</span>
                        <Link to="#">2</Link>
                        <Link to="#">3</Link>
                        <Link to="#">4</Link>
                    </div>
                </div>
            </div>
        </>
    )
}