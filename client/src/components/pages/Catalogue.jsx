import { Link, useParams, useSearchParams } from "react-router";
import ProductCard from "../products/ProductCard.jsx";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import useControlledForm from "../../hooks/useControlledForm.js";
import Pagination from "../layout/Pagination.jsx";

export default function Catalogue() {
    let { category } = useParams();
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState([]);

    const data = {
        sort: searchParams.get('sort') || '',
        search: searchParams.get('search') || ''
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(12);
    
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;

    const productsDisplayed = products.slice(firstProductIndex, lastProductIndex);

    const [initialValues, setInitialValues] = useState(data);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [currentSort, setCurrentSort] = useState(null);
    const [currentSearch, setCurrentSearch] = useState(null);


    const onSubmit = (values) => {
        const formData = values;

        if (formData.search) {
            setCurrentSearch(formData.search);
        }

        if (formData.sort) {
            setCurrentSort(formData.sort);
        }

    }

    const { values, changeHandler, submitHandler } = useControlledForm(initialValues, onSubmit);

    useEffect(() => {
        const sortParam = searchParams.get('sort');
        const searchParam = searchParams.get('search');
        if (sortParam) {
            setCurrentSort(sortParam);
        }
        if (searchParam) {
            setCurrentSearch(searchParam);
        }
        setCurrentCategory(category);
    }, [category])

    useFetch('/products', setProducts, { active: true, category: currentCategory, sort: currentSort, search: currentSearch });

    return (
        <>
            <section className="page-header section--tint">
                <div className="page-header__inner">
                    <span className="eyebrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="7" />
                            <path d="M21 21l-4.3-4.3" />
                        </svg>
                        Цялото ателие на едно място
                    </span>
                    <h1 className="script-heading">Каталог</h1>
                    <p className="section-sub">Разгледай всички ръчно рисувани творби и авторски подаръци — от платна до
                        картички и керамика.</p>
                </div>
            </section>

            <svg className="citrus-divider" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ color: 'var(--lemon-100)' }}>
                <path
                    d="M0 30 Q 50 60 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 V0 H0 Z"
                    fill="currentColor" />
            </svg>

            <form className="catalogue-toolbar" onSubmit={submitHandler}>
                <div className="search-field">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.3-4.3" />
                    </svg>
                    <label htmlFor="catalogue-search" className="sr-only">Търсене в каталога</label>
                    <input
                        type="search"
                        name="search"
                        id="catalogue-search"
                        value={values.search}
                        onChange={changeHandler}
                        placeholder="Търси продукт, напр. „лимон“ или „картичка“…" />
                    <button className="btn btn-primary" type="submit">Търси</button>
                </div>

                <div className="sort-field">
                    <label htmlFor="catalogue-sort">Подреди по:</label>
                    <select id="catalogue-sort" name="sort" onChange={changeHandler}>
                        <option value="">Сортирай</option>
                        <option value="newest">Най-нови</option>
                        <option value="popular">Най-пoпулярни</option>
                        <option value="lowestPrice">Цена: ниска към висока</option>
                        <option value="highestPrice">Цена: висока към ниска</option>
                        <option value="titleAsc">Име: А–Я</option>
                        <option value="titleDesc">Име: Я–А</option>
                    </select>
                </div>
            </form>

            <div className="results-row">
                <span>Показани <strong>12</strong> от <strong>48</strong> продукта</span>
            </div>

            <section className="catalogue-section">
                <div className="catalogue-section__inner">
                    <div className="product-grid">
                        {productsDisplayed.length > 0
                            ?
                            productsDisplayed.map(product => <ProductCard key={product.id} {...product} />)
                            :
                            <div className="empty-state">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                                <h3>Няма намерени продукти</h3>
                                <p>Опитай с друга дума за търсене или премахни някой от филтрите.</p>
                            </div>
                        }
                    </div>

                    {products.length > productsPerPage && <Pagination
                        totalProducts={products.length}
                        productsPerPage={productsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />}

                </div>
            </section>
        </>
    )
}