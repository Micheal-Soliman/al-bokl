'use client';

import styles from './MedicalArticles.module.css';
import Link from 'next/link';

export default function MedicalArticles() {
  const articles = [
    {
      id: 1,
      date: '28',
      month: 'ديسمبر',
      title: 'متى تكون دوالي الخصية خطيرة؟',
      description: 'متى تكون دوالي الخصية خطيرة؟ ما هي دوالي الخصية؟ الأعراض التي تستدعي العلاج السريع؟ طرق العلاج المختلفة والوقاية منها',
      image: '/images/varicocele.jpg',
      category: 'دوالي الخصية',
      link: '/articles/varicocele-dangers'
    },
    {
      id: 2,
      date: '30',
      month: 'نوفمبر',
      title: 'هل تؤثر الحالات النفسية على سبب الاحتقان المتكرر؟',
      description: 'هل تؤثر الحالات النفسية على سبب الاحتقان المتكرر؟ العلاقة بين الحالة النفسية والصحة الجنسية، طرق العلاج النفسي والطبي المتكامل',
      image: '/images/psychological-effects.jpg',
      category: 'الصحة النفسية',
      link: '/articles/psychological-effects-congestion'
    },
    {
      id: 3,
      date: '30',
      month: 'أكتوبر',
      title: 'ما هي الحقن البروستاتية المستخدمة في علاج ضعف الانتصاب؟',
      description: 'ما هي الحقن البروستاتية المستخدمة في علاج ضعف الانتصاب؟ أنواع الحقن المختلفة، طريقة الاستخدام، النتائج المتوقعة والآثار الجانبية',
      image: '/images/prostate-injections.jpg',
      category: 'ضعف الانتصاب',
      link: '/articles/prostate-injections-treatment'
    }
  ];

  return (
    <section className={styles.medicalArticles}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            أهم الموضوعات في تأثر الإنجاب والضعف الجنسي
            <br />
            وتأثر البولي
          </h2>
          <p className={styles.subtitle}>
            نقدم لكم أحدث المعلومات الطبية وأحدث طرق العلاج والتشخيص والوقاية من أمراض الذكورة والعقم والضعف الجنسي
          </p>
        </div>

        <div className={styles.articlesGrid}>
          {articles.map((article, index) => (
            <Link key={article.id} href={article.link} className={styles.articleLink}>
              <div className={styles.articleCard}>
                <div className={styles.imageContainer}>
                  <div className={styles.articleImage}>
                    <div className={styles.imagePlaceholder}>
                      {/* Medical icon placeholder */}
                      <div className={styles.medicalIcon}>
                        {index === 0 && '🫁'} {/* Lungs for varicocele */}
                        {index === 1 && '🧠'} {/* Brain for psychological */}
                        {index === 2 && '💉'} {/* Syringe for injections */}
                      </div>
                    </div>
                  </div>
                  <div className={styles.dateBox}>
                    <div className={styles.dateNumber}>{article.date}</div>
                    <div className={styles.dateMonth}>{article.month}</div>
                  </div>
                </div>
                
                <div className={styles.articleContent}>
                  <div className={styles.category}>{article.category}</div>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleDescription}>{article.description}</p>
                  <div className={styles.readMore}>
                    اقرأ المزيد ←
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
