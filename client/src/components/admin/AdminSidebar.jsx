import { useContext } from "react";
import { NavLink } from "react-router";
import AdminContext from "../../contexts/AdminContext.jsx";

export default function AdminSideBar() {
    const { isAuthenticated } = useContext(AdminContext);
    return (
        <aside className="admin-sidebar">

            <div className="admin-sidebar-heading">
                <span>РАБОТНО ПРОСТРАНСТВО</span>
            </div>

            <nav className="admin-sidebar-navigation">

                <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'admin-sidebar-link active' : 'admin-sidebar-link'}>
                    <span className="admin-sidebar-icon">⌂</span>
                    <span>Табло</span>
                    <span className="admin-sidebar-indicator"></span>
                </NavLink>

                <NavLink to="/admin/products" className={({ isActive }) => isActive ? 'admin-sidebar-link active' : 'admin-sidebar-link'}>
                    <span className="admin-sidebar-icon">▤</span>
                    <span>Продукти</span>
                </NavLink>

                <NavLink to="/admin/addProduct" className={({ isActive }) => isActive ? 'admin-sidebar-link active' : 'admin-sidebar-link'}>
                    <span className="admin-sidebar-icon">＋</span>
                    <span>Добави продукт</span>
                </NavLink>

                {isAuthenticated ?
                    <NavLink to="/admin/info" className={({ isActive }) => isActive ? 'admin-sidebar-link active' : 'admin-sidebar-link'}>
                        <span className="admin-sidebar-icon">♙</span>
                        <span>Профил</span>
                    </NavLink> : ''}
            </nav>

            <div className="admin-sidebar-bottom">
                <div className="admin-sidebar-note">
                    <span className="admin-sidebar-note-icon">✿</span>
                    <p>Всяко творение започва с малка идея.</p>
                </div>
            </div>

        </aside>
    )
}