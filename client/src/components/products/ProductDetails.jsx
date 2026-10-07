import { useState } from "react";
import { Link, useParams } from "react-router"
import useFetch from "../../hooks/useFetch.js";

export default function ProductDetails() {
    const { productId } = useParams();
    const apiURL = 'http://localhost:2105/uploads/'
    const [productData, setProductData] = useState({});

    const {images = [], image} = productData;

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
        <>
            <section className="product-details">
                <div className="product-details__inner">

                    <div className="product-details__gallery">
                        <div className="product-details__media">
                            <img src={`${apiURL}${gallery[activeImageIndex]}`} alt={productData.title} />
                            {gallery.length > 1 &&
                                <>
                                    <button
                                        type="button"
                                        onClick={prevIndex}
                                        className="gallery__arrow gallery__arrow--prev"
                                        aria-label="Предишна снимка">‹</button>
                                    <button
                                        type="button"
                                        onClick={nextIndex}
                                        className="gallery__arrow gallery__arrow--next"
                                        aria-label="Следваща снимка">›</button>
                                </>
                            }


                            {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                    <rect x="3" y="3" width="18" height="18" rx="3" />
                                    <circle cx="8.5" cy="8.5" r="1.6" />
                                    <path d="M21 15l-5-5L5 21" />
                                </svg> */}

                        </div>

                        {gallery.length > 1 &&
                            <div className="gallery__thumbs">
                                {gallery.map((img, index) => {
                                    <button
                                        key={img}
                                        type="button"
                                        className={`gallery__thumb ${index === activeImageIndex ? 'is-active' : ''}`}
                                        onClick={() => setActiveImageIndex(index)}
                                    >
                                        <img src={`${apiURL}${img}`} alt="" />
                                    </button>
                                })}
                            </div>
                        }
                    </div>

                    <div className="product-details__info">
                        <span className="eyebrow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                                <rect x="14" y="14" width="7" height="7" rx="1.5" />
                            </svg>
                            {productData.category}
                        </span>

                        <h1 className="script-heading product-details__name">{productData.title}</h1>
                        <p className="product-details__price">{productData.price} €</p>

                        {productData.description &&
                            <div className="product-details__description">
                                <p>{productData.description}</p>
                            </div>
                        }

                        <Link
                            to="https://www.facebook.com/messages/t/187292397806207"
                            target="_blank"
                            onClick={addClick}
                            rel="noopener noreferrer"
                            className="btn btn-primary product-details__cta">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path
                                    d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1-5.5a8.38 8.38 0 0 1-1-4A8.5 8.5 0 0 1 11.5 3 8.38 8.38 0 0 1 21 11.5Z" />
                            </svg>
                            Пиши на Ели за този продукт
                        </Link>

                        <div className="product-details__addedOn">
                            <p>Добавен на: {`${day} ${month}, ${year}`}</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}