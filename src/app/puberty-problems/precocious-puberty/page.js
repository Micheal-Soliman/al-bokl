import MainLayout from "../../components/layout/MainLayout";
import { generateSEOMetadata } from "../../../lib/seo/articleSEO";
import Link from "next/link";
import styles from "../puberty-problems.module.css";
import Image from "next/image";

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "البلوغ المبكر عند الشباب - الدكتور أسامة البكل",
    description:
      "البلوغ المبكر ممكن يحصل للطفل وهو عمره 9 سنين، بس ده مش معناه انه وضعه كدة طبيعي، لان البلوغ المبكر ممكن يسبب له مشاكل صحية ونفسية كثير جدا تفضل معاه طول حياته.",
    keywords: [
      "البلوغ المبكر",
      "البلوغ المبكر عند الذكور",
      "علاج البلوغ المبكر",
      "هرمونات البلوغ",
      "النمو المبكر",
      "د أسامة البكل",
      "أعراض البلوغ المبكر",
      "أسباب البلوغ المبكر",
    ],
    canonical: "/puberty-problems/precocious-puberty",
    image: "/images/puberty-problems/precocious-puberty.webp",
  });
}

export default function PrecociousPubertyPage() {
  const pubertyDefinition = {
    title: "البلوغ المبكر",
    description:
      "البلوغ المبكر مش معناه ان الطفل كده صحته الجنسية والانجابية كويسه، البلوغ المبكر مرض ولازم نهتم اننا نعالج اطفالنا لو ده حصلهم، لان البلوغ المبكر ليه اضرار صحية ونفسية كتير على الطفل.",
    whatIsPuberty:
      "البلوغ هو التغيرات الفسيولوجية اللي بتحصل للأطفال عشان تنقلهم من مرحلة الطفولة لمرحلة البلوغ، واللي فيها بيكون عندنا القدرة اننا نمارس العلاقة الجنسية، وبيكون كمان عندنا قدرة على الانجاب.",
    earlyPuberty:
      "وبالنسبة البلوغ المبكر فهو المقصود بيه الوصول لمرحلة البلوغ قبل الوقت الطبيعي اللي هو من سن 9 – 14 سنه، والبلوغ هنا ممكن يحصل للطفل وهو عمرة 9 سنين.",
  };

  const pubertySymptoms = [
    "هنلاقى حجم الخصية والقضيب أكبر من الحجم الطبيعي لأي طفل، ودي من اهم علامات البلوغ",
    "وكمان هنلاقى زيادة في العضلات",
    "في زيادة في كثافة العظم",
    "وزيادة في الطول والوزن اكتر من الطبيعي، ووقتها هيكون شكل الطفل مختلف عن باقي الاطفال اللي في سنه",
    "وهنلاقى الصوت بقي خشن اكتر",
    "هيبدأ يظهر شعر في الوجه والعانة والابط",
    "هنحس ان عرق الطفل بقي له ريحة زي الشخص البالغ",
    "ممكن يحصل للطفل انتصاب وقذف",
  ];

  const pubertyCauses = [
    "لو الطفل كان عنده ورم في المخ او في العمود الفقري او في الخصية",
    "لو حصل للطفل اصابة في الدماغ",
    "لو كان في زيادة في نسبة السوائل في المخ",
    "لو زاد هرمون الذكورة عن نسبته الطبيعية",
    "لو حصل خلل في الغده الدرقية",
    "لو كان في ورم او خلل في الغده الكظرية، وهي دي الحالة اللي هيحصل فيها نمو وبلوغ للطفل بشكل مفاجئ",
    "لو استخدامنا للطفل ادوية او كريمات فيها هرمونات",
    "وممكن كمان البلوغ المبكر يكون وراثة",
    "او يحصل بسبب خلل جيني",
    "و كمان الاطفال اللي بياخدوا ادوية عصبيه، ممكن الأدوية دي تسرع من البلوغ",
  ];

  const treatmentInfo = {
    description:
      "بالنسبة للعلاج فهو بيكون على حسب السبب اللي خلى يكون عند الطفل بلوغ مبكر، بمعنى اننا الاول بنبدأ نعالج المرض اللي سبب البلوغ المبكر وبعدها ممكن ناخد علاج هرموني نبطئ بيه البلوغ، والدوا ده بيكون امن جدا على الاطفال يعنى ومش هيسبب للطفل تأخر مرضى للبلوغ ولا هيأثر على الخصوبة ولا القدرة الجنسية للطفل لما يكبر زي ما ناس كتير ممكن تكون فأكره.",
  };

  const complications = [
    {
      title: "قصر في الطول لما يكبر",
      description:
        "واكيد بتقول أزاي ده هيحصل لما هو من دلوقتى اطول من زمايلة، وهنا هقولك ان بعد البلوغ الجسم بيقف عن النمو من ناحية الطول وحجم الاعضاء التناسلية، فانت هتلاقى ان ابنك اه وهو عنده 9 سنين أكبر واطول من باقي الاطفال اللي في سنه، لكن لما يكبر شويه في السن ويكون مثلا عنده 15 سنه، وقتها هيكون طوله أقصر من الاطفال اللي في سنه، لان زي ما قولنا ان النمو بيقف بعد البلوغ.",
    },
    {
      title: "مشاكل صحية أخرى",
      description:
        "تانى مشكلة ان احنا قولنا ان البلوغ المبكر ده بيكون بسبب مرض، زي خلل الهرمونات، اللي لو أهملناها ومعرفناش ان فيه مشكلة بسبب اننا متابعناش الطفل لما حصلة بلوغ مبكر، وقتها الهرمونات دي ممكن تأثر على الجسم كله، وتسبب للطفل مشاكل اكتر.",
    },
    {
      title: "مشاكل نفسية",
      description:
        "واخيراّ البلوغ المبكر هيسبب للطفل مشاكل نفسية، لأنه هيحس ديماّ ان هو فيه مشكله وانه مختلف عن باقي الاطفال اللي في سنه، غير ان بسبب سنه الصغير مش هيكون قادر انه يفهم التغيرات اللي حصلت في جسمه او فاهم سببها ايه، و ده هيسبب قلق وتوتر للطفل، لأنه فجأة اتحول من طفل، لشاب في تكوين الجسم بس، لكن عقلة لسه عقل طفل.",
    },
  ];

  const symptoms = [
    {
      category: "التغيرات الجسدية",
      signs: [
        "نمو الأعضاء التناسلية قبل سن 9 سنوات",
        "ظهور شعر العانة والإبط",
        "زيادة سريعة في الطول والوزن",
        "تطور العضلات مبكراً",
        "ظهور حب الشباب",
        "رائحة الجسم القوية",
      ],
      icon: "📏",
    },
    {
      category: "التغيرات الصوتية",
      signs: [
        "تغير الصوت وخشونته",
        "كسرات في الصوت",
        "تطور الحنجرة",
        "ظهور تفاحة آدم",
      ],
      icon: "🎵",
    },
    {
      category: "التغيرات النفسية",
      signs: [
        "تقلبات مزاجية شديدة",
        "زيادة العدوانية",
        "اهتمام مبكر بالجنس الآخر",
        "سلوك غير مناسب للعمر",
        "صعوبة في التحكم في الانفعالات",
      ],
      icon: "🧠",
    },
    {
      category: "التغيرات الاجتماعية",
      signs: [
        "صعوبة في التعامل مع الأقران",
        "الشعور بالاختلاف والعزلة",
        "مشاكل في المدرسة",
        "انخفاض الثقة بالنفس",
        "ضغط اجتماعي",
      ],
      icon: "👥",
    },
  ];

  const oldComplications = [
    {
      complication: "قصر القامة النهائي",
      description: "إغلاق مبكر لصفائح النمو يؤدي لقصر القامة",
      prevention: "العلاج المبكر بمثبطات الهرمونات",
      severity: "عالية",
    },
    {
      complication: "مشاكل نفسية واجتماعية",
      description: "صعوبة التكيف مع التغيرات الجسدية المبكرة",
      prevention: "الدعم النفسي والاجتماعي",
      severity: "عالية",
    },
    {
      complication: "السلوك الجنسي المبكر",
      description: "اهتمام وسلوك جنسي غير مناسب للعمر",
      prevention: "التوعية والإرشاد",
      severity: "متوسطة",
    },
    {
      complication: "مشاكل في المدرسة",
      description: "صعوبة التركيز والأداء الأكاديمي",
      prevention: "التعاون مع المدرسة",
      severity: "متوسطة",
    },
  ];

  const treatmentOptions = [
    {
      treatment: "مثبطات الهرمونات (GnRH agonists)",
      description: "أدوية تثبط إفراز الهرمونات المحفزة للبلوغ",
      mechanism: "تثبيط محور الغدة النخامية-الغدد التناسلية",
      administration: "حقن شهرية أو كل 3 شهور",
      duration: "حتى العمر الطبيعي للبلوغ",
      effectiveness: "95% نجاح في إيقاف البلوغ",
      sideEffects: [
        "ألم في مكان الحقن",
        "صداع خفيف",
        "تقلبات مزاجية مؤقتة",
        "زيادة طفيفة في الوزن",
      ],
    },
    {
      treatment: "علاج الأسباب الأساسية",
      description: "معالجة الأورام أو الحالات المسببة للبلوغ المبكر",
      mechanism: "إزالة أو علاج المصدر المسبب للهرمونات",
      administration: "حسب نوع العلاج",
      duration: "متغير حسب الحالة",
      effectiveness: "حسب نوع السبب",
      sideEffects: [
        "حسب نوع العلاج",
        "مخاطر الجراحة إن لزمت",
        "آثار جانبية للأدوية المستخدمة",
      ],
    },
  ];

  const psychologicalSupport = [
    {
      aspect: "التثقيف والتوعية",
      description: "شرح الحالة للطفل والأسرة بطريقة مناسبة للعمر",
      methods: [
        "استخدام لغة بسيطة ومفهومة",
        "الإجابة على أسئلة الطفل بصدق",
        "طمأنة الطفل أن الحالة قابلة للعلاج",
        "توضيح أن الطفل ليس مختلفاً أو غريباً",
      ],
    },
    {
      aspect: "الدعم العاطفي",
      description: "مساعدة الطفل على التعامل مع التغيرات والمشاعر",
      methods: [
        "الاستماع لمخاوف الطفل",
        "تعزيز الثقة بالنفس",
        "تعليم تقنيات إدارة الغضب",
        "توفير بيئة آمنة للتعبير عن المشاعر",
      ],
    },
    {
      aspect: "التكيف الاجتماعي",
      description: "مساعدة الطفل على التعامل مع الأقران والمجتمع",
      methods: [
        "التعاون مع المدرسة",
        "تعليم مهارات التواصل",
        "تجنب المواقف المحرجة",
        "بناء صداقات صحية",
      ],
    },
  ];

  const followUpSchedule = [
    {
      period: "الشهر الأول",
      frequency: "كل أسبوعين",
      tests: ["فحص سريري", "تقييم الأعراض الجانبية", "قياس الطول والوزن"],
      goals: ["التأكد من تحمل العلاج", "مراقبة الاستجابة المبدئية"],
    },
    {
      period: "الأشهر 2-6",
      frequency: "شهرياً",
      tests: ["فحص سريري", "تحليل هرمونات", "تقييم النمو"],
      goals: ["تأكيد إيقاف البلوغ", "مراقبة النمو الطولي"],
    },
    {
      period: "بعد 6 شهور",
      frequency: "كل 3-6 شهور",
      tests: ["فحص شامل", "أشعة لتقييم العظام", "تحليل هرمونات"],
      goals: ["متابعة طويلة المدى", "تحديد توقيت إيقاف العلاج"],
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
              <span>البلوغ المبكر</span>
            </div>
            <div className={styles.heroContent}>
              <div>
                <h1 className={styles.heroTitle}>البلوغ المبكر عند الشباب</h1>
                <p className={styles.heroDescription}>
                  البلوغ المبكر ممكن يحصل للطفل وهو عمره 9 سنين، بس ده مش معناه
                  انه وضعه كدة طبيعي، لان البلوغ المبكر ممكن يسبب له مشاكل صحية
                  ونفسية كثير جدا تفضل معاه طول حياته.
                </p>
                <div className={styles.heroButtons}>
                  <Link
                    href="/contact/appointment"
                    className={styles.primaryBtn}
                  >
                    استشارة عاجلة
                  </Link>
                </div>
              </div>
              <div className={styles.heroImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.heroIcon}>👦</span>
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
                  src="/اprecocious-puberty.webp"
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
            <h2 className={styles.sectionTitle}>{pubertyDefinition.title}</h2>
            <div className={styles.definitionCard}>
              <p className={styles.definitionText}>
                {pubertyDefinition.description}
              </p>

              <div className={styles.pubertyExplanation}>
                <h3 className={styles.subTitle}>
                  وقبل ما نعرف يعنى ايه بلوغ مبكر، تعالوا الاول نعرف يعنى اى
                  بلوغ
                </h3>
                <p className={styles.explanationText}>
                  {pubertyDefinition.whatIsPuberty}
                </p>
                <p className={styles.explanationText}>
                  {pubertyDefinition.earlyPuberty}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Know Section */}
        <section className={styles.supportSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              أعرف أزاي ان أبني عنده بلوغ مبكر ؟
            </h2>
            <div className={styles.howToKnowCard}>
              <p className={styles.howToKnowText}>
                اعراض البلوغ المبكر نفسها مش بتكون مختلفة عن الاعراض اللي بتظهر
                في الوقت الطبيعي بس الفرق هنا في الوقت اللي بتظهر فيه اعراض
                البلوغ انه بيكون في سن 9 سنوات، وممكن البلوغ ده يحصل بشكل تدريجي
                او بشكل مفاجئ في حالات معينه هنعرفها كمان شويه.
              </p>
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className={styles.supportSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              تعالوا بقي دلوقتى نعرف اى هي علامات البلوغ ؟
            </h2>
            <div className={styles.symptomsCard}>
              <ul className={styles.symptomsList}>
                {pubertySymptoms.map((symptom, index) => (
                  <li key={index} className={styles.symptomItem}>
                    <span className={styles.symptomBullet}>•</span>
                    <span className={styles.symptomText}>{symptom}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.symptomsNote}>
                ودلوقتي بعد ما عرفنا يعنى اي بلوغ واي هي علاماته، تعالوا بقي
                نعرف دلوقتى
              </p>
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>اسباب البلوغ المبكر :</h2>
            <div className={styles.causesCard}>
              <ul className={styles.causesList}>
                {pubertyCauses.map((cause, index) => (
                  <li key={index} className={styles.causeItem}>
                    <span className={styles.causeBullet}>•</span>
                    <span className={styles.causeText}>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Treatment Section */}
        <section className={styles.normalPubertySection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              طيب أزاي بنعالج البلوغ المبكر ؟
            </h2>
            <div className={styles.treatmentCard}>
              <p className={styles.treatmentText}>
                {treatmentInfo.description}
              </p>
            </div>
          </div>
        </section>

        {/* Complications Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              خلينى دلوقتي اجاوبك على سؤال اكيد انت بتفكر فيه، وهو اي اللي هيحصل
              يعنى لو معالجناش البلوغ المبكر؟
            </h2>
            <div className={styles.complicationsIntro}>
              <p className={styles.complicationsText}>
                ممكن تكون فاكر ان البلوغ المبكر ده حاجة كويسه وان ابنك خلاص كبر
                وبقي راجل، لكن خلينى اقولك ان ده مش صح البلوغ المبكر مرض ولو ما
                عالجنهوش هيسبب للطفل اضرار زي:
              </p>
            </div>
            <div className={styles.complicationsList}>
              {complications.map((comp, index) => (
                <div key={index} className={styles.complicationCard}>
                  <h4 className={styles.complicationTitle}>{comp.title}</h4>
                  <p className={styles.complicationDescription}>
                    {comp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Message Section */}
        <section className={styles.supportSection}>
          <div className={styles.container}>
            <div className={styles.finalMessageCard}>
              <p className={styles.finalMessageText}>
                و في النهاية خلينا نتأكد ان مهم جدا كل أب وأم يكونوا بيتابعوا
                نمو أولادهم كويس سواء من ناحية نمو الجسم أو نمو الأعضاء
                التناسلية عشان لو حصل اى حاجة مش طبيعية في فترة بلوغ الطفل لازم
                نكشف عليه، و نعالجه في اقرب وقت عشان نبعد عن اى مضاعفات او مشاكل
                ممكن تحصل للطفل.
              </p>
              <p className={styles.finalMessageText}>
                و دلوقتى لو اخدتوا قرار انكم عاوز تطمنوا على ابنكم تقدروا
                تتواصلوا مع فريقنا الطبي، <strong>01018874287</strong> و هما
                هيحددولكم اقرب معاد مع د/أسامة محمد البكل مدرس واستشاري طب
                وجراحة أمراض الذكورة و تأخر الإنجاب و الصحة الجنسية بطب القصر
                العيني، عشان نطمن على اولادنا.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>استبشر خيراً - ماتفقدش الأمل</h2>
              <p>
                البلوغ المبكر حالة قابلة للعلاج بنجاح عالي. تواصل معنا الآن
                للحصول على استشارة طبية متخصصة وخطة علاج مناسبة لطفلك.
              </p>
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
        </section>

        {/* Related Topics */}
        {/* <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>مواضيع ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link href="/puberty-problems/delayed-puberty" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>⏳</span>
                <h3>تأخر البلوغ</h3>
                <p>عدم ظهور علامات البلوغ في العمر المناسب</p>
              </Link>
              <Link href="/fertility/hormonal-problems" className={styles.relatedCard}>
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
