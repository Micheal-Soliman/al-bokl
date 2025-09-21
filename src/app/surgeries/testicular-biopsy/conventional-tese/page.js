import MainLayout from '../../../components/layout/MainLayout';
import { generateSEOMetadata } from '../../../../lib/seo/articleSEO';
import Link from 'next/link';
import styles from '../../surgical-condition.module.css';

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "عينة الخصية العادية - الدكتور أسامة البكل",
    description: "عينة الخصية العادية هي عملية بنلجا ليها لما بيكون عندنا انعدام تام في الحيوانات المنوية في السائل المنوي ، وبنعملها علشان نستخرج بيها حيوانات منوية من الخصية ونعمل بيها حقن مجهري ونحل مشكلة تأخر الإنجاب.",
    keywords: ["عينة الخصية العادية", "انعدام الحيوانات المنوية", "الحقن المجهري", "تأخر الإنجاب", "دوالي الخصية", "د أسامة البكل"],
    canonical: "/surgeries/testicular-biopsy/conventional-tese",
    image: "/images/surgeries/conventional-tese.webp"
  });
}

export default function ConventionalTESEPage() {

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
              <span>عينة الخصية العادية</span>
            </div>
            <h1 className={styles.heroTitle}>عينة الخصية العادية</h1>
            <p className={styles.heroDescription}>
              عينة الخصية هى عملية بسيطة بنفتح فيها كيس الصفن و الخصية و بناخد منها نسيج او اكتر، و نبدء ندور فى النسيج ده على حيوانات منوية سليمة نقدر نعمل بيها حقن مجهرى، وده فى حالة ان يكون عندنا انعدام للحيوانات المنوية فى السائل المنوى.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>احتمالات للنتائج</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>30-60 دقيقة</span>
                <span className={styles.statLabel}>مدة العملية</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>بسيطة</span>
                <span className={styles.statLabel}>عملية بسيطة</span>
              </div>
            </div>
          </div>
        </section>

        {/* When is the operation needed */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>طيب امتى اقول ان العملية هى الحل لانعدام الحيوانات المنوية فى السائل المنوى</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>لو عملنا تحليل للسائل المنوى اكتر من مره و كانت النتيجة انعدام تام فى الحيوانات المنوية فى السائل المنوى.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>لو كان عندنا انسداد فى مخرج السائل المنوى، و هنا مهم اننا نعرف هل الانسداد ده نقدر نصلحه بعملية بسيطة، ولا الانسداد ملهوش علاج زى ان الوعاء الناقل مش متخلق اصلا، فوقتها لازم ناخد عينة من الخصية و ندور فيها على حيوانات منوية نقدر نعمل بيها حقن مجهرى.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>لو عملنا تحليل هرمونى ولقينا عندنا خلل فى الهرمونات، زى نقص فى هرمونات الغده النخامية (FSH - LH) و هنا الخلل ده هيكون مأثر على انتاج الخصية للحيوانات المنوية، و ده معناه اننا لازم فى الاول ناخد علاج هرمونى نعوض بيه نفص هرمون (FSH - LH)، لمده متقلش عن 3 شهور عشان الخصية ترجع تنشط و تنتج حيوانات والعلاج هنا:</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hormonal Treatment Results */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <div className={styles.causesGrid}>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>✅</span>
                  <h3 className={styles.causeType}>نتيجة إيجابية للعلاج الهرموني</h3>
                </div>
                <p className={styles.causeDescription}>
                  اما انه هيجيب نتيجة و هنلاقى ان بدء يطلع حيوانات منوية فى السائل المنوى.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>🎯</span>
                  <h3 className={styles.causeType}>تحسين فرص نجاح العملية</h3>
                </div>
                <p className={styles.causeDescription}>
                  او ان هنكون لسه محتاجين نعمل العملية بس وقتها العلاج اللى هنكون اخدناه هيكون زود من فرص اننا نلاقي حيوانات منوية في عينة الخصية.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ultrasound and Varicocele Cases */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>لو عملنا اشعه على الخصية و كان عندنا</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>دوالى على الخصية من الدرجة التانية او التالتة، و قتها لازم الاول نعمل عملية بسيطة نربط فيها الدوالى، لان الدوالى بتأثر على انتاج الخصية للحيوانات المنوية، و بعد عمليه الدوالى ممكن اننا ناخد علاج هرمونى ينشط الخصية و يخليها تنتج حيوانات منوية اكتر، و هنا اما الحيوانات المنوية هتطلع فى السائل المنوى و الحمل هيحصل بشكل طبيعى، او اننا هنكون لسه محتاجين نعمل عينه الخصية، ووقتها هنكون بردو استفدنا من العلاج لانه هيكون زود من فرص اننا نلاقي حيوانات منوية نعمل بيها الحقن المجهرى و نجمد الباقى</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>او كان فى مشكله فى الخصية نفسها وده بيخليها متقدرش اصلا تنتج حيوانات منوية او بتنتجها بس بكميات قليله، وقتها هناخد علاج هرمونى نحاول اننا ننشط بيه الخصية على قد ما نقدر و نخليها تنتج حيوانات منوية اكتر، و هنا فى نسبة مش قليلة من المرضى بتبدأ الخصية تستجيب للعلاج بشكل كبير و تطلع حيوانات منوية فى السائل المنوى وقت القذف، ولو ده محصلش وقتها لازم نفتح الخصية وناخد منها عينة ندور فيها على الحيوانات المنويه.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Possibilities When Opening Testis */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>طيب اى الاحتمالات اللى بتكون عندنا لو قررنا نفتح الخصية ؟</h2>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '2rem', color: '#475569' }}>
              بيكون قدامنا 3 احتمالات:
            </p>
            <div className={styles.causesGrid}>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>✅</span>
                  <h3 className={styles.causeType}>حيوانات منوية سليمة محبوسة</h3>
                </div>
                <p className={styles.causeDescription}>
                  اما اننا بنلاقى حيوان منوى سليم بس مش بيقدر انه يخرج بره الخصية، وقتها بناخد النسيج و بنخرج منه الحيوانات المنوية على طول و بنعمل الحقن المجهرى.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>⚠️</span>
                  <h3 className={styles.causeType}>حيوانات منوية غير مكتملة النمو</h3>
                </div>
                <p className={styles.causeDescription}>
                  او اننا بنلاقى حيوانات منوية بس مش مكتملة النمو، و ده بسبب مشكله فى الخصية خلت الحيوان المنوى نموه ميكملش و يقف عند مرحلة معينه، و فى الحالة دى احنا مش بناخد اى نسيج من الخصية لاننا مش هنستفاد بيه، لان الحيوان المنوى فى الوضع ده مش هيخصب البويضة، فاللى بنعمله هنا اننا هناخد علاج لمدة 3 او 6 شهور و هنا نسبة كبيرة من الحالات بتستجيب على العلاج و لما بنفتح مره تانية بنقدر اننا نلاقى حيوان منوى مكتمل.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>❌</span>
                  <h3 className={styles.causeType}>عدم وجود خلايا أم</h3>
                </div>
                <p className={styles.causeDescription}>
                  اخر و اصعب حاجة ممكن نلاقيها، ان الخلايا الام اللى بتصنع الحيوانات المنوية متكونش موجوده اصلاّ، بس هنا بردو لسه قدمنا امل فى اننا ممكن نلاقى مكان تانى فى الخصية فيه بؤر منوية، بس قبل ما نفتح مكان تانى لازم الاول ناخد كورس علاجى لمده 6 شهور و بعدها نعيد العمليه، و يفضل هنا ان الاعادة تكون بالتفتيش الميكروسكوبى لان ده بيخلينا نوصل لكل الخصية و نحاول نشوف النسيج اللى فيه بؤر منوية و نطلع منه الحيوان المنوى.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Post-Operation Scenarios */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>لو لقينا حيوانات منوية، وقتها هيكون عندنا حلين</h2>
            <div className={styles.causesGrid}>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>🔬</span>
                  <h3 className={styles.causeType}>الحقن المجهري في نفس اليوم</h3>
                </div>
                <p className={styles.causeDescription}>
                  اما اننا بنعمل الحقن المجهرى فى نفس يوم العملية، وده عشان نقدر نعمله بنحتاج اننا نكون محضرين الزوجة، و تكون واخده العلاجات الهرمونية اللى بنشط بيها التبويض و الحالة دى انا عارف ان مرضى كتير مش بتفضلها خصوصاّ لو احنا مش متاكدين اننا هنلاقى حيوانات منوية، وده ممكن يحصل زى ما قولنا فى حالة ان المشكلة كانت فى الخصية نفسها و انتاجها للحيوانات المنوية، بس احيانا بنضطر اننا نعمل الحقن المجهرى بمجرد ما يطلع حيوان المنوى من الخصيه، وده سببه ان الحيوانات المنوية اللى بنلاقيها بتكون ضعيفة جدا، و دى عمرها ما هتستحمل التجميد.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>❄️</span>
                  <h3 className={styles.causeType}>التجميد والحقن المجهري لاحقاً</h3>
                </div>
                <p className={styles.causeDescription}>
                  لكن لو لقينا الحيوانات المنوية اللى خرجناها جودتها كويسه وقتها نقدر نعمل التجميد و نعمل الحقن المجهرى فى اى وقت، وده بيدينا كمان فرصه اننا نجمد حيوانات منوية اكتر عشان وقت ما نكون عاوزين طفل تانى نقدر اننا نستخدم الحيوانات اللى جمدناها و نعمل على طول الحقن المجهرى، و منحتجش نفتح الخصية تانى.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>🔄</span>
                  <h3 className={styles.causeType}>عدم العثور على حيوانات منوية</h3>
                </div>
                <p className={styles.causeDescription}>
                  لو ملاقيناش حيوانات منوية و ده وارد انه يحصل خصوصاّ لو السبب فى انعدام الحيوانات المنوية كان بسبب خلل هرمونى او مشكلة فى الخصية نفسها و محصلش استجابة للعلاج، وقتها احنا بنفتح الخصية و احنا مش متأكدين اذا كان فيها حيوانات منوية ولا لا، و كمان مش بنكون عرفين فين بالظبط مكان البؤر و الانسجة اللى هيكون فيها حيوانات منوية، بس لازم هنا تعرف ان لسه بردو قدامنا فرصة ناخد علاج تانى لمدة 6 شهور و نعيد العملية مره كمان.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Points */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>و دلوقتى خلينى اقولك على كام نقطة مهم جدا تعرفهم</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e40af', marginBottom: '1.5rem' }}>
                  مفيش قاعده ثابته ولا خطوات معينه بنمشيها مع كل المرضى، كل مريض الاجراء اللى بناخده معاه بيكون على حسب حالتة و اي المناسب ليه، و زى ماهو ماينفعش اننا نستعجل فى قرار العملية و نحاول نعالج السبب، فكمان تأخير العملية احياناّ بيكون مش فى مصلحتك و ممكن يضيع عليك فرصة انك تبقى اب، و عشان كده احياناّ ممكن نقرر اننا نعمل عينة الخصية من غير علاج، وده بيكون ليه حالات معينة زى:
                </p>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>لو عندنا انسداد او عيب خلقى فى القنوات المنوية مش هينفع يتعالج، يبقى وقتها لازم اعمل سحب للعينة على طول.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>لو سن الزوجة اكبر من 35 سنه فده معناه ان فرص الزوجة فى الانجاب بتقل، و مش هينفع نضيع وقت فى العلاج، وقتها لازم نلحق نعمل عملية عينة الخصية و نعمل الحقن المجهرى فورا</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>لو في فشل وظيفي بالخصية (صغر لحجم الخصيتين – ارتفاع هرمون FSH)، هنا بردو بنعمل العينة على طول و نحاول نلاقى نسيج فيه حيوانات منوية.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Important Notes */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <div className={styles.causesGrid}>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>⚠️</span>
                  <h3 className={styles.causeType}>العلاقة الجنسية والعملية</h3>
                </div>
                <p className={styles.causeDescription}>
                  عملية عينة الخصية ملهاش علاقة خالص بالقدرة و الرغبه الجنسية، لان بسمع من ناس ان قبل عينه الخصية العلاقة الجنسية كانت كويسة و بعد العملية بقت الرغبه الجنسية ضعيفة و الانتصاب كمان ضعيف فتبدء تفكر ان العملية هى السبب، لكن خلينى اقولك ان عينة الخصية مش بتأثر على القدرة الجنسية لاننا مش بنيجى جنب العضو الذكرى، الحالة الوحيده اللى ممكن عملية العينه فيها تضر القدره الجنسية، هى ان العمليه تكون اتعملت بطريقة غلط سببة ضرر كبير جدا لانسجة الخصية، و فى الحالة دى انتاج الخصية لهرمون الذكورة هيقل، و ده اللى ممكن يعمل ضعف جنسى، عشان كده مهم جدا نتأكد من خبرة الدكتور اللى هيعمل العملية، عشان ميحصلش اى مشكله للخصية بعد العملية
                </p>
              </div>
              <div className={styles.causeCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>🏥</span>
                  <h3 className={styles.causeType}>مكان إجراء العملية</h3>
                </div>
                <p className={styles.causeDescription}>
                  المكان اللى هنعمل فيه العمليه لازم يكون فيه مركز حقن مجهري ويقدر يتعامل مع العينه اول ما نطلعها من الخصية، و يقدر انه يعمل تجمد لو لقينا حيوانات منوية، عشان كده عملية عنية من الخصية مينفعش تتعمل في أي مستشفى عادية
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
                  فى النهاية لازم تعرف ان انعدام الحيوانات المنوية مش نهاية حلمك فى انك تبقى أب، لسه فى امل، بس لازم تكون عارف وضعك كويس عشان متمشيش رحلة علاج غلط متجبش نتيجة، و تحس بسببها ان خلاص مفيش فايده، لازم الاول نشخص سبب انعدام الحيوانات المنوية فى السائل المنوى صح، و منستعجلش العملية، ولو محتاجين علاج ناخده، و نعمل العملية فى وقتها المناسب، و بعد ما نطلع الحيوانات المنوية لازم نتعامل معاها صح و نعرف امتى ممكن نعمل تجميد و امتى مينفعش لازم نعمل حقن مجهرى على طول، عشان منضيعش نتيجة العملية و كل التعب اللى انت استحملته
                </p>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e40af', textAlign: 'center' }}>
                  فلو عاوز تبدأ رحلة علاجك صح تقدر تتواصل معانا، 01018874287 و تحدد معادك مع د/اسامة محمد البكل مدرس واستشاري طب وجراحة أمراض الذكورة و تأخر الإنجاب و الصحه الجنسية بطب القصر العينى، و نبدء مع بعض رحلة العلاج الصح اللى هتنتهى بأنك تبقى اب.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>ابدأ رحلة العلاج الصحيحة</h2>
              <p>
                عينة الخصية العادية قد تكون الحل المناسب لحالتك. 
                احجز استشارة مع د. أسامة البكل لتشخيص دقيق وخطة علاج مناسبة.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز استشارة متخصصة
                </Link>
                <Link href="tel:+201018874287" className={styles.secondaryBtn}>
                  اتصل الآن: 01018874287
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
              <Link href="/surgeries/testicular-biopsy/microscopic-tese" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🔬</span>
                <h3>التفتيش الميكروسكوبي</h3>
                <p>أحدث تقنية بدقة عالية ونسب نجاح أفضل</p>
              </Link>
              <Link href="/fertility/azoospermia" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🚫</span>
                <h3>انعدام الحيوانات المنوية</h3>
                <p>تعرف على أسباب وعلاج انعدام الحيوانات المنوية</p>
              </Link>
              <Link href="/surgeries/varicocele" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🩺</span>
                <h3>دوالي الخصية</h3>
                <p>علاج دوالي الخصية قبل عينة الخصية</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
