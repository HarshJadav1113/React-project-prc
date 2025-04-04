import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css'; // Create this file for styling

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-info">
          <h3>Our Company</h3>
          <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <p>123 Business Street, City, Country</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">FB</a>
            <a href="https://twitter.com" aria-label="Twitter">TW</a>
            <a href="https://instagram.com" aria-label="Instagram">IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;