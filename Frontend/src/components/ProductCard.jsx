
import React from "react";
import "./ProductCart.css"; // Optional if styles are separated

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img
     src={`https://eshopy-2.onrender.com${product.image}`} 
      alt={product.name}
    onError={(e) => (e.target.src = "/images/placeholder.jpg")}
/>

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
