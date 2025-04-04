// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import MainContent from './layout/Maincontent';
import './styles/home.css';

const Home = () => {
  return (
    <MainContent>
      <div className="page">
        <h1 className="page-title">Welcome to Our Website!</h1>
        <p className="page-intro">This is the home page. Explore our site using the navigation menu.</p>
        
        <div className="features">
          <h2>Our Features:</h2>
          <ul className="feature-list">
            <li>Learn about us on the <Link to="/about" className="feature-link">About Page</Link></li>
            <li>Reach out via the <Link to="/contact" className="feature-link">Contact Page</Link></li>
          </ul>
        </div>
      </div>
    </MainContent>
  );
};

export default Home;