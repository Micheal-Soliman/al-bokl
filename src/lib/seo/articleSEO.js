// Enhanced SEO system for medical articles
export const generateSEOMetadata = (options) => {
  const baseUrl = 'https://www.albokl.com';
  
  return {
    title: options.title,
    description: options.description,
    keywords: options.keywords?.join(', ') || '',
    
    // Open Graph metadata
    openGraph: {
      title: options.title,
      description: options.description,
      url: `${baseUrl}${options.canonical}`,
      siteName: 'د. أسامة البكل - استشاري أمراض الذكورة',
      images: [
        {
          url: options.image || `${baseUrl}/serp.png`,
          width: 1200,
          height: 630,
          alt: options.title,
        }
      ],
      locale: 'ar_EG',
      type: 'website',
      publishedTime: options.publishDate,
      authors: [options.author || 'د. أسامة محمد البكل'],
      section: options.category,
    },
    
    // Twitter Card metadata
    twitter: {
      card: 'summary_large_image',
      title: options.title,
      description: options.description,
      images: [options.image || `${baseUrl}/serp.png`],
      creator: '@dr_osama_albokl',
      site: '@dr_osama_albokl',
    },
    
    // Additional metadata
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Canonical URL
    alternates: {
      canonical: `${baseUrl}${options.canonical}`,
      languages: {
        'ar-EG': `${baseUrl}${options.canonical}`,
        'x-default': `${baseUrl}${options.canonical}`,
      },
    },
    
    // Additional meta tags
    other: {
      'author': options.author || 'د. أسامة محمد البكل',
      'publisher': 'https://www.facebook.com/dr.osama.albokl',
      'category': options.category,
      'medical:specialty': 'أمراض الذكورة والصحة الجنسية',
      'medical:author_credentials': 'مدرس واستشاري طب وجراحة أمراض الذكورة - جامعة القاهرة',
    }
  };
};

export const generateArticleMetadata = (article) => {
  const baseUrl = 'https://www.albokl.com';
  
  return {
    title: `${article.title} | د. أسامة البكل - استشاري أمراض الذكورة`,
    description: article.excerpt || article.description,
    keywords: [
      ...article.keywords,
      'د. أسامة البكل',
      'استشاري أمراض الذكورة',
      'طب الذكورة',
      'الصحة الجنسية',
      'تأخر الإنجاب',
      'جامعة القاهرة',
      'القصر العيني'
    ].join(', '),
    
    // Open Graph metadata
    openGraph: {
      title: article.title,
      description: article.excerpt || article.description,
      url: `${baseUrl}/articles/${article.slug}`,
      siteName: 'د. أسامة البكل - استشاري أمراض الذكورة',
      images: [
        {
          url: article.featuredImage || `${baseUrl}/serp.png`,
          width: 1200,
          height: 630,
          alt: article.title,
        }
      ],
      locale: 'ar_EG',
      type: 'article',
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate || article.publishedDate,
      authors: ['د. أسامة محمد البكل'],
      section: article.category,
      tags: article.tags,
    },
    
    // Twitter Card metadata
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt || article.description,
      images: [article.featuredImage || `${baseUrl}/serp.png`],
      creator: '@dr_osama_albokl',
      site: '@dr_osama_albokl',
    },
    
    // Additional metadata
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Canonical URL
    alternates: {
      canonical: `${baseUrl}/articles/${article.slug}`,
      languages: {
        'ar-EG': `${baseUrl}/articles/${article.slug}`,
        'x-default': `${baseUrl}/articles/${article.slug}`,
      },
    },
    
    // Additional meta tags
    other: {
      'article:author': 'د. أسامة محمد البكل',
      'article:publisher': 'https://www.facebook.com/dr.osama.albokl',
      'article:section': article.category,
      'article:tag': article.tags?.join(','),
      'article:published_time': article.publishedDate,
      'article:modified_time': article.updatedDate || article.publishedDate,
      'medical:specialty': 'أمراض الذكورة والصحة الجنسية',
      'medical:author_credentials': 'مدرس واستشاري طب وجراحة أمراض الذكورة - جامعة القاهرة',
    }
  };
};

// Generate JSON-LD structured data for articles
export const generateArticleStructuredData = (article) => {
  if (!article) {
    return null;
  }
  
  const baseUrl = 'https://www.albokl.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title || 'مقال طبي',
    description: article.excerpt || article.description || 'مقال طبي متخصص',
    image: {
      '@type': 'ImageObject',
      url: article.featuredImage || `${baseUrl}/serp.png`,
      width: 1200,
      height: 630
    },
    author: {
      '@type': 'Person',
      name: 'د. أسامة محمد البكل',
      url: `${baseUrl}/about-doctor`,
      jobTitle: 'مدرس واستشاري طب وجراحة أمراض الذكورة',
      worksFor: {
        '@type': 'Organization',
        name: 'جامعة القاهرة - كلية الطب',
        url: 'https://www.cu.edu.eg'
      },
      sameAs: [
        'https://www.facebook.com/dr.osama.albokl',
        'https://www.instagram.com/dr.osama.albokl',
        'https://www.youtube.com/c/drosama-albokl'
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: 'د. أسامة البكل - استشاري أمراض الذكورة',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.webp`,
        width: 300,
        height: 100
      }
    },
    datePublished: article.publishedDate,
    dateModified: article.updatedDate || article.publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/articles/${article.slug}`
    },
    articleSection: article.category,
    keywords: article.keywords?.join(', '),
    wordCount: article.wordCount || 1000,
    articleBody: article.content,
    about: {
      '@type': 'MedicalCondition',
      name: article.medicalCondition || article.category
    },
    audience: {
      '@type': 'PeopleAudience',
      audienceType: 'المرضى والمهتمون بالصحة الجنسية'
    }
  };
};

// Generate FAQ structured data for articles
export const generateFAQStructuredData = (faqs) => {
  if (!faqs || faqs.length === 0) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

// Generate BreadcrumbList structured data
export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  if (!breadcrumbs || !Array.isArray(breadcrumbs) || breadcrumbs.length === 0) {
    return null;
  }
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name || 'صفحة',
      item: item.url || '#'
    }))
  };
};

// SEO optimization utilities
export const optimizeContentForSEO = (content) => {
  // Check if content exists
  if (!content || typeof content !== 'string') {
    return {
      readingTime: 0,
      wordCount: 0,
      headings: []
    };
  }
  
  // Add reading time calculation
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  // Extract headings for table of contents
  const headingRegex = /#{1,6}\s+(.+)/g;
  const headings = [];
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[0].split('#').length - 1;
    const text = match[1].trim();
    const id = text.toLowerCase()
      .replace(/[^\u0600-\u06FF\w\s]/g, '')
      .replace(/\s+/g, '-');
    
    headings.push({ level, text, id });
  }
  
  return {
    wordCount,
    readingTime,
    headings
  };
};

// Generate sitemap entry for article
export const generateSitemapEntry = (article) => {
  return {
    url: `https://www.albokl.com/articles/${article.slug}`,
    lastModified: article.updatedDate || article.publishedDate,
    changeFrequency: 'monthly',
    priority: 0.8
  };
};
