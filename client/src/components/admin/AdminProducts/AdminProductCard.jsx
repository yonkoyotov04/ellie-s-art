import { Link } from "react-router";

export default function AdminProductCard({ id, title, price, image, category }) {

    const apiURL = 'http://localhost:2105/';

    return (
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
            <td className="col-price"><span className="table-price">{price} €</span></td>
            <td className="col-status"><span className="status-badge status-badge--active">Активен</span></td>
            <td className="col-actions">
                <span className="row-actions">
                    <Link to="add-product.html" className="row-edit" aria-label="Редактирай">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                        </svg>
                    </Link>
                    <button type="button" className="row-delete" aria-label="Изтрий">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path
                                d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6" />
                        </svg>
                    </button>
                </span>
            </td>
        </tr>
    )
}