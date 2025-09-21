import React from 'react';
import styles from './EmergencySurgeriesPage.module.css';
import Link from 'next/link';

const EmergencySurgeriesPage = () => {
  const emergencyServices = [
    {
      title: "التواء الخصية",
      description: "تدخل جراحي عاجل لعلاج التواء الخصية وإنقاذ الخصية من التلف",
      icon: "🚨",
      link: "/emergency-surgeries/testicular-torsion"
    },
    {
      title: "كسر القضيب",
      description: "إصلاح جراحي فوري لكسر القضيب لتجنب المضاعفات الخطيرة",
      icon: "⚡",
      link: "/emergency-surgeries/penile-fracture"
    },
    {
      title: "الانتصاب المستمر",
      description: "علاج عاجل للانتصاب المستمر (القساح) لمنع تلف الأنسجة",
      icon: "🔴",
      link: "/emergency-surgeries/priapism"
    }
  ];

  return (
    <div className={styles.emergencyPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>جراحات الطوارئ</h1>
          <p className={styles.heroDescription}>
            تدخل جراحي عاجل ومتخصص للحالات الطارئة على مدار 24 ساعة
          </p>
          <div className={styles.emergencyContact}>
            <span className={styles.emergencyText}>للطوارئ اتصل الآن:</span>
            <a href="tel:+201017912197" className={styles.emergencyPhone}>201017912197+</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>حالات الطوارئ</h2>
          <div className={styles.servicesGrid}>
            {emergencyServices.map((service, index) => (
              <Link href={service.link} key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <span className={styles.readMore}>اقرأ المزيد ←</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className={styles.warningSection}>
        <div className={styles.container}>
          <div className={styles.warningCard}>
            <h3 className={styles.warningTitle}>⚠️ تحذير مهم</h3>
            <p className={styles.warningText}>
              حالات الطوارئ الجراحية تتطلب تدخل فوري. لا تتأخر في طلب المساعدة الطبية
              عند ظهور أي من الأعراض التالية:
            </p>
            <ul className={styles.warningList}>
              <li>ألم شديد ومفاجئ في الخصية</li>
              <li>انتصاب مستمر لأكثر من 4 ساعات</li>
              <li>ألم شديد في القضيب مع تورم</li>
              <li>نزيف غير طبيعي</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencySurgeriesPage;
