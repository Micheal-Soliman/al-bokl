import MainLayout from '../../components/layout/MainLayout';
import { generateSEOMetadata } from '../../../lib/seo/articleSEO';
import Link from 'next/link';
import styles from '../fertility-condition.module.css';

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "هل مشاكل الخصية تسبب العقم ؟ - الدكتور أسامة البكل",
    description: "الخصية هي المصنع اللي بينتج الحيوانات المنوية واللي مسؤولة عن الإنجاب ، ولو حصل فيها اي مشكلة ، هتحرمك من الإنجاب وممكن تسببلك عقم طول حياتك.",
    keywords: ["مشاكل الخصية", "فشل الخصية", "الخصية المعلقة", "متلازمة كلاينفلتر", "دوالي الخصية", "العلاج الإشعاعي", "د أسامة البكل"],
    canonical: "/fertility/testicular-problems",
    image: "/images/fertility/testicular-problems.webp"
  });
}

export default function TesticularProblemsPage() {
  const testicular_causes = [
    {
      category: "اسباب خلقية أو وراثية",
      description: "و دى نقدر نكتشفها فى سن صغير، لانها بتأثر على حجم الخصية و الوصول للبلوغ",
      conditions: [
        {
          name: "الخصية المعلقة",
          details: "و ده عيب خلقى، وبسببه خصية واحده او الخصيتين مبينزلوش من تجويف البطن لكيس الصفن بتفضل الخصية موجوده فى البطن، و هنا لو الخصية منزلتش لوحدها لكيس الصفن لحد ما يوصل الطفل لعمر السنة و نص لازم وقتها ننزل الخصية من البطن بعملية، لان الخصية لو منزلتش هيحصلها ضمور و تبدء البؤر المنوية تختفى، وده بسبب درجة الحرارة العالية اللى بتتعرض لها الخصية فى البطن",
          treatment: "لو كانت الخصيتين معلقين ومنزلوش خالص ممكن نعمل محاولة لإنزالهم جراحيا، و بعدها بناخد علاج تنشيطى للخصية، و بعدها نعمل تفتيش ميكروسكوبى، لكن نسب النجاح هنا بتكون ضعيفة جدا"
        },
        {
          name: "متلازمة الكلاينفلتر",
          details: "و دى معناها ان فى خلل فى الكروموسومات، اتسبب فى وجود كروموسوم X زياده و ده هيتسبب فى ضمور بالخصيتين، و ده هييتسبب فى ان نسبة هرمون الذكوره هتكون قليله جدا، و انتاج الخصية للحيوانات المنوية هيكون ضعيف جدا او منعدم",
          treatment: "لو كان في ضعف في انتاج الخصية للحيوانات المنوية هنا لازم نعمل تجميد وحفظ للحيوانات المنوية ونعمل بعدها حقن مجهري، ولازم كمان نعمل تحليل جينات للاجنة عشان نتاكد انها سليمة"
        }
      ],
      icon: "🧬"
    },
    {
      category: "اسباب مكتسبة",
      description: "أسباب تحدث بعد الولادة وتؤثر على وظيفة الخصية",
      conditions: [
        {
          name: "دوالى على الخصية",
          details: "من الدرجة التانية او التالته، وقتها الدوالى هتكون بتأثر على انتاج الخصية للحيوانات المنوية، او هيضر الحيوانات المنوية نفسها، لان بسبب الدوالى بيكون فى ضعف فى جدار الوريد اللى بيكون مسؤل عن انه يخرج بقايا الدم من الخصية بعد ما تكون استفادت منها، للدورة الدمويه وبسبب الضعف ده الدم مبيخرجش و بيفضل متجمع فى الوريد",
          treatment: "لازم فى الاول نعمل عمليه بسيطه نربط بيها الدوالى، و بعدين نبدء بعد العمليه فى علاج هرمونى عشان ننشط بيه الخصية و ترجع تانى تنتج حيوانات منويه"
        },
        {
          name: "العلاج الاشعاعى او الكيميائى",
          details: "لو اتعرضنا للعلاج الاشعاعى او الكيميائى لفترات طويله و بجرعات كبيره بسبب الامراض السرطانية، وقتها العلاج هيأثر على الخلايا و البؤر المنوية، و ده سببه ان الخلايا المنوية بتكون خلايا سريعه الانقسام و التكاثر، زى الخلايا السرطانيه",
          treatment: "للاسف مش بيكون فى علاج نقدر نرجع بيه الخلايا المنوية، و بيكون حلنا الوحيد اننا نعمل تفتيش ميكروسكوبى نحاول نلاقى بيه خلايا منوية متكونش اتضرت بسبب العلاج الاشعاعى و الكيميائى"
        }
      ],
      icon: "🩺"
    }
  ];

  const diagnostic_tests = [
    {
      test: "الفحص السريري",
      description: "فحص الخصيتين باليد للكشف عن أي تغيرات في الحجم أو الملمس",
      importance: "أساسي لكل المشاكل",
      icon: "👨‍⚕️"
    },
    {
      test: "الموجات فوق الصوتية",
      description: "تصوير الخصيتين لتقييم التدفق الدموي والبحث عن كتل أو دوالي",
      importance: "مهم للتشخيص الدقيق",
      icon: "📡"
    },
    {
      test: "تحليل السائل المنوي",
      description: "تقييم تأثير مشكلة الخصية على جودة وعدد الحيوانات المنوية",
      importance: "لتقييم الخصوبة",
      icon: "🔬"
    },
    {
      test: "الفحوصات الهرمونية",
      description: "قياس مستويات الهرمونات لتقييم وظيفة الخصية",
      importance: "لفهم التأثير الهرموني",
      icon: "⚗️"
    }
  ];

  const prevention_tips = [
    {
      category: "الحماية من الإصابات",
      tips: [
        "ارتداء واقي الخصية أثناء الرياضة",
        "تجنب الأنشطة الخطيرة",
        "استخدام معدات الأمان",
        "الحذر أثناء ركوب الدراجات"
      ]
    },
    {
      category: "الوقاية من العدوى",
      tips: [
        "النظافة الشخصية",
        "تجنب العلاقات غير الآمنة",
        "التطعيم ضد النكاف",
        "العلاج المبكر للالتهابات"
      ]
    },
    {
      category: "نمط الحياة الصحي",
      tips: [
        "تجنب التدخين",
        "ممارسة الرياضة بانتظام",
        "تجنب الحرارة المفرطة",
        "التغذية المتوازنة"
      ]
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
              <Link href="/fertility">تأخر الإنجاب</Link>
              <span>/</span>
              <span>هل مشاكل الخصية تسبب العقم؟</span>
            </div>
            <h1 className={styles.heroTitle}>هل مشاكل الخصية تسبب العقم ؟</h1>
            <p className={styles.heroDescription}>
              الخصية هى اساس انتاج هرمون الذكوره و تصنيع الحيوانات المنوية، لكن لو الخصية دى فيها خلل وقتها مش هيكون فى انتاج لهرمون الذكوره ولا للحيوانات المنوية، وطبعا هياثر على الانجاب وهيسبب تأخر او فشل فى البلوغ و ضعف جنسي، وده بنسمية فشل او خلل وظيفى فى الخصية.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>2</span>
                <span className={styles.statLabel}>نوعين من الأسباب</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>1.5</span>
                <span className={styles.statLabel}>سنة الحد الأقصى للعلاج</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5</span>
                <span className={styles.statLabel}>سنوات بعد العلاج الكيميائي</span>
              </div>
            </div>
          </div>
        </section>

        {/* Definition Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>طيب هى اى اسباب الفشل الوظيفى للخصية:</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  <strong>مشاكل الخصية:</strong> الخصية هى اساس انتاج هرمون الذكوره و تصنيع الحيوانات المنوية، 
                  لكن لو الخصية دى فيها خلل وقتها مش هيكون فى انتاج لهرمون الذكوره ولا للحيوانات المنوية.
                </p>
                <p>
                  وطبعا هياثر على الانجاب وهيسبب تأخر او فشل فى البلوغ و ضعف جنسي، 
                  وده بنسمية فشل او خلل وظيفى فى الخصية.
                </p>
                <p>
                  <strong>و هنا هنقسمهم لسببين:</strong> أسباب خلقية أو وراثية، وأسباب مكتسبة. 
                  كل نوع له طرق علاج مختلفة ونسب نجاح متفاوتة.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>⚕️</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section className={styles.diagnosisSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>أسباب الفشل الوظيفى للخصية</h2>
            <div className={styles.testsGrid}>
              {testicular_causes.map((cause, index) => (
                <div key={index} className={styles.testCard}>
                  <div className={styles.testIcon}>{cause.icon}</div>
                  <h3 className={styles.testName}>{cause.category}</h3>
                  <p className={styles.testDescription}>{cause.description}</p>
                  
                  <div style={{ textAlign: 'right', marginTop: '1.5rem' }}>
                    {cause.conditions.map((condition, idx) => (
                      <div key={idx} style={{ marginBottom: '2rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#1e40af', fontWeight: '600' }}>
                          {condition.name}
                        </h4>
                        <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                          {condition.details}
                        </p>
                        <div style={{ background: '#f1f5f9', padding: '0.75rem', borderRadius: '6px' }}>
                          <strong style={{ color: '#1e40af' }}>العلاج:</strong>
                          <p style={{ margin: '0.5rem 0 0 0', color: '#475569', fontSize: '0.85rem' }}>
                            {condition.treatment}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnosis Section */}
        <section className={styles.diagnosisSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>التشخيص والفحوصات</h2>
            <div className={styles.testsGrid}>
              {diagnostic_tests.map((test, index) => (
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

        {/* Treatment Approach */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>نهج العلاج حسب نوع المشكلة</h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <h3>العلاج الجراحي:</h3>
                <ul>
                  <li>دوالي الخصية - الجراحة الميكروسكوبية</li>
                  <li>التواء الخصية - جراحة طارئة</li>
                  <li>الخصية المعلقة - جراحة الإنزال</li>
                  <li>أورام الخصية - استئصال حسب النوع</li>
                  <li>إصابات الخصية - إصلاح جراحي</li>
                </ul>
                
                <h3>العلاج الدوائي:</h3>
                <ul>
                  <li>التهاب الخصية - مضادات حيوية</li>
                  <li>العدوى الفيروسية - مضادات فيروسية</li>
                  <li>الالتهاب - مضادات الالتهاب</li>
                  <li>الألم - مسكنات مناسبة</li>
                </ul>
              </div>
              
              <div className={styles.procedureSteps}>
                <h3>خطوات العلاج:</h3>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                      <h4>التشخيص السريع</h4>
                      <p>فحص عاجل لتحديد نوع ودرجة المشكلة</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <h4>تقييم التأثير</h4>
                      <p>تحديد مدى تأثير المشكلة على الخصوبة</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <h4>العلاج المناسب</h4>
                      <p>تطبيق العلاج الأمثل حسب نوع المشكلة</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                      <h4>المتابعة</h4>
                      <p>تقييم النتائج ومتابعة التحسن</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>الوقاية من مشاكل الخصية</h2>
            <div className={styles.treatmentGrid}>
              {prevention_tips.map((category, index) => (
                <div key={index} className={styles.treatmentCard}>
                  <h3 className={styles.treatmentTitle}>{category.category}</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {category.tips.map((tip, idx) => (
                      <li key={idx} style={{ 
                        padding: '0.75rem 0', 
                        color: '#475569', 
                        paddingRight: '1.5rem', 
                        position: 'relative',
                        borderBottom: idx < category.tips.length - 1 ? '1px solid #e2e8f0' : 'none'
                      }}>
                        <span style={{ position: 'absolute', right: 0, color: '#10b981', fontSize: '1.2rem' }}>✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className={styles.successSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>علامات تحذيرية تستدعي الفحص الفوري</h2>
            <div className={styles.successStories}>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>🚨</div>
                <h3>ألم مفاجئ شديد</h3>
                <p>
                  ألم مفاجئ وشديد في الخصية قد يشير إلى التواء الخصية - حالة طارئة تحتاج تدخل جراحي خلال 6 ساعات.
                </p>
              </div>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>🔍</div>
                <h3>كتلة أو تورم</h3>
                <p>
                  أي كتلة جديدة أو تورم في الخصية يجب فحصها فوراً لاستبعاد الأورام أو الالتهابات.
                </p>
              </div>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>🌡️</div>
                <h3>حمى مع ألم الخصية</h3>
                <p>
                  الحمى المصاحبة لألم الخصية قد تشير إلى التهاب يحتاج علاج عاجل بالمضادات الحيوية.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information Section */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>معلومات مهمة عن العلاج</h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <h3>نقاط مهمة للعلاج الإشعاعي والكيميائي:</h3>
                <ul>
                  <li>لازم تكون عارف اننا عشان نعمل التفتيش الميكروسكوبى لازم يكون بعد ما يعدى <strong>5 سنين</strong> من وقت اخر جلسة علاج كيميائى او اشعاعى</li>
                  <li>و هيكون قدامنا وقتها اكتر من احتمال</li>
                </ul>
                
                <h3>احتمالات نتائج التفتيش الميكروسكوبي:</h3>
                <ul>
                  <li>اما اننا هنلاقى خلايا منوية سليمة نقدر نطلع منها حيوان منوى سليم نعمل بيه حقن مجهرى</li>
                  <li>او ان نلاقى خلايا منوية بس اتأثرت بالعلاج الاشعاعى وحصل فيها مشكله فى الكروموسومات، وده ممكن يسبب تشوه فى الاجنة</li>
                  <li>او للاسف مش هنلاقى اى خلايا منوية ووقتها مش هيكون عندنا فرصه اننا نعمل حقن مجهرى، لان مش هيكون عندنا حيوانات منوية نلقح بيها البويضة</li>
                </ul>
              </div>
              
              <div className={styles.procedureSteps}>
                <h3>معلومة مهمة عن العمر:</h3>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>⚠️</div>
                    <div className={styles.stepContent}>
                      <h4>العمر والنجاح</h4>
                      <p>كل ما كان المريض اصغر سنا كل ما كانت فرص ان نلاقي حيوانات منوية بالخصية افضل</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>🔗</div>
                    <div className={styles.stepContent}>
                      <h4>روابط مهمة</h4>
                      <p>
                        <Link href="/surgeries/testicular-biopsy/microscopic-tese" style={{color: '#3b82f6', textDecoration: 'underline'}}>
                          تفتيش ميكروسكوبى
                        </Link>
                        {' و '}
                        <Link href="/fertility/azoospermia" style={{color: '#3b82f6', textDecoration: 'underline'}}>
                          انعدام الحيوانات المنوية
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>لا تفقد الأمل في علاج مشاكل الخصية</h2>
              <p>
                مشاكل الخصية متنوعة ولكن معظمها قابل للعلاج. التشخيص المبكر والعلاج المناسب يمكن أن يحافظ على خصوبتك. 
                حتى في الحالات المعقدة، هناك حلول متقدمة مثل التفتيش الميكروسكوبي والحقن المجهري.
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

        {/* Related Conditions */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>حالات ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link href="/surgeries/varicocele" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🩸</span>
                <h3>دوالى الخصيه وتاثيرها على الانجاب</h3>
                <p>تفاصيل عن دوالي الخصية من الدرجة الثانية والثالثة وعلاجها</p>
              </Link>
              <Link href="/surgeries/testicular-biopsy/microscopic-tese" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🔬</span>
                <h3>التفتيش الميكروسكوبي للخصية</h3>
                <p>استخراج الحيوانات المنوية من الخصية للحقن المجهري</p>
              </Link>
              <Link href="/fertility/azoospermia" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🧪</span>
                <h3>إنعدام الحيوانات المنوية</h3>
                <p>أسباب انعدام الحيوانات المنوية وعلاقتها بمشاكل الخصية</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
