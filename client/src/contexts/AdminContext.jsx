import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
import { useNavigate } from "react-router";

const AdminContext = createContext({
    admin: {},
    isAuthenticated: false,
    loginHandler() {},
    logoutHandler() {}
});

export function AdminProvider({children}) {
    const [admin, setAdmin] = useLocalStorage(null, 'admin');
    const navigate = useNavigate();

    const onLogin = (admin) => {
        setAdmin(admin)
    }

    const onLogout = async () => {
        await fetch('http://localhost:2105/admin/logout', {method: 'GET', credentials: 'include'});
        setAdmin(null);
        navigate('/');
    }

    const contextValues = {
        admin,
        isAuthenticated: !!admin?.email,
        loginHandler: onLogin,
        logoutHandler: onLogout
    }

    return (
        <AdminContext.Provider value={contextValues}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContext;