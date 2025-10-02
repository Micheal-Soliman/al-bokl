import MainLayout from "../../components/layout/MainLayout";
import { generateSEOMetadata } from "../../../lib/seo/articleSEO";
import Link from "next/link";
import styles from "../fertility-condition.module.css";
import Image from "next/image";

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "اي هو انسداد القنوات المنوية ؟ - الدكتور أسامة البكل",
    description:
      "القنوات المنوية اللي بتكون مسؤولة أن الحيوان المنوي يخرج من الخصية ويوصل إلى مهبل الزوجة لو كان فيها انسداد ، هتكون مشكلة كبيرة جدا ، وهتؤدي الى تاخر الانجاب ، تعالوا نعرف ايه هو انسداد القنوات المنوية وطرق علاجه.",
    keywords: [
      "انسداد القنوات المنوية",
      "البربخ",
      "الحبل المنوي",
      "الوعاء الناقل",
      "القناة القاذفة",
      "عينة ميكروسكوبية",
      "د أسامة البكل",
    ],
    canonical: "/fertility/vas-deferens-obstruction",
    image: "/images/fertility/vas-deferens-obstruction.webp",
  });
}

export default function VasDeferensObstructionPage() {
  // Sperm Journey Components
  const spermJourney = [
    {
      name: "الخصية",
      description:
        "رحلتنا بتبدأ من الخصية و دى مصنع الحيوانات المنويه، و الخصية دى بتتكون من أنابيب بيتصنع فيها الحيوانات المنوية و الانابيب دى كلها بتوصل بعد كده لمكان تانى اسمه البربخ.",
      icon: "🏭",
      color: "#0ea5e9",
    },
    {
      name: "البربخ",
      description:
        "البربخ ده هو الأنبوبة الاولى اللى بيتنقل ليها الحيوان المنوى بعد ما يكون اتصنع فى الخصية، و البربخ ده بيكون موجود ورا الخصية، و فى البربخ بيبدأ الحيوان المنوي و يكمل مراحل نموه ويتعلم الحركة لحد ما يوصل للوعاء الناقل أو الحبل المنوى.",
      icon: "🔄",
      color: "#06b6d4",
    },
    {
      name: "الوعاء الناقل والحبل المنوي",
      description:
        "و ده المكان اللى بتختلط فيه الحيوانات المنوية مع السائل المنوي اللى بتفرزه الحويصلة المنويه و البروستاتا، و بعدين يتجمعوا مع بعض فى قناة القذف وبعد كده يتضخو لمجرى البول عشان يحصل القذف.",
      icon: "🚛",
      color: "#8b5cf6",
    },
  ];

  // Obstruction Locations
  const obstructionLocations = [
    "في أنابيب الخصية",
    "أو في البربخ",
    "أو فى الوعاء الناقل",
    "أو في الحبل المنوي",
    "أو ممكن يكون فى القناة القاذفة",
    "أو فى مجرى البول",
  ];

  // Causes of Obstruction
  const obstructionCauses = [
    {
      type: "عوامل وراثية",
      description:
        "زى ان الحبل المنوى او الوعاء الناقل متخلقش اصلا سواء فى ناحية واحدة من الخصية أو على الناحيتين، بمعنى ان الحبل المنوى اللى بياخد الحيوانات المنوية من الخصية مش بيكون موجود، و بكده الحيوانات المنوية هتفضل في الخصية مش هتخرج لبره، و هنا هنلاحظ كمان ان كمية السائل المنوي نفسه اللى بتخرج فى وقت القذف بتكون قليله، لان الحويصلة المنوية بتكون ضعيفة.",
      warning:
        "لازم هنا ناخد بالنا من حاجة مهمة جدا ان اغلب الناس اللى بيكون الوعاء الناقل عندهم مش متخلق بيكون عندهم مشاكل فى الكلى و ممكن يكونوا مولودين بكليه واحده، عشان كده لو لقيت عندك مشكلة فى الوعاء الناقل لازم كمان تطمن على وضع الكلى عند دكتور متخصص.",
      icon: "🧬",
    },
    {
      type: "عيب خلقى",
      description:
        "زى ان البربخ مش موجود، او البربخ والحبل المنوى مش متوصلين ببعض، أو أن الوعاء الناقل فيه انسداد خلقى.",
      icon: "🔧",
    },
    {
      type: "التهاب او صديد فى مجرى البول",
      description:
        "ده بينزل على القنوات القاذفة و بيسدها فمبتنزلش الحيوان المنوى لمجرى البول.",
      icon: "🦠",
    },
    {
      type: "عملية فتق اربي",
      description:
        "لو كان و احنا صغيرين عندنا فتق اربي و عملنا العملية عند حد مش متخصص، ممكن يحصل بالغلط قطع أو ربط للحبل المنوي لان حجمة وقتها بيكون صغير جدا، و بكده هيبقى طريق الحيوان المنوي اتقفل ومش هيقدر يكمل طريقه و يخرج مع السائل المنوي.",
      icon: "✂️",
    },
    {
      type: "عملية قيله مائيه",
      description:
        "لو كان عندنا قيله مائيه وعملنا عملية، و حصل جرح في البربخ وقت العمليه، دة هيسبب انسداد، يخلى الحيوانات المنويه متطلعش للحبل المنوى.",
      icon: "💧",
    },
    {
      type: "الأمراض المنقولة جنسياّ",
      description:
        "لو اتصابنا بمرض من الأمراض المنقولة جنسياّ زى السيلان ده بيسبب انسداد فى الحبل المنوى او التهاب البربخ.",
      icon: "🚨",
    },
    {
      type: "التدخين والدرن",
      description:
        "و اخيراّ لو كنا بندخن شيشه بشراهة و جالنا بسببها الدرن، ده بيسبب انسداد في البربخ و الحبل المنوى.",
      icon: "🚬",
    },
  ];

  // Diagnostic Signs
  const diagnosticSigns = [
    "انعدام في الحيوانات المنوية",
    "الخصية حجمها كويس",
    "كمية السائل المنوي قليلة",
    "الهرمونات زى هرمون الذكورة وهرمونات الغدة النخامية نسبتهم طبيعية",
  ];

  // Treatment Options
  const treatmentOptions = [
    {
      condition: "لو الانسداد كان فى قناة القذف او فى الحبل المنوى",
      treatment:
        "ممكن نعمل تسليك و نشيل الجزء المسدود و نوصلهم تانى ببعض و تقدر بعد كده الحيوانات تخرج عادى فى القذف",
      icon: "🔧",
      color: "#10b981",
    },
    {
      condition:
        "لو كان الانسداد فى البربخ او الخصية أو بسبب عيب خلقى زى ان مفيش اصلا وعاء ناقل أو حبل منوي",
      treatment:
        "وقتها مش بنقدر نعمل تسليك، وبنعمل عينة ميكروسكوبية عشان نستخرج الحيوانات المنوية و نعمل حقن مجهرى",
      icon: "🔬",
      color: "#f59e0b",
    },
  ];

  return (
    <MainLayout>
      <div className={styles.conditionPage}>
        {/* Hero Section */}
        {/* <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link href="/">الرئيسية</Link>
              <span>/</span>
              <Link href="/fertility">تأخر الإنجاب</Link>
              <span>/</span>
              <span>انسداد القنوات المنوية</span>
            </div>
            <h1 className={styles.heroTitle}>انسداد القنوات المنوية</h1>
            <p className={styles.heroDescription}>
              لما الحمل بيتأخر و بنبدأ ندور على السبب، و نعمل تحليل للسائل
              المنوي عشان نعرف المشكله فين، و تيجى النتيجة انعدام في الحيوانات
              المنوية، وقتها الحاجة الوحيدة اللى بتيجى فى بالنا ان كده خلاص مش
              هيكون عندنا اطفال، بس خلينى اقولك ان تفكيرك غلط، و ان لسه فى امل
              ان يكون عندك طفل حتى لو نتيجة التحليل صفر حيوانات منويه، لو
              الاسباب اتشخصت صح و اتعالجت صح.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>6</span>
                <span className={styles.statLabel}>مواقع محتملة للانسداد</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>0</span>
                <span className={styles.statLabel}>
                  حيوانات منوية في التحليل
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>أمل في الإنجاب</span>
              </div>
            </div>
          </div>
        </section> */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.breadcrumb}>
                <Link href="/">الرئيسية</Link>
                <span>/</span>
                <Link href="/fertility">تأخر الإنجاب</Link>
                <span>/</span>
                <span>انسداد القنوات المنوية</span>
              </div>
            </div>
            <div className={styles.heroGrid}>
              <div className={styles.heroImage}>
                <Image
                  src="/obstruction.webp"
                  alt="مشاكل الخصية"
                  layout="responsive"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Introduction Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>انسداد القنوات المنوية</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  لما الحمل بيتأخر و بنبدأ ندور على السبب ، و نعمل تحليل للسائل
                  المنوي عشان نعرف المشكله فين ، و تيجى النتيجة انعدام في
                  الحيوانات المنوية ، وقتها الحاجة الوحيدة اللى بتيجى فى بالنا
                  ان كده خلاص مش هيكون عندنا اطفال ، بس خلينى اقولك ان تفكيرك
                  غلط ، و ان لسه فى امل ان يكون عندك طفل حتى لو نتيجة التحليل
                  صفر حيوانات منويه ، لو الاسباب اتشخصت صح و اتعالجت صح
                </p>
                <p>
                  فتعالوا كده نتكلم عن سبب مهم جدا من اسباب انعدام الحيوانات
                  المنوية و هو، انسداد القنوات المنوية، و عشان نفهم كويس يعنى
                  ايه انسداد القنوات المنوية، تعالوا الاول نعرف سوا رحلة الحيوان
                  المنوي.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>🚧</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sperm Journey Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>رحلة الحيوان المنوي</h2>
            <div className={styles.treatmentGrid}>
              {spermJourney.map((stage, index) => (
                <div
                  key={index}
                  className={styles.treatmentCard}
                  style={{
                    background: `linear-gradient(135deg, ${stage.color}20 0%, ${stage.color}40 100%)`,
                    border: `2px solid ${stage.color}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "2.5rem", marginLeft: "1rem" }}>
                      {stage.icon}
                    </span>
                    <h3
                      className={styles.treatmentTitle}
                      style={{ color: stage.color, margin: 0 }}
                    >
                      {stage.name}
                    </h3>
                  </div>
                  <div
                    className={styles.treatmentDescription}
                    style={{ fontSize: "1rem", lineHeight: "1.8" }}
                  >
                    {stage.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Obstruction Locations Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              المكان اللي بيحصل فيه انسداد
            </h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  احنا كده عرفنا الطريق الطبيعى اللى بيمشى فيه الحيوان المنوي من
                  الخصية لحد ما يخرج فى وقت القذف، و هنا لازم نفهم حاجه كويس
                  اننا عندنا حيوانات منوية و أن الخصية بتكون شغاله كويس جدا
                  مفيهاش اى مشكله، بس بسبب ان فى انسداد فى جزء من الطريق اللى
                  بيمشى فيه الحيوان المنوي من اول الخصية لمجرى البول الحيوان
                  المنوى مش بيطلع من الخصية وقت القذف، و الانسداد ده وارد انه
                  يبقى فى:
                </p>
                <div style={{ marginTop: "2rem" }}>
                  {obstructionLocations.map((location, index) => (
                    <div
                      key={index}
                      style={{
                        background: "#f0f9ff",
                        padding: "1rem",
                        margin: "0.8rem 0",
                        borderRadius: "8px",
                        border: "2px solid #0284c7",
                        borderRight: "6px solid #0284c7",
                        fontSize: "1rem",
                        color: "#0c4a6e",
                      }}
                    >
                      {location}
                    </div>
                  ))}
                </div>
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
                  <strong>سؤال مهم:</strong> و هنا لازم ناخد بالنا من حاجة مهمة
                  عشان كتير من الناس بتيجى تقولى يادكتور انا فى سائل بيطلع عندى
                  وقت القذف يبقى ازاى عندى انعدام في الحيوانات المنوية ؟
                </p>
                <p>
                  <strong>الإجابة:</strong> السائل المنوى، ده وهو إفراز طبيعي
                  تنتجه البروستاتا و الحويصلة المنوية، و وظيفته انه يغذي
                  الحيوانات المنوية و يسهل خروجها وقت القذف، اما الحيوانات
                  المنوية دى بيتم انتاجها فى الخصية.
                </p>
                <p>
                  <strong>الفرق المهم:</strong> و نفهم من ده ان الحيوان المنوي
                  بيخرج من مكان و السائل المنوي بيخرج من مكان تانى و هو
                  البرستاتا، و يختلطوا مع بعض وقت القذف و يكونوا السائل المنوي
                  بالحيوانات المنوية، واللى بيحصل لما بيكون فى انسداد فى القنوات
                  المنوية، ان الحيوانات المنويه مش بتخرج وقت القذف، اللى بيخرج
                  هو السائل المنوى بس.
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
            <h2 className={styles.sectionTitle}>
              اسباب انسداد القنوات المنوية
            </h2>
            <div className={styles.testsGrid}>
              {obstructionCauses.map((causeItem, index) => (
                <div key={index} className={styles.testCard}>
                  <div className={styles.testIcon}>{causeItem.icon}</div>
                  <h3 className={styles.testName}>
                    {index + 1}. {causeItem.type}
                  </h3>
                  <p className={styles.testDescription}>
                    {causeItem.description}
                  </p>

                  {causeItem.warning && (
                    <div
                      style={{
                        background: "#fef2f2",
                        padding: "1rem",
                        borderRadius: "8px",
                        marginTop: "1rem",
                        border: "1px solid #fecaca",
                      }}
                    >
                      <strong style={{ color: "#dc2626" }}>تحذير مهم:</strong>
                      <p
                        style={{
                          margin: "0.5rem 0 0 0",
                          color: "#7f1d1d",
                          fontSize: "0.9rem",
                        }}
                      >
                        {causeItem.warning}
                      </p>
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
            <h2 className={styles.sectionTitle}>
              طيب اتأكد ازاى ان انا عندى انسداد فى القنوات المنوية ؟
            </h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  خلينى اقولك فى الاول ان فى اسباب تانيه غير انسداد القنوات
                  المنوية ممكن{" "}
                  <Link
                    href="/fertility/azoospermia"
                    style={{ color: "#3b82f6", textDecoration: "underline" }}
                  >
                    تسبب انعدام الحيوانات المنوية
                  </Link>{" "}
                  تقدر تتعرف عليها اكتر من هنا.
                </p>
                <p>
                  <strong>
                    بس اللى يأكد ان انعدام الحيوانات المنوية سببه انسداد فى
                    القنوات المنوية هو:
                  </strong>
                </p>
                <ul
                  style={{
                    textAlign: "right",
                    color: "#475569",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  <li>لما يكون عندنا انعدام في الحيوانات المنوية</li>
                  <li>و نلاقى الخصية حجمها كويس</li>
                  <li>وكمية السائل المنوي قليلة</li>
                  <li>
                    والهرمونات زى هرمون الذكورة وهرمونات الغدة النخامية نسبتهم
                    طبيعية
                  </li>
                </ul>
                <p>
                  فكل ده بيقول ان الخصية بتنتج حيوانات منوية، لكن الحيوانات
                  المنوية دى مش بتخرج مع القذف يبقى كده فى انسداد، مش اى سبب
                  تانى، وعشان نتأكد اكتر بناخد عينة من الخصية ونتأكد ان فيها
                  حيوانات منوية بكميات كبيرة.
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
                  عشان نعرف ايه هو العلاج، لازم الاول نعمل اشعه عشان نتاكد من
                  مكان الانسداد و نعرف درجته ايه، و نشوف هل هنقدر نصلحة
                  والحيوانات المنوية بعد كده هتخرج بصورة طبيعية مع القذف، ولا
                  هنحتاج نعمل{" "}
                  <Link
                    href="/surgeries/testicular-biopsy/microscopic-tese"
                    style={{ color: "#3b82f6", textDecoration: "underline" }}
                  >
                    عينة ميكروسكوبية
                  </Link>{" "}
                  و نطلع حيوانات منويه و نعمل بيها حقن مجهرى.
                </p>

                <h3>خيارات العلاج:</h3>
                <ul>
                  <li>
                    <strong>التسليك الجراحي:</strong> لو الانسداد كان فى قناة
                    القذف او فى الحبل المنوى وقتها ممكن نعمل تسليك و نشيل الجزء
                    المسدود و نوصلهم تانى ببعض و تقدر بعد كده الحيوانات تخرج
                    عادى فى القذف
                  </li>
                  <li>
                    <strong>العينة الميكروسكوبية:</strong> أما لو كان الانسداد
                    فى البربخ او الخصية أو بسبب عيب خلقى زى ان مفيش اصلا وعاء
                    ناقل أو حبل منوي، وقتها مش بنقدر نعمل تسليك، وبنعمل عينة
                    ميكروسكوبية عشان نستخرج الحيوانات المنوية و نعمل حقن مجهرى
                  </li>
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
                        و لو حبينا يحصل حمل تانى ممكن بعد كدا نعمل{" "}
                        <Link
                          href="/surgeries/testicular-biopsy/testicular-aspiration"
                          style={{
                            color: "#3b82f6",
                            textDecoration: "underline",
                          }}
                        >
                          سحب عينه الحيوانات المنوية بالابره
                        </Link>{" "}
                        من الخصية على طول، وده بيكون اجراء بسيط و بيتعمل بتخدير
                        موضعي مع كل محاولة حقن مجهري للزوجين
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options Based on Condition */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              تعالوا دلوقتى بقى نتكلم عن علاج انسداد القنوات المنوية
            </h2>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#475569",
                  lineHeight: "1.8",
                }}
              >
                عشان نعرف ايه هو العلاج، لازم الاول نعمل اشعه عشان نتاكد من مكان
                الانسداد و نعرف درجته ايه، و نشوف هل هنقدر نصلحة والحيوانات
                المنوية بعد كده هتخرج بصورة طبيعية مع القذف، ولا هنحتاج نعمل
                عينة ميكروسكوبية و نطلع حيوانات منويه و نعمل بيها حقن مجهرى.
              </p>
            </div>
            <div className={styles.treatmentGrid}>
              {treatmentOptions.map((option, index) => (
                <div
                  key={index}
                  className={styles.treatmentCard}
                  style={{
                    background: `linear-gradient(135deg, ${option.color}20 0%, ${option.color}30 100%)`,
                    border: `2px solid ${option.color}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <span style={{ fontSize: "2.5rem", marginLeft: "1rem" }}>
                      {option.icon}
                    </span>
                    <h3
                      className={styles.treatmentTitle}
                      style={{
                        color: option.color,
                        margin: 0,
                        fontSize: "1.2rem",
                      }}
                    >
                      خيار العلاج {index + 1}
                    </h3>
                  </div>

                  <div
                    style={{
                      background: "#f8fafc",
                      padding: "1rem",
                      borderRadius: "10px",
                      marginBottom: "1.5rem",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <strong style={{ color: "#1e293b" }}>الحالة:</strong>
                    <p
                      style={{
                        margin: "0.5rem 0 0 0",
                        color: "#475569",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {option.condition}
                    </p>
                  </div>

                  <div
                    style={{
                      background: "#f0fdf4",
                      padding: "1rem",
                      borderRadius: "10px",
                      border: "1px solid #22c55e",
                    }}
                  >
                    <strong style={{ color: "#15803d" }}>العلاج:</strong>
                    <p
                      style={{
                        margin: "0.5rem 0 0 0",
                        color: "#166534",
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {option.treatment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Pregnancies Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>للحمل التاني</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  و لو حبينا يحصل حمل تانى ممكن بعد كدا نعمل سحب عينه الحيوانات
                  المنوية بالابره من الخصية على طول، وده بيكون اجراء بسيط و
                  بيتعمل بتخدير موضعي مع كل محاولة حقن مجهري للزوجين.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>💉</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className={styles.divider}>
          <div className={styles.container}>
            <h3>
              ولو عايز تعرف ايه هي حالات انعدام الحيوانات المنوية اللي هتعمل
              عملية التفتيش الميكروسكوبي، اسمع الفيديو ده مع الدكتور اسامة البكل
            </h3>
            <div className={styles.videoWrapperyoutube}>
              <iframe
                className={styles.videoYou}
                src="https://www.youtube.com/embed/2E0N5Esd7Ho"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Final Message */}
        <section className={styles.successSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>رسالة أمل</h2>
            <div className={styles.successStories}>
              <div
                className={styles.storyCard}
                style={{
                  background:
                    "linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%)",
                  border: "2px solid #16a34a",
                }}
              >
                <div className={styles.storyIcon} style={{ color: "#15803d" }}>
                  💚
                </div>
                <h3 style={{ color: "#15803d" }}>لا تفقد الأمل</h3>
                <p style={{ color: "#166534" }}>
                  وفى الاخر خلينى اقولك ان انعدام الحيوانات المنويه مش حاجة
                  ملهاش علاج، فبلاش تفقد الامل فى انك تبقى أب.
                </p>
              </div>
              <div
                className={styles.storyCard}
                style={{
                  background:
                    "linear-gradient(135deg, #f0f9ff 0%, #bae6fd 100%)",
                  border: "2px solid #0284c7",
                }}
              >
                <div className={styles.storyIcon} style={{ color: "#0369a1" }}>
                  🎯
                </div>
                <h3 style={{ color: "#0369a1" }}>ابدأ العلاج الآن</h3>
                <p style={{ color: "#0c4a6e" }}>
                  و لو قررت تبدأ علاج تقدر تتواصل مع فريقنا الطبى، هيحددولك معاد
                  مع دكتور اسامه محمد البكل مدرس واستشاري طب وجراحة أمراض
                  الذكورة وتأخر الإنجاب والصحة الجنسية بطب القصر العيني.
                </p>
              </div>
              <div
                className={styles.storyCard}
                style={{
                  background:
                    "linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%)",
                  border: "2px solid #ea580c",
                }}
              >
                <div className={styles.storyIcon} style={{ color: "#c2410c" }}>
                  📱
                </div>
                <h3 style={{ color: "#c2410c" }}>اتصل بنا الآن</h3>
                <p
                  style={{
                    color: "#9a3412",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  01018874287
                </p>
                <p style={{ color: "#7c2d12" }}>
                  عشان نبدء مع بعض رحلة علاج بسيطة هتنتهى بأنك تبقى اب بأذن
                  الله.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>ابدأ رحلة العلاج معنا</h2>
              <p>
                انعدام الحيوانات المنوية مش نهاية الطريق. معنا هتلاقي الحل
                المناسب لحالتك سواء كان تسليك جراحي أو عينة ميكروسكوبية. ابدأ
                معنا النهارده عشان تبقى أب قريباً بإذن الله.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز استشارة مع د. أسامة البكل
                </Link>
                <Link href="tel:+201018874287" className={styles.secondaryBtn}>
                  اتصل الآن: 01018874287
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        {/* Related Conditions */}
        {/* <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>حالات ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link
                href="/fertility/azoospermia"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>🔬</span>
                <h3>إنعدام الحيوانات المنوية</h3>
                <p>أسباب أخرى لانعدام الحيوانات المنوية غير الانسداد</p>
              </Link>
              <Link
                href="/surgeries/testicular-biopsy/microscopic-tese"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>🔍</span>
                <h3>العينة الميكروسكوبية للخصية</h3>
                <p>استخراج الحيوانات المنوية عند فشل التسليك الجراحي</p>
              </Link>
              <Link
                href="/surgeries/testicular-biopsy/testicular-aspiration"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>💉</span>
                <h3>سحب الحيوانات المنوية بالإبرة</h3>
                <p>إجراء بسيط للحمل الثاني بتخدير موضعي</p>
              </Link>
            </div>
          </div>
        </section> */}
      </div>
    </MainLayout>
  );
}
