import { Metadata } from "next";
import MainLayout from "../../components/layout/MainLayout";
import SurgeryImageCard from "../../components/ui/SurgeryImageCard";
import VideoSection from "../../components/ui/VideoSection";
import NewsSection from "../../components/home/NewsSection";
import ContactSection from "../../components/home/ContactSection";
import BookingForm from "../../components/ui/BookingForm";
import FinalMessage from "../../components/ui/FinalMessage";
import Breadcrumb from "../../components/ui/Breadcrumb";
import FAQ from "../../components/ui/FAQ";
import { generatePageMetadata } from "../../../lib/seo/metadata";
import {
  generateMedicalProcedureSchema,
  generateDoctorSchema,
  generateFAQSchema,
} from "../../../lib/seo/structured-data";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = generatePageMetadata({
  title: "دعامات العضو الذكري - الدكتور أسامة البكل",
  description:
    "دعامة العضو الذكري بتعالج مشكلة ضعف الانتصاب أو الضعف الجنسي عند الرجال ، وجرح العملية مش بيبان خالص لان الفتحة بتكون صغيره جدا من 1 ل 2 سم و ملمس و شكل العضو مش بيتغيروا وبتخليك تقدر تتحكم في انتصاب القضيب و بالمدة اللي تحددها",
  keywords:
    "دعامات العضو الذكري, دعامات القضيب, ضعف الانتصاب, الضعف الجنسي, دعامة هيدروليكية, دعامة مرنة, مرض بيروني, د أسامة البكل",
  path: "/surgeries/penile-implants",
  image: "/images/penile-implants-surgery.jpg",
  type: "article",
});

const faqData = [
  {
    question: "هل سأشعر بوجع بعد العملية؟",
    answer: "الألم بسيط والجسم يتعود على الدعامة بسرعة.",
  },
  {
    question: "هل ستؤثر الدعامة على الإحساس والمتعة؟",
    answer: "أبدًا — المتعة الجنسية تأتي من الأعصاب والجلد، وليس من الأجسام الكهفية.",
  },
  {
    question: "هل تؤثر الدعامة على الإنجاب؟",
    answer:
      "لا علاقة لها بالخصوبة، لأن السائل المنوي يخرج من مجرى البول وليس من مكان الدعامة.",
  },
  {
    question: "هل يمكن تركيب دعامة بعد الحقن الموضعي؟",
    answer: "نعم — طبيعي جدًا.",
  },
  {
    question: "هل تعالج السرعة القذف؟",
    answer:
      "ليست علاجًا مباشرًا، لكنها تحسنها في 3 حالات: 1. علاج الضعف يؤدي لتحسن القذف. 2. ممارسة العلاقة بانتظام. 3. ثبات الانتصاب بعد القذف يساعد على استمرار العلاقة.",
  },
  {
    question: "هل يمكن إجراء العملية لمرضى القلب؟",
    answer: "نعم — العملية بسيطة وتتم ببنج نصفي أمن لمرضى القلب.",
  },
];

export default function PenileImplantsPage() {
  const structuredData = {
    medicalProcedure: generateMedicalProcedureSchema({
      name: "دعامات العضو الذكري",
      description: "عملية زراعة دعامات القضيب لعلاج ضعف الانتصاب والضعف الجنسي",
      procedureType: "جراحة المسالك البولية",
      bodyLocation: "العضو الذكري",
      preparation: "فحص شامل، ضبط مستوى السكر والضغط، إيقاف أدوية السيولة",
      followup: "متابعة لمدة شهرين، العودة للعمل خلال أسبوع",
    }),
    doctor: generateDoctorSchema(),
    faq: generateFAQSchema(faqData),
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              structuredData.medicalProcedure,
              structuredData.doctor,
              structuredData.faq,
            ]),
          }}
        />

        <div className={styles.content}>
          {/* Breadcrumb Navigation */}
          <Breadcrumb
            items={[
              { name: "الرئيسية", url: "/" },
              { name: "الجراحات", url: "/surgeries" },
              {
                name: "دعامات العضو الذكري",
                url: "/surgeries/penile-implants",
              },
            ]}
          />

          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.container}>
              <div className={styles.heroGrid}>
                <div className={styles.heroImage}>
                  <Image
                    src="/penile-implants.webp"
                    alt="دعامات العضو الذكري"
                    layout="responsive"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Introduction Section */}
          <section className={styles.introSection}>
            <h1 className={styles.mainTitle}>لحل الجذري والدائم لضعف الانتصاب مع د. أسامة البكل : دعامة القضيب (Penile Implant)</h1>
            <p className={styles.introText}>ضعف الانتصاب قد يتحول من مجرد مشكلة صحية إلى عقبة يومية تؤثر على ثقة الرجل بنفسه، على علاقته الزوجية، وعلى جودة حياته كلها. وعندما تفشل الخيارات التقليدية مثل العلاج الدوائي، الحقن الموضعي، تصبح دعامة القضيب هي الحل النهائي والأكثر فعالية وأمانًا لاستعادة القدرة الجنسية بشكل طبيعي وثابت مدى الحياة.</p>
            <p className={styles.introText}>في هذا الدليل الشامل نقدم كل ما تحتاج معرفته عن عملية تركيب دعامة القضيب...</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>ما هي عملية دعامة القضيب؟ وهل تستحق القلق؟</li>
              <li>متى نلجأ إلى تركيب الدعامة؟</li>
              <li>كيف تعمل دعامة القضيب؟</li>
              <li>أنواع الدعامات المتاحة وكيفية اختيار الأنسب.</li>
              <li>خطوات إجراء العملية بالتفصيل.</li>
              <li>فترة التعافي والتعليمات بعد العملية.</li>
              <li>المزايا المتوقعة من العملية.</li>
              <li>كيفية ضمان أعلى نسب نجاح.</li>
              <li>إجابات على الأسئلة الأكثر شيوعًا لدى المرضى.</li>
              <li>لماذا تختار د. أسامة البكل؟</li>
            </ul>
          </section>

          {/* Benefits Section */}
          <section
            className={styles.benefitsSection}
            style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #e5e7eb" }}
          >
            <h2 className={styles.sectionTitle}>ما هي عملية دعامة القضيب؟ وهل تستحق القلق؟</h2>
            <p className={styles.introText}>قبل أن تبدأ بالقلق من فكرة العملية، خليني أطمنك:</p>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitBullet}>•</div>
                <div className={styles.benefitContent}>
                  <p>العملية بسيطة وتُجرى خلال  60 دقيقة فقط.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitBullet}>•</div>
                <div className={styles.benefitContent}>
                  <p>تتم تحت بنج كلي خفيف أو نصفي.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitBullet}>•</div>
                <div className={styles.benefitContent}>
                  <p>يمكنك الخروج في نفس اليوم.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitBullet}>•</div>
                <div className={styles.benefitContent}>
                  <p>الجرح صغير جدًا لا يترك أثرًا ظاهرًا.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitBullet}>•</div>
                <div className={styles.benefitContent}>
                  <p>تقدر ترجع لشغلك خلال أسبوع – 10 أيام.</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitBullet}>•</div>
                <div className={styles.benefitContent}>
                  <p>العلاقة الزوجية يمكن ممارستها بعد  6 أسابيع لضمان التئام كامل.</p>
                </div>
              </div>
            </div>
            <p className={styles.introText}>العملية آمنة، بسيطة، ونتائجها ممتازة خصوصًا عند إجرائها لدى متخصص.</p>
          </section>

          {/* When to Use Section */}
          <section
            className={styles.whenSection}
            style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #e5e7eb" }}
          >
            <h2 className={styles.sectionTitle}>متى نلجأ لعملية دعامة القضيب؟</h2>
            <div className={styles.whenContent}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>تفشل الأدوية تمامًا.</li>
                <li>يفشل الحقن الموضعي أو يكون غير مقبول للمريض.</li>
                <li>لا يحدث تحسن رغم العلاج.</li>
                <li>يكون هناك ضعف شديد نتيجة السكر أو الضغط أو مشاكل القلب.</li>
                <li>وجود تليف بالأجسام الكهفية مثل مرض بيروني.</li>
                <li>ضعف انتصاب بعد جراحة البروستاتا أو المثانة.</li>
                <li>التسريب الوريدي أو قصور الشرايين.</li>
                <li>ضعف الانتصاب الناتج عن إصابة بالأعصاب (مثل كسور الحوض).</li>
              </ul>
            </div>
          </section>

          {/* Causes Section */}
          <section
            className={styles.causesSection}
            style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #e5e7eb" }}
          >
            <h2 className={styles.sectionTitle}>كيف تعمل دعامة القضيب؟</h2>
            <p className={styles.introText}>القضيب يحتوي على جسمين كهفيين هما المسؤولان عن حدوث الانتصاب بشكل طبيعي. عند الإصابة بضعف انتصاب شديد، تصبح الأنسجة غير قادرة على الامتلاء بالدم بشكل كافٍ. وهنا يأتي دور الدعامة.</p>
            <p className={styles.introText}>دور الدعامة ببساطة:</p>
            <ul className={styles.causesList} style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>تعوّض وظيفة الأجسام الكهفية بالكامل.</li>
              <li>توفّر صلابة قوية وثابتة وقت الحاجة.</li>
              <li>تحافظ على الإحساس الطبيعي أثناء العلاقة.</li>
              <li>لا تؤثر على القذف بأي شكل.</li>
              <li>تمكّن الرجل من ممارسة علاقة زوجية طبيعية في أي وقت دون الاعتماد على أدوية أو حقن.</li>
            </ul>
          </section>

          {/* Types Section */}
          <section
            className={styles.typesSection}
            style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #e5e7eb" }}
          >
            <h2 className={styles.sectionTitle}>أنواع دعامات القضيب</h2>
            <div className={styles.typeCard}>
              <h3 className={styles.typeTitle}>1. الدعامة المرنة (Malleable)</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>ثبات عالي.</li>
                <li>أسهل وأبسط في التركيب والاستخدام.</li>
                <li>ممتازة لمرضى السكر والتليفات الشديدة.</li>
                <li>لا تتعطل لأنها بدون أجزاء ميكانيكية.</li>
                <li>أقل تكلفة.</li>
              </ul>
              <p>أفضل أنواع الدعامات المرنة:</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>Rigi10™ by Rigicon</li>
                <li>Genesis® by Coloplast</li>
                <li>Tactra™ by Boston Scientific</li>
              </ul>
            </div>
            <div className={styles.typeCard}>
              <h3 className={styles.typeTitle}>2. الدعامة الهيدروليكية (Inflatable)</h3>
              <p>• ثلاثية القطعة (الأفضل عالميًا)</p>
              <h4>كيف تعمل الدعامة الهيدروليكية؟</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>الدعامة نفسها: أنبوبان داخليان يتم زرعهما داخل الجسمين الكهفيين، يعطون الانتصاب وقت العلاقة.</li>
                <li>الخزان: يُزرع داخل البطن ويحتوي على السائل الذي ينتقل للدعامة.</li>
                <li>المضخة: توضع داخل كيس الصفن، وعند الضغط عليها ينتقل السائل من الخزان إلى الدعامة ليحدث الانتصاب، ثم يُعاد السائل للخزان بعد العلاقة.</li>
              </ul>
              <p>أفضل أنواع الدعامات الهيدروليكية عالميًا:</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>Rigicon Infla10® Pulse™ Series</li>
                <li>Coloplast Titan – Titan®</li>
                <li>Boston Scientific AMS 700™ Series</li>
              </ul>
            </div>
          </section>

          {/* Selection Criteria */}
          <section
            className={styles.selectionSection}
            style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #e5e7eb" }}
          >
            <h2 className={styles.sectionTitle}>كيف تختار بين الدعامة المرنة والهيدروليكية؟  .... ما الذي يحدد نوع الدعامة المناسب؟</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>نوع الملابس اليومية للمريض.</li>
              <li>الشكل المطلوب أثناء الارتخاء والانتصاب.</li>
              <li>الحالة الصحية العامة ووجود أمراض مزمنة.</li>
              <li>وجود مشاكل عصبية أو ضعف في التحكم باليد.</li>
              <li>وجود تليفات أو انحناءات بالقضيب.</li>
              <li>حجم القضيب قبل العملية وتوقعات المريض.</li>
              <li>الميزانية المتاحة للتدخل الجراحي.</li>
              <li>درجة النشاط الجنسي ونمط الحياة.</li>
            </ul>
          </section>

          {/* Vacuum Device Comparison */}
          <section
            className={styles.comparisonSection}
            style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #e5e7eb" }}
          >
            <h2 className={styles.sectionTitle}>نتائج العملية</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>انتصاب قوي وثابت عند الطلب.</li>
              <li>إحساس طبيعي تمامًا.</li>
              <li>قذف طبيعي.</li>
              <li>لا تؤثر على الخصوبة.</li>
              <li>نسب رضا المرضى عالميًا تتجاوز 95%.</li>
            </ul>
          </section>

          {/* FAQ Questions */}
          <section
            className={styles.faqSection}
            style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #e5e7eb" }}
          >
            <h2 className={styles.sectionTitle}>فترة التعافي بعد العملية</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>خروج في نفس اليوم.</li>
              <li>العودة للعمل بعد أسبوع.</li>
              <li>ألم خفيف لمدة 5–7 أيام.</li>
              <li>العلاقة الزوجية بعد 6 أسابيع.</li>
              <li>في الهيدروليكية: تدريب على استخدام المضخة بعد 3 أسابيع.</li>
            </ul>
          </section>

          {/* Success Factors */}
          <section
            className={styles.successSection}
            style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #e5e7eb" }}
          >
            <h2 className={styles.sectionTitle}>كيف نضمن نجاح العملية بنسبة 100%؟</h2>
            <p className={styles.successIntro}>لضمان أفضل نتيجة:</p>
            <div className={styles.successList}>
              <div className={styles.successItem}><div className={styles.successNumber}>1</div><p>إجراء العملية في مكان عالي التعقيم.</p></div>
              <div className={styles.successItem}><div className={styles.successNumber}>2</div><p>ألا تتجاوز مدة العملية 60 دقيقة.</p></div>
              <div className={styles.successItem}><div className={styles.successNumber}>3</div><p>اختيار مقاس الدعامة المناسب تمامًا للطول والقطر.</p></div>
              <div className={styles.successItem}><div className={styles.successNumber}>4</div><p>ضبط السكر جيدًا قبل وبعد العملية.</p></div>
              <div className={styles.successItem}><div className={styles.successNumber}>5</div><p>ضبط الضغط.</p></div>
              <div className={styles.successItem}><div className={styles.successNumber}>6</div><p>إيقاف أدوية السيولة قبل العملية بـ 5 أيام.</p></div>
              <div className={styles.successItem}><div className={styles.successNumber}>7</div><p>الالتزام بالمضادات الحيوية بعد العملية لمدة أسبوع.</p></div>
              <div className={styles.successItem}><div className={styles.successNumber}>8</div><p>الالتزام بتعليمات الجراح والاهتمام بالجرح.</p></div>
              <div className={styles.successItem}><div className={styles.successNumber}>9</div><p>المتابعة الدقيقة بعد الجراحة.</p></div>
            </div>
          </section>

          {/* Final Message */}
          <section className={styles.finalSection} style={{ background: "#fff", color: "#000" }}>
            <h2 className={styles.sectionTitle} style={{ color: "#000" }}>كيف تتم عملية تركيب دعامة القضيب؟</h2>
            <div className={styles.finalContent}>
              <p>الخطوات:</p>
              <ol>
                <li>تعقيم كامل.</li>
                <li>إمّا مكان الطهارة (Subcoronal) أو في منطقة أسفل القضيب أعلى الصفن (Penoscrotal)، وذلك حسب ما يناسب كل حالة. </li>
                <li>توسعة الجسمين الكهفيين.</li>
                <li>قياس دقيق للطول والقطر (خطوة شديدة الأهمية).</li>
                <li>إدخال الدعامة المناسبة.</li>
                <li>التأكد من الأداء والانتصاب.</li>
                <li>غلق تجميلي.</li>
              </ol>
              <p>مدة العملية:</p>
              <p>• 60 دقيقة</p>
              <h2 className={styles.sectionTitle} style={{ color: "#000" }}>أسئلة شائعة يطرحها المرضى</h2>
              <h3>هل سأشعر بوجع بعد العملية؟</h3>
              <p>الألم بسيط والجسم يتعود على الدعامة بسرعة.</p>
              <h3>هل ستؤثر الدعامة على الإحساس والمتعة؟</h3>
              <p>أبدًا — المتعة الجنسية تأتي من الأعصاب والجلد، وليس من الأجسام الكهفية.</p>
              <h3>هل تؤثر الدعامة على الإنجاب؟</h3>
              <p>لا علاقة لها بالخصوبة، لأن السائل المنوي يخرج من مجرى البول وليس من مكان الدعامة.</p>
              <h3>هل يمكن تركيب دعامة بعد الحقن الموضعي؟</h3>
              <p>نعم — طبيعي جدًا.</p>
              <h3>هل تعالج السرعة القذف؟</h3>
              <p>ليست علاجًا مباشرًا، لكنها تحسنها في 3 حالات:</p>
              <ol>
                <li>علاج الضعف يؤدي لتحسن القذف.</li>
                <li>ممارسة العلاقة بانتظام.</li>
                <li>ثبات الانتصاب بعد القذف يساعد على استمرار العلاقة.</li>
              </ol>
              <h3>هل يمكن إجراء العملية لمرضى القلب؟</h3>
              <p>نعم — العملية بسيطة وتتم ببنج نصفي أمن لمرضى القلب.</p>
              <h2 className={styles.sectionTitle} style={{ color: "#000" }}>لماذا تختار د. أسامة البكل؟</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>خبرة واسعة في تركيب جميع أنواع دعامات القضيب بمختلف تقنياتها.</li>
                <li>تميز خاص في التعامل مع الحالات المعقدة مثل التليف الشديد والانحناء.</li>
                <li>نسب نجاح مرتفعة ومطابقة للمعايير العالمية في جراحات الذكورة.</li>
                <li>متابعة دقيقة ورعاية طبية متواصلة بعد العملية لضمان أفضل نتيجة.</li>
                <li>استخدام أحدث أنواع الدعامات الأمريكية المعتمدة دوليًا.</li>
              </ul>
              <h2 className={styles.sectionTitle} style={{ color: "#000" }}>في النهاية — الضعف الجنسي له علاج نهائي</h2>
              <p>عملية الدعامة ليست نهاية — بل بداية جديدة، وثقة جديدة، وحياة زوجية مستقرة. لو قررت تبدأ العلاج الآن، يمكنك التواصل مع فريقنا الطبي لحجز موعد مع:</p>
              <p>د. أسامة محمد البكل</p>
              <p>مدرس واستشاري أمراض الذكورة وتأخر الإنجاب والصحة الجنسية – طب القصر العيني</p>
           
            </div>
          </section>

          {/* Contact Section */}
          {/* <ContactSection /> */}

          {/* Booking Form */}
          {/* <BookingForm
            title="احجز موعدك لاستشارة دعامات العضو الذكري"
            subtitle="تواصل مع فريقنا الطبي لتحديد موعد مع د. أسامة البكل"
          /> */}
        </div>

        {/* News Section */}
        {/* <NewsSection /> */}
      </div>
    </MainLayout>
  );
}
