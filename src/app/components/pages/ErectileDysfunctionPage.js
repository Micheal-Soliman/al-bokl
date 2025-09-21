import React from 'react';
import styles from './ErectileDysfunctionPage.module.css';
import Link from 'next/link';

const ErectileDysfunctionPage = () => {
  const treatmentOptions = [
    {
      title: "العلاج الدوائي",
      description: "أدوية حديثة وآمنة لعلاج ضعف الانتصاب مع متابعة طبية دقيقة",
      icon: "💊",
    },
    {
      title: "العلاج بالموجات التصادمية",
      description: "تقنية حديثة غير جراحية لتحسين تدفق الدم وعلاج ضعف الانتصاب",
      icon: "⚡",
    },
    {
      title: "دعامات العضو الذكري",
      description: "حل جراحي نهائي للحالات المتقدمة مع نتائج ممتازة",
      icon: "🔧",
    },
    {
      title: "العلاج النفسي",
      description: "علاج الأسباب النفسية والتوتر المؤثر على الأداء الجنسي",
      icon: "🧠",
    }
  ];

  const causes = [
    "مرض السكري",
    "ارتفاع ضغط الدم",
    "أمراض القلب والأوعية الدموية",
    "السمنة وقلة النشاط",
    "التدخين والكحول",
    "الضغط النفسي والتوتر",
    "انخفاض هرمون التستوستيرون",
    "بعض الأدوية"
  ];

  return (
    <div className={styles.erectilePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>مشاكل الانتصاب</h1>
          <p className={styles.heroDescription}>
            علاج شامل لضعف الانتصاب ومشاكل الأداء الجنسي بأحدث الطرق الطبية
          </p>
        </div>
      </section>

      {/* Treatment Options */}
      <section className={styles.treatmentSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>خيارات العلاج المتاحة</h2>
          <div className={styles.treatmentGrid}>
            {treatmentOptions.map((treatment, index) => (
              <div key={index} className={styles.treatmentCard}>
                <div className={styles.treatmentIcon}>{treatment.icon}</div>
                <h3 className={styles.treatmentTitle}>{treatment.title}</h3>
                <p className={styles.treatmentDescription}>{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className={styles.causesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>الأسباب الشائعة</h2>
          <div className={styles.causesGrid}>
            {causes.map((cause, index) => (
              <div key={index} className={styles.causeItem}>
                <span className={styles.causeIcon}>•</span>
                <span className={styles.causeText}>{cause}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>احجز استشارتك الآن</h2>
            <p className={styles.ctaDescription}>
              لا تتردد في طلب المساعدة. نحن هنا لمساعدتك في التغلب على هذه المشكلة بسرية تامة
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              احجز موعد
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErectileDysfunctionPage;
