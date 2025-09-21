import MainLayout from '../components/layout/MainLayout';
import { generateSEOMetadata } from '../../lib/seo/articleSEO';
import Link from 'next/link';
import styles from './fertility.module.css';

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "تأخر الإنجاب عند الرجال - د. أسامة البكل",
    description: "علاج تأخر الإنجاب عند الرجال، أسباب العقم الذكوري، فحوصات الخصوبة، وأحدث طرق العلاج مع د. أسامة البكل استشاري أمراض الذكورة.",
    keywords: ["تأخر الإنجاب", "العقم عند الرجال", "مشاكل الخصوبة", "علاج العقم", "فحوصات الخصوبة", "د أسامة البكل"],
    canonical: "/fertility",
    image: "/images/fertility/male-infertility.webp"
  });
}

export default function FertilityPage() {
  const fertilityConditions = [
    {
      title: "إنعدام الحيوانات المنوية",
      description: "حالة عدم وجود حيوانات منوية في السائل المنوي، وطرق العلاج المتقدمة",
      icon: "🔬",
      href: "/fertility/azoospermia",
      severity: "عالي"
    },
    {
      title: "مشاكل الهرمونات و تأخر الإنجاب عند الرجال",
      description: "اضطرابات الهرمونات الذكورية وتأثيرها على الخصوبة والإنجاب",
      icon: "⚗️",
      href: "/fertility/hormonal-problems",
      severity: "متوسط"
    },
    {
      title: "هل مشاكل الخصية تسبب العقم؟",
      description: "تأثير أمراض الخصية المختلفة على الخصوبة وقدرة الإنجاب",
      icon: "🩺",
      href: "/fertility/testicular-problems",
      severity: "عالي"
    },
    {
      title: "اي هو انسداد القنوات المنوية؟",
      description: "انسداد الأوعية الناقلة للحيوانات المنوية وطرق العلاج الجراحي",
      icon: "🚫",
      href: "/fertility/vas-deferens-obstruction",
      severity: "عالي"
    },
    {
      title: "ضعف حركة الحيوانات المنوية",
      description: "أسباب ضعف حركة الحيوانات المنوية وتأثيرها على الإخصاب",
      icon: "🏃‍♂️",
      href: "/fertility/sperm-motility",
      severity: "متوسط"
    },
    {
      title: "تشوهات الحيوان المنوي",
      description: "التشوهات الشكلية للحيوانات المنوية وعلاقتها بالعقم",
      icon: "🧬",
      href: "/fertility/sperm-morphology",
      severity: "متوسط"
    }
  ];

  const statistics = [
    { number: "15%", label: "من الأزواج يعانون من تأخر الإنجاب" },
    { number: "40%", label: "من حالات تأخر الإنجاب سببها الرجل" },
    { number: "85%", label: "نسبة نجاح العلاج مع التشخيص المبكر" },
    { number: "90%", label: "من الحالات قابلة للعلاج" }
  ];

  return (
    <MainLayout>
      <div className={styles.fertilityPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>تأخر الإنجاب عند الرجال</h1>
              <p className={styles.heroDescription}>
                نقدم تشخيصاً دقيقاً وعلاجاً متطوراً لجميع أسباب تأخر الإنجاب عند الرجال باستخدام أحدث التقنيات الطبية والجراحية
              </p>
              <div className={styles.heroButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز موعد للاستشارة
                </Link>
                <Link href="#conditions" className={styles.secondaryBtn}>
                  تعرف على الحالات
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.imageContainer}>
                <span className={styles.heroIcon}>👨‍⚕️</span>
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
              <h2 className={styles.sectionTitle}>ما هو تأخر الإنجاب؟</h2>
              <div className={styles.introText}>
                <p>
                  تأخر الإنجاب هو عدم حدوث حمل بعد مرور سنة كاملة من الزواج مع ممارسة العلاقة الزوجية بانتظام دون استخدام وسائل منع الحمل. 
                  يساهم العامل الذكوري في حوالي 40% من حالات تأخر الإنجاب.
                </p>
                <p>
                  مع التطور الطبي الحديث، أصبح بإمكاننا تشخيص وعلاج معظم أسباب تأخر الإنجاب عند الرجال بنجاح عالي، 
                  مما يحقق حلم الأبوة للكثير من الأزواج.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section id="conditions" className={styles.conditionsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>أسباب تأخر الإنجاب عند الرجال</h2>
            <div className={styles.conditionsGrid}>
              {fertilityConditions.map((condition, index) => (
                <Link key={index} href={condition.href} className={styles.conditionCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIcon}>{condition.icon}</span>
                    <span className={`${styles.severityBadge} ${styles[condition.severity.toLowerCase()]}`}>
                      {condition.severity}
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{condition.title}</h3>
                  <p className={styles.cardDescription}>{condition.description}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.readMore}>اقرأ المزيد ←</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnosis Section */}
        <section className={styles.diagnosisSection}>
          <div className={styles.container}>
            <div className={styles.diagnosisContent}>
              <h2 className={styles.sectionTitle}>خطوات التشخيص</h2>
              <div className={styles.diagnosisSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h3>التاريخ المرضي والفحص السريري</h3>
                    <p>تقييم شامل للتاريخ المرضي والعادات الصحية والفحص البدني</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h3>تحليل السائل المنوي</h3>
                    <p>فحص مفصل لعدد وحركة وشكل الحيوانات المنوية</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h3>الفحوصات الهرمونية</h3>
                    <p>قياس مستويات الهرمونات المؤثرة على الخصوبة</p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h3>الفحوصات التصويرية</h3>
                    <p>الموجات فوق الصوتية وأشعة أخرى حسب الحاجة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>خيارات العلاج</h2>
            <div className={styles.treatmentGrid}>
              <div className={styles.treatmentCard}>
                <h3>العلاج الدوائي</h3>
                <ul>
                  <li>علاج الهرمونات</li>
                  <li>مضادات الأكسدة</li>
                  <li>المكملات الغذائية</li>
                  <li>علاج الالتهابات</li>
                </ul>
              </div>
              <div className={styles.treatmentCard}>
                <h3>العلاج الجراحي</h3>
                <ul>
                  <li>إصلاح دوالي الخصيتين</li>
                  <li>فتح انسداد القنوات</li>
                  <li>استخراج الحيوانات المنوية</li>
                  <li>جراحات الخصية</li>
                </ul>
              </div>
              <div className={styles.treatmentCard}>
                <h3>تقنيات الإنجاب المساعد</h3>
                <ul>
                  <li>الحقن المجهري</li>
                  <li>التلقيح الصناعي</li>
                  <li>اختيار الحيوانات المنوية</li>
                  <li>تجميد الأمشاج</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className={styles.successSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>قصص نجاح</h2>
            <div className={styles.successGrid}>
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✅</div>
                <h3>أحمد - 32 سنة</h3>
                <p>"بعد 3 سنوات من تأخر الإنجاب، تم تشخيص دوالي الخصية وعلاجها جراحياً. الآن لدينا طفل بصحة ممتازة."</p>
              </div>
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✅</div>
                <h3>محمد - 28 سنة</h3>
                <p>"كان لديّ انعدام كامل للحيوانات المنوية، وبفضل التفتيش الميكروسكوبي تمكنا من الحصول على طفل."</p>
              </div>
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✅</div>
                <h3>خالد - 35 سنة</h3>
                <p>"مشاكل هرمونية كانت تمنع الإنجاب، وبالعلاج المناسب تحسنت الخصوبة وحدث الحمل."</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>لا تدع تأخر الإنجاب يؤثر على حياتك</h2>
              <p>احجز استشارة مع د. أسامة البكل واحصل على تشخيص دقيق وخطة علاج مخصصة</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز موعد الآن
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
