import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ErrorContext from "../contexts/ErrorContext.jsx";
import AdminContext from "../contexts/AdminContext.jsx";

export default function useFetch(url, setData, extras = {}) {
    const { admin, isAuthenticated, loginHandler, logoutHandler } = useContext(AdminContext);
    const navigate = useNavigate();
    const { errorSetter } = useContext(ErrorContext);
    const [refresh, setRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const refresher = () => {
        setRefresh(state => !state);
    }

    const refreshToken = async () => {
        const result = await fetch('http://localhost:2105/admin/refresh', { method: 'GET', credentials: 'include' });

        if (!result.ok) {
            return false;
        }

        const newToken = await result.json();
        const newData = { ...admin, accessToken: newToken };

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
                'X-Authorization': admin?.accessToken || config.accessToken
            }
        }

        options.credentials = 'include'

        let response = await fetch(`http://localhost:2105${url}`, options);

        if (!response.ok && response.status === 401) {
            const newToken = await refreshToken();

            if (!newToken) {
                logoutHandler();
                navigate('/login');
                errorSetter('Session Expired');
                throw new Error('Session Expired');
            }

            options.headers = {
                ...options.headers,
                'X-Authorization': newToken
            }

            response = await fetch(`http://localhost:2105${url}`, options);
        }

        if (!response.ok) {
            const errorBody = await response.json().catch(() => ({}));
            const message = errorBody.message || response.statusText;
            errorSetter(message);
            throw new Error(message)
        }

        return response.json();
    }

    useEffect(() => {
        if (!url) {
            return
        }

        const params = new URLSearchParams();


        if (extras.category) {
            params.append('category', extras.category);
        }

        if (extras.search) {
            params.append('search', extras.search);
        }

        if (extras.sort) {
            params.append('sort', extras.sort);
        }

        if (extras.limit) {
            params.append('limit', extras.limit);
        }

        const searchQuery = params.toString();
        const finalUrl = searchQuery ? `${url}?${searchQuery}` : url;

        setIsLoading(true);

        fetcher(finalUrl, 'GET', null, { accessToken: admin?.accessToken })
            .then(result => setData(result))
            .catch(error => {
                console.log(error.message);
                errorSetter(error.message);
            })
            .finally(() => setIsLoading(false));
    }, [url, extras.category, extras.search, extras.sort, extras.limit, refresh])

    return { fetcher, isLoading, refresher }

}