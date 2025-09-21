import React from 'react';
import styles from './VideosPage.module.css';

const VideosPage = () => {
  const videoCategories = [
    {
      title: "فيديوهات تعليمية",
      description: "شرح مفصل للحالات المرضية وطرق العلاج",
      icon: "📚",
      videos: [
        { title: "ما هي دوالي الخصيتين؟", duration: "5:30" },
        { title: "أعراض ضعف الإنتصاب", duration: "4:15" },
        { title: "متى نحتاج للتدخل الجراحي؟", duration: "6:45" }
      ]
    },
    {
      title: "عمليات جراحية",
      description: "شرح العمليات الجراحية وخطوات التعافي",
      icon: "🏥",
      videos: [
        { title: "عملية دوالي الخصيتين بالميكروسكوب", duration: "8:20" },
        { title: "تركيب دعامة العضو الذكري", duration: "7:10" },
        { title: "التفتيش الميكروسكوبي", duration: "6:30" }
      ]
    },
    {
      title: "نصائح وإرشادات",
      description: "نصائح للوقاية والحفاظ على الصحة الجنسية",
      icon: "💡",
      videos: [
        { title: "نصائح للحفاظ على الصحة الجنسية", duration: "4:50" },
        { title: "التغذية وتأثيرها على الخصوبة", duration: "5:25" },
        { title: "الرياضة والصحة الجنسية", duration: "3:40" }
      ]
    }
  ];

  return (
    <div className={styles.videosPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>فيديوهات</h1>
          <p className={styles.heroDescription}>
            فيديوهات تعليمية وتوعوية حول أمراض الذكورة والصحة الجنسية
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className={styles.videosSection}>
        <div className={styles.container}>
          <div className={styles.categoriesGrid}>
            {videoCategories.map((category, index) => (
              <div key={index} className={styles.categoryCard}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>{category.icon}</div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <p className={styles.categoryDescription}>{category.description}</p>
                </div>
                <div className={styles.videosList}>
                  {category.videos.map((video, videoIndex) => (
                    <div key={videoIndex} className={styles.videoItem}>
                      <div className={styles.videoThumbnail}>
                        <span className={styles.playIcon}>▶️</span>
                      </div>
                      <div className={styles.videoInfo}>
                        <h4 className={styles.videoTitle}>{video.title}</h4>
                        <span className={styles.videoDuration}>{video.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>هل لديك سؤال محدد؟</h3>
            <p className={styles.ctaText}>
              تواصل معنا مباشرة للحصول على استشارة طبية متخصصة
            </p>
            <a href="/contact" className={styles.ctaButton}>احجز استشارة</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideosPage;
