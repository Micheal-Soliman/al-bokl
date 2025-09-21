import Link from 'next/link';
import Image from 'next/image';
import styles from './NewsSection.module.css';

const newsArticles = [
  {
    id: 1,
    title: "أحدث التطورات في علاج ضعف الانتصاب",
    excerpt: "تعرف على أحدث التقنيات والطرق المتطورة في علاج ضعف الانتصاب والضعف الجنسي",
    image: "/images/news-1.jpg",
    date: "2024-01-15",
    category: "علاج طبي",
    link: "/articles/erectile-dysfunction-treatments"
  },
  {
    id: 2,
    title: "نصائح مهمة بعد عملية دعامات القضيب",
    excerpt: "إرشادات ونصائح طبية مهمة للمرضى بعد إجراء عملية زراعة دعامات العضو الذكري",
    image: "/images/news-2.jpg",
    date: "2024-01-10",
    category: "نصائح طبية",
    link: "/articles/penile-implant-recovery"
  },
  {
    id: 3,
    title: "الفحص الدوري للصحة الجنسية للرجال",
    excerpt: "أهمية الفحص الدوري والكشف المبكر لمشاكل الصحة الجنسية والإنجابية عند الرجال",
    image: "/images/news-3.jpg",
    date: "2024-01-05",
    category: "وقاية",
    link: "/articles/male-health-checkup"
  }
];

export default function NewsSection() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>آخر الأخبار والمقالات الطبية</h2>
        <p className={styles.subtitle}>
          تابع أحدث المقالات والأخبار الطبية في مجال الصحة الجنسية والإنجابية
        </p>
        
        <div className={styles.newsGrid}>
          {newsArticles.map((article) => (
            <article key={article.id} className={styles.newsCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={250}
                  className={styles.image}
                />
                <div className={styles.category}>{article.category}</div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.excerpt}>{article.excerpt}</p>
                
                <div className={styles.cardFooter}>
                  <span className={styles.date}>
                    {new Date(article.date).toLocaleDateString('ar-EG')}
                  </span>
                  <Link href={article.link} className={styles.readMore}>
                    اقرأ المزيد
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className={styles.viewAllWrapper}>
          <Link href="/articles" className={styles.viewAllButton}>
            عرض جميع المقالات
          </Link>
        </div>
      </div>
    </section>
  );
}
