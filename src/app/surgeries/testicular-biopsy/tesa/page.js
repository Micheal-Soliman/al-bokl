import MainLayout from '../../../components/layout/MainLayout';
import { generateSEOMetadata } from '../../../../lib/seo/articleSEO';
import Link from 'next/link';
import styles from '../../surgical-condition.module.css';

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "سحب العينة بالإبره - الدكتور أسامة البكل",
    description: "سحب العينة من الخصية بالابرة تعتبر من ابسط الطرق اللي بنعملها علشان نستخرج بيها حيوانات منوية من الخصية فى الحالات اللي عندها تاخر في الانجاب وبتعاني من انعدام الحيوانات المنوية في السائل المنوي…",
    keywords: ["سحب العينة بالإبرة", "انعدام الحيوانات المنوية", "انسداد القنوات المنوية", "الحقن المجهري", "تأخر الإنجاب", "د أسامة البكل"],
    canonical: "/surgeries/testicular-biopsy/tesa",
    image: "/images/surgeries/tesa.webp"
  });
}

export default function TESAPage() {

  return (
    <MainLayout>
      <div className={styles.surgicalPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link href="/">الرئيسية</Link>
              <span>/</span>
              <Link href="/surgeries">العمليات الجراحية</Link>
              <span>/</span>
              <Link href="/surgeries/testicular-biopsy">عينات الخصية</Link>
              <span>/</span>
              <span>سحب العينة بالإبرة</span>
            </div>
            <h1 className={styles.heroTitle}>سحب العينة بالإبره</h1>
            <p className={styles.heroDescription}>
              سحب الحيوانات المنوية بالابره من الخصية تعتبر طريقة من الطرق اللى بنقدر نخرج بيها الحيوانات المنوية من الخصية، و بنلجأ للأجراء ده لما يكون عندنا انعدام للحيوانات المنوية فى السائل المنوى، و يعتبر سحب الحيوانات المنوية من الخصية بالابره من ابسط الاجراءات اللى ممكن نعملها فى حالات انعدام الحيوانات المنوية فى السائل المنوى، و عشان تعرف قد ايه الموضوع بسيط خلينى اقولك انه بيبقى شبه سحب عينة الدم العادية
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10 دقائق</span>
                <span className={styles.statLabel}>مدة العملية</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>بسيط</span>
                <span className={styles.statLabel}>مثل سحب عينة الدم</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>ساعتين</span>
                <span className={styles.statLabel}>العودة للمنزل</span>
              </div>
            </div>
          </div>
        </section>

        {/* How the Operation is Performed */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>و دلوقتى تعالوا نعرف ازاى العملية بتم</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  في البداية بنركب كانيولا فى الجزء اللى هيتسحب من العينة، و بعدين نركب فيها سرنجة، و السرنجة دى بيكون فيها محلول معين عشان يغذى الحيوانات المنوية و يفضل محافظ عليها، و بعد كده بنفضل نخرج الكانيولا و ندخلها اكتر من مره و الحركة دى هى اللى بتطلعلنا الانسجة اللى هيكون فيها الحيوانات المنوية من الخصية، و عشان متكونش قلقان من كل اللى اتكلمنا فيه دة خلينى اقولك ان:
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Operation Benefits */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <div className={styles.causesGrid}>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>⏱️</span>
                  <h3 className={styles.causeType}>عملية بسيطة وسريعة</h3>
                </div>
                <p className={styles.causeDescription}>
                  العمليه بسيطة جدا، مدتها مش بتزيد عن 10 دقايق.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>💉</span>
                  <h3 className={styles.causeType}>تخدير بسيط</h3>
                </div>
                <p className={styles.causeDescription}>
                  نقدر نعملها ببنج نصفى او موضعى، و كمان بناخد جرعة بنج موضعى فى الحبل المنوى عشان التخدير يفضل معاك كمان لبعد العملية بفتره عشان متكونش حاسس بأى الم.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>🎯</span>
                  <h3 className={styles.causeType}>عينات متعددة</h3>
                </div>
                <p className={styles.causeDescription}>
                  بنقدر فى نفس العملية نسحب عينة من اكتر من مكان و ده بيضمن اننا نوصل لحيوانات منوية اكتر.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>🚫</span>
                  <h3 className={styles.causeType}>بدون نزيف أو غرز</h3>
                </div>
                <p className={styles.causeDescription}>
                  مش بيكون فى نزيف او غرز لان اصلا مش بيكون فى اى جروح، كل الموضوع شكة ابره و كمان مش بتكون حاسس بيها لان زى ما قولنا بنكون واخدين جرعة بنج.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>✅</span>
                  <h3 className={styles.causeType}>تعافي سريع</h3>
                </div>
                <p className={styles.causeDescription}>
                  بعد العمليه مش بيكون فى تورم فى الخصية، ولا بيكون فى اى علامات على كيس الصفن لاننا زى ما قولنا مش بيكون فى اى جرح.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>💊</span>
                  <h3 className={styles.causeType}>ألم بسيط</h3>
                </div>
                <p className={styles.causeDescription}>
                  و كمان الالم اللى هنحس بيه بعد ما يروح تأثير البنج بسيط جدا، هيروح بعد ما ناخد جرعة بسيطة من المسكن.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>🏠</span>
                  <h3 className={styles.causeType}>عودة سريعة للحياة الطبيعية</h3>
                </div>
                <p className={styles.causeDescription}>
                  وبنقدر اننا نروح بعد العمليه بساعتين. وكمان نقدر اننا ننزل شغلنا بعد العملية بيوم.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Have the Operation */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>طيب بما ان العملية بسيطة اوى كده ده معناه ان اى حد يقدر يعملها ؟</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#dc2626', marginBottom: '1.5rem' }}>
                  الاجابة هنا لا، مش اى مريض انعدام حيوانات منوية يقدر انه يعمل عمليه سحب للحيوانات المنوية بالابره فى شوية شروط لازم انها تتوفر الاول عشان نقدر نعمل العملية و نطلع منها بنتايج كويسة و كمان منضرش الخصية زى:
                </p>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>ان حجم الخصية لازم يكون طبيعى، يعنى لو عندنا متلازمة الكلاينفلتر منقدرش نعمل سحب للحيوانات المنوية بالأبره، لان حجم الخصية هنا بيكون صغير جدا، و هنا افضل اجراء ممكن نعمله عشان نستخرج حيوانات منوية هو التفتيش الميكروسكوبى.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>لو عندنا تليف شديد فى انسجة الخصية، وقتها بردو منقدرش نعمل العمليه، لان بسبب التليف مش هيطلع اى انسجة او حيوانات منوية فى الابره، و ممكن لو دخلنا و طلعنا الابره اكتر من مره نتسبب فى جرح للشرايين او الاورده.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>لو عندنا زياده فى نسبة هرمونات الغده النخامية، ده معناه ان الخصية فيها مشكلة و ممكن تكون مش بتنتج حيوانات منوية، وفى الحالة دى بنضطر نلجأ للتفتيش الميكروسكوبى او العينة العادية عشان ندور على الانسجة و الانابيب اللى ممكن يكون فيها حيوانات منوية.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Required Tests */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>وعشان كده لازم قبل ما ناخد قرار اننا هنعمل العملية، نحدد الاول السبب فى انعدام الحيوانات المنوية فى السائل المنوى، و عشان نحدد السبب هنحتاج اننا نعمل مجموعة فحوصات زى</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>لازم فى الاول نعمل تحليل للسائل المنوى اكتر من مرة والنتيجة تكون انعدام للحيوانات المنوية فى السائل المنوى فى كل مرة بنعمل فيها التحليل.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>و هنعمل كمان اشعة على الخصية عشان نتأكد من حجم الخصية، ووضع الدوره الدموية.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>و هنحتاج نعمل تحاليل هرمونية نقيم بيها وضع الهرمونات.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>وممكن كمان نحتاج تحليل جينى عشان نتأكد اننا معندناش اى خلل جيني زى متلازمة الكلاينفلتر اللى قولنا اننا منقدرش نعمل العملية لو هى عندنا.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suitable Cases */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>وتعالوا بقى دلوقتى نعرف اي هى الحالات اللى نقدر فيها نعمل سحب عينة بالابره</h2>
            <div className={styles.causesGrid}>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>🚧</span>
                  <h3 className={styles.causeType}>انسداد في القنوات المنوية</h3>
                </div>
                <p className={styles.causeDescription}>
                  لو عندنا انسداد فى القنوات المنوية، او ان الوعاء الناقل مش متخلق، وده معناه ان طريق خروج الحيوانات المنوية من الخصية مقفول و ده هيمنع خروج الحيوانات المنوية وقت القذف، وقتها هنحتاج اننا نسحب الحيوانات المنوية من الخصية على طول و نعمل بيها حقن مجرى.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>🧬</span>
                  <h3 className={styles.causeType}>تفتت المادة الوراثية</h3>
                </div>
                <p className={styles.causeDescription}>
                  لو بيحصل تفتت للمادة الوراثية في السائل المنوي فى الحالة دى الافضل اننا نعمل سحب للحيوانات المنوية من الخصية بالابره حتى لو الحيوانات المنوية بتطلع فى القذف، لان الحيوان المنوى و هو جوا الخصية مش بيتعرض لاى عوامل تأثر على المادة الوراثية.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>⚠️</span>
                  <h3 className={styles.causeType}>ضعف الانتصاب مع مشاكل الإنجاب</h3>
                </div>
                <p className={styles.causeDescription}>
                  لو عندنا اى مشكلة سببت ان ميحصلش حمل طبيعى، و مع المشكلة دى كان عندنا كمان ضعف انتصاب، وقتها هنحتاج نسحب عينة حيوانات منوية بالابره، لان ممكن فى يوم عمليه الحقن لمجهرى الزوج ميقدرش يجيب عينة سائل منوى.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>🦠</span>
                  <h3 className={styles.causeType}>ارتفاع نسبة الصديد</h3>
                </div>
                <p className={styles.causeDescription}>
                  لو يوم الحقن المجهري لقينا نسبة صديد مرتفعة فى عينة السائل المنوي وقتها مش هينفع نستخدم الحيوانات المنوية من القذف في الحقن المجهري ولازم نعمل سحب بالابرة من الخصية.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Message */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>في النهاية</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569', marginBottom: '1.5rem' }}>
                  فى النهاية لازم تعرف ان انعدام الحيوانات المنوية فى السائل المنوى له علاج، بس المهم اننا نعرف سببه، و نحدد الاجراء اللى هيكون مناسب لحالتك و نحدد امتى نعمل عينة بالإبرة، ولا عينة عادية، ولا الافضل اننا نعمل تفتيش ميكروسكوبى، لأن كل حالة ليها الإجراء المناسب ليها عشان نقدر اننا نطلع حيوانات منوية، و لازم تعرف ان احيانا مبنكنش محتاجين نعمل اى عملية كل اللى بنكون محتاجينه علاج بس، عشان كده لازم تفهم حالتك كويس و هل ليها علاج ولا الافضل العملية، و لو عملية اى هى العملية المناسبة ليك.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>سحب العينة بالإبرة - الحل الأبسط</h2>
              <p>
                سحب العينة بالإبرة من أبسط الطرق لاستخراج الحيوانات المنوية، خاصة في حالات الانسداد. 
                احجز استشارة مع د. أسامة البكل لتحديد إذا كانت هذه الطريقة مناسبة لحالتك.
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

        {/* Related Procedures */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>إجراءات ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link href="/fertility/vas-deferens-obstruction" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🚧</span>
                <h3>انسداد القنوات المنوية</h3>
                <p>تعرف على أسباب وعلاج انسداد القنوات المنوية</p>
              </Link>
              <Link href="/sexual-problems/erectile-dysfunction" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>⚠️</span>
                <h3>ضعف الانتصاب</h3>
                <p>علاج ضعف الانتصاب المصاحب لمشاكل الإنجاب</p>
              </Link>
              <Link href="/surgeries/testicular-biopsy/microscopic-tese" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🔬</span>
                <h3>التفتيش الميكروسكوبي</h3>
                <p>للحالات التي لا تناسبها الإبرة</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
