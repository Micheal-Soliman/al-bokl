import React from 'react';
import styles from './ServicesPage.module.css';
import Link from 'next/link';

const ServicesPage = () => {
  const medicalServices = [
    {
      id: 1,
      title: 'ضعف الانتصاب',
      description: 'تشخيص وعلاج ضعف الانتصاب بأحدث الطرق العلاجية المتقدمة',
      icon: '💊',
      link: '/services/erectile-dysfunction',
      features: ['تشخيص دقيق', 'علاج دوائي', 'حقن موضعية', 'دعامات العضو الذكري'],
      color: 'blue'
    },
    {
      id: 2,
      title: 'تأخر الإنجاب عند الرجال',
      description: 'علاج شامل لحالات تأخر الإنجاب والعقم عند الرجال',
      icon: '👶',
      link: '/services/male-infertility',
      features: ['تحليل السائل المنوي', 'الحقن المجهري', 'استخراج الحيوانات المنوية', 'العلاج الهرموني'],
      color: 'green'
    },
    {
      id: 3,
      title: 'الصحة الجنسية',
      description: 'رعاية شاملة للصحة الجنسية والاضطرابات المتعلقة بها',
      icon: '❤️',
      link: '/services/sexual-health',
      features: ['سرعة القذف', 'فقدان الرغبة الجنسية', 'الاضطرابات النفسية', 'العلاج النفسي'],
      color: 'red'
    },
    {
      id: 4,
      title: 'اضطرابات البلوغ',
      description: 'تشخيص وعلاج مشاكل البلوغ المبكر والمتأخر عند الذكور',
      icon: '📈',
      link: '/services/puberty-disorders',
      features: ['البلوغ المبكر', 'البلوغ المتأخر', 'اضطرابات الهرمونات', 'المتابعة الدورية'],
      color: 'purple'
    },
    {
      id: 5,
      title: 'الرعاية الطارئة',
      description: 'خدمات طبية طارئة متخصصة في أمراض الذكورة',
      icon: '🚨',
      link: '/services/emergency-care',
      features: ['التواء الخصية', 'الكسور القضيبية', 'الالتهابات الحادة', 'الرعاية الفورية'],
      color: 'orange'
    },
    {
      id: 6,
      title: 'نقص هرمون الذكورة',
      description: 'تشخيص وعلاج نقص هرمون التستوستيرون',
      icon: '⚡',
      link: '/services/testosterone-deficiency',
      features: ['فحص الهرمونات', 'العلاج التعويضي', 'المتابعة الدورية', 'تحسين جودة الحياة'],
      color: 'teal'
    }
  ];

  const whyChooseUs = [
    {
      icon: '🏆',
      title: 'خبرة متخصصة',
      description: 'أكثر من 15 عاماً من الخبرة في أمراض الذكورة'
    },
    {
      icon: '🔬',
      title: 'أحدث التقنيات',
      description: 'استخدام أحدث الأجهزة والتقنيات الطبية المتقدمة'
    },
    {
      icon: '🎯',
      title: 'علاج شخصي',
      description: 'خطة علاج مخصصة لكل حالة حسب احتياجاتها'
    },
    {
      icon: '🔒',
      title: 'سرية تامة',
      description: 'الحفاظ على خصوصية المرضى وسرية المعلومات'
    }
  ];

  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>الخدمات الطبية المتخصصة</h1>
            <p className={styles.heroDescription}>
              نقدم خدمات طبية شاملة ومتخصصة في أمراض الذكورة والصحة الجنسية وتأخر الإنجاب
              باستخدام أحدث التقنيات والطرق العلاجية المتقدمة
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>سنة خبرة</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5000+</span>
                <span className={styles.statLabel}>مريض</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>95%</span>
                <span className={styles.statLabel}>نسبة نجاح</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>خدماتنا الطبية</h2>
            <p className={styles.sectionDescription}>
              نوفر مجموعة شاملة من الخدمات الطبية المتخصصة لعلاج جميع مشاكل الذكورة والصحة الجنسية
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {medicalServices.map((service) => (
              <Link href={service.link} key={service.id} className={`${styles.serviceCard} ${styles[service.color]}`}>
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <ul className={styles.serviceFeatures}>
                    {service.features.map((feature, index) => (
                      <li key={index} className={styles.serviceFeature}>
                        <span className={styles.featureIcon}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.serviceAction}>
                  <span className={styles.actionText}>اعرف المزيد</span>
                  <span className={styles.actionArrow}>←</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>لماذا تختار عيادتنا؟</h2>
            <p className={styles.sectionDescription}>
              نحن ملتزمون بتقديم أفضل رعاية طبية متخصصة بأعلى معايير الجودة والمهنية
            </p>
          </div>

          <div className={styles.whyChooseGrid}>
            {whyChooseUs.map((item, index) => (
              <div key={index} className={styles.whyChooseCard}>
                <div className={styles.whyChooseIcon}>{item.icon}</div>
                <h3 className={styles.whyChooseTitle}>{item.title}</h3>
                <p className={styles.whyChooseDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>خطوات العلاج</h2>
            <p className={styles.sectionDescription}>
              نتبع منهجية علمية مدروسة لضمان أفضل النتائج العلاجية
            </p>
          </div>

          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>الاستشارة الأولية</h3>
                <p className={styles.stepDescription}>
                  فحص شامل ومناقشة تفصيلية للحالة والأعراض
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>التشخيص الدقيق</h3>
                <p className={styles.stepDescription}>
                  إجراء الفحوصات اللازمة للوصول للتشخيص الصحيح
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>خطة العلاج</h3>
                <p className={styles.stepDescription}>
                  وضع خطة علاج مخصصة حسب حالة كل مريض
                </p>
              </div>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>المتابعة</h3>
                <p className={styles.stepDescription}>
                  متابعة دورية لضمان نجاح العلاج وتحقيق أفضل النتائج
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>احجز استشارتك الآن</h2>
            <p className={styles.ctaDescription}>
              لا تتردد في التواصل معنا للحصول على أفضل رعاية طبية متخصصة
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact/appointment" className={styles.primaryBtn}>
                احجز موعد
              </Link>
              <Link href="tel:+201017912197" className={styles.phoneBtn}>
                📞 اتصل الآن
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
