// src/pages/ProductListPage.js
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import Cart Context

import succulentImage from "../assets/images/Succulent-Plant.jpg";
import bonsaiImage from "../assets/images/bonsai-tree.jpg";     
import roseImage from "../assets/images/rose.webp";
import bambooImage from "../assets/images/bamboo.jpg";   
import aloeveraImage from "../assets/images/aloevera.jpg";   
import lilyImage from "../assets/images/lily.jpg";   
import moneyplantImage from "../assets/images/moneyplant.jpg";   
import snakeImage from "../assets/images/Snake+Plant.jpg";   

const products = [
  { id: 1, name: "Succulent Plant", price: 99, image: succulentImage },
  { id: 2, name: "Bonsai Tree", price: 499, image: bonsaiImage },
  { id: 3, name: "Rose Plant", price: 149, image: roseImage },
  { id: 4, name: "Bamboo Plant", price: 199, image: bambooImage },
  { id: 5, name: "Aloe Vera Plant", price: 149, image: aloeveraImage },
  { id: 6, name: "Lily Plant", price: 69, image: lilyImage },
  { id: 7, name: "Money Plant", price: 49, image: moneyplantImage },
  { id: 8, name: "Snake Plant", price: 79, image: snakeImage },
  
];

// Product Card Component
const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Use Cart Context

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs.{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

// Product List Page Component
const ProductListPage = () => {
  return (
    <div className="product-list">
      <h1>Our Plants</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
