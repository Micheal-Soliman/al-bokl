import Link from 'next/link';
import styles from './FinalMessage.module.css';

export default function FinalMessage({ title, message, ctaText, ctaLink }) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
        {ctaText && ctaLink && (
          <Link href={ctaLink} className={styles.ctaButton}>
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
