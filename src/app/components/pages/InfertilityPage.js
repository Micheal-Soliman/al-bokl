import React from 'react';
import styles from './InfertilityPage.module.css';
import Link from 'next/link';

const InfertilityPage = () => {
  const infertilityServices = [
    {
      title: "اختبار الخصوبة ليست العقم",
      description: "فحوصات شاملة لتقييم الخصوبة والتشخيص الدقيق لأسباب تأخر الإنجاب",
      icon: "🔬",
      link: "/infertility/fertility-test"
    },
    {
      title: "هل مشاكل الخصوبة ليست العقم",
      description: "تحديد الفرق بين مشاكل الخصوبة المؤقتة والعقم الدائم وطرق العلاج المناسبة",
      icon: "❓",
      link: "/infertility/fertility-problems"
    },
    {
      title: "أم هي عدد الحيوانات المنوية",
      description: "تحليل شامل لعدد وجودة الحيوانات المنوية وتأثيرها على الخصوبة",
      icon: "🧬",
      link: "/infertility/sperm-count"
    }
  ];

  return (
    <div className={styles.infertilityPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>تأخر الإنجاب</h1>
          <p className={styles.heroDescription}>
            تشخيص وعلاج تأخر الإنجاب عند الرجال بأحدث الطرق الطبية والجراحية
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>خدماتنا المتخصصة</h2>
          <div className={styles.servicesGrid}>
            {infertilityServices.map((service, index) => (
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

      {/* Treatment Approach */}
      <section className={styles.approachSection}>
        <div className={styles.container}>
          <div className={styles.approachGrid}>
            <div className={styles.approachCard}>
              <h3 className={styles.approachTitle}>التشخيص الدقيق</h3>
              <p className={styles.approachText}>
                فحوصات شاملة لتحديد السبب الحقيقي وراء تأخر الإنجاب
              </p>
            </div>
            <div className={styles.approachCard}>
              <h3 className={styles.approachTitle}>العلاج المتكامل</h3>
              <p className={styles.approachText}>
                خطة علاجية شاملة تجمع بين العلاج الدوائي والجراحي حسب الحالة
              </p>
            </div>
            <div className={styles.approachCard}>
              <h3 className={styles.approachTitle}>المتابعة المستمرة</h3>
              <p className={styles.approachText}>
                متابعة دقيقة لضمان نجاح العلاج وتحقيق الحمل الطبيعي
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>نتائج مثبتة</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>85%</div>
              <div className={styles.statLabel}>نسبة نجاح العلاج</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statLabel}>حالة حمل ناجحة</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>سنوات خبرة</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfertilityPage;
