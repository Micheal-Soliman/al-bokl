import MainLayout from '../../components/layout/MainLayout';
import { generateSEOMetadata } from '../../../lib/seo/articleSEO';
import Link from 'next/link';
import styles from '../sexual-condition.module.css';

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "ضعف الإنتصاب - الدكتور أسامة البكل",
    description: "ضعف الانتصاب عند الرجال مشكلة شائعة بيعاني منها حوالي 20% من الرجال وبتاثر بشكل كبير جدا على العلاقة الزوجية ممكن تصل بالزوجين إلى الانفصال.",
    keywords: ["ضعف الانتصاب", "الضعف الجنسي", "العلاقة الجنسية", "الحقن الموضعي", "دعامة العضو الذكري", "التسريب الوريدي", "د أسامة البكل"],
    canonical: "/sexual-problems/erectile-dysfunction",
    image: "/images/sexual-problems/erectile-dysfunction.webp"
  });
}

export default function ErectileDysfunctionPage() {
  const psychological_causes = [
    {
      cause: "الضغوط اليومية و المشاكل الزوجية",
      description: "مش بتخلينا عارفين نستمتع بالعلاقة الزوجية، ولا بتخلينا نحس بالأثارة بشكل كافى و عشان كده مش بيحصل انتصاب",
      icon: "😰"
    },
    {
      cause: "مشاهدة الافلام الجنسية",
      description: "لانها بتخلينا نكون انطباع معين عن شكل العلاقة الجنسية و طريقة الاداء فيها، ولما الشكل ده مش بيتحقق فى العلاقة بيحصل حاجة من الاتنين اما مش هيكون عندنا رغبة فى العلاقة الزوجية لانها مطلعتش زى ما احنا متصورين، او اننا بسبب الاداء اللى بنشوفه فى الافلام دى مبقاش عندنا ثقة فى ادائنا و بنحس دايماّ انه مش كويس فبنبعد عن العلاقة الزوجية",
      icon: "📺"
    },
    {
      cause: "ممارسة العاده السرية بشكل شبه يومى",
      description: "وده بيسبب اننا بنفرغ كل الرغبه و الشهوة الجنسية وقت العاده السرية، و بنيجى وقت العلاقة ميكونش عندنا رغبة جنسية فميحصلش انتصاب",
      icon: "🤚"
    }
  ];

  const organic_causes = [
    {
      cause: "مرض السكر",
      description: "لانه بيضعف الاعصاب، بيأثر على ضخ الدم جوا الشرايين و بكده الدم مش هيوصل كويس للقضيب، فمش هيحصل انتصاب",
      icon: "🩸"
    },
    {
      cause: "نقص فى نسبة هرمون الذكورة",
      description: "هرمون التستوستيرون ضروري للرغبة الجنسية والانتصاب",
      icon: "⚗️"
    },
    {
      cause: "الفشل الكلوى",
      description: "لانه بيأثر على نسبة هرمون الذكورة، و بكده هيأثر على الانتصاب",
      icon: "🫘"
    },
    {
      cause: "ارتفاع فى هرمون البرولاكتين و هرمون E2",
      description: "لانهم بيقللوا من نسبة هرمون الذكوره، و ده هيسبب ضعف فى الانتصاب",
      icon: "📊"
    },
    {
      cause: "ارتفاع فى ضغط الدم",
      description: "يؤثر على الدورة الدموية ووصول الدم للقضيب",
      icon: "💓"
    },
    {
      cause: "مشكلة فى القلب",
      description: "تؤثر على ضخ الدم بكفاءة لجميع أجزاء الجسم",
      icon: "❤️"
    },
    {
      cause: "بعض الادوية",
      description: "زى ادوية الاكتئاب او الادوية الهرمونية، او علاج للسرطان، كل ده ممكن يسبب ضعف انتصاب",
      icon: "💊"
    },
    {
      cause: "التسريب الوريدى",
      description: "هيبدء يحصل ضعف فى الانتصاب و ممكن نلاحظ ان فى بداية العلاقة الانتصاب كان قوى و لما حصل تغير فى الوضع حصل ارتخاء وفقدنا الانتصاب، و لو معالجناش التسريب الوريدى ممكن نوصل لان ميكونش فى اى انتصاب وقت العلاقة الزوجية",
      icon: "💧"
    },
    {
      cause: "كسر فى الحوض",
      description: "ده هيسبب قطع فى الاعصاب، و الاعصاب دى هى اللى بتغذى العضو الذكرى و بتتحكم فى الانتصاب، وهنا هنلاقى ان الدورة الدموية سليمة و الشرايين و الاورده مفيش فيها اى مشكله، بس بسبب المشكله اللى حصلت فى العصب مبقاش يحصل انتصاب وقت العلاقة الزوجية",
      icon: "🦴"
    },
    {
      cause: "التهاب شديد او تضخم فى البروستاتا",
      description: "و ده لان الاعصاب و الاوعيه الدموية اللى بتغذى العضو الذكرى بتكون موجوده على جدار البروستاتا، فلو حصل اى تورم فى البروستاتا ده هيضغط على الاعصاب اللى بتغذى القضيب، و بكده هيحصل ضعف انتصاب",
      symptoms: ["صعوبة و تقطيع فى نزول البول", "الم فى الحوض", "حرقان فى البول"],
      icon: "🔴"
    }
  ];

  const treatmentOptions = [
    {
      category: "الأدوية الفموية",
      treatments: [
        {
          name: "السيلدينافيل (فياجرا)",
          description: "يعمل لمدة 4-6 ساعات، يؤخذ قبل العلاقة بساعة",
          effectiveness: "70-80%",
          sideEffects: "صداع، احمرار الوجه، اضطراب المعدة"
        },
        {
          name: "التادالافيل (سياليس)",
          description: "يعمل لمدة 24-36 ساعة، مرونة أكبر في التوقيت",
          effectiveness: "75-85%",
          sideEffects: "آلام الظهر، آلام العضلات، صداع"
        },
        {
          name: "الفاردينافيل (ليفيترا)",
          description: "يعمل لمدة 4-5 ساعات، فعال مع الطعام",
          effectiveness: "70-75%",
          sideEffects: "صداع، احمرار، انسداد الأنف"
        }
      ]
    },
    {
      category: "الحقن الموضعية",
      treatments: [
        {
          name: "الألبروستاديل",
          description: "حقن مباشرة في العضو الذكري قبل العلاقة",
          effectiveness: "85-90%",
          sideEffects: "ألم موضعي، انتصاب مطول نادراً"
        },
        {
          name: "خليط ثلاثي (Trimix)",
          description: "مزيج من ثلاث مواد فعالة لفعالية أكبر",
          effectiveness: "90-95%",
          sideEffects: "ألم، تليف نادر مع الاستخدام المفرط"
        }
      ]
    },
    {
      category: "الدعامات",
      treatments: [
        {
          name: "الدعامة المرنة",
          description: "دعامة ثابتة قابلة للثني، حل دائم",
          effectiveness: "95-98%",
          sideEffects: "عدوى نادرة، تآكل نادر جداً"
        },
        {
          name: "الدعامة الهيدروليكية",
          description: "دعامة قابلة للنفخ، أكثر طبيعية",
          effectiveness: "95-98%",
          sideEffects: "عطل ميكانيكي نادر، عدوى نادرة"
        }
      ]
    }
  ];

  const diagnosticTests = [
    {
      test: "التاريخ المرضي والفحص السريري",
      description: "تقييم شامل للأعراض والعوامل المؤثرة",
      importance: "أساسي لكل المرضى",
      icon: "👨‍⚕️"
    },
    {
      test: "فحوصات الدم",
      description: "فحص السكر، الكوليسترول، الهرمونات",
      importance: "لتحديد الأسباب الجسدية",
      icon: "🩸"
    },
    {
      test: "الموجات فوق الصوتية",
      description: "تقييم تدفق الدم في العضو الذكري",
      importance: "في الحالات المعقدة",
      icon: "📡"
    },
    {
      test: "اختبار الانتصاب الليلي",
      description: "قياس الانتصاب أثناء النوم لتمييز الأسباب",
      importance: "للتمييز بين الأسباب النفسية والجسدية",
      icon: "🌙"
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
              <Link href="/sexual-problems">المشاكل الجنسية</Link>
              <span>/</span>
              <span>ضعف الإنتصاب</span>
            </div>
            <h1 className={styles.heroTitle}>ضعف الإنتصاب</h1>
            <p className={styles.heroDescription}>
              فى البداية لازم نعرف ان ضعف الانتصاب مش هو الضعف الجنسى، لكن الضعف الجنسى ممكن يحصل بسبب ضعف الانتصاب. 
              و عشان نفهم ده كويس خلونا نعرف ان العلاقة الجنسية بتكون 3 مراحل و لو فى خلل فى اى مرحلة من المراحل دى يبقى احنا كده عندنا ضعف جنسى.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>مراحل العلاقة الجنسية</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50%</span>
                <span className={styles.statLabel}>من مرات العلاقة للتشخيص</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>20%</span>
                <span className={styles.statLabel}>من الرجال يعانون منه</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sexual Stages Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>مراحل العلاقة الجنسية</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  <strong>المرحلة الاولى:</strong> هى الرغبة الجنسية بمعنى ان يكون عندك رغبة انك تعمل علاقة جنسية.
                </p>
                <p>
                  <strong>المرحلة التانية:</strong> انتصاب العضو الذكرى و ده مرتبط بالمرحلة الاولى، لان الانتصاب عشان يحصل لازم يكون عندنا رغبة جنسية، و نكون حاسين بالاثارة.
                </p>
                <p>
                  <strong>المرحلة التالتة:</strong> الوصول للنشوة.
                </p>
                <p>
                  و بكده نفهم ان ضعف الانتصاب مرحلة من مراحل العلاقة الجنسية.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>🔄</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Definition Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>طب اي هو اصلا ضعف الانتصاب و اى هى اسبابة</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  ضعف الانتصاب هو اننا مبنقدرش نحافظ على الانتصاب او ان مفيش انتصاب كامل بيحصل وقت العلاقة الزوجية، 
                  والسبب في ده ان بيكون فى خلل فى الأوردة اللى بتوصل الدم للقضيب.
                </p>
                <p>
                  و الخلل ده سببه اما ضعف في ضخ الدم للقضيب او ان مبيتمش الاحتفاظ بالدم داخل القضيب و ده بنسميه <strong>(التسرب الوريدي)</strong>، 
                  و بكده مش بيحصل انتصاب او بيحصل و مش بنحافظ عليه لحد ما نخلص العلاقة الزوجية.
                </p>
                <p>
                  <strong>مهم جداً:</strong> و عشان اقول ان انا عندى ضعف انتصاب، لازم يكون ضعف الانتصاب ده بيحصل فى <strong>اكتر من 50%</strong> من مرات العلاقة الجنسية.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>💪</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Psychological Causes Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>طيب اى هى اسباب ضعف الانتصاب</h2>
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', marginBottom: '2rem', textAlign: 'center' }}>
              اما اسباب نفسية زى:
            </h3>
            <div className={styles.testsGrid}>
              {psychological_causes.map((cause, index) => (
                <div key={index} className={styles.testCard}>
                  <div className={styles.testIcon}>{cause.icon}</div>
                  <h3 className={styles.testName}>{cause.cause}</h3>
                  <p className={styles.testDescription}>{cause.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Organic Causes Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', marginBottom: '2rem', textAlign: 'center' }}>
              او اسباب عضوية و هى:
            </h3>
            <div className={styles.testsGrid}>
              {organic_causes.map((cause, index) => (
                <div key={index} className={styles.testCard}>
                  <div className={styles.testIcon}>{cause.icon}</div>
                  <h3 className={styles.testName}>{cause.cause}</h3>
                  <p className={styles.testDescription}>{cause.description}</p>
                  
                  {cause.symptoms && (
                    <div style={{ background: '#fef2f2', padding: '1rem', borderRadius: '8px', marginTop: '1rem', border: '1px solid #fecaca' }}>
                      <strong style={{ color: '#dc2626' }}>أعراض مصاحبة:</strong>
                      <ul style={{ margin: '0.5rem 0 0 0', paddingRight: '1rem' }}>
                        {cause.symptoms.map((symptom, idx) => (
                          <li key={idx} style={{ color: '#7f1d1d', fontSize: '0.9rem' }}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Section */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>طيب اي هو علاج ضعف الانتصاب</h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <p>
                  عشان نحدد علاج ضعف الانتصاب، لازم نحدد فى الاول سببة لان كل سبب ليه طريقة علاج مختلفة، 
                  فمثلا لو كان السبب فى ضعف الانتصاب نفسى، هنا لازم نلجأ للعلاج السلوكى، لان سبب ضعف الانتصاب هنا مش عضوى.
                </p>
                <p>
                  اما لو كان سبب ضعف الانتصاب عضوى، فلازم الاول نحدد اى سببه و نبدء نعالجه و كمان نحدد ضعف الانتصاب ده واصل لاى درجة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Degrees */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>درجات العلاج</h2>
            <div className={styles.treatmentGrid}>
              <div className={styles.treatmentCard}>
                <h3 className={styles.treatmentTitle}>الدرجة الاولى - ضعف انتصاب بسيط</h3>
                <p className={styles.treatmentDescription}>
                  بمعنى ان في قصور بسيط فى ضخ الدم وقتها هنمشى على العلاج الدوائى، و العلاج الدوائى هان منقصدش بيه المنشطات الجنسية، 
                  هنا نقصد علاج الدوائى كامل نزود بيه ضخ الدم، و نعالج بيه المشكلة اللى سببت ضعف الانتصاب، 
                  و ممكن مع العلاج ناخد منشط جنسى بجرعات معينه عشان نقدر نمارس حياتنا الزوجية، لحد ما نعالج ضعف الانتصاب.
                </p>
              </div>
              
              <div className={styles.treatmentCard}>
                <h3 className={styles.treatmentTitle}>الدرجة التانية - ضعف انتصاب متوسط</h3>
                <p className={styles.treatmentDescription}>
                  بمعنى ان فى قصور اكبر فى الدوره الدموية و قتها هنعالج ضعف الانتصاب بالحقن الموضعى، 
                  و ده واحد من اهم و اسهل علاجات الضعف الجنسى، و بيكون عبارة عن مواد منشطة بتزود ضخ الدم جوا العضو، 
                  و الحقن بيكون بأبره انسولين رفيعه جدا فمش بنحس بأى الم.
                </p>
              </div>
              
              <div className={styles.treatmentCard}>
                <h3 className={styles.treatmentTitle}>الدرجة التالته - ضعف انتصاب شديد</h3>
                <p className={styles.treatmentDescription}>
                  لو كان فى قصور شديد فى الدورة الدموية وصل لان بقى فى تليف فى القضيب و قتها العلاج الوحيد هيكون{' '}
                  <Link href="/surgeries/penile-implants" style={{color: '#3b82f6', textDecoration: 'underline'}}>
                    زرع الدعامة
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Injection Benefits */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>و من مزايا الحقن الموضعى</h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <ul>
                  <li>انه بيحقق انتصاب بعد اقل من <strong>10 دقايق</strong> من الحقن لانه بيتحقن فى العضو مباشرة فى النسيج الكهفى، وده النسيج اللى بيكون مسؤول عن الانتصاب</li>
                  <li>و لو كنا بناخد اى ادوية زى ادوية الضغط و القلب، فالحقن الموضعى مش بيتعارض معاها، لاننا زى ما قولنا بنحقنها على طول فى العضو و بكده مادة الحقن مش بتدخل فى الدوره الدموية للجسم كله، هى بس بتدخل فى الدوره الدموية الخاصة بالعضو الذكرى</li>
                  <li>و كمان بتقدر بسهولة انك تحقن نفسك فى البيت مش بتحتاج ان فى كل مره تروح لدكتور، لانك مش بتحتاج تحقنها فى وريد معين انت بتحقنها بس فى النسيج الكهفى</li>
                </ul>
              </div>
              
              <div className={styles.procedureSteps}>
                <h3>تحذيرات مهمة:</h3>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>⚠️</div>
                    <div className={styles.stepContent}>
                      <h4>جودة المواد</h4>
                      <p>بس عشان الحقن الموضعى يكون امن و ميسببش اى مشكلة، لازم نتأكد من جوده النوع اللى بنستخدمة فى الحقن، لان لو استخدمنا مواد مش كويسة ده ممكن يسبب تليف فى انسجة القضيب</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>💉</div>
                    <div className={styles.stepContent}>
                      <h4>الجرعة المناسبة</h4>
                      <p>و لازم كمان الجرعه تكون مناسبة للسن و الحالة الصحية، و هنا هنحتاج نعمل اختبار للحقن عشان نحدد الجرعه المناسبة اللى نقدر نحقق بيها انتصاب نكمل بيه العلاقة الزوجية، و متكنش الكمية زياده فتعمل انتصاب لفترة طويلة، لان لو ده حصل هنسبب ضرر لانسجة القضيب و لازم يتلحق فورا</p>
                    </div>
                  </div>
                </div>
              </div>
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
                  <div style={{ background: '#f1f5f9', padding: '0.75rem', borderRadius: '8px', marginTop: '1rem' }}>
                    <strong style={{ color: '#1e40af' }}>الأهمية:</strong>
                    <p style={{ margin: '0.25rem 0 0 0', color: '#475569', fontSize: '0.9rem' }}>{test.importance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>خيارات العلاج</h2>
            {treatmentOptions.map((category, categoryIndex) => (
              <div key={categoryIndex} style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '600', color: '#1e293b', marginBottom: '2rem', textAlign: 'center' }}>
                  {category.category}
                </h3>
                <div className={styles.treatmentGrid}>
                  {category.treatments.map((treatment, index) => (
                    <div key={index} className={styles.treatmentCard}>
                      <h3 className={styles.treatmentTitle}>{treatment.name}</h3>
                      <p className={styles.treatmentDescription}>{treatment.description}</p>
                      
                      <div className={styles.treatmentDetails}>
                        <div className={styles.detail}>
                          <span className={styles.detailLabel}>نسبة النجاح:</span>
                          <span className={styles.detailValue}>{treatment.effectiveness}</span>
                        </div>
                        <div className={styles.detail}>
                          <span className={styles.detailLabel}>الآثار الجانبية:</span>
                          <span className={styles.detailValue}>{treatment.sideEffects}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>استعد ثقتك وقوتك في العلاقة الزوجية</h2>
              <p>
                ضعف الانتصاب مشكلة شائعة وقابلة للعلاج بنسب نجاح عالية. لا تدع الخجل يمنعك من الحصول على العلاج المناسب. 
                د. أسامة البكل يقدم لك حلول متقدمة من العلاج الدوائي للحقن الموضعي وحتى الدعامات.
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

        {/* Related Conditions */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>حالات ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link href="/surgeries/penile-implants" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🔧</span>
                <h3>دعامات العضو الذكري</h3>
                <p>الحل الجراحي الدائم للدرجة الثالثة من ضعف الانتصاب</p>
              </Link>
              <Link href="/sexual-problems/premature-ejaculation" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>⏱️</span>
                <h3>سرعة القذف</h3>
                <p>مشكلة جنسية أخرى شائعة قابلة للعلاج</p>
              </Link>
              <Link href="/sexual-problems/libido-problems" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>❤️</span>
                <h3>مشاكل الرغبة الجنسية</h3>
                <p>المرحلة الأولى من العلاقة الجنسية وعلاج مشاكلها</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
