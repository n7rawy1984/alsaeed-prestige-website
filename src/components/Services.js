import React from 'react';

const servicesData = [
  { id: 1, title: 'تركيب احترافي', desc: 'نستخدم أحدث المعدات لتركيب إطاراتك بدقة وسرعة، مع ضمان تثبيت آمن ومحكم.' },
  { id: 2, title: 'ترصيص وميزانية', desc: 'خدمة ترصيص وميزانية بالكمبيوتر للقضاء على الاهتزازات وضمان ثبات السيارة.' },
  { id: 3, title: 'تعبئة نيتروجين', desc: 'حافظ على ضغط الإطارات مثالياً لفترة أطول لأداء أكثر ثباتاً في درجات الحرارة المرتفعة.' },
  { id: 4, title: 'إصلاح ثقوب', desc: 'خدمة سريعة وموثوقة لإصلاح ثقوب الإطارات وإعادتك إلى الطريق بأمان.' },
];

function Services() {
  return (
    <section id="services" className="services container">
      <h3 className="section-title"><span>خدمات تليق بسيارتك</span></h3>
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