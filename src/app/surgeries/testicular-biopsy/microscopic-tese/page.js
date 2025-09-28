import MainLayout from "../../../components/layout/MainLayout";
import { generateSEOMetadata } from "../../../../lib/seo/articleSEO";
import Link from "next/link";
import styles from "../../surgical-condition.module.css";
import Image from "next/image";

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "اي هو التفتيش الميكروسكوبي للخصية ؟ - الدكتور أسامة البكل",
    description:
      "عملية التفتيش الميكروسكوبي داخل الخصية من ادق وافضل التقنيات اللي بنستخدمها عشان نستخرج بيها حيوانات منوية من الخصية ونستخدمها في الحقن المجهري عشان يكون عندنا اطفال ، اعرف خطوات إجراء العملية",
    keywords: [
      "التفتيش الميكروسكوبي",
      "عينة الخصية",
      "انعدام الحيوانات المنوية",
      "الحقن المجهري",
      "كلاينفلتر",
      "د أسامة البكل",
    ],
    canonical: "/surgeries/testicular-biopsy/microscopic-tese",
    image: "/images/surgeries/microscopic-tese.webp",
  });
}

export default function MicroscopicTESEPage() {
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
              <span>التفتيش الميكروسكوبي</span>
            </div>

            <section className={styles.heroSection}>
              <div className={styles.container}>
                <div className={styles.heroGrid}>
                  <div className={styles.heroImage}>
                    <Image
                      src="/correction.webp"
                      alt="دعامات العضو الذكري"
                      layout="responsive"
                      width={800}
                      height={600}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Why Microscopic Inspection is Most Accurate */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              و هنعرف حالا ليه التفتيش الميكروسكوبى يعتبر من ادق التقنيات
            </h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  و ده لان كل خصية بتتكون من 250 جزء و كل جزء بيكون فيه من
                  انبوبه الى 4 انابيب منوية و ده بيخلى المساحة و عدد الانابيب
                  اللى بندور فيها على حيوانات منوية كبير جدا، فالطريقة الوحيده
                  اللى نقدر نوصل بيها لكل الانابيب دى فى عملية واحده هى التفتيش
                  الميكروسكوبى.
                </p>
                <p>
                  ده غير اننا كمان بنقدر بسبب التكبير ده اننا نبعد خالص عن
                  الشرايين اللى بتغذى الخصية بالدم و بكده مش هيكون فى نزيف و لا
                  ضرر فى الخصية بعد العملية.
                </p>
                <p>
                  ده غير كمان ان التفتيش الميكروسكوبى بيخلينا نكبر الجزء اللى
                  بنشتغل فيه من 15 – 40 ضعف عن الطبيعى، و بكده هنقدر اننا نميز
                  كويس جدا الانسجة و الانابيب المنتفخة اللي احتمال وجود حيوانات
                  منوية فيها بيكون اكبر و نبعد عن الانابيب المنكمشة اللي احتمال
                  وجود حيوانات منوية فيها بيكون اقل بكتير وده هيفدنا فى حاجتين:
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>🔬</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <div className={styles.causesGrid}>
              <div className={styles.causeCard}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>🎯</span>
                  <h3 className={styles.causeType}>
                    احتمالية عالية لوجود حيوانات منوية
                  </h3>
                </div>
                <p className={styles.causeDescription}>
                  ان النسيج اللى احنا هنطلعة احتمالية وجود حيوانات حيوانات منوية
                  فيه كبير، وده اللى بيضمن نجاح العملية.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>🛡️</span>
                  <h3 className={styles.causeType}>
                    المحافظة على أنسجة الخصية
                  </h3>
                </div>
                <p className={styles.causeDescription}>
                  بيخلينا مناخدش انسجة كتير من الخصية، لان زى ماقولنا بنبقى
                  قادرين نحدد مكان النسيج اللى فيه انابيب منتفخة واحتمال كبير
                  يكون فيها حيوانات منوية، و كمان بيخلينا نقدر نسحب عدد انابيب
                  قليل و مش بنحتاج اننا نقص النسيج كله، وبكده نكون اخدنا العينه
                  اللى محتاجنها و كمان حافظنا على انسجة الخصية، لان الخصية مش
                  بيكون عندها القدره انها تجدد او تنتج الانسجه دى مره تانية.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How the Operation is Performed */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              طيب بعد ما عرفنا فوايد التفتيش الميكروسكوبى و ليه يعتبر من ادق
              التقنيات اللى ممكن نعمل بيها عينة الخصية، تعالوا دلوقتى نعرف ازاى
              العمليه بتم ؟
            </h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>العملية هنا نقدر نعملها ببنج نصفى او كلى.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>
                      و بنعمل فتحة صغيرة جداّ فى نص كيس الصفن، و بنخليه فى النص
                      عشان بعد الجرح ما يلتئم ميبانش ليه اى اثر، و بعد ما بنعمل
                      الفتحة بنبد نخرج الخصية بره كيس الصفن.
                    </p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>
                      بعد ما بنخرج الخصية بنبدء نعمل فيها فتحة طولية عشان نقدر
                      نشوف كل انسجة الخصية.
                    </p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>
                      و بنبدء بعد كده اننا نثبت الميكروسكوب على فتحة اللى
                      عملناها فى الخصية، ونبدء ندور على الانسجة اللى فيها انابيب
                      منوية منتفخة. و بعدين بنبدء اننا نخرج الانابيب المنتفخة من
                      غير ما نقص النسيج كلة زى ما قولنا من شويه.
                    </p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>
                      و بعدين نبعت الانابيب دى للمعمل يستخرج منها الحيوانات
                      المنوية، و بعد كده بيبدء يجهز الحيوانات المنوية اللى
                      هنلقيها للحقن المجهرى او للتجميد.
                    </p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>
                      و بعد كده بنقفل الجرح اللى عملاناه فى الخصية و بنرجعها
                      مكانها فى كيس الصفن و نقفل كيس الصفن بعد كده بغرز تجميلية.
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    color: "#1e40af",
                    marginTop: "2rem",
                  }}
                >
                  و بكده تكون العملية خلصت
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cases that Need Microscopic Inspection */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              و تعالوا دلوقتى نعرف اي هى الحالات اللى التفتيش الميكروسكوبى هو
              حلها الوحيد ؟
            </h2>
            <div className={styles.causesGrid}>
              <div className={styles.causeCard}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>🧬</span>
                  <h3 className={styles.causeType}>حالات الكلاينفلتر</h3>
                </div>
                <p className={styles.causeDescription}>
                  لان اصلا حجم الخصية بيكون صغير جدا فمش هينفع اننا كمان ناخد
                  منة نسيج، الافضل هنا اننا نعمل تفتيش ميكروسكوبى لان زى ما
                  قولنا احنا بنقدر اننا نسحب بس الانابيب المنتفخة بس من غير ما
                  نقص النسيج.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>🔄</span>
                  <h3 className={styles.causeType}>
                    الحالات التي فشلت عينات سابقة
                  </h3>
                </div>
                <p className={styles.causeDescription}>
                  كل الحالات اللى عملت قبل كده عينة خصية بالابره او بالجراحة و
                  مقدرناش اننا نلاقى فى العينة حيوانات منوية، يفضل اننا نعملها
                  فى المرة التانية بالتفتيش الميكروسكوبى و نفحص الخصية كويس عشان
                  نضمن اكتر نجاح العملية.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>🔍</span>
                  <h3 className={styles.causeType}>
                    عدم وجود بؤر منوية في أجزاء من الخصية
                  </h3>
                </div>
                <p className={styles.causeDescription}>
                  و فى حالة ان فى اجزاء من الخصية مفيهوش بؤر منويه، وقتها عشان
                  نقدر ندور فى كل الخصية لازم نعمل التفتيش الميكروسكوبى، لان ده
                  اخر امل لمريض معندهوش الخلايا الام اللى بتصنع الحيوانات
                  المنوية، عشان كده لازم نتأكد و ندور كويس فى كل نسيج فى الخصية.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.divider}>
          <div className={styles.container}>
            <h3>
              ولو عايز تعرف اكتر عن حالات انعدام الحيوانات المنوية اللي حلها
              الوحيد هو التفتيش الميكروسكوبي اسمع الفيديو ده من الدكتور أسامة
              محمد البكل…….
            </h3>
            <div className={styles.videoWrapper}>
              <video
                className={styles.video}
                controls
                src="https://res.cloudinary.com/dvbusrvgi/video/upload/v1759057269/microscopic_ydv8k9.mp4"
              >
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
            </div>
          </div>
        </section>
        {/* How to Ensure Operation Success */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>طب ازاى اضمن نجاح العملية ؟</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>
                      لازم فى الاول نعمل تحليل للسائل المنوى و يفضل انه يتعمل
                      اكتر مره، و يكون فى وقت بين التحليلين على الاقل اسبوعين،
                      عشان نتأكد ان فى انعدام فعلا للحيوانات المنوية فى السائل
                      المنوى.
                    </p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>
                      لازم نعمل تحليل جينى خصوصاّ لو عملنا قبل كده تفتيش
                      ميكروسكوبى و فشل، لان بعض المشاكل الجينية مش بيكون ليها
                      علاج للأسف وفرص اننا نلاقي حيوانات منوية في التفتيش بتبقى
                      صفر، عارف ان دى حاجة صعبه، بس هيكون احسن اننا نعرف عشان لو
                      العمليه مش هتجيب نتيجة يبقى وفرنا على نفسنا تعب و تكاليف
                      مادية للعلاج والعملية.
                    </p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>
                      و لازم اننا نكون مطمنين ان الخصية وضعها كويس من ناحية:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hormonal Requirements */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>الهرمونات</h2>
            <div className={styles.causesGrid}>
              <div className={styles.causeCard}>
                <p className={styles.causeDescription}>
                  بمعنى اننا لازم نعمل تحليل للهرمونات، و لو لقينا اى نقص فى
                  الهرمونات المسؤولة عن انتاج الحيوانات المنوية زى هرمون (FSH –
                  LH) او هرمون الذكوره، فكده لازم قبل ما نعمل التفتيش
                  الميكروسكوبى نعوض الاول نقص الهرمونات دى بعلاج هرمونى لمده
                  متقلش عن 3 شهور و هو ده الوقت اللى بتحتاجة الخصية عشان تنتج
                  حيوانات منوية، و بعدين نعيد تحليل الهرمونات مره تانية عشان
                  نطمن على نسبة الهرمونات بعد العلاج، و كمان هنعيد تحليل السائل
                  المنوى مره تانية لان فى حالات بتستجيب للعلاج و بتبدء تطلع
                  حيوانات منوية مع السائل المنوى وقت القذف و لو ده حصل مش هنكون
                  اصلاّ محتاجين نعمل العملية، اما لو كانت نتايج تحليل السائل
                  المنوى لسه بتوضح ان فى انعدام للحيوانات المنوية فى السائل
                  المنوى بعد العلاج، فوقتها بنعمل العمليه بس و احنا مطمنين اننا
                  ظبطنا الهرمونات، وده طبعاّ هيزود من فرص نجاح العملية.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Requirements */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              شروط إضافية لضمان نجاح العملية
            </h2>
            <div className={styles.causesGrid}>
              <div className={styles.causeCard}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>🩺</span>
                  <h3 className={styles.causeType}>علاج دوالي الخصية</h3>
                </div>
                <p className={styles.causeDescription}>
                  لو كان عندنا دوالى على الخصية من الدرجة التانية او التالته،
                  فالدوالى اصلا بتقلل من انتاج الخصية للحيوانات المنويه، و عشان
                  كده لو عالجناها بعمليه بسيطة، ده هيرجع الخصية تنتج تانى
                  حيوانات منوية و بكده ممكن يطلعلنا حيوانات منوية فى السائل
                  المنوى و منحتاجش نعمل العملية، و فى حالة ان مطلعش حيوانات
                  منوية فى السائل المنوى بعد عملية الدوالى، فاحنا هنا هنكون
                  استفدنا ان الخصية نشطة عن الاول و بتنتج حيوانات منوية و وضع
                  هرمون الذكوره اللى اتأثر بسبب ان الخصية مكانتش نشطة وقت
                  الدوالى هيرجع لمعدلاته الطبيعية، و كل ده بيزود فرص اننا نلاقى
                  حيوانات منوية بأعداد كويسة و جودتها كمان هتكون كويسة جدا، وقت
                  التفتيش الميكروسكوبى.
                </p>
              </div>
              <div className={styles.causeCard}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>☢️</span>
                  <h3 className={styles.causeType}>
                    بعد العلاج الكيميائي أو الإشعاعي
                  </h3>
                </div>
                <p className={styles.causeDescription}>
                  لو كنا بناخد اى علاج اشعاعى او كيميائى لازم نستنى فتره قبل ما
                  نعمل التفتيش الميكروسكوبى متقلش عن 5 سنين من وقت اخر جلسة، لان
                  العلاج الكيميائى او الاشعاعى بيأثر على الخصية و على الحيوانات
                  المنوية ويفضل يبقى في فترة علاج تنشيطي هرموني للخصية قبل
                  التفتيش لمدة لا تقل عن 6 شهور، و كان من الافضل اننا نستخرج
                  الحيوانات المنوية و نجمدها قبل بداية العلاج الكيميائى او
                  الاشعاعى.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Requirements */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>متطلبات نجاح العملية</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>
                      لازم اللى يعمل العملية يكون عنده خبره كبيره جدا فى
                      الجراحات الميكروسكوبيه، عشان يقدر يميز الانابيب المنتفخة
                      اللي احتمال اكبر نلاقي فيها حيوانات منوية عن غيرها.
                    </p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>
                      عملية التفتيش الميكروسكوبى مينفعش يقل وقتها عن ساعة
                      لساعتين، وده مش عشان العمليه صعبه بالعكس دى سهله جدا، لكن
                      الوقت هنا عشان نكون فتشنا الخصيتين كويس جدا و قدرنا نوصل
                      لاكبر عدد من الانابيب المنوية اللى فيها حيوانات منوية،
                      عشان نعمل الحقن المجهرى و نجمد كمان عدد كبير من الحيوانات
                      المنوية عشان ماتحتجش تعمل عملية و تفتح الخصية فى كل مره
                      هتكون عاوز يبقى عندك طفل فيها.
                    </p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>
                      الميكروسكوب نفسه اللى بنستخدمة فى الجراحة لازم تكون كفائته
                      عالية جدا من ناحية الاضائة و التكبير و وضوح الصوره.
                    </p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>
                      لازم كمان المكان اللى هنعمل فيه العملية يكون فيه معمل اجنة
                      و يكون مجهز وفيه دكاتره عندهم خبرة عالية، عشان يستلم
                      العينة اول ما نطلعها و يبدأ ينتقى منها الحيوانات المنوية
                      اللى هنعمل بيها الحقن، و يجمد الحيوانات المنوية اللى
                      جودتها عالية.
                    </p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>
                      اخيراّ الخيوط اللى هنستعملها فى قفل الجرح لازم يكون
                      بمواصفات معينه عشان متتفاعلش مع انسجة الخصية و يسبب فيها
                      تليف وقت التأم الانسجة.
                    </p>
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
              <h2>التفتيش الميكروسكوبي - أمل جديد للإنجاب</h2>
              <p>
                التفتيش الميكروسكوبي هو أحدث وأدق التقنيات لاستخراج الحيوانات
                المنوية من الخصية. مع د. أسامة البكل، احصل على أفضل فرصة لتحقيق
                حلم الإنجاب بأحدث التقنيات والخبرة المتقدمة.
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
              <Link
                href="/fertility/azoospermia"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>🚫</span>
                <h3>انعدام الحيوانات المنوية</h3>
                <p>تعرف على أسباب وعلاج انعدام الحيوانات المنوية</p>
              </Link>
              <Link href="/surgeries/varicocele" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🩺</span>
                <h3>دوالي الخصية</h3>
                <p>علاج دوالي الخصية قبل التفتيش الميكروسكوبي</p>
              </Link>
              <Link
                href="/surgeries/testicular-biopsy/conventional-tese"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>✂️</span>
                <h3>عينة الخصية التقليدية</h3>
                <p>الطريقة التقليدية لأخذ عينة من أنسجة الخصية</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
