import { useContext } from "react";
import { Link } from "react-router";
import AdminContext from "../../../contexts/AdminContext.jsx";
import { useState } from "react";
import EditAdmin from "./EditAdmin.jsx";
import useDelete from "../../../hooks/useDelete.jsx";
import EditPassword from "./EditPassword.jsx";

export default function AdminPage() {
    const { admin } = useContext(AdminContext)
    const [showEdit, setShowEdit] = useState(false);
    const [showEditPassword, setShowEditPassword] = useState(false);
    const { DeletePrompt, onDeleteClick } = useDelete(true, null, null);

    const showEditForm = () => {
        setShowEdit(true);
    }

    const showEditPasswordForm = () => {
        setShowEditPassword(true);
    }

    const hideEditForm = () => {
        setShowEdit(false);
    }

    const hidePasswordEditForm = () => {
        setShowEditPassword(false);
    }

    return (
        <>
            <section className="profile-page-welcome">
                <div className="profile-page-welcome-content">
                    <span className="profile-page-eyebrow">ТВОЕТО ЛИЧНО ПРОСТРАНСТВО</span>

                    <h1>Радваме се да те видим!</h1>

                    <p>
                        Тук можеш да управляваш своя администраторски акаунт,
                        да актуализираш личните си данни и да се погрижиш
                        за сигурността му.
                    </p>
                </div>

                <div className="profile-page-decoration">
                    <span>♡</span>
                </div>
            </section>

            <section className="profile-page-card">

                <div className="profile-page-card-heading">
                    <div>
                        <span className="profile-page-section-eyebrow">МОЯТ АКАУНТ</span>
                        <h2>Лична информация</h2>
                    </div>

                    <span className="profile-page-account-label">
                        <span></span>
                        Администратор
                    </span>
                </div>

                <div className="profile-page-identity">

                    <div className="profile-page-avatar">
                        <span>{admin ? admin.first_name[0] : '?'}</span>
                        <div className="profile-page-avatar-decoration">✿</div>
                    </div>

                    <div className="profile-page-identity-info">
                        <h3>{admin ? `${admin?.first_name} ${admin?.last_name}` : 'Име Фамилия'}</h3>
                        <p>{admin ? `${admin?.email}` : 'email@example.com'}</p>

                        <span className="profile-page-role">
                            <svg viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2 19 5v6c0 5-3.5 8.5-7 11-3.5-2.5-7-6-7-11V5z" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                            Администраторски акаунт
                        </span>
                    </div>

                </div>

                <div className="profile-page-details">

                    <div className="profile-page-detail">
                        <span>Име</span>
                        <strong>{admin ? `${admin?.first_name}` : 'Име'}</strong>
                    </div>

                    <div className="profile-page-detail">
                        <span>Фамилия</span>
                        <strong>{admin ? `${admin?.last_name}` : 'Фамилия'}</strong>
                    </div>

                    <div className="profile-page-detail profile-page-detail-full">
                        <span>Имейл адрес</span>
                        <strong>{admin ? `${admin?.email}` : 'email@example.com'}</strong>
                    </div>

                </div>

                <div className="profile-page-actions">

                    <div className="profile-page-action-card">
                        <div className="profile-page-action-icon profile-page-action-icon-yellow">
                            <svg viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                            </svg>
                        </div>

                        <div className="profile-page-action-info">
                            <h3>Лични данни</h3>
                            <p>Промени името или имейл адреса си.</p>
                        </div>

                        <button
                            type="button"
                            className="profile-page-action-button"
                            onClick={showEditForm}>
                            Редактирай
                            <span>→</span>
                        </button>
                    </div>


                    <div className="profile-page-action-card">
                        <div className="profile-page-action-icon profile-page-action-icon-pink">
                            <svg viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="10" rx="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </div>

                        <div className="profile-page-action-info">
                            <h3>Сигурност</h3>
                            <p>Обнови паролата си, за да защитиш акаунта.</p>
                        </div>

                        <button
                            type="button"
                            className="profile-page-action-button"
                            onClick={showEditPasswordForm}>
                            Смени паролата
                            <span>→</span>
                        </button>
                    </div>

                </div>

            </section>

            <section className="profile-page-danger">

                <div className="profile-page-danger-icon">
                    <svg viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18" />
                        <path d="M8 6V4h8v2" />
                        <path d="M19 6l-1 14H6L5 6" />
                        <path d="M10 11v5m4-5v5" />
                    </svg>
                </div>

                <div className="profile-page-danger-info">
                    <h3>Изтриване на акаунта</h3>
                    <p>
                        Това действие е необратимо. Всички данни, свързани
                        с администраторския акаунт, могат да бъдат загубени.
                    </p>
                </div>

                <button
                    type="button"
                    className="profile-page-delete-button"
                    onClick={() => { onDeleteClick(admin?.id) }}>
                    Изтрий акаунта
                </button>

            </section>
            {showEdit ? <EditAdmin hide={hideEditForm} /> : ''}
            {showEditPassword ? <EditPassword hide={hidePasswordEditForm} /> : ''}
            {DeletePrompt}

        </>
    )
}