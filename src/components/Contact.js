import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    alert('شكراً لتواصلك! سنتصل بك قريباً.');
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact container">
      <h3 className="section-title"><span>تواصل معنا واحجز موعدك</span></h3>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={onSubmit}>
          <label>الاسم الكامل</label>
          <input name="name" value={form.name} onChange={onChange} required />
          <label>رقم الهاتف</label>
          <input name="phone" type="tel" value={form.phone} onChange={onChange} required />
          <label>رسالتك (اختياري)</label>
          <textarea name="message" value={form.message} onChange={onChange} rows="4" />
          <button className="btn primary" type="submit">أرسل الآن</button>
        </form>
        <div className="contact-info">
          <h4>برستيج لتجارة الإطارات و الرنجات</h4>
          <p><strong>العنوان:</strong> القصيص ٤، دبي، الإمارات العربية المتحدة</p>
          <p><strong>الهاتف:</strong> <a href="tel:+971552698080">0552698080</a></p>
          <p><strong>واتساب / هاتف:</strong> <a href="tel:+97142674488">042674488</a></p>
          <p><strong>البريد الإلكتروني:</strong> <a href="mailto:alsaeedt@emirates.net.ae">alsaeedt@emirates.net.ae</a></p>
          <p><strong>ساعات العمل:</strong> 8ص - 8م (طوال أيام الإسبوع)</p>
          <div className="map-placeholder">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807.0091410138059!2d55.40230238827087!3d25.29315263627815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ea000a8571d%3A0xf43e65c35e976519!2z2YXYs9iq2LTZgdmJINin2YTYqNmE2YjZgdmKINin2YTYg9i02YjYsdmK2KfYqiDYqtmG2YXYp9iv!5e0!3m2!1sen!2sae!4v1723743034872!5m2!1sen!2sae"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;