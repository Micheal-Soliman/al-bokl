'use client';

import styles from './VideoSection.module.css';

export default function VideoSection({ 
  title, 
  videoId, 
  videoUrl, 
  description, 
  className = '',
  videoType = 'youtube' // 'youtube' or 'cloudinary'
}) {
  // Determine the video source URL
  const getVideoSrc = () => {
    if (videoUrl) {
      return videoUrl; // Direct URL provided
    }
    
    if (videoType === 'cloudinary') {
      return videoId; // For Cloudinary, videoId is the full URL
    }
    
    // Default to YouTube
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className={`${styles.videoContainer} ${className}`}>
      <h3 className={styles.videoTitle}>{title}</h3>
      <div className={styles.videoWrapper}>
        {videoType === 'cloudinary' ? (
          <video 
            controls
            className={styles.video}
            title={title}
          >
            <source src={getVideoSrc()} type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو
          </video>
        ) : (
          <iframe 
            src={getVideoSrc()}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          ></iframe>
        )}
      </div>
      {description && (
        <p className={styles.videoDescription}>
          {description}
        </p>
      )}
    </div>
  );
}
