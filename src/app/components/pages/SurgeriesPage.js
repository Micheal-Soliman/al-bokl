import React from 'react';
import styles from './SurgeriesPage.module.css';
import Link from 'next/link';

const SurgeriesPage = () => {
  const surgicalServices = [
    {
      title: "دوالي الخصيتين",
      description: "عملية دوالي الخصيتين بالجراحة الميكروسكوبية للتخلص من الألم نهائياً وعلاج تأخر الإنجاب",
      icon: "🔬",
      link: "/surgeries/varicocele"
    },
    {
      title: "دعامات العضو الذكري",
      description: "الحل النهائي لضعف الإنتصاب - دعامات هيدروليكية ومرنة بأحدث التقنيات",
      icon: "🔧",
      link: "/surgeries/penile-implants"
    },
    {
      title: "التفتيش الميكروسكوبي",
      description: "أدق التقنيات لاستخراج الحيوانات المنوية من الخصية في حالات انعدام الحيوانات المنوية",
      icon: "🔍",
      link: "/surgeries/microscopic-inspection"
    },
    {
      title: "إصلاح إعوجاج القضيب",
      description: "تصحيح انحناء القضيب لممارسة علاقة زوجية طبيعية وصحية",
      icon: "⚙️",
      link: "/surgeries/penile-curvature"
    },
    {
      title: "القيلة المائية",
      description: "علاج تورم وانتفاخ الخصية بالجراحة الميكروسكوبية المتقدمة",
      icon: "💧",
      link: "/surgeries/hydrocele"
    }
  ];

  return (
    <div className={styles.surgeriesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>العمليات الجراحية</h1>
          <p className={styles.heroDescription}>
            عمليات جراحية متخصصة بأحدث التقنيات الطبية والجراحة الميكروسكوبية
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>العمليات المتخصصة</h2>
          <div className={styles.servicesGrid}>
            {surgicalServices.map((service, index) => (
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

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>الجراحة الميكروسكوبية</h3>
              <p className={styles.featureText}>
                استخدام أحدث تقنيات الجراحة الميكروسكوبية لضمان أعلى معدلات النجاح
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>خبرة متخصصة</h3>
              <p className={styles.featureText}>
                أكثر من 10 سنوات خبرة في جراحات أمراض الذكورة والصحة الجنسية
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>متابعة شاملة</h3>
              <p className={styles.featureText}>
                متابعة دقيقة قبل وبعد العملية لضمان أفضل النتائج والتعافي السريع
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurgeriesPage;
