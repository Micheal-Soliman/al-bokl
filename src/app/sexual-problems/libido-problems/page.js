import MainLayout from "../../components/layout/MainLayout";
import { generateSEOMetadata } from "../../../lib/seo/articleSEO";
import Link from "next/link";
import styles from "../sexual-condition.module.css";
import Image from "next/image";

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "مشاكل الرغبة الجنسية - الدكتور أسامة البكل",
    description:
      "ضعف الرغبة الجنسية ليها اسباب كثير جدا ممكن تكون نفسية او عضوية او سلوكية ، وبتخليك تبعد عن العلاقة الزوجية وبتحس أن العلاقة مجرد واجب بتعملة مفيهوش اى متعه خالص.",
    keywords: [
      "مشاكل الرغبة الجنسية",
      "ضعف الرغبة الجنسية",
      "الأفلام الجنسية",
      "العادة السرية",
      "هرمون البرولاكتين",
      "متلازمة الايض",
      "د أسامة البكل",
    ],
    canonical: "/sexual-problems/libido-problems",
    image: "/images/sexual-problems/libido-problems.webp",
  });
}

export default function LibidoProblemsPage() {
  const psychological_causes = [
    {
      cause: "مشاهدة الأفلام الجنسية بكثرة",
      description:
        "زى اننا نكون بنتفرج على افلام جنسية كتير، و هنا انت مش مريض ضعف رغبة جنسية انت بتكون رسمت شكل معين للعلاقة الجنسية و ده اللى بيشبع رغبتك الجنسية، و عشان كده بتبعد عن العلاقة الزوجية",
      icon: "📺",
    },
    {
      cause: "ممارسة العادة السرية بشكل مفرط",
      description:
        "او اننا نكون بنمارس العاده السرية بشكل مفرط، و ده بيسبب توحد فى العلاقة الزوجيه، و وقتها هتكون بتفضل انك تمارس العاده السريه عن العلاقة الزوجيه، و مش بتكون متقبل فكرة وجود طرف تانى فى العلاقة و مش بتوصل للأثاره الجنسية ولا للنشوه غير بالعادة السرية",
      icon: "🚫",
    },
    {
      cause: "سرعة القذف",
      description:
        "لو عندنا سرعة فى القذف، فده بيخلينا مش بنلحق نستمتع بالعلاقة، و بنحس ان الزوجه كمان مش مستمتعه ده بيخلينا نبعد عن العلاقة الزوجية",
      icon: "⏱️",
    },
    {
      cause: "ضعف الانتصاب",
      description:
        "ولو عندنا ضعف انتصاب، ده هيسبب حاجز نفسى و خوف من الفشل فى العلاقة و دة بيخلينا نحس بضعف فى الرغبة الجنسية دايماّ هنكون بنبعد عن العلاقة الزوجية، و لما بنعالجه و بنلاقى اننا نجحنا فى العلاقة الزوجية، هنحب اننا نمارسها اكتر و ده هيزود الرغبة الجنسية",
      link: "/sexual-problems/erectile-dysfunction",
      icon: "💪",
    },
    {
      cause: "ضعف النشوة الجنسية",
      description:
        "اخيراّ لو فى ضعف فى النشوة الجنسية ده بيخلينا مش بنستمتع اوى بالعلاقة فمش بنكون مهتمين أننا نمارسها بانتظام",
      icon: "😔",
    },
  ];

  const organic_causes = [
    {
      cause: "ورم او زياده فى نشاط الغده النخامية",
      description:
        "ده هيتسبب فى انتاج هرمون البرولاكتين بكميات اكبر من الطبيعى، و بسبب الزياده فى هرمون البرولاكتين هيقل هرمون الذكوره، و هتبدء تحصل مشاكل كتير اولها ضعف فى الرغبه الجنسية، لو معالجناش زياده هرمون البرولاكتين هيسبب بعد كده ضعف فى الانتصاب",
      icon: "🧠",
    },
    {
      cause: "متلازمة الايض",
      description:
        "و دى معناها نقص هرمون الذكوره و من اعراض المتلازمة دى: خمول و كسل، زياده فى نسبة الدهون فى الدم و فى الجسم و بالذات فى منطقة البطن، ارتفاع فى ضغط الدم، الاصابة بالسكر، ضعف فى الانتصاب. و كل ده هيسبب فى النهايه ضعف فى الرغبة الجنسية",
      symptoms: [
        "خمول و كسل",
        "زياده فى نسبة الدهون فى الدم، و فى الجسم و بالذات فى منطقة البطن",
        "ارتفاع فى ضغط الدم",
        "الاصابة بالسكر",
        "ضعف فى الانتصاب",
      ],
      icon: "⚗️",
    },
  ];

  const behavioral_causes = [
    {
      cause: "الضغوط اليومية",
      description: "لانه بتأثر على الجهاز العصبى و بكده هتأثر على الرغبة",
      icon: "😰",
    },
    {
      cause: "الوجبات السريعة بكميات كبيرة",
      description:
        "لو متعودين اننا ناكل و جبات سريعة بكميات كبيرة و لفترات طويله ده هيسبب زياده فى هرمون E2(الهرمون الانثوى)، و بسبب زياده الهرمون الانثوى هيكون عندنا ضعف فى الرغبة الجنسية",
      icon: "🍔",
    },
    {
      cause: "التدخين والمخدرات والكحول",
      description:
        "لو بندخن او بنشرب مخدرات و مواد كحوليه، ده هيأثر على ضخ الدم جوا القضيب و هيسبب ضعف فى الانتصاب، و زى ما قولنا قبل كده ان بسبب ضعف الانتصاب و خوفنا من الفشل، هنلاقى اننا بنبعد عن العلاقة الزوجية، وده هيسبب ضعف فى الرغبه",
      icon: "🚬",
    },
    {
      cause: "عدم ممارسة الرياضة",
      description:
        "لو مش بنمارس اى رياضة ده هيقلل هرمون الذكوره، و هتقل معاه الرغبه الجنسية",
      icon: "🏃‍♂️",
    },
    {
      cause: "أدوية الاكتئاب",
      description: "لو بناخد ادوية اكتئاب فهى بردو بتأثر على الغبة الجنسية",
      icon: "💊",
    },
    {
      cause: "ممارسات الزوجة",
      description:
        "فى كمان بعض الممارسات من الزوجة نفسها تسبب ضعف فى الرغبة الجنسية زى عدم التفاعل وقت العلاقة الزوجية، او انها بأستمرار تكون بترفض العلاقة الزوجية، كل ده بيخلى الزوج ميحسش بمتعه فى العلاقة الزوجية، و بكده هيبعد عنها",
      icon: "👫",
    },
  ];

  const treatment_warning = {
    title: "تحذير مهم قبل العلاج",
    description:
      "و بعد ما عرفنا يعنى اى ضعف الرغبة الجنسية و اسبابها تعالوا بقى نعرف اى العلاج. و قبل ما نتكلم عن العلاج لازم ناخد بالنا من حاجة مهمة، و هى اننا نبعد عن المنشطات الجنسية عشان احنا كده اه هنعمل انتصاب بس مش هنحفز الرغبة الجنسية و وقتها هنكون بنمارس العلاقة الزوجية من غير رغبة، و ده هيخلينا نبعد عن العلاقة اكتر، لان هنحس وقتها ان العلاقة مجرد واجب بنعملة مفيهوش اى متعه",
  };

  const treatment_approach = {
    title: "و دلوقتى تعالوا بقى نعرف ازاى نقدر نعالج ضعف الرغبة الجنسية",
    description:
      "عشان نقدر نعالج ضعف الرغبة الجنسية لازم الاول نعرف اى سببها من كل الاسباب اللى اتكلمنا عنها، عشان كده اول خطوه فى العلاج اننا نتكلم مع الطرفين الزوج و الزوجة، و نعرف التاريخ المرضى، و كل السلوكيات و العادات اللى بيقوموا بيها، و بعد كده بتيجى خطوه الفحوصات و التحليل الهرمونية، عشان نقيم وضع الهرمونات، عشان نشوف لو فيها اى خلل، و كمان بنعمل دوبلكس على القضيب عشان نقيم وضع الدورة الدموية و نتأكد هل فى ضعف انتصاب ولا لأ",
  };

  const treatment_methods = [
    {
      condition: "الأسباب النفسية (مشاهدة الأفلام الإباحية)",
      treatment:
        "فالو كان سبب ضعف الرغبة الجنسية مثلا مرتبط بالاسباب النفسية زى مشاهدة الافلام الاباحية، فلازم وقتها اننا نوقف مشاهدتها",
      icon: "📺",
    },
    {
      condition: "السلوكيات الخاطئة",
      treatment: "و لو السبب كان سلوكيات غلط احنا بنعملها نبدء اننا نعدلها",
      icon: "🔄",
    },
    {
      condition: "ضعف الانتصاب",
      treatment:
        "اما لو السبب فى ضعف الرغبة الجنسية هو ضعف الانتصاب فنبدء نحدد درجة الضعف اللى على اساسها هنحدد هل هنستخدم علاج دوائى - ولا حقن موضعى - او زرع دعامات",
      icon: "💪",
    },
    {
      condition: "الخلل الهرموني",
      treatment:
        "و لو كان السبب خلل هرمونى، نبدء اننا نحط خطة علاج نظبط بيها مشاكل الهرمونات، عشان فى النهاية نقدر نمارس العلاقة الزوجية بشكل طبيعى و ميكنش عندنا فيها اى مشكله",
      icon: "⚗️",
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
              <Link href="/sexual-problems">المشاكل الجنسية</Link>
              <span>/</span>
              <span>مشاكل الرغبة الجنسية</span>
            </div>
            <h1 className={styles.heroTitle}>مشاكل الرغبة الجنسية</h1>
            <p className={styles.heroDescription}>
              الرغبه الجنسية هى اساس العلاقة الزوجية، لان من غيرها بتتحول العلاقة الجنسية من متعه جنسية لوظيفة بنعملها من غير اى احساس.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>أسباب رئيسية</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>نفسية</span>
                <span className={styles.statLabel}>عضوية - سلوكية</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>واجب</span>
                <span className={styles.statLabel}>بدلاً من متعة</span>
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
                <Link href="/sexual-problems">المشاكل الجنسيه</Link>
                <span>/</span>
                <span>المشاكل الجنسيه</span>
              </div>
            </div>
            <div className={styles.heroGrid}>
              <div className={styles.heroImage}>
                <Image
                  src="/desire-.webp"
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
            <h2 className={styles.sectionTitle}>مشاكل الرغبة الجنسية :</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  {" "}
                  الرغبه الجنسية هى اساس العلاقة الزوجية ، لان من غيرها بتتحول
                  العلاقة الجنسية من متعه جنسية لوظيفة بنعملها من غير اى احساس .
                </p>
                <p>
                  طيب اي هو ضعف الرغبة الجنسية : ببساطة هو انك تكون مش عاوز تعمل
                  علاقة الجنسية ،بس قبل ما اقول انا عندي ضعف في الرغبه الجنسية
                  لازم الاول نحدد ، هل ضعف الرغبة الجنسية ده حاجة عارضة ممكن
                  تحصل بسبب الارهاق و التوتر ، و ده طبيعى و مش بيكون محتاج علاج
                  ، ولا احنا على طول معندناش رغبة جنسية ، و بنعمل العلاقة
                  الجنسية على فترات بعيده جدا ، و بنعملها من غير رغبه كواجب مننا
                  بس عشان هى لازم تحصل ، وقتها لازم نبدء نشوف اي السبب فى ضعف
                  الرغبة الجنسية و نبدء فى علاجة .
                </p>
              </div>
              {/* <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>❤️</span>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              طيب اي هو ضعف الرغبة الجنسية
            </h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  ببساطة هو انك تكون مش عاوز تعمل علاقة الجنسية، بس قبل ما اقول
                  انا عندي ضعف في الرغبه الجنسية لازم الاول نحدد، هل ضعف الرغبة
                  الجنسية ده حاجة عارضة ممكن تحصل بسبب الارهاق و التوتر، و ده
                  طبيعى و مش بيكون محتاج علاج.
                </p>
                <p>
                  ولا احنا على طول معندناش رغبة جنسية، و بنعمل العلاقة الجنسية
                  على فترات بعيده جدا، و بنعملها من غير رغبه كواجب مننا بس عشان
                  هى لازم تحصل، وقتها لازم نبدء نشوف اي السبب فى ضعف الرغبة
                  الجنسية و نبدء فى علاجة.
                </p>
                <p>
                  <strong>طيب اى هى اسباب ضعف الرغبة الجنسية:</strong> هما 3
                  اسباب
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>❤️</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Psychological Causes Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>اسباب نفسية</h2>
            <div className={styles.causesGrid}>
              {psychological_causes.map((cause, index) => (
                <div key={index} className={styles.causeCard}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "2rem" }}>{cause.icon}</span>
                    <h3 className={styles.causeType}>{cause.cause}</h3>
                  </div>
                  <p className={styles.causeDescription}>{cause.description}</p>

                  {cause.link && (
                    <div style={{ marginTop: "1rem" }}>
                      <Link
                        href={cause.link}
                        style={{
                          color: "#3b82f6",
                          textDecoration: "underline",
                        }}
                      >
                        تعرف أكثر عن ضعف الانتصاب
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <section className={styles.divider}>
            <div className={styles.container}>
              <h3>
                ولو عايز تعرف اكثر عن اسباب ضعف الانتصاب اثناء العلاقة الزوجية ،
                اسمع الفيديو ده من الدكتور أسامة محمد البكل…….
              </h3>
              <div className={styles.videoWrapper}>
                <video
                  className={styles.video}
                  controls
                  src="https://res.cloudinary.com/dvbusrvgi/video/upload/v1758805176/desire-problems_fmzorv.mp4"
                >
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>
              </div>
            </div>
          </section>
        </section>

        {/* Organic Causes Section */}
        <section className={styles.diagnosisSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>اسباب عضوية زى</h2>
            <div className={styles.testsGrid}>
              {organic_causes.map((cause, index) => (
                <div key={index} className={styles.testCard}>
                  <div className={styles.testIcon}>{cause.icon}</div>
                  <h3 className={styles.testName}>{cause.cause}</h3>
                  <p className={styles.testDescription}>{cause.description}</p>

                  {cause.symptoms && (
                    <div style={{ textAlign: "right", marginTop: "1rem" }}>
                      <h4
                        style={{
                          fontSize: "1rem",
                          marginBottom: "0.5rem",
                          color: "#1e40af",
                        }}
                      >
                        أعراض متلازمة الايض:
                      </h4>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        {cause.symptoms.map((symptom, idx) => (
                          <li
                            key={idx}
                            style={{
                              padding: "0.25rem 0",
                              color: "#64748b",
                              fontSize: "0.9rem",
                            }}
                          >
                            • {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Behavioral Causes Section */}
        <section className={styles.diagnosisSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>اسباب سلوكية زى</h2>
            <div className={styles.testsGrid}>
              {behavioral_causes.map((cause, index) => (
                <div key={index} className={styles.testCard}>
                  <div className={styles.testIcon}>{cause.icon}</div>
                  <h3 className={styles.testName}>{cause.cause}</h3>
                  <p className={styles.testDescription}>{cause.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Warning Section */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{treatment_warning.title}</h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <p>{treatment_warning.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Approach Section */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{treatment_approach.title}</h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <p>{treatment_approach.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Methods Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              و بعد ما نشوف نتايج الفحوصات نبدء نحدد سبب المشكلة، و طريقة
              علاجها، لان كل مشكله ليها طريقة علاج مختلفة عن التانية
            </h2>
            <div className={styles.treatmentGrid}>
              {treatment_methods.map((method, index) => (
                <div key={index} className={styles.treatmentCard}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "2rem" }}>{method.icon}</span>
                    <h3 className={styles.treatmentTitle}>
                      {method.condition}
                    </h3>
                  </div>
                  <p className={styles.treatmentDescription}>
                    {method.treatment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              {/* <h2>استعد رغبتك الجنسية الطبيعية</h2>
              <p>
                مشاكل الرغبة الجنسية لها أسباب كثيرة ومتنوعة، ولكل سبب علاج
                مناسب. لا تدع هذه المشكلة تحول علاقتك الزوجية إلى مجرد واجب
                بدلاً من متعة. احجز استشارة مع د. أسامة البكل لتحديد السبب
                والحصول على العلاج المناسب لحالتك.
              </p> */}
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
        {/* <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>حالات ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link
                href="/sexual-problems/erectile-dysfunction"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>💪</span>
                <h3>ضعف الإنتصاب</h3>
                <p>ضعف الانتصاب يسبب حاجز نفسي ويؤثر على الرغبة الجنسية</p>
              </Link>
              <Link
                href="/sexual-problems/premature-ejaculation"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>⏱️</span>
                <h3>سرعة القذف</h3>
                <p>سرعة القذف تقلل الاستمتاع وتؤثر على الرغبة الجنسية</p>
              </Link>
              <Link
                href="/fertility/hormonal-problems"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>⚗️</span>
                <h3>مشاكل الهرمونات</h3>
                <p>نقص هرمون الذكورة وزيادة البرولاكتين تؤثر على الرغبة</p>
              </Link>
            </div>
          </div>
        </section> */}
      </div>
    </MainLayout>
  );
}
