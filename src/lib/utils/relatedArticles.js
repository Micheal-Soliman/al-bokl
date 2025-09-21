// Related Articles Recommendation System
import { medicalArticles } from '../../data/articles/articlesData';

/**
 * Calculate similarity score between two articles
 * @param {Object} article1 - First article
 * @param {Object} article2 - Second article
 * @returns {number} Similarity score (0-1)
 */
const calculateSimilarity = (article1, article2) => {
  let score = 0;
  
  // Category match (highest weight)
  if (article1.category === article2.category) {
    score += 0.4;
  }
  
  // Tag overlap
  const commonTags = article1.tags.filter(tag => 
    article2.tags.some(tag2 => tag2.toLowerCase() === tag.toLowerCase())
  );
  score += (commonTags.length / Math.max(article1.tags.length, article2.tags.length)) * 0.3;
  
  // Keyword overlap
  const commonKeywords = article1.keywords.filter(keyword => 
    article2.keywords.some(keyword2 => keyword2.toLowerCase().includes(keyword.toLowerCase()) || 
                                     keyword.toLowerCase().includes(keyword2.toLowerCase()))
  );
  score += (commonKeywords.length / Math.max(article1.keywords.length, article2.keywords.length)) * 0.2;
  
  // Title similarity (simple word matching)
  const words1 = article1.title.toLowerCase().split(/\s+/);
  const words2 = article2.title.toLowerCase().split(/\s+/);
  const commonWords = words1.filter(word => words2.includes(word) && word.length > 2);
  score += (commonWords.length / Math.max(words1.length, words2.length)) * 0.1;
  
  return Math.min(score, 1); // Cap at 1
};

/**
 * Get related articles for a given article
 * @param {string} currentSlug - Slug of the current article
 * @param {number} limit - Maximum number of related articles to return
 * @returns {Array} Array of related articles with similarity scores
 */
export const getRelatedArticles = (currentSlug, limit = 3) => {
  const currentArticle = medicalArticles.find(article => article.slug === currentSlug);
  
  if (!currentArticle) {
    return [];
  }
  
  // Calculate similarity scores for all other articles
  const articlesWithScores = medicalArticles
    .filter(article => article.slug !== currentSlug)
    .map(article => ({
      ...article,
      similarityScore: calculateSimilarity(currentArticle, article)
    }))
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .slice(0, limit);
  
  return articlesWithScores;
};

/**
 * Get articles by category (excluding current article)
 * @param {string} category - Category to filter by
 * @param {string} currentSlug - Current article slug to exclude
 * @param {number} limit - Maximum number of articles to return
 * @returns {Array} Array of articles in the same category
 */
export const getArticlesByCategory = (category, currentSlug, limit = 4) => {
  return medicalArticles
    .filter(article => article.category === category && article.slug !== currentSlug)
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
    .slice(0, limit);
};

/**
 * Get popular articles based on reading time and recency
 * @param {string} currentSlug - Current article slug to exclude
 * @param {number} limit - Maximum number of articles to return
 * @returns {Array} Array of popular articles
 */
export const getPopularArticles = (currentSlug, limit = 5) => {
  return medicalArticles
    .filter(article => article.slug !== currentSlug)
    .map(article => ({
      ...article,
      popularityScore: calculatePopularityScore(article)
    }))
    .sort((a, b) => b.popularityScore - a.popularityScore)
    .slice(0, limit);
};

/**
 * Calculate popularity score based on various factors
 * @param {Object} article - Article object
 * @returns {number} Popularity score
 */
const calculatePopularityScore = (article) => {
  let score = 0;
  
  // Recency factor (newer articles get higher score)
  const daysSincePublished = (new Date() - new Date(article.publishedDate)) / (1000 * 60 * 60 * 24);
  const recencyScore = Math.max(0, 1 - (daysSincePublished / 365)); // Decay over a year
  score += recencyScore * 0.3;
  
  // Reading time factor (moderate reading time is preferred)
  const optimalReadTime = 8; // minutes
  const readTimeScore = 1 - Math.abs(article.readTime - optimalReadTime) / optimalReadTime;
  score += Math.max(0, readTimeScore) * 0.2;
  
  // Word count factor (comprehensive articles preferred)
  const wordCountScore = Math.min(article.wordCount / 2000, 1); // Cap at 2000 words
  score += wordCountScore * 0.2;
  
  // Category popularity (some categories are more popular)
  const categoryPopularity = {
    'ضعف الانتصاب': 0.9,
    'تأخر الإنجاب': 0.8,
    'دوالي الخصيتين': 0.7,
    'العمليات الجراحية': 0.6,
    'مشاكل البلوغ': 0.5,
    'الصحة الجنسية': 0.8,
    'الهرمونات': 0.6,
    'العدوى والالتهابات': 0.5
  };
  score += (categoryPopularity[article.category] || 0.5) * 0.3;
  
  return score;
};

/**
 * Get trending articles based on tags
 * @param {Array} tags - Array of tags to find trending articles for
 * @param {string} currentSlug - Current article slug to exclude
 * @param {number} limit - Maximum number of articles to return
 * @returns {Array} Array of trending articles
 */
export const getTrendingArticles = (tags, currentSlug, limit = 3) => {
  const trendingTags = ['ضعف الانتصاب', 'تأخر الإنجاب', 'الحقن المجهري', 'دوالي الخصيتين'];
  
  return medicalArticles
    .filter(article => article.slug !== currentSlug)
    .filter(article => 
      article.tags.some(tag => trendingTags.includes(tag)) ||
      tags.some(tag => article.tags.includes(tag))
    )
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
    .slice(0, limit);
};

/**
 * Get comprehensive recommendations for an article
 * @param {string} currentSlug - Current article slug
 * @returns {Object} Object containing different types of recommendations
 */
export const getArticleRecommendations = (currentSlug) => {
  const currentArticle = medicalArticles.find(article => article.slug === currentSlug);
  
  if (!currentArticle) {
    return {
      related: [],
      sameCategory: [],
      popular: [],
      trending: []
    };
  }
  
  return {
    related: getRelatedArticles(currentSlug, 3),
    sameCategory: getArticlesByCategory(currentArticle.category, currentSlug, 2),
    popular: getPopularArticles(currentSlug, 3),
    trending: getTrendingArticles(currentArticle.tags, currentSlug, 2)
  };
};
