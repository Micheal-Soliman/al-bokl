import MainLayout from "../../components/layout/MainLayout";
import { generateSEOMetadata } from "../../../lib/seo/articleSEO";
import Link from "next/link";
import styles from "../sexual-condition.module.css";
import Image from "next/image";

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "سرعة القذف - الدكتور أسامة البكل",
    description:
      "سرعة القذف مرض شائع عند كثير من الرجالة ، بس في رجالة كثير مش بتعرف تفرق بين سرعة القذف وبين ضعف الانتصاب ، وده ممكن يخليهم يتعالجوا غلط",
    keywords: [
      "سرعة القذف",
      "القذف السريع",
      "العلاج السلوكي",
      "حقن الفيلر",
      "الواقي الذكري",
      "التهاب البروستاتا",
      "د أسامة البكل",
    ],
    canonical: "/sexual-problems/premature-ejaculation",
    image: "/images/sexual-problems/premature-ejaculation.webp",
  });
}

export default function PrematureEjaculationPage() {
  const types = [
    {
      type: "قذف سريع اولى",
      description:
        "و ده معناه ان من وقت ما بدأنا نمارس العلاقة الجنسية و بيحصل قذف سريع، او حتى ممكن يحصل أثناء المداعبة في كل مرة بنعمل فيها علاقة جنسية",
      icon: "1️⃣",
    },
    {
      type: "قذف سريع ثانوى",
      description:
        "و المقصود بيها أن في بداية ممارستك للعلاقة الزوجية كان الوقت طبيعى و القذف كان بيحصل بعد مابنوصل للنشوه الجنسية، لكن كل ده اتغير و بقى بيحصل قذف سريع",
      conditions: [
        "لازم ده يكون بيحصل بقاله 6 شهور",
        "و خلال الوقت ده لازم نكون بنعمل العلاقة الزوجية بشكل منتظم",
        "و ان يحصل في اكثر من نصف مرات العلاقة الزوجية سرعة فى القذف",
      ],
      icon: "2️⃣",
    },
  ];

  const organic_causes = [
    {
      cause: "زيادة حساسية الأعصاب فى القضيب",
      description:
        "و ده بيكون بسبب خلل جينى فى الاعصاب، بيخلى احساسها زيادة عن الطبيعى، فلما بنتعرض للإثارة الجنسية او اى احتكاك فى العضو بيحصل قذف",
      icon: "🧠",
    },
    {
      cause: "التهاب فى الغدد التناسلية (الحويصلة المنوىه او البروستاتا)",
      description:
        "و هنا لازم هنحس بحرقان وقت القذف او وقت التبول، ووقتها لازم نعالج الالتهاب ده و بعدين نحكم لو لسه فى سرعة فى القذف، ولازم هنا ناخد بالنا من نقطه مهمه عشان بسمعها كتير ان التهاب البروستاتا ملوش علاقة بضعف الانتصاب",
      icon: "🔴",
    },
    {
      cause: "ضعف انتصاب",
      description: "لو فى ضعف انتصاب هيكون فى سرعة فى القذف",
      link: "/sexual-problems/erectile-dysfunction",
      icon: "💪",
    },
    {
      cause: "مرض السكر او مشاكل فى الغدة الدرقية",
      description: "الأمراض المزمنة تؤثر على الوظيفة الجنسية",
      icon: "🩸",
    },
  ];

  const psychological_causes = [
    {
      cause: "مشاكل فى الشغل أو الخوف و القلق المستمر",
      description:
        "من أن الزوجة متكنش راضية عن العلاقة الزوجية، او لو حصل مره سرعة قذف فى العلاقة الزوجية، فضلنا نفكر فيها و نفكر هو ده ممكن يحصل تاني، و هنا هقولك اه هيحصل بسبب التوتر و كتر التفكير و أنك كده بتحول العلاقة الزوجية من مصدر متعه لمصدر قلق و توتر",
      icon: "😰",
    },
  ];

  const other_causes = [
    {
      cause: "عدم انتظام العلاقة الزوجية",
      description:
        "و لو مش بنمارس العلاقة الزوجية بشكل منتظم، و بنبعد عنها لفترة طويلة",
      icon: "📅",
    },
    {
      cause: "ختان الزوجة",
      description:
        "و فى سبب كمان ملهوش علاقة بيك وهو ختان الزوجة: اوقات بيكون ختان الزوجة سبب فى اننا نقول ان عندنا سرعة فى القذف، خصوصاّ لو عملية الختان تمت بطريقة غلط و اتشال جزء أكبر من اللازم من (البظر)، ده هيسبب ان الزوجة توصل للنشوه الجنسية بعد مده طويله",
      icon: "⚠️",
    },
  ];

  const treatment_methods = [
    {
      method: "العلاج السلوكى",
      description:
        "و ده بيكون عباره عن اننا نعمل شويه تمارين وقت العلاقة، أو أننا نوقف العلاقة لمدة ثوانى بس عشان نقلل الاثاره الجنسية و نرجع بعدها نكمل العلاقة الزوجية، و كده هنكون أخرنا القذف",
      icon: "🧘‍♂️",
    },
    {
      method: "العلاقة المنتظمة",
      description:
        "لازم نمارس العلاقة الزوجية بشكل منتظم، و ميكنش فى فتره طويله بين كل مرة و التانية",
      icon: "📅",
    },
    {
      method: "العلاج الدوائي",
      description:
        "و ده بيكون عباره عن اقراص ممكن ناخدها كل يوم وفي أنواع تانية بتتاخد قبل العلاقة الزوجية",
      icon: "💊",
    },
    {
      method: "الواقي الذكري",
      description:
        "ممكن كمان نستخدم واقى ذكرى، و ده عشان نقلل الاحساس شويه عن العضو فيتأخر القذف",
      icon: "🛡️",
    },
    {
      method: "حقن الفيلر",
      description:
        "ودى بنحقنها فى اخر جزء فى رأس العضو و بتفيد فى حاجتين: الفيلر هيععمل طبقة عازله بين الاعصاب و القضيب فبتزود من وقت الوصول للأثاره الجنسية، و بكده هتأخر القذف. و كمان هيزود حجم رأس العضو، و ده بيزود الاستمتاع فى العلاقة الزوجية",
      warning:
        "ده يعتبر حل أخير في الحالات اللى محصلهاش استجابة فى كل الطرق العلاجية اللى اتكلمنا عنها، لانه بيكون مكلف، وبيحتاج أننا نعيب الحقن كل 9 شهور او كل سنة ونصف وفي مرضى بردو مش بيحقق معاهم نتيجة",
      icon: "💉",
    },
  ];

  const behavioralTips = [
    {
      tip: "استخدام الواقي الذكري",
      description: "يقلل الحساسية ويطيل مدة الجماع",
      effectiveness: "متوسطة إلى عالية",
    },
    {
      tip: "تقنيات التنفس",
      description: "التنفس العميق والبطيء للاسترخاء",
      effectiveness: "مفيدة للقلق",
    },
    {
      tip: "تغيير الأوضاع",
      description: "أوضاع تقلل الإثارة والحساسية",
      effectiveness: "متوسطة",
    },
    {
      tip: "التواصل مع الشريكة",
      description: "مناقشة المشكلة وطلب التفهم والدعم",
      effectiveness: "عالية جداً",
    },
    {
      tip: "تقليل التوتر",
      description: "ممارسة الرياضة والاسترخاء",
      effectiveness: "عالية",
    },
    {
      tip: "العلاج النفسي",
      description: "علاج القلق والمشاكل النفسية",
      effectiveness: "عالية جداً",
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
              <span>سرعة القذف</span>
            </div>
            <h1 className={styles.heroTitle}>سرعة القذف</h1>
            <p className={styles.heroDescription}>
              فى البداية خلينا نتفق ان سرعة القذف مرض زى اى مرض وله علاج، بس
              المهم اننا نتأكد اننا فعلا عندنا سرعة فى القذف، لان مش كل اللي
              بيشتكي من سرعة قذف بيبقى عنده فعلا سرعة فى القذف.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>2 دقيقة</span>
                <span className={styles.statLabel}>المعيار الطبيعي</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>6 شهور</span>
                <span className={styles.statLabel}>مدة التشخيص</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50%</span>
                <span className={styles.statLabel}>من مرات العلاقة</span>
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
                <Link href="/fertility">المشاكل الجنسيه</Link>
                <span>/</span>
                <span>مشاكل الرغبة الجنسية</span>
              </div>
            </div>
            <div className={styles.heroGrid}>
              <div className={styles.heroImage}>
                <Image
                  src="/premature-ej.webp"
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
            <h2 className={styles.sectionTitle}>معيار تشخيص سرعة القذف</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  فى البداية خلينا نتفق ان سرعة القذف مرض زى اى مرض وله علاج، بس
                  المهم اننا نتأكد اننا فعلا عندنا سرعة فى القذف، لان مش كل اللي
                  بيشتكي من سرعة قذف بيبقى عنده فعلا سرعة فى القذف.
                </p>
                <p>
                  خلينى هنا اوضح نقطة مهمه انت ممكن تكون فاهمها غلط نتيجة
                  لمعلومة سمعتها او شوفتها على الانترنت ان الطبيعي ان العلاقة
                  الزوجية تستمر لنص ساعه او ساعه، غير كده يبقى عندك سرعة قذف، و
                  الكلام ده مش صح ابدا.
                </p>
                <p>
                  <strong>المعيار الطبي الصحيح:</strong> عشان نقول ان انا عندى
                  سرعة قذف، يبقى لازم القذف ده يكون بيحصل بعد{" "}
                  <strong>أقل من دقيقتين</strong> من الايلاج، او بمعنى تانى ان
                  يحصل القذف قبل ما نكون وصلنا للاستمتاع المطلوب بالعلاقة.
                </p>
                <p>
                  <strong>مثال مهم:</strong> لو العلاقة الجنسية مثلا استمرت
                  دقيقتين بس، و فى الوقت ده انت و زوجتك وصلتم للنشوه الجنسية
                  يبقى كده مفيش سرعه قذف.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>⏱️</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>انواع سرعة القذف</h2>
            <p
              style={{
                textAlign: "center",
                marginBottom: "2rem",
                color: "#64748b",
              }}
            >
              تعالوا بقى دلوقت نعرف انواع و اسباب و علاج سرعة القذف. اولاّ:
              بالنسبة لانواع سرعة القذف عندنا نوعين:
            </p>
            <div className={styles.causesGrid}>
              {types.map((type, index) => (
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

                  {type.conditions && (
                    <div className={styles.causeExamples}>
                      <h4>شروط التشخيص:</h4>
                      <ul>
                        {type.conditions.map((condition, idx) => (
                          <li key={idx}>{condition}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Organic Causes Section */}
        <section className={styles.diagnosisSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              طب ايه هى اصلا الاسباب اللى تخلى يحصل سرعة فى القذف ؟
            </h2>

            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#1e293b",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              في أسباب عضوية زى:
            </h3>
            <div className={styles.testsGrid}>
              {organic_causes.map((cause, index) => (
                <div key={index} className={styles.testCard}>
                  <div className={styles.testIcon}>{cause.icon}</div>
                  <h3 className={styles.testName}>
                    {index + 1}. {cause.cause}
                  </h3>
                  <p className={styles.testDescription}>{cause.description}</p>

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
        </section>

        {/* Psychological Causes Section */}
        <section className={styles.diagnosisSection}>
          <div className={styles.container}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#1e293b",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              وفى كمان أسباب نفسية زى:
            </h3>
            <div className={styles.testsGrid}>
              {psychological_causes.map((cause, index) => (
                <div key={index} className={styles.testCard}>
                  <div className={styles.testIcon}>{cause.icon}</div>
                  <h3 className={styles.testName}>{cause.cause}</h3>
                  <p className={styles.testDescription}>{cause.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Causes Section */}
        <section className={styles.diagnosisSection}>
          <div className={styles.container}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#1e293b",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              أسباب آخري خارجية:
            </h3>
            <div className={styles.testsGrid}>
              {other_causes.map((cause, index) => (
                <div key={index} className={styles.testCard}>
                  <div className={styles.testIcon}>{cause.icon}</div>
                  <h3 className={styles.testName}>{cause.cause}</h3>
                  <p className={styles.testDescription}>{cause.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              تأثير سرعة القذف على الزوجين
            </h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <p>
                  و هنا خلينى اقولك معلومه، ان سرعة القذف مش بتضايقك لوحدك هى
                  كمان بتضايق زوجتك وده لسببين:
                </p>
                <ul>
                  <li>
                    لو القذف حصل قبل ما توصل الزوجة للنشوه الجنسية ده هيخليها مش
                    راضية عن العلاقة الزوجية وده اكيد هيأثر عليك و على حالتك
                    النفسية و يخليك تبعد عن العلاقة الزوجية، وتمارسها على فترات
                    بعيده و ده هيزود سرعه القذف اكتر زى ما اتكلمنا عنها في
                    الأسباب فالمشكلة تكبر
                  </li>
                  <li>
                    و كمان بسبب سرعة القذف هتلاقى انك بتبعد عن المداعبة عشان
                    خايف ان يحصل قذف قبل الايلاج، و ده اكيد هيأثر على استمتاع
                    الزوجة
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              دلوقتى بعد ما اتكلمنا عن اسباب و انواع سرعة القذف تعالوا نتكلم بقى
              عن العلاج
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
                    <h3 className={styles.treatmentTitle}>{method.method}</h3>
                  </div>
                  <p className={styles.treatmentDescription}>
                    {method.description}
                  </p>

                  {method.warning && (
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
                        {method.warning}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Warnings Section */}
        <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              تحذيرات مهمة حول الكريمات والاسبراي المخدر
            </h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <p>
                  و هنا لازم ناخد بالنا من حاجة مهمه جدا، اكيد سمعتها من ناس
                  كتير انك ممكن تستخدم اسبراي او كريم مخدر، و هنا لازم نسأل
                  الدكتور عن ازاى ممكن نستخدمه، و ايه هى احسن انواعه، ولازم نبعد
                  عن الأنواع مجهولة المصدر اللى بنشوف إعلاناتها كتير على
                  الانترنت.
                </p>
                <p>
                  <strong>
                    لأننا لو استخدمنا انواع مش معروفة و استخدمناها بطريقة غلط
                    ممكن يحصل:
                  </strong>
                </p>
              </div>

              <div className={styles.procedureSteps}>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>1️⃣</div>
                    <div className={styles.stepContent}>
                      <h4>حساسية لجلد العضو</h4>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>2️⃣</div>
                    <div className={styles.stepContent}>
                      <h4>تخدير العضو بدرجه كبيره</h4>
                      <p>
                        ممكن بيقلل الاحساس فمش هنحس بالاثاره الجنسية وده اللى
                        بيأخر القذف، و كمان هيأثر على الانتصاب
                      </p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3️⃣</div>
                    <div className={styles.stepContent}>
                      <h4>انتقال المخدر للزوجة</h4>
                      <p>
                        المخدر ممكن يتنقل للزوجة، و ده هيسبب تخدير للمهبل و يخلى
                        الزوجه متحسش بالعلاقة الزوجية
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Behavioral Tips Section */}
        {/* <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>نصائح إضافية للعلاج</h2>
            <div className={styles.causesGrid}>
              {behavioralTips.map((tip, index) => (
                <div key={index} className={styles.causeCard}>
                  <h3 className={styles.causeType}>{tip.tip}</h3>
                  <p className={styles.causeDescription}>{tip.description}</p>

                  <div className={styles.causeInfo}>
                    <div className={styles.treatment}>
                      <strong>مستوى الفعالية:</strong> {tip.effectiveness}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Success Timeline */}
        {/* <section className={styles.diagnosisSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>الجدول الزمني للتحسن</h2>
            <div className={styles.testsGrid}>
              <div className={styles.testCard}>
                <div className={styles.testIcon}>📅</div>
                <h3 className={styles.testName}>الأسبوع الأول</h3>
                <p className={styles.testDescription}>
                  بداية العلاج الدوائي أو السلوكي. قد تلاحظ تحسناً طفيفاً في
                  التحكم.
                </p>
              </div>
              <div className={styles.testCard}>
                <div className={styles.testIcon}>📈</div>
                <h3 className={styles.testName}>الشهر الأول</h3>
                <p className={styles.testDescription}>
                  تحسن ملحوظ في مدة الجماع والتحكم. زيادة الثقة بالنفس.
                </p>
              </div>
              <div className={styles.testCard}>
                <div className={styles.testIcon}>🎯</div>
                <h3 className={styles.testName}>3-6 شهور</h3>
                <p className={styles.testDescription}>
                  تحكم ممتاز وثقة عالية. تحسن كبير في جودة العلاقة الزوجية.
                </p>
              </div>
              <div className={styles.testCard}>
                <div className={styles.testIcon}>✅</div>
                <h3 className={styles.testName}>بعد 6 شهور</h3>
                <p className={styles.testDescription}>
                  تحكم طبيعي ومستقر. إمكانية تقليل أو إيقاف العلاج تدريجياً.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <section className={styles.divider}>
          <div className={styles.container}>
            <h3>
              ولو عايز تعرف ايه هي أسئلة المرضى حول تركيب دعامة العضو الذكري،
              اسمع الفيديو ده مع دكتور اسامة البكل
            </h3>
            <div className={styles.videoWrapper}>
              <video
                className={styles.video}
                controls
                src="https://res.cloudinary.com/dvbusrvgi/video/upload/v1758803525/premature_iph7gq.mp4"
              >
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              {/*<h2>لا تتردد في طلب المساعدة المتخصصة</h2>
               <p>
                و فى النهاية لو لسة متلغبط ومش قادر تحدد انت عندك سرعة قذف ولا
                لأ، او مش قادر تحدد ايه هى طريقة العلاج اللى هتجيب معاك نتيجة،
                ممكن تتواصل مع فريقنا الطبى و هما هيحددولك معاد مع دكتور أسامه
                محمد البكل مدرس واستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب
                والصحة الجنسية بطب القصر العيني وهو هيجاوبك على كل الاسئلة اللى
                قلقاك و هيحددلك العلاج المناسب ليك عشان توصل للعلاقة الزوجية
                اللى ترضيك.
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
              <Link href="/sexual-problems/erectile-dysfunction" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>💪</span>
                <h3>ضعف الإنتصاب</h3>
                <p>ضعف الانتصاب يمكن أن يسبب سرعة القذف - تعرف على العلاج</p>
              </Link>
              <Link href="/sexual-problems/libido-problems" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>❤️</span>
                <h3>مشاكل الرغبة الجنسية</h3>
                <p>القلق والتوتر يؤثران على الرغبة والأداء الجنسي</p>
              </Link>
              <Link href="/fertility/hormonal-problems" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>⚗️</span>
                <h3>مشاكل الهرمونات</h3>
                <p>السكر ومشاكل الغدة الدرقية تؤثر على سرعة القذف</p>
              </Link>
            </div>
          </div>
        </section> */}
      </div>
    </MainLayout>
  );
}
