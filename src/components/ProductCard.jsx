import { LuEye } from "react-icons/lu";

function ProductCard({ product, onQuickView }) {
    return (
        <article className="product-card">
            <div className="product-card__image-wrapper">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-card__image"
                />

                <button
                    className="product-card__quick-view"
                    onClick={() => onQuickView(product)}
                >
                    <LuEye />
                    <span>Quick View</span>
                </button>
            </div>

            <div className="product-card__content">
                <span className="product-card__category">
                    {product.category}
                </span>

                <h3 className="product-card__title">{product.name}</h3>

                <p className="product-card__price">
                    ${product.price.toFixed(2)}
                </p>
            </div>
        </article>
    );
}

export default ProductCard;
