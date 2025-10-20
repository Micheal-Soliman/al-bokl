"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ContactPage.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import ProtectedEmail from "../ui/ProtectedEmail";

const ContactPage = () => {
  const [selectedClinic, setSelectedClinic] = useState(null);

  const clinics = [
    {
      id: "sheikh-zayed",
      name: "عيادة الشيخ زايد",
      address:
        "توين تاورز الشيخ زايد محور ٢٦ يوليو\nبرج C الدور الثاني عيادة D",
      phone: "+201018874287",
      email: "drosama@albokl.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.8!2d31.0117!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sTwin%20Towers%2C%20Sheikh%20Zayed%20City%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1642123456789!5m2!1sen!2seg",
      coordinates: { lat: 30.0444, lng: 31.0117 },
    },
    {
      id: "dokki",
      name: "عيادة الدقي",
      address: "30 ش مراد بالدقي - أعلي فودافون\nالدور الرابع - عيادة 312",
      phone: "+201018874287",
      email: "drosama@albokl.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.2!2d31.2001!3d30.0626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c2c7c3c6b9%3A0x7e8c8c8c8c8c8c8c!2s30%20Murad%20St%2C%20Ad%20Doqi%2C%20Dokki%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1642123456790!5m2!1sen!2seg",
      coordinates: { lat: 30.0626, lng: 31.2001 },
    },
    {
      id: "shebin",
      name: "عيادة شبين الكوم",
      address: "برج الديوان - ميدان شرف\nالدور الخامس",
      phone: "+201018874287",
      email: "drosama@albokl.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.8!2d31.0086!3d30.5697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c8c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2sShebin%20El%20Kom%2C%20Menofia%20Governorate!5e0!3m2!1sen!2seg!4v1642123456791!5m2!1sen!2seg",
      coordinates: { lat: 30.5697, lng: 31.0086 },
    },
    {
      id: "ashmoun",
      name: "عيادة أشمون",
      address: "ش عبدالمنعم رياض - خلف مكتب البريد\nمستشفى الدكتور محمد البكل",
      phone: "+201018874287",
      email: "drosama@albokl.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.1!2d31.0347!3d30.7890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79c8c8c8c8c8c%3A0x9c8c8c8c8c8c8c8c!2sAshmoun%2C%20Menofia%20Governorate!5e0!3m2!1sen!2seg!4v1642123456792!5m2!1sen!2seg",
      coordinates: { lat: 30.789, lng: 31.0347 },
    },
  ];

  const handleClinicSelect = (clinic) => {
    setSelectedClinic(clinic);
  };
  return (
    <div className={styles.contactPage}>
      {/* Hero Banner Section */}
      {/* <section className={styles.heroSection}>
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
                احجز موعدك الآن للحصول على استشارة طبية متخصصة في أمراض الذكورة
                والعقم
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
                <a
                  href="tel:+201017912197"
                  className={styles.heroBtn + " " + styles.primaryBtn}
                >
                  <span className={styles.btnIcon}>📞</span>
                  <span className={styles.btnText}>
                    <span className={styles.btnLabel}>اتصل الآن</span>
                    <span className={styles.btnSubtext}>للحجز والاستفسار</span>
                  </span>
                </a>
                <a
                  href="https://wa.me/201017912197"
                  className={styles.heroBtn + " " + styles.whatsappBtn}
                >
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
                    <Image
                      src="/images/doctor-osama.webp"
                      alt="الدكتور أسامة البكل"
                      className={styles.doctorPhoto}
                      width={120}
                      height={120}
                      quality={90}
                      priority={true}
                    />
                  </div>
                  <div className={styles.doctorInfo}>
                    <h3 className={styles.doctorName}>د. أسامة البكل</h3>
                    <p className={styles.doctorTitle}>
                      أخصائي أمراض الذكورة والعقم
                    </p>
                    <p className={styles.doctorCredentials}>
                      جامعة القاهرة - كلية الطب
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Clinic Locations */}
      <section className={styles.clinicsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>مواقع عياداتنا</h2>
            <p className={styles.sectionSubtitle}>
              اختر العيادة الأقرب إليك للحصول على أفضل خدمة طبية
            </p>
          </div>

          <div className={styles.clinicsMainGrid}>
            {clinics.map((clinic) => (
              <div
                key={clinic.id}
                className={`${styles.clinicCard} ${
                  selectedClinic?.id === clinic.id ? styles.active : ""
                }`}
                onClick={() => handleClinicSelect(clinic)}
              >
                {/* Map Section */}
                <div className={styles.mapSection}>
                  <iframe
                    src={clinic.mapUrl}
                    width="100%"
                    height="250"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`خريطة ${clinic.name}`}
                  ></iframe>
                </div>

                {/* Clinic Information */}
                <div className={styles.clinicInfo}>
                  <h3 className={styles.clinicTitle}>{clinic.name}</h3>

                  <div className={styles.contactDetails}>
                    <div className={styles.contactItem}>
                      <span className={styles.locationIcon}>📍</span>
                      <div className={styles.contactText}>
                        {clinic.address.split("\n").map((line, i) => (
                          <div key={i} className={styles.addressLine}>
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.contactItem}>
                      <span className={styles.emailIcon}>✉️</span>
                      <div className={styles.contactText}>
                        <ProtectedEmail 
                          email={clinic.email}
                          className={styles.contactLink}
                        >
                          {clinic.email}
                        </ProtectedEmail>
                      </div>
                    </div>

                    <div className={styles.contactItem}>
                      <span className={styles.phoneIcon}>📞</span>
                      <div className={styles.contactText}>
                        <a
                          href={`tel:${clinic.phone}`}
                          className={styles.contactLink}
                        >
                          {clinic.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Working Hours and Help Section */}

          {/* Selected Clinic Map */}
          {/* {selectedClinic && (
            <div className={styles.selectedMapSection}>
              <h3 className={styles.mapTitle}>
                موقع {selectedClinic.name} - تفصيلي
              </h3>
              <div className={styles.mapContainer}>
                <iframe
                  src={selectedClinic.mapUrl}
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: "15px" }}
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
                  href={`https://www.google.com/maps/search/${encodeURIComponent(
                    selectedClinic.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.searchBtn}
                >
                  🔍 البحث في خرائط جوجل
                </a>
              </div>
            </div>
          )} */}
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Main Contact Info */}
            {/* <div className={styles.contactInfo}>
              <h2 className={styles.infoTitle}>معلومات التواصل الرئيسية</h2>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>
                <div className={styles.contactDetails}>
                  <h3>201017912197+</h3>
                  <p>لا تخجل أو تتأخر في التواصل معنا</p>
                  <div className={styles.contactActions}>
                    <a href="tel:+201017912197" className={styles.contactBtn}>
                      اتصال مباشر
                    </a>
                    <a
                      href="https://wa.me/201017912197"
                      className={
                        styles.contactBtn + " " + styles.whatsappContact
                      }
                    >
                      واتساب
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📧</div>
                <div className={styles.contactDetails}>
                  <h3>Booking@albokl.com</h3>
                  <p>يمكنك أيضاً مراسلتنا عبر الإيميل</p>
                  <div className={styles.contactActions}>
                    <a
                      href="mailto:Booking@albokl.com"
                      className={styles.contactBtn}
                    >
                      إرسال إيميل
                    </a>
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
            </div> */}
            <div className={styles.helpSection}>
              {/* <div className={styles.helpGrid}> */}
              <div className={styles.workingHoursCard}>
                <div className={styles.cardIcon}>🕒</div>
                <h3 className={styles.cardTitle}>ساعات العمل</h3>
                <div className={styles.scheduleList}>
                  <div className={styles.scheduleItem}>
                    <span className={styles.dayLabel}>الإثنين، الجمعة</span>
                    <span className={styles.timeRange}>09:00 - 17:00</span>
                  </div>
                  <div className={styles.scheduleItem}>
                    <span className={styles.dayLabel}>يوم السبت</span>
                    <span className={styles.timeRange}>09:00 - 17:00</span>
                  </div>
                  <div className={styles.scheduleItem}>
                    <span className={styles.dayLabel}>الاحد</span>
                    <span className={styles.timeRange}>مغلق</span>
                  </div>
                </div>
                <div className={styles.helpNote}>
                  <p>للحجز والاستفسار اتصل بنا في أي وقت</p>
                </div>
                <div className={styles.socialLinks}>
                  <a
                    href="https://www.facebook.com/drosamaalbokl/"
                    className={`${styles.socialLink} ${styles.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className={styles.socialIcon} />
                    <span className={styles.socialName}>Facebook</span>
                  </a>

                  <a
                    href="https://www.instagram.com/osamaalbokl/"
                    className={`${styles.socialLink} ${styles.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className={styles.socialIcon} />
                    <span className={styles.socialName}>Instagram</span>
                  </a>

                  <a
                    href="https://www.youtube.com/@OsamaAlbokl"
                    className={`${styles.socialLink} ${styles.youtube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className={styles.socialIcon} />
                    <span className={styles.socialName}>YouTube</span>
                  </a>
                </div>
              </div>
              {/* </div> */}
            </div>
            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2 className={styles.formTitle}>احجز موعدك الآن</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>الاسم الكامل</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>رقم الهاتف</label>
                    <input
                      type="tel"
                      className={styles.input}
                      placeholder="رقم الهاتف"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>ادخل العياده </label>
                    <select className={styles.select} required>
                      <option value="">اختر العياده</option>
                      <option value="sheikh-zayed">عيادة الشيخ زايد</option>
                      <option value="dokki">عيادة الدقي</option>
                      <option value="shebin">عيادة شبين الكوم</option>
                      <option value="ashmon">عيادة اشمون</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>البريد الإلكتروني</label>
                  <input
                    type="email"
                    className={styles.input}
                    placeholder="البريد الإلكتروني"
                  />
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

      {/* Social Media & Follow Section */}
      {/* <section className={styles.socialSection}>
        <div className={styles.container}>
          <div className={styles.socialGrid}>
            <div className={styles.followCard}>
              <h3 className={styles.followTitle}>تابعنا:</h3>
              <div className={styles.socialLinks}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink + " " + styles.instagram}
                >
                  <span className={styles.socialIcon}>📷</span>
                  <span className={styles.socialName}>Instagram</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink + " " + styles.youtube}
                >
                  <span className={styles.socialIcon}>📹</span>
                  <span className={styles.socialName}>YouTube</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink + " " + styles.facebook}
                >
                  <span className={styles.socialIcon}>📘</span>
                  <span className={styles.socialName}>Facebook</span>
                </a>
              </div>
            </div>

            <div className={styles.emergencyCard}>
              <h3 className={styles.emergencyTitle}>🚨 للحالات الطارئة</h3>
              <p className={styles.emergencyText}>
                في حالة الطوارئ الطبية، اتصل بنا فوراً على الرقم التالي
              </p>
              <a href="tel:+201017912197" className={styles.emergencyPhone}>
                201017912197+
              </a>
              <div className={styles.emergencyNote}>
                <p>متاحون 24/7 للحالات العاجلة</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;
