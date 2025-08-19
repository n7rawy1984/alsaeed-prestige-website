import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    setFeedbackMessage('');

    // This is the real EmailJS sending logic
    emailjs.sendForm(
        'service_3pfimkq',      // <-- PASTE YOUR SERVICE ID HERE
        'template_t4x823f',     // Your Template ID
        form.current,
        'ovTMTpkfrQ-KfeEag'       // Your Public Key
      )
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setStatus('success');
          setFeedbackMessage(t('form_feedback_success'));
          e.target.reset(); // Clear form fields after successful submission
      }, (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
          setFeedbackMessage(t('form_feedback_error'));
      });
  };

  return (
    <div id="contact" className="contact">
      <div className="container">
        <h2 className="section-title"><span>{t('contact_title')}</span></h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h4>{t('contact_info_title')}</h4>
            <p>{t('contact_info_p')}</p>
            <p>
              <strong>{t('contact_mobile')}:</strong> 
              <a href="tel:+971552698080" style={{display: 'inline-block', direction: 'ltr', paddingRight: '52px' }}>+971 55 2698 080</a><br />
              <strong>{t('contact_phone')}:</strong> 
              <a href="tel:+97142674488" style={{ display: 'inline-block', direction: 'ltr', paddingRight: '70px' }}>+971 4 267 4488</a><br />
              <strong>{t('contact_email')}:</strong> <a href="mailto:alsaeedt@emirates.net.ae">alsaeedt@emirates.net.ae</a><br />
              <strong>{t('contact_address')}:</strong> {t('contact_address_value')}
            </p>
            <div className="map-placeholder">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.232446755462!2d55.37892181501099!3d25.26268298386568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c5b95fe2b7b%3A0x867a6c6c4c37e19e!2sPrestige%20Tyres%20%26%20Wheels!5e0!3m2!1sen!2sae!4v1629881333185!5m2!1sen!2sae"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen="" loading="lazy" title="Our Location">
              </iframe>
            </div>
          </div>

          <div className="contact-form">
            {status !== 'success' && status !== 'error' ? (
              // Ensure the form uses ref={form} and onSubmit={sendEmail}
              <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="name">{t('form_full_name')}</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="phone">{t('form_phone_number')}</label>
                <input type="tel" id="phone" name="phone" required />

                <label htmlFor="message">{t('form_message')}</label>
                <textarea id="message" name="message" rows="5"></textarea>
                
                <button type="submit" className="btn primary" disabled={status === 'sending'}>
                  {status === 'sending' ? t('form_sending') : t('form_send')}
                </button>
              </form>
            ) : (
              <div className={`feedback-message ${status}`}>
                <p>{feedbackMessage}</p>
                {status === 'error' && (
                  <button onClick={() => setStatus('idle')} className="btn">{t('form_try_again')}</button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;