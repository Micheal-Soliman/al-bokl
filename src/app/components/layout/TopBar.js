import { SITE_CONFIG } from '../utils/constants';
import styles from './TopBar.module.css';

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className="container">
        <div className={styles.topBarContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <span>{SITE_CONFIG.phone.primary}</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              <span>{SITE_CONFIG.email}</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>🕒</span>
              <span>{SITE_CONFIG.workingHours}</span>
            </div>
          </div>
          
          <div className={styles.socialLinks}>
            <a href={SITE_CONFIG.socialMedia.facebook} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <span>📘</span>
            </a>
            <a href={SITE_CONFIG.socialMedia.twitter} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <span>🐦</span>
            </a>
            <a href={SITE_CONFIG.socialMedia.instagram} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <span>📷</span>
            </a>
            <a href={SITE_CONFIG.socialMedia.youtube} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <span>📺</span>
            </a>
            <a href={SITE_CONFIG.socialMedia.whatsapp} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <span>💬</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
