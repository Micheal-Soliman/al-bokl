import MainLayout from '../../components/layout/MainLayout';
import { generateSEOMetadata } from '../../../lib/seo/articleSEO';
import Link from 'next/link';
import styles from '../fertility-condition.module.css';

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "إنعدام الحيوانات المنوية (Azoospermia) - د. أسامة البكل",
    description: "علاج إنعدام الحيوانات المنوية، أسباب انعدام الحيوانات المنوية، التفتيش الميكروسكوبي للخصية، وأحدث طرق العلاج مع د. أسامة البكل.",
    keywords: ["انعدام الحيوانات المنوية", "azoospermia", "التفتيش الميكروسكوبي", "عقم الرجال", "علاج العقم", "د أسامة البكل"],
    canonical: "/fertility/azoospermia",
    image: "/images/fertility/azoospermia.webp"
  });
}

export default function AzoospermiaPage() {
  const causes = [
    {
      type: "أسباب انسدادية",
      description: "انسداد في القنوات المنوية يمنع خروج الحيوانات المنوية",
      examples: [
        "انسداد البربخ",
        "انسداد الأسهر",
        "عدم وجود الأسهر خلقياً",
        "انسداد القنوات القاذفة"
      ],
      treatment: "جراحة فتح الانسداد أو استخراج الحيوانات المنوية",
      success: "85-90%"
    },
    {
      type: "أسباب غير انسدادية",
      description: "ضعف أو توقف إنتاج الحيوانات المنوية في الخصيتين",
      examples: [
        "فشل الخصية الأولي",
        "مشاكل هرمونية",
        "تأثير العلاج الكيميائي",
        "أسباب وراثية"
      ],
      treatment: "التفتيش الميكروسكوبي للخصية",
      success: "40-60%"
    }
  ];

  const diagnosticTests = [
    {
      test: "تحليل السائل المنوي",
      description: "تأكيد عدم وجود حيوانات منوية في عينتين منفصلتين",
      icon: "🔬"
    },
    {
      test: "الفحص الهرموني",
      description: "قياس FSH, LH, التستوستيرون للتمييز بين الأسباب",
      icon: "⚗️"
    },
    {
      test: "الفحص الجيني",
      description: "فحص الكروموسومات والطفرات الجينية",
      icon: "🧬"
    },
    {
      test: "الموجات فوق الصوتية",
      description: "تقييم حجم الخصيتين والبحث عن انسدادات",
      icon: "📡"
    }
  ];

  const treatmentOptions = [
    {
      title: "الجراحة الميكروسكوبية لفتح الانسداد",
      description: "في حالات الانسداد، يمكن فتح القنوات جراحياً",
      success: "85-90%",
      duration: "2-3 ساعات",
      recovery: "2-4 أسابيع"
    },
    {
      title: "التفتيش الميكروسكوبي للخصية (micro-TESE)",
      description: "استخراج الحيوانات المنوية مباشرة من أنسجة الخصية",
      success: "40-60%",
      duration: "1-2 ساعة",
      recovery: "1-2 أسبوع"
    },
    {
      title: "العلاج الهرموني",
      description: "في حالات نقص الهرمونات المحفزة للخصية",
      success: "30-50%",
      duration: "3-6 شهور",
      recovery: "غير جراحي"
    }
  ];

  return (
    <MainLayout>
      <div className={styles.conditionPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link href="/">الرئيسية</Link>
              <span>/</span>
              <Link href="/fertility">تأخر الإنجاب</Link>
              <span>/</span>
              <span>إنعدام الحيوانات المنوية</span>
            </div>
            <h1 className={styles.heroTitle}>إنعدام الحيوانات المنوية</h1>
            <p className={styles.heroDescription}>
              حالة عدم وجود حيوانات منوية في السائل المنوي، وهي من أصعب حالات تأخر الإنجاب ولكنها قابلة للعلاج بنسب نجاح عالية
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>1%</span>
                <span className={styles.statLabel}>من الرجال</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10-15%</span>
                <span className={styles.statLabel}>من حالات العقم</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>70%</span>
                <span className={styles.statLabel}>نسبة نجاح العلاج</span>
              </div>
            </div>
          </div>
        </section>

        {/* Definition Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>ما هو انعدام الحيوانات المنوية؟</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  انعدام الحيوانات المنوية (Azoospermia) هو حالة طبية تتميز بعدم وجود حيوانات منوية في السائل المنوي. 
                  هذه الحالة تؤثر على حوالي 1% من الرجال و 10-15% من الرجال المصابين بالعقم.
                </p>
                <p>
                  رغم أن هذه الحالة تبدو صعبة، إلا أن التطورات الطبية الحديثة جعلت علاجها ممكناً بنسب نجاح عالية، 
                  خاصة مع استخدام التقنيات الجراحية المتقدمة والتفتيش الميكروسكوبي للخصية.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>🔬</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>أسباب انعدام الحيوانات المنوية</h2>
            <div className={styles.causesGrid}>
              {causes.map((cause, index) => (
                <div key={index} className={styles.causeCard}>
                  <h3 className={styles.causeType}>{cause.type}</h3>
                  <p className={styles.causeDescription}>{cause.description}</p>
                  
                  <div className={styles.causeExamples}>
                    <h4>الأمثلة:</h4>
                    <ul>
                      {cause.examples.map((example, idx) => (
                        <li key={idx}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.causeInfo}>
                    <div className={styles.treatment}>
                      <strong>العلاج:</strong> {cause.treatment}
                    </div>
                    <div className={styles.successRate}>
                      <strong>نسبة النجاح:</strong> {cause.success}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnosis Section */}
        <section className={styles.diagnosisSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>التشخيص والفحوصات</h2>
            <div className={styles.testsGrid}>
              {diagnosticTests.map((test, index) => (
                <div key={index} className={styles.testCard}>
                  <div className={styles.testIcon}>{test.icon}</div>
                  <h3 className={styles.testName}>{test.test}</h3>
                  <p className={styles.testDescription}>{test.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>خيارات العلاج</h2>
            <div className={styles.treatmentGrid}>
              {treatmentOptions.map((treatment, index) => (
                <div key={index} className={styles.treatmentCard}>
                  <h3 className={styles.treatmentTitle}>{treatment.title}</h3>
                  <p className={styles.treatmentDescription}>{treatment.description}</p>
                  
                  <div className={styles.treatmentDetails}>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>نسبة النجاح:</span>
                      <span className={styles.detailValue}>{treatment.success}</span>
                    </div>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>مدة العملية:</span>
                      <span className={styles.detailValue}>{treatment.duration}</span>
                    </div>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>فترة التعافي:</span>
                      <span className={styles.detailValue}>{treatment.recovery}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro-TESE Section */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>التفتيش الميكروسكوبي للخصية (Micro-TESE)</h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <h3>ما هو التفتيش الميكروسكوبي؟</h3>
                <p>
                  هو إجراء جراحي متقدم يستخدم الميكروسكوب الجراحي للبحث عن الحيوانات المنوية في أنسجة الخصية. 
                  هذه التقنية تتيح للجراح رؤية أفضل وأكثر دقة لأنسجة الخصية واختيار المناطق الأكثر احتمالاً لوجود الحيوانات المنوية.
                </p>
                
                <h3>مميزات التقنية:</h3>
                <ul>
                  <li>دقة أعلى في العثور على الحيوانات المنوية</li>
                  <li>أقل ضرراً لأنسجة الخصية</li>
                  <li>نسب نجاح أعلى مقارنة بالطرق التقليدية</li>
                  <li>إمكانية الحفاظ على وظيفة الخصية</li>
                </ul>
              </div>
              
              <div className={styles.procedureSteps}>
                <h3>خطوات العملية:</h3>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                      <h4>التخدير</h4>
                      <p>تخدير عام أو موضعي حسب الحالة</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <h4>فتح الخصية</h4>
                      <p>شق صغير في كيس الصفن للوصول للخصية</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <h4>الفحص الميكروسكوبي</h4>
                      <p>استخدام الميكروسكوب لفحص أنسجة الخصية</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                      <h4>استخراج العينات</h4>
                      <p>أخذ عينات من المناطق الواعدة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className={styles.successSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>قصص نجاح</h2>
            <div className={styles.successStories}>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>✅</div>
                <h3>أحمد - 29 سنة</h3>
                <p>
                  "كان لديّ انعدام كامل للحيوانات المنوية بسبب انسداد في القنوات. 
                  بعد جراحة فتح الانسداد، عادت الحيوانات المنوية للظهور وحدث الحمل طبيعياً."
                </p>
              </div>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>✅</div>
                <h3>محمد - 34 سنة</h3>
                <p>
                  "رغم فشل الخصية في إنتاج الحيوانات المنوية، تمكن د. أسامة من العثور على حيوانات منوية 
                  بالتفتيش الميكروسكوبي ونجح الحقن المجهري."
                </p>
              </div>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>✅</div>
                <h3>خالد - 31 سنة</h3>
                <p>
                  "بعد سنوات من اليأس، اكتشفنا أن المشكلة هرمونية. 
                  مع العلاج الهرموني المناسب، عادت الحيوانات المنوية للظهور."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>لا تفقد الأمل - العلاج متاح</h2>
              <p>
                حتى في حالات انعدام الحيوانات المنوية، هناك أمل كبير للحصول على طفل. 
                احجز استشارة مع د. أسامة البكل لتقييم حالتك ووضع خطة علاج مناسبة.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز استشارة الآن
                </Link>
                <Link href="tel:+201017912197" className={styles.secondaryBtn}>
                  اتصل الآن: 01017912197
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Conditions */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>حالات ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link href="/fertility/sperm-motility" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🏃‍♂️</span>
                <h3>ضعف حركة الحيوانات المنوية</h3>
                <p>تعرف على أسباب وعلاج ضعف حركة الحيوانات المنوية</p>
              </Link>
              <Link href="/fertility/hormonal-problems" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>⚗️</span>
                <h3>مشاكل الهرمونات</h3>
                <p>اضطرابات الهرمونات وتأثيرها على الخصوبة</p>
              </Link>
              <Link href="/surgeries/testicular-biopsy/microscopic-tese" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🔍</span>
                <h3>التفتيش الميكروسكوبي</h3>
                <p>تفاصيل عملية التفتيش الميكروسكوبي للخصية</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
