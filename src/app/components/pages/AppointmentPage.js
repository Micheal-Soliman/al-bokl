'use client';

import React, { useState } from 'react';
import styles from './AppointmentPage.module.css';
import Link from 'next/link';
import { CLINICS } from '../utils/constants';

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    condition: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    urgency: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const conditions = [
    'ضعف الانتصاب',
    'سرعة القذف',
    'نقص هرمون الذكورة',
    'دوالي الخصيتين',
    'العقم عند الرجال',
    'التهاب البروستاتا',
    'مشاكل الخصوبة',
    'استشارة عامة',
    'أخرى'
  ];

  const timeSlots = [
    '12:00 ظهراً',
    '1:00 ظهراً',
    '2:00 ظهراً',
    '3:00 عصراً',
    '4:00 عصراً',
    '5:00 عصراً',
    '6:00 مساءً',
    '7:00 مساءً'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        age: '',
        condition: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
        urgency: 'normal'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const clinicInfo = {
    address: 'الشيخ زايد، محور 26 يوليو، مبنى التوين تاورز C، الدور الثاني، عيادة D',
    workingHours: 'السبت إلى الأربعاء من 12:00 ظهراً حتى 8:00 مساءً',
    phone: '+201017912197',
    alternatePhone: '+201018874287',
    email: 'Booking@albokl.com'
  };

  return (
    <div className={styles.appointmentPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>حجز موعد</h1>
            <p className={styles.heroDescription}>
              احجز موعدك مع د. أسامة البكل للحصول على استشارة طبية متخصصة في أمراض الذكورة والصحة الجنسية
            </p>
            <div className={styles.quickContact}>
              <a href={`tel:${clinicInfo.phone}`} className={styles.phoneButton}>
                📞 اتصل الآن: {clinicInfo.phone}
              </a>
              <a href={`mailto:${clinicInfo.email}`} className={styles.emailButton}>
                ✉️ {clinicInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.appointmentContent}>
          {/* Appointment Form */}
          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>احجز موعدك الآن</h2>
              <p className={styles.formDescription}>
                املأ النموذج التالي وسنتواصل معك لتأكيد الموعد
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✅</div>
                <h3>تم إرسال طلبك بنجاح!</h3>
                <p>سنتواصل معك خلال 24 ساعة لتأكيد الموعد</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={styles.errorMessage}>
                <div className={styles.errorIcon}>❌</div>
                <h3>حدث خطأ في الإرسال</h3>
                <p>يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.appointmentForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    الاسم الكامل <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    رقم الهاتف <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="+20 1xxxxxxxxx"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="example@email.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="age" className={styles.label}>
                    العمر <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    min="18"
                    max="100"
                    className={styles.input}
                    placeholder="العمر"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="condition" className={styles.label}>
                  نوع الاستشارة <span className={styles.required}>*</span>
                </label>
                <select
                  id="condition"
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  required
                  className={styles.select}
                >
                  <option value="">اختر نوع الاستشارة</option>
                  {conditions.map((condition, index) => (
                    <option key={index} value={condition}>
                      {condition}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="preferredDate" className={styles.label}>
                    التاريخ المفضل <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="preferredTime" className={styles.label}>
                    الوقت المفضل <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                    className={styles.select}
                  >
                    <option value="">اختر الوقت المفضل</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="urgency" className={styles.label}>
                  مستوى الأولوية
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="normal">عادي</option>
                  <option value="urgent">عاجل</option>
                  <option value="emergency">طارئ</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  تفاصيل إضافية أو أسئلة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className={styles.textarea}
                  placeholder="اكتب أي تفاصيل إضافية أو أسئلة تود طرحها..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner}></span>
                    جاري الإرسال...
                  </>
                ) : (
                  'احجز الموعد'
                )}
              </button>
            </form>
          </div>

          {/* Clinic Info */}
          <div className={styles.infoSection}>

            {/* All Clinics Info */}
            <div className={styles.allClinicsInfo}>
              <h3 className={styles.infoTitle}>جميع عياداتنا</h3>
              {CLINICS.map((clinic, index) => (
                <div key={index} className={styles.compactClinicCard}>
                  <div className={styles.compactClinicHeader}>
                    <span className={styles.compactClinicIcon}>📍</span>
                    <h4 className={styles.compactClinicName}>{clinic.name}</h4>
                  </div>
                  <div className={styles.compactClinicHours}>
                    <span className={styles.compactHoursIcon}>🕒</span>
                    <div className={styles.compactHoursText}>
                      {clinic.hours.map((hour, idx) => (
                        <p key={idx}>{hour}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.clinicInfo}>
              {/* <h3 className={styles.infoTitle}>معلومات العيادة</h3>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📍</div>
                <div className={styles.infoContent}>
                  <h4>العنوان</h4>
                  <p>{clinicInfo.address}</p>
                </div>
              </div> */}

              {/* <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🕒</div>
                <div className={styles.infoContent}>
                  <h4>مواعيد العمل</h4>
                  <p>{clinicInfo.workingHours}</p>
                  <p className={styles.closedDays}>مغلق: الخميس والجمعة</p>
                </div>
              </div> */}

              

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📞</div>
                <div className={styles.infoContent}>
                  <h4>أرقام التواصل</h4>
                  <p>
                    <a href={`tel:${clinicInfo.phone}`} className={styles.phoneLink}>
                      {clinicInfo.phone}
                    </a>
                  </p>
                  <p>
                    <a href={`tel:${clinicInfo.alternatePhone}`} className={styles.phoneLink}>
                      {clinicInfo.alternatePhone}
                    </a>
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>✉️</div>
                <div className={styles.infoContent}>
                  <h4>البريد الإلكتروني</h4>
                  <p>
                    <a href={`mailto:${clinicInfo.email}`} className={styles.emailLink}>
                      {clinicInfo.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* <div className={styles.emergencyInfo}>
              <h3 className={styles.emergencyTitle}>حالات الطوارئ</h3>
              <p className={styles.emergencyText}>
                في حالات الطوارئ الطبية، يرجى الاتصال فوراً أو التوجه لأقرب مستشفى
              </p>
              <a href={`tel:${clinicInfo.phone}`} className={styles.emergencyButton}>
                📞 اتصال طارئ
              </a>
            </div> */}

            

            {/* <div className={styles.mapSection}>
              <h3 className={styles.mapTitle}>موقع العيادة</h3>
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapIcon}>🗺️</div>
                <p>خريطة موقع العيادة</p>
                <p className={styles.mapNote}>الشيخ زايد - مبنى التوين تاورز</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
