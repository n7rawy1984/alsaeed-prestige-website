import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from './Icons';

const faqs = [
  {
    question: 'كيف أعرف أن الإطار يحتاج للاستبدال؟',
    answer: 'هناك عدة علامات منها: وصول عمق النقشة إلى 1.6 مم، ظهور تشققات جانبية، تآكل غير منتظم، أو عند مرور 5 سنوات من تاريخ الإنتاج.'
  },
  {
    question: 'ما الفرق بين الإطارات الصيفية والشتوية؟',
    answer: 'الإطارات الصيفية مصممة لتحمل الحرارة العالية وتوفر تماسكاً أفضل على الطرق الجافة، بينما الشتوية تحتوي على أخاديد خاصة للتماسك على الثلج والجليد.'
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq container">
      <h3 className="section-title"><span>أسئلة شائعة</span></h3>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h4>{faq.question}</h4>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {activeIndex === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;