import Link from 'next/link';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>تواصل معنا</h2>
          <p className={styles.subtitle}>
            احجز استشارتك الطبية مع د. أسامة البكل - استشاري طب وجراحة أمراض الذكورة
          </p>
        </div>
        
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.icon}>📞</div>
            <p className={styles.cardTitle}><strong>اتصل بنا</strong></p>
            <div className={styles.contactInfo}>
              <a href="tel:+201017912197" className={styles.contactLink}>
                +201017912197
              </a>
              <a href="tel:+201018874287" className={styles.contactLink}>
                +201018874287
              </a>
            </div>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.icon}>📧</div>
            <p className={styles.cardTitle}><strong>البريد الإلكتروني</strong></p>
            <div className={styles.contactInfo}>
              <a href="mailto:Booking@albokl.com" className={styles.contactLink}>
                Booking@albokl.com
              </a>
            </div>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.icon}>📍</div>
            <p className={styles.cardTitle}><strong>العنوان</strong></p>
            <div className={styles.contactInfo}>
              <p className={styles.address}>
                الشيخ زايد، محور 26 يوليو<br />
                مبنى التوين تاورز C، الدور الثاني<br />
                عيادة D
              </p>
            </div>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.icon}>🕒</div>
            <p className={styles.cardTitle}><strong>مواعيد العمل</strong></p>
            <div className={styles.contactInfo}>
              <p className={styles.workingHours}>
                السبت إلى الأربعاء<br />
                من 12:00 ظهراً إلى 8:00 مساءً
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.ctaSection}>
          <Link href="/contact" className={styles.ctaButton}>
            احجز معنا الآن
          </Link>
          <Link href="https://wa.me/201017912197" className={styles.whatsappButton}>
            راسلنا على واتساب
          </Link>
        </div>
      </div>
    </section>
  );
}
