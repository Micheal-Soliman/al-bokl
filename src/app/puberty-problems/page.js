import MainLayout from '../components/layout/MainLayout';
import { generateSEOMetadata } from '../../lib/seo/articleSEO';
import Link from 'next/link';
import styles from './puberty-problems.module.css';

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "مشاكل البلوغ عند الشباب - د. أسامة البكل",
    description: "علاج مشاكل البلوغ عند الشباب: البلوغ المبكر، تأخر البلوغ، اضطرابات الهرمونات، مشاكل النمو الجنسي مع د. أسامة البكل.",
    keywords: ["مشاكل البلوغ", "البلوغ المبكر", "تأخر البلوغ", "هرمونات البلوغ", "النمو الجنسي", "مشاكل المراهقة", "د أسامة البكل"],
    canonical: "/puberty-problems",
    image: "/images/puberty-problems/puberty-issues.webp"
  });
}

export default function PubertyProblemsPage() {
  const pubertyProblems = [
    {
      title: "البلوغ المبكر عند الشباب",
      description: "ظهور علامات البلوغ قبل سن 9 سنوات عند الذكور",
      symptoms: [
        "نمو الأعضاء التناسلية قبل الأوان",
        "ظهور الشعر في المناطق التناسلية",
        "تغير الصوت مبكراً",
        "زيادة سريعة في الطول والوزن",
        "ظهور حب الشباب مبكراً",
        "رائحة الجسم القوية"
      ],
      causes: [
        "اضطرابات الغدة النخامية",
        "أورام في المخ أو الخصيتين",
        "متلازمات وراثية",
        "التعرض لهرمونات خارجية",
        "السمنة المفرطة",
        "عوامل بيئية"
      ],
      prevalence: "1-3% من الذكور",
      href: "/puberty-problems/precocious-puberty",
      icon: "⚡",
      urgency: "عالية"
    },
    {
      title: "تأخر البلوغ",
      description: "عدم ظهور علامات البلوغ بعد سن 14 سنة عند الذكور",
      symptoms: [
        "عدم نمو الأعضاء التناسلية",
        "عدم ظهور الشعر في المناطق التناسلية",
        "عدم تغير الصوت",
        "قصر القامة مقارنة بالأقران",
        "عدم ظهور العضلات",
        "تأخر النضج النفسي"
      ],
      causes: [
        "نقص هرمونات الغدة النخامية",
        "متلازمة كلاينفلتر",
        "سوء التغذية الشديد",
        "الأمراض المزمنة",
        "اضطرابات الغدة الدرقية",
        "عوامل وراثية"
      ],
      prevalence: "2-5% من الذكور",
      href: "/puberty-problems/delayed-puberty",
      icon: "⏳",
      urgency: "متوسطة"
    }
  ];

  const normalPuberty = {
    ageRange: "9-14 سنة",
    duration: "2-5 سنوات",
    stages: [
      {
        stage: "المرحلة الأولى (9-11 سنة)",
        changes: [
          "بداية نمو الخصيتين",
          "زيادة طفيفة في حجم القضيب",
          "بداية نمو الطول",
          "تغيرات هرمونية داخلية"
        ]
      },
      {
        stage: "المرحلة الثانية (10-12 سنة)",
        changes: [
          "ظهور أول شعيرات العانة",
          "نمو واضح في الخصيتين",
          "زيادة في حجم القضيب",
          "بداية تغير الصوت"
        ]
      },
      {
        stage: "المرحلة الثالثة (11-13 سنة)",
        changes: [
          "زيادة كثافة شعر العانة",
          "نمو سريع في الطول",
          "تطور العضلات",
          "ظهور حب الشباب"
        ]
      },
      {
        stage: "المرحلة الرابعة (12-14 سنة)",
        changes: [
          "اكتمال نمو الأعضاء التناسلية",
          "ظهور شعر الوجه",
          "تغير الصوت نهائياً",
          "بداية الاحتلام"
        ]
      },
      {
        stage: "المرحلة الخامسة (14+ سنة)",
        changes: [
          "اكتمال النضج الجنسي",
          "توقف نمو الطول",
          "اكتمال نمو العضلات",
          "النضج النفسي والعاطفي"
        ]
      }
    ]
  };

  const warningSignsEarly = [
    "ظهور علامات البلوغ قبل سن 9 سنوات",
    "نمو سريع جداً في الطول (أكثر من 6 سم في السنة)",
    "تغيرات مزاجية شديدة",
    "سلوك جنسي غير مناسب للعمر",
    "رائحة جسم قوية جداً",
    "ظهور حب شباب شديد"
  ];

  const warningSignsLate = [
    "عدم ظهور أي علامات بلوغ بعد سن 14",
    "عدم نمو في الطول لمدة سنة كاملة",
    "حجم الخصيتين أقل من 4 مل بعد سن 14",
    "عدم ظهور شعر العانة بعد سن 15",
    "قصر القامة الشديد مقارنة بالأقران",
    "عدم تغير الصوت بعد سن 15"
  ];

  const treatmentApproaches = [
    {
      condition: "البلوغ المبكر",
      treatments: [
        {
          name: "مثبطات الهرمونات",
          description: "أدوية لتأخير البلوغ حتى العمر المناسب",
          duration: "حسب الحالة",
          effectiveness: "90-95%"
        },
        {
          name: "علاج السبب الأساسي",
          description: "معالجة الأورام أو الاضطرابات المسببة",
          duration: "متغير",
          effectiveness: "حسب السبب"
        },
        {
          name: "الدعم النفسي",
          description: "مساعدة الطفل على التكيف مع التغيرات",
          duration: "مستمر",
          effectiveness: "عالية"
        }
      ]
    },
    {
      condition: "تأخر البلوغ",
      treatments: [
        {
          name: "العلاج الهرموني",
          description: "هرمون التستوستيرون لتحفيز البلوغ",
          duration: "6-12 شهر",
          effectiveness: "85-95%"
        },
        {
          name: "علاج الأسباب المرضية",
          description: "معالجة الأمراض المزمنة أو نقص التغذية",
          duration: "متغير",
          effectiveness: "حسب السبب"
        },
        {
          name: "المتابعة الدورية",
          description: "مراقبة التطور والنمو",
          duration: "مستمر",
          effectiveness: "ضرورية"
        }
      ]
    }
  ];

  const psychologicalSupport = [
    {
      aspect: "التثقيف والتوعية",
      description: "شرح التغيرات الطبيعية للبلوغ للطفل والأسرة",
      importance: "أساسي"
    },
    {
      aspect: "الدعم العاطفي",
      description: "مساعدة الطفل على التعامل مع التغيرات الجسدية والنفسية",
      importance: "عالي"
    },
    {
      aspect: "التكيف الاجتماعي",
      description: "مساعدة الطفل على التعامل مع الأقران والمجتمع",
      importance: "مهم"
    },
    {
      aspect: "الثقة بالنفس",
      description: "بناء الثقة وتعزيز الصورة الذاتية الإيجابية",
      importance: "أساسي"
    }
  ];

  const statistics = [
    { number: "95%", label: "نسبة نجاح العلاج المبكر" },
    { number: "9-14 سنة", label: "العمر الطبيعي للبلوغ" },
    { number: "2-5%", label: "نسبة مشاكل البلوغ" },
    { number: "100%", label: "أهمية المتابعة الطبية" }
  ];

  return (
    <MainLayout>
      <div className={styles.pubertyPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>مشاكل البلوغ عند الشباب</h1>
              <p className={styles.heroDescription}>
                البلوغ مرحلة طبيعية ومهمة في نمو الطفل، لكن أحياناً قد تحدث مشاكل تحتاج لتدخل طبي. 
                نقدم تقييماً شاملاً وعلاجاً متخصصاً لجميع مشاكل البلوغ عند الشباب.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  استشارة متخصصة
                </Link>
                <Link href="#problems" className={styles.secondaryBtn}>
                  تعرف على المشاكل
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.imageContainer}>
                <span className={styles.heroIcon}>👦</span>
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

        {/* Normal Puberty Section */}
        <section className={styles.normalPubertySection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>البلوغ الطبيعي عند الذكور</h2>
            <div className={styles.normalPubertyContent}>
              <div className={styles.pubertyInfo}>
                <div className={styles.infoCard}>
                  <h3>العمر الطبيعي</h3>
                  <p>{normalPuberty.ageRange}</p>
                </div>
                <div className={styles.infoCard}>
                  <h3>مدة البلوغ</h3>
                  <p>{normalPuberty.duration}</p>
                </div>
              </div>
              
              <div className={styles.pubertyStages}>
                <h3>مراحل البلوغ الطبيعي</h3>
                <div className={styles.stagesGrid}>
                  {normalPuberty.stages.map((stage, index) => (
                    <div key={index} className={styles.stageCard}>
                      <h4 className={styles.stageTitle}>{stage.stage}</h4>
                      <ul className={styles.changesList}>
                        {stage.changes.map((change, idx) => (
                          <li key={idx}>{change}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section id="problems" className={styles.problemsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>مشاكل البلوغ الشائعة</h2>
            <div className={styles.problemsGrid}>
              {pubertyProblems.map((problem, index) => (
                <Link key={index} href={problem.href} className={styles.problemCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIcon}>{problem.icon}</span>
                    <span className={`${styles.urgencyBadge} ${styles[problem.urgency]}`}>
                      أولوية {problem.urgency}
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{problem.title}</h3>
                  <p className={styles.cardDescription}>{problem.description}</p>
                  
                  <div className={styles.problemDetails}>
                    <div className={styles.detailSection}>
                      <h4>الأعراض الرئيسية:</h4>
                      <ul>
                        {problem.symptoms.slice(0, 4).map((symptom, idx) => (
                          <li key={idx}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.detailSection}>
                      <h4>الأسباب الشائعة:</h4>
                      <ul>
                        {problem.causes.slice(0, 3).map((cause, idx) => (
                          <li key={idx}>{cause}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.prevalence}>
                      <strong>الانتشار:</strong> {problem.prevalence}
                    </div>
                    <span className={styles.readMore}>اقرأ المزيد ←</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className={styles.warningSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>علامات التحذير</h2>
            <div className={styles.warningGrid}>
              <div className={styles.warningCard}>
                <h3 className={styles.warningTitle}>
                  <span className={styles.warningIcon}>⚠️</span>
                  علامات البلوغ المبكر
                </h3>
                <ul className={styles.warningList}>
                  {warningSignsEarly.map((sign, index) => (
                    <li key={index}>{sign}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.warningCard}>
                <h3 className={styles.warningTitle}>
                  <span className={styles.warningIcon}>🚨</span>
                  علامات تأخر البلوغ
                </h3>
                <ul className={styles.warningList}>
                  {warningSignsLate.map((sign, index) => (
                    <li key={index}>{sign}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>خيارات العلاج</h2>
            {treatmentApproaches.map((approach, index) => (
              <div key={index} className={styles.treatmentCategory}>
                <h3 className={styles.categoryTitle}>{approach.condition}</h3>
                <div className={styles.treatmentGrid}>
                  {approach.treatments.map((treatment, idx) => (
                    <div key={idx} className={styles.treatmentCard}>
                      <h4 className={styles.treatmentName}>{treatment.name}</h4>
                      <p className={styles.treatmentDescription}>{treatment.description}</p>
                      <div className={styles.treatmentInfo}>
                        <div className={styles.treatmentDetail}>
                          <span className={styles.detailLabel}>المدة:</span>
                          <span className={styles.detailValue}>{treatment.duration}</span>
                        </div>
                        <div className={styles.treatmentDetail}>
                          <span className={styles.detailLabel}>الفعالية:</span>
                          <span className={styles.detailValue}>{treatment.effectiveness}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Psychological Support */}
        <section className={styles.supportSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>الدعم النفسي والاجتماعي</h2>
            <div className={styles.supportGrid}>
              {psychologicalSupport.map((support, index) => (
                <div key={index} className={styles.supportCard}>
                  <h3 className={styles.supportTitle}>{support.aspect}</h3>
                  <p className={styles.supportDescription}>{support.description}</p>
                  <div className={styles.importanceLevel}>
                    <span className={styles.importanceLabel}>الأهمية:</span>
                    <span className={`${styles.importanceValue} ${styles[support.importance]}`}>
                      {support.importance}
                    </span>
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
            <div className={styles.helpContent}>
              <div className={styles.helpText}>
                <p>
                  يجب استشارة طبيب متخصص في أمراض الذكورة والغدد الصماء في الحالات التالية:
                </p>
                <ul className={styles.helpList}>
                  <li>ظهور علامات البلوغ قبل سن 9 سنوات أو تأخرها بعد سن 14</li>
                  <li>تغيرات سريعة جداً أو بطيئة جداً في النمو</li>
                  <li>مشاكل نفسية أو اجتماعية مرتبطة بالبلوغ</li>
                  <li>قلق الأهل أو الطفل حول التطور الطبيعي</li>
                  <li>أعراض غير طبيعية أو مقلقة</li>
                </ul>
              </div>
              <div className={styles.helpImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.helpIcon}>👨‍⚕️</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>اطمئن على نمو طفلك الطبيعي</h2>
              <p>
                البلوغ مرحلة حساسة تحتاج متابعة دقيقة. لا تتردد في استشارة د. أسامة البكل 
                للتأكد من النمو الطبيعي لطفلك أو لعلاج أي مشاكل في البلوغ.
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

        {/* Related Topics */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>مواضيع ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link href="/fertility/hormonal-problems" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>⚗️</span>
                <h3>مشاكل الهرمونات</h3>
                <p>تأثير الهرمونات على النمو والتطور الجنسي</p>
              </Link>
              <Link href="/sexual-problems" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>❤️</span>
                <h3>المشاكل الجنسية</h3>
                <p>مشاكل الوظيفة الجنسية عند البالغين</p>
              </Link>
              <Link href="/about/doctor" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>👨‍⚕️</span>
                <h3>عن الدكتور</h3>
                <p>خبرة د. أسامة البكل في علاج مشاكل الذكورة</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
