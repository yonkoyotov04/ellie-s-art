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

        <nav className="catalogue-pagination" aria-label="Страници на каталога">
            {currentPage === 1 ||
                <button className="pagination-arrow" onClick={previousPageClick} aria-label="Предишна страница">
                    <span aria-hidden="true">←</span>
                    <span>Предишна</span>
                </button>}

            <div className="pagination-numbers">
                {pages.map((page, i) => {
                    return page === '...'
                        ?
                        <span key={`... - ${i}`} class="pagination-dots" aria-hidden="true">···</span>
                        :
                        <button
                            type="button"
                            key={i}
                            className={page === currentPage ? 'pagination-number pagination-current' : 'pagination-number'}
                            onClick={() => pageButtonClick(page)}
                        >{page}</button>

                })}
            </div>

            {currentPage === pages[pages.length - 1] ||
                <button className="pagination-arrow" onClick={nextPageClick} aria-label="Следваща страница">
                    <span>Следваща</span>
                    <span aria-hidden="true">→</span>
                </button>
            }
        </nav>
    )
}