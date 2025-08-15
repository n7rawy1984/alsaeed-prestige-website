import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from './Icons';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container row between">
        <div>© {new Date().getFullYear()} Prestige Tyres & Wheels - جميع الحقوق محفوظة</div>
        <div className="socials">
            <a href="https://www.instagram.com/perstige_tyre_wheel" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.facebook.com/prestigewheel1" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://wa.me/97142674488" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;