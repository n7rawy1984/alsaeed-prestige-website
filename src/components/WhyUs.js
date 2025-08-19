import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaShieldAlt, FaAward, FaHeadset, FaShippingFast } from './Icons';

function WhyUs() {
  const { t } = useTranslation();

  const features = [
    { icon: <FaShieldAlt />, title: t('feature_quality_guarantee'), desc: t('feature_quality_guarantee_desc') },
    { icon: <FaAward />, title: t('feature_experience_years'), desc: t('feature_experience_years_desc') },
    { icon: <FaHeadset />, title: t('feature_support'), desc: t('feature_support_desc') },
    { icon: <FaShippingFast />, title: t('feature_delivery'), desc: t('feature_delivery_desc') }
  ];

  return (
    <section id="why-us" className="why-us container">
      <h3 className="section-title"><span>{t('whyus_title')}</span></h3>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;
  