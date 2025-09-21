'use client';

import styles from './TreatmentServices.module.css';
import Link from 'next/link';

export default function TreatmentServices() {
  const services = [
    {
      icon: '🏆',
      title: 'مشاكل القذف المبكر',
      subtitle: 'العلاج - الأسباب',
      description: 'نقوم بعلاج مشاكل القذف المبكر بأحدث الطرق العلاجية والتقنيات المتطورة مع متابعة دقيقة لضمان أفضل النتائج.',
      link: '/services/premature-ejaculation'
    },
    {
      icon: '🔑',
      title: 'علاج ضعف الانتصاب',
      subtitle: 'وتقنين حبة بيضا',
      description: 'علاج شامل لمشاكل ضعف الانتصاب باستخدام أحدث التقنيات الطبية والعلاجات المتخصصة مع ضمان الخصوصية التامة.',
      link: '/services/erectile-dysfunction'
    },
    {
      icon: '👑',
      title: 'علاج برودة الزوجة',
      subtitle: 'الأسباب - العلاج',
      description: 'علاج متخصص لمشاكل البرودة الجنسية عند النساء مع تقديم الاستشارة الطبية المتخصصة والعلاج المناسب.',
      link: '/services/female-sexual-dysfunction'
    },
    {
      icon: '👥',
      title: 'الاضطراب قبل الزواج',
      subtitle: 'استشارة - علاج',
      description: 'تقديم الاستشارة الطبية المتخصصة للمقبلين على الزواج مع علاج أي مشاكل قد تؤثر على الحياة الزوجية.',
      link: '/services/premarital-counseling'
    },
    {
      icon: '🏥',
      title: 'العادات الصحية وتأثيرها',
      subtitle: 'على الصحة والعلاج',
      description: 'توعية شاملة حول تأثير العادات اليومية على الصحة الجنسية مع تقديم النصائح الطبية المتخصصة للوقاية والعلاج.',
      link: '/services/healthy-habits'
    }
  ];

  return (
    <section className={styles.treatmentServices}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerButton}>
              <span>مشاكل الطبيب على</span>
              <span>الصحة الجنسية</span>
            </div>
            <h2 className={styles.mainTitle}>
              علاج كل ما يخص تأثر الرجال والمشاكل الجنسية
            </h2>
            <p className={styles.description}>
              أخصائي في علاج جميع المشاكل الجنسية وضعف الانتصاب والقذف المبكر والعقم والعادات الضارة والمتابعة 
              نقوم بعلاج جميع المشاكل الجنسية، بما فيها الضعف الجنسي في الانتصاب، مع تحقيق أفضل 
              النتائج المضمونة وتحقيق رضا المرضى بأعلى معدلات النجاح
            </p>
          </div>
          
          <div className={styles.successStoriesSection}>
            <Link href="/about" className={styles.successStoriesBtn}>
              <div className={styles.btnIconWrapper}>
                <span className={styles.btnIcon}>🏆</span>
              </div>
              <div className={styles.btnContent}>
                <span className={styles.btnTitle}>قصص النجاح</span>
                <span className={styles.btnSubtitle}>اطلع على تجارب المرضى الناجحة</span>
              </div>
              <div className={styles.btnArrowWrapper}>
                <span className={styles.btnArrow}>←</span>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <Link key={index} href={service.link} className={styles.serviceCardLink}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <h3 className={styles.serviceTitle}>
                  {service.title}
                </h3>
                <p className={styles.serviceSubtitle}>
                  {service.subtitle}
                </p>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <div className={styles.readMore}>
                  اقرأ المزيد ←
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
