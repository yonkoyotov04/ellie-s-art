import { Link } from "react-router";
import AdminPostCard from "./AdminPostCard.jsx";

export default function AdminPosts() {
    return(
        <>
            <div className="dash-content__head">
                <span className="eyebrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 5h16M4 12h16M4 19h10" />
                    </svg>
                    Управление на съдържанието
                </span>
                <h1 className="script-heading dash-content__heading">Публикации</h1>
                <p className="section-sub">Редактирай, скривай или изтривай публикации от страницата.</p>
            </div>

            <div className="table-toolbar">
                <div className="table-search">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.3-4.3" />
                    </svg>
                    <label htmlFor="posts-search" className="sr-only">Търсене в публикациите</label>
                    <input type="search" id="posts-search" placeholder="Търси по текст…" />
                </div>

                <label htmlFor="posts-filter" className="sr-only">Филтър по статус</label>
                <select id="posts-filter" className="table-filter select-input">
                    <option value="">Всички статуси</option>
                    <option value="active">Активни</option>
                    <option value="hidden">Скрити</option>
                </select>

                <Link to="add-post.html" className="btn btn-primary btn-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"
                        width="16" height="16">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                    Добави публикация
                </Link>
            </div>

            <div className="table-panel">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Публикация</th>
                            <th>Дата</th>
                            <th className="col-price">Харесвания</th>
                            <th className="col-price">Коментари</th>
                            <th className="col-status">Статус</th>
                            <th className="col-actions">Действия</th>
                        </tr>
                    </thead>
                    <tbody>

                        <AdminPostCard />
                        <AdminPostCard />
                        <AdminPostCard />
                        <AdminPostCard />
                        <AdminPostCard />
                        
                    </tbody>
                </table>

                <div className="table-pagination">
                    <span>Показани <strong>5</strong> от <strong>18</strong> публикации</span>
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