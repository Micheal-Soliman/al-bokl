# هيكل المشروع المحسن للـ SEO

## 📁 الهيكل الجديد المقترح

```
src/
├── app/
│   ├── (routes)/                    # مجموعة الصفحات الرئيسية
│   │   ├── about/
│   │   │   ├── page.js
│   │   │   └── page.module.css
│   │   ├── contact/
│   │   │   ├── page.js
│   │   │   └── page.module.css
│   │   ├── articles/
│   │   │   ├── page.js
│   │   │   ├── [slug]/
│   │   │   │   └── page.js
│   │   │   └── page.module.css
│   │   ├── videos/
│   │   │   ├── page.js
│   │   │   ├── [slug]/
│   │   │   │   └── page.js
│   │   │   └── page.module.css
│   │   └── appointment/
│   │       ├── page.js
│   │       └── page.module.css
│   │
│   ├── surgeries/                   # العمليات الجراحية
│   │   ├── varicocele/
│   │   │   ├── page.js
│   │   │   └── varicocele.module.css
│   │   ├── microscopic-inspection/
│   │   │   ├── page.js
│   │   │   └── page.module.css
│   │   ├── penile-implants/
│   │   │   ├── page.js
│   │   │   └── page.module.css
│   │   └── erectile-dysfunction-surgery/
│   │       ├── page.js
│   │       └── page.module.css
│   │
│   ├── conditions/                  # الحالات الطبية
│   │   ├── erectile-dysfunction/
│   │   │   ├── page.js
│   │   │   └── page.module.css
│   │   ├── male-infertility/
│   │   │   ├── page.js
│   │   │   └── page.module.css
│   │   ├── premature-ejaculation/
│   │   │   ├── page.js
│   │   │   └── page.module.css
│   │   └── low-testosterone/
│   │       ├── page.js
│   │       └── page.module.css
│   │
│   ├── treatments/                  # العلاجات
│   │   ├── hormone-therapy/
│   │   │   ├── page.js
│   │   │   └── page.module.css
│   │   ├── sexual-health/
│   │   │   ├── page.js
│   │   │   └── page.module.css
│   │   └── fertility-treatment/
│   │       ├── page.js
│   │       └── page.module.css
│   │
│   ├── globals.css
│   ├── layout.js
│   ├── page.js                      # الصفحة الرئيسية
│   ├── sitemap.js
│   ├── robots.txt
│   └── manifest.json
│
├── components/
│   ├── layout/                      # مكونات التخطيط
│   │   ├── MainLayout.js
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.module.css
│   │   └── TopBar/
│   │       ├── TopBar.js
│   │       └── TopBar.module.css
│   │
│   ├── seo/                         # مكونات الـ SEO
│   │   ├── core/                    # المكونات الأساسية
│   │   │   ├── SEOHead.js
│   │   │   ├── StructuredData.js
│   │   │   └── MetaTags.js
│   │   ├── navigation/              # التنقل والبحث
│   │   │   ├── Breadcrumb.js
│   │   │   ├── Breadcrumb.module.css
│   │   │   ├── SiteSearch.js
│   │   │   └── SiteSearch.module.css
│   │   ├── content/                 # محتوى SEO
│   │   │   ├── FAQ.js
│   │   │   ├── FAQ.module.css
│   │   │   ├── RichSnippets.js
│   │   │   └── LocalBusiness.js
│   │   └── analytics/               # التحليلات
│   │       ├── GoogleAnalytics.js
│   │       ├── GoogleTagManager.js
│   │       └── SearchConsole.js
│   │
│   ├── medical/                     # المكونات الطبية
│   │   ├── content/
│   │   │   ├── NewsSection.js
│   │   │   ├── NewsSection.module.css
│   │   │   ├── VideoSection.js
│   │   │   ├── VideoSection.module.css
│   │   │   ├── TestimonialSection.js
│   │   │   └── TestimonialSection.module.css
│   │   ├── forms/
│   │   │   ├── BookingForm.js
│   │   │   ├── BookingForm.module.css
│   │   │   ├── ContactForm.js
│   │   │   └── ContactForm.module.css
│   │   └── info/
│   │       ├── DoctorProfile.js
│   │       ├── ClinicInfo.js
│   │       └── ServicesList.js
│   │
│   ├── ui/                          # مكونات الواجهة
│   │   ├── common/
│   │   │   ├── Button.js
│   │   │   ├── Card.js
│   │   │   ├── Section.js
│   │   │   └── LoadingSpinner.js
│   │   ├── media/
│   │   │   ├── OptimizedImage.js
│   │   │   ├── VideoPlayer.js
│   │   │   └── ImageGallery.js
│   │   └── forms/
│   │       ├── Input.js
│   │       ├── TextArea.js
│   │       └── Select.js
│   │
│   └── pages/                       # مكونات الصفحات
│       ├── HomePage.js
│       ├── AboutPage.js
│       ├── ContactPage.js
│       ├── ArticlesPage.js
│       └── VideosPage.js
│
├── lib/                             # المكتبات والأدوات
│   ├── seo/
│   │   ├── metadata.js              # مولدات البيانات الوصفية
│   │   ├── schemas.js               # مخططات البيانات المنظمة
│   │   ├── sitemap-generator.js     # مولد خريطة الموقع
│   │   └── robots-generator.js      # مولد ملف robots
│   ├── content/
│   │   ├── articles.js              # بيانات المقالات
│   │   ├── videos.js                # بيانات الفيديوهات
│   │   ├── services.js              # بيانات الخدمات
│   │   └── testimonials.js          # بيانات الشهادات
│   ├── utils/
│   │   ├── constants.js             # الثوابت
│   │   ├── helpers.js               # الدوال المساعدة
│   │   └── validators.js            # دوال التحقق
│   └── api/
│       ├── contact.js               # API التواصل
│       └── booking.js               # API الحجز
│
├── styles/                          # الأنماط العامة
│   ├── globals.css
│   ├── variables.css                # متغيرات CSS
│   ├── components.css               # أنماط المكونات المشتركة
│   └── responsive.css               # الأنماط المتجاوبة
│
├── data/                            # البيانات الثابتة
│   ├── seo/
│   │   ├── keywords.json            # الكلمات المفتاحية
│   │   ├── meta-templates.json      # قوالب البيانات الوصفية
│   │   └── structured-data.json     # قوالب البيانات المنظمة
│   ├── content/
│   │   ├── articles.json
│   │   ├── videos.json
│   │   ├── services.json
│   │   └── faqs.json
│   └── config/
│       ├── navigation.json          # بيانات التنقل
│       └── contact.json             # بيانات التواصل
│
└── public/
    ├── images/
    │   ├── seo/                     # صور SEO
    │   │   ├── og-images/           # صور Open Graph
    │   │   ├── favicons/            # الأيقونات
    │   │   └── logos/               # الشعارات
    │   ├── medical/                 # الصور الطبية
    │   │   ├── procedures/          # صور العمليات
    │   │   ├── conditions/          # صور الحالات
    │   │   └── equipment/           # صور المعدات
    │   └── content/                 # صور المحتوى
    │       ├── articles/
    │       └── videos/
    ├── videos/                      # الفيديوهات
    ├── documents/                   # المستندات
    │   ├── brochures/
    │   └── certificates/
    ├── robots.txt
    ├── sitemap.xml
    ├── manifest.json
    └── sw.js                        # Service Worker
```

## 🎯 مميزات الهيكل الجديد

### 1. تنظيم محسن للـ SEO
- مجلد `seo/` منفصل ومنظم
- بيانات منظمة في مجلدات متخصصة
- قوالب قابلة لإعادة الاستخدام

### 2. قابلية التوسع
- هيكل واضح للمحتوى الجديد
- مجلدات منفصلة للعمليات والحالات والعلاجات
- نظام مرن للصفحات الديناميكية

### 3. إدارة المحتوى
- ملفات JSON للبيانات الثابتة
- مولدات تلقائية للـ metadata
- نظام إدارة الصور محسن

### 4. الأداء والصيانة
- مكونات منظمة حسب الوظيفة
- أنماط CSS منفصلة ومنظمة
- مكتبات مساعدة منظمة

## 📋 خطة التنفيذ

1. **إنشاء المجلدات الجديدة**
2. **نقل المكونات الموجودة**
3. **تحديث المسارات والاستيرادات**
4. **إنشاء ملفات البيانات**
5. **اختبار الهيكل الجديد**

هذا الهيكل سيجعل المشروع أكثر تنظيماً وقابلية للصيانة والتوسع مع التركيز على تحسين محركات البحث.
