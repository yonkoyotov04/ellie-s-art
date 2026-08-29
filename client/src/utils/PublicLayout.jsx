import { Navigate, Outlet } from "react-router";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import { useContext } from "react";
import AdminContext from "../contexts/AdminContext.jsx";

export default function PublicLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export function GuestRoutes() {
    const { isAuthenticated } = useContext(AdminContext);
    return !isAuthenticated ? <Outlet /> : <Navigate to={'/'} />
}