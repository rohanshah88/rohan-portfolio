import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Rohan</div>

        <div className="nav-right">
          <a href="/resume.pdf" download className="resume-btn">
            Resume
          </a>

          <button className="dark-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>

          <div className="hamburger" onClick={toggleMenu}>
            <span className={menuOpen ? 'line top rotated' : 'line top'}></span>
            <span className={menuOpen ? 'line middle hidden' : 'line middle'}></span>
            <span className={menuOpen ? 'line bottom rotated-reverse' : 'line bottom'}></span>
          </div>
        </div>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#blog" onClick={closeMenu}>Blog</a></li> 
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}
