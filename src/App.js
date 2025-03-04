import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; 
import HomePage from "./pages/HomePage";
import ContactPage from './pages/ContactPage';
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Testimonials from "./pages/Testimonials";
import Terms from "./pages/Terms"; 
import Privacy from "./pages/Privacy";

import "./styles/styles.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/Testimonials" element={<Testimonials/>} /> 
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
