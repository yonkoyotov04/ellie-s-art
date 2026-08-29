import { Navigate, Outlet } from "react-router";
import AdminHeader from "../components/admin/AdminHeader.jsx";
import AdminSideBar from "../components/admin/AdminSidebar.jsx";
import { useContext } from "react";
import AdminContext from "../contexts/AdminContext.jsx";

export default function AdminLayout() {
    return (
        <div className="dash">
            <AdminHeader />

            <div className="dash-shell">
                <AdminSideBar />

                <main className="dash-content">
                    <Outlet />
                </main>

            </div>

        </div>
    )
}

export function AdminRoutes() {
    const { isAuthenticated } = useContext(AdminContext);
    return isAuthenticated ? <Outlet /> : <Navigate to={'/'} />
}