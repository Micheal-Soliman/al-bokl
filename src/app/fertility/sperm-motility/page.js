import MainLayout from "../../components/layout/MainLayout";
import { generateSEOMetadata } from "../../../lib/seo/articleSEO";
import Link from "next/link";
import styles from "../fertility-condition.module.css";
import Image from "next/image";

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "ضعف حركة الحيوانات المنوية - الدكتور أسامة البكل",
    description:
      "الحيوانات المنوية لازم تكون سريعة الحركة علشان تقدر توصل للبويضة وتكون جنين ، ولو كانت ضعيفة الحركة هتسبب تاخر في الانجاب ، اعرف اي اسبابها وطرق علاجها.",
    keywords: [
      "ضعف حركة الحيوانات المنوية",
      "حركة الحيوان المنوي",
      "تأخر الإنجاب",
      "دوالي الخصية",
      "التهاب الجهاز التناسلي",
      "د أسامة البكل",
    ],
    canonical: "/fertility/sperm-motility",
    image: "/images/fertility/sperm-motility.webp",
  });
}

export default function SpermMotilityPage() {
  const sperm_structure = [
    {
      part: "الاكروسوم",
      description:
        "وده بيكون موجود فى بداية راس الحيوان المنوى، وده اللى بيخلى الحيوان المنوى قادر انه يخترق البويضة",
      function: "اختراق البويضة",
      icon: "🎯",
    },
    {
      part: "راس الحيوان المنوى",
      description: "و هى دى اللى بيكون فيها الماده الوراثية",
      function: "حمل المادة الوراثية",
      icon: "🧬",
    },
    {
      part: "الرقبة",
      description:
        "تعتبر جزء مهم فى حركة الحيوان المنوى، لان عن طريقها بتتحول المواد الغذائية اللى بياخدها الحيوان المنوى من السائل المنوى، لطاقة و دى اللى بتساعد الحيوان المنوى على الحركة",
      function: "تحويل الغذاء لطاقة",
      icon: "⚡",
    },
    {
      part: "الديل",
      description:
        "بيتكون من مجموعة من الانابيب بتكون رفيعة جدا و مربوطة ببعضها، بتتحرك يمين و شمال، و بسبب الحركة دى الحيوان المنوى بيقدر انه يعوم و يتحرك من مكان لمكان، وده هو اساس حركة الحيوان المنوى و اللى من غيره مش هيقدر الحيوان المنوى يتحرك حتى فى مكانه",
      function: "الحركة والسباحة",
      icon: "🏊‍♂️",
    },
  ];

  const motility_types = [
    {
      type: "الحركة المتقدمة السريعة في خط مستقيم",
      description:
        "ودي معناها ان الحيوان المنوي عنده القدرة انه يتحرك من مكان لمكان، وحركته بتكون سريعة وفى مسار مستقيم عشان يقدر انه يوصل للبويضة ويلقحها",
      normal_range: "32% من نسبة الحيوانات المنوية كلها (مع الحركة المتوسطة)",
      importance: "الأهم للإخصاب الطبيعي",
      icon: "🏃‍♂️",
    },
    {
      type: "الحركة المتقدمة البطيئة",
      description:
        "وهنا الحيوان المنوي مش بيكون بيتحرك بسرعة كبيرة ولا في خط مستقيم، و ده بيكون فرصة اقل في انه يوصل للبويضة",
      normal_range: "ضمن الـ 32% مع الحركة السريعة",
      importance: "مفيدة للإخصاب لكن بفرصة أقل",
      icon: "🚶‍♂️",
    },
    {
      type: "الحركة الثابتة او الاهتزازية",
      description:
        "ودي معناها ان الحيوان المنوي بيتحرك في مكانه بس، لكن ميقدرش انه يوصل او يعوم لمكان تانى وطبعا في الحالة دي الحيوان المنوي مش بيوصل للبويضة",
      normal_range: "ضمن إجمالي الحركة 40%",
      importance: "لا تساعد في الإخصاب",
      icon: "🔄",
    },
    {
      type: "انعدام الحركة",
      description:
        "ودي واضحة من اسمها ان الحيوان المنوى يكون مش بيتحرك خالص ولا حتى في مكانة، وده بيكون سببه اما ان الحيوان المنوي عنده انعدام في الحركة او تشوهات بالديل او ان الحيوان المنوي ميت",
      normal_range: "يجب أن تكون أقل من 60%",
      importance: "لا تساعد في الإخصاب",
      icon: "⏸️",
    },
  ];

  const causes = [
    {
      category: "مشاكل جينية",
      description:
        "زى مشكله فى الخصية اتسببت فى انتاج حيوانات منويه مشوه، بمعنى ان عنده مشكله فى الديل تمنعه من الحركة",
      conditions: [
        "الديل قصير او معوج",
        "فيه شق فى الديل",
        "الديل مش موجود خالص",
        "تشوهات وراثية فى بنية الحيوان المنوي",
      ],
      treatment: "مبيكونش فى علاج و بنضطر نعمل على طول حقن مجهرى",
      icon: "🧬",
    },
    {
      category: "اسباب مكتسبة",
      description: "أسباب يمكن علاجها وتحسين الحركة من خلال العلاج المناسب",
      conditions: [
        <Link
          key="varicocele-link"
          href="/surgeries/varicocele"
          style={{ color: "#3b82f6", textDecoration: "underline" }}
        >
          دوالى فى الخصية من الدرجة التانية او التالته
        </Link>,
        "التدخين بشراهه",
        "سمنة مفرطة",
        "التهاب في الجهاز التناسلي (الحوصلة المنوية – البروستاتا)",
        "زيادة فى نسبة لزوجة السائل المنوي",
        "عدوى جنسية بكتيريه",
        "اضطرابات فى افرازات الغده الدرقية",
        "خلل هرمونى",
        "التهاب و صديد فى السائل المنوى",
      ],
      treatment:
        "لازم نعرف اي سبب ضعف الحركة، و نبدء نعالج السبب ده و بعدها هيكون فى تحسن فى حركة الحيوان المنوى",
      icon: "🩺",
    },
  ];

  const treatment_approaches = [
    {
      category: "العلاج الدوائي",
      treatments: [
        {
          name: "مضادات الأكسدة",
          description: "فيتامين C, E, الزنك, السيلينيوم",
          duration: "3-6 شهور",
          effectiveness: "60-70%",
        },
        {
          name: "الكوإنزيم Q10",
          description: "يحسن طاقة الحيوانات المنوية",
          duration: "3-4 شهور",
          effectiveness: "50-60%",
        },
        {
          name: "الكارنيتين",
          description: "يحسن حركة الحيوانات المنوية",
          duration: "3-6 شهور",
          effectiveness: "40-50%",
        },
      ],
    },
    {
      category: "تغيير نمط الحياة",
      treatments: [
        {
          name: "الإقلاع عن التدخين",
          description: "تحسن كبير في الحركة خلال 3 شهور",
          duration: "فوري",
          effectiveness: "70-80%",
        },
        {
          name: "ممارسة الرياضة",
          description: "تحسن الدورة الدموية والهرمونات",
          duration: "مستمر",
          effectiveness: "50-60%",
        },
        {
          name: "التغذية الصحية",
          description: "غني بمضادات الأكسدة والفيتامينات",
          duration: "مستمر",
          effectiveness: "40-50%",
        },
      ],
    },
  ];

  const diagnostic_tests = [
    {
      test: "تحليل السائل المنوي الأساسي",
      description: "تقييم النسب المختلفة لحركة الحيوانات المنوية",
      normal_values: "حركة تقدمية ≥ 32%، حركة إجمالية ≥ 40%",
      icon: "🔬",
    },
    {
      test: "اختبار الحيوية (Vitality Test)",
      description: "تحديد نسبة الحيوانات المنوية الحية",
      normal_values: "58% أو أكثر من الحيوانات المنوية حية",
      icon: "💓",
    },
    {
      test: "اختبار تجمد الحيوانات المنوية",
      description: "تقييم قدرة الحيوانات المنوية على البقاء بعد التجميد",
      normal_values: "انخفاض أقل من 50% في الحركة",
      icon: "❄️",
    },
    {
      test: "اختبار اختراق عنق الرحم",
      description: "تقييم قدرة الحيوانات المنوية على اختراق مخاط عنق الرحم",
      normal_values: "اختراق جيد لمسافة مناسبة",
      icon: "🎯",
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
                  <span>ضعف حركة الحيوانات المنوية</span>
                </div>
                <h1 className={styles.heroTitle}>ضعف حركة الحيوانات المنوية</h1>
                <p className={styles.heroDescription}>
                  حركة الحيوان المنوى هى الدليل على حيويته و جودته، وهى الطريقة
                  اللى بيتنقل بيها الحيوان المنوى من الخصية للقنوات المنوية و
                  بعد مايدخل لعنق الرحم مع القذف، بيفضل الحيوان المنوى يعوم لحد
                  ما يوصل لقناة فالوب وده المكان اللى بيكون فيه البويضة، فكل ما
                  كان فى ضعف او بطئ فى الحركة، كل ما قلت فرص وصول الحيوان المنوى
                  للبويضه، وده طبعا هيسبب تأخر فى الانجاب.
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>15</span>
                    <span className={styles.statLabel}>
                      مليون حيوان منوي/مل
                    </span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>32%</span>
                    <span className={styles.statLabel}>
                      الحد الأدنى للحركة المتقدمة
                    </span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>40%</span>
                    <span className={styles.statLabel}>
                      إجمالي الحركة الطبيعية
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.heroImage}>
                <Image
                  src="/motility-.webp"
                  alt="ضعف حركة الحيوانات المنوية"
                  layout="responsive"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sperm Structure Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              تعالوا دلوقتى نعرف الحيوان المنوى بيتكون من اى:
            </h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  الحيوان المنوي بيتكون من 4 اجزاء مهمة، كل جزء ليه وظيفة خاصة
                  فى عملية الإخصاب والحركة. فهم هذه الأجزاء مهم جداً لمعرفة
                  أسباب ضعف الحركة وطرق علاجها.
                </p>
                <p>
                  و زى ما قولنا ان الحيوان المنوى من غير الديل مش هيقدر انه
                  يتحرك حتى فى مكانه، وده يوضح أهمية كل جزء فى الحيوان المنوي
                  لضمان وصوله للبويضة وإخصابها بنجاح.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>🧬</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sperm Structure Details */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>أجزاء الحيوان المنوي</h2>
            <div className={styles.causesGrid}>
              {sperm_structure.map((part, index) => (
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
                    <div
                      style={{
                        background: "#f1f5f9",
                        padding: "1rem",
                        borderRadius: "8px",
                        marginTop: "1rem",
                      }}
                    >
                      <strong style={{ color: "#1e40af" }}>الوظيفة:</strong>
                      <p style={{ margin: "0.5rem 0 0 0", color: "#475569" }}>
                        {part.function}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Motility Types */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              أنواع حركات الحيوان المنوى (4 حركات)
            </h2>
            <div className={styles.causesGrid}>
              {motility_types.map((type, index) => (
                <div key={index} className={styles.causeCard}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "2rem" }}>{type.icon}</span>
                    <h3 className={styles.causeType}>{type.type}</h3>
                  </div>
                  <p className={styles.causeDescription}>{type.description}</p>

                  <div className={styles.causeExamples}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: "0.5rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div>
                        <h4>المعدل الطبيعي:</h4>
                        <p style={{ color: "#10b981", fontWeight: "600" }}>
                          {type.normal_range}
                        </p>
                      </div>
                      <div>
                        <h4>الأهمية للإخصاب:</h4>
                        <p style={{ color: "#3b82f6", fontWeight: "600" }}>
                          {type.importance}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Normal Ranges Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              المعدلات الطبيعية لحركة الحيوان المنوى
            </h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  فى الطبيعى عدد الحيوانات المنوية بيكون{" "}
                  <strong>15 مليون حيوان منوى فى المللى الواحد</strong>، و لازم
                  عشان اقول ان حركة الحيوان المنوى طبيعية لازم تكون نسبة
                  الحيوانات اللى بتتحرك حركة متقدمة سريعه و حركة متوسطة تكون{" "}
                  <strong>32% من نسبة الحيوانات المنوية كلها</strong>.
                </p>
                <p>
                  ولازم تكون اجمالى نسبة الحركة سواء سريعه متقدمة او متوسطة او
                  ثابته تكون{" "}
                  <strong>
                    40% من اجمالى عدد الحيوانات المنوية فى كل مللى
                  </strong>
                  ، وقتها انا كده معنديش ضعف حركة، لكن لو النسب دى قلت يبقى
                  وقتها انا عندى ضعف فى الحركة.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>📊</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.divider}>
          <h3>
            ولو عايز تعرف اكثر عن حركة الحيوانات المنوية الطبيعية ، اسمع الفيديو
            ده مع الدكتور اسامة محمد البكل………
          </h3>

          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/U7ixTYALfoA"
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
              أسباب ضعف حركة الحيوانات المنوية
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
                      الحالات الشائعة:
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
                      padding: "0.75rem",
                      borderRadius: "8px",
                    }}
                  >
                    <strong style={{ color: "#1e40af" }}>العلاج:</strong>
                    <p
                      style={{
                        margin: "0.25rem 0 0 0",
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

        {/* Diagnosis Section */}
        {/* <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>التشخيص والفحوصات</h2>
            <div className={styles.causesGrid}>
              {diagnostic_tests.map((test, index) => (
                <div key={index} className={styles.causeCard}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "2rem" }}>{test.icon}</span>
                    <h3 className={styles.causeType}>{test.test}</h3>
                  </div>
                  <p className={styles.causeDescription}>{test.description}</p>

                  <div className={styles.causeInfo}>
                    <div className={styles.treatment}>
                      <strong>القيم الطبيعية:</strong> {test.normal_values}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Treatment Section */}
        {/* <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>خيارات العلاج</h2>
            {treatment_approaches.map((approach, categoryIndex) => (
              <div key={categoryIndex} style={{ marginBottom: "3rem" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#1e293b",
                    marginBottom: "2rem",
                    textAlign: "center",
                  }}
                >
                  {approach.category}
                </h3>
                <div className={styles.treatmentGrid}>
                  {approach.treatments.map((treatment, index) => (
                    <div key={index} className={styles.treatmentCard}>
                      <h3 className={styles.treatmentTitle}>
                        {treatment.name}
                      </h3>
                      <p className={styles.treatmentDescription}>
                        {treatment.description}
                      </p>

                      <div className={styles.treatmentDetails}>
                        <div className={styles.detail}>
                          <span className={styles.detailLabel}>
                            مدة العلاج:
                          </span>
                          <span className={styles.detailValue}>
                            {treatment.duration}
                          </span>
                        </div>
                        <div className={styles.detail}>
                          <span className={styles.detailLabel}>
                            نسبة التحسن:
                          </span>
                          <span className={styles.detailValue}>
                            {treatment.effectiveness}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Lifestyle Recommendations */}
        {/* <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              نصائح لتحسين حركة الحيوانات المنوية
            </h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <h3>التغذية المفيدة:</h3>
                <ul>
                  <li>الأسماك الغنية بالأوميجا 3</li>
                  <li>المكسرات والبذور</li>
                  <li>الفواكه والخضروات الملونة</li>
                  <li>اللحوم الخالية من الدهون</li>
                  <li>منتجات الألبان قليلة الدسم</li>
                </ul>

                <h3>المكملات المفيدة:</h3>
                <ul>
                  <li>فيتامين C (1000 مجم يومياً)</li>
                  <li>فيتامين E (400 وحدة يومياً)</li>
                  <li>الزنك (15 مجم يومياً)</li>
                  <li>السيلينيوم (200 ميكروجرام)</li>
                  <li>الكوإنزيم Q10 (200 مجم)</li>
                </ul>
              </div>

              <div className={styles.procedureSteps}>
                <h3>خطوات التحسن:</h3>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                      <h4>تقييم شامل</h4>
                      <p>فحص أسباب ضعف الحركة</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <h4>تغيير نمط الحياة</h4>
                      <p>إقلاع عن التدخين وتحسين التغذية</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <h4>العلاج الدوائي</h4>
                      <p>مضادات الأكسدة والمكملات</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                      <h4>المتابعة</h4>
                      <p>تحليل دوري كل 3 شهور</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Success Stories */}
        {/* <section className={styles.successSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>قصص نجاح</h2>
            <div className={styles.successStories}>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>✅</div>
                <h3>عمر - 31 سنة</h3>
                <p>
                  "كانت حركة الحيوانات المنوية 15% فقط. بعد الإقلاع عن التدخين
                  وتناول مضادات الأكسدة لمدة 4 شهور، تحسنت إلى 45% وحدث الحمل
                  طبيعياً."
                </p>
              </div>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>✅</div>
                <h3>أحمد - 28 سنة</h3>
                <p>
                  "ضعف شديد في الحركة بسبب دوالي الخصية. بعد العملية والعلاج
                  بالمكملات، تحسنت الحركة بشكل كبير وتمكنا من الإنجاب."
                </p>
              </div>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>✅</div>
                <h3>محمد - 35 سنة</h3>
                <p>
                  "رغم ضعف الحركة الشديد، نجح الحقن المجهري من المحاولة الأولى.
                  الآن لدينا طفل سليم والحمد لله."
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* When to Consider IVF */}
        {/* <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>متى نلجأ للحقن المجهري؟</h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <h3>دواعي الحقن المجهري:</h3>
                <ul>
                  <li>ضعف شديد في الحركة (أقل من 10%)</li>
                  <li>فشل العلاج الدوائي لمدة 6 شهور</li>
                  <li>وجود عوامل نسائية مصاحبة</li>
                  <li>تأخر الإنجاب لأكثر من سنتين</li>
                  <li>عمر الزوجة أكبر من 35 سنة</li>
                </ul>

                <h3>نسب نجاح الحقن المجهري:</h3>
                <ul>
                  <li>70-80% معدل إخصاب</li>
                  <li>50-60% معدل حمل</li>
                  <li>40-50% معدل ولادة حية</li>
                  <li>نتائج ممتازة حتى مع ضعف الحركة الشديد</li>
                </ul>
              </div>

              <div className={styles.procedureSteps}>
                <h3>خطوات الحقن المجهري:</h3>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                      <h4>تحضير العينة</h4>
                      <p>تحضير وغسل الحيوانات المنوية</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <h4>اختيار الأفضل</h4>
                      <p>اختيار الحيوانات المنوية الأكثر حركة</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <h4>الحقن المجهري</h4>
                      <p>حقن حيوان منوي واحد في كل بويضة</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                      <h4>نقل الأجنة</h4>
                      <p>نقل الأجنة الجيدة للرحم</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Treatment Approaches Section */}
        {/* <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              طب ازاى بنعالج ضعف حركة الحيوانات المنوية ؟
            </h2>
            <div
              className={styles.definitionContent}
              style={{ marginBottom: "3rem" }}
            >
              <div className={styles.definitionText}>
                <p>
                  العلاج هنا بيكون على حسب اى اللى سبب ضعف فى حركة الحيوان
                  المنوى فلو كان :
                </p>
              </div>
            </div>

            <div className={styles.treatmentGrid}>
              <div className={styles.treatmentCard}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span style={{ fontSize: "2.5rem", color: "#ef4444" }}>
                    🧬
                  </span>
                  <h3 className={styles.treatmentTitle}>السبب جينى</h3>
                </div>
                <p className={styles.treatmentDescription}>
                  السبب فى ضعف الحركة هو خلل جينى ، وقتها مبيكونش فى علاج و
                  بنضطر نعمل على طول حقن مجهرى
                </p>
                <div className={styles.treatmentDetails}>
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>العلاج:</span>
                    <span
                      className={styles.detailValue}
                      style={{ color: "#ef4444" }}
                    >
                      حقن مجهري مباشرة
                    </span>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>النتائج:</span>
                    <span className={styles.detailValue}>
                      نتائج ممتازة مع التقنيات الحديثة
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.treatmentCard}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span style={{ fontSize: "2.5rem", color: "#10b981" }}>
                    🩺
                  </span>
                  <h3 className={styles.treatmentTitle}>السبب مكتسب</h3>
                </div>
                <p className={styles.treatmentDescription}>
                  لكن لو كان السبب مكتسب ، فى البداية لازم نعرف اي سبب ضعف
                  الحركة ، و نبدء نعالج السبب ده و بعدها هيكون فى تحسن فى حركة
                  الحيوان المنوى و هيكون فى فرصة كبيرة ان يحصل حمل طبيعى .
                </p>
                <div className={styles.treatmentDetails}>
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>العلاج:</span>
                    <span
                      className={styles.detailValue}
                      style={{ color: "#10b981" }}
                    >
                      علاج السبب الأساسي
                    </span>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>النتائج:</span>
                    <span className={styles.detailValue}>
                      تحسن ملحوظ وحمل طبيعي
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Importance of Treatment Section */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              طيب هو ليه اصلا مهم اعالج حركة الحيوان المنوى ، و ليه لازم يكون
              الحيوان المنوى بيتحرك مدام هعمل حقن مجهرى ؟
            </h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
                    padding: "2rem",
                    borderRadius: "15px",
                    border: "2px solid #0ea5e9",
                    marginBottom: "2rem",
                  }}
                >
                  <h3 style={{ color: "#0c4a6e", marginBottom: "1rem" }}>
                    💡 الإجابة العلمية:
                  </h3>
                  <p style={{ lineHeight: "1.8", color: "#0f172a", margin: 0 }}>
                    هنا هقولك ان حركة الحيوان المنوى دى معناها ان الحيوان المنوى
                    فيه حيويه و ان جودته عاليه مفيهوش اى نسبة تشوه ، لكن لو مش
                    بيتحرك وقتها الحيوان المنوى ده هيكون ضعيف ، و حتى لو انا
                    اخدته و دخلته على طول فى البويضة ، هو مش هيقدر انه يخصبها ،
                    ووقتها مش هيتكون جنين .
                  </p>
                </div>

                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
                    padding: "2rem",
                    borderRadius: "15px",
                    border: "2px solid #22c55e",
                  }}
                >
                  <h3 style={{ color: "#14532d", marginBottom: "1rem" }}>
                    ⭐ معلومة مهمة:
                  </h3>
                  <p style={{ lineHeight: "1.8", color: "#0f172a", margin: 0 }}>
                    حركة الحيوان المنوى المتقدمة السريعه ممكن تحل مشكلة نقص عدد
                    الحيوانات المنوية ، لان انا عندى حيوان منوى سليم مفيهوش اى
                    تشوهات و بيقدر يتحرك و ده معناه انه هيقدر يوصل للبويضة و
                    يخصبها و يكون جنين ويحصل حمل .
                  </p>
                </div>
              </div>

              <div className={styles.procedureSteps}>
                {/* <h3>الخطة العلاجية:</h3> */}
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>!</div>
                    <div className={styles.stepContent}>
                      <h4>
                        و دلوقتى لو عاوز تعرف معلومات عن تشوه الحيوانات المنويه
                        و اسبابه ممكن
                        <Link href="/fertility/sperm-morphology">
                          {" "}
                          نضغط هنا{" "}
                        </Link>
                      </h4>
                      {/* <p>تحديد نوع السبب (جيني أم مكتسب)</p> */}
                    </div>
                  </div>
                  {/* <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <h4>وضع الخطة</h4>
                      <p>اختيار العلاج المناسب حسب السبب</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <h4>العلاج المستهدف</h4>
                      <p>علاج السبب أو التوجه للحقن المجهري</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                      <h4>تحقيق الهدف</h4>
                      <p>تحسن الحركة أو نجاح الحقن المجهري</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>حرك حيواناتك المنوية نحو النجاح</h2>
              <p>
                ضعف حركة الحيوانات المنوية ليس نهاية الطريق. مع العلاج المناسب
                والمتابعة الدقيقة، يمكن تحسين الحركة وتحقيق حلم الأبوة.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز تحليل شامل
                </Link>
                <Link href="tel:+201017912197" className={styles.secondaryBtn}>
                  اتصل الآن: 01017912197
                </Link>
              </div>
              <div
                style={{
                  marginTop: "3rem",
                  padding: "2rem",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "1.1rem",
                    margin: 0,
                  }}
                >
                  و دلوقتى لو عاوز تعرف معلومات عن تشوه الحيوانات المنويه و
                  اسبابه ممكن{" "}
                  <Link
                    href="/fertility/sperm-morphology"
                    style={{
                      color: "#fbbf24",
                      textDecoration: "underline",
                      fontWeight: "600",
                    }}
                  >
                    تضغط هنا
                  </Link>
                </p>
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
                href="/fertility/sperm-morphology"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>🧬</span>
                <h3>تشوهات الحيوان المنوي</h3>
                <p>تعرف على مشاكل شكل الحيوانات المنوية</p>
              </Link>
              <Link
                href="/fertility/azoospermia"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>🔬</span>
                <h3>إنعدام الحيوانات المنوية</h3>
                <p>حالة عدم وجود حيوانات منوية في السائل المنوي</p>
              </Link>
              <Link href="/surgeries/varicocele" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🩸</span>
                <h3>دوالى الخصيه وتاثيرها على الانجاب</h3>
                <p>تأثير دوالي الخصية على حركة الحيوانات المنوية</p>
              </Link>
            </div>
          </div>
        </section> */}
      </div>
    </MainLayout>
  );
}
