import getPaginationRange from "../../../utils/PaginationDots.js";

export default function AdminProductsPagination({ totalProducts, displayedProducts, productsPerPage, currentPage, setCurrentPage }) {
    let totalPages = Math.ceil(totalProducts / productsPerPage);

    if (totalPages <= 1) {
        return null;
    }

    const pages = getPaginationRange(currentPage, totalPages);

    const pageButtonClick = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const nextPageClick = () => {
        setCurrentPage(p => Math.min(p + 1, totalPages));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const previousPageClick = () => {
        setCurrentPage(p => Math.max(p - 1, 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="products-pagination-controls">
            {currentPage === 1 ||
                <button onClick={previousPageClick} className="products-page-button products-page-arrow">
                    ‹
                </button>
            }

            {pages.map((page, i) => {
                return page === '...'
                    ?
                    <span key={`... - ${i}`} className="products-page-dots">...</span>
                    :
                    <button
                        key={i}
                        className={`products-page-button ${page === currentPage && 'products-page-active'}`}
                        onClick={() => pageButtonClick(page)}>{page}
                    </button>
            })}

            {currentPage === pages[pages.length - 1] ||
                <button onClick={nextPageClick} className="products-page-button products-page-arrow">
                    ›
                </button>
            }

        </div>
    )
}