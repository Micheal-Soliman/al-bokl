import { SERVICES } from '../utils/constants';
import Link from 'next/link';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className={styles.servicesHeader}>
          <h2 className={styles.servicesTitle}>خدماتنا الطبية</h2>
          <p className={styles.servicesSubtitle}>نقدم أفضل الخدمات الطبية المتخصصة</p>
        </div>
        <div className={styles.servicesGrid}>
          {SERVICES.map((service, index) => (
            <Link key={index} href={service.link} className={styles.serviceCardLink}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIconContainer}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                <p className={styles.serviceDescription}>{service.description}</p>
                <div className={styles.serviceArrow}>
                  <span className={styles.arrowIcon}>←</span>
                  <span className={styles.arrowText}>اقرأ المزيد</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
