import React from 'react';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();

  const servicesData = [
    { id: 1, title: t('service_fitting_new'), desc: t('service_fitting_new_desc') },
    { id: 2, title: t('service_balancing'), desc: t('service_balancing_desc') },
    { id: 3, title: t('service_nitrogen'), desc: t('service_nitrogen_desc') },
    { id: 4, title: t('service_puncture_repair'), desc: t('service_puncture_repair_desc') },
  ];

  return (
    <section id="services" className="services container">
      <h3 className="section-title"><span>{t('services_title')}</span></h3>
      <div className="services-grid">
        {servicesData.map(s => (
          <div key={s.id} className="service-card">
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
