import MainLayout from "../../components/layout/MainLayout";
import { generateSEOMetadata } from "../../../lib/seo/articleSEO";
import Link from "next/link";
import styles from "../fertility-condition.module.css";
import Image from "next/image";

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "هل مشاكل الخصية تسبب العقم ؟ - الدكتور أسامة البكل",
    description:
      "الخصية هي المصنع اللي بينتج الحيوانات المنوية واللي مسؤولة عن الإنجاب ، ولو حصل فيها اي مشكلة ، هتحرمك من الإنجاب وممكن تسببلك عقم طول حياتك.",
    keywords: [
      "مشاكل الخصية",
      "فشل الخصية",
      "الخصية المعلقة",
      "متلازمة كلاينفلتر",
      "دوالي الخصية",
      "العلاج الإشعاعي",
      "د أسامة البكل",
    ],
    canonical: "/fertility/testicular-problems",
    image: "/images/fertility/testicular-problems.webp",
  });
}

export default function TesticularProblemsPage() {
  // Congenital/Hereditary Causes
  const congenitalCauses = [
    {
      name: "الخصية المعلقة",
      description:
        "لو عندنا خصية معلقة و ده عيب خلقى، وبسببه خصية واحده او الخصيتين مبينزلوش من تجويف البطن لكيس الصفن بتفضل الخصية موجوده فى البطن، و هنا لو الخصية منزلتش لوحدها لكيس الصفن لحد ما يوصل الطفل لعمر السنة و نص لازم وقتها ننزل الخصية من البطن بعملية، لان الخصية لو منزلتش هيحصلها ضمور و تبدء البؤر المنوية تختفى، وده بسبب درجة الحرارة العالية اللى بتتعرض لها الخصية فى البطن.",
      detection:
        "و الخصية المعلقة الاب و الام يقدروا يكتشوفها من بعد الولاده على طول، لان بيكون واضح اذا كان فى خصية فى كيس الصفنن، او لا، و العلاج هنا بيكون على حسب وضع الخصية.",
      treatmentOptions: [
        {
          condition: "لو كانت الخصيتين معلقين ومنزلوش خالص",
          treatment:
            "ممكن نعمل محاولة لإنزالهم جراحيا، و بعدها بناخد علاج تنشيطى للخصية، و بعدها نعمل تفتيش ميكروسكوبى، لكن نسب النجاح هنا بتكون ضعيفة جدا، و ممكن بعد ما ننزل الخصيتين وناخد علاج ونعمل تفتيش ميكروسكوبى، ممكن بردو ما نلاقيش حيوانات منوية وده بسبب ان الخصيتين فضلوا فى البطن فترة و اتعرضوا لدرجة حرارة عالية.",
        },
        {
          condition:
            "اما لو الخصية نزلت و في فشل او ضعف فى انتاجها لحيوانات المنوية",
          treatment:
            "هنبدء ناخد علاج هرمونى نحاول ننشط بيه الخصية و بعدين نعمل تفتيش ميكروسكوبي و دا في حالة ان ماظهرش حيوانات منوية بالقذف، عشان نلاقى حيوانات منوية نقدر نعمل بيها حقن مجهرى.",
        },
      ],
      videoNote:
        "ولو عايزين تعرفوا اي علاقة الخصية المعلقة بانعدام الحيوانات المنوية وتاخر الانجاب، اسمع الفيديو ده مع الدكتور اسامة محمد البكل……",
      icon: "🏥",
    },
    {
      name: "متلازمة الكلاينفلتر",
      description:
        "و دى معناها ان فى خلل فى الكروموسومات، اتسبب فى وجود كروموسوم X زياده و ده هيتسبب فى ضمور بالخصيتين، و ده هييتسبب فى ان نسبة هرمون الذكوره هتكون قليله جدا، و انتاج الخصية للحيوانات المنوية هيكون ضعيف جدا او منعدم.",
      detection:
        "لو عندنا خلل جينى فى الجينات المسؤولة عن انتاج الحيوانات المنوية و ده كمان نقدر نعرفة من حجم الخصية لانه بيكون اصغر من الطبيعى و بيكون كمان فى تأخر او فشل فى البلوغ.",
      treatmentOptions: [
        {
          condition: "لو كان في ضعف في انتاج الخصية للحيوانات المنوية",
          treatment:
            "هنا لازم نعمل تجميد وحفظ للحيوانات المنوية ونعمل بعدها حقن مجهري، ولازم كمان نعمل تحليل جينات للاجنة عشان نتاكد انها سليمة وما عندهاش مشاكل وراثية او اتنقلهم متلازمة كلاينفيلتر.",
        },
        {
          condition: "اما لو في انعدام للحيوانات المنوية",
          treatment:
            "لازم فى الاول نقيم وضع الهرمونات، و نشوف نسبة هرمون الذكورة و هرمون الانوثة، و لو كان فيهم مشكله لازم الاول ناخد علاج لمدة 3 شهور قبل ما نعمل التفتيش الميكروسكوبى عشان نزود فرص نجاح العملية، و هنا لازم نعرف حاجة ان كل ما كان المريض اصغر سنا كل ما كانت فرص ان نلاقي حيوانات منوية بالخصية افضل.",
        },
      ],
      importantNote:
        "و فى حاجة تانيه مهمه لازم نعرفها، ان متلازمة الكلاينفلتر مش هتتنقل للجنين لان فى ناس كتير بتفتكر انه مدام مشكلة جينية يبقى هتتنقل للطفل، وده مش صح لان الخليه المنوية اللى تقدر انها تنتج حيوان منوي نقدر نلقح بيه بويضة و يكون جنين، لازم تكون خليه سليمة او قدرت تتخلص من الكرموسوم الزياده، و معنى كده ان الخليه المنوية سليمه، و الحيوان المنوى سليم فمش هيكون فى اى ضرر على الجنين.",
      videoNote:
        "ولو عايز تعرف اكثر عن حالات متلازمة كلاينفلتر وكيفية تشخيصها وعلاجها، اسمع الفيديو ده مع دكتور اسامة محمد البكل……….. ",
      icon: "🧬",
    },
    {
      name: "حذف جينى للكروموسوم Y",
      description:
        "لو عندنا حذف جينى للكروموسوم Y، و الكروموسوم ده هو اللى بيكون عليه الجينات المسؤولة عن تكوين الحيوانات المنوية، بتكون متقسمة ل 3 مجموعات:",
      groups: [
        {
          name: "مجموعه(A)",
          effect:
            "لو حصل فيها حذف كامل يعنى المجموعه كلها مش موجوده فى الكروموسوم Y، فده معناه ان مفيش اصلا خلايا منوية تقدر تنتج حيوان منوى، و بكده هيكون فى انعدام للحيوانات المنوية و مش هنلاقى حيوانات منوية حتى لو عملنا تفتيش ميكروسكوبى، اما لو الحذف ده كان جزئى ده معناه اننا ممكن نلاقى خلايا بتقدر تنتج حيوانات منوية ولكن فرصنا في التفتيش الميكروسكوبي بتبقى اقل.",
        },
        {
          name: "مجموعة(B)",
          effect:
            "لو حصل فيها حذف فده معناه ان فى خلايا منوية، بس انتاج الحيوان المنوى ده بيقف فى المراحل الاولى وده معناه ان للأسف مفيش امل للتفتيش الميكرسكوبي.",
        },
        {
          name: "المجموعه(C)",
          effect:
            "فدى لو كان فيها حذف فده بيقلل فرص اننا نلاقي حيوانات منوية بالتفتيش الميكرسكوبي ولكن فرصتنا مش بتبقى صفر، بيكون فى امل اننا نلاقى حيوانات منوية نعمل بيها حقن مجهرى.",
        },
      ],
      importantNote:
        "و هنا لازم نعرف ان اى حد عمل تحليل سائل منوى وعدد الحيوانات المنوية كان اقل من مليون حيوان منوي في الملي لازم يعمل تحليل جينى عشان نعرف لو في حدف جزئي في المنطقة c فده معناه انه عدد الحيوانات المنوية مش هيتحسن باي علاج للأسف ويفضل يعمل حقن مجهري.",
      icon: "🔬",
    },
  ];

  // Acquired Causes
  const acquiredCauses = [
    {
      name: "دوالى على الخصية من الدرجة التانية او التالته",
      description:
        "وقتها الدوالى هتكون بتأثر على انتاج الخصية للحيوانات المنوية، او هيضر الحيوانات المنوية نفسها، لان بسبب الدوالى بيكون فى ضعف فى جدار الوريد اللى بيكون مسؤل عن انه يخرج بقايا الدم من الخصية بعد ما تكون استفادت منها، للدورة الدمويه وبسبب الضعف ده الدم مبيخرجش و بيفضل متجمع فى الوريد اللى بيفضل يتمدد عشان يستوعب كل الدم اللى بيترسب فيه، وده هيضر الخصية و هيأثر على انتاجها للحيوانات المنوية، ده غير ان الدم المترسب ده بيكون مليان مواد مؤكسده، وده بيضر الحيونات المنويه نفسها.",
      treatment:
        "العلاج هنا لازم فى الاول نعمل عمليه بسيطه نربط بيها الدوالى، و بعدين نبدء بعد العمليه فى علاج هرمونى عشان ننشط بيه الخصية و ترجع تانى تنتج حيوانات منويه، و بعد العلاج بنقدر اننا نلاقى حيوانات منوية فى السائل المنوى، ولو بردو ملاقيناش حيوانات منوية فى السائل المنوى، نقدر وقتها اننا نعمل تفتيش ميكروسكوبى و العلاج هنا هيكون نشط الخصية وده بيزود فرص نجاح عملية التفتيش الميكرسكوبي.",
      icon: "🩸",
    },
    {
      name: "العلاج الاشعاعى او الكيميائى",
      description:
        "لو اتعرضنا للعلاج الاشعاعى او الكيميائى لفترات طويله و بجرعات كبيره بسبب الامراض السرطانية، وقتها العلاج هيأثر على الخلايا و البؤر المنوية، و ده سببه ان الخلايا المنوية بتكون خلايا سريعه الانقسام و التكاثر، زى الخلايا السرطانيه، و هنا العلاج الكيميائى او الاشعاعى هيبدء انه يهاجم الخلايا المنوية لانها بالنسباله زى الخلايا السرطانية و ده هيتسبب فى موت الخليه.",
      treatment:
        "هنا للاسف مش بيكون فى علاج نقدر نرجع بيه الخلايا المنوية، و بيكون حلنا الوحيد اننا نعمل تفتيش ميكروسكوبى نحاول نلاقى بيه خلايا منوية متكونش اتضرت بسبب العلاج الاشعاعى و الكيميائى، و عشان نقدر نعمل التفتيش الميكروسكوبى.",
      timing:
        "و هنا لازم تكون عارف اننا عشان نعمل التفتيش الميكروسكوبى لازم يكون بعد ما يعدى 5 سنين من وقت اخر جلسة علاج كيميائى او اشعاعى.",
      outcomes: [
        "اما انناهنلاقى خلايا منوية سليمة نقدر نطلع منها حيوان منوى سليم نعمل بيه حقن مجهرى.",
        "او ان نلاقى خلايا منوية بس اتأثرت بالعلاج الاشعاعى وحصل فيها مشكله فى الكروموسومات، وده ممكن يسبب تشوه فى الاجنة.",
        "او للاسف مش هنلاقى اى خلايا منوية ووقتها مش هيكون عندنا فرصه اننا نعمل حقن مجهرى، لان مش هيكون عندنا حيوانات منوية نلقح بيها البويضة.",
      ],
      prevention:
        "و عشان كده ديماّ بننصح ان لو هناخد علاج اشعاعى او كيميائى بجرعات كبيره و لفترات طويله، لازم قبل ما نبدء العلاج نكون عاملين تجميد للحيوانات المنوية، و خلينى اقولك ان تجميد الحيوانات المنوية اجراء سريع جدا مش بياخد وقت و مش هيعطلك عن بداية العلاج الاشعاعى او الكيميائى، و هنقدر نحافظ بيه على حيوانات منوية سليمه نقدر نعمل بيها حقن مجهرى.",
      icon: "☢️",
    },
    {
      name: "العادات المضره",
      habits: [
        {
          name: "التدخين",
          effect:
            "لان المواد الموجوده فى السجاير زى النيكوتين و القطران بتأثر على شراين الجسم كله، و بكده هتأثر على وصول الدم للخصية، و ده هيأثر على قدرة الخصية على انتاج الحيوانات المنوية.",
        },
        {
          name: "تعاطي المخدرات بكل انواعها",
          effect:
            "و ده بيكون ليها تأثيرين اما انها هتأثر على الشراين و الاورده و زى ما قولنا ده هيتسبب فى ضعف انتاج الخصية للحيوانات المنوية، ده غير ان المخدرات بيكون ليا تأثير على الاعصاب، وده هيأثر على العضو الذكرى و هيسبب ضعف جنسى.",
        },
        {
          name: "ادمان المشروبات الكحولية",
          effect:
            "المواد الكحوليه بتلغى تحكم المخ، وده هيأثر على كل اعصاب الجسم و كمان الدوره الدموية، و ده زى ما لسه قايلين هيسبب ضعف فى الخصية و انتاجها للحيوانات المنويه، و كمان ضعف جنسى.",
        },
      ],
      icon: "🚫",
    },
    {
      name: "السمنة المفرطة",
      description:
        "لو كان عندنا سمنة مفرطة، دة برضو هيضر الدوره الدموية و هيتسبب فى زياده نسبة الدهون فى الدم، و كده الدم مش هيوصل بصوره طبيعية للخصية، وهيسبب كمان خلل في الهرمونات زي ارتفاع هرمون الانوثة وانخفاض هرمون الذكورة وده هيضر بإنتاج الخصية للحويانات المنوية وممكن يسبب انعدام الحيوانات المنوية.",
      icon: "⚖️",
    },
    {
      name: "الالتهاب الفيروسى فى الخصية",
      description:
        "لو حصل التهاب فيروسى فى الخصية زى التهاب الغده النكافية، ده هيأثر على الدوره الدموية و هيتسبب بضعف فى انسجة الخصية البؤر المنوية تختفى، و الحل الوحيد هنا اننا نعمل تفتيش ميكروسكوبى نحاول نلاقى بيه خلايا منوية، و تكون قادره تنتج الحيوانات المنوية.",
      icon: "🦠",
    },
  ];

  // Essential Genetic Tests
  const geneticTests = [
    {
      test: "تحليل Karyotyping",
      description:
        "و هو تحليل كروموسومى بنقدر نعرف منه لو فى خلل فى الكروموسومات و بيوضح لو عندنا متلازمة كلاينفلتر.",
      importance: "أساسي لتشخيص الخلل الكروموسومي",
      when: "عشان نقول ان انعدام الحيوانات المنوية سببه خلل جينى",
      icon: "🧬",
    },
    {
      test: "تحليل Y chromosome microdeletion",
      description:
        "وده تحليل بنقيم منه مجموعه من الجينات الموجودة على كروموسوم Y، وبكده هنقدر نحدد الخلل موجود في اى منطقة من اللي اتكلمنا عنهم من شويه، واللي على اساها هنحدد هل في امل للتفتيش الميكرسكوبي ولالا.",
      importance: "يحدد إمكانية نجاح التفتيش الميكروسكوبي",
      when: "للتحقق من وجود حذف جيني في الكروموسوم Y",
      icon: "🔬",
    },
  ];

  return (
    <MainLayout>
      <div className={styles.conditionPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.breadcrumb}>
                <Link href="/">الرئيسية</Link>
                <span>/</span>
                <Link href="/fertility">تأخر الإنجاب</Link>
                <span>/</span>
                <span>مشاكل الخصية</span>
              </div>
            </div>
            <div className={styles.heroGrid}>
              <div className={styles.heroImage}>
                <Image
                  src="/testicular.webp"
                  alt="مشاكل الخصية"
                  layout="responsive"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Definition Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>مشاكل الخصية</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  الخصية هى اساس انتاج هرمون الذكوره و تصنيع الحيوانات المنوية،
                  لكن لو الخصية دى فيها خلل وقتها مش هيكون فى انتاج لهرمون
                  الذكوره ولا للحيوانات المنوية، وطبعا هياثر على الانجاب وهيسبب
                  تأخر او فشل فى البلوغ و ضعف جنسي، وده بنسمية فشل او خلل وظيفى
                  فى الخصية.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>🏥</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Causes Classification */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              طيب هى اى اسباب الفشل الوظيفى للخصية
            </h2>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#475569",
                  lineHeight: "1.8",
                }}
              >
                و هنا هنقسمهم لسببين:
              </p>
            </div>
            <div className={styles.causesGrid}>
              <div
                className={styles.causeCard}
                style={{
                  background:
                    "linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)",
                  border: "2px solid #0288d1",
                }}
              >
                <div
                  className={styles.causeType}
                  style={{ color: "#0277bd", fontSize: "1.6rem" }}
                >
                  🧬 اسباب خلقية أو وراثية
                </div>
                <div className={styles.causeDescription}>
                  و دى نقدر نكتشفها فى سن صغير، لانها بتأثر على حجم الخصية و
                  الوصول للبلوغ زى:
                </div>
                <div className={styles.causeExamples}>
                  <ul>
                    <li>الخصية المعلقة</li>
                    <li>متلازمة الكلاينفلتر</li>
                    <li>حذف جينى للكروموسوم Y</li>
                  </ul>
                </div>
              </div>

              <div
                className={styles.causeCard}
                style={{
                  background:
                    "linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)",
                  border: "2px solid #e91e63",
                }}
              >
                <div
                  className={styles.causeType}
                  style={{ color: "#c2185b", fontSize: "1.6rem" }}
                >
                  🩺 اسباب مكتسبة
                </div>
                <div className={styles.causeDescription}>
                  أسباب تحدث بعد الولادة وتؤثر على وظيفة الخصية زى:
                </div>
                <div className={styles.causeExamples}>
                  <ul>
                    <li>دوالى الخصية</li>
                    <li>العلاج الإشعاعي والكيميائي</li>
                    <li>العادات المضرة</li>
                    <li>السمنة المفرطة</li>
                    <li>الالتهابات الفيروسية</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Congenital Causes Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>اسباب خلقية أو وراثية</h2>
            <div className={styles.treatmentGrid}>
              {congenitalCauses.map((cause, index) => (
                <div
                  key={index}
                  className={styles.treatmentCard}
                  style={{
                    background:
                      "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
                    border: "2px solid #0284c7",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "2rem", marginLeft: "1rem" }}>
                      {cause.icon}
                    </span>
                    <h3
                      className={styles.treatmentTitle}
                      style={{ color: "#0369a1", margin: 0 }}
                    >
                      {cause.name}
                    </h3>
                  </div>

                  <div
                    className={styles.treatmentDescription}
                    style={{ marginBottom: "1.5rem" }}
                  >
                    {cause.description}
                  </div>

                  {cause.detection && (
                    <div
                      style={{
                        background: "#fef3c7",
                        padding: "1rem",
                        borderRadius: "10px",
                        marginBottom: "1.5rem",
                        border: "1px solid #f59e0b",
                      }}
                    >
                      <strong style={{ color: "#d97706" }}>
                        كيفية الاكتشاف:
                      </strong>
                      <p
                        style={{
                          margin: "0.5rem 0 0 0",
                          color: "#92400e",
                          fontSize: "0.9rem",
                          lineHeight: "1.6",
                        }}
                      >
                        {cause.detection}
                      </p>
                    </div>
                  )}

                  {cause.treatmentOptions && (
                    <div style={{ marginBottom: "1.5rem" }}>
                      <h4
                        style={{
                          color: "#0369a1",
                          marginBottom: "1rem",
                          fontSize: "1.1rem",
                        }}
                      >
                        خيارات العلاج:
                      </h4>
                      {cause.treatmentOptions.map((option, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: "#f8fafc",
                            padding: "1rem",
                            borderRadius: "8px",
                            marginBottom: "1rem",
                            border: "1px solid #cbd5e1",
                          }}
                        >
                          <div style={{ marginBottom: "0.5rem" }}>
                            <strong style={{ color: "#1e293b" }}>
                              {option.condition}:
                            </strong>
                          </div>
                          <div
                            style={{
                              color: "#64748b",
                              fontSize: "0.9rem",
                              lineHeight: "1.6",
                            }}
                          >
                            {option.treatment}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {cause.groups && (
                    <div style={{ marginBottom: "1.5rem" }}>
                      <h4
                        style={{
                          color: "#0369a1",
                          marginBottom: "1rem",
                          fontSize: "1.1rem",
                        }}
                      >
                        المجموعات الجينية:
                      </h4>
                      {cause.groups.map((group, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: "#f1f5f9",
                            padding: "1rem",
                            borderRadius: "8px",
                            marginBottom: "1rem",
                            border: "1px solid #cbd5e1",
                          }}
                        >
                          <div style={{ marginBottom: "0.5rem" }}>
                            <strong style={{ color: "#dc2626" }}>
                              {group.name}:
                            </strong>
                          </div>
                          <div
                            style={{
                              color: "#475569",
                              fontSize: "0.9rem",
                              lineHeight: "1.6",
                            }}
                          >
                            {group.effect}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {cause.habits && (
                    <div style={{ marginBottom: "1.5rem" }}>
                      <h4
                        style={{
                          color: "#0369a1",
                          marginBottom: "1rem",
                          fontSize: "1.1rem",
                        }}
                      >
                        أنواع العادات المضرة:
                      </h4>
                      {cause.habits.map((habit, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: "#fef2f2",
                            padding: "1rem",
                            borderRadius: "8px",
                            marginBottom: "1rem",
                            border: "1px solid #f87171",
                          }}
                        >
                          <div style={{ marginBottom: "0.5rem" }}>
                            <strong style={{ color: "#dc2626" }}>
                              {habit.name}:
                            </strong>
                          </div>
                          <div
                            style={{
                              color: "#7f1d1d",
                              fontSize: "0.9rem",
                              lineHeight: "1.6",
                            }}
                          >
                            {habit.effect}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {cause.importantNote && (
                    <div
                      style={{
                        background: "#dcfce7",
                        padding: "1rem",
                        borderRadius: "10px",
                        marginBottom: "1rem",
                        border: "1px solid #16a34a",
                      }}
                    >
                      <strong style={{ color: "#15803d" }}>ملاحظة مهمة:</strong>
                      <p
                        style={{
                          margin: "0.5rem 0 0 0",
                          color: "#166534",
                          fontSize: "0.9rem",
                          lineHeight: "1.6",
                        }}
                      >
                        {cause.importantNote}
                      </p>
                    </div>
                  )}

                  {cause.videoNote && (
                    <div
                      style={{
                        background: "#f3e8ff",
                        padding: "1rem",
                        borderRadius: "10px",
                        border: "1px solid #8b5cf6",
                      }}
                    >
                      <strong style={{ color: "#7c3aed" }}>
                        📹 فيديو توضيحي:
                      </strong>
                      <p
                        style={{
                          margin: "0.5rem 0 0 0",
                          color: "#6d28d9",
                          fontSize: "0.9rem",
                          lineHeight: "1.6",
                        }}
                      >
                        {cause.videoNote}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Video Section 1: Undescended Testicles */}
        <section className={styles.divider}>
          <div className={styles.container}>
            <h3>
              ولو عايزين تعرفوا اي علاقة الخصية المعلقة بانعدام الحيوانات
              المنوية وتاخر الانجاب، اسمع الفيديو ده مع الدكتور اسامة محمد البكل
            </h3>
            <div className={styles.videoWrapper}>
              <video className={styles.video} controls>
                <source
                  src="https://res.cloudinary.com/dvbusrvgi/video/upload/v1758798933/testicular_w8hvib.mp4"
                  type="video/mp4"
                />
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
            </div>
          </div>
        </section>
        {/* Acquired Causes Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>اسباب مكتسبة</h2>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#475569",
                  lineHeight: "1.8",
                }}
              >
                يوفر العلاج الفعال والميسور التكلفة للأمراض التي لا تهدد الحياة
                مجموعة واسعة من المختبرات الموثوقة والمزيد من الخدمات الطبية
              </p>
            </div>
            <div className={styles.treatmentGrid}>
              {acquiredCauses.map((cause, index) => (
                <div
                  key={index}
                  className={styles.treatmentCard}
                  style={{
                    background:
                      "linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%)",
                    border: "2px solid #ea580c",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "2rem", marginLeft: "1rem" }}>
                      {cause.icon}
                    </span>
                    <h3
                      className={styles.treatmentTitle}
                      style={{ color: "#c2410c", margin: 0 }}
                    >
                      {cause.name}
                    </h3>
                  </div>

                  <div
                    className={styles.treatmentDescription}
                    style={{ marginBottom: "1.5rem" }}
                  >
                    {cause.description}
                  </div>

                  {cause.treatment && (
                    <div
                      style={{
                        background: "#ecfdf5",
                        padding: "1rem",
                        borderRadius: "10px",
                        marginBottom: "1.5rem",
                        border: "1px solid #10b981",
                      }}
                    >
                      <strong style={{ color: "#059669" }}>العلاج:</strong>
                      <p
                        style={{
                          margin: "0.5rem 0 0 0",
                          color: "#065f46",
                          fontSize: "0.9rem",
                          lineHeight: "1.6",
                        }}
                      >
                        {cause.treatment}
                      </p>
                    </div>
                  )}

                  {cause.timing && (
                    <div
                      style={{
                        background: "#fef3c7",
                        padding: "1rem",
                        borderRadius: "10px",
                        marginBottom: "1.5rem",
                        border: "1px solid #f59e0b",
                      }}
                    >
                      <strong style={{ color: "#d97706" }}>
                        ⏰ توقيت مهم:
                      </strong>
                      <p
                        style={{
                          margin: "0.5rem 0 0 0",
                          color: "#92400e",
                          fontSize: "0.9rem",
                          lineHeight: "1.6",
                        }}
                      >
                        {cause.timing}
                      </p>
                    </div>
                  )}

                  {cause.outcomes && (
                    <div style={{ marginBottom: "1.5rem" }}>
                      <h4
                        style={{
                          color: "#c2410c",
                          marginBottom: "1rem",
                          fontSize: "1.1rem",
                        }}
                      >
                        احتمالات النتائج:
                      </h4>
                      {cause.outcomes.map((outcome, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: "#f8fafc",
                            padding: "0.8rem",
                            borderRadius: "8px",
                            marginBottom: "0.8rem",
                            border: "1px solid #cbd5e1",
                            borderRight: "4px solid #0ea5e9",
                          }}
                        >
                          <div
                            style={{
                              color: "#475569",
                              fontSize: "0.9rem",
                              lineHeight: "1.6",
                            }}
                          >
                            {outcome}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {cause.prevention && (
                    <div
                      style={{
                        background: "#f0fdf4",
                        padding: "1rem",
                        borderRadius: "10px",
                        marginBottom: "1.5rem",
                        border: "1px solid #22c55e",
                      }}
                    >
                      <strong style={{ color: "#16a34a" }}>🛡️ الوقاية:</strong>
                      <p
                        style={{
                          margin: "0.5rem 0 0 0",
                          color: "#15803d",
                          fontSize: "0.9rem",
                          lineHeight: "1.6",
                        }}
                      >
                        {cause.prevention}
                      </p>
                    </div>
                  )}

                  {cause.habits && (
                    <div style={{ marginBottom: "1.5rem" }}>
                      <h4
                        style={{
                          color: "#c2410c",
                          marginBottom: "1rem",
                          fontSize: "1.1rem",
                        }}
                      >
                        أنواع العادات المضرة:
                      </h4>
                      {cause.habits.map((habit, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: "#fef2f2",
                            padding: "1rem",
                            borderRadius: "8px",
                            marginBottom: "1rem",
                            border: "1px solid #f87171",
                          }}
                        >
                          <div style={{ marginBottom: "0.5rem" }}>
                            <strong style={{ color: "#dc2626" }}>
                              {habit.name}:
                            </strong>
                          </div>
                          <div
                            style={{
                              color: "#7f1d1d",
                              fontSize: "0.9rem",
                              lineHeight: "1.6",
                            }}
                          >
                            {habit.effect}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Diagnostic Tests Section */}
        <section className={styles.diagnosisSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              التحاليل المهمة لتشخيص الخلل الجيني
            </h2>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#475569",
                  lineHeight: "1.8",
                }}
              >
                و هنا عشان نقول ان انعدام الحيوانات المنوية سببه خلل جينى لازم
                نعمل تحليلين مهمين:
              </p>
            </div>
            <div className={styles.testsGrid}>
              {geneticTests.map((test, index) => (
                <div
                  key={index}
                  className={styles.testCard}
                  style={{
                    background:
                      index === 0
                        ? "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)"
                        : "linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%)",
                    border:
                      index === 0 ? "2px solid #0284c7" : "2px solid #ea580c",
                  }}
                >
                  <div
                    className={styles.testIcon}
                    style={{ color: index === 0 ? "#0369a1" : "#c2410c" }}
                  >
                    {test.icon}
                  </div>
                  <h3
                    className={styles.testName}
                    style={{ color: index === 0 ? "#0369a1" : "#c2410c" }}
                  >
                    {test.test}
                  </h3>
                  <p
                    className={styles.testDescription}
                    style={{ marginBottom: "1.5rem" }}
                  >
                    {test.description}
                  </p>

                  <div
                    style={{
                      background: index === 0 ? "#dbeafe" : "#fed7aa",
                      padding: "1rem",
                      borderRadius: "8px",
                      marginBottom: "1rem",
                    }}
                  >
                    <strong
                      style={{ color: index === 0 ? "#1e40af" : "#9a3412" }}
                    >
                      الأهمية:
                    </strong>
                    <p
                      style={{
                        margin: "0.25rem 0 0 0",
                        color: index === 0 ? "#1e3a8a" : "#7c2d12",
                        fontSize: "0.9rem",
                      }}
                    >
                      {test.importance}
                    </p>
                  </div>

                  <div
                    style={{
                      background: "#f1f5f9",
                      padding: "1rem",
                      borderRadius: "8px",
                      border: "1px solid #cbd5e1",
                    }}
                  >
                    <strong style={{ color: "#1e293b" }}>متى نستخدمه:</strong>
                    <p
                      style={{
                        margin: "0.25rem 0 0 0",
                        color: "#475569",
                        fontSize: "0.9rem",
                      }}
                    >
                      {test.when}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Video Section 2: Klinefelter Syndrome */}
        <section className={styles.divider}>
          <div className={styles.container}>
            <h3>
              ولو عايز تعرف اكثر عن حالات متلازمة كلاينفلتر وكيفية تشخيصها
              وعلاجها، اسمع الفيديو ده مع دكتور اسامة محمد البكل
            </h3>
            <div className={styles.videoWrapperyoutube}>
              <iframe
                className={styles.videoYou}
                src="https://www.youtube.com/embed/Sy_NauCgzfI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
        {/* Encouraging Message */}
        <section className={styles.successSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>رسالة مهمة للأمل</h2>
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
                  �
                </div>
                <h3 style={{ color: "#15803d" }}>لا تيأس من العلاج</h3>
                <p style={{ color: "#166534" }}>
                  فى النهاية خلينا نتفق انك مش لازم تيأس لو اتشخصت ان عندك
                  انعدام للحيوانات المنوية، لان فى حالات كتير جدا بيكون ليها
                  علاج و لسه عندنا فرصه ان يكون عندنا طفل، المهم اننا نعرف السبب
                  و نتشخص و نتعالج صح، عشان نقدر ان يكون عندنا طفل.
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
                  لو قررت تبدأ العلاج دلوقتى اتصل بينا، واحنا هنحددلك معاد مع د.
                  اسامة محمد البكل مدرس واستشاري طب وجراحة أمراض الذكورة و تأخر
                  الإنجاب و الصحه الجنسية بطب القصر العينى، و خلينا نبدء مع بعض
                  رحلة العلاج.
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
                  نحن هنا لمساعدتك في كل خطوة من رحلة العلاج والوصول لحلم
                  الإنجاب.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>ابدأ رحلة العلاج معنا</h2>
              <p>
                لو قررت تبدأ العلاج دلوقتى اتصل بينا، واحنا هنحددلك معاد مع د.
                اسامة محمد البكل مدرس واستشاري طب وجراحة أمراض الذكورة و تأخر
                الإنجاب و الصحه الجنسية بطب القصر العينى، و خلينا نبدء مع بعض
                رحلة العلاج.
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
        </section>
        {/* Related Conditions */}
        {/* <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>حالات ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link href="/surgeries/varicocele" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🩸</span>
                <h3>دوالى الخصيه وتاثيرها على الانجاب</h3>
                <p>تفاصيل عن دوالي الخصية من الدرجة الثانية والثالثة وعلاجها</p>
              </Link>
              <Link
                href="/surgeries/testicular-biopsy/microscopic-tese"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>🔬</span>
                <h3>التفتيش الميكروسكوبي للخصية</h3>
                <p>استخراج الحيوانات المنوية من الخصية للحقن المجهري</p>
              </Link>
              <Link
                href="/fertility/azoospermia"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>🧪</span>
                <h3>إنعدام الحيوانات المنوية</h3>
                <p>أسباب انعدام الحيوانات المنوية وعلاقتها بمشاكل الخصية</p>
              </Link>
            </div>
          </div>
        </section> */}
      </div>
    </MainLayout>
  );
}
