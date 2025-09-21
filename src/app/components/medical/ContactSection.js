'use client';

import styles from './ContactSection.module.css';

export default function ContactSection({ 
  title = "للإتصال مباشرة وحجز كشف",
  phoneNumber = "01018874287",
  className = '' 
}) {
  return (
    <div className={`${styles.contactSection} ${className}`}>
      <h3 className={styles.contactTitle}>{title}</h3>
      <div className={styles.contactInfo}>
        <p>واتساب + فون: <a href={`tel:+2${phoneNumber}`} className={styles.phoneLink}>{phoneNumber}</a></p>
      </div>
    </div>
  );
}
