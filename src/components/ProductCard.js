import React from "react";

const ProductCard = ({ product, addToCart, removeFromCart, cart }) => {
  // Cek apakah produk sudah ada di cart
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>

      {isInCart ? (
        <button onClick={() => removeFromCart(product.id)}>
          Remove from Cart
        </button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
