import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage} className="btn small lang-switcher">
      {i18n.language === 'ar' ? 'EN' : 'عربي'}
    </button>
  );
}

export default LanguageSwitcher;