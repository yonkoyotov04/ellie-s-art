
export default function AdminProductsPagination({ totalProducts, displayedProducts, productsPerPage, currentPage, setCurrentPage }) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="table-pagination">
            <span>Показани <strong>{displayedProducts}</strong> от <strong>{totalProducts}</strong> продукта</span>
            <div className="table-pagination__pages">
                {pages.map((page, i) => {
                    return <button 
                    key={i} 
                    className={page === currentPage ? 'is-current' : ''}
                    onClick={() => setCurrentPage(page)}>{page}</button>
                })}
            </div>
        </div>
    )
}