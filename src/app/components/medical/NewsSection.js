'use client';

import styles from './NewsSection.module.css';

export default function NewsSection({ 
  title = "آخر الأخبار",
  articles = [],
  categories = [],
  className = '' 
}) {
  const defaultArticles = [
    {
      id: 1,
      date: "30 أغسطس، 2025",
      title: "ما هي الحقن الموضعية المستخدمة في علاج ضعف الانتصاب ؟",
      link: "/articles/local-injections-erectile-dysfunction"
    },
    {
      id: 2,
      date: "30 أغسطس، 2025", 
      title: "هل تشوه الحيوانات المنوية سبب الاجهاض المتكرر ؟",
      link: "/articles/sperm-deformity-miscarriage"
    },
    {
      id: 3,
      date: "28 أغسطس، 2025",
      title: "متى تكون دوالي الخصية خطيرة ؟",
      link: "/articles/when-varicocele-dangerous"
    },
    {
      id: 4,
      date: "27 أغسطس، 2025",
      title: "ما هو سبب ارتخاء القضيب فجأة أثناء العلاقة الزوجية ؟",
      link: "/articles/sudden-penis-relaxation"
    },
    {
      id: 5,
      date: "26 أغسطس، 2025",
      title: "هل دعامة الانتصاب تنفع لأصحاب الأمراض المزمنة ؟",
      link: "/articles/penile-implant-chronic-diseases"
    }
  ];

  const defaultCategories = [
    { name: "التفتيش الميكروسكوبي للخصية"},
    { name: "المشاكل الجنسية"},
    { name: "تأخر الإنجاب", count: 49 },
    { name: "دعامات الانتصاب(الدعامة المرنة والدعامة الهيدروليكية)", count: 23 },
    { name: "عملية دوالي الخصيتين", count: 55 },
    { name: "مرض بيروني(اعوجاج القضيب)", count: 3 },
    { name: "مقالات عامة", count: 0 }
  ];

  const articlesToShow = articles.length > 0 ? articles : defaultArticles;
  const categoriesToShow = categories.length > 0 ? categories : defaultCategories;

  return (
    <div className={`${styles.newsSection} ${className}`}>
      <h3 className={styles.newsTitle}>{title}</h3>
      
      <div className={styles.newsContent}>
        {/* Latest Articles */}
        <div className={styles.articlesSection}>
          <div className={styles.articlesList}>
            {articlesToShow.map((article, index) => (
              <div key={article.id || index} className={styles.articleItem}>
                <span className={styles.articleDate}>{article.date}</span>
                <a href={article.link} className={styles.articleTitle}>
                  {article.title}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className={styles.categoriesSection}>
          <h4 className={styles.categoriesTitle}>تصنيفات</h4>
          <div className={styles.categoriesList}>
            {categoriesToShow.map((category, index) => (
              <div key={index} className={styles.categoryItem}>
                <span className={styles.categoryName}>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
