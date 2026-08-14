import { useContext, useEffect, useState } from "react"
import ErrorContext from "../contexts/ErrorContext.jsx";

export default function useControlledForm(initialValues, onSubmit) {
    const [values, setValues] = useState(initialValues);
    const { errorSetter } = useContext(ErrorContext);

    useEffect(() => {
        setValues(initialValues);
    }, [initialValues])

    const changeHandler = (e) => {
        const { name, type, value, files } = e.target;
        
        setValues(state => ({...state, [name]: type === 'file' ? files[0] : value}))
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await onSubmit(values);
        } catch (error) {
            errorSetter(error.message);
            throw error;
        }
    }

    return {
        values, changeHandler, submitHandler
    }
}