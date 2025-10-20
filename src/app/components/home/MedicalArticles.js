"use client";

import styles from "./MedicalArticles.module.css";
import Link from "next/link";

export default function MedicalArticles() {
  const articles = [
    {
      id: 1,
      date: "28",
      month: "ديسمبر",
      title: "متى تكون دوالي الخصية خطيرة؟",
      description: `متى تكون دوالي الخصية خطيرة ؟ ما هي دوالي الخصية ؟ ما هي المضاعفات اللي بتسببها دوالي الخصيتين ؟ ليه الجراحة الميكروسكوبية افضل طريقة لعلاج دوالي الخصية ؟`,
      image: "/ser2.webp",
      category: "دوالي الخصية",
      link: "/articles/varicocele-dangers",
    },
    {
      id: 2,
      date: "30",
      month: "اغسطس",
      title: `هل تشوه الحيوانات المنوية سبب الاجهاض المتكرر ؟`,
      description: `هل تشوه الحيوانات المنوية سبب الاجهاض المتكرر ؟ وإيه هي تشوه الحيوانات المنوية ؟ وايه علاقة تشوه الحيوان المنوي بالإجهاض عند الزوجة ؟ ازاي نعالج تشوه الحيوان المنوي عشان يكون عندنا اعلى فرصة لحدوث الحمل الطبيعي ؟`,
      image: "/ser3.webp",
      category: "الصحة النفسية",
      link: "/articles/psychological-effects-congestion",
    },
    {
      id: 3,
      date: "30",
      month: "أكتوبر",
      title: `ما هي الحقن الموضعية المستخدمة في علاج ضعف الانتصاب ؟`,
      description: `ما هي الحقن الموضعية المستخدمة في علاج ضعف الانتصاب ؟ ايه هي الحالات اللي مينفعش تستخدم الحقن الموضعي في القضيب كعلاج لضعف الانتصاب ؟ ايه هي مضاعفات الحقن الموضعي ؟ ليه دعامة العضو الذكري افضل علاج لضعف الانتصاب ؟`,
      image: "/ser2.webp",
      category: "ضعف الانتصاب",
      link: "/articles/prostate-injections-treatment",
    },
  ];

  return (
    <section className={styles.medicalArticles}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            أهم الموضوعات في تأخر الإنجاب والضعف الجنسي وتأخر البلوغ
          </h2>
          <p className={styles.subtitle}>
            نسعي دائماً لتوصيل المعلومات كاملة ومبسطة لمرضانا , وهدفنا هو
            تثقيفهم بحالتهم وبأفضل طرق العلاج , ونترك لهم القرار .
          </p>
        </div>

        <div className={styles.articlesGrid}>
          {articles.map((article, index) => (
            <Link
              key={article.id}
              href={article.link}
              className={styles.articleLink}
            >
              <div className={styles.articleCard}>
                <div className={styles.imageContainer}>
                  <div className={styles.articleImage}>
                    <div className={styles.imagePlaceholder}>
                      {/* Medical icon placeholder */}
                      <img
                        src={article.image}
                        alt={article.title}
                        className={styles.articleImage}
                      />
                    </div>
                  </div>
                  <div className={styles.dateBox}>
                    <div className={styles.dateNumber}>{article.date}</div>
                    <div className={styles.dateMonth}>{article.month}</div>
                  </div>
                </div>

                <div className={styles.articleContent}>
                  <div className={styles.category}>{article.category}</div>
                  <p className={styles.articleTitle}><strong>{article.title}</strong></p>
                  <p className={styles.articleDescription}>
                    {article.description}
                  </p>
                  <div className={styles.readMore}>اقرأ التفاصيل ←</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
