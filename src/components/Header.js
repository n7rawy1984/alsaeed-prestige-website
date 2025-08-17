import React, { useState } from 'react';
import { FaWhatsapp } from './Icons';
import ThemeToggleButton from './ThemeToggleButton';

// A simple hamburger icon component
const HamburgerIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
  </svg>
);

const ASSETS = {
  logo: "/assets/images/logo.png"
};

function Header({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container row">
        <div className="brand">
          <img src={ASSETS.logo} alt="Prestige Tyres & Wheels Logo" className="logo" />
          <div className="brand-text">
            <h1>برستيج للإطارات والجنوط</h1>
            <p>استيراد وتصدير الإطارات والجنوط</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nav">
          <a href="#services">خدماتنا</a>
          <a href="#products">منتجاتنا</a>
          <a href="#blog">المدونة</a>
          <a href="#contact">تواصل معنا</a>
        </nav>
        
        {/* Mobile Menu & Contact Buttons */}
        <div className="header-right">
          <div className="header-contact">
            <a href="https://wa.me/97142674488" target="_blank" rel="noopener noreferrer" className="btn small whatsapp-btn" aria-label="Contact us on WhatsApp">
              <FaWhatsapp /> <span className="whatsapp-text">WhatsApp</span>
            </a>
            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
          </div>
          <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open navigation menu">
            <HamburgerIcon />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="nav-mobile">
          <a href="#services" onClick={() => setIsMenuOpen(false)}>خدماتنا</a>
          <a href="#products" onClick={() => setIsMenuOpen(false)}>منتجاتنا</a>
          <a href="#blog" onClick={() => setIsMenuOpen(false)}>المدونة</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>تواصل معنا</a>
        </nav>
      )}
    </header>
  );
}

export default Header;