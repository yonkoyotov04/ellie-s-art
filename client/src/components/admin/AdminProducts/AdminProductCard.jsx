import { Link } from "react-router";
import useFetch from "../../../hooks/useFetch.js";
import { useContext } from "react";
import AdminContext from "../../../contexts/AdminContext.jsx";
import { useState } from "react";

export default function AdminProductCard({ id, title, price, image, category, active, deleteTrigger }) {

    const apiURL = 'http://localhost:2105/';
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
        <>
            <tr>
                <td>
                    <div className="table-product">
                        <span className="table-product__media">
                            {image
                                ?
                                <img src={`${apiURL}${image}`} />
                                :
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                    <rect x="3" y="3" width="18" height="18" rx="3" />
                                    <circle cx="8.5" cy="8.5" r="1.6" />
                                    <path d="M21 15l-5-5L5 21" />
                                </svg>}

                        </span>
                        <span>
                            <span className="table-product__name">{title}</span><br />
                            <span className="table-product__id">ID: {id}</span>
                        </span>
                    </div>
                </td>
                <td>{category}</td>
                <td className="col-price">
                    <span className="table-price">{price} €</span>
                </td>
                <td className="col-status">
                    <span className={`status-badge ${activeStatus ? 'status-badge--active' : 'status-badge--hidden'}`}>
                        {activeStatus ? 'Активен' : 'Неактивен'}
                    </span>
                </td>
                <td className="col-actions">
                    <span className="row-actions">
                        <button type="button"
                            className="row-edit"
                            onClick={ activeStatus ? deactivateProduct : activateProduct}
                            aria-label={activeStatus ? 'Деактивирай' : 'Активирай'}>
                            {activeStatus ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path
                                    d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                                <path d="M1 1l22 22" />
                            </svg>
                                :
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>}
                        </button>
                        <Link to={`/admin/products/${id}/edit`} className="row-edit" aria-label="Редактирай">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                            </svg>
                        </Link>
                        <button type="button" className="row-delete" onClick={() => { deleteTrigger(id) }} aria-label="Изтрий">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path
                                    d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6" />
                            </svg>
                        </button>
                    </span>
                </td>
            </tr>
        </>
    )
}