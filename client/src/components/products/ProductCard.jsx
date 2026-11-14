import { Link } from "react-router"

export default function ProductCard({ id, title, price, image, added_on }) {

    const apiURL = 'http://localhost:2105/uploads/'

    const isNew = (added_on) => {
        const addedDate = new Date(added_on);
        const now = new Date();

        const difference = now - addedDate;

        const tenDaysTime = 10 * 24 * 60 * 60 * 1000;

        return difference < tenDaysTime;
    }

    return (
        <article className="product-card">
            <Link className="product-image-link" to={`/product/${id}/details`}>
                {image
                    ?
                    <img src={`${apiURL}${image}`} alt={title} />
                    :
                    <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.6">
                            <rect x="3" y="3" width="18" height="18" rx="3" />
                            <circle cx="8.5" cy="8.5" r="1.6" />
                            <path d="M21 15l-5-5L5 21" />
                        </svg>
                    </>
                }
                {isNew(added_on) && (<span className="product-badge">New</span>)}
            </Link>
            <div className="product-info">
                <h2>{title}</h2>
                <p className="product-price">{price} €</p>
            </div>
        </article>
    )
}