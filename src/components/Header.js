import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Animal</h1>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">Главная</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">Хищники</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">Птици</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">Рептилии</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Грызуны</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="cta-button">Помощь</button>
          <button 
            className={`menu-toggle ${isMenuOpen ? 'menu-toggle-open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
