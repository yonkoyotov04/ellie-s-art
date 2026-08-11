import { Link, useNavigate } from "react-router";
import useControlledForm from "../../hooks/useControlledForm.js";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import useFetch from "../../hooks/useFetch.js";

export default function Register() {
    const { fetcher } = useFetch();
    const { loginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const data = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: '',
        phone: ''
    }

    const [initialValues, setInitialValues] = useState(data);

    const onSubmit = async (values) => {
        const formValues = values;

        const result = await fetcher('/customers/register', 'POST', formValues);

        loginHandler(result);
        navigate('/');
    }

    const { values, changeHandler, submitHandler } = useControlledForm(initialValues, onSubmit);

    return (
        <>
            <section className="auth">
                <div className="auth__showcase">
                    <div className="auth__showcase-content">
                        <img src="./logo.png" alt="Ellie Art лого" className="nav-logo__img" />
                        <h2>Добре дошъл в семейството на Ellie Art 🍋</h2>
                        <p>Създай си акаунт, за да пазаруваш по-бързо, следиш поръчките си и харесваш и коментираш
                            публикациите на Ели.</p>

                        <div className="auth__quote">
                            „Всяка поръчка е опакована с толкова грижа, сякаш е за близък приятел.“
                            <strong>— Мария, клиент на Ellie Art</strong>
                        </div>
                    </div>
                </div>

                <div className="auth__form-side">
                    <div className="auth__form-wrap">
                        <span className="eyebrow">Нов тук?</span>
                        <h1>Създай акаунт</h1>
                        <p>Отнема по-малко от минута.</p>

                        <form method="POST" onSubmit={submitHandler}>
                            <div className="field-row">
                                <div className="field">
                                    <label htmlFor="reg-firstname">Име</label>
                                    <div className="field-input">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        <input
                                            type="text" id="reg-firstname"
                                            name="firstName"
                                            onChange={changeHandler}
                                            value={values.firstName}
                                            placeholder="Твоето име"
                                            autoComplete="given-name"
                                            required />
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="reg-lastname">Фамилия</label>
                                    <div className="field-input">
                                        <input
                                            type="text"
                                            id="reg-lastname"
                                            name="lastName"
                                            onChange={changeHandler}
                                            value={values.lastName}
                                            placeholder="Твоята фамилия"
                                            autoComplete="family-name" style={{ paddingLeft: '16px' }}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="field">
                                <label htmlFor="reg-email">Имейл</label>
                                <div className="field-input">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="m22 6-10 7L2 6" />
                                    </svg>
                                    <input
                                        type="email"
                                        id="reg-email"
                                        name="email"
                                        onChange={changeHandler}
                                        value={values.email}
                                        placeholder="ti@example.com"
                                        autoComplete="email"
                                        required />
                                </div>
                            </div>


                            <div className="field">
                                <label htmlFor="reg-password">Парола</label>
                                <div className="field-input">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="11" width="18" height="10" rx="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                    <input
                                        type="password"
                                        id="reg-password"
                                        name="password"
                                        onChange={changeHandler}
                                        value={values.password}
                                        placeholder="Минимум 8 символа"
                                        autoComplete="new-password"
                                        required />
                                    <button type="button" className="field-input__toggle" aria-label="Покажи паролата">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="field-hint">Използвай поне 8 символа, включително цифра.</p>
                            </div>

                            <div className="field">
                                <label htmlFor="reg-password-confirm">Потвърди парола</label>
                                <div className="field-input">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="11" width="18" height="10" rx="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                    <input
                                        type="password"
                                        id="reg-password-confirm"
                                        name="rePassword"
                                        onChange={changeHandler}
                                        value={values.rePassword}
                                        placeholder="Въведи паролата отново"
                                        autoComplete="new-password"
                                        required />
                                    <button type="button" className="field-input__toggle" aria-label="Покажи паролата">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="field">
                                <label htmlFor="reg-phone">Телефон</label>
                                <div className="field-input">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="m22 6-10 7L2 6" />
                                    </svg>
                                    <input
                                        type="text"
                                        id="reg-phone"
                                        name="phone"
                                        onChange={changeHandler}
                                        value={values.phone}
                                        autoComplete="phone"
                                        required />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Регистрация</button>
                        </form>

                        <div className="auth__divider">или се регистрирай с</div>

                        <div className="auth__social">
                            <button type="button">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                                </svg>
                                Facebook
                            </button>
                            <button type="button">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
                                </svg>
                                Google
                            </button>
                        </div>

                        <p className="auth__switch">Вече имаш акаунт? <Link to="/login">Влез оттук</Link></p>
                    </div>
                </div>
            </section>
        </>
    )
}