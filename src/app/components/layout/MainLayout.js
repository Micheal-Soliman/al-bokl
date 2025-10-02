import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';
import styles from './MainLayout.module.css';
export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>المحتوى طبي توعوي لا يغني عن استشارة الطبيب — النتائج تختلف من حالة لأخرى . </h3>
            <p className={styles.ctaText}>
              تواصل معنا مباشرة للحصول على استشارة طبية متخصصة
            </p>
            <a href="/contact/appointment" className={styles.ctaButton}>احجز استشارة</a>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingButtons />
    </>
  );
}
