import { Link } from "react-router";
import useFetch from "../../hooks/useFetch.js";
import { useState } from "react";
import CategoryCard from "./CategoryCard.jsx";

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useFetch('/products/categories', setCategories);

    return (
        <>
            <section className="page-header section--tint">
                <div className="page-header__inner">
                    <span className="eyebrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="7" height="7" rx="1.5" />
                            <rect x="14" y="3" width="7" height="7" rx="1.5" />
                            <rect x="3" y="14" width="7" height="7" rx="1.5" />
                            <rect x="14" y="14" width="7" height="7" rx="1.5" />
                        </svg>
                        Разгледай по вид
                    </span>
                    <h1 className="script-heading">Категории</h1>
                    <p className="section-sub">Избери категория, за да откриеш точните творби за теб — от платна до дребни
                        авторски подаръци.</p>
                </div>
            </section>

            <svg className="citrus-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ color: 'var(--lemon-100)' }}>
                <path
                    d="M0 30 Q 50 60 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 V0 H0 Z"
                    fill="currentColor" />
            </svg>

            <section className="category-grid">
                {categories.map(category => <CategoryCard key={category.id} {...category} />)}
            
            </section>
        </>

    )
}