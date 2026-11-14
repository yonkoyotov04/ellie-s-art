import useFetch from "../../hooks/useFetch.js";
import { useState } from "react";
import CategoryCard from "./CategoryCard.jsx";
import Pagination from "../layout/Pagination.jsx";

export default function Categories() {
    const [categories, setCategories] = useState([]);

    const [categoriesPerPage, setCategoriesPerPage] = useState(6);
    const [currentCategoryPage, setCurrentCategoryPage] = useState(1);

    const lastIndex = currentCategoryPage * categoriesPerPage;
    const firstIndex = lastIndex - categoriesPerPage;

    const categoriesDisplayed = categories.slice(firstIndex, lastIndex);

    useFetch('/products/categories', setCategories);

    return (

        <main className="categories-page">

            <section className="categories-intro">
                <span className="categories-decoration">♥</span>
                <p className="categories-eyebrow">Малко вдъхновение за теб</p>
                <h1>Нашите категории</h1>
                <p>
                    Всяко творение има своя история.
                    Открий това, което най-много ти харесва!
                </p>
            </section>

            <section className="categories-grid">

                {categoriesDisplayed.map(category => <CategoryCard key={category.id} {...category} />)}

            </section>

            {categories.length > categoriesPerPage && <Pagination
                totalProducts={categories.length}
                productsPerPage={categoriesPerPage}
                currentPage={currentCategoryPage}
                setCurrentPage={setCurrentCategoryPage}
            />}

        </main>

    )
}