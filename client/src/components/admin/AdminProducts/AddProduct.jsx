import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import useFetch from "../../../hooks/useFetch.js";
import UserContext from "../../../contexts/UserContext.jsx";
import useControlledForm from "../../../hooks/useControlledForm.js";

export default function AddProduct() {
    const { fetcher } = useFetch();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const [imageFile, setImageFile] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);

    const data = {
        title: '',
        descriptipn: '',
        price: 0,
        category: '',
        image: ''
    }

    const [initialValues, setInitialValues] = useState(data);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
            if (value !== null & value !== undefined) {
                formData.append(key, value);
            }
        })

        const result = await fetcher('/products', 'POST', formData, { accessToken: user?.accessToken });
        navigate('/admin/products');
    }

    const { values, changeHandler, submitHandler } = useControlledForm(initialValues, onSubmit);

    return (
        <>
            <div className="dash-content__head">
                <span className="eyebrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                    Нов артикул
                </span>
                <h1 className="script-heading dash-content__heading">Добави продукт</h1>
                <p className="section-sub">Попълни детайлите по-долу, за да добавиш нов продукт към каталога.</p>
            </div>

            <form className="admin-form" method="POST" onSubmit={submitHandler}>
                <div className="admin-form__grid">

                    <div className="admin-form__col admin-form__col--media">
                        <div className="form-field">
                            <label htmlFor="product-image" className="form-field__label">Снимка на продукта</label>
                            <label htmlFor="product-image" className="image-drop">
                                {previewURL ?
                                    <img src={previewUrl} alt="Преглед" className="image-drop__preview" />
                                    :
                                    <>
                                        <svg className="image-drop__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 16.8V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10.8" />
                                            <path d="M4 17l4.5-5 3.5 3.5L16 11l4 4" />
                                            <circle cx="8.5" cy="8" r="1.4" />
                                        </svg>
                                        <span className="image-drop__title">Провлачи снимка тук или натисни за избор</span>
                                        <span className="image-drop__hint">PNG или JPG, до 5 MB</span>
                                    </>}

                                <input
                                    type="file"
                                    id="product-image"
                                    name="image"
                                    accept="image/png, image/jpeg"
                                    className="sr-only"
                                    onChange={changeHandler} />
                            </label>
                            <p className="form-field__hint">Качва се файл — не се приемат връзки (URL) към снимки.</p>
                        </div>
                    </div>

                    <div className="admin-form__col admin-form__col--fields">

                        <div className="form-field">
                            <label for="product-title" className="form-field__label">Заглавие на продукта</label>
                            <input
                                type="text"
                                id="product-title"
                                name="title"
                                onChange={changeHandler}
                                value={values.title}
                                className="form-field__input"
                                placeholder="напр. Лимонова градина — платно 30×40" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="product-description" className="form-field__label">Описание</label>
                            <textarea
                                id="product-description"
                                name="description"
                                onChange={changeHandler}
                                value={values.descriptipn}
                                className="form-field__input form-field__textarea"
                                rows="5"
                                placeholder="Разкажи малко повече за продукта — материали, размери, история..."></textarea>
                        </div>

                        <div className="form-field__row">
                            <div className="form-field">
                                <label htmlFor="product-price" className="form-field__label">Цена</label>
                                <div className="price-field">
                                    <input
                                        type="number"
                                        id="product-price"
                                        name="price"
                                        onChange={changeHandler}
                                        value={values.price}
                                        className="form-field__input"
                                        placeholder="0.00"
                                        min="0"
                                        step="0.01" />
                                    <span className="price-field__suffix">лв.</span>
                                </div>
                            </div>

                            <div className="form-field">
                                <label htmlFor="product-category" className="form-field__label">Категория</label>
                                <div className="category-field">
                                    <input type="checkbox" id="category-toggle" className="category-toggle sr-only" />

                                    <select id="product-category" name="category" value={}
                                        className="form-field__input category-field__select select-input">
                                        <option value="">Избери категория</option>
                                        <option value="platna">Платна</option>
                                        <option value="kartichki">Картички</option>
                                        <option value="keramika">Керамика</option>
                                        <option value="portreti">Портрети по поръчка</option>
                                    </select>

                                    <input type="text" id="category-new" name="new_category"
                                        className="form-field__input category-field__new-input"
                                        placeholder="Име на новата категория" />

                                    <label htmlFor="category-toggle" className="category-field__toggle-btn"
                                        aria-label="Добави нова категория">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                                            strokeLinecap="round">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </label>
                                </div>
                                <p className="form-field__hint">Натисни <strong>+</strong>, за да добавиш нова категория
                                    вместо да избереш съществуваща.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="admin-form__actions">
                    <Link to="/admin/dashboard" className="btn btn-ghost">Отказ</Link>
                    <button type="submit" className="btn btn-primary">Запази продукта</button>
                </div>
            </form>
        </>
    )
}