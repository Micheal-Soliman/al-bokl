export default function sitemap() {
  const currentDate = new Date();
  
  return [
    {
      url: 'https://www.albokl.com',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.albokl.com/about',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.albokl.com/contact',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.albokl.com/articles',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.albokl.com/videos',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Surgery Pages - High Priority
    {
      url: 'https://www.albokl.com/surgeries/varicocele',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: 'https://www.albokl.com/surgeries/microscopic-inspection',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    // Medical Conditions Pages
    {
      url: 'https://www.albokl.com/conditions/erectile-dysfunction',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://www.albokl.com/conditions/male-infertility',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://www.albokl.com/conditions/premature-ejaculation',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Treatment Pages
    {
      url: 'https://www.albokl.com/treatments/hormone-therapy',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.albokl.com/treatments/sexual-health',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // FAQ and Information Pages
    {
      url: 'https://www.albokl.com/faq',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.albokl.com/appointment',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
