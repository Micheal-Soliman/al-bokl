import { FEATURED_ARTICLES, TREATMENTS } from '../utils/constants';
import styles from './Articles.module.css';

export default function Articles() {
  const articles = [
    {
      title: "ما هي الحقن الموضعية المستخدمة في علاج ضعف الانتصاب ؟",
      author: "Ahmed",
      comments: "0 comment",
      excerpt: "تعرف على أنواع الحقن الموضعية المستخدمة في علاج ضعف الانتصاب وكيفية عملها وفعاليتها في العلاج.",
      image: "💉",
      link: "/articles/local-injections-erectile-dysfunction"
    },
    {
      title: "هل تشوه الحيوانات المنوية سبب الاجهاض المتكرر ؟",
      author: "Ahmed", 
      comments: "0 comment",
      excerpt: "دراسة شاملة حول العلاقة بين تشوهات الحيوانات المنوية والإجهاض المتكرر وطرق العلاج المتاحة.",
      image: "🔬",
      link: "/articles/sperm-abnormality-miscarriage"
    },
    {
      title: "متى تكون دوالي الخصية خطيرة ؟",
      author: "Ahmed",
      comments: "0 comment", 
      excerpt: "معلومات مهمة حول دوالي الخصية ومتى تصبح خطيرة وتحتاج لتدخل جراحي عاجل.",
      image: "⚠️",
      link: "/articles/when-varicocele-dangerous"
    }
  ];


  return (
    <section id="articles" className={styles.articles}>
      <div className="container">
        <div className={styles.articlesHeader}>
          <h2 className={styles.articlesTitle}>
            مقالات طبية مفيدة
          </h2>
          <p className={styles.articlesSubtitle}>
            اقرأ أحدث المقالات الطبية والنصائح المفيدة في مجال طب الذكورة والصحة الجنسية
          </p>
        </div>

        <div className={styles.articlesGrid}>
          {FEATURED_ARTICLES.map((article, index) => (
            <div key={index} className={styles.articleCard}>
              <span className={styles.articleIcon}>{article.image}</span>
              <h3 className={styles.articleTitle}>
                {article.title}
              </h3>
              <p className={styles.articleDescription}>
                {article.excerpt}
              </p>
              <a href={article.link} className={styles.articleButton}>
                اقرأ المزيد →
              </a>
            </div>
          ))}
        </div>

        {/* Treatment Options */}
        <div className={styles.TREATMENTSSection}>
          <h3 className={styles.TREATMENTSTitle}>
            خيارات العلاج المتاحة
          </h3>
          
          <div className={styles.TREATMENTSGrid}>
            {TREATMENTS.map((treatment, index) => (
              <div key={index} className={styles.treatmentCard}>
                <h4 className={styles.treatmentTitle}>
                  {treatment.name}
                </h4>
                <p className={styles.treatmentDescription}>
                  {treatment.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Reviews */}
        <div className={styles.reviewsSection}>
          <h3 className={styles.reviewsTitle}>
            آراء المرضى
          </h3>
          
          <div className={styles.reviewsGrid}>
            <div className={styles.reviewCard}>
              <p className={styles.reviewText}>
                &ldquo;الدكتور أسامة البكل طبيب ممتاز ومتفهم جداً. ساعدني في حل مشكلتي بكل احترافية وخبرة.&rdquo;
              </p>
              <div className={styles.reviewAuthor}>أحمد محمد</div>
              <div className={styles.reviewRating}>⭐⭐⭐⭐⭐</div>
            </div>
            
            <div className={styles.reviewCard}>
              <p className={styles.reviewText}>
                &ldquo;أنصح بشدة بالدكتور أسامة. العلاج كان فعال جداً والنتائج ممتازة. شكراً دكتور.&rdquo;
              </p>
              <div className={styles.reviewAuthor}>محمد علي</div>
              <div className={styles.reviewRating}>⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
