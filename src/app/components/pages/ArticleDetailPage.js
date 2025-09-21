'use client';

import React, { useEffect } from 'react';
import styles from './ArticleDetailPage.module.css';
import Link from 'next/link';
import { optimizeContentForSEO } from '../../../lib/seo/articleSEO';
import SocialShare from '../ui/SocialShare';
import RelatedArticles from '../ui/RelatedArticles';
import ReadingProgressTracker from '../ui/ReadingProgressTracker';
import ArticleComments from '../ui/ArticleComments';
import { analytics } from '../../../lib/analytics/articleAnalytics';

const ArticleDetailPage = ({ article }) => {
  const seoData = optimizeContentForSEO(article.content);
  
  // Track article view on component mount
  useEffect(() => {
    if (article) {
      analytics.trackArticleView(article);
    }
  }, [article]);
  
  // Convert markdown content to HTML (simplified)
  const formatContent = (content) => {
    return content
      .replace(/^# (.+)/gm, '<h1 class="' + styles.h1 + '">$1</h1>')
      .replace(/^## (.+)/gm, '<h2 class="' + styles.h2 + '">$1</h2>')
      .replace(/^### (.+)/gm, '<h3 class="' + styles.h3 + '">$1</h3>')
      .replace(/^#### (.+)/gm, '<h4 class="' + styles.h4 + '">$1</h4>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/^\- (.+)/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/gs, '<ul class="' + styles.list + '">$1</ul>')
      .replace(/\n\n/g, '</p><p class="' + styles.paragraph + '">')
      .replace(/^(?!<[h1-6]|<ul|<li)(.+)/gm, '<p class="' + styles.paragraph + '">$1</p>');
  };

  return (
    <article className={styles.articleDetail}>
      {/* Reading Progress Tracker */}
      <ReadingProgressTracker articleSlug={article.slug} articleContent={article.content} />
      
      {/* Article Header */}
      <header className={styles.articleHeader}>
        <div className={styles.container}>
          <div className={styles.categoryBadge}>{article.category}</div>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          <p className={styles.articleExcerpt}>{article.excerpt}</p>
          
          <div className={styles.articleMeta}>
            <div className={styles.authorInfo}>
              <div className={styles.authorAvatar}>
                <img src="/images/doctor-osama.webp" alt="د. أسامة البكل" />
              </div>
              <div className={styles.authorDetails}>
                <span className={styles.authorName}>{article.author}</span>
                <span className={styles.authorTitle}>مدرس واستشاري أمراض الذكورة</span>
              </div>
            </div>
            
            <div className={styles.articleStats}>
              <span className={styles.publishDate}>
                📅 {new Date(article.publishedDate).toLocaleDateString('ar-EG')}
              </span>
              <span className={styles.readTime}>
                ⏱️ {seoData.readingTime} دقائق قراءة
              </span>
              <span className={styles.wordCount}>
                📝 {seoData.wordCount} كلمة
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Table of Contents */}
      {seoData.headings.length > 0 && (
        <section className={styles.tableOfContents}>
          <div className={styles.container}>
            <h3 className={styles.tocTitle}>محتويات المقال</h3>
            <ul className={styles.tocList}>
              {seoData.headings.map((heading, index) => (
                <li key={index} className={`${styles.tocItem} ${styles['level' + heading.level]}`}>
                  <a href={`#${heading.id}`} className={styles.tocLink}>
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className={styles.articleContent}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div 
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
            />
            
            {/* Article Tags */}
            <div className={styles.articleTags}>
              <h4 className={styles.tagsTitle}>الكلمات المفتاحية:</h4>
              <div className={styles.tagsList}>
                {article.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Social Share */}
            <SocialShare 
              url={typeof window !== 'undefined' ? window.location.href : ''}
              title={article.title}
              description={article.excerpt}
              articleSlug={article.slug}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {article.faqs && article.faqs.length > 0 && (
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h3 className={styles.faqTitle}>الأسئلة الشائعة</h3>
            <div className={styles.faqList}>
              {article.faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h4 className={styles.faqQuestion}>{faq.question}</h4>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Author Bio */}
      <section className={styles.authorBio}>
        <div className={styles.container}>
          <div className={styles.bioCard}>
            <div className={styles.bioAvatar}>
              <img src="/images/doctor-osama.webp" alt="د. أسامة البكل" />
            </div>
            <div className={styles.bioContent}>
              <h3 className={styles.bioName}>د. أسامة محمد البكل</h3>
              <p className={styles.bioTitle}>
                مدرس واستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية
              </p>
              <p className={styles.bioDescription}>
                بكلية الطب جامعة القاهرة (القصر العيني). خبرة أكثر من 15 عاماً في مجال أمراض الذكورة 
                والصحة الجنسية. عضو الجمعية المصرية لأمراض الذكورة والجمعية الأوروبية للصحة الجنسية.
              </p>
              <div className={styles.bioActions}>
                <Link href="/about-doctor" className={styles.bioBtn}>
                  المزيد عن الدكتور
                </Link>
                <Link href="/contact" className={styles.contactBtn}>
                  احجز موعد
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles currentSlug={article.slug} />

      {/* Article Comments */}
      <ArticleComments articleSlug={article.slug} />

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>هل تحتاج استشارة طبية؟</h3>
            <p className={styles.ctaText}>
              احجز موعدك الآن مع د. أسامة البكل للحصول على أفضل رعاية طبية متخصصة
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.primaryBtn}>
                احجز موعد الآن
              </Link>
              <Link href="tel:+201017912197" className={styles.phoneBtn}>
                📞 01017912197
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ArticleDetailPage;
