import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Main.css';

const Navbar: React.FC = () => {
  return (
    <>
      <div className="top-header">
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <header className="navbar">
        <div className="navbar-logo">
          <NavLink to="/" aria-label="Home">
            <img src="./logo.png" alt="Logo" className="logo" />
          </NavLink>
          <span className="navbar-title"> IKSHANA CHARITABLE TRUST </span>
        </div>
        <nav className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Who We are
          </NavLink>
          <NavLink
            to="/programs"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Events
          </NavLink>
          <NavLink
            to="/get-involved"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Get Involved
          </NavLink>
          <NavLink
            to="/donate"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Donate Now
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Contact Us
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
