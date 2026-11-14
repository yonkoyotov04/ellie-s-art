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

        loginHandler({ accessToken: admin.accessToken, ...result });
        navigate('/admin/dashboard');
    }

    const { values, changeHandler, submitHandler } = useControlledForm(initialValues, onSubmit);

    return (

        <div className="edit-account-backdrop">
            <div className="edit-account-modal">

                <div className="edit-account-header">
                    <div className="edit-account-icon">✿</div>

                    <button type="button" onClick={hide} className="edit-account-close" aria-label="Затвори">
                        &times;
                    </button>

                    <span className="edit-account-eyebrow">НАСТРОЙКИ НА ПРОФИЛА</span>
                    <h2>Редактирай профила си</h2>
                    <p>Можеш да промениш личните си данни по всяко време.</p>
                </div>

                <form className="edit-account-form" method="PUT" onSubmit={submitHandler}>
                    <div className="edit-account-fields-row">
                        <div className="edit-account-field">
                            <label htmlFor="edit-first-name">Име</label>
                            <input
                                type="text"
                                id="edit-first-name"
                                name="firstName"
                                onChange={changeHandler}
                                value={values.firstName}
                                placeholder="Твоето име"
                                required
                            />
                        </div>

                        <div className="edit-account-field">
                            <label htmlFor="edit-last-name">Фамилия</label>
                            <input
                                type="text"
                                id="edit-last-name"
                                name="lastName"
                                onChange={changeHandler}
                                value={values.lastName}
                                placeholder="Твоята фамилия"
                                required
                            />
                        </div>
                    </div>

                    <div className="edit-account-field">
                        <label htmlFor="edit-email">Имейл адрес</label>
                        <input
                            type="email"
                            id="edit-email"
                            name="email"
                            onChange={changeHandler}
                            value={values.email}
                            placeholder="example@email.com"
                            required
                        />
                    </div>

                    <div className="edit-account-info">
                        <span>♡</span>
                        <p>Увери се, че въведените данни са правилни, преди да запазиш промените.</p>
                    </div>

                    <div className="edit-account-actions">
                        <button type="button" onClick={hide} className="edit-account-cancel">
                            Отказ
                        </button>

                        <button type="submit" className="edit-account-confirm">
                            Запази промените
                            <span>→</span>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}