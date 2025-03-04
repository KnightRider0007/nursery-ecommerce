import React from "react";
import "../styles/styles.css"; // Ensure correct CSS file is imported
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="terms-page">
      <h1 className="terms-title">Terms & Conditions</h1>
      <p className="terms-date">Last Updated: March 2025</p>

      <div className="terms-content">
        <h2>Introduction</h2>
        <p>Welcome to our Nursery E-Commerce Store! By accessing our website, you agree to abide by these terms and conditions.</p>

        <h2>Use of Services</h2>
        <p>Our website allows you to browse and purchase a variety of plants and gardening products. You agree to use our services lawfully and responsibly.</p>

        <h2>Orders & Payments</h2>
        <p>All orders must be paid in full before shipping. We accept various payment methods, including credit/debit cards and online wallets.</p>

        <h2>Shipping & Returns</h2>
        <p>We strive to deliver your orders on time. If you're not satisfied with your purchase, returns must be requested within 7 days of delivery.</p>

        <h2>Liability & Rights</h2>
        <p>We reserve the right to update product listings, pricing, and policies without prior notice.</p>

        <h2>Contact</h2>
        <p>If you have any questions, please <Link to="/contact" className="contact-link"><strong>Contact Us</strong></Link>.</p>
      </div>
    </div>
  );
};

export default Terms;
