import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './css/Navbar.css'; 
import logo from './images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/About"><img src={logo} alt="Company Logo" /></Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink 
                to="/" 
                exact="true"
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about"
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact"
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;