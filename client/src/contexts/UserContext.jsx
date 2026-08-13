import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
import { useNavigate } from "react-router";

const UserContext = createContext({
    user: {},
    isAuthenticated: false,
    isAdmin: false,
    loginHandler() {},
    logoutHandler() {}
});

export function UserProvider({children}) {
    const [user, setUser] = useLocalStorage(null, 'user');
    const navigate = useNavigate();

    const onLogin = (user) => {
        setUser(user)
    }

    const onLogout = async () => {
        await fetch('http://localhost:2105/customers/logout', {method: 'GET', credentials: 'include'});
        setUser(null);
        navigate('/');
    }

    const contextValues = {
        user,
        isAuthenticated: !!user?.email,
        isAdmin: user?.email === 'elena.stiliyanova07@gmail.com' || user?.email === 'yonkoyotov04@gmail.com' ? true : false,
        loginHandler: onLogin,
        logoutHandler: onLogout
    }

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;