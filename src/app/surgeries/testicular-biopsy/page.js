import MainLayout from '../../components/layout/MainLayout';
import { generateSEOMetadata } from '../../../lib/seo/articleSEO';
import Link from 'next/link';
import styles from '../surgical-condition.module.css';

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "عينات الخصية - استخراج الحيوانات المنوية - د. أسامة البكل",
    description: "عينات الخصية لاستخراج الحيوانات المنوية للرجال الذين يعانون من انعدام الحيوانات المنوية. التفتيش الميكروسكوبي، العينة العادية، السحب بالإبرة مع د. أسامة البكل.",
    keywords: ["عينات الخصية", "التفتيش الميكروسكوبي", "TESE", "TESA", "انعدام الحيوانات المنوية", "استخراج الحيوانات المنوية", "د أسامة البكل"],
    canonical: "/surgeries/testicular-biopsy",
    image: "/images/surgeries/testicular-biopsy.webp"
  });
}

export default function TesticularBiopsyPage() {
  const biopsyTypes = [
    {
      title: "التفتيش الميكروسكوبي للخصية (Micro-TESE)",
      description: "أحدث وأدق طريقة لاستخراج الحيوانات المنوية باستخدام الميكروسكوب الجراحي",
      advantages: [
        "دقة عالية في تحديد الأنابيب المنوية النشطة",
        "أقل ضرراً لأنسجة الخصية",
        "نسب نجاح أعلى في العثور على الحيوانات المنوية",
        "تقليل المضاعفات والآثار الجانبية"
      ],
      successRate: "60-70%",
      duration: "2-3 ساعات",
      anesthesia: "تخدير عام",
      recovery: "1-2 أسبوع",
      href: "/surgeries/testicular-biopsy/microscopic-tese",
      icon: "🔬",
      complexity: "عالية"
    },
    {
      title: "عينة الخصية العادية (Conventional TESE)",
      description: "استخراج عينة من أنسجة الخصية بالطريقة التقليدية",
      advantages: [
        "إجراء أبسط وأسرع",
        "تكلفة أقل",
        "لا يحتاج معدات متخصصة",
        "مناسب للحالات البسيطة"
      ],
      successRate: "45-55%",
      duration: "30-60 دقيقة",
      anesthesia: "تخدير موضعي أو عام",
      recovery: "3-7 أيام",
      href: "/surgeries/testicular-biopsy/conventional-tese",
      icon: "✂️",
      complexity: "متوسطة"
    },
    {
      title: "سحب العينة بالإبرة (TESA)",
      description: "سحب الحيوانات المنوية بإبرة رفيعة من الخصية",
      advantages: [
        "أقل تدخلاً جراحياً",
        "شفاء أسرع",
        "ألم أقل بعد العملية",
        "يمكن تكراره بسهولة"
      ],
      successRate: "30-40%",
      duration: "15-30 دقيقة",
      anesthesia: "تخدير موضعي",
      recovery: "1-3 أيام",
      href: "/surgeries/testicular-biopsy/tesa",
      icon: "💉",
      complexity: "بسيطة"
    }
  ];

  const indications = [
    {
      condition: "انعدام الحيوانات المنوية الانسدادي",
      description: "انسداد في القنوات المنوية مع وجود إنتاج طبيعي للحيوانات المنوية",
      causes: ["انسداد خلقي في القنوات", "التهابات سابقة", "إصابات", "عمليات جراحية سابقة"],
      success: "85-95%",
      icon: "🚫"
    },
    {
      condition: "انعدام الحيوانات المنوية غير الانسدادي",
      description: "ضعف في إنتاج الحيوانات المنوية من الخصية نفسها",
      causes: ["اضطرابات هرمونية", "عوامل وراثية", "التهاب الخصية", "العلاج الكيماوي"],
      success: "40-60%",
      icon: "⚠️"
    },
    {
      condition: "فشل القذف أو مشاكل القذف",
      description: "عدم القدرة على القذف أو مشاكل في عملية القذف",
      causes: ["إصابات الحبل الشوكي", "مرض السكري", "أدوية معينة", "مشاكل نفسية"],
      success: "90-95%",
      icon: "🎯"
    }
  ];

  const preparationSteps = [
    {
      step: "الفحص الأولي",
      description: "تقييم شامل للحالة وتحديد نوع العينة المناسب",
      details: ["فحص سريري شامل", "تحليل الهرمونات", "فحص الموجات فوق الصوتية", "تحليل السائل المنوي"]
    },
    {
      step: "التحضير للعملية",
      description: "إجراءات ما قبل العملية والتحضير النفسي",
      details: ["فحوصات ما قبل التخدير", "تعليمات الصيام", "إيقاف أدوية معينة", "التحضير النفسي"]
    },
    {
      step: "تنسيق مع مختبر الأجنة",
      description: "التأكد من جاهزية المختبر لمعالجة العينة",
      details: ["حجز موعد مع أخصائي الأجنة", "تحضير البويضات إذا لزم الأمر", "تجهيز معدات المختبر", "تحديد طريقة الحفظ"]
    }
  ];

  const statistics = [
    { number: "200+", label: "عملية عينة خصية ناجحة" },
    { number: "65%", label: "معدل العثور على حيوانات منوية" },
    { number: "45%", label: "معدل الحمل بعد العملية" },
    { number: "95%", label: "رضا المرضى عن النتائج" }
  ];

  return (
    <MainLayout>
      <div className={styles.surgicalPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link href="/">الرئيسية</Link>
              <span>/</span>
              <Link href="/surgeries">العمليات الجراحية</Link>
              <span>/</span>
              <span>عينات الخصية</span>
            </div>
            <h1 className={styles.heroTitle}>عينات الخصية</h1>
            <p className={styles.heroDescription}>
              استخراج الحيوانات المنوية من الخصية للرجال الذين يعانون من انعدام الحيوانات المنوية في السائل المنوي. 
              نقدم أحدث التقنيات بما في ذلك التفتيش الميكروسكوبي لضمان أفضل النتائج.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>65%</span>
                <span className={styles.statLabel}>معدل العثور على حيوانات منوية</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>45%</span>
                <span className={styles.statLabel}>معدل الحمل</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>أنواع مختلفة من العينات</span>
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

        {/* Definition Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>ما هي عينات الخصية؟</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  عينات الخصية هي إجراءات جراحية تهدف إلى استخراج الحيوانات المنوية مباشرة من أنسجة الخصية 
                  للرجال الذين يعانون من انعدام الحيوانات المنوية في السائل المنوي.
                </p>
                <p>
                  هذه التقنيات تفتح أملاً جديداً للأزواج الذين يواجهون مشاكل في الإنجاب بسبب انعدام الحيوانات المنوية، 
                  حيث يمكن استخدام الحيوانات المنوية المستخرجة في عمليات الحقن المجهري.
                </p>
                <p>
                  <strong>مهم أن تعرف:</strong> نختار نوع العينة المناسب حسب حالة كل مريض لضمان أفضل النتائج 
                  مع أقل تدخل جراحي ممكن.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>🔍</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Indications Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>دواعي إجراء عينات الخصية</h2>
            <div className={styles.causesGrid}>
              {indications.map((indication, index) => (
                <div key={index} className={styles.causeCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>{indication.icon}</span>
                    <h3 className={styles.causeType}>{indication.condition}</h3>
                  </div>
                  <p className={styles.causeDescription}>{indication.description}</p>
                  
                  <div className={styles.causeExamples}>
                    <h4>الأسباب الشائعة:</h4>
                    <ul>
                      {indication.causes.map((cause, idx) => (
                        <li key={idx}>{cause}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.causeInfo}>
                    <div className={styles.treatment}>
                      <strong>معدل النجاح:</strong> {indication.success}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>أنواع عينات الخصية</h2>
            <div className={styles.treatmentGrid}>
              {biopsyTypes.map((type, index) => (
                <Link key={index} href={type.href} className={styles.treatmentCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIcon}>{type.icon}</span>
                    <span className={`${styles.complexityBadge} ${styles[type.complexity]}`}>
                      {type.complexity}
                    </span>
                  </div>
                  <h3 className={styles.treatmentTitle}>{type.title}</h3>
                  <p className={styles.treatmentDescription}>{type.description}</p>
                  
                  <div className={styles.treatmentDetails}>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>معدل النجاح:</span>
                      <span className={styles.detailValue}>{type.successRate}</span>
                    </div>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>مدة العملية:</span>
                      <span className={styles.detailValue}>{type.duration}</span>
                    </div>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>التخدير:</span>
                      <span className={styles.detailValue}>{type.anesthesia}</span>
                    </div>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>فترة التعافي:</span>
                      <span className={styles.detailValue}>{type.recovery}</span>
                    </div>
                  </div>

                  <div className={styles.advantagesList}>
                    <h4>المميزات:</h4>
                    <ul>
                      {type.advantages.slice(0, 3).map((advantage, idx) => (
                        <li key={idx}>{advantage}</li>
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

        {/* Preparation Section */}
        <section className={styles.diagnosisSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>التحضير للعملية</h2>
            <div className={styles.testsGrid}>
              {preparationSteps.map((step, index) => (
                <div key={index} className={styles.testCard}>
                  <div className={styles.testIcon}>{index + 1}</div>
                  <h3 className={styles.testName}>{step.step}</h3>
                  <p className={styles.testDescription}>{step.description}</p>
                  
                  <div style={{ textAlign: 'right', marginTop: '1rem' }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#1e40af' }}>التفاصيل:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {step.details.map((detail, idx) => (
                        <li key={idx} style={{ padding: '0.25rem 0', color: '#64748b', fontSize: '0.9rem' }}>
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Factors */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>عوامل نجاح العملية</h2>
            <div className={styles.causesGrid}>
              <div className={styles.causeCard}>
                <h3 className={styles.causeType}>خبرة الجراح</h3>
                <p className={styles.causeDescription}>
                  خبرة الجراح في التعامل مع أنسجة الخصية الدقيقة وتحديد أفضل المناطق لأخذ العينة
                </p>
                <div className={styles.causeInfo}>
                  <div className={styles.treatment}>
                    <strong>الأهمية:</strong> عالية جداً
                  </div>
                </div>
              </div>
              
              <div className={styles.causeCard}>
                <h3 className={styles.causeType}>جودة المختبر</h3>
                <p className={styles.causeDescription}>
                  وجود مختبر أجنة متخصص ومجهز بأحدث التقنيات لمعالجة وحفظ الحيوانات المنوية
                </p>
                <div className={styles.causeInfo}>
                  <div className={styles.treatment}>
                    <strong>الأهمية:</strong> عالية جداً
                  </div>
                </div>
              </div>
              
              <div className={styles.causeCard}>
                <h3 className={styles.causeType}>التوقيت المناسب</h3>
                <p className={styles.causeDescription}>
                  تنسيق العملية مع دورة تحفيز المبايض للزوجة لضمان جاهزية البويضات
                </p>
                <div className={styles.causeInfo}>
                  <div className={styles.treatment}>
                    <strong>الأهمية:</strong> عالية
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
              <h2>حقق حلم الإنجاب مع أحدث التقنيات</h2>
              <p>
                لا تدع انعدام الحيوانات المنوية يوقف أحلامك في الإنجاب. 
                احجز استشارة مع د. أسامة البكل لتقييم حالتك وتحديد أفضل نوع عينة مناسب لك.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز استشارة متخصصة
                </Link>
                <Link href="tel:+201017912197" className={styles.secondaryBtn}>
                  اتصل الآن: 01017912197
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Procedures */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>إجراءات ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link href="/fertility/azoospermia" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🚫</span>
                <h3>انعدام الحيوانات المنوية</h3>
                <p>تعرف على أسباب وعلاج انعدام الحيوانات المنوية</p>
              </Link>
              <Link href="/surgeries/varicocele" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🩸</span>
                <h3>دوالي الخصية</h3>
                <p>علاج دوالي الخصية لتحسين جودة الحيوانات المنوية</p>
              </Link>
              <Link href="/fertility/hormonal-problems" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>⚗️</span>
                <h3>مشاكل الهرمونات</h3>
                <p>تأثير الهرمونات على إنتاج الحيوانات المنوية</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
