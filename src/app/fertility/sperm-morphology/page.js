import MainLayout from "../../components/layout/MainLayout";
import { generateSEOMetadata } from "../../../lib/seo/articleSEO";
import Link from "next/link";
import styles from "../fertility-condition.module.css";
import Image from "next/image";

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "تشوهات الحيوان المنوي - الدكتور أسامة البكل",
    description:
      "تشوهات الحيوان المنوي ممكن تكون في الرأس او العنق او الذيل ، طب تفتكر ده هيكون حيوان منوي مشوه ولا جنين مشوه ؟ اعرف ايه هي تشوهات الحيوانات المنوية وأسبابها وكيفية علاجها",
    keywords: [
      "تشوهات الحيوان المنوي",
      "الاكروسوم",
      "راس الحيوان المنوى",
      "الرقبة",
      "الديل",
      "حقن مجهري",
      "د أسامة البكل",
    ],
    canonical: "/fertility/sperm-morphology",
    image: "/images/fertility/sperm-morphology.webp",
  });
}

export default function SpermMorphologyPage() {
  const morphology_parts = [
    {
      part: "الاكروسوم",
      description:
        "وده حاجة شبة المثلث بيكون موجود فى بداية راس الحيوان المنوى، وده اللى بيخلى الحيوان المنوى يخترق البويضة وقت التلقيح، و بتساعده كمان على انه يختلط بالبويضة",
      normal: ["موجود في بداية الرأس", "شكل مثلثي", "يساعد على اختراق البويضة"],
      abnormal: ["الاكروسوم مش موجود", "شكل غير طبيعي", "حجم غير مناسب"],
      impact:
        "لو الجزء ده مش موجود كده الحيوان المنوى يعتبر مشوه و مش هيقدر اصلا يخترق البويضة",
      icon: "🎯",
    },
    {
      part: "راس الحيوان المنوى",
      description:
        "و هى دى اللى بيكون فيها الماده الوراثية بتاعت الرجل ولازم يكون شكلها دائرى",
      normal: ["شكل دائري منتظم", "حجم طبيعي", "يحتوي على المادة الوراثية"],
      abnormal: [
        "اكبر او اصغر من الطبيعى",
        "مش مدوره (طويله شويه او مستطيلة)",
        "عده رأسين",
      ],
      impact: "التشوهات في الرأس تؤثر على قدرة الحيوان المنوي على الإخصاب",
      icon: "🧠",
    },
    {
      part: "الرقبة",
      description:
        "و دى اللى بتحول المواد الغذائية اللى بياخدها الحيوان المنوى من السائل المنوى، عن طريق حاجة اسمها الميتوكوندريا و يحولها لطاقة تساعد الحيوان المنوى على الحركة",
      normal: ["رفيعة ومنتظمة", "تحتوي على الميتوكوندريا", "تربط الرأس بالذيل"],
      abnormal: [
        "عنق الحيوان المنوى مش موجود",
        "مشكله فى الميتوكوندريا",
        "عنق سميك أو منحني",
      ],
      impact:
        "لو فى مشكله فى الميتوكوندريا، كده مش هيكون فى طاقة تساعد الديل على الحركة",
      icon: "⚡",
    },
    {
      part: "الديل",
      description:
        "و ده بيتكون من مجموعة من الانابيب بتكون رفيعة جدا و مربوطة ببعضها، وده اللى بيخلى الحيوان يقدر انه يعوم و يتحرك من مكان لمكان، وده زى شكل ديل السمكه كده بيتحرك يمين و شمال عشان يساعد السمكه على الحركة",
      normal: ["طويل ومستقيم", "رفيع ومرن", "يتحرك يمين وشمال"],
      abnormal: [
        "قصير او معوج او مشقوق",
        "الحيوان المنوى يكون ليه ديلين",
        "الديل يكون اصلا مش موجود",
      ],
      impact: "و كده الحيوان المنوى مش هيقدر انه يتحرك من مكانة",
      icon: "🏊‍♂️",
    },
  ];

  const causes = [
    {
      category: "اسباب خلقية",
      description:
        "وده معناه ان فى خلل جيني فى انسجة الخصية، وده بيسبب ان الخصية بتنتج حيوانات منوية مشوه",
      conditions: [
        "خلل جيني فى انسجة الخصية",
        "تشوهات وراثية في الحيوانات المنوية",
      ],
      treatment:
        "للاسف مبيكونش فيه علاج و دى الحالة اللى بنضطر لاننا نعمل حقن مجهرى فيها على طول",
      icon: "🧬",
    },
    {
      category: "اسباب مكتسبة",
      description:
        "و الاسباب المكتسبة دى بتكون اما امراض او ظروف بيئية أو سلوكيات خاطئة",
      conditions: [
        "ارتفاع فى درجة حرارة الخصية (زى الشغل فى صناعة الازاز)",
        "التعرض لتلوث اشعاعى او مواد كيماوية",
        <Link
          key="varicocele-link"
          href="/surgeries/varicocele"
          style={{ color: "#3b82f6", textDecoration: "underline" }}
        >
          دوالى على الخصية من الدرجة التانية او التالته
        </Link>,
        "التدخين بكميات كبيرة",
        "ادمان المواد المخدرة او شرب كحوليات بكميات كبيرة",
        "سمنه مفرطة",
        "امراض بتأثر على الدوره الدمويه (السكر – الضغط – تصلب الشرايين)",
        "التعرض لعلاج اشعاعى او كميائى بسبب الامراض السرطانية",
        "التهابات شديده فى الجهاز التناسلى",
        "خلل هرمونى",
      ],
      treatment:
        "لو كان التشوه سببه مكتسب، فالعلاج هنا هيكون على حسب السبب اللى عمل تشوه فى الحيوانات المنويه فى فتره بسيطة جداّ متزدش عن 6 شهور",
      icon: "🩺",
    },
  ];

  return (
    <MainLayout>
      <div className={styles.conditionPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.breadcrumb}>
                  <Link href="/">الرئيسية</Link>
                  <span>/</span>
                  <Link href="/fertility">تأخر الإنجاب</Link>
                  <span>/</span>
                  <span>تشوهات الحيوان المنوي</span>
                </div>
                <h1 className={styles.heroTitle}>تشوهات الحيوان المنوي</h1>
                <p className={styles.heroDescription}>
                  تشوه الحيوانات المنوية يعتبر من اهم اسباب تأخر الانجاب، و اللى
                  احيانا كتير بيتشخص غلط لاننا بنعمل التحليل فى مكان مش متخصص و
                  لا بنلجأ لدكتور متخصص فى علاجه. و عشان نفهم كويس امتى الحيوان
                  المنوى يكون مشوه، تعالوا نعرف الحيوان المنوى بيتكون من اى، و
                  امتى اقول ان الحيوان المنوى مشوه.
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>4</span>
                    <span className={styles.statLabel}>
                      أجزاء للحيوان المنوي
                    </span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>96%</span>
                    <span className={styles.statLabel}>
                      الحد الأقصى للتشوهات المقبولة
                    </span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>6</span>
                    <span className={styles.statLabel}>شهور مدة العلاج</span>
                  </div>
                </div>
              </div>

              {/* الصورة */}
              <div className={styles.heroImage}>
                <img src="/sparm.webp" alt="تشوهات الحيوان المنوي" />
              </div>
            </div>
          </div>
        </section>
        {/* Important Question Section */}
        {/* <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>معلومة مهمه جدا</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  <strong>
                    🔵 و هنا خلينا نعرف معلومة مهمه جدا، وده بيكون اول سؤال
                    بتسئله فى العياده:
                  </strong>
                </p>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#1e40af",
                    fontWeight: "600",
                  }}
                >
                  هو يا دكتور معنى ان الحيوان المنوى مشوه ده معناه ان الطفل كمان
                  هيتولد مشوه ؟
                </p>
                <p>
                  <strong>👈 و الاجابه طبعا لا،</strong> لان الحيوان المنوى
                  المشوه ده ولا هيقدر انه يخترق البويضه و يخصبها، ولا هيكون قادر
                  انه يوصلها، و بكده مش هيحصل حمل اصلاّ عشان ينتج عنه حيوان
                  مشوه، ده غير ان اللى ممكن يسبب تشوه للأجنه هو مشكله فى الماده
                  الوراثيه، وده ملهوش علاقة بتشوه الحيوانات المنوية.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>❓</span>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Normal Ranges Section */}
        {/* <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>نسبة التشوهات المقبولة</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  <strong>
                    👈 لازم عشان نقدر نحدد نسبة التشوهات و نكون واثقين منها
                  </strong>{" "}
                  لازم التحليل يتم فى اماكن معينه زى مراكز الخصوبه او اطفال
                  الانابيب او معامل متخصصة، لان التحليل ده لازم يتم بطريقة
                  معينة، و هى اننا بنصبغ الاول الحيوان المنوى بصبغه معينه و دى
                  مش بتكون موجوده فى اغلب معامل التحاليل العادية.
                </p>
                <p>
                  <strong>👈 اما بالنسبة لنسبة التشوهات المقبوله</strong> اللى
                  نقدر نقول ان هيحصل معاها حمل طبيعى بتكون{" "}
                  <strong>اقل من 96%</strong>، اما لو نسبة التشوهات كانت{" "}
                  <strong>اكتر من 96%</strong> وقتها فرص الحمل الطبيعى بتكون
                  اقل.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>📊</span>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Sperm Parts Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              الحيوان المنوى بيتكون من 4 اجزاء:
            </h2>
            <div className={styles.causesGrid}>
              {morphology_parts.map((part, index) => (
                <div key={index} className={styles.causeCard}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "2rem" }}>{part.icon}</span>
                    <h3 className={styles.causeType}>{part.part}</h3>
                  </div>
                  <p className={styles.causeDescription}>{part.description}</p>

                  <div className={styles.causeExamples}>
                    <h4>الخصائص الطبيعية:</h4>
                    <ul>
                      {part.normal.map((characteristic, idx) => (
                        <li key={idx} style={{ color: "#10b981" }}>
                          • {characteristic}
                        </li>
                      ))}
                    </ul>

                    <h4>التشوهات المحتملة:</h4>
                    <ul>
                      {part.abnormal.map((abnormality, idx) => (
                        <li key={idx} style={{ color: "#dc2626" }}>
                          • {abnormality}
                        </li>
                      ))}
                    </ul>

                    {part.impact && (
                      <div
                        style={{
                          background: "#fef2f2",
                          padding: "1rem",
                          borderRadius: "8px",
                          marginTop: "1rem",
                          border: "1px solid #fecaca",
                        }}
                      >
                        <strong style={{ color: "#dc2626" }}>التأثير:</strong>
                        <p
                          style={{
                            margin: "0.5rem 0 0 0",
                            color: "#7f1d1d",
                            fontSize: "0.9rem",
                          }}
                        >
                          {part.impact}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sperm Parts Section */}
        <section className={styles.divider}>
          <h3>
            ولو عايزين تعرفوا اكثر عن تكوين الحيوان المنوي ، تقدروا تعرفوا كل
            المعلومات عنه في الفيديو ده من دكتور اسامة محمد البكل………
          </h3>

          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/kuyYLWETZFE?start=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* When Sperm is Abnormal Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              و دلوقتى هنعرف امتى الحيوان المنوى يكون مشوه
            </h2>
            <div
              className={styles.definitionContent}
              style={{ gridTemplateColumns: "1fr", textAlign: "center" }}
            >
              <div className={styles.definitionText}>
                {/* <div
                  style={{
                    background:
                      "linear-gradient(135deg, #fef3c7 0%, #fef9c3 100%)",
                    padding: "2rem",
                    borderRadius: "15px",
                    border: "3px solid #f59e0b",
                    marginBottom: "2rem",
                  }}
                >
                  <h3
                    style={{
                      color: "#92400e",
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      marginBottom: "1rem",
                    }}
                  >
                    🧬 Sperm Abnormalities - تشوه الحيوانات المنوية
                  </h3>
                </div> */}
                <Image
                  src="/sperm-2.webp"
                  alt="Sperm Abnormalities"
                  width={600}
                  height={300}
                  style={{ borderRadius: "15px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Abnormalities List Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>حالات تشوه الحيوان المنوي</h2>
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
                  <span style={{ fontSize: "2rem", color: "#dc2626" }}>🎯</span>
                  <h3 className={styles.causeType}>الاكروسوم المفقود</h3>
                </div>
                <p className={styles.causeDescription}>
                  لو الاكروسوم مش موجود ده معناه ان الحيوان المنوى مش هيقدر انه
                  يخترق البويضة و بكده مش هيحصل تلقيح للبويضة.
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
                  <span style={{ fontSize: "2rem", color: "#dc2626" }}>🧠</span>
                  <h3 className={styles.causeType}>تشوهات الرأس</h3>
                </div>
                <div className={styles.causeDescription}>
                  <p>• لو رأس الحيوان المنوى كانت اكبر او اصغر من الطبيعى</p>
                  <p>
                    • لو رأس الحيوان المنوى مش مدوره، زى ما احنا شايفين فى
                    الصوره كده انها ممكن تكون طويله شويه او مستطيلة
                  </p>
                  <p>
                    • لو الحيوان المنوى عده رأسين، كده برضو الحيوان المنوى هيكون
                    مشوه
                  </p>
                </div>
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
                  <span style={{ fontSize: "2rem", color: "#dc2626" }}>⚡</span>
                  <h3 className={styles.causeType}>مشاكل الرقبة</h3>
                </div>
                <div className={styles.causeDescription}>
                  <p>• لو عنق الحيوان المنوى مش موجود</p>
                  <p>
                    • لو فى مشكله فى الميتوكوندريا، كده مش هيكون فى طاقة تساعد
                    الديل على الحركة
                  </p>
                </div>
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
                  <span style={{ fontSize: "2rem", color: "#dc2626" }}>🏊‍♂️</span>
                  <h3 className={styles.causeType}>تشوهات الذيل</h3>
                </div>
                <div className={styles.causeDescription}>
                  <p>
                    • لو الديل كان فى مشكلة زى انه يكون قصير او معوج او مشقوق
                  </p>
                  <p>• ان الحيوان المنوى يكون ليه ديلين</p>
                  <p>• او ان الديل يكون اصلا مش موجود</p>
                  <p>• و كده الحيوان المنوى مش هيقدر انه يتحرك من مكانة</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Question Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>معلومة مهمه جدا</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                    padding: "2rem",
                    borderRadius: "15px",
                    border: "3px solid #3b82f6",
                    marginBottom: "2rem",
                  }}
                >
                  <p
                    style={{
                      color: "#1e40af",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                    }}
                  >
                    <strong>
                      🔵 و هنا خلينا نعرف معلومة مهمه جدا، وده بيكون اول سؤال
                      بتسئله فى العياده:
                    </strong>
                  </p>
                  <p
                    style={{
                      fontSize: "1.3rem",
                      color: "#1e40af",
                      fontWeight: "700",
                      textAlign: "center",
                      margin: "1.5rem 0",
                    }}
                  >
                    هو يا دكتور معنى ان الحيوان المنوى مشوه ده معناه ان الطفل
                    كمان هيتولد مشوه ؟
                  </p>
                </div>

                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
                    padding: "2rem",
                    borderRadius: "15px",
                    border: "3px solid #22c55e",
                  }}
                >
                  <p
                    style={{
                      color: "#15803d",
                      fontWeight: "700",
                      fontSize: "1.2rem",
                      marginBottom: "1rem",
                    }}
                  >
                    👈 و الاجابه طبعا لا،
                  </p>
                  <p style={{ color: "#15803d", lineHeight: "1.8" }}>
                    لان الحيوان المنوى المشوه ده ولا هيقدر انه يخترق البويضه و
                    يخصبها، ولا هيكون قادر انه يوصلها، و بكده مش هيحصل حمل اصلاّ
                    عشان ينتج عنه حيوان مشوه، ده غير ان اللى ممكن يسبب تشوه
                    للأجنه هو مشكله فى الماده الوراثيه، وده ملهوش علاقة بتشوه
                    الحيوانات المنوية.
                  </p>
                </div>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>❓</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              و دلوقتى و بعد ما عرفنا امتى الحيوان المنوى يكون مشوه 👇
            </h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                    padding: "2rem",
                    borderRadius: "15px",
                    border: "2px solid #f59e0b",
                    marginBottom: "2rem",
                  }}
                >
                  <h3
                    style={{
                      color: "#92400e",
                      marginBottom: "1rem",
                      fontSize: "1.3rem",
                    }}
                  >
                    الخطوات التالية:
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <p
                      style={{
                        color: "#92400e",
                        fontWeight: "600",
                        fontSize: "1.1rem",
                      }}
                    >
                      1️⃣ تعالوا نعرف اى هى اسباب تشوهات الحيوان المنوى ؟
                    </p>
                    <p
                      style={{
                        color: "#92400e",
                        fontWeight: "600",
                        fontSize: "1.1rem",
                      }}
                    >
                      2️⃣ و اي هى نسب التشوه اللى ممكن يحصل فيها حمل طبيعى ؟
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.procedureSteps}>
                <h3>أولاً: نسبة التشوهات المقبولة</h3>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                      <h4>التحليل المتخصص</h4>
                      <p>لازم التحليل يتم فى مراكز الخصوبه او معامل متخصصة</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <h4>الصبغة الخاصة</h4>
                      <p>نصبغ الحيوان المنوى بصبغه معينه تحت ميكروسكوب معين</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <h4>النسبة المقبولة</h4>
                      <p>أقل من 96% تشوهات = حمل طبيعي محتمل</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                      <h4>أكثر من 96%</h4>
                      <p>فرص الحمل الطبيعى بتكون أقل</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Treatment Note */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <div
              style={{
                background: "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)",
                padding: "3rem",
                borderRadius: "20px",
                border: "3px solid #ef4444",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  color: "#dc2626",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  marginBottom: "1.5rem",
                }}
              >
                ‼️ نقطة مهمه قبل الحقن المجهرى
              </h3>
              <p
                style={{
                  color: "#7f1d1d",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom: "1rem",
                }}
              >
                و هى اي اصلاّ السبب فى تشوه الحيوانات المنوية لاننا لو عرفنا
                السبب و قدرنا اننا نعالجة هنقدر اننا نقلل من نسبة تشوه الحيوان
                المنوى
              </p>
              <p
                style={{
                  color: "#7f1d1d",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  fontWeight: "600",
                }}
              >
                و فى حالات بعد العلاج بيكون عندها فرصه ان يحصل حمل طبيعى هتكون
                كبيرة جدا و تعالوا بقى دلوقتى نعرف اسباب تشوه الحيوانات المنوية
                وازاى بنقدر اننا نعالجها
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className={styles.divider}>
          <h3>
            ولو عايزين تعرفوا اكثر عن النسبة الطبيعية لتشوه الحيوانات المنوية ،
            تقدروا تعرفوا كل المعلومات عنها من دكتور اسامة محمد البكل………
          </h3>

          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/kuyYLWETZFE?start=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Causes Section */}
        <section className={styles.diagnosisSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              اسباب تشوه الحيوانات المنوية
            </h2>
            <div className={styles.testsGrid}>
              {causes.map((cause, index) => (
                <div key={index} className={styles.testCard}>
                  <div className={styles.testIcon}>{cause.icon}</div>
                  <h3 className={styles.testName}>{cause.category}</h3>
                  <p className={styles.testDescription}>{cause.description}</p>

                  <div style={{ textAlign: "right", marginBottom: "1rem" }}>
                    <h4
                      style={{
                        fontSize: "1rem",
                        marginBottom: "0.5rem",
                        color: "#1e40af",
                      }}
                    >
                      الأسباب:
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {cause.conditions.map((condition, idx) => (
                        <li
                          key={idx}
                          style={{
                            padding: "0.25rem 0",
                            color: "#64748b",
                            fontSize: "0.9rem",
                          }}
                        >
                          • {condition}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{
                      background: "#f1f5f9",
                      padding: "1rem",
                      borderRadius: "8px",
                    }}
                  >
                    <strong style={{ color: "#1e40af" }}>العلاج:</strong>
                    <p
                      style={{
                        margin: "0.5rem 0 0 0",
                        color: "#475569",
                        fontSize: "0.9rem",
                      }}
                    >
                      {cause.treatment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ICSI Cases Section */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              الحالات اللى بيكون فيها الحقن المجهرى هو الحل الوحيد و الافضل
            </h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <h3>حالات الحقن المجهري الضرورية:</h3>
                <ul>
                  <li>
                    لو كان سبب تشوه الحيوان المنوى كان خلقى او وراثى وقتها للاسف
                    مبيكونش فيه علاج و دى الحالة اللى بنضطر لاننا نعمل حقن مجهرى
                    فيها على طول
                  </li>
                  <li>
                    لو كان سن الزوجة اكبر من 35 سنه، وقتها الافضل اننا نعمل حقن
                    مجهرى، و منضيعش اى وقت فى العلاج عشان نلحق يحصل انجاب
                  </li>
                  <li>
                    لو الحيوان المنوى مفيهوش الاكروسوم، ده معناه انه مش هيقدر
                    يخترق البويضة ولا يتفاعل معاها، عشان كده هنا لازم اننا نعمل
                    حقن مجهرى
                  </li>
                </ul>
                {/* 
                <h3>نقطة مهمة قبل الحقن المجهري:</h3>
                <ul>
                  <li>
                    ‼️ و هنا فى نقطة مهمه لازم نعرفها قبل ما نعمل الحقن المجهرى،
                    و هى اي اصلاّ السبب فى تشوه الحيوانات المنوية
                  </li>
                  <li>
                    لاننا لو عرفنا السبب و قدرنا اننا نعالجة هنقدر اننا نقلل من
                    نسبة تشوه الحيوان المنوى
                  </li>
                  <li>
                    و فى حالات بعد العلاج بيكون عندها فرصه ان يحصل حمل طبيعى
                    هتكون كبيرة جدا
                  </li>
                </ul> */}
              </div>

              {/* <div className={styles.procedureSteps}>
                <h3>خطوات العلاج:</h3>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                      <h4>تحديد السبب</h4>
                      <p>معرفة السبب في تشوه الحيوانات المنوية</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <h4>العلاج المناسب</h4>
                      <p>علاج السبب حسب الحالة</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <h4>المتابعة</h4>
                      <p>متابعة التحسن لمدة 6 شهور</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                      <h4>النتيجة</h4>
                      <p>حمل طبيعي أو حقن مجهري</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        {/* <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>لا تفقد الأمل في تحقيق حلم الأبوة</h2>
              <p>
                و اخيراّ خليك عارف ان تشوه الحيوانات المنوية حتى لو وصل 100%، ده
                مش معناه ان كده خلاص مفيش امل انك تبقى اب، بالعكس ديماّ لسه
                عندنا فرص أن يكون عندنا اطفال، بس المهم انك متيأسش و خد قرار
                العلاج.
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
        </section> */}
        {/* Related Conditions */}
        {/* <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>حالات ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link
                href="/fertility/sperm-motility"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>🏃‍♂️</span>
                <h3>ضعف حركة الحيوانات المنوية</h3>
                <p>تعرف على مشاكل حركة الحيوانات المنوية</p>
              </Link>
              <Link
                href="/fertility/azoospermia"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>🔬</span>
                <h3>إنعدام الحيوانات المنوية</h3>
                <p>حالة عدم وجود حيوانات منوية في السائل المنوي</p>
              </Link>
              <Link
                href="/surgeries/testicular-biopsy/microscopic-tese"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>🔍</span>
                <h3>التفتيش الميكروسكوبي للخصية</h3>
                <p>استخراج الحيوانات المنوية من الخصية</p>
              </Link>
            </div>
          </div>
        </section> */}
      </div>
    </MainLayout>
  );
}
