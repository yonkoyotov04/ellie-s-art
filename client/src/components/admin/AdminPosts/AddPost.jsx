import { Link } from "react-router";

export default function AddPost() {
    return (
        <>
            <div className="dash-content__head">
                <span className="eyebrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                    Ново съдържание
                </span>
                <h1 className="script-heading dash-content__heading">Добави публикация</h1>
                <p className="section-sub">Сподели новина, снимка от процеса на работа или обява със страницата.</p>
            </div>

            <form className="admin-form" novalidate>

                <div className="post-composer__author">
                    <span className="table-product__media recent-item__media--post" aria-hidden="true">Е</span>
                    <div>
                        <p className="post-composer__author-name">Ellie Art</p>
                        <p className="post-composer__author-meta">Ще се публикува веднага, освен ако не запазиш като
                            чернова</p>
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="post-text" className="form-field__label">Текст на публикацията</label>
                    <textarea id="post-text" name="text" className="form-field__input form-field__textarea" rows="6"
                        placeholder="Какво ново в ателието? Разкажи на последователите си..."></textarea>
                </div>

                <div className="form-field">
                    <label htmlFor="post-image" className="form-field__label">Снимка</label>
                    <label htmlFor="post-image" className="image-drop">
                        <svg className="image-drop__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.6" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 16.8V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10.8" />
                            <path d="M4 17l4.5-5 3.5 3.5L16 11l4 4" />
                            <circle cx="8.5" cy="8" r="1.4" />
                        </svg>
                        <span className="image-drop__title">Провлачи снимка тук или натисни за избор</span>
                        <span className="image-drop__hint">PNG или JPG, до 5 MB — по избор</span>
                        <input type="file" id="post-image" name="image" accept="image/png, image/jpeg" className="sr-only" />
                    </label>
                    <p className="form-field__hint">Качва се файл — не се приемат връзки (URL) към снимки. Публикацията
                        може да е и само с текст.</p>
                </div>

                <div className="admin-form__actions">
                    <Link to="posts-admin.html" className="btn btn-ghost">Отказ</Link>
                    <button type="submit" className="btn btn-outline">Запази като чернова</button>
                    <button type="submit" className="btn btn-primary">Публикувай</button>
                </div>
            </form>
        </>
    )
}