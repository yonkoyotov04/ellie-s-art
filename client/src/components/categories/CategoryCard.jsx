import { Link } from "react-router";

export default function CategoryCard({ id, name, product_count }) {

    return (

        <Link to={`/catalogue/${id}`} className="category-card category-yellow">

            <div className="category-art decoration-art">
                <span className="art-circle"></span>
                <span className="art-circle-small"></span>
                <span className="art-star">✳</span>
            </div>

            <div className="category-content">
                <span className="category-number">01 / КОЛЕКЦИЯ</span>
                <h2>{name}</h2>

                <div className="category-bottom">
                    <span>{product_count} продукта</span>
                    <span className="category-arrow">↗</span>
                </div>
            </div>

        </Link>
    )
}