import { Link } from "react-router"
import ProductCard from "../products/ProductCard.jsx"
import { useState } from "react"
import useFetch from "../../hooks/useFetch.js";

export default function Home() {

    const [newestProducts, setNewestProducts] = useState([]);
    const [mostPopularProducts, setMostPopularProducts] = useState([]);

    useFetch('/products', setNewestProducts, { active: true, sort: 'newest', limit: 6 })
    useFetch('/products', setMostPopularProducts, { active: true, sort: 'popular', limit: 6 })

    return (

        <main className="home-page">

            <section className="product-section newest-section">
                <div className="section-heading">
                    <span className="heading-decoration" aria-hidden="true">♥</span>
                    <p className="section-eyebrow">Fresh from the studio</p>
                    <h1>Нови продукти</h1>
                    <p className="section-description">
                        Little pieces of happiness, freshly made for you.
                    </p>
                </div>

                <div className="product-list">
                    {newestProducts.map(product => <ProductCard key={product.id} {...product} />)}
                </div>

                <div className="section-action">
                    <Link className="catalogue-button" to="/catalogue?sort=newest">
                        Explore Newest <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </section>

            <section className="product-section popular-section">
                <div className="section-heading">
                    <span className="heading-decoration" aria-hidden="true">♥</span>
                    <p className="section-eyebrow">Little customer favourites</p>
                    <h2>Най-популярни</h2>
                    <p className="section-description">
                        The creations everyone seems to fall in love with.
                    </p>
                </div>

                <div className="product-list">
                    {mostPopularProducts.map(product => <ProductCard key={product.id} {...product} />)}
                </div>

                <div className="section-action">
                    <Link className="catalogue-button popular-button" to="/catalogue?sort=popular">
                        Explore Favourites <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </section>

        </main>
    )
}