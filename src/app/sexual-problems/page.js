import MainLayout from '../components/layout/MainLayout';
import { generateSEOMetadata } from '../../lib/seo/articleSEO';
import Link from 'next/link';
import styles from './sexual-problems.module.css';

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "المشاكل الجنسية عند الرجال - د. أسامة البكل",
    description: "علاج المشاكل الجنسية عند الرجال، ضعف الانتصاب، سرعة القذف، مشاكل الرغبة الجنسية مع د. أسامة البكل استشاري أمراض الذكورة.",
    keywords: ["المشاكل الجنسية", "ضعف الانتصاب", "سرعة القذف", "الرغبة الجنسية", "الصحة الجنسية", "د أسامة البكل"],
    canonical: "/sexual-problems",
    image: "/images/sexual-problems/sexual-health.webp"
  });
}

export default function SexualProblemsPage() {
  const sexualProblems = [
    {
      title: "ضعف الإنتصاب",
      description: "عدم القدرة على تحقيق أو الحفاظ على انتصاب كافٍ للعلاقة الجنسية",
      prevalence: "40% من الرجال فوق 40 سنة",
      causes: ["مشاكل الدورة الدموية", "اضطرابات الهرمونات", "العوامل النفسية", "الأدوية"],
      treatments: ["الأدوية الفموية", "الحقن الموضعية", "الدعامات", "العلاج النفسي"],
      success: "85-95%",
      href: "/sexual-problems/erectile-dysfunction",
      icon: "💪",
      severity: "شائع"
    },
    {
      title: "سرعة القذف",
      description: "القذف المبكر قبل الوصول للإشباع الجنسي للطرفين",
      prevalence: "30% من الرجال",
      causes: ["العوامل النفسية", "الحساسية المفرطة", "اضطرابات الهرمونات", "العادات الخاطئة"],
      treatments: ["الأدوية الموضعية", "مضادات الاكتئاب", "العلاج السلوكي", "تقنيات التحكم"],
      success: "80-90%",
      href: "/sexual-problems/premature-ejaculation",
      icon: "⏱️",
      severity: "شائع جداً"
    },
    {
      title: "مشاكل الرغبة الجنسية",
      description: "انخفاض أو فقدان الرغبة والاهتمام بالنشاط الجنسي",
      prevalence: "15-20% من الرجال",
      causes: ["نقص التستوستيرون", "الاكتئاب", "التوتر", "مشاكل العلاقة"],
      treatments: ["العلاج الهرموني", "العلاج النفسي", "تغيير نمط الحياة", "علاج الأسباب"],
      success: "70-85%",
      href: "/sexual-problems/libido-problems",
      icon: "❤️",
      severity: "متوسط"
    }
  ];

  const statistics = [
    { number: "50%", label: "من الرجال يعانون من مشاكل جنسية" },
    { number: "90%", label: "من المشاكل الجنسية قابلة للعلاج" },
    { number: "85%", label: "نسبة تحسن مع العلاج المناسب" },
    { number: "24/7", label: "استشارة طبية متاحة" }
  ];

  const treatmentApproaches = [
    {
      category: "العلاج الدوائي",
      description: "أدوية حديثة وآمنة لعلاج المشاكل الجنسية",
      treatments: [
        "أدوية ضعف الانتصاب (فياجرا، سياليس)",
        "أدوية سرعة القذف (دابوكسيتين)",
        "العلاج الهرموني (التستوستيرون)",
        "الأدوية الموضعية والكريمات"
      ],
      icon: "💊"
    },
    {
      category: "العلاج النفسي",
      description: "معالجة الجوانب النفسية والسلوكية",
      treatments: [
        "العلاج المعرفي السلوكي",
        "العلاج الزوجي",
        "تقنيات الاسترخاء",
        "إدارة التوتر والقلق"
      ],
      icon: "🧠"
    },
    {
      category: "العلاج التداخلي",
      description: "إجراءات طبية متقدمة للحالات المعقدة",
      treatments: [
        "الحقن الموضعية للعضو الذكري",
        "دعامات العضو الذكري",
        "العلاج بالموجات التصادمية",
        "العلاج بالخلايا الجذعية"
      ],
      icon: "🔬"
    }
  ];

  return (
    <MainLayout>
      <div className={styles.sexualProblemsPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>المشاكل الجنسية عند الرجال</h1>
              <p className={styles.heroDescription}>
                نقدم علاجاً شاملاً ومتخصصاً لجميع المشاكل الجنسية عند الرجال في بيئة آمنة وسرية. 
                معظم المشاكل الجنسية قابلة للعلاج بنجاح عالي مع النهج الطبي الصحيح.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز استشارة سرية
                </Link>
                <Link href="#problems" className={styles.secondaryBtn}>
                  تعرف على المشاكل
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.imageContainer}>
                <span className={styles.heroIcon}>🩺</span>
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
              <h2 className={styles.sectionTitle}>الصحة الجنسية جزء من الصحة العامة</h2>
              <div className={styles.introText}>
                <p>
                  المشاكل الجنسية أكثر شيوعاً مما يعتقد الكثيرون، وتؤثر على جودة الحياة والعلاقات الزوجية. 
                  هذه المشاكل ليست عيباً أو ضعفاً، بل حالات طبية قابلة للعلاج.
                </p>
                <p>
                  مع التطور الطبي الحديث، أصبح لدينا حلول فعالة ومتنوعة لمعظم المشاكل الجنسية. 
                  المهم هو طلب المساعدة الطبية المتخصصة في الوقت المناسب.
                </p>
                <div className={styles.confidentialityNote}>
                  <strong>ملاحظة مهمة:</strong> جميع الاستشارات والعلاجات تتم في سرية تامة واحترافية عالية.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section id="problems" className={styles.problemsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>أهم المشاكل الجنسية عند الرجال</h2>
            <div className={styles.problemsGrid}>
              {sexualProblems.map((problem, index) => (
                <Link key={index} href={problem.href} className={styles.problemCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIcon}>{problem.icon}</span>
                    <span className={`${styles.severityBadge} ${styles[problem.severity.replace(' ', '')]}`}>
                      {problem.severity}
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{problem.title}</h3>
                  <p className={styles.cardDescription}>{problem.description}</p>
                  
                  <div className={styles.problemStats}>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>الانتشار:</span>
                      <span className={styles.statValue}>{problem.prevalence}</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>نسبة النجاح:</span>
                      <span className={styles.statValue}>{problem.success}</span>
                    </div>
                  </div>

                  <div className={styles.problemDetails}>
                    <div className={styles.detailSection}>
                      <h4>الأسباب الشائعة:</h4>
                      <ul>
                        {problem.causes.slice(0, 3).map((cause, idx) => (
                          <li key={idx}>{cause}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.detailSection}>
                      <h4>خيارات العلاج:</h4>
                      <ul>
                        {problem.treatments.slice(0, 3).map((treatment, idx) => (
                          <li key={idx}>{treatment}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.readMore}>اقرأ المزيد ←</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Approaches */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>نهج العلاج الشامل</h2>
            <div className={styles.treatmentGrid}>
              {treatmentApproaches.map((approach, index) => (
                <div key={index} className={styles.treatmentCard}>
                  <div className={styles.treatmentHeader}>
                    <span className={styles.treatmentIcon}>{approach.icon}</span>
                    <h3 className={styles.treatmentTitle}>{approach.category}</h3>
                  </div>
                  <p className={styles.treatmentDescription}>{approach.description}</p>
                  <div className={styles.treatmentList}>
                    {approach.treatments.map((treatment, idx) => (
                      <div key={idx} className={styles.treatmentItem}>
                        <span className={styles.checkmark}>✓</span>
                        <span>{treatment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to Seek Help */}
        <section className={styles.helpSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>متى تطلب المساعدة الطبية؟</h2>
            <div className={styles.helpGrid}>
              <div className={styles.helpCard}>
                <div className={styles.helpIcon}>🚨</div>
                <h3>علامات تحذيرية</h3>
                <ul>
                  <li>مشاكل مستمرة لأكثر من 3 شهور</li>
                  <li>تأثير على العلاقة الزوجية</li>
                  <li>انخفاض الثقة بالنفس</li>
                  <li>تجنب العلاقة الجنسية</li>
                </ul>
              </div>
              <div className={styles.helpCard}>
                <div className={styles.helpIcon}>⏰</div>
                <h3>التدخل المبكر</h3>
                <ul>
                  <li>العلاج المبكر أكثر فعالية</li>
                  <li>منع تفاقم المشكلة</li>
                  <li>تجنب المضاعفات النفسية</li>
                  <li>استعادة الحياة الطبيعية</li>
                </ul>
              </div>
              <div className={styles.helpCard}>
                <div className={styles.helpIcon}>🔒</div>
                <h3>السرية والخصوصية</h3>
                <ul>
                  <li>استشارة في بيئة آمنة</li>
                  <li>سرية تامة للمعلومات</li>
                  <li>احترافية عالية</li>
                  <li>عدم إصدار أحكام</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className={styles.successSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>قصص نجاح (مجهولة الهوية)</h2>
            <div className={styles.successGrid}>
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✅</div>
                <h3>مريض - 35 سنة</h3>
                <p>
                  "كنت أعاني من ضعف الانتصاب لمدة سنتين. بعد العلاج المناسب، 
                  استعدت ثقتي بنفسي وتحسنت علاقتي الزوجية بشكل كبير."
                </p>
              </div>
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✅</div>
                <h3>مريض - 28 سنة</h3>
                <p>
                  "سرعة القذف كانت تسبب لي إحراجاً شديداً. العلاج الدوائي والنفسي 
                  ساعدني في التحكم والاستمتاع بعلاقة صحية."
                </p>
              </div>
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✅</div>
                <h3>مريض - 42 سنة</h3>
                <p>
                  "فقدان الرغبة الجنسية أثر على زواجي. العلاج الهرموني والنفسي 
                  أعاد لي الحيوية والاهتمام بالعلاقة الزوجية."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>لا تدع المشاكل الجنسية تؤثر على حياتك</h2>
              <p>
                الصحة الجنسية جزء مهم من الصحة العامة وجودة الحياة. 
                احجز استشارة سرية مع د. أسامة البكل واحصل على العلاج المناسب.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز استشارة سرية
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
