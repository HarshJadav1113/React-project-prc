// pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import Maincontent from '../components/layout/Maincontent';
import './styles/about.css';

const About = () => {
  return (
    <Maincontent>
      <div className="page">
        <h1 className="page-title">About Us</h1>
        <p className="about-text">We are a passionate team dedicated to creating amazing web experiences.</p>
        
        <section className="mission-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">To build user-friendly applications with modern technologies.</p>
        </section>
        
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </Maincontent>
  );
};

export default About;