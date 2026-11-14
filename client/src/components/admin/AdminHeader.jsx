import { useContext } from "react";
import { Link } from "react-router";
import AdminContext from "../../contexts/AdminContext.jsx";

export default function AdminHeader() {
    const { logoutHandler } = useContext(AdminContext);

    return (

        <header className="admin-header">

            <div className="admin-header-brand">
                <Link to="/" className="admin-header-logo">
                    <img src="/logo.png" alt="Ellie's Art" />
                </Link>

                <div className="admin-header-divider"></div>

                <div className="admin-header-title">
                    <h2>Панел за управление</h2>
                    <p>Добре дошла в своето творческо пространство!</p>
                </div>
            </div>

            <div className="admin-header-actions">
                <Link to="/" className="admin-header-home">
                    <span>↗</span>
                    Към сайта
                </Link>

                <button onClick={logoutHandler} className="admin-header-logout">
                    <span>⇥</span>
                    Изход
                </button>
            </div>

        </header>
    )
}