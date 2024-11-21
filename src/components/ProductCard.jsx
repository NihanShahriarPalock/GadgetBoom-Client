const ProductCard = ({ product }) => {
  return (
    <div>
      <figure>
        <img src={product.imageURL} />
      </figure>
      <div>
              <h2>Title: { product.title}</h2>
              <h2>Brand : { product.brand}</h2>
              <h2>Stock : { product.stock}</h2>
              <h2>Price : { product.price}</h2>
        
        <div className="flex gap-2">
          <button className="btn btn-primary">Add to Wishlist</button>
          <button className="btn btn-secondary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
