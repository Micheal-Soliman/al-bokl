'use client';

import React, { useState, useEffect } from 'react';
import styles from './ArticleComments.module.css';
import { analytics } from '../../../lib/analytics/articleAnalytics';

const ArticleComments = ({ articleSlug }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    message: '',
    rating: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Load comments from localStorage on component mount
  useEffect(() => {
    const storedComments = localStorage.getItem(`comments_${articleSlug}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [articleSlug]);

  // Save comments to localStorage whenever comments change
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem(`comments_${articleSlug}`, JSON.stringify(comments));
    }
  }, [comments, articleSlug]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setNewComment(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!newComment.name.trim() || !newComment.message.trim()) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    setIsSubmitting(true);

    try {
      const comment = {
        id: Date.now().toString(),
        ...newComment,
        timestamp: new Date().toISOString(),
        articleSlug,
        approved: false // Comments need approval in real implementation
      };

      setComments(prev => [comment, ...prev]);
      
      // Track comment submission
      analytics.trackContactInteraction('comment_submit', {
        articleSlug,
        rating: newComment.rating,
        hasEmail: !!newComment.email
      });

      // Reset form
      setNewComment({
        name: '',
        email: '',
        message: '',
        rating: 5
      });
      
      setShowForm(false);
      
      // Show success message
      alert('تم إرسال تعليقك بنجاح! سيتم مراجعته قبل النشر.');
      
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('حدث خطأ أثناء إرسال التعليق. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderStars = (rating, interactive = false, onRatingChange = null) => {
    return (
      <div className={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            className={`${styles.star} ${star <= rating ? styles.filled : ''} ${interactive ? styles.interactive : ''}`}
            onClick={interactive ? () => onRatingChange(star) : undefined}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className={styles.commentsSection}>
      <div className={styles.container}>
        <div className={styles.commentsHeader}>
          <h3 className={styles.commentsTitle}>
            التعليقات ({comments.length})
          </h3>
          <button 
            className={styles.addCommentBtn}
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'إلغاء' : 'أضف تعليق'}
          </button>
        </div>

        {/* Comment Form */}
        {showForm && (
          <div className={styles.commentForm}>
            <h4 className={styles.formTitle}>اترك تعليقك</h4>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>الاسم *</label>
                  <input
                    type="text"
                    name="name"
                    value={newComment.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder="اكتب اسمك"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>البريد الإلكتروني (اختياري)</label>
                  <input
                    type="email"
                    name="email"
                    value={newComment.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>التقييم</label>
                {renderStars(newComment.rating, true, handleRatingChange)}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>التعليق *</label>
                <textarea
                  name="message"
                  value={newComment.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows="4"
                  required
                  placeholder="اكتب تعليقك هنا..."
                />
              </div>

              <div className={styles.formActions}>
                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال التعليق'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Comments List */}
        <div className={styles.commentsList}>
          {comments.length === 0 ? (
            <div className={styles.noComments}>
              <div className={styles.noCommentsIcon}>💬</div>
              <p className={styles.noCommentsText}>
                لا توجد تعليقات بعد. كن أول من يعلق على هذا المقال!
              </p>
            </div>
          ) : (
            comments.map(comment => (
              <div key={comment.id} className={styles.commentItem}>
                <div className={styles.commentHeader}>
                  <div className={styles.commentAuthor}>
                    <div className={styles.authorAvatar}>
                      {comment.name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.authorInfo}>
                      <h5 className={styles.authorName}>{comment.name}</h5>
                      <span className={styles.commentDate}>
                        {formatDate(comment.timestamp)}
                      </span>
                    </div>
                  </div>
                  <div className={styles.commentRating}>
                    {renderStars(comment.rating)}
                  </div>
                </div>
                <div className={styles.commentContent}>
                  <p className={styles.commentMessage}>{comment.message}</p>
                </div>
                {!comment.approved && (
                  <div className={styles.pendingBadge}>
                    في انتظار المراجعة
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Comments Guidelines */}
        <div className={styles.guidelines}>
          <h4 className={styles.guidelinesTitle}>إرشادات التعليق</h4>
          <ul className={styles.guidelinesList}>
            <li>يرجى الالتزام بالأدب واللياقة في التعليقات</li>
            <li>تجنب المعلومات الطبية الشخصية في التعليقات العامة</li>
            <li>للاستشارات الطبية الخاصة، يرجى حجز موعد مع الطبيب</li>
            <li>سيتم مراجعة جميع التعليقات قبل النشر</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ArticleComments;
