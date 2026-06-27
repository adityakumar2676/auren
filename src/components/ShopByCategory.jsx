import React, { useState } from "react";
import categories from "../data/category";
import CategoryCard from "./CategoryCard";

function ShopByCategory() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCategories = categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
        <section className="categories">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Explore</span>

                    <h2 className="section-title">Shop by Category</h2>

                    <p className="section-description">
                        From everyday essentials to statement pieces, discover
                        collections crafted for modern living.
                    </p>
                </div>

                <div className="categories__search">
                    <input
                        className="categories__input"
                        type="text"
                        placeholder="Search category"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="categories__grid">
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((category) => (
                            <CategoryCard
                                key={category.id}
                                category={category}
                            />
                        ))
                    ) : (
                        <p className="categories__empty">
                            No categories found.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ShopByCategory;
