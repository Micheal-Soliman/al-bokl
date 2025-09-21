// Structured Data Components for Medical Website SEO

export const createDoctorStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "الدكتور أسامة محمد البكل",
  "jobTitle": "مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية",
  "worksFor": {
    "@type": "Organization",
    "name": "طب قصر العيني - جامعة القاهرة"
  },
  "memberOf": [
    {
      "@type": "Organization",
      "name": "الأكاديمية الأوروبية للذكورة"
    },
    {
      "@type": "Organization", 
      "name": "الجمعية المصرية للذكورة"
    }
  ],
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

export const createMedicalBusinessStructuredData = () => ({
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
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "علاج ضعف الانتصاب",
          "description": "علاج شامل لمشاكل ضعف الانتصاب والصحة الجنسية"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "علاج تأخر الإنجاب عند الرجال",
          "description": "تشخيص وعلاج أسباب تأخر الإنجاب والعقم عند الرجال"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "أحمد محمد"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "دكتور ممتاز وخبرة عالية في مجال الذكورة. العملية نجحت والحمد لله."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "محمد علي"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "أفضل دكتور ذكورة في مصر. نصائحه مفيدة جداً والعلاج فعال."
    }
  ],
  "medicalSpecialty": [
    "Urology",
    "Andrology", 
    "Male Infertility",
    "Sexual Medicine"
  ]
});

export const createMedicalProcedureStructuredData = (procedureName, description, benefits) => ({
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": procedureName,
  "description": description,
  "procedureType": "Surgical",
  "bodyLocation": {
    "@type": "AnatomicalStructure",
    "name": "Male Reproductive System"
  },
  "preparation": "فحص طبي شامل وتحاليل مخبرية",
  "howPerformed": description,
  "followup": "متابعة طبية منتظمة",
  "medicineSystem": "Modern Medicine",
  "benefits": benefits
});

export const createArticleStructuredData = (title, description, publishDate, author = "الدكتور أسامة البكل") => ({
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
      "url": "https://www.albokl.com/images/logo.png"
    }
  },
  "datePublished": publishDate,
  "dateModified": publishDate,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.albokl.com"
  },
  "image": "https://www.albokl.com/images/doctor-osama.jpg"
});

export const createFAQStructuredData = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const createBreadcrumbStructuredData = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});
