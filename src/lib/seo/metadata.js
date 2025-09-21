// مولدات البيانات الوصفية للـ SEO
export const generatePageMetadata = ({
  title,
  description,
  keywords,
  path = '',
  image = '/images/doctor-osama.webp',
  type = 'website'
}) => {
  const baseUrl = 'https://www.albokl.com';
  const fullTitle = title ? `${title} - الدكتور أسامة البكل` : 'الدكتور أسامة البكل - مدرس وإستشاري طب وجراحة أمراض الذكورة';
  
  return {
    title: fullTitle,
    description: description || 'الدكتور أسامة البكل, مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني. خبرة أكثر من 10 سنوات في علاج مشاكل الذكورة والإنجاب.',
    keywords: keywords || 'دكتور ذكورة, تأخر الإنجاب, الصحة الجنسية, دوالي الخصية, ضعف الانتصاب, العقم عند الرجال, طب الذكورة, قصر العيني',
    openGraph: {
      title: fullTitle,
      description,
      url: `${baseUrl}${path}`,
      siteName: 'الدكتور أسامة البكل',
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title || 'الدكتور أسامة محمد البكل',
        },
      ],
      locale: 'ar_EG',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${baseUrl}${image}`],
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
  };
};

// قوالب البيانات الوصفية للصفحات المختلفة
export const metadataTemplates = {
  surgery: (surgeryName, description) => generatePageMetadata({
    title: surgeryName,
    description,
    keywords: `${surgeryName}, عملية جراحية, دكتور ذكورة, جراحة الذكورة, الدكتور أسامة البكل`,
    type: 'article'
  }),
  
  condition: (conditionName, description) => generatePageMetadata({
    title: conditionName,
    description,
    keywords: `${conditionName}, أمراض الذكورة, علاج, الدكتور أسامة البكل`,
    type: 'article'
  }),
  
  treatment: (treatmentName, description) => generatePageMetadata({
    title: treatmentName,
    description,
    keywords: `${treatmentName}, علاج الذكورة, طب الذكورة, الدكتور أسامة البكل`,
    type: 'article'
  }),
  
  article: (articleTitle, description) => generatePageMetadata({
    title: articleTitle,
    description,
    keywords: `${articleTitle}, مقالات طبية, الذكورة, الصحة الجنسية, الدكتور أسامة البكل`,
    type: 'article'
  })
};

// بيانات وصفية محددة للصفحات الرئيسية
export const staticMetadata = {
  home: generatePageMetadata({
    title: null, // سيستخدم العنوان الافتراضي
    description: 'الدكتور أسامة محمد البكل، مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني. خبرة أكثر من 10 سنوات في علاج مشاكل الذكورة والإنجاب.',
    path: '/'
  }),
  
  about: generatePageMetadata({
    title: 'عن الدكتور أسامة البكل',
    description: 'تعرف على الدكتور أسامة محمد البكل، مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني. خبرة أكثر من 10 سنوات.',
    path: '/about',
    type: 'profile'
  }),
  
  contact: generatePageMetadata({
    title: 'تواصل مع الدكتور أسامة البكل',
    description: 'احجز موعدك مع الدكتور أسامة البكل. عيادة الشيخ زايد، توين تاورز. مواعيد العمل من السبت للأربعاء من 12 ظهراً حتى 8 مساءً.',
    path: '/contact'
  }),
  
  articles: generatePageMetadata({
    title: 'مقالات طبية متخصصة في أمراض الذكورة',
    description: 'مقالات طبية متخصصة في أمراض الذكورة والصحة الجنسية وتأخر الإنجاب من الدكتور أسامة البكل. معلومات موثوقة وحديثة عن علاج مشاكل الذكورة.',
    path: '/articles'
  }),
  
  videos: generatePageMetadata({
    title: 'فيديوهات تعليمية في أمراض الذكورة والصحة الجنسية',
    description: 'فيديوهات تعليمية وتوعوية متخصصة في أمراض الذكورة والصحة الجنسية وتأخر الإنجاب من الدكتور أسامة البكل. محتوى طبي موثوق ومفيد.',
    path: '/videos'
  })
};
