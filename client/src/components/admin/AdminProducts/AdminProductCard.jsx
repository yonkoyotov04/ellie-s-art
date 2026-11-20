import { Link } from "react-router";
import useFetch from "../../../hooks/useFetch.js";
import { useContext } from "react";
import AdminContext from "../../../contexts/AdminContext.jsx";
import { useState } from "react";

export default function AdminProductCard({ id, title, price, image, category, active, added_on, clicks, deleteTrigger }) {

    const apiURL = 'http://localhost:2105/uploads/';
    const { fetcher } = useFetch();
    const { admin } = useContext(AdminContext);
    const [activeStatus, setActiveStatus] = useState(active);

    const deactivateProduct = async () => {
        await fetcher(`/products/${id}/deactivate`, 'PUT', null, { accessToken: admin.accessToken });
        setActiveStatus(false);
    }

    const activateProduct = async () => {
        await fetcher(`/products/${id}/activate`, 'PUT', null, { accessToken: admin.accessToken });
        setActiveStatus(true);
    }

    return (

        <article className="products-item">

            <div className="products-item-image">
                {image
                    ?
                    <img src={`${apiURL}${image}`} alt="Ръчно изработена декорация" />
                    :
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <circle cx="8.5" cy="8.5" r="1.6" />
                        <path d="M21 15l-5-5L5 21" />
                    </svg>}

            </div>

            <div className="products-item-info">
                <h3>{title}</h3>
                <span className="products-item-id">ID: #{id}</span>
                <span className="products-item-id">Популярност: {clicks}</span>
            </div>

            <div className="products-item-category">
                <span className="products-mobile-label">Категория</span>
                <span>{category}</span>
            </div>

            <div className="products-item-price">
                <span className="products-mobile-label">Цена</span>
                <strong>{price} €</strong>
            </div>

            <div className="products-item-status">
                <span className={`products-status ${activeStatus ? 'products-status-active' : 'products-status-inactive'}`}>
                    <span className="products-status-dot"></span>
                    {activeStatus ? 'Активен' : 'Неактивен'}
                </span>
            </div>

            <div className="products-item-actions">
                <button
                    onClick={activeStatus ? deactivateProduct : activateProduct}
                    className="products-action products-toggle-button"
                    title={activeStatus ? "Деактивирай продукта" : "Активирай продукта"}>
                    <span>◉</span>
                </button>

                <Link to={`/admin/products/${id}/edit`} className="products-action products-edit-button"
                    title="Редактирай продукта">
                    <span>✎</span>
                </Link>

                <button onClick={() => {deleteTrigger(id)}} className="products-action products-delete-button" title="Изтрий продукта">
                    <span>×</span>
                </button>
            </div>

        </article>
    )
}