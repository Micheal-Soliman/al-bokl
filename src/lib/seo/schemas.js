// مخططات البيانات المنظمة (Schema.org)
export const createDoctorSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "الدكتور أسامة محمد البكل",
  "jobTitle": "مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية",
  "worksFor": {
    "@type": "Organization",
    "name": "كلية طب قصر العيني - جامعة القاهرة"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "الشيخ زايد، محور 26 يوليو، توين تاورز برج C، الدور الثاني، عيادة D",
    "addressLocality": "الجيزة",
    "addressRegion": "الجيزة",
    "addressCountry": "EG"
  },
  "telephone": "+201017912197",
  "email": "Booking@albokl.com",
  "url": "https://www.albokl.com",
  "image": "https://www.albokl.com/images/doctor-osama.webp",
  "sameAs": [
    "https://www.facebook.com/drosama.albokl",
    "https://www.instagram.com/dr.osama.albokl",
    "https://www.youtube.com/@drosama.albokl"
  ]
});

export const createMedicalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "الدكتور أسامة محمد البكل",
  "description": "مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني",
  "url": "https://www.albokl.com",
  "telephone": "+201017912197",
  "email": "Booking@albokl.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "الشيخ زايد، محور 26 يوليو، توين تاورز برج C، الدور الثاني، عيادة D",
    "addressLocality": "الجيزة",
    "addressRegion": "الجيزة",
    "postalCode": "12588",
    "addressCountry": "EG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.0444",
    "longitude": "31.2357"
  },
  "openingHours": [
    "Mo-Th 09:00-17:00",
    "Sa 09:00-15:00"
  ],
  "priceRange": "$$",
  "acceptsReservations": true,
  "image": "https://www.albokl.com/images/doctor-osama.webp",
  "sameAs": [
    "https://www.facebook.com/drosama.albokl",
    "https://www.instagram.com/dr.osama.albokl",
    "https://www.youtube.com/@drosama.albokl"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "خدمات طب الذكورة",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "عملية دوالي الخصية بالميكروسكوب",
          "description": "عملية جراحية دقيقة لعلاج دوالي الخصية باستخدام الميكروسكوب الجراحي"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "التفتيش الميكروسكوبي للخصية",
          "description": "إجراء جراحي لاستخراج الحيوانات المنوية من الخصية"
        }
      }
    ]
  }
});

export const createMedicalProcedureSchema = (name, description, benefits = []) => ({
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": name,
  "description": description,
  "procedureType": "جراحي",
  "bodyLocation": "الجهاز التناسلي الذكري",
  "preparation": "فحص طبي شامل وتحاليل مخبرية",
  "followup": "متابعة دورية مع الطبيب المختص",
  "howPerformed": "تحت التخدير العام باستخدام أحدث التقنيات الطبية",
  "performer": {
    "@type": "Person",
    "name": "الدكتور أسامة محمد البكل"
  },
  "benefits": benefits
});

export const createFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": typeof faq.answer === 'string' ? faq.answer : faq.answer.props?.children || ''
    }
  }))
});

export const createBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://www.albokl.com${item.url}`
  }))
});

export const createArticleSchema = (title, description, author = "الدكتور أسامة محمد البكل", url) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "author": {
    "@type": "Person",
    "name": author
  },
  "publisher": {
    "@type": "Organization",
    "name": "الدكتور أسامة البكل",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.albokl.com/home/logo.webp"
    }
  },
  "url": url,
  "datePublished": new Date().toISOString(),
  "dateModified": new Date().toISOString(),
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  }
});

export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "الدكتور أسامة محمد البكل",
  "url": "https://www.albokl.com",
  "logo": "https://www.albokl.com/home/logo.webp",
  "description": "مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+201017912197",
    "contactType": "customer service",
    "availableLanguage": ["Arabic", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "الشيخ زايد، محور 26 يوليو، توين تاورز برج C، الدور الثاني، عيادة D",
    "addressLocality": "الجيزة",
    "addressRegion": "الجيزة",
    "addressCountry": "EG"
  },
  "sameAs": [
    "https://www.facebook.com/drosama.albokl",
    "https://www.instagram.com/dr.osama.albokl",
    "https://www.youtube.com/@drosama.albokl"
  ]
});

export const createWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "الدكتور أسامة البكل",
  "url": "https://www.albokl.com",
  "description": "موقع الدكتور أسامة محمد البكل لطب وجراحة أمراض الذكورة وتأخر الإنجاب",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.albokl.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
});
