'use client';

import React, { useState } from 'react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const [selectedClinic, setSelectedClinic] = useState(null);

  const clinics = [
    {
      id: 'sheikh-zayed',
      name: 'عيادة الشيخ زايد',
      address: 'توين تاورز الشيخ زايد محور ٢٦ يوليو\nبرج C الدور الثاني عيادة D',
      phone: '+201018874287',
      email: 'drosama@albokl.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.8!2d31.0117!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sTwin%20Towers%2C%20Sheikh%20Zayed%20City%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1642123456789!5m2!1sen!2seg',
      coordinates: { lat: 30.0444, lng: 31.0117 }
    },
    {
      id: 'dokki',
      name: 'عيادة الدقي',
      address: '30 ش مراد بالدقي - أعلي فودافون\nالدور الرابع - عيادة 312',
      phone: '+201018874287',
      email: 'drosama@albokl.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.2!2d31.2001!3d30.0626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c2c7c3c6b9%3A0x7e8c8c8c8c8c8c8c!2s30%20Murad%20St%2C%20Ad%20Doqi%2C%20Dokki%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1642123456790!5m2!1sen!2seg',
      coordinates: { lat: 30.0626, lng: 31.2001 }
    },
    {
      id: 'shebin',
      name: 'عيادة شبين الكوم',
      address: 'برج الديوان - ميدان شرف\nالدور الخامس',
      phone: '+201018874287',
      email: 'drosama@albokl.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.8!2d31.0086!3d30.5697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c8c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2sShebin%20El%20Kom%2C%20Menofia%20Governorate!5e0!3m2!1sen!2seg!4v1642123456791!5m2!1sen!2seg',
      coordinates: { lat: 30.5697, lng: 31.0086 }
    },
    {
      id: 'ashmoun',
      name: 'عيادة أشمون',
      address: 'ش عبدالمنعم رياض - خلف مكتب البريد\nمستشفى الدكتور محمد البكل',
      phone: '+201018874287',
      email: 'drosama@albokl.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.1!2d31.0347!3d30.7890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79c8c8c8c8c8c%3A0x9c8c8c8c8c8c8c8c!2sAshmoun%2C%20Menofia%20Governorate!5e0!3m2!1sen!2seg!4v1642123456792!5m2!1sen!2seg',
      coordinates: { lat: 30.7890, lng: 31.0347 }
    }
  ];

  const handleClinicSelect = (clinic) => {
    setSelectedClinic(clinic);
  };
  return (
    <div className={styles.contactPage}>
      {/* Hero Banner Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroBackground}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.heroTagline}>
                <span className={styles.taglineHash}>#</span>
                <span className={styles.taglineText}>استبشر_خيرا</span>
              </div>
              <h1 className={styles.heroTitle}>تواصل مع الدكتور أسامة البكل</h1>
              <p className={styles.heroSubtitle}>
                أخصائي أمراض الذكورة والعقم والضعف الجنسي
              </p>
              <p className={styles.heroDescription}>
                احجز موعدك الآن للحصول على استشارة طبية متخصصة في أمراض الذكورة والعقم
                <br />
                <strong>نحن هنا لمساعدتك في رحلة العلاج</strong>
              </p>
              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4</span>
                  <span className={styles.statLabel}>عيادات</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>سنة خبرة</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>متاح للطوارئ</span>
                </div>
              </div>
              <div className={styles.heroButtons}>
                <a href="tel:+201017912197" className={styles.heroBtn + ' ' + styles.primaryBtn}>
                  <span className={styles.btnIcon}>📞</span>
                  <span className={styles.btnText}>
                    <span className={styles.btnLabel}>اتصل الآن</span>
                    <span className={styles.btnSubtext}>للحجز والاستفسار</span>
                  </span>
                </a>
                <a href="https://wa.me/201017912197" className={styles.heroBtn + ' ' + styles.whatsappBtn}>
                  <span className={styles.btnIcon}>💬</span>
                  <span className={styles.btnText}>
                    <span className={styles.btnLabel}>واتساب</span>
                    <span className={styles.btnSubtext}>رسائل فورية</span>
                  </span>
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.doctorCard}>
                <div className={styles.cardGlow}></div>
                <div className={styles.cardContent}>
                  <div className={styles.doctorAvatar}>
                    <img src="/images/doctor-osama.webp" alt="الدكتور أسامة البكل" className={styles.doctorPhoto} />
                  </div>
                  <div className={styles.doctorInfo}>
                    <h3 className={styles.doctorName}>د. أسامة البكل</h3>
                    <p className={styles.doctorTitle}>أخصائي أمراض الذكورة والعقم</p>
                    <p className={styles.doctorCredentials}>جامعة القاهرة - كلية الطب</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Locations */}
      <section className={styles.clinicsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>عياداتنا</h2>
            <p className={styles.sectionSubtitle}>اختر العيادة الأقرب إليك</p>
          </div>
          <div className={styles.clinicsGrid}>
            {clinics.map((clinic) => (
              <div 
                key={clinic.id}
                className={`${styles.clinicCard} ${selectedClinic?.id === clinic.id ? styles.active : ''}`}
                onClick={() => handleClinicSelect(clinic)}
              >
                <div className={styles.clinicHeader}>
                  <h3 className={styles.clinicTitle}>{clinic.name}</h3>
                  <div className={styles.clinicBadge}>اختر العيادة</div>
                </div>
                <div className={styles.clinicInfo}>
                  <div className={styles.infoItem}>
                    <span className={styles.icon}>📍</span>
                    <p>{clinic.address.split('\n').map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}</p>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.icon}>📞</span>
                    <a href={`tel:${clinic.phone}`}>{clinic.phone}</a>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.icon}>📧</span>
                    <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
                  </div>
                </div>
                <div className={styles.clinicActions}>
                  <a href={`tel:${clinic.phone}`} className={styles.actionBtn}>
                    <span>📞</span> اتصال
                  </a>
                  <a href={`https://wa.me/${clinic.phone.replace('+', '')}`} className={styles.actionBtn + ' ' + styles.whatsapp}>
                    <span>💬</span> واتساب
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Google Maps Section - Show All Clinics */}
          <div className={styles.allMapsSection}>
            <h3 className={styles.allMapsTitle}>خرائط جميع العيادات</h3>
            <div className={styles.mapsGrid}>
              {clinics.map((clinic) => (
                <div key={clinic.id} className={styles.mapCard}>
                  <h4 className={styles.mapCardTitle}>{clinic.name}</h4>
                  <div className={styles.mapContainer}>
                    <iframe
                      src={clinic.mapUrl}
                      width="100%"
                      height="300"
                      style={{ border: 0, borderRadius: '10px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`خريطة ${clinic.name}`}
                    ></iframe>
                  </div>
                  <div className={styles.mapCardActions}>
                    <a 
                      href={`https://www.google.com/maps/dir//${clinic.coordinates.lat},${clinic.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.directionsBtn}
                    >
                      🧭 الاتجاهات
                    </a>
                    <a 
                      href={`tel:${clinic.phone}`}
                      className={styles.callBtn}
                    >
                      📞 اتصال
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Selected Clinic Map */}
          {selectedClinic && (
            <div className={styles.selectedMapSection}>
              <h3 className={styles.mapTitle}>موقع {selectedClinic.name} - تفصيلي</h3>
              <div className={styles.mapContainer}>
                <iframe
                  src={selectedClinic.mapUrl}
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`خريطة ${selectedClinic.name}`}
                ></iframe>
              </div>
              <div className={styles.mapActions}>
                <a 
                  href={`https://www.google.com/maps/dir//${selectedClinic.coordinates.lat},${selectedClinic.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directionsBtn}
                >
                  🧭 احصل على الاتجاهات التفصيلية
                </a>
                <a 
                  href={`https://www.google.com/maps/search/${encodeURIComponent(selectedClinic.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.searchBtn}
                >
                  🔍 البحث في خرائط جوجل
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Main Contact Info */}
            <div className={styles.contactInfo}>
              <h2 className={styles.infoTitle}>معلومات التواصل الرئيسية</h2>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>
                <div className={styles.contactDetails}>
                  <h3>201017912197+</h3>
                  <p>لا تخجل أو تتأخر في التواصل معنا</p>
                  <div className={styles.contactActions}>
                    <a href="tel:+201017912197" className={styles.contactBtn}>اتصال مباشر</a>
                    <a href="https://wa.me/201017912197" className={styles.contactBtn + ' ' + styles.whatsappContact}>واتساب</a>
                  </div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📧</div>
                <div className={styles.contactDetails}>
                  <h3>Booking@albokl.com</h3>
                  <p>يمكنك أيضاً مراسلتنا عبر الإيميل</p>
                  <div className={styles.contactActions}>
                    <a href="mailto:Booking@albokl.com" className={styles.contactBtn}>إرسال إيميل</a>
                  </div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>🕒</div>
                <div className={styles.contactDetails}>
                  <h3>من السبت : الخميس</h3>
                  <p>متواجدون من أجلكم</p>
                  <p className={styles.workingHours}>12:00 ظ - 8:00 م</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2 className={styles.formTitle}>احجز موعدك الآن</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>الاسم الكامل</label>
                  <input type="text" className={styles.input} placeholder="أدخل اسمك الكامل" required />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>رقم الهاتف</label>
                    <input type="tel" className={styles.input} placeholder="رقم الهاتف" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>العمر</label>
                    <input type="number" className={styles.input} placeholder="العمر" required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>البريد الإلكتروني</label>
                  <input type="email" className={styles.input} placeholder="البريد الإلكتروني" />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>نوع الاستشارة</label>
                  <select className={styles.select} required>
                    <option value="">اختر نوع الاستشارة</option>
                    <option value="erectile-dysfunction">ضعف الإنتصاب</option>
                    <option value="premature-ejaculation">سرعة القذف</option>
                    <option value="infertility">تأخر الإنجاب</option>
                    <option value="varicocele">دوالي الخصيتين</option>
                    <option value="hormonal-issues">مشاكل الهرمونات</option>
                    <option value="puberty-issues">مشاكل البلوغ</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>وصف الحالة</label>
                  <textarea 
                    className={styles.textarea} 
                    placeholder="اكتب وصف مختصر لحالتك أو استفسارك"
                    rows="4"
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  إرسال طلب الحجز
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className={styles.emergencySection}>
        <div className={styles.container}>
          <div className={styles.emergencyCard}>
            <h3 className={styles.emergencyTitle}>🚨 للحالات الطارئة</h3>
            <p className={styles.emergencyText}>
              في حالة الطوارئ الطبية، اتصل بنا فوراً على الرقم التالي
            </p>
            <a href="tel:+201017912197" className={styles.emergencyPhone}>201017912197+</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
