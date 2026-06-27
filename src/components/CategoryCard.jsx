function CategoryCard({ category }) {
    return (
        <article className="category-card">
            <div className="category-card__image-wrapper">
                <img
                    src={category.image}
                    alt={category.name}
                    className="category-card__image"
                />
            </div>

            <div className="category-card__content">
                <h3 className="category-card__title">{category.name}</h3>
            </div>
        </article>
    );
}

export default CategoryCard;
