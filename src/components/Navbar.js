import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Add scroll effect to navbar (shadow after scrolling)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Logo / Brand */}
        <div className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">🧠</span>
          <span className="logo-text">Rohan<span className="logo-dot">.</span></span>
        </div>

        {/* Right controls */}
        <div className="nav-right">
          <a href="/resume.pdf" download className="resume-btn">Resume</a>

          <button className="dark-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Hamburger */}
          <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`line top ${menuOpen ? 'rotated' : ''}`}></span>
            <span className={`line middle ${menuOpen ? 'hidden' : ''}`}></span>
            <span className={`line bottom ${menuOpen ? 'rotated-reverse' : ''}`}></span>
          </div>
        </div>
      </div>

      {/* Navigation links */}
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
