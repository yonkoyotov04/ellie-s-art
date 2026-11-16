import { useParams, useSearchParams } from "react-router";
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
    const [productsPerPage, setProductsPerPage] = useState(5);

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
        <main className="catalogue-page">

            <section className="catalogue-intro">
                <span className="catalogue-decoration" aria-hidden="true">♥</span>
                <p className="catalogue-eyebrow">Малко красота за всеки ден</p>
                <h1>Нашият каталог</h1>
                <p className="catalogue-subtitle">
                    Открий нещо специално, създадено с любов и внимание към всеки детайл.
                </p>
            </section>

            <section className="catalogue-toolbar" aria-label="Търсене и подреждане">

                <form className="catalogue-search" onSubmit={submitHandler}>
                    <label className="visually-hidden" htmlFor="catalogue-search-input">
                        Търси продукти
                    </label>

                    <input type="search"
                        name="search"
                        id="catalogue-search-input"
                        value={values.search}
                        onChange={changeHandler}
                        placeholder="Търси продукт, напр. „лимон“ или „картичка“…" />

                    <div className="catalogue-sort">
                        <label htmlFor="catalogue-sort-select">Подреди по:</label>

                        <select id="catalogue-sort-select" name="sort" onChange={changeHandler}>
                            <option value="">Сортирай</option>
                            <option value="newest">Най-нови</option>
                            <option value="popular">Най-пoпулярни</option>
                            <option value="lowestPrice">Цена: ниска към висока</option>
                            <option value="highestPrice">Цена: висока към ниска</option>
                            <option value="titleAsc">Име: А–Я</option>
                            <option value="titleDesc">Име: Я–А</option>
                        </select>
                    </div>

                    <button type="submit" className="catalogue-search-button">
                        <span aria-hidden="true">⌕</span>
                        Търси
                    </button>
                </form>
            </section>

            <div className="catalogue-results-info">
                <p>Малки съкровища, направени с любов.</p>
                <span>Показани са {productsDisplayed.length} продукта</span>
            </div>

            <section className="catalogue-grid" aria-label="Продукти">

                {productsDisplayed.length > 0
                    ?
                    productsDisplayed.map(product => <ProductCard key={product.id} {...product} />)
                    :
                    <div className="empty-state">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                        <h3>Няма намерени продукти</h3>
                        <p>Опитай с друга дума за търсене или премахни някой от филтрите.</p>
                    </div>
                }

            </section>

            {products.length > productsPerPage &&
                <Pagination
                    totalProducts={products.length}
                    productsPerPage={productsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />}

        </main>
    )
}