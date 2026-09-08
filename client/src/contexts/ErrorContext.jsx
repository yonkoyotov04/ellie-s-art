import { createContext, useRef, useState } from "react";
import ErrorBox from "../components/layout/ErrorBox.jsx";

const ErrorContext = createContext({
    error: null,
    errorSetter () {}
})

export function ErrorProvider({children}) {
    const [error, setError] = useState(null);
    const timeoutRef = useRef(null);

    const errorSetter = (error) => {
        setError(error);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            setError(null)
        }, "5000")
    }

    const removeError = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setError(null);
    }

    const contextValues = {
        error,
        errorSetter
    }

    return(
        <ErrorContext.Provider value={contextValues}>
            {children}

            {error ? <ErrorBox errorMessage={error} remove={removeError} /> : ''}
        </ErrorContext.Provider>
    )
}

export default ErrorContext;