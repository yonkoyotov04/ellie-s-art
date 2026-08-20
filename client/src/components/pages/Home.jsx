import { Link } from "react-router"
import ProductCard from "../products/ProductCard.jsx"

export default function Home() {

    return (
        <>
            <section className="section section--tint">
                <div className="section__inner">
                    <div className="section__head">
                        <div className="section__head-text">
                            <span className="eyebrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5z" />
                                </svg>
                                Току-що пристигнали
                            </span>
                            <h2 className="script-heading">Нови продукти</h2>
                        </div>
                        <Link to="catalogue.html?sort=newest" className="btn btn-outline">Разгледай всички →</Link>
                    </div>

                    <div className="product-grid">

                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                    </div>
                </div>
            </section>

            <svg className="citrus-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{color: 'var(--lemon-100)'}}>
                <path
                    d="M0 30 Q 50 60 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 V0 H0 Z"
                    fill="currentColor" />
            </svg>

            <svg className="citrus-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{color: 'var(--lemon-100)'}}>
                <path
                    d="M0 30 Q 50 0 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 V60 H0 Z"
                    fill="currentColor" />
            </svg>

            <section className="section section--tint">
                <div className="section__inner">
                    <div className="section__head">
                        <div className="section__head-text">
                            <span className="eyebrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5z" />
                                </svg>
                                Любимците на клиентите
                            </span>
                            <h2 className="script-heading">Най-продавани</h2>
                        </div>
                        <a to="catalogue.html?sort=bestselling" className="btn btn-outline">Разгледай всички →</a>
                    </div>

                    <div className="product-grid">

                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                    </div>
                </div>
            </section>
        </>
    )
}