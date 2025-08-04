import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './ProductDetail.css'

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   axios.get(`https://eshopy-2.onrender.com${productId}`)
  //     .then((res) => setProduct(res.data));
  // }, [productId]);
  
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);


  const addToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    storedCart.push(product);
    localStorage.setItem("cart", JSON.stringify(storedCart));
    alert("Added to cart!");
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="detail-view">
      <img src={`http://localhost:3000${product.image}`} width="250" alt={product.name} />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
