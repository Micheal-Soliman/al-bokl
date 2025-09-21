'use client';

import styles from './SurgeryImageCard.module.css';

export default function SurgeryImageCard({ 
  imageSrc, 
  imageAlt, 
  title, 
  description, 
  className = '' 
}) {
  return (
    <div className={`${styles.surgeryImageContainer} ${className}`}>
      <img 
        src={imageSrc}
        alt={imageAlt}
        className={styles.surgeryImage}
      />
      <div className={styles.surgeryInfo}>
        <h3 className={styles.surgeryTitle}>{title}</h3>
        <p className={styles.surgeryDescription}>{description}</p>
      </div>
    </div>
  );
}
