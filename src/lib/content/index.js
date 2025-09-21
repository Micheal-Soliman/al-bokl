// نقطة دخول موحدة لجميع المحتوى الطبي
export {
  SURGERY_CONTENT,
  CONDITION_CONTENT,
  TREATMENT_CONTENT,
  ARTICLE_TOPICS,
  VIDEO_CONTENT
} from './medical-content';

// دوال مساعدة للوصول للمحتوى
export const getSurgeryContent = (surgeryType) => {
  return SURGERY_CONTENT[surgeryType] || null;
};

export const getConditionContent = (conditionType) => {
  return CONDITION_CONTENT[conditionType] || null;
};

export const getTreatmentContent = (treatmentType) => {
  return TREATMENT_CONTENT[treatmentType] || null;
};

export const getArticlesByCategory = (category) => {
  return ARTICLE_TOPICS.filter(article => article.category === category);
};

export const getVideosByCategory = (category) => {
  return VIDEO_CONTENT.filter(video => video.category === category);
};

// دوال للبحث في المحتوى
export const searchContent = (query) => {
  const results = [];
  
  // البحث في المقالات
  ARTICLE_TOPICS.forEach(article => {
    if (article.title.includes(query) || 
        article.description.includes(query) ||
        article.keywords.some(keyword => keyword.includes(query))) {
      results.push({ type: 'article', ...article });
    }
  });
  
  // البحث في الفيديوهات
  VIDEO_CONTENT.forEach(video => {
    if (video.title.includes(query) || video.description.includes(query)) {
      results.push({ type: 'video', ...video });
    }
  });
  
  return results;
};
