import { useNavigate } from "react-router";
import useFetch from "../../../hooks/useFetch.js"
import { useContext } from "react";
import AdminContext from "../../../contexts/AdminContext.jsx";
import { useState } from "react";
import useControlledForm from "../../../hooks/useControlledForm.js";

export default function EditPassword({ hide }) {
    const { fetcher } = useFetch();
    const navigate = useNavigate();
    const { admin } = useContext(AdminContext);

    const data = {
        oldPassword: '',
        newPassword: '',
        repeatNewPassword: ''
    }

    const [initialValues, setInitialValues] = useState(data);

    const onSubmit = async (values) => {
        const formData = values;

        await fetcher(`/admin/password/${admin.id}`, 'PUT', formData, {accessToken: admin.accessToken});
        navigate('/admin/dashboard');
    }

    const {values, changeHandler, submitHandler} = useControlledForm(initialValues, onSubmit);

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
                        <h2>Смени паролата</h2>
                        <p>Промени личните си данни</p>
                    </div>
                </div>

                <form className="edit-user-card__form" method="PUT" onSubmit={submitHandler}>
                    <div className="form-field">
                        <label htmlFor="oldPassword" className="form-field__label">Стара парола</label>
                        <input
                            type="password"
                            id="oldPassword"
                            value={values.oldPassword}
                            onChange={changeHandler}
                            name="oldPassword"
                            className="form-field__input" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="newPassword" className="form-field__label">Нова парола</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={values.newPassword}
                            onChange={changeHandler}
                            name="newPassword"
                            className="form-field__input" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="repeatNewPassword" className="form-field__label">Повтори нова парола</label>
                        <input
                            type="password"
                            id="repeatNewPassword"
                            value={values.repeatNewPassword}
                            onChange={changeHandler}
                            name="repeatNewPassword"
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