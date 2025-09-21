import { SITE_CONFIG } from '../utils/constants';
import styles from './FloatingButtons.module.css';
import { FaWhatsapp, FaPhone } from "react-icons/fa";


export default function FloatingButtons() {
  return (
    <div className={styles.floatingButtons}>
      <a 
        href={`https://wa.me/${SITE_CONFIG.phone.primary.replace(/[^0-9]/g, '')}`}
        className={`${styles.floatingButton} ${styles.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.buttonIcon}><FaWhatsapp /></span>
      </a>
      <a 
        href={`tel:${SITE_CONFIG.phone.primary}`}
        className={`${styles.floatingButton} ${styles.phone}`}
      >
        <span className={styles.buttonIcon}><FaPhone /></span>
      </a>
    </div>
  );
}
