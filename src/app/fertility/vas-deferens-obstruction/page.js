import MainLayout from '../../components/layout/MainLayout';
import { generateSEOMetadata } from '../../../lib/seo/articleSEO';
import Link from 'next/link';
import styles from '../fertility-condition.module.css';

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "اي هو انسداد القنوات المنوية ؟ - الدكتور أسامة البكل",
    description: "القنوات المنوية اللي بتكون مسؤولة أن الحيوان المنوي يخرج من الخصية ويوصل إلى مهبل الزوجة لو كان فيها انسداد ، هتكون مشكلة كبيرة جدا ، وهتؤدي الى تاخر الانجاب ، تعالوا نعرف ايه هو انسداد القنوات المنوية وطرق علاجه.",
    keywords: ["انسداد القنوات المنوية", "البربخ", "الحبل المنوي", "الوعاء الناقل", "القناة القاذفة", "عينة ميكروسكوبية", "د أسامة البكل"],
    canonical: "/fertility/vas-deferens-obstruction",
    image: "/images/fertility/vas-deferens-obstruction.webp"
  });
}

export default function VasDeferensObstructionPage() {
  const obstruction_causes = [
    {
      cause: "عوامل وراثية",
      description: "زى ان الحبل المنوى او الوعاء الناقل متخلقش اصلا سواء فى ناحية واحدة من الخصية أو على الناحيتين، بمعنى ان الحبل المنوى اللى بياخد الحيوانات المنوية من الخصية مش بيكون موجود، و بكده الحيوانات المنوية هتفضل في الخصية مش هتخرج لبره، و هنا هنلاحظ كمان ان كمية السائل المنوي نفسه اللى بتخرج فى وقت القذف بتكون قليله، لان الحويصلة المنوية بتكون ضعيفة",
      warning: "لازم هنا ناخد بالنا من حاجة مهمة جدا ان اغلب الناس اللى بيكون الوعاء الناقل عندهم مش متخلق بيكون عندهم مشاكل فى الكلى و ممكن يكونوا مولودين بكليه واحده، عشان كده لو لقيت عندك مشكلة فى الوعاء الناقل لازم كمان تطمن على وضع الكلى عند دكتور متخصص",
      icon: "🧬"
    },
    {
      cause: "عيب خلقى",
      description: "زى ان البربخ مش موجود، او البربخ والحبل المنوى مش متوصلين ببعض، أو أن الوعاء الناقل فيه انسداد خلقى",
      icon: "🔧"
    },
    {
      cause: "التهاب او صديد فى مجرى البول",
      description: "ده بينزل على القنوات القاذفة و بيسدها فمبتنزلش الحيوان المنوى لمجرى البول",
      icon: "🦠"
    },
    {
      cause: "عملية فتق اربي",
      description: "لو كان و احنا صغيرين عندنا فتق اربي و عملنا العملية عند حد مش متخصص، ممكن يحصل بالغلط قطع أو ربط للحبل المنوي لان حجمة وقتها بيكون صغير جدا، و بكده هيبقى طريق الحيوان المنوي اتقفل ومش هيقدر يكمل طريقه و يخرج مع السائل المنوي",
      icon: "✂️"
    },
    {
      cause: "عملية قيله مائيه",
      description: "لو كان عندنا قيله مائيه وعملنا عملية، و حصل جرح في البربخ وقت العمليه، دة هيسبب انسداد، يخلى الحيوانات المنويه متطلعش للحبل المنوى",
      icon: "💧"
    },
    {
      cause: "الأمراض المنقولة جنسياّ",
      description: "لو اتصابنا بمرض من الأمراض المنقولة جنسياّ زى السيلان ده بيسبب انسداد فى الحبل المنوى او التهاب البربخ",
      icon: "🚨"
    },
    {
      cause: "التدخين والدرن",
      description: "و اخيراّ لو كنا بندخن شيشه بشراهة و جالنا بسببها الدرن، ده بيسبب انسداد في البربخ و الحبل المنوى",
      icon: "🚬"
    }
  ];

  const diagnostic_methods = [
    {
      method: "تحليل السائل المنوي",
      description: "فحص شامل للسائل المنوي لتحديد وجود الحيوانات المنوية",
      findings: ["انعدام الحيوانات المنوية", "حجم السائل المنوي", "حموضة السائل"],
      icon: "🔬"
    },
    {
      method: "الفحص الهرموني",
      description: "قياس مستويات الهرمونات لتمييز الانسداد عن مشاكل الإنتاج",
      findings: ["FSH طبيعي", "LH طبيعي", "التستوستيرون طبيعي"],
      icon: "⚗️"
    },
    {
      method: "الموجات فوق الصوتية",
      description: "تصوير الخصيتين والبربخ للبحث عن انسدادات أو توسعات",
      findings: ["توسع البربخ", "حجم الخصيتين طبيعي", "علامات الانسداد"],
      icon: "📡"
    },
    {
      method: "الفحص الجيني",
      description: "فحص الطفرات الجينية المرتبطة بعدم وجود الأسهر",
      findings: ["طفرات CFTR", "طفرات أخرى", "التاريخ العائلي"],
      icon: "🧬"
    }
  ];

  const surgical_options = [
    {
      surgery: "ربط البربخ بالأسهر (Epididymovasostomy)",
      description: "ربط البربخ مباشرة بالأسهر لتجاوز الانسداد",
      indications: ["انسداد البربخ", "فشل ربط الأسهر العادي"],
      technique: "جراحة ميكروسكوبية دقيقة",
      duration: "2-3 ساعات",
      success: "70-85%",
      recovery: "4-6 أسابيع"
    },
    {
      surgery: "ربط الأسهر (Vasovasostomy)",
      description: "ربط طرفي الأسهر المقطوع أو المسدود",
      indications: ["انسداد الأسهر", "بعد عملية قطع الأسهر"],
      technique: "جراحة ميكروسكوبية طبقة بطبقة",
      duration: "2-4 ساعات",
      success: "80-95%",
      recovery: "3-4 أسابيع"
    },
    {
      surgery: "فتح القنوات القاذفة (TURED)",
      description: "فتح انسداد القنوات القاذفة بالمنظار",
      indications: ["انسداد القنوات القاذفة", "أكياس البروستاتا"],
      technique: "منظار عبر الإحليل",
      duration: "30-60 دقيقة",
      success: "60-80%",
      recovery: "1-2 أسبوع"
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
              <span>اي هو انسداد القنوات المنوية؟</span>
            </div>
            <h1 className={styles.heroTitle}>اي هو انسداد القنوات المنوية ؟</h1>
            <p className={styles.heroDescription}>
              لما الحمل بيتأخر و بنبدأ ندور على السبب، و نعمل تحليل للسائل المنوي عشان نعرف المشكله فين، و تيجى النتيجة انعدام في الحيوانات المنوية، وقتها الحاجة الوحيدة اللى بتيجى فى بالنا ان كده خلاص مش هيكون عندنا اطفال، بس خلينى اقولك ان تفكيرك غلط، و ان لسه فى امل ان يكون عندك طفل حتى لو نتيجة التحليل صفر حيوانات منويه.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>6</span>
                <span className={styles.statLabel}>مواقع محتملة للانسداد</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>0</span>
                <span className={styles.statLabel}>حيوانات منوية في التحليل</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>أمل في الإنجاب</span>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>رحلة الحيوان المنوي</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  <strong>الخصية:</strong> رحلتنا بتبدأ من الخصية و دى مصنع الحيوانات المنويه، 
                  و الخصية دى بتتكون من أنابيب بيتصنع فيها الحيوانات المنوية و الانابيب دى كلها بتوصل بعد كده لمكان تانى اسمه البربخ.
                </p>
                <p>
                  <strong>البربخ:</strong> البربخ ده هو الأنبوبة الاولى اللى بيتنقل ليها الحيوان المنوى بعد ما يكون اتصنع فى الخصية، 
                  و البربخ ده بيكون موجود ورا الخصية، و فى البربخ بيبدأ الحيوان المنوي و يكمل مراحل نموه ويتعلم الحركة لحد ما يوصل للوعاء الناقل أو الحبل المنوى.
                </p>
                <p>
                  <strong>الوعاء الناقل:</strong> و ده المكان اللى بتختلط فيه الحيوانات المنوية مع السائل المنوي اللى بتفرزه الحويصلة المنويه و البروستاتا، 
                  و بعدين يتجمعوا مع بعض فى قناة القذف وبعد كده يتضخو لمجرى البول عشان يحصل القذف.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>🛤️</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Obstruction */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>المكان اللي بيحصل فيه انسداد</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  احنا كده عرفنا الطريق الطبيعى اللى بيمشى فيه الحيوان المنوي من الخصية لحد ما يخرج فى وقت القذف، 
                  و هنا لازم نفهم حاجه كويس اننا عندنا حيوانات منوية و أن الخصية بتكون شغاله كويس جدا مفيهاش اى مشكله.
                </p>
                <p>
                  بس بسبب ان فى انسداد فى جزء من الطريق اللى بيمشى فيه الحيوان المنوي من اول الخصية لمجرى البول 
                  الحيوان المنوى مش بيطلع من الخصية وقت القذف، و الانسداد ده وارد انه يبقى فى:
                </p>
                <ul style={{textAlign: 'right', color: '#475569', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  <li>في أنابيب الخصية</li>
                  <li>أو في البربخ</li>
                  <li>أو فى الوعاء الناقل</li>
                  <li>أو في الحبل المنوي</li>
                  <li>أو ممكن يكون فى القناة القاذفة</li>
                  <li>أو فى مجرى البول</li>
                </ul>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>🚫</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Clarification */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>معلومة مهمة جداً</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  <strong>سؤال مهم:</strong> و هنا لازم ناخد بالنا من حاجة مهمة عشان كتير من الناس بتيجى تقولى يادكتور انا فى سائل بيطلع عندى وقت القذف يبقى ازاى عندى انعدام في الحيوانات المنوية ؟
                </p>
                <p>
                  <strong>الإجابة:</strong> السائل المنوى، ده وهو إفراز طبيعي تنتجه البروستاتا و الحويصلة المنوية، 
                  و وظيفته انه يغذي الحيوانات المنوية و يسهل خروجها وقت القذف، اما الحيوانات المنوية دى بيتم انتاجها فى الخصية.
                </p>
                <p>
                  <strong>الفرق المهم:</strong> و نفهم من ده ان الحيوان المنوي بيخرج من مكان و السائل المنوي بيخرج من مكان تانى و هو البرستاتا، 
                  و يختلطوا مع بعض وقت القذف و يكونوا السائل المنوي بالحيوانات المنوية، 
                  واللى بيحصل لما بيكون فى انسداد فى القنوات المنوية، ان الحيوانات المنويه مش بتخرج وقت القذف، اللى بيخرج هو السائل المنوى بس.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>❓</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section className={styles.diagnosisSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>اسباب انسداد القنوات المنوية</h2>
            <div className={styles.testsGrid}>
              {obstruction_causes.map((causeItem, index) => (
                <div key={index} className={styles.testCard}>
                  <div className={styles.testIcon}>{causeItem.icon}</div>
                  <h3 className={styles.testName}>{index + 1}. {causeItem.cause}</h3>
                  <p className={styles.testDescription}>{causeItem.description}</p>
                  
                  {causeItem.warning && (
                    <div style={{ background: '#fef2f2', padding: '1rem', borderRadius: '8px', marginTop: '1rem', border: '1px solid #fecaca' }}>
                      <strong style={{ color: '#dc2626' }}>تحذير مهم:</strong>
                      <p style={{ margin: '0.5rem 0 0 0', color: '#7f1d1d', fontSize: '0.9rem' }}>{causeItem.warning}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnosis Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>طيب اتأكد ازاى ان انا عندى انسداد فى القنوات المنوية ؟</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  خلينى اقولك فى الاول ان فى اسباب تانيه غير انسداد القنوات المنوية ممكن{' '}
                  <Link href="/fertility/azoospermia" style={{color: '#3b82f6', textDecoration: 'underline'}}>
                    تسبب انعدام الحيوانات المنوية
                  </Link>
                  {' '}تقدر تتعرف عليها اكتر من هنا.
                </p>
                <p>
                  <strong>بس اللى يأكد ان انعدام الحيوانات المنوية سببه انسداد فى القنوات المنوية هو:</strong>
                </p>
                <ul style={{textAlign: 'right', color: '#475569', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  <li>لما يكون عندنا انعدام في الحيوانات المنوية</li>
                  <li>و نلاقى الخصية حجمها كويس</li>
                  <li>وكمية السائل المنوي قليلة</li>
                  <li>والهرمونات زى هرمون الذكورة وهرمونات الغدة النخامية نسبتهم طبيعية</li>
                </ul>
                <p>
                  فكل ده بيقول ان الخصية بتنتج حيوانات منوية، لكن الحيوانات المنوية دى مش بتخرج مع القذف يبقى كده فى انسداد، مش اى سبب تانى، 
                  وعشان نتأكد اكتر بناخد عينة من الخصية ونتأكد ان فيها حيوانات منوية بكميات كبيرة.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>🔍</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Section */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>علاج انسداد القنوات المنوية</h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <h3>تعالوا دلوقتى بقى نتكلم عن علاج انسداد القنوات المنوية:</h3>
                <p>
                  عشان نعرف ايه هو العلاج، لازم الاول نعمل اشعه عشان نتاكد من مكان الانسداد و نعرف درجته ايه، 
                  و نشوف هل هنقدر نصلحة والحيوانات المنوية بعد كده هتخرج بصورة طبيعية مع القذف، 
                  ولا هنحتاج نعمل{' '}
                  <Link href="/surgeries/testicular-biopsy/microscopic-tese" style={{color: '#3b82f6', textDecoration: 'underline'}}>
                    عينة ميكروسكوبية
                  </Link>
                  {' '}و نطلع حيوانات منويه و نعمل بيها حقن مجهرى.
                </p>
                
                <h3>خيارات العلاج:</h3>
                <ul>
                  <li><strong>التسليك الجراحي:</strong> لو الانسداد كان فى قناة القذف او فى الحبل المنوى وقتها ممكن نعمل تسليك و نشيل الجزء المسدود و نوصلهم تانى ببعض و تقدر بعد كده الحيوانات تخرج عادى فى القذف</li>
                  <li><strong>العينة الميكروسكوبية:</strong> أما لو كان الانسداد فى البربخ او الخصية أو بسبب عيب خلقى زى ان مفيش اصلا وعاء ناقل أو حبل منوي، وقتها مش بنقدر نعمل تسليك، وبنعمل عينة ميكروسكوبية عشان نستخرج الحيوانات المنوية و نعمل حقن مجهرى</li>
                </ul>
              </div>
              
              <div className={styles.procedureSteps}>
                <h3>للحمل التاني:</h3>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>💉</div>
                    <div className={styles.stepContent}>
                      <h4>سحب بالإبرة</h4>
                      <p>
                        و لو حبينا يحصل حمل تانى ممكن بعد كدا نعمل{' '}
                        <Link href="/surgeries/testicular-biopsy/testicular-aspiration" style={{color: '#3b82f6', textDecoration: 'underline'}}>
                          سحب عينه الحيوانات المنوية بالابره
                        </Link>
                        {' '}من الخصية على طول، وده بيكون اجراء بسيط و بيتعمل بتخدير موضعي مع كل محاولة حقن مجهري للزوجين
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>خيارات العلاج المختلفة</h2>
            <div className={styles.treatmentGrid}>
              {surgical_options.map((surgery, index) => (
                <div key={index} className={styles.treatmentCard}>
                  <h3 className={styles.treatmentTitle}>{surgery.surgery}</h3>
                  <p className={styles.treatmentDescription}>{surgery.description}</p>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1e293b' }}>دواعي الإجراء:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {surgery.indications.map((indication, idx) => (
                        <li key={idx} style={{ padding: '0.25rem 0', color: '#475569', paddingRight: '1rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', right: 0, color: '#3b82f6' }}>•</span>
                          {indication}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.treatmentDetails}>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>التقنية:</span>
                      <span className={styles.detailValue}>{surgery.technique}</span>
                    </div>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>مدة العملية:</span>
                      <span className={styles.detailValue}>{surgery.duration}</span>
                    </div>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>نسبة النجاح:</span>
                      <span className={styles.detailValue}>{surgery.success}</span>
                    </div>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>فترة التعافي:</span>
                      <span className={styles.detailValue}>{surgery.recovery}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Microsurgical Technique */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>الجراحة الميكروسكوبية للقنوات المنوية</h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <h3>لماذا الجراحة الميكروسكوبية؟</h3>
                <p>
                  الجراحة الميكروسكوبية هي المعيار الذهبي لعلاج انسداد القنوات المنوية. 
                  استخدام الميكروسكوب الجراحي يوفر دقة عالية ونسب نجاح أفضل.
                </p>
                
                <h3>مميزات التقنية الميكروسكوبية:</h3>
                <ul>
                  <li>دقة عالية في ربط القنوات الدقيقة</li>
                  <li>تقليل خطر تسرب الحيوانات المنوية</li>
                  <li>نسب نجاح أعلى من الجراحة التقليدية</li>
                  <li>تقليل المضاعفات والالتهابات</li>
                  <li>شفاء أسرع ونتائج أفضل</li>
                </ul>
              </div>
              
              <div className={styles.procedureSteps}>
                <h3>خطوات العملية:</h3>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                      <h4>التخدير والتحضير</h4>
                      <p>تخدير عام وتحضير المنطقة الجراحية</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <h4>تحديد موقع الانسداد</h4>
                      <p>فحص القنوات تحت الميكروسكوب</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <h4>الربط الميكروسكوبي</h4>
                      <p>ربط القنوات بخيوط دقيقة جداً</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                      <h4>اختبار التدفق</h4>
                      <p>التأكد من سلامة الربط وعدم التسرب</p>
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
                <h3>كريم - 30 سنة</h3>
                <p>
                  "كان لديّ انسداد في الأسهر بعد عملية فتق. الجراحة الميكروسكوبية أعادت توصيل القنوات 
                  وظهرت الحيوانات المنوية بعد 3 شهور، وحدث الحمل طبيعياً."
                </p>
              </div>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>✅</div>
                <h3>أحمد - 27 سنة</h3>
                <p>
                  "وُلدت بدون أسهر، ولكن د. أسامة تمكن من استخراج الحيوانات المنوية من البربخ 
                  ونجح الحقن المجهري من أول محاولة."
                </p>
              </div>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>✅</div>
                <h3>محمد - 35 سنة</h3>
                <p>
                  "انسداد في القنوات القاذفة كان يمنع خروج السائل المنوي. 
                  عملية فتح القنوات بالمنظار حلت المشكلة وعاد كل شيء طبيعياً."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Options */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>البدائل في حالة فشل الجراحة</h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <h3>استخراج الحيوانات المنوية:</h3>
                <ul>
                  <li>PESA - من البربخ بالإبرة</li>
                  <li>MESA - من البربخ جراحياً</li>
                  <li>TESA - من الخصية بالإبرة</li>
                  <li>TESE - من الخصية جراحياً</li>
                </ul>
                
                <h3>الحقن المجهري:</h3>
                <ul>
                  <li>حقن الحيوانات المنوية مباشرة في البويضة</li>
                  <li>نسب نجاح عالية مع الحيوانات المنوية المستخرجة</li>
                  <li>إمكانية تجميد الحيوانات المنوية للاستخدام المستقبلي</li>
                </ul>
              </div>
              
              <div className={styles.procedureSteps}>
                <h3>متى نلجأ للبدائل؟</h3>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                      <h4>فشل الجراحة</h4>
                      <p>عدم عودة الحيوانات المنوية بعد الجراحة</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <h4>انسداد معقد</h4>
                      <p>انسداد في عدة مواقع أو تليف شديد</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <h4>عوامل أخرى</h4>
                      <p>عوامل نسائية تستدعي الحقن المجهري</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                      <h4>اختيار المريض</h4>
                      <p>تفضيل المريض للحقن المجهري مباشرة</p>
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
              <h2>لا تفقد الأمل في تحقيق حلم الأبوة</h2>
              <p>
                وفى الاخر خلينى اقولك ان انعدام الحيوانات المنويه مش حاجة ملهاش علاج، فبلاش تفقد الامل فى انك تبقى أب، 
                و لو قررت تبدأ علاج تقدر تتواصل مع فريقنا الطبى، هيحددولك معاد مع دكتور اسامه محمد البكل مدرس واستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب القصر العيني عشان نبدء مع بعض رحلة علاج بسيطة هتنتهى بأنك تبقى اب بأذن الله.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز استشارة الآن
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
              <Link href="/fertility/azoospermia" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🔬</span>
                <h3>إنعدام الحيوانات المنوية</h3>
                <p>أسباب أخرى لانعدام الحيوانات المنوية غير الانسداد</p>
              </Link>
              <Link href="/surgeries/testicular-biopsy/microscopic-tese" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🔍</span>
                <h3>العينة الميكروسكوبية للخصية</h3>
                <p>استخراج الحيوانات المنوية عند فشل التسليك الجراحي</p>
              </Link>
              <Link href="/surgeries/testicular-biopsy/testicular-aspiration" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>💉</span>
                <h3>سحب الحيوانات المنوية بالإبرة</h3>
                <p>إجراء بسيط للحمل الثاني بتخدير موضعي</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
