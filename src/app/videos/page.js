import MainLayout from '../components/layout/MainLayout';
import { generateSEOMetadata } from '../../lib/seo/articleSEO';
import Link from 'next/link';
import styles from './videos.module.css';

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "الفيديوهات التعليمية - د. أسامة البكل",
    description: "مجموعة شاملة من الفيديوهات التعليمية والتوعوية المتخصصة في أمراض الذكورة والصحة الجنسية مع د. أسامة البكل.",
    keywords: ["فيديوهات تعليمية", "أمراض الذكورة", "الصحة الجنسية", "تعليم طبي", "فيديوهات طبية", "د أسامة البكل"],
    canonical: "/videos",
    image: "/images/videos/medical-education.webp"
  });
}

export default function VideosPage() {
  const videoCategories = [
    {
      category: "تأخر الإنجاب والخصوبة",
      description: "فيديوهات تعليمية شاملة حول أسباب تأخر الإنجاب وطرق العلاج",
      videos: [
        {
          title: "أسباب تأخر الإنجاب عند الرجال",
          description: "شرح مفصل لأهم أسباب تأخر الإنجاب وكيفية تشخيصها",
          duration: "15:30",
          views: "25,432",
          thumbnail: "/images/videos/male-infertility.jpg",
          videoId: "dQw4w9WgXcQ",
          topics: ["ضعف الحيوانات المنوية", "دوالي الخصية", "الهرمونات"]
        },
        {
          title: "فحص السائل المنوي - كيف يتم؟",
          description: "دليل شامل لفهم تحليل السائل المنوي وتفسير النتائج",
          duration: "12:45",
          views: "18,765",
          thumbnail: "/images/videos/semen-analysis.jpg",
          videoId: "dQw4w9WgXcQ",
          topics: ["تحليل السائل المنوي", "النتائج الطبيعية", "التفسير"]
        },
        {
          title: "دوالي الخصية والخصوبة",
          description: "تأثير دوالي الخصية على الخصوبة وطرق العلاج",
          duration: "18:20",
          views: "22,198",
          thumbnail: "/images/videos/varicocele.jpg",
          videoId: "dQw4w9WgXcQ",
          topics: ["دوالي الخصية", "العلاج الجراحي", "تحسن الخصوبة"]
        }
      ],
      icon: "👶",
      color: "#3b82f6"
    },
    {
      category: "المشاكل الجنسية",
      description: "فيديوهات توعوية حول المشاكل الجنسية الشائعة وعلاجها",
      videos: [
        {
          title: "ضعف الانتصاب - الأسباب والعلاج",
          description: "فهم أسباب ضعف الانتصاب وخيارات العلاج المتاحة",
          duration: "20:15",
          views: "45,321",
          thumbnail: "/images/videos/erectile-dysfunction.jpg",
          videoId: "dQw4w9WgXcQ",
          topics: ["ضعف الانتصاب", "العلاج الدوائي", "نصائح طبيعية"]
        },
        {
          title: "سرعة القذف - حلول فعالة",
          description: "طرق علاج سرعة القذف والتقنيات السلوكية",
          duration: "16:40",
          views: "38,567",
          thumbnail: "/images/videos/premature-ejaculation.jpg",
          videoId: "dQw4w9WgXcQ",
          topics: ["سرعة القذف", "التقنيات السلوكية", "العلاج"]
        },
        {
          title: "انخفاض الرغبة الجنسية",
          description: "أسباب انخفاض الرغبة الجنسية وطرق استعادتها",
          duration: "14:25",
          views: "29,876",
          thumbnail: "/images/videos/low-libido.jpg",
          videoId: "dQw4w9WgXcQ",
          topics: ["الرغبة الجنسية", "الهرمونات", "العلاج النفسي"]
        }
      ],
      icon: "❤️",
      color: "#ef4444"
    },
    {
      category: "العمليات الجراحية",
      description: "شرح مفصل للعمليات الجراحية في أمراض الذكورة",
      videos: [
        {
          title: "عملية دوالي الخصية بالمنظار",
          description: "شرح تفصيلي لعملية دوالي الخصية بالتقنيات الحديثة",
          duration: "25:30",
          views: "31,245",
          thumbnail: "/images/videos/varicocele-surgery.jpg",
          videoId: "dQw4w9WgXcQ",
          topics: ["جراحة المناظير", "دوالي الخصية", "التعافي"]
        },
        {
          title: "تركيب دعامة القضيب",
          description: "كل ما تريد معرفته عن دعامات القضيب وأنواعها",
          duration: "22:15",
          views: "27,892",
          thumbnail: "/images/videos/penile-implant.jpg",
          videoId: "dQw4w9WgXcQ",
          topics: ["دعامة القضيب", "أنواع الدعامات", "النتائج"]
        },
        {
          title: "عينة الخصية الجراحية",
          description: "متى نحتاج لعينة الخصية وكيف تتم العملية",
          duration: "19:45",
          views: "24,567",
          thumbnail: "/images/videos/testicular-biopsy.jpg",
          videoId: "dQw4w9WgXcQ",
          topics: ["عينة الخصية", "التشخيص", "الخصوبة"]
        }
      ],
      icon: "🏥",
      color: "#10b981"
    },
    {
      category: "مشاكل البلوغ",
      description: "فيديوهات توعوية للآباء حول مشاكل البلوغ عند الأطفال",
      videos: [
        {
          title: "البلوغ المبكر عند الأولاد",
          description: "علامات البلوغ المبكر وكيفية التعامل معه",
          duration: "17:20",
          views: "19,432",
          thumbnail: "/images/videos/early-puberty.jpg",
          videoId: "dQw4w9WgXcQ",
          topics: ["البلوغ المبكر", "الهرمونات", "العلاج"]
        },
        {
          title: "تأخر البلوغ - متى نقلق؟",
          description: "العلامات التي تستدعي استشارة الطبيب",
          duration: "15:50",
          views: "16,789",
          thumbnail: "/images/videos/delayed-puberty.jpg",
          videoId: "dQw4w9WgXcQ",
          topics: ["تأخر البلوغ", "النمو الطبيعي", "التدخل الطبي"]
        }
      ],
      icon: "👦",
      color: "#8b5cf6"
    }
  ];

  const featuredVideo = {
    title: "دليل شامل لصحة الرجل الجنسية",
    description: "فيديو شامل يغطي أهم جوانب الصحة الجنسية للرجل ونصائح للحفاظ عليها",
    duration: "45:30",
    views: "125,432",
    thumbnail: "/images/videos/mens-sexual-health.jpg",
    videoId: "dQw4w9WgXcQ"
  };

  const statistics = [
    { number: "50+", label: "فيديو تعليمي" },
    { number: "500K+", label: "مشاهدة" },
    { number: "15+", label: "موضوع طبي" },
    { number: "4.9/5", label: "تقييم المشاهدين" }
  ];

  return (
    <MainLayout>
      <div className={styles.videosPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>الفيديوهات التعليمية</h1>
              <p className={styles.heroDescription}>
                مكتبة شاملة من الفيديوهات التعليمية والتوعوية في أمراض الذكورة والصحة الجنسية. 
                محتوى علمي موثوق ومبسط للجميع.
              </p>
              <div className={styles.heroButtons}>
                <Link href="#featured" className={styles.primaryBtn}>
                  شاهد الفيديو المميز
                </Link>
                <Link href="#categories" className={styles.secondaryBtn}>
                  تصفح الفئات
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className={styles.statisticsSection}>
          <div className={styles.container}>
            <div className={styles.statisticsGrid}>
              {statistics.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Video */}
        <section id="featured" className={styles.featuredSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>الفيديو المميز</h2>
            <div className={styles.featuredVideo}>
              <div className={styles.videoPlayer}>
                <div className={styles.videoThumbnail}>
                  <img src={featuredVideo.thumbnail} alt={featuredVideo.title} />
                  <div className={styles.playButton}>
                    <span className={styles.playIcon}>▶</span>
                  </div>
                  <div className={styles.videoDuration}>{featuredVideo.duration}</div>
                </div>
              </div>
              <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>{featuredVideo.title}</h3>
                <p className={styles.videoDescription}>{featuredVideo.description}</p>
                <div className={styles.videoStats}>
                  <span className={styles.viewCount}>👁 {featuredVideo.views} مشاهدة</span>
                  <span className={styles.duration}>⏱ {featuredVideo.duration}</span>
                </div>
                <button className={styles.watchBtn}>
                  مشاهدة الفيديو
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Categories */}
        <section id="categories" className={styles.categoriesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>فئات الفيديوهات</h2>
            {videoCategories.map((category, index) => (
              <div key={index} className={styles.categorySection}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryInfo}>
                    <span className={styles.categoryIcon} style={{ color: category.color }}>
                      {category.icon}
                    </span>
                    <div>
                      <h3 className={styles.categoryTitle}>{category.category}</h3>
                      <p className={styles.categoryDescription}>{category.description}</p>
                    </div>
                  </div>
                  <div className={styles.videoCount}>
                    {category.videos.length} فيديو
                  </div>
                </div>
                
                <div className={styles.videosGrid}>
                  {category.videos.map((video, videoIndex) => (
                    <div key={videoIndex} className={styles.videoCard}>
                      <div className={styles.videoThumbnail}>
                        <img src={video.thumbnail} alt={video.title} />
                        <div className={styles.playButton}>
                          <span className={styles.playIcon}>▶</span>
                        </div>
                        <div className={styles.videoDuration}>{video.duration}</div>
                      </div>
                      
                      <div className={styles.videoContent}>
                        <h4 className={styles.videoTitle}>{video.title}</h4>
                        <p className={styles.videoDescription}>{video.description}</p>
                        
                        <div className={styles.videoTopics}>
                          {video.topics.map((topic, topicIndex) => (
                            <span key={topicIndex} className={styles.topicTag}>
                              {topic}
                            </span>
                          ))}
                        </div>
                        
                        <div className={styles.videoFooter}>
                          <div className={styles.videoStats}>
                            <span className={styles.viewCount}>👁 {video.views}</span>
                            <span className={styles.duration}>⏱ {video.duration}</span>
                          </div>
                          <button className={styles.watchBtn}>مشاهدة</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Educational Value */}
        <section className={styles.valueSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>لماذا تشاهد فيديوهاتنا التعليمية؟</h2>
            <div className={styles.valueGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🎓</div>
                <h3>محتوى علمي موثوق</h3>
                <p>جميع الفيديوهات مبنية على أحدث الأبحاث العلمية والممارسات الطبية المعتمدة</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>👨‍⚕️</div>
                <h3>خبرة طبية متخصصة</h3>
                <p>د. أسامة البكل يشرح بخبرة أكثر من 15 عاماً في أمراض الذكورة</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🎯</div>
                <h3>شرح مبسط وواضح</h3>
                <p>المعلومات الطبية المعقدة مقدمة بطريقة سهلة الفهم للجميع</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🔄</div>
                <h3>محتوى محدث باستمرار</h3>
                <p>إضافة فيديوهات جديدة بانتظام لتغطية أحدث التطورات الطبية</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>هل لديك سؤال طبي؟</h2>
              <p>
                إذا لم تجد إجابة سؤالك في الفيديوهات، يمكنك حجز استشارة متخصصة 
                مع د. أسامة البكل للحصول على إجابات شخصية ومفصلة.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز استشارة متخصصة
                </Link>
                <Link href="tel:+201017912197" className={styles.secondaryBtn}>
                  اتصل الآن: 01017912197
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Topics */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>خدمات ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link href="/articles" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>📚</span>
                <h3>المقالات الطبية</h3>
                <p>مقالات علمية متخصصة في أمراض الذكورة</p>
              </Link>
              <Link href="/contact/appointment" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>📅</span>
                <h3>حجز موعد</h3>
                <p>احجز استشارة طبية متخصصة</p>
              </Link>
              <Link href="/about/doctor" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>👨‍⚕️</span>
                <h3>عن الدكتور</h3>
                <p>تعرف على خبرة د. أسامة البكل</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
