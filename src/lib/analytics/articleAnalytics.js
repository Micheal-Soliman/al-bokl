// Article Analytics Tracking System
export class ArticleAnalytics {
  constructor() {
    this.events = [];
    this.sessionId = this.generateSessionId();
    this.userId = this.getUserId();
  }

  // Generate unique session ID
  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Get or create user ID (stored in localStorage)
  getUserId() {
    if (typeof window === 'undefined') return null;
    
    let userId = localStorage.getItem('albokl_user_id');
    if (!userId) {
      userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('albokl_user_id', userId);
    }
    return userId;
  }

  // Track article view
  trackArticleView(articleData) {
    const event = {
      type: 'article_view',
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      userId: this.userId,
      data: {
        articleId: articleData.id,
        articleSlug: articleData.slug,
        articleTitle: articleData.title,
        category: articleData.category,
        tags: articleData.tags,
        wordCount: articleData.wordCount,
        readTime: articleData.readTime,
        url: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenResolution: `${screen.width}x${screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`
      }
    };

    this.recordEvent(event);
    this.sendToAnalytics(event);
  }

  // Track reading progress
  trackReadingProgress(articleSlug, progressPercentage, timeSpent) {
    const event = {
      type: 'reading_progress',
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      userId: this.userId,
      data: {
        articleSlug,
        progressPercentage: Math.round(progressPercentage),
        timeSpent: Math.round(timeSpent), // in seconds
        url: window.location.href
      }
    };

    this.recordEvent(event);
    
    // Send progress events at 25%, 50%, 75%, and 100%
    if ([25, 50, 75, 100].includes(Math.round(progressPercentage))) {
      this.sendToAnalytics(event);
    }
  }

  // Track article completion
  trackArticleCompletion(articleSlug, totalTimeSpent) {
    const event = {
      type: 'article_completed',
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      userId: this.userId,
      data: {
        articleSlug,
        totalTimeSpent: Math.round(totalTimeSpent),
        url: window.location.href
      }
    };

    this.recordEvent(event);
    this.sendToAnalytics(event);
  }

  // Track social sharing
  trackSocialShare(articleSlug, platform) {
    const event = {
      type: 'social_share',
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      userId: this.userId,
      data: {
        articleSlug,
        platform,
        url: window.location.href
      }
    };

    this.recordEvent(event);
    this.sendToAnalytics(event);
  }

  // Track search queries
  trackSearch(query, resultsCount) {
    const event = {
      type: 'search',
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      userId: this.userId,
      data: {
        query: query.toLowerCase(),
        resultsCount,
        url: window.location.href
      }
    };

    this.recordEvent(event);
    this.sendToAnalytics(event);
  }

  // Track link clicks
  trackLinkClick(linkUrl, linkText, articleSlug = null) {
    const event = {
      type: 'link_click',
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      userId: this.userId,
      data: {
        linkUrl,
        linkText,
        articleSlug,
        sourceUrl: window.location.href
      }
    };

    this.recordEvent(event);
    this.sendToAnalytics(event);
  }

  // Track contact form interactions
  trackContactInteraction(action, formData = {}) {
    const event = {
      type: 'contact_interaction',
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      userId: this.userId,
      data: {
        action, // 'form_view', 'form_submit', 'phone_click', etc.
        ...formData,
        url: window.location.href
      }
    };

    this.recordEvent(event);
    this.sendToAnalytics(event);
  }

  // Record event locally
  recordEvent(event) {
    this.events.push(event);
    
    // Keep only last 100 events in memory
    if (this.events.length > 100) {
      this.events = this.events.slice(-100);
    }

    // Store in localStorage for persistence
    if (typeof window !== 'undefined') {
      const storedEvents = JSON.parse(localStorage.getItem('albokl_analytics') || '[]');
      storedEvents.push(event);
      
      // Keep only last 50 events in localStorage
      const eventsToStore = storedEvents.slice(-50);
      localStorage.setItem('albokl_analytics', JSON.stringify(eventsToStore));
    }
  }

  // Send to analytics service
  async sendToAnalytics(event) {
    try {
      // In production, send to your analytics service
      // For now, we'll use Google Analytics 4 if available
      if (typeof gtag !== 'undefined') {
        gtag('event', event.type, {
          event_category: 'Article',
          event_label: event.data.articleSlug || event.data.query,
          value: event.data.progressPercentage || event.data.timeSpent,
          custom_parameters: event.data
        });
      }

      // Also send to custom analytics endpoint if available
      if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
        await fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(event),
        });
      }

      // Console log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', event);
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }

  // Get analytics summary
  getAnalyticsSummary() {
    if (typeof window === 'undefined') return null;
    
    const storedEvents = JSON.parse(localStorage.getItem('albokl_analytics') || '[]');
    
    const summary = {
      totalEvents: storedEvents.length,
      articlesViewed: storedEvents.filter(e => e.type === 'article_view').length,
      articlesCompleted: storedEvents.filter(e => e.type === 'article_completed').length,
      searchQueries: storedEvents.filter(e => e.type === 'search').length,
      socialShares: storedEvents.filter(e => e.type === 'social_share').length,
      averageReadingTime: this.calculateAverageReadingTime(storedEvents),
      popularCategories: this.getPopularCategories(storedEvents),
      sessionDuration: this.calculateSessionDuration(storedEvents)
    };

    return summary;
  }

  // Calculate average reading time
  calculateAverageReadingTime(events) {
    const completedArticles = events.filter(e => e.type === 'article_completed');
    if (completedArticles.length === 0) return 0;
    
    const totalTime = completedArticles.reduce((sum, event) => sum + event.data.totalTimeSpent, 0);
    return Math.round(totalTime / completedArticles.length);
  }

  // Get popular categories
  getPopularCategories(events) {
    const categoryCount = {};
    events.filter(e => e.type === 'article_view').forEach(event => {
      const category = event.data.category;
      categoryCount[category] = (categoryCount[category] || 0) + 1;
    });

    return Object.entries(categoryCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([category, count]) => ({ category, count }));
  }

  // Calculate session duration
  calculateSessionDuration(events) {
    if (events.length === 0) return 0;
    
    const sessionEvents = events.filter(e => e.sessionId === this.sessionId);
    if (sessionEvents.length === 0) return 0;
    
    const firstEvent = new Date(sessionEvents[0].timestamp);
    const lastEvent = new Date(sessionEvents[sessionEvents.length - 1].timestamp);
    
    return Math.round((lastEvent - firstEvent) / 1000); // in seconds
  }

  // Clear analytics data
  clearAnalyticsData() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('albokl_analytics');
      localStorage.removeItem('albokl_user_id');
    }
    this.events = [];
  }
}

// Create singleton instance
export const analytics = new ArticleAnalytics();
