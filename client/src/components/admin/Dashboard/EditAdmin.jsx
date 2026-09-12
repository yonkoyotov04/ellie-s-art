import { useContext, useState } from "react"
import useFetch from '../../../hooks/useFetch.js'
import { useNavigate } from "react-router";
import AdminContext from "../../../contexts/AdminContext.jsx";
import useControlledForm from "../../../hooks/useControlledForm.js";

export default function EditAdmin({ hide }) {
    const { fetcher } = useFetch()
    const navigate = useNavigate();
    const { admin, loginHandler } = useContext(AdminContext);

    const data = {
        firstName: admin.first_name,
        lastName: admin.last_name,
        email: admin.email
    }

    const [initialValues, setInitialValues] = useState(data);

    const onSubmit = async (values) => {
        const formData = values;

        const result = await fetcher(`/admin/${admin.id}`, 'PUT', formData, { accessToken: admin.accessToken });
        
        loginHandler({accessToken: admin.accessToken, ...result});
        navigate('/admin/dashboard');
    }

    const { values, changeHandler, submitHandler } = useControlledForm(initialValues, onSubmit);

    return (
        <div className="modal-backdrop">
            <div className="edit-user-card">
                <button type="button" onClick={hide} className="edit-user-card__close" aria-label="Затвори">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className="edit-user-card__header">
                    <span className="edit-user-card__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                        </svg>
                    </span>
                    <div>
                        <h2>Редактирай профила</h2>
                        <p>Промени личните си данни</p>
                    </div>
                </div>

                <form className="edit-user-card__form" method="PUT" onSubmit={submitHandler}>
                    <div className="form-field">
                        <label htmlFor="edit-firstname" className="form-field__label">Име</label>
                        <input
                            type="text"
                            id="edit-firstname"
                            value={values.firstName}
                            onChange={changeHandler}
                            name="firstName"
                            className="form-field__input" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="edit-lastname" className="form-field__label">Фамилия</label>
                        <input
                            type="text"
                            id="edit-lastname"
                            value={values.lastName}
                            onChange={changeHandler}
                            name="lastName"
                            className="form-field__input" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="edit-email" className="form-field__label">Имейл</label>
                        <input
                            type="email"
                            id="edit-email"
                            value={values.email}
                            onChange={changeHandler}
                            name="email"
                            className="form-field__input" />
                    </div>

                    <div className="edit-user-card__actions">
                        <button type="button" onClick={hide} className="btn btn-ghost">Отказ</button>
                        <button type="submit" className="btn btn-primary">Запази промените</button>
                    </div>
                </form>
            </div>
        </div>
    )
}