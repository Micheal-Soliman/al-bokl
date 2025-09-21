'use client';

import React, { useState, useEffect, useRef } from 'react';
import { analytics } from '../../../lib/analytics/articleAnalytics';
import styles from './ReadingProgressTracker.module.css';

const ReadingProgressTracker = ({ articleSlug, articleContent }) => {
  const [progress, setProgress] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const startTimeRef = useRef(null);
  const lastProgressRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startTimeRef.current = Date.now();
    setIsVisible(true);

    // Start time tracking
    intervalRef.current = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setProgress(Math.min(100, Math.max(0, scrollPercent)));

      // Track reading progress at milestones
      const currentProgress = Math.round(scrollPercent);
      const lastProgress = lastProgressRef.current;

      if (currentProgress > lastProgress && [25, 50, 75, 100].includes(currentProgress)) {
        const currentTimeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
        analytics.trackReadingProgress(articleSlug, currentProgress, currentTimeSpent);
        lastProgressRef.current = currentProgress;
      }

      // Track article completion
      if (currentProgress >= 95 && lastProgress < 95) {
        const totalTimeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
        analytics.trackArticleCompletion(articleSlug, totalTimeSpent);
      }
    };

    const handleBeforeUnload = () => {
      const totalTimeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
      analytics.trackReadingProgress(articleSlug, progress, totalTimeSpent);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [articleSlug, progress]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  return (
    <div className={styles.progressTracker}>
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className={styles.progressInfo}>
        <span className={styles.progressText}>
          {Math.round(progress)}% مكتمل
        </span>
        <span className={styles.timeSpent}>
          {formatTime(timeSpent)}
        </span>
      </div>
    </div>
  );
};

export default ReadingProgressTracker;
