import MainLayout from '../components/layout/MainLayout';
import { generateSEOMetadata } from '../../lib/seo/articleSEO';
import Link from 'next/link';
import styles from './emergency-surgeries.module.css';

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "جراحات الطوارئ - د. أسامة البكل",
    description: "جراحات الطوارئ المتخصصة في أمراض الذكورة: التواء الخصية، كسر القضيب، الانتصاب المستمر، احتباس البول. خدمة طوارئ 24 ساعة.",
    keywords: ["جراحات الطوارئ", "التواء الخصية", "كسر القضيب", "الانتصاب المستمر", "احتباس البول", "طوارئ الذكورة", "د أسامة البكل"],
    canonical: "/emergency-surgeries",
    image: "/images/emergency-surgeries/emergency-procedures.webp"
  });
}

export default function EmergencySurgeriesPage() {
  const emergencyCases = [
    {
      condition: "التواء الخصية",
      urgency: "حرجة جداً",
      timeLimit: "6 ساعات",
      description: "التواء الحبل المنوي مما يؤدي لانقطاع الدم عن الخصية",
      symptoms: [
        "ألم شديد ومفاجئ في الخصية",
        "تورم واحمرار في كيس الصفن",
        "غثيان وقيء",
        "ارتفاع الخصية عن وضعها الطبيعي"
      ],
      complications: [
        "موت أنسجة الخصية",
        "فقدان الخصية نهائياً",
        "تأثير على الخصوبة",
        "ضمور الخصية"
      ],
      treatment: "جراحة فورية لإعادة الخصية لوضعها الطبيعي",
      successRate: "95% إذا تم العلاج خلال 6 ساعات",
      icon: "🔄",
      color: "#dc2626"
    },
    {
      condition: "كسر القضيب",
      urgency: "عالية",
      timeLimit: "24 ساعة",
      description: "تمزق في الغشاء المحيط بالنسيج الكهفي للقضيب",
      symptoms: [
        "صوت فرقعة أثناء الجماع",
        "ألم شديد فوري",
        "تورم وكدمات في القضيب",
        "انحناء في القضيب"
      ],
      complications: [
        "ضعف انتصاب دائم",
        "انحناء في القضيب",
        "ألم مزمن",
        "مشاكل في التبول"
      ],
      treatment: "إصلاح جراحي فوري للتمزق",
      successRate: "90% إذا تم العلاج خلال 24 ساعة",
      icon: "💥",
      color: "#ea580c"
    },
    {
      condition: "الانتصاب المستمر (Priapism)",
      urgency: "عالية",
      timeLimit: "4-6 ساعات",
      description: "انتصاب مؤلم يستمر أكثر من 4 ساعات بدون إثارة جنسية",
      symptoms: [
        "انتصاب مستمر أكثر من 4 ساعات",
        "ألم شديد في القضيب",
        "صلابة في جسم القضيب",
        "رأس القضيب طري"
      ],
      complications: [
        "ضعف انتصاب دائم",
        "تليف في النسيج الكهفي",
        "تشوه في شكل القضيب",
        "ضعف في الدورة الدموية"
      ],
      treatment: "سحب الدم من القضيب أو جراحة",
      successRate: "85% إذا تم العلاج خلال 6 ساعات",
      icon: "⚡",
      color: "#7c2d12"
    },
    {
      condition: "احتباس البول الحاد",
      urgency: "عالية",
      timeLimit: "فوري",
      description: "عدم القدرة على التبول نهائياً مع امتلاء المثانة",
      symptoms: [
        "عدم القدرة على التبول",
        "ألم شديد في أسفل البطن",
        "انتفاخ في المثانة",
        "قلق وتوتر شديد"
      ],
      complications: [
        "تلف في المثانة",
        "التهاب في الكلى",
        "فشل كلوي حاد",
        "تمزق في المثانة"
      ],
      treatment: "قسطرة بولية فورية أو جراحة",
      successRate: "98% مع التدخل الفوري",
      icon: "🚫",
      color: "#991b1b"
    }
  ];

  const warningSignsGeneral = [
    {
      sign: "ألم شديد ومفاجئ",
      description: "أي ألم شديد في الأعضاء التناسلية يتطلب تقييماً فورياً",
      action: "اتصل بالطوارئ فوراً"
    },
    {
      sign: "تغير لون الجلد",
      description: "احمرار شديد، زرقة، أو تغير لون غير طبيعي",
      action: "توجه للمستشفى فوراً"
    },
    {
      sign: "تورم مفاجئ",
      description: "انتفاخ سريع وغير مبرر في الأعضاء التناسلية",
      action: "استشارة طبية عاجلة"
    },
    {
      sign: "عدم القدرة على التبول",
      description: "احتباس كامل للبول مع ألم في المثانة",
      action: "طوارئ فورية"
    }
  ];

  const firstAidSteps = [
    {
      condition: "التواء الخصية",
      steps: [
        "لا تحاول تحريك الخصية",
        "ضع كمادات باردة برفق",
        "تجنب المسكنات القوية",
        "توجه للمستشفى فوراً"
      ]
    },
    {
      condition: "كسر القضيب",
      steps: [
        "ضع كمادات باردة",
        "تجنب أي ضغط على المنطقة",
        "لا تحاول تقويم القضيب",
        "اطلب المساعدة الطبية فوراً"
      ]
    },
    {
      condition: "الانتصاب المستمر",
      steps: [
        "تجنب أي محاولة لإنهاء الانتصاب",
        "ضع كمادات باردة",
        "تجنب النشاط الجنسي",
        "اتصل بالطبيب فوراً"
      ]
    },
    {
      condition: "احتباس البول",
      steps: [
        "لا تشرب سوائل إضافية",
        "تجنب الضغط على المثانة",
        "اجلس في وضعية مريحة",
        "اطلب المساعدة الطبية فوراً"
      ]
    }
  ];

  const preventionTips = [
    {
      category: "الوقاية من التواء الخصية",
      tips: [
        "تجنب الحركات العنيفة المفاجئة",
        "ارتداء ملابس واقية أثناء الرياضة",
        "فحص دوري للخصيتين",
        "علاج الخصية المعلقة مبكراً"
      ]
    },
    {
      category: "الوقاية من كسر القضيب",
      tips: [
        "تجنب الأوضاع الجنسية العنيفة",
        "التواصل مع الشريك أثناء العلاقة",
        "التوقف عند الشعور بألم",
        "تجنب الانحناء القسري للقضيب"
      ]
    },
    {
      category: "الوقاية من الانتصاب المستمر",
      tips: [
        "تجنب الإفراط في أدوية الانتصاب",
        "علاج أمراض الدم المزمنة",
        "تجنب المخدرات",
        "المتابعة الطبية المنتظمة"
      ]
    },
    {
      category: "الوقاية من احتباس البول",
      tips: [
        "علاج تضخم البروستاتا مبكراً",
        "تجنب حبس البول لفترات طويلة",
        "شرب كمية كافية من الماء",
        "تجنب الأدوية المسببة لاحتباس البول"
      ]
    }
  ];

  const emergencyContacts = [
    {
      service: "خط الطوارئ المباشر",
      number: "+201017912197",
      availability: "24 ساعة / 7 أيام",
      description: "للحالات الطارئة والاستشارات العاجلة"
    },
    {
      service: "واتساب الطوارئ",
      number: "+201018874287",
      availability: "24 ساعة / 7 أيام",
      description: "للتواصل السريع وإرسال الصور إذا لزم"
    },
    {
      service: "مستشفى الشيخ زايد",
      number: "16123",
      availability: "24 ساعة",
      description: "قسم الطوارئ - مستشفى معتمد"
    }
  ];

  const statistics = [
    { number: "24/7", label: "خدمة طوارئ متاحة" },
    { number: "95%", label: "معدل نجاح العمليات العاجلة" },
    { number: "< 30 دقيقة", label: "متوسط وقت الاستجابة" },
    { number: "200+", label: "حالة طوارئ تم علاجها" }
  ];

  return (
    <MainLayout>
      <div className={styles.emergencyPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>جراحات الطوارئ</h1>
              <p className={styles.heroDescription}>
                خدمة طوارئ متخصصة في أمراض الذكورة متاحة 24 ساعة. 
                تدخل سريع ومتخصص للحالات الحرجة التي تتطلب عناية فورية.
              </p>
              <div className={styles.emergencyAlert}>
                <span className={styles.alertIcon}>🚨</span>
                <div className={styles.alertText}>
                  <strong>حالة طوارئ؟</strong>
                  <p>اتصل فوراً: 01017912197</p>
                </div>
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

        {/* Emergency Cases Section */}
        <section className={styles.casesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>حالات الطوارئ الشائعة</h2>
            <div className={styles.casesGrid}>
              {emergencyCases.map((case_, index) => (
                <div key={index} className={styles.caseCard} style={{ borderLeftColor: case_.color }}>
                  <div className={styles.caseHeader}>
                    <span className={styles.caseIcon}>{case_.icon}</span>
                    <div className={styles.urgencyInfo}>
                      <span className={styles.urgencyLevel} style={{ backgroundColor: case_.color }}>
                        {case_.urgency}
                      </span>
                      <span className={styles.timeLimit}>الحد الزمني: {case_.timeLimit}</span>
                    </div>
                  </div>
                  
                  <h3 className={styles.caseTitle}>{case_.condition}</h3>
                  <p className={styles.caseDescription}>{case_.description}</p>
                  
                  <div className={styles.caseDetails}>
                    <div className={styles.detailSection}>
                      <h4>الأعراض:</h4>
                      <ul>
                        {case_.symptoms.map((symptom, idx) => (
                          <li key={idx}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.detailSection}>
                      <h4>المضاعفات:</h4>
                      <ul>
                        {case_.complications.map((comp, idx) => (
                          <li key={idx}>{comp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className={styles.caseFooter}>
                    <div className={styles.treatment}>
                      <strong>العلاج:</strong> {case_.treatment}
                    </div>
                    <div className={styles.successRate}>
                      <strong>معدل النجاح:</strong> {case_.successRate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className={styles.warningSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>علامات التحذير</h2>
            <div className={styles.warningGrid}>
              {warningSignsGeneral.map((warning, index) => (
                <div key={index} className={styles.warningCard}>
                  <h3 className={styles.warningTitle}>
                    <span className={styles.warningIcon}>⚠️</span>
                    {warning.sign}
                  </h3>
                  <p className={styles.warningDescription}>{warning.description}</p>
                  <div className={styles.warningAction}>
                    <strong>الإجراء المطلوب:</strong> {warning.action}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* First Aid */}
        <section className={styles.firstAidSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>الإسعافات الأولية</h2>
            <div className={styles.firstAidGrid}>
              {firstAidSteps.map((aid, index) => (
                <div key={index} className={styles.firstAidCard}>
                  <h3 className={styles.firstAidTitle}>{aid.condition}</h3>
                  <div className={styles.stepsList}>
                    {aid.steps.map((step, idx) => (
                      <div key={idx} className={styles.step}>
                        <span className={styles.stepNumber}>{idx + 1}</span>
                        <span className={styles.stepText}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className={styles.preventionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>نصائح الوقاية</h2>
            <div className={styles.preventionGrid}>
              {preventionTips.map((prevention, index) => (
                <div key={index} className={styles.preventionCard}>
                  <h3 className={styles.preventionTitle}>{prevention.category}</h3>
                  <ul className={styles.preventionList}>
                    {prevention.tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className={styles.contactsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>أرقام الطوارئ</h2>
            <div className={styles.contactsGrid}>
              {emergencyContacts.map((contact, index) => (
                <div key={index} className={styles.contactCard}>
                  <h3 className={styles.contactService}>{contact.service}</h3>
                  <div className={styles.contactNumber}>
                    <a href={`tel:${contact.number}`}>{contact.number}</a>
                  </div>
                  <div className={styles.contactAvailability}>{contact.availability}</div>
                  <p className={styles.contactDescription}>{contact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>لا تتردد في حالات الطوارئ</h2>
              <p>
                الوقت عامل حاسم في جراحات الطوارئ. كلما كان التدخل أسرع، 
                كانت النتائج أفضل وأقل مضاعفات.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="tel:+201017912197" className={styles.emergencyBtn}>
                  🚨 اتصال طوارئ: 01017912197
                </Link>
                <Link href="/contact/appointment" className={styles.secondaryBtn}>
                  حجز استشارة عادية
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Topics */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>خدمات ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link href="/surgeries" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🏥</span>
                <h3>العمليات الجراحية</h3>
                <p>جراحات أمراض الذكورة المتخصصة</p>
              </Link>
              <Link href="/contact/appointment" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>📅</span>
                <h3>حجز موعد</h3>
                <p>احجز استشارة طبية متخصصة</p>
              </Link>
              <Link href="/about/doctor" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>👨‍⚕️</span>
                <h3>عن الدكتور</h3>
                <p>خبرة د. أسامة البكل في جراحات الطوارئ</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
