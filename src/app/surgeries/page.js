import MainLayout from '../components/layout/MainLayout';
import { generateSEOMetadata } from '../../lib/seo/articleSEO';
import Link from 'next/link';
import styles from './surgeries.module.css';

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "العمليات الجراحية - د. أسامة البكل",
    description: "العمليات الجراحية المتخصصة في أمراض الذكورة: دوالي الخصيتين، دعامات العضو الذكري، التفتيش الميكروسكوبي، إصلاح اعوجاج القضيب مع د. أسامة البكل.",
    keywords: ["العمليات الجراحية", "دوالي الخصيتين", "دعامات القضيب", "التفتيش الميكروسكوبي", "جراحة الذكورة", "د أسامة البكل"],
    canonical: "/surgeries",
    image: "/images/surgeries/surgical-procedures.webp"
  });
}

export default function SurgeriesPage() {
  const surgicalProcedures = [
    {
      title: "دوالى الخصيه وتاثيرها على الانجاب",
      description: "علاج دوالي الخصيتين بالجراحة الميكروسكوبية لتحسين الخصوبة وتخفيف الألم",
      benefits: ["تحسين جودة الحيوانات المنوية", "تخفيف الألم", "منع تفاقم المشكلة", "تحسين الخصوبة"],
      duration: "1-2 ساعة",
      recovery: "1-2 أسبوع",
      success: "90-95%",
      href: "/surgeries/varicocele",
      icon: "🩸",
      complexity: "متوسطة"
    },
    {
      title: "عينات الخصية",
      description: "استخراج الحيوانات المنوية من الخصية للرجال الذين يعانون من انعدام الحيوانات المنوية",
      benefits: ["الحصول على حيوانات منوية", "إمكانية الإنجاب", "تشخيص دقيق", "حل نهائي"],
      duration: "30 دقيقة - 2 ساعة",
      recovery: "3-7 أيام",
      success: "60-90%",
      href: "/surgeries/testicular-biopsy",
      icon: "🔍",
      complexity: "متوسطة إلى عالية"
    },
    {
      title: "دعامات العضو الذكري",
      description: "زراعة دعامات للرجال الذين يعانون من ضعف انتصاب شديد لا يستجيب للعلاج الدوائي",
      benefits: ["حل دائم لضعف الانتصاب", "عودة الثقة بالنفس", "حياة جنسية طبيعية", "رضا عالي"],
      duration: "1-2 ساعة",
      recovery: "4-6 أسابيع",
      success: "95-98%",
      href: "/surgeries/penile-implants",
      icon: "🔧",
      complexity: "عالية"
    },
    {
      title: "القيلة المائية عند الرجال",
      description: "إزالة تجمع السوائل حول الخصية الذي يسبب تورماً وألماً",
      benefits: ["إزالة التورم", "تخفيف الألم", "تحسين المظهر", "منع المضاعفات"],
      duration: "30-60 دقيقة",
      recovery: "1-2 أسبوع",
      success: "95-99%",
      href: "/surgeries/hydrocele",
      icon: "💧",
      complexity: "بسيطة"
    },
    {
      title: "اصلاح اعوجاج القضيب",
      description: "تصحيح انحناء القضيب الذي يؤثر على الوظيفة الجنسية والراحة النفسية",
      benefits: ["تصحيح الانحناء", "تحسين الوظيفة الجنسية", "زيادة الثقة", "تخفيف الألم"],
      duration: "1-3 ساعات",
      recovery: "4-8 أسابيع",
      success: "85-95%",
      href: "/surgeries/penile-curvature",
      icon: "📐",
      complexity: "عالية"
    }
  ];

  const statistics = [
    { number: "500+", label: "عملية جراحية ناجحة" },
    { number: "95%", label: "معدل نجاح العمليات" },
    { number: "15+", label: "سنة خبرة جراحية" },
    { number: "24/7", label: "متابعة ما بعد العملية" }
  ];

  const whyChooseUs = [
    {
      title: "خبرة واسعة",
      description: "أكثر من 15 سنة في جراحة أمراض الذكورة",
      icon: "👨‍⚕️"
    },
    {
      title: "تقنيات متقدمة",
      description: "استخدام أحدث التقنيات الجراحية والميكروسكوبية",
      icon: "🔬"
    },
    {
      title: "معدلات نجاح عالية",
      description: "نسب نجاح تفوق المعايير العالمية",
      icon: "📈"
    },
    {
      title: "رعاية شاملة",
      description: "متابعة مستمرة قبل وبعد العملية",
      icon: "🏥"
    },
    {
      title: "سرية تامة",
      description: "خصوصية كاملة واحترافية عالية",
      icon: "🔒"
    },
    {
      title: "فريق متخصص",
      description: "فريق طبي مدرب على أعلى مستوى",
      icon: "👥"
    }
  ];

  return (
    <MainLayout>
      <div className={styles.surgeriesPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>العمليات الجراحية</h1>
              <p className={styles.heroDescription}>
                نقدم مجموعة شاملة من العمليات الجراحية المتخصصة في أمراض الذكورة باستخدام أحدث التقنيات الطبية 
                ومعايير الجودة العالمية لضمان أفضل النتائج وأعلى معدلات النجاح.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  استشارة جراحية
                </Link>
                <Link href="#procedures" className={styles.secondaryBtn}>
                  تعرف على العمليات
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.imageContainer}>
                <span className={styles.heroIcon}>⚕️</span>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className={styles.statisticsSection}>
          <div className={styles.container}>
            <div className={styles.statisticsGrid}>
              {statistics.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className={styles.introSection}>
          <div className={styles.container}>
            <div className={styles.introContent}>
              <h2 className={styles.sectionTitle}>الجراحة الميكروسكوبية المتقدمة</h2>
              <div className={styles.introText}>
                <p>
                  نتخصص في الجراحة الميكروسكوبية لأمراض الذكورة، والتي تتطلب دقة عالية وخبرة واسعة. 
                  استخدام الميكروسكوب الجراحي يضمن دقة أكبر، مضاعفات أقل، وشفاء أسرع.
                </p>
                <p>
                  جميع عملياتنا تتم في مستشفيات مجهزة بأحدث التقنيات، مع فريق طبي متخصص 
                  ومتابعة شاملة لضمان أفضل النتائج وراحة المريض.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Procedures Section */}
        <section id="procedures" className={styles.proceduresSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>العمليات الجراحية المتاحة</h2>
            <div className={styles.proceduresGrid}>
              {surgicalProcedures.map((procedure, index) => (
                <Link key={index} href={procedure.href} className={styles.procedureCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIcon}>{procedure.icon}</span>
                    <span className={`${styles.complexityBadge} ${styles[procedure.complexity.replace(' ', '')]}`}>
                      {procedure.complexity}
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{procedure.title}</h3>
                  <p className={styles.cardDescription}>{procedure.description}</p>
                  
                  <div className={styles.procedureStats}>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>مدة العملية:</span>
                      <span className={styles.statValue}>{procedure.duration}</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>فترة التعافي:</span>
                      <span className={styles.statValue}>{procedure.recovery}</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>نسبة النجاح:</span>
                      <span className={styles.statValue}>{procedure.success}</span>
                    </div>
                  </div>

                  <div className={styles.procedureDetails}>
                    <h4>الفوائد:</h4>
                    <ul>
                      {procedure.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.readMore}>اقرأ المزيد ←</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.whyChooseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>لماذا تختار د. أسامة البكل؟</h2>
            <div className={styles.whyChooseGrid}>
              {whyChooseUs.map((reason, index) => (
                <div key={index} className={styles.reasonCard}>
                  <div className={styles.reasonIcon}>{reason.icon}</div>
                  <h3 className={styles.reasonTitle}>{reason.title}</h3>
                  <p className={styles.reasonDescription}>{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pre-Surgery Preparation */}
        <section className={styles.preparationSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>التحضير للعملية</h2>
            <div className={styles.preparationContent}>
              <div className={styles.preparationSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>الاستشارة الأولية</h3>
                    <p>تقييم شامل للحالة ومناقشة الخيارات المتاحة</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>الفحوصات المطلوبة</h3>
                    <p>إجراء التحاليل والفحوصات اللازمة قبل العملية</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>التحضير النهائي</h3>
                    <p>تعليمات ما قبل العملية والتحضير النفسي</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>يوم العملية</h3>
                    <p>إجراء العملية بأعلى معايير الجودة والأمان</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>خذ الخطوة الأولى نحو حياة أفضل</h2>
              <p>
                لا تدع المشاكل الصحية تؤثر على جودة حياتك. احجز استشارة مع د. أسامة البكل 
                لتقييم حالتك ومناقشة الخيارات الجراحية المناسبة.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز استشارة جراحية
                </Link>
                <Link href="tel:+201017912197" className={styles.secondaryBtn}>
                  اتصل الآن: 01017912197
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
