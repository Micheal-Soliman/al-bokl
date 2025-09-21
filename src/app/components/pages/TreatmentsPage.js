import React from 'react';
import styles from './TreatmentsPage.module.css';
import Link from 'next/link';

const TreatmentsPage = () => {
  const surgicalTreatments = [
    {
      id: 1,
      title: 'دعامات العضو الذكري',
      description: 'زراعة دعامات العضو الذكري لعلاج ضعف الانتصاب الشديد',
      icon: '🔧',
      link: '/treatments/surgical/penile-implants',
      duration: '60-90 دقيقة',
      recovery: '4-6 أسابيع',
      successRate: '95%',
      features: ['دعامات قابلة للنفخ', 'دعامات شبه صلبة', 'تقنيات متقدمة', 'نتائج طويلة المدى']
    },
    {
      id: 2,
      title: 'علاج دوالي الخصيتين',
      description: 'عمليات جراحية متقدمة لعلاج دوالي الخصيتين وتحسين الخصوبة',
      icon: '⚕️',
      link: '/treatments/surgical/varicocele',
      duration: '45-60 دقيقة',
      recovery: '2-3 أسابيع',
      successRate: '98%',
      features: ['الجراحة المجهرية', 'المنظار الجراحي', 'تقنية الانصمام', 'تحسين الخصوبة']
    },
    {
      id: 3,
      title: 'تصحيح اعوجاج العضو الذكري',
      description: 'عمليات تصحيح اعوجاج العضو الذكري (مرض بيروني)',
      icon: '📐',
      link: '/treatments/surgical/penile-curvature',
      duration: '90-120 دقيقة',
      recovery: '6-8 أسابيع',
      successRate: '90%',
      features: ['تقنية النسلر', 'ترقيع الأنسجة', 'تقصير الجانب الطويل', 'الحفاظ على الطول']
    },
    {
      id: 4,
      title: 'الاستخراج الميكروسكوبي للحيوانات المنوية',
      description: 'استخراج الحيوانات المنوية من الخصية للحقن المجهري',
      icon: '🔬',
      link: '/treatments/surgical/microscopic-extraction',
      duration: '120-180 دقيقة',
      recovery: '1-2 أسبوع',
      successRate: '85%',
      features: ['التفتيش الميكروسكوبي', 'استخراج دقيق', 'تقنيات متقدمة', 'معدلات نجاح عالية']
    },
    {
      id: 5,
      title: 'علاج القيلة المائية',
      description: 'عمليات إزالة القيلة المائية حول الخصية',
      icon: '💧',
      link: '/treatments/surgical/hydrocele',
      duration: '30-45 دقيقة',
      recovery: '1-2 أسبوع',
      successRate: '99%',
      features: ['تقنية جابكا', 'الجراحة المجهرية', 'شق صغير', 'شفاء سريع']
    }
  ];

  const nonSurgicalTreatments = [
    {
      id: 1,
      title: 'العلاج الدوائي',
      description: 'أدوية متقدمة لعلاج ضعف الانتصاب ومشاكل الذكورة',
      icon: '💊',
      link: '/treatments/non-surgical/medications',
      features: ['فياجرا وسياليس', 'أدوية هرمونية', 'مكملات غذائية', 'علاج مخصص']
    },
    {
      id: 2,
      title: 'الحقن الموضعية',
      description: 'حقن موضعية في العضو الذكري لعلاج ضعف الانتصاب',
      icon: '💉',
      link: '/treatments/non-surgical/injections',
      features: ['حقن البروستاديل', 'خليط ثلاثي', 'تدريب المريض', 'متابعة دورية']
    },
    {
      id: 3,
      title: 'العلاج النفسي',
      description: 'علاج نفسي متخصص للمشاكل الجنسية والنفسية',
      icon: '🧠',
      link: '/treatments/non-surgical/therapy',
      features: ['علاج سلوكي معرفي', 'علاج الأزواج', 'تقنيات الاسترخاء', 'دعم نفسي']
    },
    {
      id: 4,
      title: 'العلاج بالموجات الصدمية',
      description: 'علاج ضعف الانتصاب بالموجات الصدمية منخفضة الكثافة',
      icon: '〰️',
      link: '/treatments/non-surgical/shockwave',
      features: ['تحفيز الأوعية الدموية', 'غير جراحي', 'بدون ألم', 'نتائج طبيعية']
    }
  ];

  const treatmentProcess = [
    {
      step: 1,
      title: 'التقييم الأولي',
      description: 'فحص شامل وتقييم الحالة الطبية',
      icon: '🔍'
    },
    {
      step: 2,
      title: 'التشخيص الدقيق',
      description: 'إجراء الفحوصات اللازمة والتحاليل',
      icon: '🧪'
    },
    {
      step: 3,
      title: 'اختيار العلاج المناسب',
      description: 'وضع خطة علاج مخصصة للحالة',
      icon: '📋'
    },
    {
      step: 4,
      title: 'تنفيذ العلاج',
      description: 'تطبيق العلاج المحدد بأعلى معايير الجودة',
      icon: '⚕️'
    },
    {
      step: 5,
      title: 'المتابعة والرعاية',
      description: 'متابعة دورية لضمان نجاح العلاج',
      icon: '📈'
    }
  ];

  return (
    <div className={styles.treatmentsPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>العلاجات الطبية المتقدمة</h1>
            <p className={styles.heroDescription}>
              نوفر مجموعة شاملة من العلاجات الجراحية وغير الجراحية لجميع مشاكل الذكورة والصحة الجنسية
              باستخدام أحدث التقنيات الطبية العالمية
            </p>
            <div className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <span className={styles.featureIcon}>🏆</span>
                <span>خبرة 15+ سنة</span>
              </div>
              <div className={styles.heroFeature}>
                <span className={styles.featureIcon}>🔬</span>
                <span>تقنيات متقدمة</span>
              </div>
              <div className={styles.heroFeature}>
                <span className={styles.featureIcon}>✅</span>
                <span>نتائج مضمونة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surgical Treatments */}
      <section className={styles.treatmentsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>العلاجات الجراحية</h2>
            <p className={styles.sectionDescription}>
              عمليات جراحية متقدمة بأحدث التقنيات الطبية لضمان أفضل النتائج
            </p>
          </div>

          <div className={styles.treatmentsGrid}>
            {surgicalTreatments.map((treatment) => (
              <Link href={treatment.link} key={treatment.id} className={styles.treatmentCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.treatmentIcon}>{treatment.icon}</div>
                  <h3 className={styles.treatmentTitle}>{treatment.title}</h3>
                </div>
                
                <p className={styles.treatmentDescription}>{treatment.description}</p>
                
                <div className={styles.treatmentStats}>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>مدة العملية</span>
                    <span className={styles.statValue}>{treatment.duration}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>فترة التعافي</span>
                    <span className={styles.statValue}>{treatment.recovery}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>معدل النجاح</span>
                    <span className={styles.statValue}>{treatment.successRate}</span>
                  </div>
                </div>

                <ul className={styles.treatmentFeatures}>
                  {treatment.features.map((feature, index) => (
                    <li key={index} className={styles.feature}>
                      <span className={styles.featureCheck}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className={styles.cardAction}>
                  <span className={styles.actionText}>اعرف المزيد</span>
                  <span className={styles.actionArrow}>←</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Surgical Treatments */}
      <section className={styles.nonSurgicalSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>العلاجات غير الجراحية</h2>
            <p className={styles.sectionDescription}>
              خيارات علاجية متنوعة وفعالة بدون تدخل جراحي
            </p>
          </div>

          <div className={styles.nonSurgicalGrid}>
            {nonSurgicalTreatments.map((treatment) => (
              <Link href={treatment.link} key={treatment.id} className={styles.nonSurgicalCard}>
                <div className={styles.cardIcon}>{treatment.icon}</div>
                <h3 className={styles.cardTitle}>{treatment.title}</h3>
                <p className={styles.cardDescription}>{treatment.description}</p>
                
                <ul className={styles.cardFeatures}>
                  {treatment.features.map((feature, index) => (
                    <li key={index} className={styles.cardFeature}>
                      <span className={styles.featureIcon}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>مراحل العلاج</h2>
            <p className={styles.sectionDescription}>
              نتبع منهجية علمية مدروسة لضمان أفضل النتائج العلاجية
            </p>
          </div>

          <div className={styles.processSteps}>
            {treatmentProcess.map((process) => (
              <div key={process.step} className={styles.processStep}>
                <div className={styles.stepIcon}>{process.icon}</div>
                <div className={styles.stepNumber}>{process.step}</div>
                <h3 className={styles.stepTitle}>{process.title}</h3>
                <p className={styles.stepDescription}>{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>ابدأ رحلة العلاج الآن</h2>
            <p className={styles.ctaDescription}>
              احجز استشارتك الأولى واحصل على تقييم شامل لحالتك مع وضع خطة علاج مخصصة
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact/appointment" className={styles.primaryBtn}>
                احجز استشارة
              </Link>
              <Link href="tel:+201017912197" className={styles.phoneBtn}>
                📞 01017912197
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentsPage;
