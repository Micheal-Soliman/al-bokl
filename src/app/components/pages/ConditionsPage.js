import React from 'react';
import styles from './ConditionsPage.module.css';
import Link from 'next/link';

const ConditionsPage = () => {
  const medicalConditions = [
    {
      id: 1,
      title: 'ضعف الانتصاب',
      description: 'عدم القدرة على تحقيق أو الحفاظ على انتصاب كافٍ للعلاقة الزوجية',
      icon: '⚡',
      link: '/conditions/erectile-dysfunction',
      symptoms: ['صعوبة في الانتصاب', 'ضعف الانتصاب', 'فقدان الانتصاب أثناء العلاقة', 'قلق الأداء'],
      causes: ['أمراض الأوعية الدموية', 'السكري', 'ارتفاع ضغط الدم', 'العوامل النفسية'],
      prevalence: '40% من الرجال فوق 40 سنة',
      color: 'red'
    },
    {
      id: 2,
      title: 'سرعة القذف',
      description: 'القذف المبكر قبل الوصول للإشباع الجنسي المطلوب',
      icon: '⏱️',
      link: '/conditions/premature-ejaculation',
      symptoms: ['القذف خلال دقيقة واحدة', 'عدم القدرة على التحكم', 'القلق والتوتر', 'تجنب العلاقة الزوجية'],
      causes: ['العوامل النفسية', 'الحساسية المفرطة', 'اضطرابات الهرمونات', 'الالتهابات'],
      prevalence: '30% من الرجال',
      color: 'orange'
    },
    {
      id: 3,
      title: 'نقص هرمون الذكورة',
      description: 'انخفاض مستوى هرمون التستوستيرون عن المعدل الطبيعي',
      icon: '📉',
      link: '/conditions/low-testosterone',
      symptoms: ['انخفاض الرغبة الجنسية', 'التعب والإرهاق', 'ضعف العضلات', 'تقلبات المزاج'],
      causes: ['التقدم في السن', 'السمنة', 'أمراض مزمنة', 'بعض الأدوية'],
      prevalence: '20% من الرجال فوق 60 سنة',
      color: 'blue'
    },
    {
      id: 4,
      title: 'دوالي الخصيتين',
      description: 'تضخم الأوردة في كيس الصفن مما يؤثر على وظيفة الخصية',
      icon: '🩸',
      link: '/conditions/varicocele',
      symptoms: ['ألم في الخصية', 'تورم كيس الصفن', 'ثقل في الخصية', 'انخفاض الخصوبة'],
      causes: ['ضعف الصمامات الوريدية', 'زيادة الضغط الوريدي', 'العوامل الوراثية', 'الوقوف لفترات طويلة'],
      prevalence: '15% من الرجال',
      color: 'purple'
    },
    {
      id: 5,
      title: 'العقم عند الرجال',
      description: 'عدم القدرة على الإنجاب بعد محاولة لمدة سنة أو أكثر',
      icon: '👶',
      link: '/conditions/male-infertility',
      symptoms: ['عدم حدوث حمل', 'مشاكل في القذف', 'ألم في الخصيتين', 'انخفاض الرغبة الجنسية'],
      causes: ['مشاكل في إنتاج الحيوانات المنوية', 'انسداد القنوات', 'مشاكل هرمونية', 'العوامل البيئية'],
      prevalence: '7% من الرجال',
      color: 'green'
    },
    {
      id: 6,
      title: 'التهاب البروستاتا',
      description: 'التهاب غدة البروستاتا مما يسبب أعراض بولية وجنسية',
      icon: '🔥',
      link: '/conditions/prostatitis',
      symptoms: ['ألم في الحوض', 'صعوبة في التبول', 'ألم أثناء القذف', 'حمى وقشعريرة'],
      causes: ['العدوى البكتيرية', 'العوامل المناعية', 'التوتر والضغط', 'إصابات الحوض'],
      prevalence: '10% من الرجال',
      color: 'teal'
    }
  ];

  const riskFactors = [
    { icon: '🚬', title: 'التدخين', description: 'يؤثر على الدورة الدموية والهرمونات' },
    { icon: '🍺', title: 'الكحول', description: 'يقلل من مستوى التستوستيرون' },
    { icon: '⚖️', title: 'السمنة', description: 'تؤثر على الهرمونات والأداء الجنسي' },
    { icon: '😰', title: 'التوتر', description: 'يؤثر على الأداء الجنسي والخصوبة' },
    { icon: '💊', title: 'بعض الأدوية', description: 'قد تؤثر على الوظيفة الجنسية' },
    { icon: '🏃‍♂️', title: 'قلة النشاط', description: 'تؤثر على الصحة العامة والجنسية' }
  ];

  const preventionTips = [
    { icon: '🥗', title: 'نظام غذائي صحي', description: 'تناول الفواكه والخضروات والحبوب الكاملة' },
    { icon: '🏋️‍♂️', title: 'ممارسة الرياضة', description: 'النشاط البدني المنتظم يحسن الصحة الجنسية' },
    { icon: '🚭', title: 'تجنب التدخين', description: 'التوقف عن التدخين يحسن الدورة الدموية' },
    { icon: '😴', title: 'النوم الكافي', description: '7-8 ساعات نوم يومياً لصحة هرمونية أفضل' },
    { icon: '🧘‍♂️', title: 'إدارة التوتر', description: 'تقنيات الاسترخاء والتأمل' },
    { icon: '🩺', title: 'الفحص الدوري', description: 'فحوصات منتظمة للكشف المبكر' }
  ];

  return (
    <div className={styles.conditionsPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>الحالات المرضية</h1>
            <p className={styles.heroDescription}>
              تعرف على أهم الحالات المرضية التي نتخصص في علاجها في مجال أمراض الذكورة والصحة الجنسية
              مع شرح مفصل للأعراض والأسباب وطرق العلاج
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>6</span>
                <span className={styles.statLabel}>حالات رئيسية</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>95%</span>
                <span className={styles.statLabel}>معدل التشخيص الدقيق</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>سنة خبرة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className={styles.conditionsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>الحالات المرضية الشائعة</h2>
            <p className={styles.sectionDescription}>
              نقدم تشخيص دقيق وعلاج فعال لجميع الحالات المرضية المتعلقة بأمراض الذكورة
            </p>
          </div>

          <div className={styles.conditionsGrid}>
            {medicalConditions.map((condition) => (
              <Link href={condition.link} key={condition.id} className={`${styles.conditionCard} ${styles[condition.color]}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.conditionIcon}>{condition.icon}</div>
                  <div className={styles.prevalenceTag}>{condition.prevalence}</div>
                </div>
                
                <div className={styles.cardContent}>
                  <h3 className={styles.conditionTitle}>{condition.title}</h3>
                  <p className={styles.conditionDescription}>{condition.description}</p>
                  
                  <div className={styles.conditionDetails}>
                    <div className={styles.detailSection}>
                      <h4 className={styles.detailTitle}>الأعراض الرئيسية:</h4>
                      <ul className={styles.detailList}>
                        {condition.symptoms.slice(0, 3).map((symptom, index) => (
                          <li key={index} className={styles.detailItem}>
                            <span className={styles.bulletPoint}>•</span>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.detailSection}>
                      <h4 className={styles.detailTitle}>الأسباب الشائعة:</h4>
                      <ul className={styles.detailList}>
                        {condition.causes.slice(0, 2).map((cause, index) => (
                          <li key={index} className={styles.detailItem}>
                            <span className={styles.bulletPoint}>•</span>
                            {cause}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={styles.cardAction}>
                  <span className={styles.actionText}>اعرف المزيد</span>
                  <span className={styles.actionArrow}>←</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Factors */}
      <section className={styles.riskFactorsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>عوامل الخطر</h2>
            <p className={styles.sectionDescription}>
              تعرف على العوامل التي قد تزيد من خطر الإصابة بمشاكل الذكورة والصحة الجنسية
            </p>
          </div>

          <div className={styles.riskFactorsGrid}>
            {riskFactors.map((factor, index) => (
              <div key={index} className={styles.riskFactorCard}>
                <div className={styles.factorIcon}>{factor.icon}</div>
                <h3 className={styles.factorTitle}>{factor.title}</h3>
                <p className={styles.factorDescription}>{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className={styles.preventionSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>نصائح الوقاية</h2>
            <p className={styles.sectionDescription}>
              اتبع هذه النصائح للحفاظ على صحتك الجنسية والوقاية من مشاكل الذكورة
            </p>
          </div>

          <div className={styles.preventionGrid}>
            {preventionTips.map((tip, index) => (
              <div key={index} className={styles.preventionCard}>
                <div className={styles.tipIcon}>{tip.icon}</div>
                <h3 className={styles.tipTitle}>{tip.title}</h3>
                <p className={styles.tipDescription}>{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>هل تعاني من أي من هذه الأعراض؟</h2>
            <p className={styles.ctaDescription}>
              لا تتردد في استشارة الطبيب المختص للحصول على التشخيص الدقيق والعلاج المناسب
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact/appointment" className={styles.primaryBtn}>
                احجز استشارة
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

export default ConditionsPage;
