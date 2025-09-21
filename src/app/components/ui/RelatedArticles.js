import React from 'react';
import styles from './RelatedArticles.module.css';
import Link from 'next/link';
import { getRelatedArticles } from '../../../lib/utils/relatedArticles';

const RelatedArticles = ({ currentSlug }) => {
  const relatedArticles = getRelatedArticles(currentSlug, 3);
  
  if (relatedArticles.length === 0) {
    return null;
  }
  
  return (
    <section className={styles.relatedArticles}>
      <div className={styles.container}>
        <h3 className={styles.sectionTitle}>مقالات ذات صلة</h3>
        <div className={styles.articlesGrid}>
          {relatedArticles.map((article) => (
            <Link 
              href={`/articles/${article.slug}`} 
              key={article.id} 
              className={styles.articleCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.categoryBadge}>{article.category}</div>
                <div className={styles.readTime}>{article.readTime} دقائق</div>
              </div>
              
              <div className={styles.cardContent}>
                <h4 className={styles.articleTitle}>{article.title}</h4>
                <p className={styles.articleExcerpt}>
                  {article.excerpt.substring(0, 120)}...
                </p>
              </div>
              
              <div className={styles.cardFooter}>
                <span className={styles.author}>{article.author}</span>
                <span className={styles.publishDate}>
                  {new Date(article.publishedDate).toLocaleDateString('ar-EG')}
                </span>
              </div>
              
              <div className={styles.similarityBadge}>
                <span className={styles.similarityText}>
                  مشابه بنسبة {Math.round(article.similarityScore * 100)}%
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className={styles.viewMoreSection}>
          <Link href="/articles" className={styles.viewMoreBtn}>
            عرض جميع المقالات
            <svg className={styles.arrowIcon} viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
