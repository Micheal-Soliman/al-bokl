import MainLayout from '../../components/layout/MainLayout';
import { generateSEOMetadata } from '../../../lib/seo/articleSEO';
import Link from 'next/link';
import styles from '../fertility-condition.module.css';

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "مشاكل الهرمونات و تأخر الإنجاب عند الرجال - الدكتور أسامة البكل",
    description: "الهرمونات في الجسم مهمة جدا، لانها هي اللي مسؤولة عن انجاب طفل ، ولو حصل فيها اي خلل هتسبب تاخر في الانجاب ، تعالو نعرف ايه هي الهرمونات دي وكيفية علاجها.",
    keywords: ["مشاكل الهرمونات", "تأخر الإنجاب", "هرمون الذكورة", "الغدة النخامية", "FSH", "LH", "البرولاكتين", "هرمون E2", "الغدة الدرقية", "د أسامة البكل"],
    canonical: "/fertility/hormonal-problems",
    image: "/images/fertility/hormonal-problems.webp"
  });
}

export default function HormonalProblemsPage() {
  const hormones = [
    {
      name: "هرمونات الغده النخامية",
      function: "دى غده موجوده فى الدماغ و بتكون مسؤوله عن افراز 3 هرمونات و هما: هرمون LH و هرمون FSH و هرمون البرولاكتين",
      details: "الغده النخامية وقت البلوغ بتفرز هرمون FSH – LH و بعدين الهرمونات دى تبدء تمشى فى الدم و تروح للخصية، هرمون LH بيروح لخلايا ليدنج فتبدء الخلية تطلع هرمون الذكوره و من هنا تبدء تظهر علامات البلوغ، اما هرمون FSH بيروح لخلايا سرتولى و بعدين يتنقل للخلايا المنوية فتبدأ الخصية تنتج الحيوانات المنوية، و من هنا بيكون عندنا قدرة على الانجاب.",
      problems: ["انعدام فى عدد الحيوانات المنوية", "نقص فى انتاج هرمون الذكوره", "فشل فى البلوغ", "ضعف فى الانتصاب و فى الرغبة الجنسية"],
      icon: "🧠"
    },
    {
      name: "هرمون البرولاكتين",
      function: "و ده عكس هرمون FSH – LH، بمعنى ان كل ما كانت نسبته قليله كل ما كان وضع الخصية و باقى الهرمونات طبيعى",
      details: "هرمون البرولاكتين لو لقينا ارتفاع شديد جدا فى نسبته ده هيسبب اما نقص فى هرمون FSH – LH، و بكده هيقف او يقل انتاج الخصية للحيوانات المنوية، او انه هيأثر على الخصية بشكل مباشر و يوقف او يقلل انتاجها للحيوانات المنوية و ده هيقلل فرص ان يحصل حمل طبيعى.",
      problems: ["نقص فى هرمون FSH – LH", "توقف او تقليل انتاج الحيوانات المنوية", "تقليل فرص الحمل الطبيعى"],
      icon: "🥛"
    },
    {
      name: "هرمون E2 او الهرمون الانثوى فى الخصية",
      function: "هو عباره هرمون بيتفرز فى الجسم بسبب انزيم اسمة اروماتيز، و الانزيم ده بيكون موجود فى الخصيتين او فى البروستاتا او فى الخلايا الدهنية فى الجسم كلة",
      details: "هرمون E2 بيزيد بسبب فرط فى نشاط انزيم الاروماتيز او سمنة مفرطة او خلل فى الهرمونات او التقدم فى السن",
      problems: ["نقص فى هرمون الذكوره", "نقص فى هرمون FSH – LH", "نقص فى عدد الحيوانات المنوية", "ضعف فى حركة الحيوان المنوى", "تثدى", "ضعف فى الرغبة الجنسية"],
      icon: "⚖️"
    },
    {
      name: "هرمون الذكورة فى الخصية",
      function: "الهرمون الذكرى هو الهرمون المسؤول عن وصولنا لمرحلة البلوغ و زيادة حجم القضيب و الخصيتين و بيأثر كمان على القدره الجنسية",
      details: "بيكون مسؤول عن تحفز انسجة القضيب، و ده اللى بيعمل انتصاب وقت العلاقه الزوجيه، كمان بيكون مسؤل عن الرغبه الجنسيه، و الوصول للنشوه، و قوة القذف، و كمان بيكون ليه تأثير على انتاج الخصية للحيوانات المنوية",
      problems: ["ضعف فى حركة الحيوان المنوى و تشوهات", "انكماش فى العضو الذكرى", "ضعف فى الانتصاب والرغبة الجنسية"],
      icon: "💪"
    },
    {
      name: "الغده الدرقية",
      function: "الغده الدرقية دى غده موجوده فى الرقبة قدام الحنجرة، و الغده دى بتنتج هرمون مهم جدا لكل العمليات الحيوية زى نشاط القلب و الدوره الدموية اسمه الثيروكسين",
      details: "خلل الغده الدرقية هيسبب نقص فى هرمون الثيروكسين، و بسبب النقص ده هيحصل مشاكل فى الخصوبة والصحة العامة",
      problems: ["نقص او انعدام فى الحيوانات المنوية", "ضعف او انعدام فى حركة الحيوان المنوى", "زيادة نسبة التشوهات فى الحيوانات المنويه", "نقص فى هرمون الذكوره", "ضعف فى الانتصاب", "امراض فى القلب و سكتات دماغيه"],
      icon: "🦋"
    }
  ];

  const causes = [
    {
      category: "أسباب نقص هرمون الذكورة",
      conditions: [
        <Link key="varicocele-link" href="/surgeries/varicocele" style={{color: '#3b82f6', textDecoration: 'underline'}}>دوالى على الخصية من الدرجة التانية او التالته</Link>,
        "التعرض لعلاج كيميائى او اشعاعى على الحوض، بسبب الاصابه بسرطان الخصيه او البروستاتا",
        "مشاكل فى الغده النخامية",
        "سمنه مفرطة",
        "أمراض فى الكلى او الكبد",
        "ارتفاع فى ضغط الدم",
        "زياده فى هرمون E2",
        "الاصابة بفيروس نقص المناعة",
        "التقدم فى العمر"
      ],
      treatment: "علاج المشكله اللى اتسببت فى نقص هرمون الذكوره، و بعد ما نعالج السبب هيرجع تانى هرمون الذكوره لنسبته الطبيعية"
    },
    {
      category: "أسباب زيادة هرمون E2",
      conditions: [
        "فرط فى نشاط انزيم الاروماتيز",
        "سمنة مفرطة",
        "خلل فى الهرمونات",
        "التقدم فى السن"
      ],
      treatment: "لو كان السبب هو السمنة وقتها لازم اننا نخس الاول، اما لو كان السبب هو فرط فى نشاط انزيم الاروماتيز لازم وقتها ناخد علاج نقلل بيه نشاط انزيم الاروماتيز"
    },
    {
      category: "أسباب خلل الغده الدرقيه",
      conditions: [
        "عامل وراثى",
        "ورم فى الغده الدرقية",
        "ورم فى الخصية",
        "التقدم فى العمر بيسبب نقص فى هرمون الثيروكسين"
      ],
      treatment: "اننا اولا نعالج السبب، و بعدين ممكن ناخد علاج هرمونى عشان نعوض بيه نقص هرمون الثيروكسين"
    }
  ];

  const treatmentOptions = [
    {
      title: "علاج نقص هرمونات الغده النخامية",
      description: "العلاج هنا عشان يجيب نتيجة لازم نبدأ فيه بدرى فى سن صغير، و العلاج ده للاسف هيكون علاج هرمونى هنفضل ماشين عليه على طول",
      methods: ["علاج هرمونى لتعويض نقص هرمون FSH – LH", "متابعة دورية مستمرة"],
      benefits: ["عشان نعوض نقص هرمون FSH – LH", "تفضل الخصية شغاله بشكل طبيعى", "تحسن البلوغ والوظائف الجنسية"],
      monitoring: "متابعة مستمرة مدى الحياة"
    },
    {
      title: "علاج ارتفاع البرولاكتين",
      description: "علاج لخفض مستوى البرولاكتين المرتفع الذي يؤثر على إنتاج الحيوانات المنوية والهرمونات الأخرى",
      methods: ["أدوية خافضة للبرولاكتين", "علاج السبب الأساسي إن وجد"],
      benefits: ["عودة هرمون FSH – LH لمستواه الطبيعي", "تحسن إنتاج الحيوانات المنوية", "زيادة فرص الحمل الطبيعى"],
      monitoring: "فحص البرولاكتين بانتظام"
    },
    {
      title: "علاج زيادة هرمون E2",
      description: "العلاج هنا هيكون على حسب السبب، فلو كان السبب فى زيادة هرمون E2 هو السمنة وقتها لازم اننا نخس الاول",
      methods: ["إنقاص الوزن فى حالة السمنة", "علاج لتقليل نشاط انزيم الاروماتيز", "تجنب الوجبات السريعه و الاكل اللى مليان دهون"],
      benefits: ["هيرجع هرمون E2 و هرمون الذكوره لنسبتهم الطبيعية خلال 3 شهور", "هترجع الخصية لنشاطها الطبيعى", "الرغبة الجنسية مش هيكون فيها مشكله"],
      monitoring: "فحص الهرمونات كل 3 شهور"
    },
    {
      title: "تحذير مهم بخصوص هرمون الذكورة",
      description: "اوعى تفكر انك تحقن نفسك بهرمون الذكورة، لان انت كده بتزود المشكله، و بتقرر توقف انتاج هرمون الذكوره و انتاج الحيوانات المنوية كمان",
      methods: ["علاج السبب الأساسي بدلاً من الحقن المباشر", "تجنب الحقن العشوائي لهرمون الذكورة"],
      benefits: ["منع تفاقم المشكلة", "الحفاظ على الإنتاج الطبيعي للهرمونات", "تجنب المضاعفات الخطيرة"],
      monitoring: "متابعة طبية متخصصة"
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
              <span>مشاكل الهرمونات و تأخر الإنجاب</span>
            </div>
            <h1 className={styles.heroTitle}>مشاكل الهرمونات و تأخر الإنجاب عند الرجال</h1>
            <p className={styles.heroDescription}>
              الهرمونات في الجسم مهمة جدا، لانها هي اللي مسؤولة عن انجاب طفل، ولو حصل فيها اي خلل هتسبب تاخر في الانجاب، 
              تعالو نعرف ايه هي الهرمونات دي وكيفية علاجها.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15-20%</span>
                <span className={styles.statLabel}>من حالات العقم</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>80%</span>
                <span className={styles.statLabel}>نسبة نجاح العلاج</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3-6</span>
                <span className={styles.statLabel}>شهور للتحسن</span>
              </div>
            </div>
          </div>
        </section>

        {/* Definition Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>مشاكل الهرمونات:</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  هى عبارة عن خلل بيحصل فى الهرمونات المسؤولة عن الخصوبة و ده بيأثر على الخصية و انتاجها للحيوانات المنوية من ناحية العدد أو التشوهات أو هيسبب ضعف فى الحركة، ده غير تأثيرها على القدرة الجنسية فهنلاقيها كمان بتأثر على الانتصاب و الرغبة الجنسية بسبب تأثير الخلل الهرموني على هرمون الذكورة.
                </p>
                <p>
                  و تعالوا دلوقتى نعرف ايه هى الهرمونات اللى بتسبب نقص أو انعدام في الحيوانات المنوية، سواء الهرمونات اللى بتتحكم فى انتاج الحيوانات المنوية او الهرمونات اللى بتأثر على عدد الحيوانات المنوية، و ازاى كمان بتأثر على القدرة الجنسية.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>⚗️</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hormones Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>الهرمونات المؤثرة على الخصوبة</h2>
            <div className={styles.causesGrid}>
              {hormones.map((hormone, index) => (
                <div key={index} className={styles.causeCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>{hormone.icon}</span>
                    <h3 className={styles.causeType}>{hormone.name}</h3>
                  </div>
                  <p className={styles.causeDescription}>{hormone.function}</p>
                  
                  <div className={styles.causeExamples}>
                    <h4>التفاصيل:</h4>
                    <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6' }}>{hormone.details}</p>
                    
                    <h4>المشاكل المحتملة:</h4>
                    <ul>
                      {hormone.problems.map((problem, idx) => (
                        <li key={idx}>{problem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section className={styles.diagnosisSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>أسباب اضطرابات الهرمونات</h2>
            <div className={styles.testsGrid}>
              {causes.map((cause, index) => (
                <div key={index} className={styles.testCard}>
                  <h3 className={styles.testName}>{cause.category}</h3>
                  <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>الحالات الشائعة:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {cause.conditions.map((condition, idx) => (
                        <li key={idx} style={{ padding: '0.25rem 0', color: '#64748b' }}>• {condition}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                    <strong style={{ color: '#1e40af' }}>العلاج:</strong>
                    <p style={{ margin: '0.5rem 0 0 0', color: '#475569' }}>{cause.treatment}</p>
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
            <div className={styles.treatmentGrid}>
              {treatmentOptions.map((treatment, index) => (
                <div key={index} className={styles.treatmentCard}>
                  <h3 className={styles.treatmentTitle}>{treatment.title}</h3>
                  <p className={styles.treatmentDescription}>{treatment.description}</p>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1e293b' }}>طرق العلاج:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {treatment.methods.map((method, idx) => (
                        <li key={idx} style={{ padding: '0.25rem 0', color: '#475569', paddingRight: '1rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', right: 0, color: '#10b981' }}>✓</span>
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1e293b' }}>الفوائد:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {treatment.benefits.map((benefit, idx) => (
                        <li key={idx} style={{ padding: '0.25rem 0', color: '#475569', paddingRight: '1rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', right: 0, color: '#3b82f6' }}>•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.treatmentDetails}>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>المتابعة:</span>
                      <span className={styles.detailValue}>{treatment.monitoring}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnosis Process */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>عملية التشخيص والعلاج</h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <h3>الفحوصات المطلوبة:</h3>
                <ul>
                  <li>فحص التستوستيرون الصباحي</li>
                  <li>فحص FSH و LH</li>
                  <li>فحص البرولاكتين</li>
                  <li>فحص الغدة الدرقية</li>
                  <li>فحص الكورتيزول</li>
                  <li>تحليل السائل المنوي</li>
                </ul>
                
                <h3>علامات تحسن العلاج:</h3>
                <ul>
                  <li>تحسن مستويات الهرمونات</li>
                  <li>زيادة الطاقة والحيوية</li>
                  <li>تحسن الرغبة الجنسية</li>
                  <li>تحسن جودة الانتصاب</li>
                  <li>تحسن تحليل السائل المنوي</li>
                </ul>
              </div>
              
              <div className={styles.procedureSteps}>
                <h3>خطوات العلاج:</h3>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                      <h4>التقييم الشامل</h4>
                      <p>فحص سريري وتحاليل شاملة للهرمونات</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <h4>تحديد السبب</h4>
                      <p>تحديد ما إذا كان السبب أولي أم ثانوي</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <h4>وضع خطة العلاج</h4>
                      <p>اختيار أفضل طريقة علاج حسب الحالة</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                      <h4>المتابعة الدورية</h4>
                      <p>فحوصات منتظمة لتقييم الاستجابة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className={styles.successSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>قصص نجاح</h2>
            <div className={styles.successStories}>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>✅</div>
                <h3>سامر - 35 سنة</h3>
                <p>
                  "كان لديّ نقص شديد في التستوستيرون مع ضعف في الرغبة الجنسية. 
                  بعد العلاج التعويضي، تحسنت حالتي بشكل كبير وحدث الحمل خلال 6 شهور."
                </p>
              </div>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>✅</div>
                <h3>أحمد - 28 سنة</h3>
                <p>
                  "اكتشفت أن لديّ ارتفاع في البرولاكتين كان يمنع الإنجاب. 
                  مع العلاج المناسب، عاد مستوى الهرمون طبيعياً وحققنا حلم الأبوة."
                </p>
              </div>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>✅</div>
                <h3>محمد - 32 سنة</h3>
                <p>
                  "كانت مشكلتي في الغدة النخامية تؤثر على جميع الهرمونات. 
                  العلاج بالمحفزات أعاد إنتاج الهرمونات طبيعياً وتحسنت الخصوبة."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>استعد توازنك الهرموني وخصوبتك</h2>
              <p>
                اضطرابات الهرمونات قابلة للعلاج بنجاح عالي. لا تدع المشكلة تتفاقم، 
                احجز استشارة مع د. أسامة البكل للحصول على تقييم شامل وخطة علاج مناسبة.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز استشارة الآن
                </Link>
                <Link href="tel:+201017912197" className={styles.secondaryBtn}>
                  اتصل الآن: 01017912197
                </Link>
              </div>
              <p style={{marginTop: '2rem', textAlign: 'center', color: '#64748b'}}>
                و لو لسه عاوز تعرف اكتر عن الاسباب اللى ممكن يحصل بسببها انعدام أو نقص للحيوانات المنوية{' '}
                <Link href="/fertility/azoospermia" style={{color: '#3b82f6', textDecoration: 'underline'}}>
                  اضغط هنا
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Related Conditions */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>حالات ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link href="/fertility/azoospermia" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🔬</span>
                <h3>إنعدام الحيوانات المنوية</h3>
                <p>تعرف على أسباب وعلاج انعدام الحيوانات المنوية</p>
              </Link>
              <Link href="/sexual-problems/erectile-dysfunction" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>💪</span>
                <h3>ضعف الانتصاب</h3>
                <p>علاج ضعف الانتصاب المرتبط بنقص الهرمونات</p>
              </Link>
              <Link href="/fertility/testicular-problems" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🩺</span>
                <h3>مشاكل الخصية</h3>
                <p>تأثير أمراض الخصية على إنتاج الهرمونات</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
