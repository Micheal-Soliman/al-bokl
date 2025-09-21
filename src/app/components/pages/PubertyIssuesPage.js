import React from 'react';
import styles from './PubertyIssuesPage.module.css';
import Link from 'next/link';

const PubertyIssuesPage = () => {
  const pubertyServices = [
    {
      title: "تأخر البلوغ",
      description: "تشخيص وعلاج حالات تأخر البلوغ عند الذكور بأحدث الطرق الطبية",
      icon: "⏰",
      link: "/puberty-issues/delayed-puberty"
    },
    {
      title: "البلوغ المبكر",
      description: "علاج حالات البلوغ المبكر ومتابعة النمو الطبيعي",
      icon: "⚡",
      link: "/puberty-issues/early-puberty"
    },
    {
      title: "مشاكل النمو",
      description: "تقييم ومعالجة اضطرابات النمو والتطور الجنسي",
      icon: "📈",
      link: "/puberty-issues/growth-problems"
    }
  ];

  return (
    <div className={styles.pubertyPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>مشاكل البلوغ</h1>
          <p className={styles.heroDescription}>
            تشخيص وعلاج مشاكل البلوغ والنمو الجنسي عند الذكور بخبرة متخصصة
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>خدماتنا المتخصصة</h2>
          <div className={styles.servicesGrid}>
            {pubertyServices.map((service, index) => (
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

      {/* Info Section */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>التقييم الشامل</h3>
              <p className={styles.infoText}>
                فحص شامل لتقييم مراحل البلوغ والنمو الجنسي
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>العلاج الهرموني</h3>
              <p className={styles.infoText}>
                علاج هرموني متخصص لتصحيح اضطرابات البلوغ
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>المتابعة الدورية</h3>
              <p className={styles.infoText}>
                متابعة مستمرة لضمان النمو الطبيعي والصحي
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PubertyIssuesPage;
