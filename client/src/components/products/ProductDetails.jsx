import { useState } from "react";
import { Link, useParams } from "react-router"
import useFetch from "../../hooks/useFetch.js";

export default function ProductDetails() {
    const { productId } = useParams();
    const apiURL = 'http://localhost:2105/uploads/'
    const [productData, setProductData] = useState({});

    const { images = [], image } = productData;

    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const gallery = images.length ? images : (image ? [image] : []);

    const prevIndex = () => {
        setActiveImageIndex(i => (i - 1 + gallery.length) % gallery.length);
    }

    const nextIndex = () => {
        setActiveImageIndex(i => (i + 1) % gallery.length);
    }

    const { fetcher } = useFetch(`/products/${productId}`, setProductData);

    const addClick = async () => {
        await fetcher(`/products/${productId}/click`, 'PUT', null);
    }

    const date = new Date(productData.added_on);
    const months = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate()

    return (
        <main className="product-details-page">

            <div className="product-details-grid">

                <section className="product-gallery">

                    <div className="product-main-image">
                        <img
                            src={`${apiURL}${gallery[activeImageIndex]?.path}`}
                            alt="Ръчно изработено изделие"
                            className="product-gallery-image" />

                        {gallery.length > 1 &&
                            <>
                                <button
                                    onClick={prevIndex}
                                    className="product-gallery-arrow product-gallery-prev"
                                    type="button"
                                    aria-label="Предишна снимка">
                                    &#8592;
                                </button>

                                <button
                                    onClick={nextIndex}
                                    className="product-gallery-arrow product-gallery-next"
                                    type="button"
                                    aria-label="Следваща снимка">
                                    &#8594;
                                </button>
                            </>
                        }



                        <span className="product-image-counter">{activeImageIndex + 1} / {gallery.length}</span>
                    </div>

                    {gallery.length > 1 &&
                        <div className="product-gallery-thumbnails">
                            {gallery.map((img, index) => {
                                <button
                                    key={img}
                                    onClick={() => setActiveImageIndex(index)}
                                    className={`product-thumbnail ${index === activeImageIndex ? 'active' : ''}`}
                                    type="button"
                                    aria-label={`Снимка ${activeImageIndex + 1}`}>
                                    <img src={`${apiURL}${img}`} alt="" />
                                </button>
                            })}
                        </div>
                    }

                </section>

                <section className="product-information">

                    <span className="product-category">{productData.category}</span>

                    <h1 className="product-title">
                        {productData.title}
                    </h1>

                    <p className="product-price">{productData.price} €</p>

                    {productData.description !== "" &&
                        <div className="product-description">
                            <h2>За продукта:</h2>

                            <p>
                                {productData.description}
                            </p>
                        </div>
                    }

                    <Link
                        to="https://www.facebook.com/messages/t/187292397806207"
                        target="_blank"
                        onClick={addClick}
                        rel="noopener noreferrer"
                        className="product-contact-button">
                        <span>♡</span>
                        Пиши на Ели за този продукт
                    </Link>

                    <div className="product-added-date">
                        <span className="product-date-icon">◷</span>

                        <div>
                            <span className="product-date-label">Добавен на</span>
                            <p>{day} {month}, {year} г.</p>
                        </div>
                    </div>

                </section>

            </div>

        </main>
    )
}