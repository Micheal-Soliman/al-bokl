import React from 'react';
import styles from './DoctorsPage.module.css';

const DoctorsPage = () => {
  return (
    <div className={styles.doctorsPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>للأطباء</h1>
          <p className={styles.heroDescription}>
            معلومات مخصصة للزملاء الأطباء والمتخصصين في المجال الطبي
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>التعاون المهني</h2>
              <p className={styles.cardText}>
                نرحب بالتعاون مع الزملاء الأطباء في جميع التخصصات لتقديم أفضل رعاية طبية للمرضى
              </p>
            </div>
            
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>التدريب والتطوير</h2>
              <p className={styles.cardText}>
                برامج تدريبية متخصصة في طب وجراحة أمراض الذكورة والصحة الجنسية
              </p>
            </div>
            
            <div className={styles.contentCard}>
              <h2 className={styles.cardTitle}>الاستشارات الطبية</h2>
              <p className={styles.cardText}>
                متاحون لتقديم الاستشارات الطبية المتخصصة للزملاء في الحالات المعقدة
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;
