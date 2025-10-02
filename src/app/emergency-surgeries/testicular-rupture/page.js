import MainLayout from "../../components/layout/MainLayout";
import { generateSEOMetadata } from "../../../lib/seo/articleSEO";
import Link from "next/link";
import styles from "../emergency-surgeries.module.css";
import Image from "next/image";

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "تهتك الخصية - الدكتور أسامة البكل",
    description:
      "اصابة الخصية بيكون ناتج عن إصابة شديدة في الخصية زي لو بنمارس رياضه زى كرة القدم مثلا و الكوره اتخبطت بقوة فى الخصية",
    keywords: [
      "تهتك الخصية",
      "إصابة الخصية",
      "انفجار الخصية",
      "جراحة طوارئ الخصية",
      "إصابات رياضية",
      "د أسامة البكل",
      "كيس الصفن",
      "نزيف الخصية",
    ],
    canonical: "/emergency-surgeries/testicular-rupture",
    image: "/images/emergency-surgeries/testicular-rupture.webp",
  });
}

export default function TesticularRupturePage() {
  const ruptureDefinition = {
    title: "تهتك الخصية",
    description:
      "الخصية من الأعضاء المهمة والحساسة جدا في الجسم، مهمة لانها اساس انتاج الحيوانات المنوية وهرمون الذكورة، و اى مشكله فى الخصية هتأثر على قدرتها على إنتاج الحيوانات المنوية وهرمون الذكورة، و حساسه لانها موجودة خارج الجسم وده عشان تفضل فى درجة حرارة أقل من درجة حرارة الجسم، لكن ده برضه بيخليها معرضة لأي اصابة ممكن تسبب انفجار او تهتك فى الخصية، لان مفيش حواليها اى عظام أو عضلات تحميها.",
  };

  const ruptureCauses = [
    "لو بنمارس رياضة زى كرة القدم مثلا و الكوره خبطت بقوة كبيرة فى الخصية، او لو بنمارس العاب عنيفة ممكن تيجى خبطة قويه فى الخصية، وده اللى هيسب فى تهتكها",
    "لو اتعرضنا لحادثة اتسببت فى سحق للخصية فى عظمة الحوض",
    "لو اتجرحنا بأله حادة و الجرح ده اخترق كيس الصفن، وقتها ممكن يحصل تهتك فى الخصية",
  ];

  const ruptureSymptoms = [
    "الم شديد جدا و مستمر لاكتر من ساعه",
    "الاحساس بالغثيان بسبب شده الالم",
    "الم فى البطن",
    "تورم كبير وسريع في كيس الصفن",
    "هنحس كمان بسخونية",
  ];

  const emergencyTreatment = {
    immediate:
      "و طبعا كل الاعراض دي هتظهر بعد خبطة قوية و مباشره للخصية، و لو حسينا بالاعراض دى وقتها لازم نتحرك فوراّ على المستشفى، و لحد ما نوصل ممكن ناخد مسكن نقلل بيه الالم، و نحاول نعمل كمدات تلج عشان نقلل التورم، و نحاول اننا نرفع كيس الصفن و نقلل حركته على قد ما نقدرعشان نقلل من ضرر الاصابه لحد ما نوصل المستشفى",
    hospital:
      "و اول ما نوصل المستشفى هنعمل فحص و اشعة دوبلر على الخصية عشان نحدد وضع الدوره الدموية فى الخصية و حجم الاصابة، و لو لقينا من الفحص ان الاصابه كبيره وفى نزيف داخلى فده معناه ان حصل تهتك فى انسجة الخصية او قطع فى الغشاء المحيط بيها وقتها لازم يكون فى تدخل جراحى نوقف بيه النزيف اللى حصل و نعالج الانسجة اللى اتضررت او نستأصلها، و نخيط القطع اللى حصل فى غلاف الخصية",
    urgency:
      "و هنا لازم نعرف حاجة مهمه ان كل ده لازم يتم بسرعه، لان لو حصل تأخير ده ممكن يسبب غرغارينا لانسجة الخصية، و نضطر اننا نستأصلها",
  };

  const postOperativeCare = [
    "ممكن نحتاج اننا نركب درنقة لمده 4 او 5 ايام عشان نخرج اى سوائل و دم فى الخصية",
    "لازم نلتزم بالعلاج عشان نقلل من فرصة ان يحصل اى التهابات",
    "هنبعد عن اى مجهود بدنى عنيف لمده متقلش عن شهر",
  ];

  const prevention = {
    title:
      "و دلوقتى خلينى اقولك ان فى طرق نقدر اننا نحمى بيها الخصية من ان يحصلها تهتك زى :",
    method:
      "اننا لو بنمارس رياضه ممكن اننا نتعرض بسببها لخبطة فى الخصية، فأحنا ممكن نلبس واقى من البلاستك، الواقى ده بيغطى الخصية و العضو الذكرى، و بكده هنكون بنحميهم و لو حصل و اتخبطنا فده مش هيضر بالخصية و لا العضو الذكرى",
  };

  const finalMessage =
    "و اخيراّ خليك عارف ان اى مشكلة صحية علاجها فى الاول بيكون سهل، لكن لو اتأخرنا عليها بيكون الوضع اصعب و ممكن ميكونش ليه علاج، و دلوقتى لو عندك اى استفسار تقدر تتواصل معانا على رقم 01018874287 و فريقنا الطبي هيجاوب على كل اسئلتك.";

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
              <span>تهتك الخصية</span>
            </div>
            <div className={styles.heroContent}>
              <div>
                <h1 className={styles.heroTitle}>تهتك الخصية</h1>
                <p className={styles.heroDescription}>
                  إصابة خطيرة تحتاج تدخل جراحي فوري لإنقاذ الخصية من الضمور. 
                  الخصية عضو حساس وعرضة للإصابة لعدم وجود حماية عظمية حولها.
                </p>
                <div className={styles.emergencyAlert}>
                  🚨 حالة طوارئ - اتصل فوراً: 01018874287
                </div>
              </div>
              <div className={styles.heroImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.heroIcon}>⚡</span>
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
                <span style={{ color: "#1e293b" }}>انتهاك الخصية</span>
              </div>
            </div>
            <div className={styles.heroGrid}>
              <div className={styles.heroImage}>
                <Image
                  src="/testicular-rupture.webp"
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
            <h2 className={styles.sectionTitle}>{ruptureDefinition.title}</h2>
            <div className={styles.definitionCard}>
              <p className={styles.definitionText}>
                {ruptureDefinition.description}
              </p>
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              تعالوا دلوقتى نعرف اى اللى ممكن يسبب تهتك للخصية :
            </h2>
            <div className={styles.causesCard}>
              <ul className={styles.causesList}>
                {ruptureCauses.map((cause, index) => (
                  <li key={index} className={styles.causeItem}>
                    <span className={styles.causeBullet}>⚽</span>
                    <span className={styles.causeText}>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className={styles.symptomsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              و بعد ما عرفنا امتى ممكن يحصل تهتك للخصية، تعالوا دلوقتى نعرف اى
              هى اعراض تهتك الخصية :
            </h2>
            <div className={styles.symptomsCard}>
              <ul className={styles.symptomsList}>
                {ruptureSymptoms.map((symptom, index) => (
                  <li key={index} className={styles.symptomItem}>
                    <span className={styles.symptomBullet}>🔴</span>
                    <span className={styles.symptomText}>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Emergency Treatment Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>العلاج الطارئ المطلوب</h2>
            <div className={styles.treatmentSteps}>
              <div className={styles.treatmentStep}>
                <h3 className={styles.stepTitle}>🚑 الإسعافات الأولية</h3>
                <p className={styles.stepText}>
                  {emergencyTreatment.immediate}
                </p>
              </div>

              <div className={styles.treatmentStep}>
                <h3 className={styles.stepTitle}>🏥 في المستشفى</h3>
                <p className={styles.stepText}>{emergencyTreatment.hospital}</p>
              </div>

              <div className={styles.treatmentStep}>
                <h3 className={styles.stepTitle}>⏰ أهمية السرعة</h3>
                <p className={styles.stepText}>{emergencyTreatment.urgency}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Post-Operative Care Section */}
        <section className={styles.postOpSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              و دلوقتى تعالوا نعرف اى اللى بيحصل بعد العمليه :
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

        {/* Prevention Section */}
        <section className={styles.preventionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{prevention.title}</h2>
            <div className={styles.preventionCard}>
              <div className={styles.preventionMethod}>
                <span className={styles.preventionIcon}>🛡️</span>
                <p className={styles.preventionText}>{prevention.method}</p>
              </div>
              <div className={styles.relatedLink}>
                <p>
                  و لو عاوز تعرف معلومات اكتر عن{" "}
                  <Link
                    href="/emergency-surgeries/penile-fracture"
                    className={styles.inlineLink}
                  >
                    كسر العضو الذكرى اضغط هنا
                  </Link>
                </p>
              </div>
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
                تهتك الخصية حالة طوارئ تحتاج تدخل فوري. العلاج السريع يمكن أن
                ينقذ الخصية ويحافظ على وظائفها الطبيعية.
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
                href="/emergency-surgeries/testicular-torsion"
                className={styles.relatedCard}
              >
                <span className={styles.relatedIcon}>🌀</span>
                <h3>التواء الخصية</h3>
                <p>حالة طوارئ أخرى تهدد الخصية</p>
              </Link>
              <Link href="/emergency-surgeries" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🚨</span>
                <h3>جراحات الطوارئ</h3>
                <p>العودة لصفحة جراحات الطوارئ الرئيسية</p>
              </Link>
              <Link href="/surgeries/hydrocele" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>💧</span>
                <h3>القيلة المائية</h3>
                <p>مشاكل أخرى تصيب كيس الصفن</p>
              </Link>
            </div>
          </div>
        </section> */}
      </div>
    </MainLayout>
  );
}
