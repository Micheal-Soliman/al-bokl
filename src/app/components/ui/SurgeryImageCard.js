import Image from 'next/image';
import styles from './SurgeryImageCard.module.css';

export default function SurgeryImageCard({ title, images = [] }) {
  if (!images || images.length === 0) {
    return (
      <section className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.noImages}>لا توجد صور متاحة حالياً</p>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.imageGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className={styles.image}
                priority={index === 0}
              />
            </div>
            <p className={styles.caption}>{image.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
