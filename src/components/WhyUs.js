import React from 'react';
import { FaShieldAlt, FaAward, FaHeadset, FaShippingFast } from './Icons';

const features = [
  { icon: <FaShieldAlt />, title: 'ضمان الجودة', desc: 'جميع منتجاتنا أصلية وبضمان المصنع' },
  { icon: <FaAward />, title: 'خبرة أكثر من 40 عاماً', desc: 'في مجال الإطارات والجنوط الفاخرة' },
  { icon: <FaHeadset />, title: 'دعم فني', desc: 'فريق دعم فني متاح 24/7' },
  { icon: <FaShippingFast />, title: 'توصيل سريع', desc: 'خدمة توصيل لجميع أنحاء دبي' }
];

function WhyUs() {
  return (
    <section id="why-us" className="why-us container">
      <h3 className="section-title"><span>لماذا تختار برستيج؟</span></h3>
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