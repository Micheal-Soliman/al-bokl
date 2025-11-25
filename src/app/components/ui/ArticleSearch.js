'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './ArticleSearch.module.css';
import Link from 'next/link';
let articlesCache = null;

const ArticleSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Search function
  const performSearch = async (term) => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      if (!articlesCache) {
        const mod = await import('../../../data/articles/articlesData');
        articlesCache = mod && mod.medicalArticles ? mod.medicalArticles : [];
      }
      const results = (articlesCache || []).filter(article => {
        const searchText = term.toLowerCase();
        return (
          (article.title || '').toLowerCase().includes(searchText) ||
          (article.excerpt || '').toLowerCase().includes(searchText) ||
          (article.category || '').toLowerCase().includes(searchText) ||
          (article.tags || []).some(tag => (tag || '').toLowerCase().includes(searchText)) ||
          (article.keywords || []).some(keyword => (keyword || '').toLowerCase().includes(searchText))
        );
      });
      setSearchResults(results.slice(0, 8));
    } finally {
      setIsLoading(false);
    }
  };

  // Handle search input
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsOpen(true);
    performSearch(value);
  };

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const highlightText = (text, highlight) => {
    if (!highlight.trim()) return text;
    
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className={styles.highlight}>{part}</mark>
      ) : part
    );
  };

  return (
    <div className={styles.searchContainer} ref={searchRef}>
      <div className={styles.searchInputWrapper}>
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="ابحث في المقالات الطبية..."
          className={styles.searchInput}
          aria-label="البحث في المقالات"
        />
        <div className={styles.searchIcon}>
          <svg viewBox="0 0 24 24" className={styles.icon}>
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </div>
      </div>

      {isOpen && (searchTerm.trim() || isLoading) && (
        <div className={styles.searchResults}>
          {isLoading ? (
            <div className={styles.loadingState}>
              <div className={styles.spinner}></div>
              <span>جاري البحث...</span>
            </div>
          ) : searchResults.length > 0 ? (
            <>
              <div className={styles.resultsHeader}>
                <span className={styles.resultsCount}>
                  {searchResults.length} نتيجة للبحث عن "{searchTerm}"
                </span>
              </div>
              <div className={styles.resultsList}>
                {searchResults.map((article) => (
                  <Link
                    key={article.id}
                    href={`/articles/${article.slug}`}
                    className={styles.resultItem}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={styles.resultContent}>
                      <h4 className={styles.resultTitle}>
                        {highlightText(article.title, searchTerm)}
                      </h4>
                      <p className={styles.resultExcerpt}>
                        {highlightText(article.excerpt.substring(0, 120) + '...', searchTerm)}
                      </p>
                      <div className={styles.resultMeta}>
                        <span className={styles.resultCategory}>{article.category}</span>
                        <span className={styles.resultReadTime}>{article.readTime} دقائق</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className={styles.viewAllResults}>
                <Link href={`/articles?search=${encodeURIComponent(searchTerm)}`} className={styles.viewAllLink}>
                  عرض جميع النتائج →
                </Link>
              </div>
            </>
          ) : searchTerm.trim() ? (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🔍</div>
              <h4 className={styles.noResultsTitle}>لا توجد نتائج</h4>
              <p className={styles.noResultsText}>
                لم نجد أي مقالات تحتوي على "{searchTerm}"
              </p>
              <div className={styles.searchSuggestions}>
                <p className={styles.suggestionsTitle}>جرب البحث عن:</p>
                <div className={styles.suggestionTags}>
                  {['ضعف الانتصاب', 'تأخر الإنجاب', 'دوالي الخصية', 'العمليات الجراحية'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setSearchTerm(suggestion);
                        performSearch(suggestion);
                      }}
                      className={styles.suggestionTag}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ArticleSearch;
