import { createContext, useRef, useState } from "react";

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

    const contextValues = {
        error,
        errorSetter
    }

    return(
        <ErrorContext.Provider value={contextValues}>
            {children}
        </ErrorContext.Provider>
    )
}

export default ErrorContext;