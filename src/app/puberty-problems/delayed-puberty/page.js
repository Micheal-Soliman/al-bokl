import MainLayout from "../../components/layout/MainLayout";
import { generateSEOMetadata } from "../../../lib/seo/articleSEO";
import Link from "next/link";
import styles from "../puberty-problems.module.css";
import Image from "next/image";

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "تأخر البلوغ - الدكتور أسامة البكل",
    description:
      "تاخر البلوغ معناه توقف نمو الأعضاء التناسلية عند الطفل، وساعتها هتكون بتحكم علي ابنك أن يكون عنده مشكلة في الانجاب و فى العلاقة الجنسية",
    keywords: [
      "تأخر البلوغ",
      "تأخر البلوغ عند الذكور",
      "علاج تأخر البلوغ",
      "هرمون التستوستيرون",
      "النمو المتأخر",
      "د أسامة البكل",
      "هرمون النمو",
      "الأعضاء التناسلية",
    ],
    canonical: "/puberty-problems/delayed-puberty",
    image: "/images/puberty-problems/delayed-puberty.webp",
  });
}

export default function DelayedPubertyPage() {
  const delayedPubertyDefinition = {
    title: "تأخر البلوغ",
    description:
      "تأخر البلوغ مرض لازم يتم علاجه فى فتره معينه، لان بعد الفتره دى علاج تأخر البلوغ بيكون صعب والاستجابة للعلاج بتبقى اضعف وابطأ، و كده هتكون بتحكم على ابنك لما يكبر ان يكون عنده مشكلة فى الانجاب و فى العلاقة الجنسية",
    explanation:
      "و عشان نفهم كويس تأخر البلوغ، لازم نفهم هو نمو الطفل بيحصل ازاى:",
  };

  const growthHormones = [
    {
      hormone: "هرمون النمو",
      description:
        "وده بيكون مسؤول عن نمو الجسم بشكل عام زى زيادة الطول و الوزن",
      icon: "📏",
    },
    {
      hormone: "هرمون التستوستيرون",
      description:
        "وده بيكون مسؤول عن كل العلامات الذكورية، و هو اللى بيوصل الطفل لمرحلة البلوغ",
      icon: "💪",
    },
  ];

  const hormonalProblems = [
    {
      problem: "مشكلة في هرمون النمو مع هرمون ذكورة كويس",
      result:
        "هنلاقى ان الاعضاء التناسلية للطفل بتنمو بشكل طبيعى، لكن هيكون فى مشكله فى نمو الجسم و هنا الطفل ممكن يكون قزم",
      icon: "⬇️",
    },
    {
      problem: "مشكلة في هرمون الذكورة مع هرمون نمو كويس",
      result:
        "هنا الجسم هيكون بينمو بشكل طبيعى لكن الاعضاء التناسلية هتكون صغيره يعنى الطفل هيوصل لسن البلوغ بس اعضائه التناسلية هتكون فى حجم اعضاء طفل، و هيكون عندنا مشكله كمان و هى ان هرمون الذكوره بيكون مسؤول عن تكوين النهايات العظمية، و بكده الطفل طوله هيفضل يزيد حتى بعد مرحله البلوغ، و ده هيتسبب فى ان الطفل يكون طوله ازيد من الطبيعى",
      icon: "⬆️",
    },
  ];

  const pubertyDefinition = {
    title: "طيب هو يعنى اي مرحلة البلوغ ؟",
    description:
      "هى مرحلة عمرية بيحصل فيها تغيرات فسيولوجية فى جسم الطفل، وده اللى بيحولة من طفل لشاب بالغ قادر على الانجاب و ممارسة العلاقة الجنسية، و ده بيحصل من سن 9 سنين ولحد 14 سنه و هو ده الوقت الطبيعى للوصول لمرحلة البلوغ، فلو الطفل وصل للسن ده و مبدأش يظهرعليه علامات البلوغ وقتها الطفل ده بيكون عنده تأخر فى البلوغ.",
  };

  const pubertySignsType1 = [
    "فى زياده فى حجم الخصية ودى من اهم علامات البلوغ لان ده معناه ان الخصية طبيعية و انها بتقدر تقوم بكل وظايفها سواء انتاج الحيوانات المنوية فميحصلش للطفل لما يكبر تأخر فى الانجاب، او انتاج الهرمون الذكرى اللى اغلب مشاكل العلاقة الجنسية بتكون بسبب نقصه",
    "و هنلاقى زيادة فى حجم القضيب",
    "و كمان هيبدء يحصل انتصاب صباحى",
    "و هيبدء يحصل احتلام و قذف",
    "و هيحصل خشونة فى الصوت",
    "و هيبدأ يظهر كمان شعر فى الوجة و الجسم و فى منطقة العانة",
  ];

  const pubertySignsType2 = [
    "فى زياده فى كثافة العظم",
    "و كمان تغير فى شكل العضلات",
    "و زياده فى الطول و الوزن",
  ];

  const delayedPubertyCauses = [
    "اما عوامل وراثية",
    "او سوء تغذية او مشاكل فى الجهاز الهضمى",
    "لو الطفل مصاب بمرض السكر و متعالجش و ظبطنا نسبة السكر، ده هيأثر على هرمون الذكوره و هيأخر البلوغ",
    "لو فى مشاكل فى الغده النخامية زى خمول فى نشاط الغده او اورام، ده هيأتر على انتاجها لهرمون FSH و ده الهرمون المسؤول عن انتاج الحيوانات المنوية، او هرمون LH و ده الهرمون المسؤول عن تنشيط الخصية و انتاجها لهرمون الذكوره",
    "لو فى خلل فى افرازات الغده الدرقية",
    "لو كان الطفل مصاب بمتلازمة الكلاينفلتر",
    "لو الطفل كان عنده خصية معلقة و متعالجنش، لان ده هيسبب نقص فى نسبة هرمون الذكوره",
    "لو فى خلل فى الخصية نفسها و ده بيخليها مش بتكبر و مش بتستجيب لتحفيز هرمون LH ولا بتنتج هرمون الذكورة",
    "لو الطفل مصاب بامراض الكلى او الكبد",
    "لو فى اضطرابات فى المناعه",
    "لو الطفل اتعرض للعلاج الاشعاعى او الكيميائ بسبب الامراض السرطانية",
    "لو الطفل كان عنده سمنة مفرطة",
  ];

  const causes = [
    {
      category: "أسباب مركزية (الغدة النخامية/المخ)",
      causes: [
        "متلازمة كالمان (نقص GnRH)",
        "أورام الغدة النخامية",
        "إصابات الرأس",
        "العلاج الإشعاعي",
        "التهابات الدماغ",
        "اضطرابات وراثية",
      ],
      prevalence: "20-25%",
      icon: "🧠",
    },
    {
      category: "أسباب طرفية (الخصيتين)",
      causes: [
        "متلازمة كلاينفلتر",
        "الخصية المعلقة",
        "التواء الخصية",
        "العلاج الكيماوي",
        "التهاب الخصية",
        "إصابات الخصية",
      ],
      prevalence: "15-20%",
      icon: "🔬",
    },
    {
      category: "أسباب عامة",
      causes: [
        "سوء التغذية الشديد",
        "الأمراض المزمنة",
        "اضطرابات الغدة الدرقية",
        "مرض السكري غير المنضبط",
        "أمراض الكلى المزمنة",
        "فقدان الشهية العصبي",
      ],
      prevalence: "10-15%",
      icon: "🏥",
    },
    {
      category: "التأخر الدستوري",
      causes: [
        "عوامل وراثية",
        "تاريخ عائلي",
        "نمط نمو طبيعي لكن بطيء",
        "لا توجد أسباب مرضية",
      ],
      prevalence: "40-50%",
      icon: "👨‍👩‍👦",
    },
  ];

  const diagnosticTests = [
    {
      test: "الفحص السريري الشامل",
      purpose: "تقييم مرحلة البلوغ وعلامات النمو",
      details: [
        "قياس الطول والوزن",
        "تقييم مرحلة البلوغ (مقياس تانر)",
        "فحص الأعضاء التناسلية",
        "البحث عن علامات متلازمات وراثية",
      ],
      timing: "الزيارة الأولى",
    },
    {
      test: "تحاليل الهرمونات",
      purpose: "تحديد مستوى الهرمونات الجنسية",
      details: [
        "هرمون التستوستيرون",
        "هرمون LH و FSH",
        "هرمون النمو",
        "هرمونات الغدة الدرقية",
      ],
      timing: "في الصباح الباكر",
    },
    {
      test: "أشعة لتقييم العمر العظمي",
      purpose: "تحديد النضج العظمي مقارنة بالعمر الزمني",
      details: [
        "أشعة سينية على اليد والرسغ",
        "مقارنة بالمعايير المرجعية",
        "تحديد إمكانية النمو المستقبلي",
        "توقع الطول النهائي",
      ],
      timing: "عند التشخيص",
    },
    {
      test: "اختبار تحفيز الهرمونات",
      purpose: "تقييم استجابة الغدد للتحفيز",
      details: [
        "حقن هرمون GnRH",
        "قياس استجابة LH و FSH",
        "تحديد مكان المشكلة",
        "التفريق بين الأسباب المختلفة",
      ],
      timing: "عند الحاجة للتشخيص الدقيق",
    },
    {
      test: "الفحوصات الوراثية",
      purpose: "البحث عن متلازمات وراثية",
      details: [
        "تحليل الكروموسومات",
        "فحص متلازمة كلاينفلتر",
        "اختبارات جينية متخصصة",
        "تحليل الحمض النووي",
      ],
      timing: "عند الاشتباه في سبب وراثي",
    },
  ];

  const treatmentProtocols = [
    {
      protocol: "العلاج الهرموني بالتستوستيرون",
      indications: ["قصور الغدد التناسلية", "التأخر الدستوري الشديد"],
      methods: [
        {
          method: "حقن التستوستيرون",
          dosage: "50-100 مجم كل 2-4 أسابيع",
          duration: "6-12 شهر للتأخر الدستوري، مدى الحياة لقصور الغدد",
          advantages: ["فعالية عالية", "تكلفة منخفضة", "خبرة واسعة"],
          disadvantages: ["حقن متكررة", "تذبذب في مستوى الهرمون"],
        },
        {
          method: "جل التستوستيرون",
          dosage: "25-50 مجم يومياً على الجلد",
          duration: "حسب الحاجة",
          advantages: ["سهولة الاستخدام", "مستوى ثابت للهرمون", "لا يحتاج حقن"],
          disadvantages: ["تكلفة أعلى", "احتمالية نقل الهرمون للآخرين"],
        },
      ],
    },
    {
      protocol: "علاج الأسباب الأساسية",
      indications: ["وجود سبب قابل للعلاج"],
      methods: [
        {
          method: "علاج سوء التغذية",
          dosage: "حسب الحالة",
          duration: "حتى تحسن الحالة الغذائية",
          advantages: ["يعالج السبب الجذري", "فوائد صحية عامة"],
          disadvantages: ["يحتاج وقت طويل", "قد لا يكون كافياً وحده"],
        },
        {
          method: "علاج الأمراض المزمنة",
          dosage: "حسب المرض",
          duration: "مستمر",
          advantages: ["تحسن الصحة العامة", "قد يحفز البلوغ الطبيعي"],
          disadvantages: ["معقد", "قد يحتاج علاج هرموني إضافي"],
        },
      ],
    },
  ];

  const expectedOutcomes = [
    {
      timeframe: "الشهر الأول",
      changes: [
        "زيادة في الطاقة والحيوية",
        "تحسن المزاج",
        "بداية نمو الأعضاء التناسلية",
        "زيادة الشهية",
      ],
    },
    {
      timeframe: "الشهور 2-3",
      changes: [
        "نمو واضح في الأعضاء التناسلية",
        "ظهور أول شعيرات العانة",
        "زيادة في الكتلة العضلية",
        "بداية تغير الصوت",
      ],
    },
    {
      timeframe: "الشهور 4-6",
      changes: [
        "نمو سريع في الطول",
        "زيادة كثافة شعر العانة",
        "تطور العضلات بوضوح",
        "ظهور حب الشباب",
      ],
    },
    {
      timeframe: "السنة الأولى",
      changes: [
        "اكتمال معظم علامات البلوغ",
        "تغير الصوت نهائياً",
        "ظهور شعر الوجه",
        "النضج الجنسي الكامل",
      ],
    },
  ];

  const psychologicalImpact = [
    {
      impact: "انخفاض الثقة بالنفس",
      description: "الشعور بالاختلاف عن الأقران والنقص",
      management: [
        "الدعم النفسي المستمر",
        "التأكيد على أن التأخر مؤقت",
        "تعزيز نقاط القوة الأخرى",
        "العلاج النفسي إذا لزم الأمر",
      ],
    },
    {
      impact: "العزلة الاجتماعية",
      description: "تجنب الأنشطة الاجتماعية والرياضية",
      management: [
        "تشجيع المشاركة في الأنشطة",
        "التواصل مع المدرسة",
        "بناء صداقات مع أطفال في نفس الوضع",
        "تجنب المقارنات",
      ],
    },
    {
      impact: "مشاكل في الأداء المدرسي",
      description: "صعوبة التركيز وانخفاض الدرجات",
      management: [
        "التعاون مع المعلمين",
        "توفير بيئة داعمة للدراسة",
        "معالجة القلق والتوتر",
        "وضع أهداف واقعية",
      ],
    },
  ];

  return (
    <MainLayout>
      <div className={styles.pubertyPage}>
        {/* Hero Section */}
        {/* <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link href="/">الرئيسية</Link>
              <span>/</span>
              <Link href="/puberty-problems">مشاكل البلوغ</Link>
              <span>/</span>
              <span>تأخر البلوغ</span>
            </div>
            <div className={styles.heroContent}>
              <div>
                <h1 className={styles.heroTitle}>تأخر البلوغ</h1>
                <p className={styles.heroDescription}>
                  تاخر البلوغ معناه توقف نمو الأعضاء التناسلية عند الطفل، وساعتها هتكون بتحكم علي ابنك 
                  أن يكون عنده مشكلة في الانجاب و فى العلاقة الجنسية
                </p>
                <div className={styles.heroButtons}>
                  <Link href="/contact/appointment" className={styles.primaryBtn}>
                    استشارة متخصصة
                  </Link>
                </div>
              </div>
              <div className={styles.heroImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.heroIcon}>⏳</span>
                </div>
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
                <Link href="/fertility">مشاكل البلوغ</Link>
                <span>/</span>
                <span>البلوغ المبكر</span>
              </div>
            </div>
            <div className={styles.heroGrid}>
              <div className={styles.heroImage}>
                <Image
                  src="/Puberty.webp"
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
        <section className={styles.problemsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {delayedPubertyDefinition.title}
            </h2>
            <div className={styles.definitionCard}>
              <p className={styles.definitionText}>
                {delayedPubertyDefinition.description}
              </p>

              <div className={styles.pubertyExplanation}>
                <h3 className={styles.subTitle}>
                  {delayedPubertyDefinition.explanation}
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Hormones Section */}
        <section className={styles.supportSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              فى هرمونين اساسين بيتحكموا فى نمو الطفل و هما :
            </h2>
            <div className={styles.hormonesGrid}>
              {growthHormones.map((hormone, index) => (
                <div key={index} className={styles.hormoneCard}>
                  <div className={styles.hormoneIcon}>{hormone.icon}</div>
                  <h3 className={styles.hormoneTitle}>{hormone.hormone}</h3>
                  <p className={styles.hormoneDescription}>
                    {hormone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hormonal Problems Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              و عشان يكون نمو الطفل سليم لازم الهرمونين دول يكونوا شغالين بنفس
              الكفاءه
            </h2>
            <div className={styles.problemsList}>
              {hormonalProblems.map((problem, index) => (
                <div key={index} className={styles.problemCard}>
                  <div className={styles.problemIcon}>{problem.icon}</div>
                  <h4 className={styles.problemTitle}>{problem.problem}</h4>
                  <p className={styles.problemResult}>{problem.result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Puberty Definition Section */}
        <section className={styles.supportSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{pubertyDefinition.title}</h2>
            <div className={styles.pubertyDefinitionCard}>
              <p className={styles.pubertyDefinitionText}>
                {pubertyDefinition.description}
              </p>
            </div>
          </div>
        </section>

        {/* Puberty Signs Section */}
        <section className={styles.supportSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              طيب اى هى علامات مرحلة البلوغ ؟
            </h2>
            <div className={styles.signsIntro}>
              <p className={styles.signsIntroText}>
                علامات مرحلة البلوغ بتتقسم لنوعين :
              </p>
            </div>

            {/* Type 1 - Secondary Sexual Characteristics */}
            <div className={styles.pubertyTypesContainer}>
              <div className={styles.pubertyType}>
                <div className={styles.pubertyTypeHeader}>
                  <span className={styles.pubertyTypeNumber}>1</span>
                  <h3 className={styles.pubertyTypeTitle}>النوع الأول</h3>
                </div>
                <div className={styles.pubertyTypeSubtitle}>
                  <h4>الصفات الذكرية الثانوية و هنا هنلاقى ان:</h4>
                </div>

                <div className={styles.pubertySignsList}>
                  <div className={styles.pubertySignCard}>
                    <div className={styles.pubertySignIcon}>🏭</div>
                    <div className={styles.pubertySignContent}>
                      <h5>زياده فى حجم الخصية</h5>
                      <p>
                        ودى من اهم علامات البلوغ لان ده معناه ان الخصية طبيعية و
                        انها بتقدر تقوم بكل وظايفها سواء انتاج الحيوانات المنوية
                        فميحصلش للطفل لما يكبر تأخر فى الانجاب، او انتاج الهرمون
                        الذكرى اللى اغلب مشاكل العلاقة الجنسية بتكون بسبب نقصه.
                      </p>
                    </div>
                  </div>

                  <div className={styles.pubertySignCard}>
                    <div className={styles.pubertySignIcon}>📏</div>
                    <div className={styles.pubertySignContent}>
                      <h5>زيادة فى حجم القضيب</h5>
                      <p>و هنلاقى زيادة فى حجم القضيب.</p>
                    </div>
                  </div>

                  <div className={styles.pubertySignCard}>
                    <div className={styles.pubertySignIcon}>🌅</div>
                    <div className={styles.pubertySignContent}>
                      <h5>انتصاب صباحى</h5>
                      <p>و كمان هيبدء يحصل انتصاب صباحى.</p>
                    </div>
                  </div>

                  <div className={styles.pubertySignCard}>
                    <div className={styles.pubertySignIcon}>💧</div>
                    <div className={styles.pubertySignContent}>
                      <h5>احتلام و قذف</h5>
                      <p>و هيبدء يحصل احتلام و قذف.</p>
                    </div>
                  </div>

                  <div className={styles.pubertySignCard}>
                    <div className={styles.pubertySignIcon}>🎵</div>
                    <div className={styles.pubertySignContent}>
                      <h5>خشونة فى الصوت</h5>
                      <p>و هيحصل خشونة فى الصوت.</p>
                    </div>
                  </div>

                  <div className={styles.pubertySignCard}>
                    <div className={styles.pubertySignIcon}>🧔</div>
                    <div className={styles.pubertySignContent}>
                      <h5>نمو الشعر</h5>
                      <p>
                        و هيبدأ يظهر كمان شعر فى الوجة و الجسم و فى منطقة
                        العانة.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Type 2 - Body Changes */}
              <div className={styles.pubertyType}>
                <div className={styles.pubertyTypeHeader}>
                  <span className={styles.pubertyTypeNumber}>2</span>
                  <h3 className={styles.pubertyTypeTitle}>النوع التاني</h3>
                </div>
                <div className={styles.pubertyTypeSubtitle}>
                  <h4>تغيرات في شكل الجسم هنا هنلاقى ان:</h4>
                </div>

                <div className={styles.pubertySignsList}>
                  <div className={styles.pubertySignCard}>
                    <div className={styles.pubertySignIcon}>🦴</div>
                    <div className={styles.pubertySignContent}>
                      <h5>زياده فى كثافة العظم</h5>
                      <p>فى زياده فى كثافة العظم.</p>
                    </div>
                  </div>

                  <div className={styles.pubertySignCard}>
                    <div className={styles.pubertySignIcon}>💪</div>
                    <div className={styles.pubertySignContent}>
                      <h5>تغير فى شكل العضلات</h5>
                      <p>و كمان تغير فى شكل العضلات.</p>
                    </div>
                  </div>

                  <div className={styles.pubertySignCard}>
                    <div className={styles.pubertySignIcon}>📈</div>
                    <div className={styles.pubertySignContent}>
                      <h5>زياده فى الطول و الوزن</h5>
                      <p>و زياده فى الطول و الوزن.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note About Age */}
            <div className={styles.importantNote}>
              <div className={styles.importantNoteIcon}>⚠️</div>
              <div className={styles.importantNoteContent}>
                <h4>معلومة مهمة جداً</h4>
                <p>
                  و هنا لازم نعرف حاجة مهمة ان كل الاعراض دى المفروض انها تبتدي
                  تحصل قبل سن 14 سنه.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Early Monitoring Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>أهمية المتابعة المبكرة</h2>
            <div className={styles.monitoringContent}>
              <div className={styles.monitoringText}>
                <p>
                  عشان كده مهم جدا ان الاب و الام يركزوا فى كل مراحل نمو الطفل و
                  حجم اعضائة التناسيلة من وقت الولاده، ولازم يتأكدوا ان الطفل
                  معندهوش اى عيوب خلقية زى:
                </p>
              </div>

              <div className={styles.congenitalDefectsGrid}>
                <div className={styles.defectCard}>
                  <div className={styles.defectIcon}>🔀</div>
                  <h4>الاحليل السفلى</h4>
                  <p>لانه ممكن يسبب احياناّ اعوجاج فى العضو الذكرى.</p>
                </div>

                <div className={styles.defectCard}>
                  <div className={styles.defectIcon}>⬆️</div>
                  <h4>خصية معلقة</h4>
                  <p>
                    لانها لو متعالجتش فى الوقت المناسب هيحصلها ضمور و ده هيأثر
                    على انتاج الحيوانات المنوية و انتاج هرمون الذكوره.
                  </p>
                </div>

                <div className={styles.defectCard}>
                  <div className={styles.defectIcon}>🔍</div>
                  <h4>عضو مدفون</h4>
                  <p>
                    و ده لو متعالجش هيسبب ان حجم العضو الذكرى مش هيكون طبيعى.
                  </p>
                </div>
              </div>

              <div className={styles.monitoringTimeline}>
                <h3>خطة المتابعة</h3>
                <div className={styles.timelineContent}>
                  <p>
                    و دى اول خطوة بناخدها مع الطفل اول مايتولد و من سن 3 او 4
                    سنين لازم بردو نتأكد ان الاعضاء التناسلية بتنمو بشكل طبيعى،
                    لحد ما يوصل لمرحلة البلوغ.
                  </p>
                </div>
              </div>

              <div className={styles.importantClarification}>
                <div className={styles.clarificationIcon}>💡</div>
                <div className={styles.clarificationContent}>
                  <h4>توضيح مهم</h4>
                  <p>
                    و هنا لازم نفهم حاجة مهمه جدا، اننا لما بنقول نتابع الطفل من
                    سن صغير، ده مش معناه اننا لو اكتشفنا ان الطفل هيكون عنده
                    مشكلة فى البلوغ اننا هنعالجها دلوقتى، لكن الهدف اننا نكون
                    عارفين لو فى مشكله هتأخر بلوغ الطفل، و نحدد افضل وقت لعلاجها
                    هيكون امتى، لان الطفل قبل سن 14 سنه مش بياخد اى علاج لو عنده
                    مشكلة هتأثر على البلوغ، غير فى حالة واحده لو كان فى خلل فى
                    الخصية نفسها، وقتها هنبدء فى العلاج فوراّ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              و تعالوا بقى دلوقتى نعرف اى هى اسباب تأخر البلوغ
            </h2>

            <div className={styles.causesIntro}>
              <p>
                بس قبل ما نتكلم عن الاسباب المرضية اللى بسببها البلوغ بيتأخر،
                لازم كمان نعرف ان فى بعض الاولاد ممكن يتأخر عندهم البلوغ بعد 14
                سنه، و ميكنش فى اى سبب مرضى لده، وده طبعا اللى بيتحدد بعد الكشف
                و الفحوصات اذا كان تأخير البلوغ، طبيعى و ان الطفل بس متأخر فى
                الوصول للبلوغ، او تأخير البلوغ له سبب مرضى.
              </p>
            </div>

            <h3 className={styles.causesSubtitle}>
              و بالنسبة للاسباب المرضية هى:
            </h3>

            <div className={styles.causesList}>
              <div className={styles.causeItem}>
                <div className={styles.causeIcon}>🧬</div>
                <span>اما عوامل وراثية.</span>
              </div>

              <div className={styles.causeItem}>
                <div className={styles.causeIcon}>🍽️</div>
                <span>او سوء تغذية او مشاكل فى الجهاز الهضمى.</span>
              </div>

              <div className={styles.causeItem}>
                <div className={styles.causeIcon}>🩸</div>
                <span>
                  لو الطفل مصاب بمرض السكر و متعالجش و ظبطنا نسبة السكر، ده
                  هيأثر على هرمون الذكوره و هيأخر البلوغ.
                </span>
              </div>

              <div className={styles.causeItem}>
                <div className={styles.causeIcon}>🧠</div>
                <span>
                  لو فى مشاكل فى الغده النخامية زى خمول فى نشاط الغده او اورام،
                  ده هيأتر على انتاجها لهرمون FSH و ده الهرمون المسؤول عن انتاج
                  الحيوانات المنوية، او هرمون LH و ده الهرمون المسؤول عن تنشيط
                  الخصية و انتاجها لهرمون الذكوره.
                </span>
              </div>

              <div className={styles.causeItem}>
                <div className={styles.causeIcon}>🦋</div>
                <span>لو فى خلل فى افرازات الغده الدرقية.</span>
              </div>

              <div className={styles.causeItem}>
                <div className={styles.causeIcon}>🔬</div>
                <span>لو كان الطفل مصاب بمتلازمة الكلاينفلتر.</span>
              </div>

              <div className={styles.causeItem}>
                <div className={styles.causeIcon}>⬆️</div>
                <span>
                  لو الطفل كان عنده خصية معلقة و متعالجنش، لان ده هيسبب نقص فى
                  نسبة هرمون الذكوره.
                </span>
              </div>

              <div className={styles.causeItem}>
                <div className={styles.causeIcon}>🏭</div>
                <span>
                  لو فى خلل فى الخصية نفسها و ده بيخليها مش بتكبر و مش بتستجيب
                  لتحفيز هرمون LH ولا بتنتج هرمون الذكورة.
                </span>
              </div>

              <div className={styles.causeItem}>
                <div className={styles.causeIcon}>🫘</div>
                <span>لو الطفل مصاب بامراض الكلى او الكبد.</span>
              </div>

              <div className={styles.causeItem}>
                <div className={styles.causeIcon}>🛡️</div>
                <span>لو فى اضطرابات فى المناعه.</span>
              </div>

              <div className={styles.causeItem}>
                <div className={styles.causeIcon}>☢️</div>
                <span>
                  لو الطفل اتعرض للعلاج الاشعاعى او الكيميائ بسبب الامراض
                  السرطانية.
                </span>
              </div>

              <div className={styles.causeItem}>
                <div className={styles.causeIcon}>⚖️</div>
                <span>لو الطفل كان عنده سمنة مفرطة.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Obesity Special Section */}
        <section className={styles.obesitySection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>السمنة وتأثيرها على البلوغ</h2>
            <div className={styles.obesityContent}>
              <div className={styles.obesityIntro}>
                <p>
                  و فى موضوع السمنه ده لازم ناخد بالنا من حاجة مهمه جدا، ان حجم
                  العضو الذكرى و الخصية ممكن يكونوا صغيرين لسببين و هما:
                </p>
              </div>

              <div className={styles.obesityReasons}>
                <div className={styles.obesityReason}>
                  <div className={styles.obesityReasonHeader}>
                    <span className={styles.obesityReasonNumber}>1</span>
                    <h4>تأثير هرموني حقيقي</h4>
                  </div>
                  <p>
                    اما ان السمنة ممكن تكون هى السبب فعلاّ فى تأخير البلوغ،
                    لانها بتأثر على هرمون الذكوره و بتحوله لهرمون انثوى، وبكده
                    مش هتظهر على الطفل علامات البلوغ و هيكون عندنا تثدى.
                  </p>
                </div>

                <div className={styles.obesityReason}>
                  <div className={styles.obesityReasonHeader}>
                    <span className={styles.obesityReasonNumber}>2</span>
                    <h4>تأثير ظاهري فقط</h4>
                  </div>
                  <p>
                    او ان السمنه المفرطة تكون مسببة زياده فى دهون منطقة البطن و
                    العانة، و ده هيدينا احساس ان حجم العضو الذكرى و الخصية صغير
                    بسبب الدهون، لكن الطفل وقتها مش هيكون عنده مشكله هرمونية هى
                    اللى مسببه صغر فى حجم المنطقة التناسلية و هيدخل عادى فى
                    مرحلة البلوغ.
                  </p>
                </div>
              </div>

              <div className={styles.weightLossWarning}>
                <div className={styles.warningIcon}>⚠️</div>
                <div className={styles.warningContent}>
                  <h4>تحذير مهم حول إنقاص الوزن</h4>
                  <p>
                    و هنا لو قررنا اننا ننزل الوزن لازم ناخد بالنا من الطريقة
                    اللى هنخس بيها، لازم ميكونش النظام غذائى قاسى ولا نعمل
                    تمارين رياضية عنيفة، لان ده هيسبب خلل فى الهرمونات و وقتها
                    هيكون عندنا مشكلة فى البلوغ بسبب مشكلة هرمونية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Section */}
        <section className={styles.treatmentMainSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>طيب ازاى بنعالج تأخر البلوغ</h2>

            <div className={styles.treatmentTypes}>
              <div className={styles.treatmentType}>
                <div className={styles.treatmentTypeHeader}>
                  <span className={styles.treatmentTypeIcon}>🌿</span>
                  <h3>التأخر الطبيعي</h3>
                </div>
                <div className={styles.treatmentTypeContent}>
                  <p>
                    لو كان السبب فى تأخر البلوغ مش سبب مرضى و كان زى ما قولنا ان
                    دى طبيعة الطفل، فهنا مش بنحتاج اننا ناخد اى علاج، غير فى
                    حالة واحده لو كان الطفل ملاحظ انه مختلف عن باقى الاطفال اللى
                    حوالية و فنفس عمره و كان ده مأثر عليه نفسياّ، وقتها ممكن
                    ناخد علاج هرمونى بجرعات بسيطة، عشان بس نسرع من الوصول
                    للبلوغ.
                  </p>
                </div>
              </div>

              <div className={styles.treatmentType}>
                <div className={styles.treatmentTypeHeader}>
                  <span className={styles.treatmentTypeIcon}>🏥</span>
                  <h3>التأخر المرضي</h3>
                </div>
                <div className={styles.treatmentTypeContent}>
                  <p>
                    اما لو كان سبب تأخر البلوغ مرضى، وقتها لازم الاول نشوف ايه
                    هو المرض اللى سبب تأخر فى البلوغ و نبدء نحط ليه خطة علاج،
                    عشان نوصل فى النهاية ان وضع الهرمونات و الاعضاء التناسلية
                    يكون طبيعى.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Psychological Support Section */}
        <section className={styles.psychologicalSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>الدعم النفسي للطفل</h2>
            <div className={styles.psychologicalContent}>
              <div className={styles.psychologicalAdvice}>
                <div className={styles.psychologicalIcon}>❤️</div>
                <div className={styles.psychologicalText}>
                  <p>
                    و مهم جدا جنب العلاج اللى هنمشى عليه ان الاب و الام يهتموا
                    جدا بالجزء النفسى للطفل، خصوصاّ لو هو واعى بالمشكله اللى
                    عنده، و لازم نبعد عن اى كلام سلبى او انتقاد او اننا نقارنة
                    بباقى الاطفال اللى فى سنه، لان كل ده هيسببله مشاكل نفسية
                    كبيرة جدا علاجها هيكون اصعب من علاج تأخر البلوغ نفسه، فلازم
                    دايماّ نوصل للطفل ان المشكلة اللى عنده مشكلة بسيطة و مع
                    العلاج هيكون كويس و معندهوش اى مشكلة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Message Section */}
        <section className={styles.finalMessageSection}>
          <div className={styles.container}>
            <div className={styles.finalMessageContent}>
              <h2>رسالة أخيرة للوالدين</h2>
              <p style={{ color: "#fff" }}>
                فى النهاية لازم كل أب وأم يكون عندهم وعي بمتابعة نمو أطفالهم،
                سواء النمو الجسدي أو نمو الأعضاء التناسلية، و فى حالة اننا لقينا
                اى حاجة مش طبيعية لازم نكشف على الطفل فوراّ، عشان نقدر نعالج
                المشكلة و نخلي اولادنا تعيش حياتها بشكل طبيعى.
              </p>
              <div className={styles.contactInfo}>
                <p style={{ color: "#fff" }}>
                  و دلوقتى لو عايزين تطمنوا على صحة اولادكم تقدروا تتواصلوا مع
                  الفريق الطبى، <strong>01018874287</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Tests */}
        {/* <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>الفحوصات التشخيصية</h2>
            <div className={styles.treatmentGrid}>
              {diagnosticTests.map((test, index) => (
                <div key={index} className={styles.treatmentCard}>
                  <h4 className={styles.treatmentName}>{test.test}</h4>
                  <p className={styles.treatmentDescription}>{test.purpose}</p>

                  <div style={{ margin: "1rem 0" }}>
                    <strong style={{ color: "#3b82f6" }}>التفاصيل:</strong>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "0.5rem 0",
                      }}
                    >
                      {test.details.map((detail, idx) => (
                        <li
                          key={idx}
                          style={{
                            padding: "0.25rem 0",
                            color: "#64748b",
                            fontSize: "0.9rem",
                            position: "relative",
                            paddingRight: "1rem",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              right: "0",
                              color: "#10b981",
                              fontWeight: "bold",
                            }}
                          >
                            ✓
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.treatmentInfo}>
                    <div className={styles.treatmentDetail}>
                      <span className={styles.detailLabel}>التوقيت:</span>
                      <span className={styles.detailValue}>{test.timing}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/* Treatment Protocols */}
        {/* <section className={styles.normalPubertySection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>بروتوكولات العلاج</h2>
            <div className={styles.normalPubertyContent}>
              {treatmentProtocols.map((protocol, index) => (
                <div
                  key={index}
                  className={styles.stageCard}
                  style={{ marginBottom: "3rem" }}
                >
                  <h3 className={styles.stageTitle}>{protocol.protocol}</h3>
                  <p style={{ color: "#64748b", marginBottom: "1rem" }}>
                    <strong>دواعي الاستخدام:</strong>{" "}
                    {protocol.indications.join(", ")}
                  </p>

                  <div className={styles.stagesGrid}>
                    {protocol.methods.map((method, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "#f8fafc",
                          padding: "1.5rem",
                          borderRadius: "10px",
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        <h4 style={{ color: "#3b82f6", marginBottom: "1rem" }}>
                          {method.method}
                        </h4>

                        <div style={{ marginBottom: "1rem" }}>
                          <strong>الجرعة:</strong> {method.dosage}
                          <br />
                          <strong>المدة:</strong> {method.duration}
                        </div>

                        <div style={{ marginBottom: "1rem" }}>
                          <strong style={{ color: "#10b981" }}>
                            المميزات:
                          </strong>
                          <ul className={styles.changesList}>
                            {method.advantages.map((adv, i) => (
                              <li key={i}>{adv}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <strong style={{ color: "#f59e0b" }}>العيوب:</strong>
                          <ul
                            style={{
                              listStyle: "none",
                              padding: 0,
                              margin: "0.5rem 0",
                            }}
                          >
                            {method.disadvantages.map((dis, i) => (
                              <li
                                key={i}
                                style={{
                                  padding: "0.25rem 0",
                                  color: "#64748b",
                                  fontSize: "0.9rem",
                                  position: "relative",
                                  paddingRight: "1rem",
                                }}
                              >
                                <span
                                  style={{
                                    position: "absolute",
                                    right: "0",
                                    color: "#f59e0b",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ⚠
                                </span>
                                {dis}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Expected Outcomes */}
        {/* <section className={styles.supportSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>النتائج المتوقعة من العلاج</h2>
            <div className={styles.supportGrid}>
              {expectedOutcomes.map((outcome, index) => (
                <div key={index} className={styles.supportCard}>
                  <h3 className={styles.supportTitle}>{outcome.timeframe}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {outcome.changes.map((change, idx) => (
                      <li
                        key={idx}
                        style={{
                          padding: "0.5rem 0",
                          color: "#64748b",
                          borderBottom: "1px solid #e2e8f0",
                          position: "relative",
                          paddingRight: "1.5rem",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            right: "0",
                            color: "#10b981",
                            fontWeight: "bold",
                          }}
                        >
                          ✓
                        </span>
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Psychological Impact */}
        {/* <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>التأثير النفسي والاجتماعي</h2>
            <div className={styles.treatmentGrid}>
              {psychologicalImpact.map((impact, index) => (
                <div key={index} className={styles.treatmentCard}>
                  <h4 className={styles.treatmentName}>{impact.impact}</h4>
                  <p className={styles.treatmentDescription}>
                    {impact.description}
                  </p>

                  <div style={{ marginTop: "1rem" }}>
                    <strong style={{ color: "#3b82f6" }}>طرق التعامل:</strong>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "0.5rem 0",
                      }}
                    >
                      {impact.management.map((method, idx) => (
                        <li
                          key={idx}
                          style={{
                            padding: "0.25rem 0",
                            color: "#64748b",
                            fontSize: "0.9rem",
                            position: "relative",
                            paddingRight: "1rem",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              right: "0",
                              color: "#10b981",
                              fontWeight: "bold",
                            }}
                          >
                            💡
                          </span>
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        {/* <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>استبشر خيراً - ماتفقدش الأمل</h2>
              <p>
                فى النهاية لازم كل أب وأم يكون عندهم وعي بمتابعة نمو أطفالهم،
                سواء النمو الجسدي أو نمو الأعضاء التناسلية، و فى حالة اننا لقينا
                اى حاجة مش طبيعية لازم نكشف على الطفل فوراً، عشان نقدر نعالج
                المشكلة و نخلي اولادنا تعيش حياتها بشكل طبيعى.
              </p>
              <p className={styles.finalContactText}>
                و دلوقتى لو عايزين تطمنوا على صحة اولادكم تقدروا تتواصلوا مع
                الفريق الطبى، <strong>01018874287</strong>
              
              <div className={styles.ctaButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز استشارة الآن
                </Link>
                <Link href="tel:+201018874287" className={styles.secondaryBtn}>
                  اتصل الآن: 01018874287
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        {/* Related Topics */}
        {/* <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>مواضيع ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link
                href="/puberty-problems/precocious-puberty"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>⚡</span>
                <h3>البلوغ المبكر</h3>
                <p>ظهور علامات البلوغ قبل العمر الطبيعي</p>
              </Link>
              <Link
                href="/fertility/hormonal-problems"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>⚗️</span>
                <h3>مشاكل الهرمونات</h3>
                <p>اضطرابات الهرمونات وتأثيرها على النمو</p>
              </Link>
              <Link href="/puberty-problems" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>👦</span>
                <h3>مشاكل البلوغ</h3>
                <p>العودة لصفحة مشاكل البلوغ الرئيسية</p>
              </Link>
            </div>
          </div>
        </section> */}
      </div>
    </MainLayout>
  );
}
