import { useContext } from "react";
import { Link, useNavigate } from "react-router"
import useFetch from "../../hooks/useFetch.js";
import { useState } from "react";
import useControlledForm from "../../hooks/useControlledForm.js";
import AdminContext from "../../contexts/AdminContext.jsx";

export default function Login() {
    const navigate = useNavigate();
    const { loginHandler } = useContext(AdminContext);
    const { fetcher } = useFetch();

    const data = {
        email: '',
        password: ''
    }

    const [initialValues, setInitialValues] = useState(data);

    const onSubmit = async (values) => {
        const formValues = values;

        const result = await fetcher('/admin/login', 'POST', formValues);

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
                    <span className="auth-welcome-eyebrow">ОТНОВО ЗДРАВЕЙ!</span>

                    <h1>Твоето любимо творческо кътче те очаква!</h1>

                    <p>
                        Радваме се, че се връщаш! Влез в профила си,
                        разгледай най-новите ни творения и открий
                        нещо красиво, направено с много любов.
                    </p>

                    <div className="auth-welcome-note">
                        <span className="auth-welcome-note-icon">♡</span>
                        <span>Хубаво е, че си отново тук!</span>
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
                        <span className="auth-form-eyebrow">РАДВАМЕ СЕ ДА ТЕ ВИДИМ</span>
                        <h2>Добре дошла обратно!</h2>
                        <p>Въведи данните си, за да влезеш в профила.</p>
                    </div>

                    <form className="auth-form" method="POST" onSubmit={submitHandler}>
                        <div className="auth-field">
                            <label htmlFor="login-email">Имейл адрес</label>
                            <input
                                type="email"
                                id="login-email"
                                name="email"
                                onChange={changeHandler}
                                value={values.email}
                                placeholder="example@email.com"
                                required
                            />
                        </div>

                        <div className="auth-field">
                            <label htmlFor="login-password">Парола</label>
                            <input
                                type="password"
                                id="login-password"
                                name="password"
                                onChange={changeHandler}
                                value={values.password}
                                placeholder="Въведи паролата си"
                                required
                            />
                        </div>

                        <button type="submit" className="auth-submit-button">
                            Влез в профила
                            <span>→</span>
                        </button>
                    </form>

                    <div className="auth-form-switch">
                        <span>Все още нямаш профил?</span>
                        <Link to="/register">Създай си профил</Link>
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