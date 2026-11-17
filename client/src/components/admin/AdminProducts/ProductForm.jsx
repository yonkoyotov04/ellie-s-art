import { useEffect, useState } from "react";
import useFetch from '../../../hooks/useFetch.js'
import { Link } from "react-router";
import ImagePreviewItem from "./ImagePreviewItem.jsx";

export default function ProductForm({ passedValues, isSubmitting, changeHandler, submitHandler, images, onImagesChange, removeImage, setCover }) {
    const [categories, setCategories] = useState([]);
    const [manualCategoryInput, setManualCategoryInput] = useState(false);

    useEffect(() => {
        return () => images.forEach(item => URL.revokeObjectURL(item))
    }, [images]);

    useFetch('/products/categories', setCategories);

    const changeCategoryInput = () => {
        setManualCategoryInput(state => !state)
    }

    console.log(passedValues);

    return (

        <main className="product-form-page">

            <form className="product-form" method="POST" onSubmit={submitHandler}>

                <section className="product-form-section">

                    <div className="product-form-section-heading">
                        <div className="product-form-section-icon">✎</div>

                        <div>
                            <h2>Основна информация</h2>
                            <p>Разкажи ни малко повече за своето творение.</p>
                        </div>
                    </div>


                    <div className="product-form-fields">

                        <div className="product-form-field product-form-field-full">
                            <label htmlFor="product-title">
                                Име на продукта
                                <span>*</span>
                            </label>

                            <input
                                type="text"
                                id="product-title"
                                name="title"
                                onChange={changeHandler}
                                value={passedValues.title}
                                placeholder="Например: Ръчно изработена картичка"
                                required />

                            <small>Избери кратко и описателно име.</small>
                        </div>

                        <div className="product-form-field product-form-field-full">
                            <label htmlFor="product-description">
                                Описание
                            </label>

                            <textarea
                                id="product-description"
                                name="description"
                                rows="6"
                                onChange={changeHandler}
                                value={passedValues.description}
                                placeholder="Разкажи за материалите, изработката и особеностите на продукта..."></textarea>

                            <small>
                                Опиши какво прави това творение специално.
                            </small>
                        </div>

                        <div className="product-form-field">
                            <label htmlFor="product-price">
                                Цена
                                <span>*</span>
                            </label>

                            <div className="product-form-price-input">
                                <input
                                    type="number"
                                    id="product-price"
                                    name="price"
                                    onChange={changeHandler}
                                    value={passedValues.price}
                                    placeholder="0.00"
                                    min="0"
                                    step="0.01"
                                    required />

                                <span>€</span>
                            </div>
                            <small>
                                Избери цената на продукта.
                            </small>
                        </div>

                        <div className="product-form-field">
                            <label htmlFor="product-category">
                                Категория
                                <span>*</span>
                            </label>

                            <div className="product-form-category-control">

                                {manualCategoryInput
                                    ?
                                    <div className="product-form-new-category">
                                        <label htmlFor="new-category-name">
                                            Име на новата категория
                                        </label>

                                        <input
                                            type="text"
                                            id="new-category-name"
                                            name="category"
                                            onChange={changeHandler}
                                            value={passedValues.category}
                                            placeholder="Например: Плетени изделия" />

                                        <small>
                                            След добавянето ѝ категорията ще може да бъде
                                            избрана за този продукт.
                                        </small>
                                    </div>
                                    :
                                    <select
                                        id="product-category"
                                        name="category"
                                        onChange={changeHandler}
                                        value={passedValues.category_id}
                                        required>
                                        <option value="" disabled selected>
                                            Избери категория
                                        </option>
                                        {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                                    </select>}

                                <button
                                    type="button"
                                    className="product-form-add-category"
                                    aria-label="Добави нова категория"
                                    title="Добави нова категория"
                                    onClick={changeCategoryInput}>
                                    +
                                </button>

                            </div>

                            <small>
                                Натисни бутона +, ако искаш да добавиш нова категория.
                            </small>

                        </div>

                    </div>

                </section>

                <section className="product-form-section product-form-images-section">

                    <div className="product-form-section-heading">
                        <div className="product-form-section-icon">♡</div>

                        <div>
                            <h2>Снимки на продукта *</h2>
                            <p>Покажи своето творение от най-красивата му страна.</p>
                        </div>
                    </div>

                    <div className="product-form-upload">

                        <input
                            type="file"
                            id="product-images"
                            name="images"
                            onChange={onImagesChange}
                            accept="image/*"
                            multiple />

                        <label htmlFor="product-images" className="product-form-upload-label">
                            <span className="product-form-upload-icon">＋</span>

                            <strong>Избери снимки</strong>

                            <span>
                                Натисни тук, за да добавиш изображения от устройството си.
                            </span>

                            <small>PNG, JPG, JPEG или WEBP</small>
                        </label>

                    </div>

                    <div className="product-form-preview-heading">
                        <h3>Добавени снимки</h3>
                        <span>Първата снимка ще бъде корицата.</span>
                    </div>

                    {images.length > 0 &&
                        <div className="product-form-image-previews">
                            {images.map((image, index) => {
                                return <ImagePreviewItem
                                    key={image.src}
                                    src={image.src}
                                    setCover={setCover}
                                    index={index}
                                    onRemove={() => removeImage(index)} />
                            })}
                        </div>
                    }

                    <p className="product-form-image-note">
                        <span>✿</span>
                        Можеш да добавиш няколко снимки. Първата ще се показва
                        като основно изображение на продукта.
                    </p>

                </section>

                <div className="product-form-actions">

                    <Link to="/admin/dashboard" className="product-form-cancel">
                        Отказ
                    </Link>

                    <button
                        type="submit"
                        className="product-form-submit"
                        disabled={isSubmitting}>
                        <span>＋</span>
                        {isSubmitting ? "Запазва се..." : "Запази продукта"}
                    </button>

                </div>

                <p className="product-form-required-note">
                    Полетата, отбелязани със *, са задължителни.
                </p>

            </form>

        </main>
    )
}