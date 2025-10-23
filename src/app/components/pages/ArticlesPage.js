"use client";

import React, { useState } from "react";
import styles from "./ArticlesPage.module.css";
import Link from "next/link";
import {
  medicalArticles,
  articleCategories,
} from "../../../data/articles/articlesData";
import ArticleSearch from "../ui/ArticleSearch";
import Image from "next/image";

const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 8;

  // Filter articles by category
  const filteredArticles =
    selectedCategory === "جميع المقالات"
      ? medicalArticles
      : medicalArticles.filter(
          (article) => article.category === selectedCategory
        );

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = filteredArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const featuredArticles = [
    {
      title: "ما هي الحقن الموضعية المستخدمة في علاج ضعف الانتصاب؟",
      excerpt:
        "تعرف على أنواع الحقن الموضعية المستخدمة في علاج ضعف الانتصاب وكيفية عملها وفعاليتها في العلاج.",
      author: "د. أسامة البكل",
      date: "15 سبتمبر 2025",
      category: "ضعف الإنتصاب",
      readTime: "5 دقائق",
      image: "💉",
      link: "/articles/local-injections-erectile-dysfunction",
    },
    {
      title: "هل تشوه الحيوانات المنوية سبب الاجهاض المتكرر؟",
      excerpt:
        "دراسة شاملة حول العلاقة بين تشوهات الحيوانات المنوية والإجهاض المتكرر وطرق العلاج المتاحة.",
      author: "د. أسامة البكل",
      date: "12 سبتمبر 2025",
      category: "تأخر الإنجاب",
      readTime: "7 دقائق",
      image: "🔬",
      link: "/articles/sperm-abnormality-miscarriage",
    },
    {
      title: "متى تكون دوالي الخصية خطيرة؟",
      excerpt:
        "معلومات مهمة حول دوالي الخصية ومتى تصبح خطيرة وتحتاج لتدخل جراحي عاجل.",
      author: "د. أسامة البكل",
      date: "10 سبتمبر 2025",
      category: "دوالي الخصيتين",
      readTime: "6 دقائق",
      image: "⚠️",
      link: "/articles/when-varicocele-dangerous",
    },
    {
      title: "دعامات العضو الذكري: الأنواع والنتائج",
      excerpt:
        "دليل شامل حول أنواع دعامات العضو الذكري ومعدلات النجاح والمضاعفات المحتملة.",
      author: "د. أسامة البكل",
      date: "8 سبتمبر 2025",
      category: "العمليات الجراحية",
      readTime: "8 دقائق",
      image: "🔧",
      link: "/articles/penile-implants-types-results",
    },
    {
      title: "التفتيش الميكروسكوبي للخصية: متى نحتاجه؟",
      excerpt:
        "شرح مفصل لعملية التفتيش الميكروسكوبي ودواعي إجرائها ومعدلات النجاح.",
      author: "د. أسامة البكل",
      date: "5 سبتمبر 2025",
      category: "تأخر الإنجاب",
      readTime: "6 دقائق",
      image: "🔍",
      link: "/articles/microscopic-testicular-extraction",
    },
    {
      title: "مشاكل البلوغ عند الذكور: التشخيص والعلاج",
      excerpt:
        "دليل شامل حول مشاكل البلوغ المبكر والمتأخر عند الذكور وطرق العلاج الحديثة.",
      author: "د. أسامة البكل",
      date: "3 سبتمبر 2025",
      category: "مشاكل البلوغ",
      readTime: "7 دقائق",
      image: "📈",
      link: "/articles/puberty-problems-males",
    },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Generate pagination numbers with ellipsis
  const getPaginationNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than or equal to max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage <= 3) {
        // Near the beginning
        pages.push(2, 3, 4);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pages.push('...');
        pages.push(totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        // In the middle
        pages.push('...');
        pages.push(currentPage - 1, currentPage, currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className={styles.articlesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>مقالات</h1>
          <p className={styles.heroDescription}>
            مقالات طبية متخصصة في أمراض الذكورة والصحة الجنسية وتأخر الإنجاب
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className={styles.searchSection}>
        <div className={styles.container}>
          <ArticleSearch />
        </div>
      </section>

      {/* Categories Filter */}
      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <div className={styles.categoriesFilter}>
            {articleCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`${styles.categoryBtn} ${
                  selectedCategory === category ? styles.active : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className={styles.articlesSection}>
        <div className={styles.container}>
          <div className={styles.articlesGrid}>
            {currentArticles.map((article, index) => (
              <Link
                href={`/articles/${article.slug}`}
                key={article.id}
                className={styles.articleCard}
              >
                <div className={styles.articleImage}>
                  {/* <span className={styles.articleIcon}>📄</span> */}
                  <Image
                    src={article.img}
                    alt={article.title}
                    width={400}
                    height={300}
                  />
                  <div className={styles.categoryBadge}>{article.category}</div>
                </div>
                <div className={styles.articleContent}>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleExcerpt}>{article.excerpt}</p>
                  <div className={styles.articleMeta}>
                    {/* <span className={styles.author}>{article.author}</span> */}
                    {/* <span className={styles.date}>
                      {new Date(article.publishedDate).toLocaleDateString(
                        "ar-EG"
                      )} */}
                    {/* </span> */}
                    <span className={styles.readTime}>
                      {article.readTime} دقائق
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`${styles.paginationBtn} ${styles.prevNextBtn}`}
              >
                السابق
              </button>

              {getPaginationNumbers().map((page, index) => {
                if (page === '...') {
                  return (
                    <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                      ...
                    </span>
                  );
                }
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`${styles.paginationBtn} ${
                      currentPage === page ? styles.active : ""
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`${styles.paginationBtn} ${styles.prevNextBtn}`}
              >
                التالي
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.newsletterCard}>
            <h3 className={styles.newsletterTitle}>اشترك في النشرة الطبية</h3>
            <p className={styles.newsletterText}>
              احصل على أحدث المقالات والنصائح الطبية مباشرة في بريدك الإلكتروني
            </p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className={styles.emailInput}
              />
              <button className={styles.subscribeBtn}>اشترك الآن</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
