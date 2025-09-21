import React from 'react';
import styles from './SexualHealthPage.module.css';
import Link from 'next/link';

const SexualHealthPage = () => {
  const sexualHealthServices = [
    {
      title: "ضعف الإنتصاب",
      description: "علاج شامل لضعف الإنتصاب بأحدث الطرق الطبية والجراحية",
      icon: "🔧",
      link: "/sexual-health/erectile-dysfunction"
    },
    {
      title: "سرعة القذف",
      description: "حلول فعالة لعلاج سرعة القذف وتحسين الأداء الجنسي",
      icon: "⏱️",
      link: "/sexual-health/premature-ejaculation"
    },
    {
      title: "فقدان الرغبة الجنسية",
      description: "علاج اضطرابات الرغبة الجنسية وإعادة الحيوية",
      icon: "💪",
      link: "/sexual-health/low-libido"
    },
    {
      title: "مشاكل الهرمونات",
      description: "تشخيص وعلاج اضطرابات الهرمونات المؤثرة على الصحة الجنسية",
      icon: "🧬",
      link: "/sexual-health/hormonal-issues"
    }
  ];

  return (
    <div className={styles.sexualHealthPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>المشاكل الجنسية</h1>
          <p className={styles.heroDescription}>
            علاج شامل ومتخصص لجميع المشاكل الجنسية بأحدث الطرق الطبية والجراحية
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>خدماتنا المتخصصة</h2>
          <div className={styles.servicesGrid}>
            {sexualHealthServices.map((service, index) => (
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
              <h3 className={styles.infoTitle}>التشخيص الدقيق</h3>
              <p className={styles.infoText}>
                نستخدم أحدث الطرق التشخيصية لتحديد السبب الجذري للمشكلة
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>العلاج المتكامل</h3>
              <p className={styles.infoText}>
                خطة علاجية شاملة تجمع بين العلاج الدوائي والنفسي والجراحي حسب الحاجة
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>المتابعة المستمرة</h3>
              <p className={styles.infoText}>
                متابعة دقيقة لضمان نجاح العلاج وتحقيق أفضل النتائج
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SexualHealthPage;
