import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.jsx";
import { useNavigate } from "react-router";
import ErrorContext from "../contexts/ErrorContext.jsx";

export default function useFetch(url, setData) {
    const { user, isAuthenticated, loginHandler, logoutHandler } = useContext(UserContext);
    const navigate = useNavigate();
    const { errorSetter } = useContext(ErrorContext);
    const [refresh, setRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const refresher = () => {
        setRefresh(state => !state);
    }

    const refreshToken = async () => {
        const result = await fetch('http://localhost:2105/customers/refresh', { method: 'POST', credentials: 'include' });

        if (!result.ok) {
            return false;
        }

        const newToken = result.json();
        const newData = { ...user, accessToken: newToken };

        loginHandler(newData);
        return newToken
    }

    const fetcher = async (url, method, data, config = {}) => {
        const options = {};

        if (method) {
            options.method = method;
        }

        if (data) {
            if (data instanceof FormData) {
                options.body = data;
            } else {
                options.headers = {
                    'content-type': 'application/json'
                }
                options.body = JSON.stringify(data);
            }
        }

        if (isAuthenticated || config.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': user?.accessToken || config.accessToken
            }
        }

        options.credentials = 'include'

        let response = await fetch(`http://localhost:2105${url}`, options);

        if (!response.ok) {
            if (response.status === 401) {
                const newToken = await refreshToken();

                if (!newToken) {
                    logoutHandler();
                    navigate('/login');
                    throw new Error('Session Expired')
                }

                options.headers = {
                    ...options.headers,
                    'X-Authorization': newToken
                }

                response = await fetch(`http://localhost:2105/${url}`, options);
            } else {
                errorSetter(response.statusText);
                throw response.statusText;
            }
        }

        const result = response.json();
        return result;
    }

    useEffect(() => {
        if (!url) {
            return
        }

        setIsLoading(true);

        fetcher(url)
            .then(result => setData(result))
            .catch(error => errorSetter(error.message))
            .finally(() => setIsLoading(false));
    }, [url, refresh])

    return { fetcher, isLoading, refresher }

}