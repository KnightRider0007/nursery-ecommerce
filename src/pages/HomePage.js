// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Nursery Store!</h1>
      <h2>Plant the seeds of love and care, and watch them bloom into beautiful moments.🌱</h2>
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default HomePage;  
