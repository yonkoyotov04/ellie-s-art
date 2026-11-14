import { Link } from "react-router";
import AdminProductCard from "./AdminProductCard.jsx";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch.js";
import useDelete from "../../../hooks/useDelete.jsx";
import AdminProductsPagination from "./APPagination.jsx";

export default function AdminProducts() {
    const [products, setProducts] = useState([]);

    useFetch('/products', setProducts);

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(3);

    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;

    const displayedProducts = products.slice(firstProductIndex, lastProductIndex);

    const { DeletePrompt, onDeleteClick } = useDelete(false, products, setProducts);

    return (

        <main className="products-page">

            <section className="products-welcome">
                <div className="products-welcome-content">
                    <span className="products-eyebrow">ТВОЯТ ТВОРЧЕСКИ КАТАЛОГ</span>
                    <h1>Всички твои творения на едно място!</h1>
                    <p>
                        Тук можеш лесно да разглеждаш и управляваш своите продукти.
                        Редактирай информацията, променяй тяхната видимост или
                        добавяй нови идеи към каталога.
                    </p>
                </div>

                <div className="products-welcome-decoration">
                    <span>✿</span>
                </div>
            </section>

            <section className="products-management">

                <div className="products-section-heading">
                    <div>
                        <span className="products-section-eyebrow">ТВОЯТА КОЛЕКЦИЯ</span>
                        <h2>Управление на продукти</h2>
                        <p>Всички продукти, които си създала досега.</p>
                    </div>

                    <Link to="/admin/addProduct" className="products-add-button">
                        <span>＋</span>
                        Добави продукт
                    </Link>
                </div>

                <div className="products-toolbar">
                    <div className="products-search">
                        <span className="products-search-icon">⌕</span>
                        <input type="text" placeholder="Потърси продукт по име или ID..." />
                    </div>

                    <span className="products-total">
                        Общо продукти: <strong>{products.length}</strong>
                    </span>
                </div>

                <div className="products-list">

                    {displayedProducts.map(product =>
                        <AdminProductCard
                            key={product.id}
                            deleteTrigger={onDeleteClick}
                            {...product} />)}

                </div>
                {DeletePrompt}

                <div className="products-pagination">

                    <span className="products-pagination-info">
                        Показани {firstProductIndex + 1}–{lastProductIndex} от {products.length} продукта
                    </span>

                    {products.length > productsPerPage
                        &&
                        <AdminProductsPagination
                            totalProducts={products.length}
                            displayedProducts={displayedProducts.length}
                            productsPerPage={productsPerPage}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />}

                </div>

            </section>

        </main>
    )
}