import { Link, useNavigate } from "react-router";
import useControlledForm from "../../hooks/useControlledForm.js";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import AdminContext from "../../contexts/AdminContext.jsx";

export default function Register() {
    const { fetcher } = useFetch();
    const { loginHandler } = useContext(AdminContext);
    const navigate = useNavigate();

    const data = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: ''
    }

    const [initialValues, setInitialValues] = useState(data);

    const onSubmit = async (values) => {
        const formValues = values;

        const result = await fetcher('/admin/register', 'POST', formValues);

        loginHandler(result);
        navigate('/');
    }

    const { values, changeHandler, submitHandler } = useControlledForm(initialValues, onSubmit);

    return (

        <main className="auth-page">
            <section className="auth-welcome">
                <div className="auth-welcome-decoration auth-welcome-decoration--one">✿</div>
                <div className="auth-welcome-decoration auth-welcome-decoration--two">♡</div>
                <div className="auth-welcome-decoration auth-welcome-decoration--three">✧</div>

                <div className="auth-welcome-content">
                    <span className="auth-welcome-eyebrow">ДОБРЕ ДОШЛА В ELLIE'S ART</span>

                    <h1>Всяко красиво нещо започва с малка идея!</h1>

                    <p>
                        Създай своя профил и стани част от нашето малко
                        творческо кътче. Тук те очакват вдъхновение,
                        цветове и много ръчно изработени съкровища!
                    </p>

                    <div className="auth-welcome-note">
                        <span className="auth-welcome-note-icon">♡</span>
                        <span>Радваме се, че си тук!</span>
                    </div>
                </div>

                <div className="auth-welcome-bottom">
                    <span>Създадено с любов и въображение</span>
                    <span>♥</span>
                </div>
            </section>

            <section className="auth-form-side">
                <div className="auth-form-container">
                    <div className="auth-form-heading">
                        <span className="auth-form-eyebrow">НОВО НАЧАЛО</span>
                        <h2>Създай профил</h2>
                        <p>Попълни данните си, за да продължиш.</p>
                    </div>

                    <form className="auth-form" method="POST" onSubmit={submitHandler}>
                        <div className="auth-form-row">
                            <div className="auth-field">
                                <label htmlFor="register-first-name">Име</label>
                                <input
                                    type="text"
                                    id="register-first-name"
                                    name="firstName"
                                    onChange={changeHandler}
                                    value={values.firstName}
                                    placeholder="Твоето име"
                                    required
                                />
                            </div>

                            <div className="auth-field">
                                <label for="register-last-name">Фамилия</label>
                                <input
                                    type="text"
                                    id="register-last-name"
                                    name="lastName"
                                    onChange={changeHandler}
                                    value={values.lastName}
                                    placeholder="Твоята фамилия"
                                    required
                                />
                            </div>
                        </div>

                        <div className="auth-field">
                            <label for="register-email">Имейл адрес</label>
                            <input
                                type="email"
                                id="register-email"
                                name="email"
                                onChange={changeHandler}
                                value={values.email}
                                placeholder="example@email.com"
                                required
                            />
                        </div>

                        <div className="auth-field">
                            <label for="register-password">Парола</label>
                            <input
                                type="password"
                                id="register-password"
                                name="password"
                                onChange={changeHandler}
                                value={values.password}
                                placeholder="Въведи парола"
                                required
                            />
                        </div>

                        <div className="auth-field">
                            <label for="register-repeat-password">Повтори паролата</label>
                            <input
                                type="password"
                                id="register-repeat-password"
                                name="rePassword"
                                onChange={changeHandler}
                                value={values.rePassword}
                                placeholder="Въведи паролата отново"
                                required
                            />
                        </div>

                        <button type="submit" className="auth-submit-button">
                            Създай профил
                            <span>→</span>
                        </button>
                    </form>

                    <div className="auth-form-switch">
                        <span>Вече имаш регистрация?</span>
                        <Link to="/login">Влез в профила си</Link>
                    </div>

                    <div className="auth-form-footer">
                        <span>Ellie's Art</span>
                        <span>Малко цвят, много любов.</span>
                    </div>
                </div>
            </section>
        </main>
    )
}