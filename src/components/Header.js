import React from 'react';
import { FaWhatsapp } from './Icons';

const ASSETS = {
    logo: "/assets/images/logo.png"
};

function Header() {
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
        <nav className="nav">
          <a href="#services">خدماتنا</a>
          <a href="#products">منتجاتنا</a>
          <a href="#blog">المدونة</a>
          <a href="#contact">تواصل معنا</a>
        </nav>
        <div className="header-contact">
          <a href="https://wa.me/97142674488" target="_blank" rel="noopener noreferrer" className="btn small whatsapp-btn">
             <FaWhatsapp /> <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;