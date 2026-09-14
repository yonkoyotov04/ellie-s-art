import { useContext } from "react";
import { Link } from "react-router";
import AdminContext from "../../../contexts/AdminContext.jsx";
import { useState } from "react";
import EditAdmin from "./EditAdmin.jsx";
import useDelete from "../../../hooks/useDelete.jsx";

export default function AdminPage() {
    const { admin } = useContext(AdminContext)
    const [showEdit, setShowEdit] = useState(false);
    const {DeletePrompt, onDeleteClick} = useDelete(true, null, null);

    const showEditForm = () => {
        setShowEdit(true);
    }

    const hideEditForm = () => {
        setShowEdit(false);
    }

    return (
        <>
            <div className="dash-content__head">
                <span className="eyebrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                    </svg>
                    Твоят акаунт
                </span>
                <h1 className="script-heading dash-content__heading">Профил</h1>
                <p className="section-sub">Данните на администраторския акаунт.</p>
            </div>

            <section className="profile-card">
                <div className="profile-card__header">
                    <span className="profile-card__avatar">{admin ? admin.first_name[0] : '?'}</span>
                    <div className="profile-card__meta">
                        <h2 className="profile-card__name">{admin ? `${admin.first_name} ${admin.last_name}` : 'Име Фамилия'}</h2>
                        <p className="profile-card__email">{admin ? admin.email : 'email@example.com'}</p>
                        <span className="profile-card__badge">Администратор</span>
                    </div>
                </div>

                <div className="profile-card__actions">
                    <button type="button" onClick={showEditForm} className="btn btn-outline">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                        </svg>
                        Редактирай данните
                    </button>

                    <Link to="/admin/profile/change-password" className="btn btn-ghost">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="10" rx="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        Смени паролата
                    </Link>

                    <button type="button" onClick={() => onDeleteClick(admin.id)} className="btn btn-danger">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6" />
                        </svg>
                        Изтрий акаунта
                    </button>
                </div>
            </section>
            {showEdit ? <EditAdmin hide={hideEditForm} /> : ''}
            {DeletePrompt}
        </>
    )
}