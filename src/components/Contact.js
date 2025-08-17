import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setFeedbackMessage('');

    // --- This is a simulation. Replace with your actual form submission logic. ---
    setTimeout(() => {
      // Simulate a random success or failure
      if (Math.random() > 0.1) { // 90% chance of success
        setStatus('success');
        setFeedbackMessage('شكراً لك! تم استلام رسالتك بنجاح وسنتواصل معك قريباً.');
        setFormData({ name: '', phone: '', message: '' }); // Clear form
      } else {
        setStatus('error');
        setFeedbackMessage('عذراً، حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.');
      }
    }, 1500); // Simulate 1.5 second delay
    // --- End of simulation ---
  };

  return (
    <div id="contact" className="contact">
      <div className="container">
        <h2 className="section-title"><span>تواصل معنا</span></h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h4>كن على تواصل</h4>
            <p>نحن هنا لمساعدتك. سواء كان لديك سؤال حول منتجاتنا أو كنت بحاجة إلى استشارة، فلا تتردد في الاتصال بنا.</p>
            <p>
  <strong>الموبايل:</strong> 
  <a href="tel:+971552698080" style={{display: 'inline-block', direction: 'ltr',paddingRight: '52px' }}>+971 55 2698 080</a><br /><strong>الهاتف:</strong> 
  <a href="tel:+97142674488" style={{ display: 'inline-block', direction: 'ltr',paddingRight: '70px' }}>+971 4 267 4488</a><br />
  <strong>البريد الإلكتروني:</strong> <a href="mailto:alsaeedt@emirates.net.ae">alsaeedt@emirates.net.ae</a><br />
  <strong>العنوان:</strong> القصيص ٤ ,دبي ,الإمارات العربية المتحدة  🇦🇪
</p>
            <div className="map-placeholder">
              {/* Replace with your actual Google Maps embed iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.835150825391!2d55.35697681501046!3d25.24249998387537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE0JzMyLjAiTiA1NcKwMjEnMzMuMCJF!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
          </div>

          <div className="contact-form">
            {status !== 'success' && status !== 'error' ? (
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">الاسم الكامل</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                <label htmlFor="phone">رقم الهاتف</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

                <label htmlFor="message">رسالتك (اختياري)</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
                
                <button type="submit" className="btn primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'جارِ الإرسال...' : 'إرسال الرسالة'}
                </button>
              </form>
            ) : (
              <div className={`feedback-message ${status}`}>
                <p>{feedbackMessage}</p>
                {status === 'error' && (
                  <button onClick={() => setStatus('idle')} className="btn">حاول مرة أخرى</button>
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