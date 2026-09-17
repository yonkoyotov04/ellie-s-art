export default function Pagination({ totalProducts, productsPerPage, currentPage, setCurrentPage }) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pages.push(i)
    }

    const pageButtonClick = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const nextPageClick = () => {
        setCurrentPage((state) => state + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const previousPageClick = () => {
        setCurrentPage((state) => state - 1);
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
                    return <button
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