import React from "react";
import "../styles/styles.css"; // Ensure correct CSS file is imported
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="privacy-page"> 
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-date">Last Updated: March 2025</p>
      <div className="privacy-content">
        <h2>Introduction</h2>
        <p>Welcome to Evergreen Nest. Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.</p>

        <h2>Information We Collect</h2>
        <p>We collect personal details such as your name, email, phone number, and address when you make a purchase or contact us.</p>

        <h2>How We Use Your Information</h2>
        <p>We use your information to process orders, provide customer support, and improve our services.</p>

        <h2>Cookies & Tracking</h2>
        <p>We use cookies to enhance user experience and analyze website traffic. You can manage cookie preferences in your browser settings.</p>

        <h2>Data Security</h2>
        <p>We take appropriate measures to protect your data from unauthorized access and breaches.</p>

        <h2>Third-Party Services</h2>
        <p>We may share information with trusted third parties for payment processing and delivery services.</p>

        <h2>Changes to Privacy Policy</h2>
        <p>We may update this policy from time to time. Please review it periodically for any changes.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions, please <Link to="/contact" className="contact-link"> <strong>Contact Us</strong></Link></p>
      </div>
    </div>
  );
};

export default Privacy;
