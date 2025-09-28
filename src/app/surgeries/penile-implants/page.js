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
    question: "هو انا هحس بوجع بعد ما اركب الدعامة ؟",
    answer:
      "و هنا هقولك لا، لان الجسم بعد فترة قليلة هيبدء يتعود على الدعامة و يعمل عليها زى غلاف كده و يعتبرها جزء من العضو.",
  },
  {
    question: "بعد الدعامة العلاقة الزوجية هتكون من غير متعة و مش هحس بحاجة ؟",
    answer:
      "و هنا الاجابة هتكون طبعا لا, هتحس بالمتعه عادى جدا، لان احنا اتفقنا ان العمليه دى احنا بنعملها عشان بس نعالج النسيج الكهفى لانه مبقاش قادر يقوم بالانتصاب، و خلينا نتفق ان النسيج الكهفى ده ملهوش اى علاقة بالمتعة الجنسية.",
  },
  {
    question: "هى الدعامة ممكن تأثر على الانجاب ؟",
    answer:
      "الاجابة طبعا لا الدعامة ملهاش اى تأثير على الإنجاب، لأننا بنحط الدعامة زي ما قولنا فى النسيج الكهفي، و السائل المنوي بيخرج وقت القذف من مخرج البول فملهوش علاقة خالص بالدعامة.",
  },
  {
    question: "هو مينفعش اركب دعامة القضيب لو عملت قبل كده حقن موضعى ؟",
    answer:
      "لا طبعا ممكن تركبها عادى جدا، و هى اصلا الدعامة بتتركب فى الحالات اللى منفعش فيها العلاج الدوائي او الحقن الموضعى.",
  },
  {
    question: "هى الدعامة بتعالج سرعة القذف ؟",
    answer:
      "زرع الدعامة مش بيعالج سرعة القدف بطريقة مباشرة، لكن بسبب الدعامة هنقدر اننا نتحكم ان العضو يفضل في وضع انتصاب و مييحصلهوش ارتخاء حتى لو حصل قذف و بكده نقدر نكمل العلاقة لحد ما الزوجة توصل هى كمان للنشوة الجنسية.",
  },
  {
    question: "هو انا لو مريض قلب ينفع اعمل العمليه ؟",
    answer:
      "الاجابة اه طبعا، لان مرضى القلب احيانا العلاج الدوائي بيكون متعارض مع أدوية القلب، ف بيبقى الحل اننا بنجرب الحقن الموضعى و لو منفعش بنلجأ وقتها للدعامة، و هنا عاوز اطمنك من حاجه انت اكيد قلقان منها و هى البنج بس انت مش محتاج تقلق لان زى ما قولنا قبل كده ان مده العمليه بتكون تقريبا 45 دقيقة و ساعات اقل فعشان كده احنا مش بنحتاج جرعة بنج كبيرة.",
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
            <h1 className={styles.mainTitle}>دعامات العضو الذكري</h1>
            <p className={styles.introText}>
              العضو الذكرى عضو زى اى عضو فى الجسم وارد انه يتعب أو يحصل فيه
              مشكله ، و بردو زيه زى اى عضو بنقدر اننا نعالجه و احنا هنا هنركز
              على طريقة من طرق علاج مشكلة كبيرة بتصيب العضو الذكرى و هى عملية
              دعامات القضيب اللى بنعالج بيها ضعف الانتصاب أو الضعف الجنسى .
            </p>
          </section>

          {/* Benefits Section */}
          <section className={styles.benefitsSection}>
            <h2 className={styles.sectionTitle}>
              بس فى البداية و قبل ما تقلق من كلمة عملية خلينى اقولك ان عملية
              دعامات القضيب :
            </h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitBullet}>•</div>
                <div className={styles.benefitContent}>
                  <p>مش بنحتاج نقل دم لان مش بيكون فى اى نزيف .</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitBullet}>•</div>
                <div className={styles.benefitContent}>
                  <p>بنقدر نروح فى نفس يوم العملية .</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitBullet}>•</div>
                <div className={styles.benefitContent}>
                  <p>
                    و تقدر تمارس العلاقة الزوجية بعد شهر ونصف أو شهرين من بعد
                    العملية عشان نضمن ان الجرح خف خالص .
                  </p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitBullet}>•</div>
                <div className={styles.benefitContent}>
                  <p>عملية سهلة و بسيطة بتتعمل فى ساعة و احيانا اقل .</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitBullet}>•</div>
                <div className={styles.benefitContent}>
                  <p>بنقدر نعملها ببنج كلى خفيف ، او بنج نصفى .</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitBullet}>•</div>
                <div className={styles.benefitContent}>
                  <p>
                    تقدر تنزل شغلك عادى خالص بعد أسبوع أو 10 ايام بالكتير من وقت
                    العمليه .
                  </p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitBullet}>•</div>
                <div className={styles.benefitContent}>
                  <p>
                    الجرح مش بيبان خالص لان الفتحة بتكون صغيره جدا من 1 ل 2 سم و
                    ملمس و شكل العضو مش بيتغيروا .
                  </p>
                </div>
              </div>
            </div>
            <section className={styles.divider}>
              <div className={styles.container}>
                <h3>
                  ولو عايز تعرف اكثر عن عملية تركيب دعامة العضو الذكري ، اسمع
                  دكتور اسامة محمد البكل…….
                </h3>
                <div className={styles.videoWrapper}>
                  <video
                    className={styles.video}
                    controls
                    src="https://res.cloudinary.com/dvbusrvgi/video/upload/v1759054632/penile-implants._dk95lt.mp4"
                  >
                    متصفحك لا يدعم تشغيل الفيديو.
                  </video>
                </div>
              </div>
            </section>
          </section>

          {/* When to Use Section */}
          <section className={styles.whenSection}>
            <h2 className={styles.sectionTitle}>
              دلوقتى بقى بعد ما اطمنا خالص من ناحية العملية ، عشان انا عارف ان
              دى اكتر حاجة بتقلق ، تعالوا نعرف امتى بنحتاج نركب دعامة القضيب .
            </h2>
            <div className={styles.whenContent}>
              <p className={styles.whenText}>
                دعامة القضيب بنلجأ ليها كحل اخير عشان نعالج ضعف الانتصاب او
                الضعف الجنسي ، و ده فى حالة ان محصلش اى استجابة او تحسن بالعلاج
                الدوائى ، او ان الحقن الموضعى بردو محسنش الاداء الجنسى ، او ان
                فكرة الحقن الموضعى تكون مرفوضة بالنسبة للمريض ، و يكون بيلاقى
                صعوبة فى انه يحقن نفسه بيه قبل كل علاقة زوجية ، وقتها بيكون لازم
                نركب الدعامة واللى بيكون دورها انها تدي العضو الصلابة الكافية
                عشان نقدر نقوم بالعلاقة الزوجية بطريقة سليمة و في أي وقت .
              </p>
              <p className={styles.whenText}>
                و هنا لازم نعرف حاجة مهمة ، ان ضعف الانتصاب او الضعف الجنسي دول
                اعراض لامراض صحية كتيرة بالجسم ،
              </p>
            </div>
          </section>

          {/* Causes Section */}
          <section className={styles.causesSection}>
            <h2 className={styles.sectionTitle}>
              و تعالوا دلوقتى نعرف ايه هى الأمراض اللى بتسبب ضعف جنسي :
            </h2>
            <div className={styles.causesList}>
              <div className={styles.causeItem}>
                <span className={styles.causeBullet}>•</span>
                <p>
                  لو عندنا مرض بيرونى ، و هنا لازم نفهم حاجة مهمة ان الدعامة
                  بتعالج ضعف الانتصاب اللى حصل بسبب التليف ، مش بتعالج التليف
                  نفسة ، و لو عاوزين نعرف عن مرض بيرونى معلومات اكتر ممكن نضغط
                  هنا .
                </p>
              </div>
              <div className={styles.causeItem}>
                <span className={styles.causeBullet}>•</span>
                <p>لو عندنا نقص فى هرمون الذكورة ، هيكون عندنا ضعف جنسى .</p>
              </div>
              <div className={styles.causeItem}>
                <span className={styles.causeBullet}>•</span>
                <p>
                  لو عندنا اعوجاج في القضيب ، الدعامة هنا جنب انها هتقوم
                  بالانتصاب هى كمان ،هتساعد أن القضيب يرجع لشكله الطبيعى .
                </p>
              </div>
              <div className={styles.causeItem}>
                <span className={styles.causeBullet}>•</span>
                <p>
                  لو مريض سكر ،او ضغط او قلب الامراض دى ممكن تسبب ضعف انتصاب .
                </p>
              </div>
              <div className={styles.causeItem}>
                <span className={styles.causeBullet}>•</span>
                <p>
                  لو لاقدر الله اتعرضنا لكسرفى الحوض ، ده هيسبب ان الاعصاب اللى
                  بتغذى القضيب و اللى بتتحكم فى الانتصاب ممكن يحصل فيها قطع او
                  ينضغط عليها بسبب الاصابة ، و هنا هنلاقى ان العضو نفسه سليم و
                  الدورة الدموية سليمة و الشرايين و الاورده مفيش فيها اى مشكله ،
                  بس بسبب المشكله اللى حصلت فى العصب مش بيحصل انتصاب وقت العلاقة
                  الزوجية ، هنا العلاج الدوائى مش هيكون ليه نتيجه لان المشكلة فى
                  العصب نفسه زى ما قولنا ، اللى هيجيب نتيجة هو الحقن الموضعي ،
                  والحقن هيكون بجرعات قليلة جدا لان الاستجابة بتكون قوية جدا في
                  الحالات دي ، او طبعا تركيب الدعامة .
                </p>
              </div>
            </div>
            <p className={styles.transitionText}>
              طيب بعد ما عرفنا اي هى اسباب ضعف الانتصاب تعالوا بقى دلوقتى نعرف
              ايه هى انواع الدعامات .
            </p>
          </section>

          {/* Types Section */}
          <section className={styles.typesSection}>
            <h2 className={styles.sectionTitle}>
              أنواع دعامات العضو الذكري ...
            </h2>

            <div className={styles.typeCard}>
              <h3 className={styles.typeTitle}>الدعامة الهيدروليكية</h3>
              <p className={styles.typeDescription}>
                أما تانى نوع هو الدعامة الهيدروليكية و بتكون نوعين :
              </p>
              <ul className={styles.hydraulicTypes}>
                <li>
                  دعامة هيدروليك ثنائية ، بمعنى أنها بتتكون من جزئين و هما
                  الدعامة و المضخة .
                </li>
                <li>
                  دعامة هيدروليك ثلاثية ،وهنا الدعامة بتتكون من 3 أجزاء و هما
                  الدعامة و الخزان و المضخة، و دى افضل من الدعامة الثنائية .
                </li>
              </ul>
            </div>

            <div className={styles.typeCard}>
              <h3 className={styles.typeTitle}>الدعامة المرنة</h3>
              <p className={styles.typeDescription}>
                و دى عبارة عن معدن و بيغلفة طبقه من السيلكون ،و المعدن هنا هو
                اللى بيحقق الانتصاب للعضو و السيلكون ده هو اللى بيساعد ان الجسم
                يتقبل الدعامة بسرعه ، و الدعامة دى بتخلى القضيب ديماّ منتصب ، و
                بعد ما بنخلص العلاقة الزوجية بنتنى العضو لتحت فبتتنى معاه
                الدعامة .
              </p>
              <div className={styles.typesList}>
                <h4>و الدعامات المرنة دى فى منها 4 انواع :</h4>
                <ul>
                  <li>Promedone</li>
                  <li>tactra</li>
                  <li>Rigicon</li>
                  <li>Coloplast</li>
                </ul>
              </div>
            </div>

            <div className={styles.functionsSection}>
              <h3 className={styles.functionsTitle}>
                طيب ايه هى اصلا وظيفة الأجزاء دى وبتعمل ايه ؟
              </h3>

              <div className={styles.hydraulicParts}>
                <div className={styles.partItem}>
                  <h4>الدعامة نفسها: 👇</h4>
                  <p>
                    و بتبقى عباره عن بلونه و دى اللى بتتزرع جوه الجسم الكهفي و
                    بتسبب الانتصاب وقت العلاقة الزوجية .
                  </p>
                </div>
                <div className={styles.partItem}>
                  <h4>الخزان: 👇</h4>
                  <p>
                    وده بيتركب فى البطن و بيكون فيه السائل اللى بيتضخ فى الدعامة
                    ، عن طريق المضخة و هى دى بقى الجزء رقم 3 .
                  </p>
                </div>
                <div className={styles.partItem}>
                  <h4>المضخه: 👇</h4>
                  <p>
                    و دى بتركب فى كيس الصفن ، وظيفتها انها تطلع السائل لما نضغط
                    عليها ، من الخزان و تضخة جوه الدعامة فيحصل تضخم و انتصاب
                    للقضيب ، و بعد نهاية العلاقة الزوجية بندوس على زرار تانى
                    موجود فى المضخة اللى هى جوه كيس الصفن فالسائل ده يرجع تانى
                    من الدعامة للخزان ، فيحصل ارتخاء
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.bestTypesSection}>
              <h4 className={styles.bestTypesTitle}>
                تعالوا دلوقت نعرف افضل انواع الدعامات الهيدروليك الثلاثية
              </h4>
              <div className={styles.brandsList}>
                <div className={styles.brandItem}>
                  <h4>Infla 10</h4>
                  <p>ودي تبع شركة اسمها rigicon .</p>
                </div>
                <div className={styles.brandItem}>
                  <h4>Titan</h4>
                  <p>و دى تبع شركة اسمها Coloplast ، و دى فى منها اصدارين :</p>
                  <ul>
                    <li>Titan</li>
                    <li>Titan NB</li>
                  </ul>
                </div>
                <div className={styles.brandItem}>
                  <h4>Ams 700 TM series</h4>
                  <p>ودى تبع شركة اسمها Boston وفى منها 3 اصدارات :</p>
                  <ul>
                    <li>Cx – Cxp – Lgx</li>
                  </ul>
                </div>
              </div>
              <p className={styles.typeDescription}>
                و كل نوع و اصدار بيكون ليه مميزات و تفاصيل كتير نقدر نعرفها فيما
                بعد .
              </p>
            </div>
          </section>

          {/* Selection Criteria */}
          <section className={styles.selectionSection}>
            <h2 className={styles.sectionTitle}>
              طيب اكيد بتسأل نفسك دلوقت انا المفروض اختار الدعامة المرنه و لا
              الهيدروليك
            </h2>
            <div className={styles.criteriaList}>
              <div className={styles.criteriaItem}>
                <h3 className={styles.criteriaTitle}>الشخص نفسه</h3>
                <p>
                  هنا هقولك انت اللى بتحدد الانسب ليك ، يعنى مثلا لو انت شخص
                  بيلبس لبس ضيق شويه ممكن متفضلش الدعامة المرنه عشان الانتصاب ،
                  فهنا الهيدروليك هتبقى افضل .
                </p>
              </div>
              <div className={styles.criteriaItem}>
                <h3 className={styles.criteriaTitle}>الحالة الصحية</h3>
                <p>
                  فى حالات تانية زى مرضى القلب والسكر بيكون عندهم الدهون زياده
                  شويه فى منطقة البطن والعانة ، وقتها مش هيكون فى مشكلة لو
                  اخترنا الدعامة المرنة لان شكل الانتصاب مش هيبان اوى .
                </p>
              </div>
              <div className={styles.criteriaItem}>
                <h3 className={styles.criteriaTitle}>حجم العضو</h3>
                <p>
                  و لو كمان حد بيشتكى ان حجم العضو صغير ، يبقى الافضل طبعا
                  الدعامة المرنة وده لان الانتصاب المستمر ، هيبين العضو اكبر من
                  حجمة .
                </p>
              </div>
              <div className={styles.criteriaItem}>
                <h3 className={styles.criteriaTitle}>التكلفة</h3>
                <p>
                  وحاجة اخيرة بتحدد ازاى كنا هنختار الدعامة المرنة ولا
                  الهيدروليك هى التكلفة المناسبة ليك .
                </p>
              </div>
            </div>
          </section>

          {/* Vacuum Device Comparison */}
          <section className={styles.comparisonSection}>
            <h2 className={styles.sectionTitle}>
              الفرق بين دعامة القضيب و بين جهاز الشفط
            </h2>
            <p className={styles.comparisonIntro}>
              نيجى بقى دلوقت لنقطه مهمه جدا غير نوع الدعامة اللى هتختارها ، وهى
              الفرق بين دعامة القضيب و بين جهاز الشفط ، لان كتير من الناس اللى
              بيجولنا العياده مش بيكونوا عارفين الفرق بينهم ،
            </p>
            <div className={styles.comparisonContent}>
              <p className={styles.comparisonText}>
                أجهزة الشفط دى بتناسب اكتر كبار السن اللي بيكون عندهم مشاكل صحية
                كبيرة ، بتخلى في خطورة على حياتهم لو عملوا اى عملية ، و طبعا
                بيكون كمان في خطورة من استخدام المنشطات الجنسية ، والحقن الموضعي
                فبنلجأ وقتها لجهاز الشفط : و ده بيكون عبارة عن حلقة بتتحط فى
                قاعدة القضيب ، و بتعمل حاجة كده شبه الانتصاب الميكانيكي و ده
                بيكون عن طريق حبس الدم داخل القضيب ، و ده طبعا بيكون ليه اضرار
                زى انها كده بتمنع دخول وخروج الدم من القضيب وقت العلاقة الزوجية
                ، وكمان بتمنع خروج السائل المنوى وقت القذف لانه ما بيخرجش غير
                بعد ما نشيل الحلقة بعد ما نكون خلصنا العلاقة الزوجية
              </p>
            </div>
          </section>

          {/* FAQ Questions */}
          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>
              و دلوقتى عشان تطمن اكتر خليني اجاوبك كمان على شوية اسئلة انا متأكد
              انك بتفكر فيها دلوقت ، لان ديما بتسئلها من الناس اللى بيجولى
              العيادة
            </h2>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>
                  هو انا هحس بوجع بعد ما اركب الدعامة ؟
                </h4>
                <p className={styles.faqAnswer}>
                  و هنا هقولك لا ، لان الجسم بعد فترة قليلة هيبدء يتعود على
                  الدعامة و يعمل عليها زى غلاف كده و يعتبرها جزء من العضو .
                </p>
              </div>
              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>
                  بعد الدعامة العلاقة الزوجية هتكون من غير متعة و مش هحس بحاجة ؟
                </h4>
                <p className={styles.faqAnswer}>
                  و هنا الاجابة هتكون طبعا لا , هتحس بالمتعه عادى جدا ، لان احنا
                  اتفقنا ان العمليه دى احنا بنعملها عشان بس نعالج النسيج الكهفى
                  لانه مبقاش قادر يقوم بالانتصاب ، و خلينا نتفق ان النسيج الكهفى
                  ده ملهوش اى علاقة بالمتعة الجنسية .
                </p>
              </div>
              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>
                  هى الدعامة ممكن تأثر على الانجاب ؟
                </h4>
                <p className={styles.faqAnswer}>
                  الاجابة طبعا لا الدعامة ملهاش اى تأثير على الإنجاب ، لأننا
                  بنحط الدعامة زي ما قولنا فى النسيج الكهفي ، و السائل المنوي
                  بيخرج وقت القذف من مخرج البول فملهوش علاقة خالص بالدعامة .
                </p>
              </div>
              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>
                  هو مينفعش اركب دعامة القضيب لو عملت قبل كده حقن موضعى ؟
                </h4>
                <p className={styles.faqAnswer}>
                  لا طبعا ممكن تركبها عادى جدا ، و هى اصلا الدعامة بتتركب فى
                  الحالات اللى منفعش فيها العلاج الدوائي او الحقن الموضعى .
                </p>
              </div>
              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>
                  هى الدعامة بتعالج سرعة القذف ؟
                </h4>
                <p className={styles.faqAnswer}>
                  زرع الدعامة مش بيعالج سرعة القدف بطريقة مباشرة بمعنى :
                </p>
                <div className={styles.faqPoints}>
                  <p>
                    <strong>1-</strong> ان سرعة القذف احيانا بتحصل لو احنا عندنا
                    ضعف جنسي فبنكون عاوزين نخلص العلاقة الزوجية بسرعه و مش بنكون
                    واثقين فى ادائنا وده بيسبب سرعه قذف .
                  </p>
                  <p>
                    <strong>2-</strong> كمان بسبب الضعف الجنسي مش بنمارس العلاقة
                    بشكل منتظم ، وده كمان بيسبب سرعه قذف ، لكن بعد ما نعالج
                    الضعف الجنسى هنمارس العلاقة بأنتظام و ده مش هيخلى فى سرعه
                    قذف
                  </p>
                  <p>
                    <strong>3-</strong> و أخيرا بسبب الدعامة هنقدر اننا نتحكم ان
                    العضو يفضل في وضع انتصاب و مييحصلهوش ارتخاء حتى لو حصل قذف و
                    بكده نقدر نكمل العلاقة لحد ما الزوجة توصل هى كمان للنشوة
                    الجنسية .
                  </p>
                </div>
              </div>
              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>
                  هو انا لو مريض قلب ينفع اعمل العمليه ؟
                </h4>
                <p className={styles.faqAnswer}>
                  الاجابة اه طبعا ، لان مرضى القلب احيانا العلاج الدوائي بيكون
                  متعارض مع أدوية القلب ، ف بيبقى الحل اننا بنجرب الحقن الموضعى
                  و لو منفعش بنلجأ وقتها للدعامة ، و هنا عاوز اطمنك من حاجه انت
                  اكيد قلقان منها و هى البنج بس انت مش محتاج تقلق لان زى ما
                  قولنا قبل كده ان مده العمليه بتكون تقريبا 45 دقيقة و ساعات اقل
                  فعشان كده احنا مش بنحتاج جرعة بنج كبيرة .
                </p>
              </div>
            </div>
          </section>

          {/* Success Factors */}
          <section className={styles.successSection}>
            <h2 className={styles.sectionTitle}>
              ايه اللى يخليني اتأكد ان العملية هتنجح، او انها مش هتبوظ بعد فتره
              ؟
            </h2>
            <p className={styles.successIntro}>
              هقولك على كام حاجة لو التزمت بيهم عملية دعامة القضيب هتكون ناجحة
              انشاء الله بنسبة 100% :
            </p>
            <div className={styles.successList}>
              <div className={styles.successItem}>
                <div className={styles.successNumber}>1</div>
                <p>
                  لازم المكان اللى هتعمل فيه العمليه يكون متوفر فيه أعلى درجات
                  التعقيم لاننا بنزرع جسم غريب جوة جسمك وكمان فى منطقة حساسة جدا
                  فى الجسم ،فعشان ميحصلش اى عدوي تخلى الجسم يرفض الدعامة ، و
                  تتسبب اننا نعيد العمليه مره تانى
                </p>
              </div>
              <div className={styles.successItem}>
                <div className={styles.successNumber}>2</div>
                <p>
                  لازم المكان يكون متعقم كويس جدا و دى اهم خطوة في نجاح العملية
                  .
                </p>
              </div>
              <div className={styles.successItem}>
                <div className={styles.successNumber}>3</div>
                <p>
                  لازم وقت العملية ميزدش عن 45 دقيقة او ساعة ، عشان منرهقش
                  الأنسجة فميحصلهاش التهاب .
                </p>
              </div>
              <div className={styles.successItem}>
                <div className={styles.successNumber}>4</div>
                <p>
                  لازم نتأكد اننا بنركب دعامة مناسبة لطول العضو و قطره مينفعش
                  أصغر من العضو ، لان كده العضو هيحصل فيه انحناء و هيكون شكله
                  غريب وقت الانتصاب ، و رأس العضو هتكون فاضية ، وكمان الدعامة فى
                  الحالة دى مرونتها بتكون قليلة فممكن تتكسر ، و مينفعش اطول
                  لانها هتسبب وجع وقت الانتصاب ، و ممكن توصل لانها تخرم راس
                  العضو
                </p>
              </div>
              <div className={styles.successItem}>
                <div className={styles.successNumber}>5</div>
                <p>
                  لو انت مريض سكر لازم السكر يكون مظبوط و خصوصاّ لو السكر مش
                  مستقر فلازم نظبط مستوى السكر التراكمى و العشوائى عشان ميحصلش
                  التهابات ، لان السكر معروف انه بيضعف المناعة و بيقلل قدرة
                  الانسجة على انها تستوعب الاجسام الغريبة ، عشان كده لازم نحافظ
                  على السكر ، عشان نساعد ان الجرح يلتأم بسرعة و ميحصلش اى
                  التهابات .
                </p>
              </div>
              <div className={styles.successItem}>
                <div className={styles.successNumber}>6</div>
                <p>لو مريض ضغط لازم الضغط يكون مظبوط .</p>
              </div>
              <div className={styles.successItem}>
                <div className={styles.successNumber}>7</div>
                <p>
                  لو بناخد ادوية سيولة ، فى ادوية معينة للسيولة لازم نوقفها قبل
                  العملية ب 3 او 4 ايام .
                </p>
              </div>
              <div className={styles.successItem}>
                <div className={styles.successNumber}>8</div>
                <p>
                  و اخيرا لازم نلتزم بالأدوية و المضادات الحيوية لمدة اسبوع او
                  10 ايام بعد العملية .
                </p>
              </div>
            </div>
          </section>

          {/* Final Message */}
          <section className={styles.finalSection}>
            <h2 className={styles.sectionTitle}>في النهاية</h2>
            <div className={styles.finalContent}>
              <p className={styles.finalText}>
                فى النهاية لازم تعرف ان الضعف الجنسي مش حالة ميؤس منها ، الضعف
                الجنسي ليه علاج و علاج نهائى ،وبعد كده تقدر تعيش حياتك بشكل
                طبيعى .
              </p>
              <p className={styles.finalText}>
                لو قررت تبدأ العلاج دلوقتي تقدر تتواصل مع فريقنا
                الطبى01018874287 ، وهما هيحددولك معاد مع دكتور/ اسامه محمد البكل
                – مدرس واستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة
                الجنسية بطب القصر العيني ، وهو هيكون معاك لحد ما توصل للعلاقة
                الزوجية اللي ترضيك .
              </p>
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
