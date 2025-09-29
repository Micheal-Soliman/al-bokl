"use client";

import React, { useState } from "react";
import styles from "./ArticleLayout.module.css";
import Link from "next/link";
import { SITE_CONFIG } from "../utils/constants";
import Image from "next/image";

const ArticleLayout = ({ article }) => {
  console.log(`article`, article);

  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission
    console.log("Comment submitted:", comment);
    setShowCommentForm(false);
    setComment({ name: "", email: "", website: "", message: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.articleLayout}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <nav className={styles.breadcrumbNav}>
            <Link href="/" className={styles.breadcrumbLink}>
              الرئيسية
            </Link>
            <span className={styles.breadcrumbSeparator}>|</span>
            <Link href="/articles" className={styles.breadcrumbLink}>
              المقالات
            </Link>
            <span className={styles.breadcrumbSeparator}>|</span>
            <span className={styles.breadcrumbCurrent}>{article.category}</span>
            <span className={styles.breadcrumbSeparator}>|</span>
            <span className={styles.breadcrumbCurrent}>{article.title}</span>
          </nav>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.articleContainer}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Search Widget */}
            <div className={styles.widget}>
              <h3 className={styles.widgetTitle}>البحث عن:</h3>
              <div className={styles.searchWidget}>
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  className={styles.searchInput}
                />
                <button className={styles.searchBtn}>🔍</button>
              </div>
            </div>

            {/* Recent Articles */}
            <div className={styles.widget}>
              <h3 className={styles.widgetTitle}>أحدث المقالات:</h3>
              <div className={styles.recentArticles}>
                <Link
                  href="/articles/local-injections-erectile-dysfunction"
                  className={styles.recentArticle}
                >
                  <span className={styles.recentDate}>30 أغسطس، 2025</span>
                  <span className={styles.recentTitle}>
                    ما هي الحقن الموضعية المستخدمة في علاج ضعف الانتصاب؟
                  </span>
                </Link>
                <Link
                  href="/articles/sperm-abnormality-miscarriage"
                  className={styles.recentArticle}
                >
                  <span className={styles.recentDate}>30 أغسطس، 2025</span>
                  <span className={styles.recentTitle}>
                    هل تشوه الحيوانات المنوية سبب الاجهاض المتكرر؟
                  </span>
                </Link>
                <Link
                  href="/articles/when-varicocele-dangerous"
                  className={styles.recentArticle}
                >
                  <span className={styles.recentDate}>28 أغسطس، 2025</span>
                  <span className={styles.recentTitle}>
                    متى تكون دوالي الخصية خطيرة؟
                  </span>
                </Link>
                <Link
                  href="/articles/sudden-penis-relaxation"
                  className={styles.recentArticle}
                >
                  <span className={styles.recentDate}>27 أغسطس، 2025</span>
                  <span className={styles.recentTitle}>
                    ما هو سبب ارتخاء القضيب فجأة أثناء العلاقة الزوجية؟
                  </span>
                </Link>
                <Link
                  href="/articles/penile-implants-chronic-diseases"
                  className={styles.recentArticle}
                >
                  <span className={styles.recentDate}>26 أغسطس، 2025</span>
                  <span className={styles.recentTitle}>
                    هل دعامة الانتصاب تنفع لأصحاب الأمراض المزمنة؟
                  </span>
                </Link>
              </div>
            </div>

            {/* Categories */}
            <div className={styles.widget}>
              <h3 className={styles.widgetTitle}>تصنيفات</h3>
              <div className={styles.categories}>
                <Link
                  href="/articles/category/general"
                  className={styles.categoryItem}
                >
                  <span>مقالات عامة</span>
                  <span className={styles.categoryCount}>44</span>
                </Link>
                <Link
                  href="/articles/category/infertility"
                  className={styles.categoryItem}
                >
                  <span>تأخر الإنجاب</span>
                  <span className={styles.categoryCount}>49</span>
                </Link>
                <Link
                  href="/articles/category/sexual-problems"
                  className={styles.categoryItem}
                >
                  <span>المشاكل الجنسية</span>
                  <span className={styles.categoryCount}>44</span>
                </Link>
                <Link
                  href="/articles/category/varicocele"
                  className={styles.categoryItem}
                >
                  <span>عملية دوالي الخصيتين</span>
                  <span className={styles.categoryCount}>55</span>
                </Link>
              </div>
            </div>

            {/* Medical Tips Widget */}
            <div className={styles.widget}>
              <h3 className={styles.widgetTitle}>نصائح طبية مهمة</h3>
              <div className={styles.medicalTips}>
                <div className={styles.tipItem}>
                  <span className={styles.tipIcon}>💡</span>
                  <p>استشر الطبيب عند ظهور أي أعراض غير طبيعية</p>
                </div>
                <div className={styles.tipItem}>
                  <span className={styles.tipIcon}>🏥</span>
                  <p>الفحص الدوري يساعد في الاكتشاف المبكر للمشاكل</p>
                </div>
                <div className={styles.tipItem}>
                  <span className={styles.tipIcon}>🚭</span>
                  <p>تجنب التدخين والعادات الضارة بالصحة الجنسية</p>
                </div>
                <div className={styles.tipItem}>
                  <span className={styles.tipIcon}>💪</span>
                  <p>ممارسة الرياضة تحسن من الصحة العامة والجنسية</p>
                </div>
              </div>
            </div>

            {/* Contact Widget */}
            <div className={styles.widget}>
              <h3 className={styles.widgetTitle}>دعنا نساعدك!</h3>
              <div className={styles.contactWidget}>
                <p>تقدر تتواصل معانا على الرقم ده</p>
                <a
                  href={`tel:${SITE_CONFIG.phone.secondary}`}
                  className={styles.phoneLink}
                >
                  {SITE_CONFIG.phone.secondary}
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className={styles.emailLink}
                >
                  {SITE_CONFIG.email}
                </a>
                <p className={styles.contactNote}>
                  لا تخجل أو تتأخر في التواصل معنا
                </p>
              </div>
            </div>
          </aside>

          {/* Main Article Content */}
          <div className={styles.mainContent}>
            {/* Article Header */}
            <header className={styles.articleHeader}>
              <div className={styles.articleMeta}>
                <span className={styles.publishDate}>
                  {article.publishDate}
                </span>
                <span className={styles.author}>{article.author}</span>
                <span className={styles.category}>{article.category}</span>
                <span className={styles.readTime}>{article.readTime}</span>
                <span className={styles.comments}>0 comment</span>
              </div>

              <h1 className={styles.articleTitle}>{article.title}</h1>

              {article.tags && (
                <div className={styles.articleTags}>
                  {article.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              <div className={styles.heroGrid}>
                <div className={styles.heroImage}>
                  <Image
                    src={article?.img}
                    alt="مشاكل الخصية"
                    layout="responsive"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className={styles.articleContent}>
              <div
                className={styles.contentBody}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Article Footer */}
            <footer className={styles.articleFooter}>
              <div className={styles.shareSection}>
                <h3>شارك المقال:</h3>
                <div className={styles.shareButtons}>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.shareBtn} ${styles.facebook}`}
                  >
                    📘 فيسبوك
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}&text=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.shareBtn} ${styles.twitter}`}
                  >
                    🐦 تويتر
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      article.title +
                        " " +
                        (typeof window !== "undefined"
                          ? window.location.href
                          : "")
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.shareBtn} ${styles.whatsapp}`}
                  >
                    💬 واتساب
                  </a>
                </div>
              </div>
            </footer>

            {/* Comments Section */}
            <section className={styles.commentsSection}>
              <h3 className={styles.commentsTitle}>التعليقات</h3>

              <div className={styles.commentsCount}>
                <p>لا توجد تعليقات حتى الآن. كن أول من يعلق!</p>
              </div>

              {!showCommentForm ? (
                <button
                  onClick={() => setShowCommentForm(true)}
                  className={styles.addCommentBtn}
                >
                  اترك تعليقاً
                </button>
              ) : (
                <form
                  onSubmit={handleCommentSubmit}
                  className={styles.commentForm}
                >
                  <h4>اترك تعليقاً</h4>
                  <p className={styles.formNote}>
                    Your email address will not be published.
                  </p>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <input
                        type="text"
                        name="name"
                        value={comment.name}
                        onChange={handleInputChange}
                        placeholder="الاسم *"
                        required
                        className={styles.formInput}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <input
                        type="email"
                        name="email"
                        value={comment.email}
                        onChange={handleInputChange}
                        placeholder="البريد الإلكتروني *"
                        required
                        className={styles.formInput}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <input
                      type="url"
                      name="website"
                      value={comment.website}
                      onChange={handleInputChange}
                      placeholder="الموقع الإلكتروني (اختياري)"
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <textarea
                      name="message"
                      value={comment.message}
                      onChange={handleInputChange}
                      placeholder="اكتب تعليقك هنا..."
                      required
                      rows="5"
                      className={styles.formTextarea}
                    />
                  </div>

                  <div className={styles.formActions}>
                    <button type="submit" className={styles.submitBtn}>
                      إرسال التعليق
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCommentForm(false)}
                      className={styles.cancelBtn}
                    >
                      إلغاء
                    </button>
                  </div>

                  <div className={styles.saveInfo}>
                    <label className={styles.checkbox}>
                      <input type="checkbox" />
                      احفظ اسمي، بريدي الإلكتروني، والموقع الإلكتروني في هذا
                      المتصفح لاستخدامها المرة المقبلة في تعليقي.
                    </label>
                  </div>
                </form>
              )}
            </section>

            {/* Related Articles */}
            {article.relatedArticles && article.relatedArticles.length > 0 && (
              <section className={styles.relatedArticles}>
                <h3 className={styles.relatedTitle}>مقالات ذات صلة</h3>
                <div className={styles.relatedGrid}>
                  {article.relatedArticles.map((relatedArticle, index) => (
                    <Link
                      href={relatedArticle.url}
                      key={index}
                      className={styles.relatedCard}
                    >
                      <h4 className={styles.relatedCardTitle}>
                        {relatedArticle.title}
                      </h4>
                      <p className={styles.relatedCardExcerpt}>
                        {relatedArticle.excerpt}
                      </p>
                      <span className={styles.readMore}>اقرأ المزيد ←</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleLayout;
