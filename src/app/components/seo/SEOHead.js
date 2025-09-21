import Head from 'next/head';

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  structuredData,
  noindex = false
}) {
  const siteUrl = 'https://www.albokl.com';
  const defaultImage = {
    url: 'https://www.albokl.com/images/doctor-osama.webp',
    fallback: `${siteUrl}/images/doctor-osama.jpg`
  };
  
  const fullTitle = title ? `${title} - الدكتور أسامة البكل` : 'الدكتور أسامة البكل - مدرس وإستشاري طب وجراحة أمراض الذكورة';
  const metaDescription = description || 'الدكتور أسامة البكل, مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني. خبرة أكثر من 10 سنوات في علاج مشاكل الذكورة والإنجاب.';
  const metaKeywords = keywords || 'دكتور ذكورة, تأخر الإنجاب, الصحة الجنسية, دوالي الخصية, ضعف الانتصاب, العقم عند الرجال, طب الذكورة, قصر العيني';
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="الدكتور أسامة البكل" />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="ar" />
      <meta name="language" content="Arabic" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:image:alt" content="الدكتور أسامة البكل" />
      <meta property="og:site_name" content="الدكتور أسامة البكل" />
      <meta property="og:locale" content="ar_EG" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {/* Medical/Healthcare Specific Meta Tags */}
      <meta name="medical-disclaimer" content="المعلومات المقدمة لأغراض تعليمية فقط ولا تغني عن استشارة طبية متخصصة" />
      <meta name="geo.region" content="EG-C" />
      <meta name="geo.placename" content="القاهرة, مصر" />
      <meta name="geo.position" content="30.0444;31.2357" />
      <meta name="ICBM" content="30.0444, 31.2357" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
}
