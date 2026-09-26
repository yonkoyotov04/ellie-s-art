import getPaginationRange from "../../utils/PaginationDots.js";

export default function Pagination({ totalProducts, productsPerPage, currentPage, setCurrentPage }) {
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
        <div className="pagination" aria-label="Странициране">
            {currentPage === 1 ||
                <button className="pagination-arrow" onClick={previousPageClick} aria-label="Предишна страница">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>}

            {
                pages.map((page, i) => {
                    return page === '...' ?
                        <span key={`... - ${i}`} className="pagination-dots">...</span>
                        :
                        <button
                            type="button"
                            key={i}
                            className={page === currentPage ? 'is-current' : ''}
                            onClick={() => pageButtonClick(page)}
                        >{page}
                        </button>
                })
            }

            {currentPage === pages[pages.length - 1] ||
                <button className="pagination-arrow" onClick={nextPageClick} aria-label="Следваща страница">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>}
        </div>
    )
}