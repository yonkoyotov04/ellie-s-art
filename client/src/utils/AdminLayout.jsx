import { Outlet } from "react-router";
import AdminHeader from "../components/admin/AdminHeader.jsx";
import AdminSideBar from "../components/admin/AdminSidebar.jsx";

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