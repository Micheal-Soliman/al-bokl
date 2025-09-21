import { Metadata } from 'next';
import MainLayout from '../components/layout/MainLayout';
import AboutDoctorPage from '../components/pages/AboutDoctorPage';

export const metadata = {
  title: 'عن الدكتور أسامة البكل - مدرس واستشاري طب وجراحة أمراض الذكورة',
  description: 'نبذة مختصرة عن الدكتور أسامة البكل, مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني',
  keywords: 'الدكتور أسامة البكل, طب الذكورة, تأخر الإنجاب, الصحة الجنسية, قصر العيني, استشاري ذكورة',
  openGraph: {
    title: 'عن الدكتور أسامة البكل - مدرس واستشاري طب وجراحة أمراض الذكورة',
    description: 'نبذة مختصرة عن الدكتور أسامة البكل, مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني',
    type: 'website',
    locale: 'ar_EG',
    url: 'https://albokl.com/about-doctor',
    siteName: 'الدكتور أسامة البكل',
    images: [
      {
        url: '/images/doctor-osama.webp',
        width: 1200,
        height: 630,
        alt: 'الدكتور أسامة البكل'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عن الدكتور أسامة البكل - مدرس واستشاري طب وجراحة أمراض الذكورة',
    description: 'نبذة مختصرة عن الدكتور أسامة البكل, مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني',
    images: ['/images/doctor-osama.webp']
  },
  alternates: {
    canonical: 'https://albokl.com/about-doctor'
  },
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
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://albokl.com/about-doctor#person",
      "name": "الدكتور أسامة البكل",
      "alternateName": "Dr. Osama Al-Bokl",
      "description": "مدرس واستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني",
      "url": "https://albokl.com/about-doctor",
      "image": {
        "@type": "ImageObject",
        "url": "https://albokl.com/images/doctor-osama.webp",
        "width": 400,
        "height": 400
      },
      "jobTitle": "مدرس واستشاري طب وجراحة أمراض الذكورة",
      "worksFor": {
        "@type": "Organization",
        "name": "طب قصر العيني",
        "url": "https://kasralainy.edu.eg"
      },
      "alumniOf": {
        "@type": "Organization",
        "name": "كلية الطب - جامعة القاهرة"
      },
      "knowsAbout": [
        "طب الذكورة",
        "تأخر الإنجاب",
        "الصحة الجنسية",
        "ضعف الانتصاب",
        "القذف المبكر",
        "دوالي الخصية",
        "دعامات القضيب"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "مدرس طب وجراحة أمراض الذكورة",
          "credentialCategory": "degree"
        },
        {
          "@type": "EducationalOccupationalCredential", 
          "name": "استشاري طب وجراحة أمراض الذكورة",
          "credentialCategory": "certification"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+201017912197",
        "email": "Booking@albokl.com",
        "contactType": "customer service",
        "availableLanguage": ["Arabic", "English"]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://albokl.com/about-doctor#webpage",
      "url": "https://albokl.com/about-doctor",
      "name": "عن الدكتور أسامة البكل",
      "description": "نبذة مختصرة عن الدكتور أسامة البكل, مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني",
      "inLanguage": "ar-EG",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://albokl.com#website"
      },
      "about": {
        "@id": "https://albokl.com/about-doctor#person"
      },
      "mainEntity": {
        "@id": "https://albokl.com/about-doctor#person"
      }
    }
  ]
};

export default function AboutDoctorPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MainLayout>
        <AboutDoctorPage />
      </MainLayout>
    </>
  );
}
