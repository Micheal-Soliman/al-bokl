import MainLayout from "../../components/layout/MainLayout";
import { generateSEOMetadata } from "../../../lib/seo/articleSEO";
import Link from "next/link";
import styles from "../emergency-surgeries.module.css";
import Image from "next/image";

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "كسر القضيب - الدكتور أسامة البكل",
    description:
      "كسر القضيب من الإصابات الخطيرة اللي بتحصل في العضو الذكري اثناء الانتصاب في العلاقة الزوجية، وليه أسباب كثيرة، وعلاجه الوحيد هو التدخل الجراحي",
    keywords: [
      "كسر القضيب",
      "إصابة العضو الذكري",
      "كسر العضو الذكري",
      "جراحة طوارئ",
      "د أسامة البكل",
      "النسيج الكهفي",
      "الانتصاب",
      "العلاقة الزوجية",
    ],
    canonical: "/emergency-surgeries/penile-fracture",
    image: "/images/emergency-surgeries/penile-fracture.webp",
  });
}

export default function PenileFracturePage() {
  const fractureDefinition = {
    title: "كسر القضيب",
    description:
      "واحد من الاصابات اللى ممكن تحصل فى العضو الذكرى وقت الانتصاب، و عشان نفهم يعنى اي كسر فى القضيب خلونا الاول نعرف ان العضو الذكرى مفيهوش اى عظم، العضو الذكرى بيتكون من 3 انابيب، انبويه صغيره اسمها مجرى البول داخل النسيج الاسفنجي و دى اللى بيخرج منها البول والسائل المنوي وقت القذف، وانبوبتين كبار اسمهم النسيج الكهفى و ده النسيج اللى بيكون مسؤول عن الانتصاب و بيكون حواليهم جدار او غلاف مكون من طبقتين، طبقة داخلية و طبقة خارجية، و الغلاف ده وقت الانتصاب بيتمدد عشان الجسم الكهفى بيكون مليان بالدم، وقت الانتصاب العضو الذكرى بيكون صلب جدا لانه بيكون مليان بالدم وفى نفس الوقت بيكون حساس جدا، و لو اتعرضنا لاى خبطة جامده او حركة عنيفة ممكن يحصل وقتها قطع فى الغشاء اللى بيكون حوالين النسيج الكهفى و ده اللى بنسميه كسر فى القضيب.",
  };

  const fractureTypes = [
    {
      type: "كسر كلى",
      description:
        "و هنا الكسر بيكون فى كل طبقات الجدار اللى بيغطى النسيج الكهفى، و فى الحالة دى بيبدء الدم يخرج الدم من النسيج الكفى و يتجمع تحت الجلد، و لو كان الكسر ده شديد ممكن يوصل كمان لمجرى البول و يسببله تهتك",
    },
    {
      type: "كسر جزئى",
      description:
        "وده بيحصل فيه كسر فى طبقه واحده من طبقات الجدار اللى بيغلف النسيج الكهفى، و على الاغلب بتكون الطبقة الداخليه، و هنا مش بيكون فى تجمع دموى تحت الجلد",
    },
  ];

  const fractureCauses = [
    "لو بنمارس العلاقة الجنسية بشكل عنيف، ده ممكن يتسبب فى خبطة شديده للعضو الذكرى و يحصل بسببها كسر فى القضيب",
    "او لو بنمارس العلاقة الزوجية بطريقة معينة يكون فيها وضع الزوجة على العضو الذكرى، وقتها ممكن يحصل انزلاق للعضو الذكرى وقت دخوله و خروجة من المهبل فيتخبط فى عظمة الحوض عند الزوجة و يحصل الكسر",
    "لو بنمارس العاده السرية بشكل عنيف",
    "لو حصل التواء او ثنى للقضيب بعنف و هو منتصب",
    "لو بنستخدم ادوات صلبه فى مداعبة العضو الذكرى",
    "لو حصل انتصاب للعضو الذكرى و احنا نايمن، واتحركنا بشكل غلط او نمنا فى وضع يكون فيه تقل الجسم كله على العضو الذكرى ده ممكن يسبب كسر للقضيب",
    "و اخيراّ عاده غريبه بيعملها بعض الناس وهى طقطقة العضو الذكرى زى اللى بنعمله فى الاصابع، دى ممكن تسبب كسر جزئى للعضو الذكرى، و ده بيسبب تليف فى انسجة العضو الذكرى، و لو اتكررت كتير ممكن نوصل لضعف انتصاب دائم",
  ];

  const treatment = {
    procedure:
      "العلاج الوحيد للأسف هو تدخل جراحى بس قبل ما تقلق خلينى اقولك انها عمليه بسيطة مدته مش بتزيد عن ساعه، و كل اللى بنعمله فيها اننا بنفضي التجمع الدموى اللى حصل، و نبدء بعدها اننا نخيط القطع اللى حصل فى انسجة العضو. و لازم قبل العمليه نكون عملنا فحص عشان نحدد حجم التجمع الدموى، و نعمل اشعه دوبلر على القضيب عشان نحدد مكان الكسر.",
  };

  const complications = [
    "هنفقد القدره على الانتصاب بشكل دائم، و وقتها بدل ما كنا هنعمل عمليه بسيطة عشان نعالج الكسر اللى حصل فى القضيب، هنكون محتاجين اننا نعمل عمليه اكبر و هى تركيب دعامة عشان نقدر نرجع الانتصاب للعضو الذكرى",
    "ممكن يحصل تقوس و انحناء فى العضو الذكرى",
    "او قصر فى طول القضيب",
    "و تليف فى الانسجة (مرض بيرونى)",
    "او ممكن يحصل تسريب وريدى",
    "و لو الكسر كان وصل لمجرى البول و معملناش العمليه، وقتها هيحصل احتباس للبول",
  ];

  const postOperativeCare = [
    "بعد العملية لازم نهتم بالعلاج و المضادات الحيوى عشان ميحصلش اى التهابات",
    "و كمان هنحتاج اننا نبعد عن اى اثارة جنسية و ناخد ادوية تمنع الانتصاب لمده 8 اسابيع، لان لو حصل انتصاب ده ممكن يتسبب فى شد الغرز و فكها و نضطر اننا نعيد العملية",
    "هنبعد عن ممارسة العلاقة الزوجية، او اى عادات جنسية لمدة شهرين من وقت العمليه، عشان يكون جرح العمليه و الكسر حصلهم التأم",
  ];

  const finalMessage =
    "و اخيراّ خليك عارف ان اى مشكلة صحية علاجها فى الاول بيكون سهل، لكن لو اتأخرنا عليها بيكون الوضع اصعب و ممكن ميكونش ليه علاج، و دلوقتى لو عندك اى استفسار تقدر تتواصل معانا على رقم 01018874287 و فريقنا الطبي هيجاوب على كل اسئلتك";

  return (
    <MainLayout>
      <div className={styles.emergencyPage}>
        {/* Hero Section */}
        {/* <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link href="/">الرئيسية</Link>
              <span>/</span>
              <Link href="/emergency-surgeries">جراحات الطوارئ</Link>
              <span>/</span>
              <span>كسر القضيب</span>
            </div>
            <div className={styles.heroContent}>
              <div>
                <h1 className={styles.heroTitle}>كسر القضيب</h1>
                <p className={styles.heroDescription}>
                  إصابة خطيرة تحدث في العضو الذكري أثناء الانتصاب، تحتاج تدخل جراحي فوري 
                  لتجنب المضاعفات الخطيرة مثل فقدان القدرة على الانتصاب نهائياً.
                </p>
                <div className={styles.emergencyAlert}>
                  🚨 حالة طوارئ - اتصل فوراً: 01018874287
                </div>
              </div>
              <div className={styles.heroImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.heroIcon}>💔</span>
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
                <span style={{ color: "#64748b" }}>/</span>
                <Link href="/testicular-torsion.webp">جراحات الطوارئ</Link>
                <span style={{ color: "#64748b" }}>/</span>
                <span style={{ color: "#1e293b" }}>كسر القضيب</span>
              </div>
            </div>
            <div className={styles.heroGrid}>
              <div className={styles.heroImage}>
                <Image
                  src="/penile-fracturwwe.webp"
                  alt="كسر القضيب"
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
            <h2 className={styles.sectionTitle}>{fractureDefinition.title}</h2>
            <div className={styles.definitionCard}>
              <p className={styles.definitionText}>
                {fractureDefinition.description}
              </p>
            </div>
          </div>
        </section>

        {/* Fracture Types Section */}
        <section className={styles.typesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>و كسر القضيب بيكون نوعين :</h2>
            <div className={styles.typesGrid}>
              {fractureTypes.map((type, index) => (
                <div key={index} className={styles.typeCard}>
                  <h3 className={styles.typeTitle}>{type.type}</h3>
                  <p className={styles.typeDescription}>{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              طيب هو ليه ممكن يحصل كسر للقضيب اصلا ؟
            </h2>
            <div className={styles.causesCard}>
              <h4 className={styles.causesSubtitle}>
                كسر القضيب بيكون ليه اسباب كتير زى :
              </h4>
              <ul className={styles.causesList}>
                {fractureCauses.map((cause, index) => (
                  <li key={index} className={styles.causeItem}>
                    <span className={styles.causeBullet}>⚠️</span>
                    <span className={styles.causeText}>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Treatment Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              طيب فى حالة ان حصل كسر فى القضيب هيكون ايه العلاج ؟
            </h2>
            <div className={styles.treatmentCard}>
              <div className={styles.treatmentIcon}>🏥</div>
              <p className={styles.treatmentText}>{treatment.procedure}</p>
            </div>
          </div>
        </section>

        {/* Complications Section */}
        <section className={styles.complicationsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              طيب لو معمالناش العمليه اى اللى هيحصل ؟
            </h2>
            <div className={styles.complicationsCard}>
              <p className={styles.complicationsWarning}>
                كل دى حاجات انت ممكن تعرض نفسك ليها لو اهملت فى علاج كسر القضيب
                :
              </p>
              <ul className={styles.complicationsList}>
                {complications.map((complication, index) => (
                  <li key={index} className={styles.complicationItem}>
                    <span className={styles.complicationBullet}>❌</span>
                    <span className={styles.complicationText}>
                      {complication}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Post-Operative Care Section */}
        <section className={styles.postOpSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              و دلوقت خلينى اقولك على كام حاجة لازم تتعمل بعد العمليه، عشان
              ميحصلناش اى مضاعفات :
            </h2>
            <div className={styles.postOpCard}>
              <ul className={styles.postOpList}>
                {postOperativeCare.map((care, index) => (
                  <li key={index} className={styles.postOpItem}>
                    <span className={styles.postOpBullet}>✅</span>
                    <span className={styles.postOpText}>{care}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Final Message Section */}
        <section className={styles.finalMessageSection}>
          <div className={styles.container}>
            <div className={styles.finalMessageCard}>
              <p className={styles.finalMessageText}>{finalMessage}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>استبشر خيراً - ماتفقدش الأمل</h2>
              <p>
                كسر القضيب حالة طوارئ تحتاج تدخل جراحي فوري. العلاج المبكر يضمن
                الشفاء التام والعودة للحياة الطبيعية دون مضاعفات.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  طوارئ - احجز الآن
                </Link>
                <Link href="tel:+201018874287" className={styles.secondaryBtn}>
                  اتصل فوراً: 01018874287
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
                href="/surgeries/penile-curvature"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>📐</span>
                <h3>تصحيح انحناء القضيب</h3>
                <p>علاج انحناء القضيب ومرض بيروني</p>
              </Link>
              <Link
                href="/surgeries/penile-implants"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>🔧</span>
                <h3>دعامات القضيب</h3>
                <p>علاج ضعف الانتصاب بالدعامات</p>
              </Link>
              <Link href="/emergency-surgeries" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🚨</span>
                <h3>جراحات الطوارئ</h3>
                <p>العودة لصفحة جراحات الطوارئ الرئيسية</p>
              </Link>
            </div>
          </div>
        </section> */}
      </div>
    </MainLayout>
  );
}
