import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp } from './Icons';

function FAQ() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: t('faq_1_q'), answer: t('faq_1_a') },
    { question: t('faq_2_q'), answer: t('faq_2_a') }
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq container">
      <h3 className="section-title"><span>{t('faq_title')}</span></h3>
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
