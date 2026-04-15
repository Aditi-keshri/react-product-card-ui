function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="image-wrap">
        <img src={product.image} alt={product.title} />
        <span className="product-label">{product.label}</span>
      </div>

      <div className="product-info">
        <h2>{product.title}</h2>
        <div className="purchase-row">
          <p>{product.price}</p>
          <button type="button" aria-label={`Add ${product.title} to cart`}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
