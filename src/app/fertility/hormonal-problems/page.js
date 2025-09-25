import MainLayout from "../../components/layout/MainLayout";
import { generateSEOMetadata } from "../../../lib/seo/articleSEO";
import Link from "next/link";
import styles from "../fertility-condition.module.css";
import Image from "next/image";

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "مشاكل الهرمونات و تأخر الإنجاب عند الرجال - الدكتور أسامة البكل",
    description:
      "الهرمونات في الجسم مهمة جدا، لانها هي اللي مسؤولة عن انجاب طفل ، ولو حصل فيها اي خلل هتسبب تاخر في الانجاب ، تعالو نعرف ايه هي الهرمونات دي وكيفية علاجها.",
    keywords: [
      "مشاكل الهرمونات",
      "تأخر الإنجاب",
      "هرمون الذكورة",
      "الغدة النخامية",
      "FSH",
      "LH",
      "البرولاكتين",
      "هرمون E2",
      "الغدة الدرقية",
      "د أسامة البكل",
    ],
    canonical: "/fertility/hormonal-problems",
    image: "/images/fertility/hormonal-problems.webp",
  });
}

export default function HormonalProblemsPage() {
  const hormones = [
    {
      name: "هرمونات الغده النخامية",
      function:
        "دى غده موجوده فى الدماغ و بتكون مسؤوله عن افراز 3 هرمونات و هما: هرمون LH و هرمون FSH و هرمون البرولاكتين",
      details:
        "الغده النخامية وقت البلوغ بتفرز هرمون FSH – LH و بعدين الهرمونات دى تبدء تمشى فى الدم و تروح للخصية، هرمون LH بيروح لخلايا ليدنج فتبدء الخلية تطلع هرمون الذكوره و من هنا تبدء تظهر علامات البلوغ، اما هرمون FSH بيروح لخلايا سرتولى و بعدين يتنقل للخلايا المنوية فتبدأ الخصية تنتج الحيوانات المنوية، و من هنا بيكون عندنا قدرة على الانجاب.",
      problems: [
        "انعدام فى عدد الحيوانات المنوية",
        "نقص فى انتاج هرمون الذكوره",
        "فشل فى البلوغ",
        "ضعف فى الانتصاب و فى الرغبة الجنسية",
      ],
      icon: "🧠",
    },
    {
      name: "هرمون البرولاكتين",
      function:
        "و ده عكس هرمون FSH – LH، بمعنى ان كل ما كانت نسبته قليله كل ما كان وضع الخصية و باقى الهرمونات طبيعى",
      details:
        "هرمون البرولاكتين لو لقينا ارتفاع شديد جدا فى نسبته ده هيسبب اما نقص فى هرمون FSH – LH، و بكده هيقف او يقل انتاج الخصية للحيوانات المنوية، او انه هيأثر على الخصية بشكل مباشر و يوقف او يقلل انتاجها للحيوانات المنوية و ده هيقلل فرص ان يحصل حمل طبيعى.",
      problems: [
        "نقص فى هرمون FSH – LH",
        "توقف او تقليل انتاج الحيوانات المنوية",
        "تقليل فرص الحمل الطبيعى",
      ],
      icon: "🥛",
    },
    {
      name: "هرمون E2 او الهرمون الانثوى فى الخصية",
      function:
        "هو عباره هرمون بيتفرز فى الجسم بسبب انزيم اسمة اروماتيز، و الانزيم ده بيكون موجود فى الخصيتين او فى البروستاتا او فى الخلايا الدهنية فى الجسم كلة",
      details:
        "هرمون E2 بيزيد بسبب فرط فى نشاط انزيم الاروماتيز او سمنة مفرطة او خلل فى الهرمونات او التقدم فى السن",
      problems: [
        "نقص فى هرمون الذكوره",
        "نقص فى هرمون FSH – LH",
        "نقص فى عدد الحيوانات المنوية",
        "ضعف فى حركة الحيوان المنوى",
        "تثدى",
        "ضعف فى الرغبة الجنسية",
      ],
      icon: "⚖️",
    },
    {
      name: "هرمون الذكورة فى الخصية",
      function:
        "الهرمون الذكرى هو الهرمون المسؤول عن وصولنا لمرحلة البلوغ و زيادة حجم القضيب و الخصيتين و بيأثر كمان على القدره الجنسية",
      details:
        "بيكون مسؤول عن تحفز انسجة القضيب، و ده اللى بيعمل انتصاب وقت العلاقه الزوجيه، كمان بيكون مسؤل عن الرغبه الجنسيه، و الوصول للنشوه، و قوة القذف، و كمان بيكون ليه تأثير على انتاج الخصية للحيوانات المنوية",
      problems: [
        "ضعف فى حركة الحيوان المنوى و تشوهات",
        "انكماش فى العضو الذكرى",
        "ضعف فى الانتصاب والرغبة الجنسية",
      ],
      icon: "💪",
    },
    {
      name: "الغده الدرقية",
      function:
        "الغده الدرقية دى غده موجوده فى الرقبة قدام الحنجرة، و الغده دى بتنتج هرمون مهم جدا لكل العمليات الحيوية زى نشاط القلب و الدوره الدموية اسمه الثيروكسين",
      details:
        "خلل الغده الدرقية هيسبب نقص فى هرمون الثيروكسين، و بسبب النقص ده هيحصل مشاكل فى الخصوبة والصحة العامة",
      problems: [
        "نقص او انعدام فى الحيوانات المنوية",
        "ضعف او انعدام فى حركة الحيوان المنوى",
        "زيادة نسبة التشوهات فى الحيوانات المنويه",
        "نقص فى هرمون الذكوره",
        "ضعف فى الانتصاب",
        "امراض فى القلب و سكتات دماغيه",
      ],
      icon: "🦋",
    },
  ];

  const causes = [
    {
      category: "أسباب نقص هرمون الذكورة",
      conditions: [
        <Link
          key="varicocele-link"
          href="/surgeries/varicocele"
          style={{ color: "#3b82f6", textDecoration: "underline" }}
        >
          دوالى على الخصية من الدرجة التانية او التالته
        </Link>,
        "التعرض لعلاج كيميائى او اشعاعى على الحوض، بسبب الاصابه بسرطان الخصيه او البروستاتا",
        "مشاكل فى الغده النخامية",
        "سمنه مفرطة",
        "أمراض فى الكلى او الكبد",
        "ارتفاع فى ضغط الدم",
        "زياده فى هرمون E2",
        "الاصابة بفيروس نقص المناعة",
        "التقدم فى العمر",
      ],
      treatment:
        "علاج المشكله اللى اتسببت فى نقص هرمون الذكوره، و بعد ما نعالج السبب هيرجع تانى هرمون الذكوره لنسبته الطبيعية",
    },
    {
      category: "أسباب زيادة هرمون E2",
      conditions: [
        "فرط فى نشاط انزيم الاروماتيز",
        "سمنة مفرطة",
        "خلل فى الهرمونات",
        "التقدم فى السن",
      ],
      treatment:
        "لو كان السبب هو السمنة وقتها لازم اننا نخس الاول، اما لو كان السبب هو فرط فى نشاط انزيم الاروماتيز لازم وقتها ناخد علاج نقلل بيه نشاط انزيم الاروماتيز",
    },
    {
      category: "أسباب خلل الغده الدرقيه",
      conditions: [
        "عامل وراثى",
        "ورم فى الغده الدرقية",
        "ورم فى الخصية",
        "التقدم فى العمر بيسبب نقص فى هرمون الثيروكسين",
      ],
      treatment:
        "اننا اولا نعالج السبب، و بعدين ممكن ناخد علاج هرمونى عشان نعوض بيه نقص هرمون الثيروكسين",
    },
  ];

  const treatmentOptions = [
    {
      title: "علاج نقص هرمونات الغده النخامية",
      description:
        "العلاج هنا عشان يجيب نتيجة لازم نبدأ فيه بدرى فى سن صغير، و العلاج ده للاسف هيكون علاج هرمونى هنفضل ماشين عليه على طول",
      methods: ["علاج هرمونى لتعويض نقص هرمون FSH – LH", "متابعة دورية مستمرة"],
      benefits: [
        "عشان نعوض نقص هرمون FSH – LH",
        "تفضل الخصية شغاله بشكل طبيعى",
        "تحسن البلوغ والوظائف الجنسية",
      ],
      monitoring: "متابعة مستمرة مدى الحياة",
    },
    {
      title: "علاج ارتفاع البرولاكتين",
      description:
        "علاج لخفض مستوى البرولاكتين المرتفع الذي يؤثر على إنتاج الحيوانات المنوية والهرمونات الأخرى",
      methods: ["أدوية خافضة للبرولاكتين", "علاج السبب الأساسي إن وجد"],
      benefits: [
        "عودة هرمون FSH – LH لمستواه الطبيعي",
        "تحسن إنتاج الحيوانات المنوية",
        "زيادة فرص الحمل الطبيعى",
      ],
      monitoring: "فحص البرولاكتين بانتظام",
    },
    {
      title: "علاج زيادة هرمون E2",
      description:
        "العلاج هنا هيكون على حسب السبب، فلو كان السبب فى زيادة هرمون E2 هو السمنة وقتها لازم اننا نخس الاول",
      methods: [
        "إنقاص الوزن فى حالة السمنة",
        "علاج لتقليل نشاط انزيم الاروماتيز",
        "تجنب الوجبات السريعه و الاكل اللى مليان دهون",
      ],
      benefits: [
        "هيرجع هرمون E2 و هرمون الذكوره لنسبتهم الطبيعية خلال 3 شهور",
        "هترجع الخصية لنشاطها الطبيعى",
        "الرغبة الجنسية مش هيكون فيها مشكله",
      ],
      monitoring: "فحص الهرمونات كل 3 شهور",
    },
    {
      title: "تحذير مهم بخصوص هرمون الذكورة",
      description:
        "اوعى تفكر انك تحقن نفسك بهرمون الذكورة، لان انت كده بتزود المشكله، و بتقرر توقف انتاج هرمون الذكوره و انتاج الحيوانات المنوية كمان",
      methods: [
        "علاج السبب الأساسي بدلاً من الحقن المباشر",
        "تجنب الحقن العشوائي لهرمون الذكورة",
      ],
      benefits: [
        "منع تفاقم المشكلة",
        "الحفاظ على الإنتاج الطبيعي للهرمونات",
        "تجنب المضاعفات الخطيرة",
      ],
      monitoring: "متابعة طبية متخصصة",
    },
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
              <span>مشاكل الهرمونات و تأخر الإنجاب</span>
            </div>
            {/* <h1 className={styles.heroTitle}>
              مشاكل الهرمونات و تأخر الإنجاب عند الرجال
            </h1>
            <p className={styles.heroDescription}>
              الهرمونات في الجسم مهمة جدا، لانها هي اللي مسؤولة عن انجاب طفل،
              ولو حصل فيها اي خلل هتسبب تاخر في الانجاب، تعالو نعرف ايه هي
              الهرمونات دي وكيفية علاجها.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15-20%</span>
                <span className={styles.statLabel}>من حالات العقم</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>80%</span>
                <span className={styles.statLabel}>نسبة نجاح العلاج</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3-6</span>
                <span className={styles.statLabel}>شهور للتحسن</span>
              </div>
            </div> */}

            <div className="image-wrapper">
              <Image
                src="/harmoun.webp"
                alt="Hormonal Problems"
                layout="responsive"
                width={540}
                height={200}
              />
            </div>
          </div>
        </section>

        {/* Definition Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>مشاكل الهرمونات</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  هى عبارة عن خلل بيحصل فى الهرمونات المسؤولة عن الخصوبة و ده
                  بيأثر على الخصية و انتاجها للحيوانات المنوية من ناحية العدد أو
                  التشوهات أو هيسبب ضعف فى الحركة، ده غير تأثيرها على القدرة
                  الجنسية فهنلاقيها كمان بتأثر على الانتصاب و الرغبة الجنسية
                  بسبب تأثير الخلل الهرموني على هرمون الذكورة.
                </p>
                <p>
                  و تعالوا دلوقتى نعرف ايه هى الهرمونات اللى بتسبب نقص أو انعدام
                  في الحيوانات المنوية، سواء الهرمونات اللى بتتحكم فى انتاج
                  الحيوانات المنوية او الهرمونات اللى بتأثر على عدد الحيوانات
                  المنوية، و ازاى كمان بتأثر على القدرة الجنسية.
                </p>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>⚗️</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pituitary Hormones Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>هرمونات الغده النخامية</h2>
            <div
              className={styles.definitionContent}
              style={{ marginBottom: "3rem" }}
            >
              <div className={styles.definitionText}>
                <p>
                  دى غده موجوده فى الدماغ و بتكون مسؤوله عن افراز 3 هرمونات و
                  هما:
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                    gap: "1rem",
                    margin: "2rem 0",
                  }}
                >
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                      padding: "1rem",
                      borderRadius: "10px",
                      textAlign: "center",
                      border: "2px solid #3b82f6",
                    }}
                  >
                    <strong style={{ color: "#1e40af" }}>هرمون LH</strong>
                  </div>
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
                      padding: "1rem",
                      borderRadius: "10px",
                      textAlign: "center",
                      border: "2px solid #22c55e",
                    }}
                  >
                    <strong style={{ color: "#15803d" }}>هرمون FSH</strong>
                  </div>
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                      padding: "1rem",
                      borderRadius: "10px",
                      textAlign: "center",
                      border: "2px solid #f59e0b",
                    }}
                  >
                    <strong style={{ color: "#92400e" }}>
                      هرمون البرولاكتين
                    </strong>
                  </div>
                </div>
                <p>
                  و خلينا نتكلم الاول عن هرمون FSH – LH: لان دول من اهم
                  الهرمونات اللى بسببهم بيحصل البلوغ، و هما كمان السبب فى انتاج
                  الخصية للحيوانات المنوية، و هنعرف كل ده بالتفصيل دلوقتى.
                </p>
              </div>
            </div>

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
                  <span style={{ fontSize: "2rem", color: "#3b82f6" }}>🧠</span>
                  <h3 className={styles.causeType}>
                    كيف تعمل هرمونات FSH – LH
                  </h3>
                </div>
                <div className={styles.causeDescription}>
                  <p>
                    الغده النخامية وقت البلوغ بتفرز هرمون FSH – LH و بعدين
                    الهرمونات دى تبدء تمشى فى الدم و تروح للخصية:
                  </p>

                  <div style={{ margin: "1.5rem 0" }}>
                    <div
                      style={{
                        background: "#f0f9ff",
                        padding: "1rem",
                        borderRadius: "8px",
                        marginBottom: "1rem",
                        borderLeft: "4px solid #0ea5e9",
                      }}
                    >
                      <strong style={{ color: "#0c4a6e" }}>هرمون LH:</strong>
                      <p style={{ margin: "0.5rem 0 0 0", color: "#0f172a" }}>
                        بيروح لخلايا ليدنج فتبدء الخلية تطلع هرمون الذكوره و من
                        هنا تبدء تظهر علامات البلوغ.
                      </p>
                    </div>

                    <div
                      style={{
                        background: "#f0fdf4",
                        padding: "1rem",
                        borderRadius: "8px",
                        borderLeft: "4px solid #22c55e",
                      }}
                    >
                      <strong style={{ color: "#14532d" }}>هرمون FSH:</strong>
                      <p style={{ margin: "0.5rem 0 0 0", color: "#0f172a" }}>
                        بيروح لخلايا سرتولى و بعدين يتنقل للخلايا المنوية فتبدأ
                        الخصية تنتج الحيوانات المنوية، و من هنا بيكون عندنا قدرة
                        على الانجاب.
                      </p>
                    </div>
                  </div>
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
                  <span style={{ fontSize: "2rem", color: "#ef4444" }}>⚠️</span>
                  <h3 className={styles.causeType}>مشاكل الغده النخامية</h3>
                </div>
                <div className={styles.causeDescription}>
                  <p>
                    ولو حصل مشكلة للغده النخامية و ماشتغلتش، فده معناه ان مش
                    هيكون فى انتاج لهرمون FSH – LH و هنلاقى نسبته قليله جدا، و
                    هنا هنلاقى:
                  </p>

                  <div className={styles.causeExamples}>
                    <ul>
                      <li>
                        ان الخصية مش شغاله و مش بتنتج حيوانات منوية هيسبب انعدام
                        فى عدد الحيوانات المنوية
                      </li>
                      <li>
                        هيكون كمان فى نقص فى انتاج هرمون الذكوره، و ده هيسبب فشل
                        فى البلوغ
                      </li>
                      <li>
                        ده غير انه هيسبب ضعف فى الانتصاب و فى الرغبة الجنسية
                      </li>
                    </ul>
                  </div>

                  <div
                    style={{
                      background: "#fef2f2",
                      padding: "1rem",
                      borderRadius: "8px",
                      marginTop: "1rem",
                      border: "1px solid #fecaca",
                    }}
                  >
                    <strong style={{ color: "#dc2626" }}>العلاج:</strong>
                    <p
                      style={{
                        margin: "0.5rem 0 0 0",
                        color: "#7f1d1d",
                        fontSize: "0.9rem",
                      }}
                    >
                      العلاج هنا عشان يجيب نتيجة لازم نبدأ فيه بدرى فى سن صغير،
                      و العلاج ده للاسف هيكون علاج هرمونى هنفضل ماشين عليه على
                      طول عشان نعوض نقص هرمون FSH – LH و تفضل الخصية شغاله بشكل
                      طبيعى.
                    </p>
                  </div>
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
                  <span style={{ fontSize: "2rem", color: "#f59e0b" }}>📊</span>
                  <h3 className={styles.causeType}>
                    الفرق بين نقص وزيادة FSH – LH
                  </h3>
                </div>
                <div className={styles.causeDescription}>
                  <p>
                    و هنا لازم نفرق بين حاجتين، و هما نقص و زيادة نسبة هرمون FSH
                    – LH:
                  </p>

                  <div style={{ margin: "1.5rem 0" }}>
                    <div
                      style={{
                        background: "#fef2f2",
                        padding: "1rem",
                        borderRadius: "8px",
                        marginBottom: "1rem",
                        border: "2px solid #ef4444",
                      }}
                    >
                      <strong style={{ color: "#dc2626" }}>
                        نقص فى نسبة هرمون FSH – LH:
                      </strong>
                      <p style={{ margin: "0.5rem 0 0 0", color: "#7f1d1d" }}>
                        ده هيبقى خلل هرمونى و لسه متكلمين عنه بالتفصيل.
                      </p>
                    </div>

                    <div
                      style={{
                        background: "#fffbeb",
                        padding: "1rem",
                        borderRadius: "8px",
                        border: "2px solid #f59e0b",
                      }}
                    >
                      <strong style={{ color: "#92400e" }}>
                        زياده فى نسبة هرمون FSH – LH:
                      </strong>
                      <p
                        style={{
                          margin: "0.5rem 0 0 0",
                          color: "#78350f",
                          fontSize: "0.9rem",
                        }}
                      >
                        فده معناه ان المشكله هنا مش خلل هرمونى، المشكله هنا
                        هتكون فى الخصية نفسها سواء كان فيها فشل وظيفى و مش قادره
                        تنتج حيوانات منوية، او ان هى بتنتج حيوانات منوية بس
                        بنسبة اقل من الطبيعى، او ان الخصية فى اجزاء منها مفيهاش
                        بؤر او خلايا منوية و هنا بردو هيكون انتاجها قليل، و عشان
                        الغده النخامية تحفز الخصية انها تشتغل اكتر و تنتج
                        حيوانات منويه اكتر فهى بتفرز هرمون FSH – LH بكميات اكبر
                        من الطبيعى عشان تنشط الخصية و هنا مينفعش ناخد علاج ننزل
                        بيه هرمون FSH – LH لان كده هنكون بنموت الحيوانات المنوية
                        و بنوقف خالص انتاج الخصية للحيوانات المنوية.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prolactin Hormone Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>هرمون البرولاكتين</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  و ده عكس هرمون FSH – LH، بمعنى ان كل ما كانت نسبته قليله كل ما
                  كان وضع الخصية و باقى الهرمونات طبيعى، لان هرمون البرولاكتين
                  لو لقينا ارتفاع شديد جدا فى نسبته ده هيسبب:
                </p>

                <div style={{ margin: "2rem 0" }}>
                  <div className={styles.causeExamples}>
                    <h4>أضرار ارتفاع البرولاكتين:</h4>
                    <ul>
                      <li>
                        اما نقص فى هرمون FSH – LH، و بكده هيقف او يقل انتاج
                        الخصية للحيوانات المنوية، لاننا قولنا ان هرمون FSH – LH
                        هما المسؤولين عن نشاط الخصية و انتاجها للحيوانات المنوية
                      </li>
                      <li>
                        او انه هيأثر على الخصية بشكل مباشر و يوقف او يقلل
                        انتاجها للحيوانات المنوية و ده هيقلل فرص ان يحصل حمل
                        طبيعى
                      </li>
                      <li>
                        ده غير انه هيسبب نقص فى نسبة هرمون الذكوره و ده هيسبب
                        ضعف فى الرغبه الجنسية و كمان ضعف فى الانتصاب
                      </li>
                      <li>
                        و الضعف ده هيقلل العلاقة الجنسية، و لان مفيش علاقة جنسية
                        فده برضو هيسبب تأخر انجاب
                      </li>
                      <li>و كمان هيزود من نمو انسجة الصدر و ده هيسبب تثدى</li>
                    </ul>
                  </div>
                </div>

                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
                    padding: "2rem",
                    borderRadius: "15px",
                    border: "2px solid #22c55e",
                    marginTop: "2rem",
                  }}
                >
                  <h4 style={{ color: "#15803d", marginBottom: "1rem" }}>
                    العلاج:
                  </h4>
                  <p
                    style={{
                      color: "#15803d",
                      lineHeight: "1.6",
                      marginBottom: "1rem",
                    }}
                  >
                    و بالنسبة للعلاج هنا لازم نبدأ بعلاج السبب الاول اللى خلى
                    عندنا زياده فى هرمون البرولاكتين، فمثلا لو كان السبب فى اننا
                    بناخد ادويه معينه هى اللى اتسببت فى زيادة نسبة الهرمون وقتها
                    ممكن اننا نغير الادوية دى لو امكن، او لو مقدرناش اننا نغيرها
                    وقتها هناخد علاج نقلل بيه نسبة هرمون البرولاكتين.
                  </p>
                  <p
                    style={{
                      color: "#15803d",
                      lineHeight: "1.6",
                      marginBottom: "1rem",
                    }}
                  >
                    و فترة العلاج بتكون من 3 – 6 شهور على حسب نسبة الهرمون و بعد
                    العلاج عدد الحيوانات المنويه هيرجع طبيعى و العلاقة الجنسية
                    مش هيكون فيها مشكله و كده هيكون عندنا فرصه كبيره ان يحصل حمل
                    طبيعى.
                  </p>
                  <p
                    style={{
                      color: "#15803d",
                      lineHeight: "1.6",
                      fontWeight: "600",
                    }}
                  >
                    و هنا لازم نتابع نسبة هرمون البرولاكتين خصوصاّ لو كنا لسه
                    مستمرين على الادوية اللى اتسببت فى زيادته، عشان نسبته متزدش
                    مره تانية.
                  </p>
                </div>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>🥛</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Causes of Pituitary Problems */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              طيب ليه ممكن يحصل خلل فى هرمونات الغده النخامية
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
                  <span style={{ fontSize: "2rem", color: "#dc2626" }}>🧬</span>
                  <h3 className={styles.causeType}>العيوب الخلقية</h3>
                </div>
                <p className={styles.causeDescription}>
                  لو فيه فى الغده النخامية عيب خلقى اتسبب فى انها مأنتجتش اصلا
                  هرمون FSH – LH و البرولاكتين
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
                  <span style={{ fontSize: "2rem", color: "#f59e0b" }}>🔬</span>
                  <h3 className={styles.causeType}>الأورام الحميدة</h3>
                </div>
                <p className={styles.causeDescription}>
                  لو عندنا ورم حميد فى الغده النخامية، و ده هيزود الخلايا اللى
                  بتنتج هرمون البرولاكتين و بكده نسبته هتزيد، و هيقل بسبب زيادته
                  هرمون FSH – LH
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
                  <span style={{ fontSize: "2rem", color: "#8b5cf6" }}>🦋</span>
                  <h3 className={styles.causeType}>خلل الغده الدرقية</h3>
                </div>
                <p className={styles.causeDescription}>
                  لو عندنا خلل فى الغده الدرقية.
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
                  <span style={{ fontSize: "2rem", color: "#ef4444" }}>🧠</span>
                  <h3 className={styles.causeType}>التهاب المخ</h3>
                </div>
                <p className={styles.causeDescription}>لو فى التهاب فى المخ.</p>
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
                  <span style={{ fontSize: "2rem", color: "#dc2626" }}>💉</span>
                  <h3 className={styles.causeType}>حقن هرمون الذكورة</h3>
                </div>
                <p className={styles.causeDescription}>
                  لو بنحقن نفسنا بهرمون الذكوره عشان نزود العضلات، ده هيحول
                  هرمون الذكوره لهرمون انوثه و ده هياثر على نسبة هرمون FSH – LH.
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
                  <span style={{ fontSize: "2rem", color: "#0ea5e9" }}>🏥</span>
                  <h3 className={styles.causeType}>أمراض أخرى</h3>
                </div>
                <div className={styles.causeDescription}>
                  <p>لو عندنا امراض فى الكبد او الكلى.</p>
                  <p>
                    لو عندنا اى اضطرابات نفسية و بناخد بسببها مهدئات، لان
                    المهدئات هتزود من انتاج هرمون الدوبامين وده هيسبب زياده فى
                    هرمون البرولاكتين و نفص فى هرمون FSH – LH، و هنا بمجرد ما
                    نوقف المهدئات هترجع الهرمونات تانى لوضعها الطبيعى.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E2 Hormone Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              هرمون E2 او الهرمون الانثوى فى الخصية
            </h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
                <p>
                  تانى هرمون بيسبب نقص او انعدام فى الحيوانات المنوية هو هرمون
                  E2 او الهرمون الانثوى فى الخصية
                </p>
                <p>
                  هو عباره هرمون بيتفرز فى الجسم بسبب انزيم اسمة اروماتيز، و
                  الانزيم ده بيكون موجود فى الخصيتين او فى البروستاتا او فى
                  الخلايا الدهنية فى الجسم كلة.
                </p>
                <p>و نسبة هرمون E2 لو زادت الطبيعي هيبدء يكون ليه اضرار.</p>

                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                    padding: "2rem",
                    borderRadius: "15px",
                    border: "2px solid #f59e0b",
                    marginTop: "2rem",
                  }}
                >
                  <h4 style={{ color: "#92400e", marginBottom: "1rem" }}>
                    طيب ايه اللى ممكن يخلى هرمون E2 نسبته تزيد و اي هى اضراره
                  </h4>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <h5 style={{ color: "#92400e", marginBottom: "0.5rem" }}>
                      هرمون E2 بيزيد بسبب:
                    </h5>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li style={{ padding: "0.25rem 0", color: "#78350f" }}>
                        • فرط فى نشاط انزيم الاروماتيز
                      </li>
                      <li style={{ padding: "0.25rem 0", color: "#78350f" }}>
                        • او سمنة مفرطة
                      </li>
                      <li style={{ padding: "0.25rem 0", color: "#78350f" }}>
                        • او خلل فى الهرمونات
                      </li>
                      <li style={{ padding: "0.25rem 0", color: "#78350f" }}>
                        • و السبب الاخير ان هرمون E2 نسبتة تزيد هو التقدم فى
                        السن
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 style={{ color: "#92400e", marginBottom: "0.5rem" }}>
                      اما اضرار هرمون E2:
                    </h5>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li style={{ padding: "0.25rem 0", color: "#78350f" }}>
                        • زياده هرمون E2، هتسبب نقص فى هرمون الذكوره
                      </li>
                      <li style={{ padding: "0.25rem 0", color: "#78350f" }}>
                        • و نقص فى هرمون FSH – LH، وده هيسبب نقص فى عدد
                        الحيوانات المنوية و ممكن يوصل لأنعدام، و هيسبب كمان ضعف
                        فى حركة الحيوان المنوى
                      </li>
                      <li style={{ padding: "0.25rem 0", color: "#78350f" }}>
                        • هييسبب كمان تثدى
                      </li>
                      <li style={{ padding: "0.25rem 0", color: "#78350f" }}>
                        • و ضعف فى الرغبة الجنسية
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>⚖️</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E2 Treatment Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>علاج زيادة هرمون E2</h2>
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
                  <span style={{ fontSize: "2rem", color: "#10b981" }}>🏃‍♂️</span>
                  <h3 className={styles.causeType}>علاج السمنة</h3>
                </div>
                <div className={styles.causeDescription}>
                  <p>
                    والعلاج هنا هيكون على حسب السبب، فالو كان السبب فى زيادة
                    هرمون E2 هو السمنة وقتها لازم اننا نخس الاول.
                  </p>

                  <div
                    style={{
                      background: "#fef2f2",
                      padding: "1rem",
                      borderRadius: "8px",
                      marginTop: "1rem",
                      border: "1px solid #fecaca",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: "#7f1d1d",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                      }}
                    >
                      و هنا فى نقطة مهمه لازم نعرفها ان السمنة المفرطة خطر جدا
                      على الخصوبة لانها ممكن تسبب مشاكل اكبر بكتير غير زياده
                      هرمون E2، و بسبب المشاكل دى هيحصل نقص او انعدام للحيوانات
                      المنوية و بكده هيكون فى تأخر فى الانجاب، عشان كده لازم
                      نهتم ديما بوزننا و نبعد على قد ما نقدر عن الوجبات السريعه
                      و الاكل اللى مليان دهون.
                    </p>
                  </div>
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
                  <span style={{ fontSize: "2rem", color: "#3b82f6" }}>💊</span>
                  <h3 className={styles.causeType}>علاج انزيم الاروماتيز</h3>
                </div>
                <div className={styles.causeDescription}>
                  <p>
                    اما لو كان السبب هو فرط فى نشاط انزيم الاروماتيز لازم وقتها
                    ناخد علاج نقلل بيه نشاط انزيم الاروماتيز.
                  </p>

                  <div
                    style={{
                      background: "#f0fdf4",
                      padding: "1rem",
                      borderRadius: "8px",
                      marginTop: "1rem",
                      border: "1px solid #bbf7d0",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: "#15803d",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                      }}
                    >
                      و خلال 3 شهور من العلاج هيرجع هرمون E2 و هرمون الذكوره
                      لنسبتهم الطبيعية، و هترجع كمان الخصية لنشاطها الطبيعى و
                      الرغبة الجنسية كمان مش هيكون فيها مشكله.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Thyroid Gland Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>الغده الدرقية</h2>
            <div className={styles.definitionContent}>
              <div className={styles.definitionText}>
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
                  <p
                    style={{
                      color: "#0c4a6e",
                      lineHeight: "1.8",
                      marginBottom: "1rem",
                    }}
                  >
                    لو فى خلل فى افرازات الغده الدرقية
                  </p>
                  <p style={{ color: "#0c4a6e", lineHeight: "1.8" }}>
                    الغده الدرقية دى غده موجوده فى الرقبة قدام الحنجرة، و الغده
                    دى بتنتج هرمون مهم جدا لكل العمليات الحيوية زى نشاط القلب و
                    الدوره الدموية اسمه الثيروكسين، و هنا خلل الغده الدرقية
                    هيسبب نقص فى هرمون الثيروكسين، و بسبب النقص ده هيحصل:
                  </p>
                </div>

                <div className={styles.causeExamples}>
                  <h4>أضرار نقص هرمون الثيروكسين:</h4>
                  <ul>
                    <li style={{ color: "#dc2626" }}>
                      نقص او انعدام فى الحيوانات المنوية
                    </li>
                    <li style={{ color: "#dc2626" }}>
                      ضعف او انعدام فى حركة الحيوان المنوى
                    </li>
                    <li style={{ color: "#dc2626" }}>
                      زيادة نسبة التشوهات فى الحيوانات المنويه
                    </li>
                    <li style={{ color: "#dc2626" }}>و نقص فى هرمون الذكوره</li>
                    <li style={{ color: "#dc2626" }}>و ضعف فى الانتصاب</li>
                    <li style={{ color: "#dc2626" }}>
                      ده غير ان اضراره ممكن توصل لامراض فى القلب و سكتات دماغيه
                    </li>
                  </ul>
                </div>

                <div
                  style={{
                    background: "#fef3c7",
                    padding: "1.5rem",
                    borderRadius: "10px",
                    marginTop: "2rem",
                    border: "2px solid #f59e0b",
                  }}
                >
                  <h4 style={{ color: "#92400e", marginBottom: "1rem" }}>
                    طيب اى اسباب خلل الغده الدرقيه؟
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ padding: "0.25rem 0", color: "#78350f" }}>
                      • ممكن يكون عامل وراثى
                    </li>
                    <li style={{ padding: "0.25rem 0", color: "#78350f" }}>
                      • او فى ورم فى الغده الدرقية
                    </li>
                    <li style={{ padding: "0.25rem 0", color: "#78350f" }}>
                      • او ورم فى الخصية
                    </li>
                    <li style={{ padding: "0.25rem 0", color: "#78350f" }}>
                      • و كمان التقدم فى العمر بيسبب نقص فى هرمون الثيروكسين
                    </li>
                  </ul>
                </div>

                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
                    padding: "1.5rem",
                    borderRadius: "10px",
                    marginTop: "1.5rem",
                    border: "2px solid #22c55e",
                  }}
                >
                  <strong style={{ color: "#15803d", fontSize: "1.1rem" }}>
                    العلاج:
                  </strong>
                  <p
                    style={{
                      margin: "0.5rem 0 0 0",
                      color: "#15803d",
                      lineHeight: "1.6",
                    }}
                  >
                    و العلاج هنا اننا اولا نعالج السبب، و بعدين ممكن ناخد علاج
                    هرمونى عشان نعوض بيه نقص هرمون الثيروكسين.
                  </p>
                </div>
              </div>
              <div className={styles.definitionImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.conditionIcon}>🦋</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testosterone Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>هرمون الذكورة فى الخصية</h2>
            <div
              className={styles.definitionContent}
              style={{ marginBottom: "3rem" }}
            >
              <div className={styles.definitionText}>
                <p>هرمونى الذكورة ممكن يسبب نقص او انعدام للحيوانات المنوية</p>
                <p>الهرمون الذكرى هو الهرمون المسؤول عن حاجات كتير زى:</p>
              </div>
            </div>

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
                  <span style={{ fontSize: "2rem", color: "#3b82f6" }}>🚀</span>
                  <h3 className={styles.causeType}>وظائف هرمون الذكورة</h3>
                </div>
                <div className={styles.causeDescription}>
                  <div className={styles.causeExamples}>
                    <ul>
                      <li>
                        وصولنا لمرحلة البلوغ و زيادة حجم القضيب و الخصيتين
                      </li>
                      <li>
                        و بيأثر كمان على القدره الجنسية، لانه بيكون مسؤول عن
                        تحفز انسجة القضيب، و ده اللى بيعمل انتصاب وقت العلاقه
                        الزوجيه
                      </li>
                      <li>
                        كمان بيكون مسؤل عن الرغبه الجنسيه، و الوصول للنشوه، و
                        قوة القذف
                      </li>
                      <li>
                        و كمان بيكون ليه تأثير على انتاج الخصية للحيوانات
                        المنوية، و بكده هأثر نقص هرمون الذكوره على عدد الحيوانات
                        المنوية
                      </li>
                      <li>
                        نقص هرمون الذكوره بيسبب كمان ضعف فى حركة الحيوان المنوى
                        و تشوهات
                      </li>
                    </ul>
                  </div>
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
                  <span style={{ fontSize: "2rem", color: "#ef4444" }}>⚠️</span>
                  <h3 className={styles.causeType}>
                    تأثير نقص الهرمون على العضو الذكري
                  </h3>
                </div>
                <div className={styles.causeDescription}>
                  <p>
                    و اخيراّ نقص هرمون الذكورة هيسبب كمان انكماش فى العضو الذكرى
                    و ده هيخلينا نحس ان العضو الذكرى صغر، بس هو مصغرش هو بس حصله
                    انكماش و بمجرد ما بنعالج نسبة هرمون الذكوره و نرجعها
                    لمستواها الطبيعى الانكماش بيروح و بيرجع العضو لحجمه الطبيعى.
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
                  <span style={{ fontSize: "2rem", color: "#f59e0b" }}>📋</span>
                  <h3 className={styles.causeType}>اسباب نقص هرمون الذكورة</h3>
                </div>
                <div className={styles.causeDescription}>
                  <div className={styles.causeExamples}>
                    <ul>
                      <li>
                        لو كان عندنا{" "}
                        <Link
                          href="/surgeries/varicocele"
                          style={{
                            color: "#3b82f6",
                            textDecoration: "underline",
                          }}
                        >
                          دوالى على الخصية من الدرجة التانية او التالته
                        </Link>
                      </li>
                      <li>
                        لو اتعرضنا لعلاج كيميائى او اشعاعى على الحوض، بسبب
                        الاصابه بسرطان الخصيه او البروستاتا
                      </li>
                      <li>ولو عندنا مشاكل فى الغده النخامية</li>
                      <li>لو عندنا سمنه مفرطة</li>
                      <li>لو عندنا أمراض فى الكلى او الكبد</li>
                      <li>لو عندنا ارتفاع فى ضغط الدم</li>
                      <li>لو فى زياده فى هرمون E2</li>
                      <li>الاصابة بفيروس نقص المناعة</li>
                      <li>
                        واخيرا طبيعى جدا ان يحصل نقص فى الهرمون الذكرى كل ما
                        بنكبر فى العمر
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className={styles.divider}>
          <h3>
            ولو عايز تعرف هل عملية دوالي الخصية ممكن تسبب نقص في هرمون الذكورة
            ولا لا ، اسمع الفيديو ده مع الدكتور اسامة البكل…
          </h3>

          <div className={styles.videoWrapper}>
            <video
              className={styles.video}
              controls
              src="https://res.cloudinary.com/dvbusrvgi/video/upload/v1758795433/hormones_de18fa.mp4"
            >
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
        </section>

        {/* Treatment Section */}
        {/* <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>خيارات العلاج</h2>
            <div className={styles.treatmentGrid}>
              {treatmentOptions.map((treatment, index) => (
                <div key={index} className={styles.treatmentCard}>
                  <h3 className={styles.treatmentTitle}>{treatment.title}</h3>
                  <p className={styles.treatmentDescription}>{treatment.description}</p>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1e293b' }}>طرق العلاج:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {treatment.methods.map((method, idx) => (
                        <li key={idx} style={{ padding: '0.25rem 0', color: '#475569', paddingRight: '1rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', right: 0, color: '#10b981' }}>✓</span>
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1e293b' }}>الفوائد:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {treatment.benefits.map((benefit, idx) => (
                        <li key={idx} style={{ padding: '0.25rem 0', color: '#475569', paddingRight: '1rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', right: 0, color: '#3b82f6' }}>•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.treatmentDetails}>
                    <div className={styles.detail}>
                      <span className={styles.detailLabel}>المتابعة:</span>
                      <span className={styles.detailValue}>{treatment.monitoring}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Diagnosis Process */}
        {/* <section className={styles.microTeseSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>عملية التشخيص والعلاج</h2>
            <div className={styles.microTeseContent}>
              <div className={styles.microTeseInfo}>
                <h3>الفحوصات المطلوبة:</h3>
                <ul>
                  <li>فحص التستوستيرون الصباحي</li>
                  <li>فحص FSH و LH</li>
                  <li>فحص البرولاكتين</li>
                  <li>فحص الغدة الدرقية</li>
                  <li>فحص الكورتيزول</li>
                  <li>تحليل السائل المنوي</li>
                </ul>
                
                <h3>علامات تحسن العلاج:</h3>
                <ul>
                  <li>تحسن مستويات الهرمونات</li>
                  <li>زيادة الطاقة والحيوية</li>
                  <li>تحسن الرغبة الجنسية</li>
                  <li>تحسن جودة الانتصاب</li>
                  <li>تحسن تحليل السائل المنوي</li>
                </ul>
              </div>
              
              <div className={styles.procedureSteps}>
                <h3>خطوات العلاج:</h3>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                      <h4>التقييم الشامل</h4>
                      <p>فحص سريري وتحاليل شاملة للهرمونات</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <h4>تحديد السبب</h4>
                      <p>تحديد ما إذا كان السبب أولي أم ثانوي</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <h4>وضع خطة العلاج</h4>
                      <p>اختيار أفضل طريقة علاج حسب الحالة</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                      <h4>المتابعة الدورية</h4>
                      <p>فحوصات منتظمة لتقييم الاستجابة</p>
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
                <h3>سامر - 35 سنة</h3>
                <p>
                  "كان لديّ نقص شديد في التستوستيرون مع ضعف في الرغبة الجنسية. 
                  بعد العلاج التعويضي، تحسنت حالتي بشكل كبير وحدث الحمل خلال 6 شهور."
                </p>
              </div>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>✅</div>
                <h3>أحمد - 28 سنة</h3>
                <p>
                  "اكتشفت أن لديّ ارتفاع في البرولاكتين كان يمنع الإنجاب. 
                  مع العلاج المناسب، عاد مستوى الهرمون طبيعياً وحققنا حلم الأبوة."
                </p>
              </div>
              <div className={styles.storyCard}>
                <div className={styles.storyIcon}>✅</div>
                <h3>محمد - 32 سنة</h3>
                <p>
                  "كانت مشكلتي في الغدة النخامية تؤثر على جميع الهرمونات. 
                  العلاج بالمحفزات أعاد إنتاج الهرمونات طبيعياً وتحسنت الخصوبة."
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              {/* <h2>استعد توازنك الهرموني وخصوبتك</h2>
              <p>
                اضطرابات الهرمونات قابلة للعلاج بنجاح عالي. لا تدع المشكلة
                تتفاقم، احجز استشارة مع د. أسامة البكل للحصول على تقييم شامل
                وخطة علاج مناسبة.
              </p> */}
              <div className={styles.ctaButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز استشارة الآن
                </Link>
                <Link href="tel:+201017912197" className={styles.secondaryBtn}>
                  اتصل الآن: 01017912197
                </Link>
              </div>
              <p
                style={{
                  marginTop: "2rem",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                و لو لسه عاوز تعرف اكتر عن الاسباب اللى ممكن يحصل بسببها انعدام
                أو نقص للحيوانات المنوية{" "}
                <Link
                  href="/fertility/azoospermia"
                  style={{ color: "#3b82f6", textDecoration: "underline" }}
                >
                  اضغط هنا
                </Link>
              </p>
            </div>
          </div>
        </section>

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
                <p>تعرف على أسباب وعلاج انعدام الحيوانات المنوية</p>
              </Link>
              <Link
                href="/sexual-problems/erectile-dysfunction"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>💪</span>
                <h3>ضعف الانتصاب</h3>
                <p>علاج ضعف الانتصاب المرتبط بنقص الهرمونات</p>
              </Link>
              <Link
                href="/fertility/testicular-problems"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>🩺</span>
                <h3>مشاكل الخصية</h3>
                <p>تأثير أمراض الخصية على إنتاج الهرمونات</p>
              </Link>
            </div>
          </div>
        </section> */}
      </div>
    </MainLayout>
  );
}
