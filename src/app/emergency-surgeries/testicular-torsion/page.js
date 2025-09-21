import MainLayout from '../../components/layout/MainLayout';
import { generateSEOMetadata } from '../../../lib/seo/articleSEO';
import Link from 'next/link';
import styles from '../emergency-surgeries.module.css';

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "إلتواء الخصية - الدكتور أسامة البكل",
    description: "التواء الخصية هو التفاف الخصية حولين نفسها وبيمنع وصول الدم للخصية، والحالة دي لازم تتلحق بسرعة لان الخصية ممكن يحصلها ضمور، وكده مش هيكون فى فرصة للإنجاب.",
    keywords: ["التواء الخصية", "التواء الخصية الطارئ", "عملية التواء الخصية", "ألم الخصية المفاجئ", "جراحة الطوارئ", "د أسامة البكل", "ضمور الخصية", "كيس الصفن"],
    canonical: "/emergency-surgeries/testicular-torsion",
    image: "/images/emergency-surgeries/testicular-torsion.webp"
  });
}

export default function TesticularTorsionPage() {
  const torsionDefinition = {
    title: "التواء الخصية",
    description: "مش كل الم نقدر نصبر عليه و ناخدله مسكن وخلاص، فى الم لو حسينا بيه لازم نلحق نعالج سببه لان لو اتأخرنا فى علاجة هنوصل نفسنا لاستأصال الخصية، وده اللى هيحصل لو كان عندنا التواء فى الخصية و ملحقناش نعالجة فى اقل من 6 ساعات.",
    mechanism: "التواء الخصية بيحصل بسبب دوران الخصية حوالين نفسها جوا كيس الصفن"
  };

  const torsionCauses = [
    "التواء الخصية ممكن يحصل بسبب ان وضع الخصية الخصية فى كيس الصفن يكون بشكل افقي مش راسي وده بيخليها معرضه للالتفاف حولين نفسها اكثر من الوضع الطبيعي الراسي",
    "لو كان عندنا خلل فى العضلات الموجوده حوالين لحبل المنوى، ده هيخلى الحبل المنوى نفسه بيتحرك كتير، و ده هيحرك معاه الخصية و يسبب التوائها",
    "لو عملنا عمليات فى الخصية ده ممكن يخليها معرضة ان يحصلها التواء",
    "لو حصل خبطة او ضربه جامده فى الخصية ده ممكن يسبب التوائها",
    "لو حصل نمو سريع للخصية فى وقت البلوغ، ده ممكن يسبب بعد كده التواء فى الخصية"
  ];

  const torsionSymptoms = [
    "هنحس الم مفاجئ فى الخصية و الالم ده مش بيروح بالمسكن و بيفضل فتره طويله، وهنكون مش قادرين نستحملة و لا نلمس الخصية بسبب شده الالم",
    "و ممكن يكون فى كمان قيئ بسبب شدة الالم",
    "والم فى البطن",
    "و هيحصل تورم للخصية",
    "وهنحس ان الخصية مرتفعه اكتر من الطبيعى"
  ];

  const emergencyProcedure = {
    urgency: "و هنا لازم تعرف ان و لو حسينا بالاعراض دى لازم فورا نروح لمستشفى، و نعمل فحص سريع بأشعه الدوبلر عشان نتأكد من وضع الدوره الدموية فى الخصية، و لو اتأكدنا من وجود التواء بالخصية لازم نكون بنجهزعشان هنعمل عمليه نلحق بيها الخصية قبل ما يحصلها ضمور و غرغرينة",
    surgery: "العمليه نفسها بتكون بسيطة جدا مش بتاخد اكتر من 45 دقيقة، كل اللى بنعمله فيها فتحة صغيره فى كيس الصفن، عشان نخرج منها الخصية، و بعدين نفك الالتواء اللى حصل و نحاول اننا ننعش الخصية مره تانية، و هنا لو لقينا ان لونها بدء يرجع تانى للطبيعى، وقتها هتبقى الخصية سليمة و هنبدء نرجعها تانى لكيس الصفن و نثبتها فيه بخيط جراحى عشان الالتواء ميحصلش مره تانية"
  };

  const importantNotes = [
    {
      title: "لو لحقنا الخصية في الوقت المناسب",
      description: "أن الخصية لو لحقناها هترجع بعد العملية لطبيعتها و هتقدر تمارس كل وظائفها بشكل طبيعى"
    },
    {
      title: "لو ملحقناش الخصية",
      description: "لكن لو للأسف ملحقناهاش وقتها هنضطر إننا نستأصلها، بس خلينى اطمنك ان احنا لسه عندنا خصية تانية سليمة هتقدر تنتج الحيوانات المنوية وهرمون الذكورة، لكن عشان نفضل محافظين عليها لازم واحنا بنعمل العملية للخصية اللى حصلها التواء، نكون بنثبت الخصية السليمة فى كيس الصفن، لانها بتكون معرضة أن يحصلها هى كمان التواء فى اى وقت، و لو ده حصل و ملحقناش نعالجها فكده إنتاج هرمون الذكورة و الحيوانات المنوية هيتوقف بشكل نهائى، لان الخصيتين مش موجودين، و لو ده حصل كل اللى هنقدر نعمله اننا بس نعوض نقص هرمون الذكورة علشان ميحصلش تأثير على القدرة الجنسية، لكن للأسف مش هنعرف نلاقي طريقة ننتج بيها حيوانات منوية مره تانيه لو حصل استئصال للخصيتين، وكده مش هيكون فى فرصة للإنجاب بسبب انعدام الحيوانات المنوية"
    }
  ];

  const finalMessage = {
    importance: "عشان كده مهم جدا ان اللى يشخص الأعراض و يحط خطة العلاج يكون دكتور متخصص فى امراض الذكورة، وعنده خبره كبيره لان الغلطة هنا هتضيع منك حلم انك تبقى أب.",
    conclusion: "و اخيراّ خليك عارف ان اى مشكلة صحية علاجها فى الاول بيكون سهل، لكن لو اتأخرنا عليها بيكون الوضع اصعب و ممكن ميكونش ليه علاج، و دلوقتى لو عندك اى استفسار تقدر تتواصل معانا على رقم 01018874287 و فريقنا الطبي هيجاوب على كل اسئلتك."
  };

  return (
    <MainLayout>
      <div className={styles.emergencyPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link href="/">الرئيسية</Link>
              <span>/</span>
              <Link href="/emergency-surgeries">جراحات الطوارئ</Link>
              <span>/</span>
              <span>التواء الخصية</span>
            </div>
            <div className={styles.heroContent}>
              <div>
                <h1 className={styles.heroTitle}>التواء الخصية</h1>
                <p className={styles.heroDescription}>
                  حالة طوارئ طبية تحتاج تدخل جراحي فوري خلال 6 ساعات لإنقاذ الخصية من الضمور. 
                  التأخير في العلاج قد يؤدي إلى فقدان الخصية نهائياً.
                </p>
                <div className={styles.emergencyAlert}>
                  ⚠️ حالة طوارئ - اتصل فوراً: 01018874287
                </div>
              </div>
              <div className={styles.heroImage}>
                <div className={styles.imageContainer}>
                  <span className={styles.heroIcon}>🚨</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Definition Section */}
        <section className={styles.definitionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{torsionDefinition.title}</h2>
            <div className={styles.definitionCard}>
              <p className={styles.definitionText}>{torsionDefinition.description}</p>
              
              <div className={styles.mechanismExplanation}>
                <h3 className={styles.subTitle}>طيب دلوقتى بعد ما عرفنا يعنى اي التواء الخصية</h3>
                <p className={styles.mechanismText}>{torsionDefinition.mechanism}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section className={styles.causesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>تعالوا بقى نعرف ليه ممكن يحصل التواء للخصية ؟</h2>
            <div className={styles.causesCard}>
              <ul className={styles.causesList}>
                {torsionCauses.map((cause, index) => (
                  <li key={index} className={styles.causeItem}>
                    <span className={styles.causeBullet}>•</span>
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
            <h2 className={styles.sectionTitle}>طيب اى اللى المفروض تحس بيه لو عندك التواء فى الخصية ؟</h2>
            <div className={styles.symptomsCard}>
              <ul className={styles.symptomsList}>
                {torsionSymptoms.map((symptom, index) => (
                  <li key={index} className={styles.symptomItem}>
                    <span className={styles.symptomBullet}>⚠️</span>
                    <span className={styles.symptomText}>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Emergency Procedure Section */}
        <section className={styles.procedureSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>الإجراء الطارئ المطلوب</h2>
            <div className={styles.procedureCard}>
              <div className={styles.urgencyCard}>
                <h3 className={styles.urgencyTitle}>🚨 التشخيص والعلاج الفوري</h3>
                <p className={styles.urgencyText}>{emergencyProcedure.urgency}</p>
              </div>
              
              <div className={styles.surgeryCard}>
                <h3 className={styles.surgeryTitle}>🏥 العملية الجراحية</h3>
                <p className={styles.surgeryText}>{emergencyProcedure.surgery}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes Section */}
        <section className={styles.notesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>و هنا لازم نعرف حاجة مهمه :</h2>
            <div className={styles.notesList}>
              {importantNotes.map((note, index) => (
                <div key={index} className={styles.noteCard}>
                  <h4 className={styles.noteTitle}>{note.title}</h4>
                  <p className={styles.noteDescription}>{note.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Message Section */}
        <section className={styles.finalMessageSection}>
          <div className={styles.container}>
            <div className={styles.finalMessageCard}>
              <p className={styles.finalMessageText}>{finalMessage.importance}</p>
              <p className={styles.finalMessageText}>{finalMessage.conclusion}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>استبشر خيراً - ماتفقدش الأمل</h2>
              <p>
                التواء الخصية حالة طوارئ تحتاج تدخل فوري. لا تتأخر في طلب المساعدة الطبية 
                لإنقاذ الخصية والحفاظ على قدرتك على الإنجاب.
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
        </section>

        {/* Related Topics */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>مواضيع ذات صلة</h2>
            <div className={styles.relatedGrid}>
              <Link href="/fertility/azoospermia" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🔬</span>
                <h3>انعدام الحيوانات المنوية</h3>
                <p>أسباب وعلاج انعدام الحيوانات المنوية</p>
              </Link>
              <Link href="/emergency-surgeries" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🚨</span>
                <h3>جراحات الطوارئ</h3>
                <p>العودة لصفحة جراحات الطوارئ الرئيسية</p>
              </Link>
              <Link href="/surgeries/testicular-biopsy" className={styles.relatedCard}>
                <span className={styles.relatedIcon}>🏥</span>
                <h3>خزعة الخصية</h3>
                <p>إجراءات تشخيص وعلاج مشاكل الخصية</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
