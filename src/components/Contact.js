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

    emailjs.sendForm(
        'YOUR_SERVICE_ID',      // <-- PASTE YOUR SERVICE ID HERE
        'YOUR_TEMPLATE_ID',     // <-- PASTE YOUR TEMPLATE ID HERE
        form.current,
        'YOUR_PUBLIC_KEY'       // <-- PASTE YOUR PUBLIC KEY HERE
      )
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setStatus('success');
          setFeedbackMessage(t('form_feedback_success'));
          e.target.reset();
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
              <a href="tel:+971552698080" style={{display: 'inline-block', direction: 'ltr', paddingRight: '3px' }}>+971 55 2698 080</a><br />
              <strong>{t('contact_phone')}:</strong> 
              <a href="tel:+97142674488" style={{ display: 'inline-block', direction: 'ltr', paddingRight: '3px' }}>+971 4 267 4488</a><br />
              <strong>{t('contact_email')}:</strong> <a href="mailto:alsaeedt@emirates.net.ae">alsaeedt@emirates.net.ae</a><br />
              <strong>{t('contact_address')}:</strong> {t('contact_address_value')}
            </p>
            <div className="map-placeholder">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807.0091410138059!2d55.40230238827087!3d25.29315263627815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ea000a8571d%3A0xf43e65c35e976519!2z2YXYs9iq2LTZgdmJINin2YTYqNmE2YjZgdmKINin2YTYg9i02YjYsdmK2KfYqiDYqtmG2YXYp9iv!5e0!3m2!1sen!2sae!4v1723743034872!5m2!1sen!2sae"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen="" loading="lazy" title="Our Location">
              </iframe>
            </div>
          </div>

          <div className="contact-form">
            {status !== 'success' && status !== 'error' ? (
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
