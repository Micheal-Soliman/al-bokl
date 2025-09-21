import React from 'react';
import styles from './AboutPage.module.css';
import Link from 'next/link';

const AboutPage = () => {
  const clinicFeatures = [
    {
      icon: '🏥',
      title: 'عيادة متخصصة',
      description: 'عيادة متخصصة بالكامل في أمراض الذكورة والصحة الجنسية مع أحدث الأجهزة والتقنيات'
    },
    {
      icon: '👨‍⚕️',
      title: 'خبرة طويلة',
      description: 'أكثر من 15 عاماً من الخبرة في تشخيص وعلاج جميع مشاكل الذكورة والصحة الجنسية'
    },
    {
      icon: '🔬',
      title: 'تشخيص دقيق',
      description: 'استخدام أحدث وسائل التشخيص والفحوصات المخبرية للوصول للتشخيص الدقيق'
    },
    {
      icon: '💊',
      title: 'علاج شامل',
      description: 'خطط علاجية شاملة تتضمن العلاج الدوائي والجراحي والنفسي حسب الحالة'
    },
    {
      icon: '🤝',
      title: 'متابعة مستمرة',
      description: 'متابعة دورية للمرضى لضمان نجاح العلاج وتحقيق أفضل النتائج'
    },
    {
      icon: '🔒',
      title: 'سرية تامة',
      description: 'الحفاظ على خصوصية وسرية جميع المعلومات الطبية للمرضى'
    }
  ];

  const services = [
    {
      title: 'تشخيص وعلاج ضعف الانتصاب',
      description: 'تقييم شامل لأسباب ضعف الانتصاب وخطط علاجية متنوعة',
      treatments: ['العلاج الدوائي', 'العلاج بالموجات الصدمية', 'الحقن الموضعي', 'الجراحة']
    },
    {
      title: 'علاج سرعة القذف',
      description: 'برامج علاجية متخصصة لعلاج سرعة القذف بجميع أنواعها',
      treatments: ['العلاج السلوكي', 'العلاج الدوائي', 'التدريب النفسي', 'العلاج الموضعي']
    },
    {
      title: 'علاج العقم عند الرجال',
      description: 'تشخيص وعلاج جميع أسباب العقم وتأخر الإنجاب عند الرجال',
      treatments: ['تحليل السائل المنوي', 'علاج الهرمونات', 'الجراحات المجهرية', 'تقنيات الإخصاب المساعد']
    },
    {
      title: 'جراحات الذكورة',
      description: 'جراحات متخصصة لعلاج مشاكل الذكورة المختلفة',
      treatments: ['جراحة دوالي الخصيتين', 'زراعة دعامات القضيب', 'جراحة اعوجاج القضيب', 'الختان الطبي']
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'الدقة في التشخيص',
      description: 'نسعى للوصول للتشخيص الدقيق باستخدام أحدث الوسائل والتقنيات'
    },
    {
      icon: '❤️',
      title: 'الرعاية الشاملة',
      description: 'نقدم رعاية طبية شاملة تراعي الجوانب النفسية والاجتماعية للمريض'
    },
    {
      icon: '🌟',
      title: 'التميز في الخدمة',
      description: 'نلتزم بتقديم أعلى مستوى من الخدمة الطبية والرعاية الصحية'
    },
    {
      icon: '🔄',
      title: 'التطوير المستمر',
      description: 'نواكب أحدث التطورات العلمية في مجال أمراض الذكورة والصحة الجنسية'
    }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>عن العيادة</h1>
            <p className={styles.heroDescription}>
              عيادة متخصصة في أمراض الذكورة والصحة الجنسية تقدم أحدث وسائل التشخيص والعلاج
              مع الحفاظ على أعلى معايير الجودة والخصوصية
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>سنة خبرة</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>5000+</span>
                <span className={styles.statLabel}>مريض</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>95%</span>
                <span className={styles.statLabel}>معدل النجاح</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h2 className={styles.missionTitle}>رسالتنا</h2>
              <p className={styles.missionDescription}>
                نسعى لتقديم أفضل رعاية طبية متخصصة في مجال أمراض الذكورة والصحة الجنسية،
                مع التركيز على التشخيص الدقيق والعلاج الفعال والمتابعة المستمرة لضمان
                تحقيق أفضل النتائج لمرضانا.
              </p>
              <p className={styles.missionDescription}>
                نؤمن بأن الصحة الجنسية جزء أساسي من الصحة العامة والسعادة الزوجية،
                لذلك نعمل على توفير بيئة آمنة ومريحة للمرضى للحصول على العلاج المناسب
                دون خجل أو تردد.
              </p>
            </div>
            <div className={styles.missionImage}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.imageIcon}>🏥</div>
                <p>صورة العيادة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>مميزات العيادة</h2>
            <p className={styles.sectionDescription}>
              نقدم خدمات طبية متميزة مع الحفاظ على أعلى معايير الجودة والخصوصية
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {clinicFeatures.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>خدماتنا الطبية</h2>
            <p className={styles.sectionDescription}>
              نقدم مجموعة شاملة من الخدمات الطبية المتخصصة في أمراض الذكورة
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
                <div className={styles.treatmentsList}>
                  <h4 className={styles.treatmentsTitle}>طرق العلاج:</h4>
                  <ul className={styles.treatments}>
                    {service.treatments.map((treatment, idx) => (
                      <li key={idx} className={styles.treatment}>
                        <span className={styles.treatmentBullet}>✓</span>
                        {treatment}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>قيمنا</h2>
            <p className={styles.sectionDescription}>
              القيم التي نؤمن بها ونسعى لتطبيقها في خدمة مرضانا
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className={styles.locationSection}>
        <div className={styles.container}>
          <div className={styles.locationContent}>
            <div className={styles.locationInfo}>
              <h2 className={styles.locationTitle}>موقع العيادة</h2>
              <div className={styles.addressCard}>
                <div className={styles.addressIcon}>📍</div>
                <div className={styles.addressDetails}>
                  <h3>العنوان</h3>
                  <p>الشيخ زايد، محور 26 يوليو</p>
                  <p>مبنى التوين تاورز C، الدور الثاني، عيادة D</p>
                </div>
              </div>
              
              <div className={styles.hoursCard}>
                <div className={styles.hoursIcon}>🕒</div>
                <div className={styles.hoursDetails}>
                  <h3>مواعيد العمل</h3>
                  <p>السبت إلى الأربعاء</p>
                  <p>من 12:00 ظهراً حتى 8:00 مساءً</p>
                  <p className={styles.closedNote}>مغلق: الخميس والجمعة</p>
                </div>
              </div>

              <div className={styles.contactButtons}>
                <Link href="/contact/appointment" className={styles.appointmentBtn}>
                  احجز موعد
                </Link>
                <a href="tel:+201017912197" className={styles.callBtn}>
                  📞 اتصل الآن
                </a>
              </div>
            </div>

            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapIcon}>🗺️</div>
                <p>خريطة الموقع</p>
                <p className={styles.mapNote}>الشيخ زايد - التوين تاورز</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>ابدأ رحلة العلاج معنا</h2>
            <p className={styles.ctaDescription}>
              احجز استشارتك الآن واحصل على التشخيص الدقيق والعلاج المناسب
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact/appointment" className={styles.primaryBtn}>
                احجز استشارة
              </Link>
              <Link href="/about/doctor" className={styles.secondaryBtn}>
                تعرف على الدكتور
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
