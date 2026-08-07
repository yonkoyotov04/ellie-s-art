import { Link } from "react-router"

export default function AdminPostCard() {
    return (
        <tr>
            <td>
                <div className="table-product">
                    <span className="table-product__media recent-item__media--post">Е</span>
                    <span>
                        <span className="table-product__name">Нова партида лимонови акварели съхне на
                            масата! 🍋🎨</span><br />
                        <span className="table-product__id">ID: POST-001</span>
                    </span>
                </div>
            </td>
            <td>преди 2 часа</td>
            <td className="col-price"><span className="table-price">128</span></td>
            <td className="col-price"><span className="table-price">32</span></td>
            <td className="col-status"><span className="status-badge status-badge--active">Активна</span></td>
            <td className="col-actions">
                <span className="row-actions">
                    <Link to="add-post.html" className="row-edit" aria-label="Редактирай">
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