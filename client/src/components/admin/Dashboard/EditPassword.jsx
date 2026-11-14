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

        await fetcher(`/admin/password/${admin.id}`, 'PUT', formData, { accessToken: admin.accessToken });
        navigate('/admin/dashboard');
    }

    const { values, changeHandler, submitHandler } = useControlledForm(initialValues, onSubmit);

    return (

        <div className="edit-account-backdrop">
            <div className="edit-account-modal">

                <div className="edit-account-header">
                    <div className="edit-account-icon">♡</div>

                    <button type="button" onClick={hide} className="edit-account-close" aria-label="Затвори">
                        &times;
                    </button>

                    <span className="edit-account-eyebrow">СИГУРНОСТ НА ПРОФИЛА</span>
                    <h2>Промени паролата си</h2>
                    <p>Избери нова парола, за да защитиш профила си.</p>
                </div>

                <form className="edit-account-form" method="PUT" onSubmit={submitHandler}>

                    <div className="edit-account-field">
                        <label htmlFor="old-password">Текуща парола</label>
                        <input
                            type="password"
                            id="old-password"
                            name="oldPassword"
                            onChange={changeHandler}
                            value={values.oldPassword}
                            placeholder="Въведи текущата си парола"
                            required
                        />
                    </div>

                    <div className="edit-account-field">
                        <label htmlFor="new-password">Нова парола</label>
                        <input
                            type="password"
                            id="new-password"
                            name="newPassword"
                            onChange={changeHandler}
                            value={values.newPassword}
                            placeholder="Въведи нова парола"
                            required
                        />
                    </div>

                    <div className="edit-account-field">
                        <label htmlFor="repeat-new-password">Повтори новата парола</label>
                        <input
                            type="password"
                            id="repeat-new-password"
                            name="repeatNewPassword"
                            onChange={changeHandler}
                            value={values.repeatNewPassword}
                            placeholder="Въведи новата парола отново"
                            required
                        />
                    </div>

                    <div className="edit-account-info">
                        <span>♡</span>
                        <p>Използвай сигурна парола и не я споделяй с никого.</p>
                    </div>

                    <div className="edit-account-actions">
                        <button type="button" onClick={hide} className="edit-account-cancel">
                            Отказ
                        </button>

                        <button type="submit" className="edit-account-confirm">
                            Запази паролата
                            <span>→</span>
                        </button>
                    </div>

                </form>
            </div>
        </div>

    )
}