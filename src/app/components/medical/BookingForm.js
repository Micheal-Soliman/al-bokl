'use client';

import { useState } from 'react';
import styles from './BookingForm.module.css';

export default function BookingForm({ 
  title = "احجز الان",
  onSubmit,
  className = '' 
}) {
  const [selectedClinic, setSelectedClinic] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { selectedClinic, selectedService, message };
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log(formData);
    }
  };

  return (
    <div className={`${styles.bookingSection} ${className}`}>
      <h4 className={styles.bookingTitle}>{title}</h4>
      <form onSubmit={handleSubmit} className={styles.bookingForm}>
        <div className={styles.formGroup}>
          <label className={styles.label}>اختار العيادة:</label>
          <select 
            value={selectedClinic} 
            onChange={(e) => setSelectedClinic(e.target.value)}
            className={styles.select}
          >
            <option value="">اختر العيادة</option>
            <option value="dokki">عيادة الدقي</option>
            <option value="sheikh-zayed">عيادة الشيخ زايد</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>اختار الخدمة:</label>
          <select 
            value={selectedService} 
            onChange={(e) => setSelectedService(e.target.value)}
            className={styles.select}
          >
            <option value="">اختر الخدمة</option>
            <option value="fertility-delay">1- تأخر الإنجاب</option>
            <option value="sexual-problems">2- مشاكل جنسية</option>
            <option value="varicocele-surgery">3- عملية الدوالى</option>
            <option value="prosthesis-surgery">4- عملية تركيب الدعامات</option>
            <option value="microscopic-inspection">5- التفتيش الميكروسكوبي</option>
            <option value="penile-curvature">6- عملية اصلاح اعوجاج القضيب</option>
            <option value="hydrocele">7- القيلة المائية</option>
            <option value="puberty-problems">8- مشاكل البلوغ</option>
            <option value="other">9- موضوع أخر</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="اكتب رسالتك هنا..."
            className={styles.textarea}
            maxLength={180}
          />
          <span className={styles.charCount}>{message.length} / 180</span>
        </div>

        <button type="submit" className={styles.submitButton}>
          إرسال
        </button>
      </form>
    </div>
  );
}
