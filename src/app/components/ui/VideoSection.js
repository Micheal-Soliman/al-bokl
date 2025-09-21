import Image from 'next/image';
import styles from './VideoSection.module.css';

export default function VideoSection({ title, videoUrl, description, thumbnail }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.videoWrapper}>
        <div className={styles.videoContainer}>
          <iframe
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.iframe}
          ></iframe>
        </div>
        {description && (
          <p className={styles.description}>{description}</p>
        )}
      </div>
    </section>
  );
}
