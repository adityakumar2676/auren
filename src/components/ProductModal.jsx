import { LuX } from "react-icons/lu";

function ProductModal({ product, onClose }) {
    if (!product) return null;

    return (
        <div className="product-modal" onClick={onClose}>
            <div
                className="product-modal__content"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="product-modal__close" onClick={onClose}>
                    <LuX />
                </button>

                <div className="product-modal__image-wrapper">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-modal__image"
                    />
                </div>

                <div className="product-modal__details">
                    <span className="product-modal__category">
                        {product.category}
                    </span>

                    <h2 className="product-modal__title">{product.name}</h2>

                    <p className="product-modal__price">
                        ${product.price.toFixed(2)}
                    </p>

                    <p className="product-modal__description">
                        {product.description}
                    </p>

                    <div className="product-modal__actions">
                        <button className="btn btn-primary">Add to Cart</button>

                        <button className="btn btn-secondary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;
