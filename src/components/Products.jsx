import { useState } from "react";

import products from "../data/products";

import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

function Products() {
    const PRODUCTS_PER_PAGE = 3;

    const pages = [];

    for (let i = 0; i < products.length; i += PRODUCTS_PER_PAGE) {
        pages.push(products.slice(i, i + PRODUCTS_PER_PAGE));
    }

    const [currentPage, setCurrentPage] = useState(0);

    const [selectedProduct, setSelectedProduct] = useState(null);

    function nextSlide() {
        if (currentPage < pages.length - 1) {
            setCurrentPage((prev) => prev + 1);
        }
    }

    function prevSlide() {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
        }
    }

    return (
        <section className="products">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Featured Collection</span>

                    <h2 className="section-title">Featured Products</h2>

                    <p className="section-description">
                        Discover timeless essentials designed for modern
                        everyday living.
                    </p>
                </div>

                <div className="products__wrapper">
                    <button
                        className="products__arrow"
                        onClick={prevSlide}
                        disabled={currentPage === 0}
                    >
                        <LuChevronLeft />
                    </button>

                    <div className="products__viewport">
                        <div
                            className="products__track"
                            style={{
                                transform: `translateX(-${currentPage * 100}%)`,
                            }}
                        >
                            {pages.map((page, index) => (
                                <div key={index} className="products__page">
                                    {page.map((product) => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            onQuickView={setSelectedProduct}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="products__arrow"
                        onClick={nextSlide}
                        disabled={currentPage === pages.length - 1}
                    >
                        <LuChevronRight />
                    </button>
                </div>
            </div>

            <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section>
    );
}

export default Products;
