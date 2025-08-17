import React from 'react';
import { FaSun, FaMoon } from './Icons';
import './ThemeToggleButton.css';

function ThemeToggleButton({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggleButton;