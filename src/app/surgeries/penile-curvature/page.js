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
  title: "اصلاح اعوجاج القضيب - الدكتور أسامة البكل",
  description:
    "اعوجاج القضيب معناه ان في انحناء في القضيب وبدأ ياثر على العلاقة الزوجية وكمان بيسبب ضعف انتصاب ، اعرف اي هو اعوجاج القضيب واي طرق علاجه",
  keywords:
    "اعوجاج القضيب, مرض بيروني, تقوس القضيب, انحناء القضيب, علاج اعوجاج القضيب, النسيج الكهفي, عيب خلقي, د أسامة البكل",
  path: "/surgeries/penile-curvature",
  image: "/images/penile-curvature-surgery.jpg",
  type: "article",
});

const faqData = [
  {
    question: "ايه هو اعوجاج القضيب؟",
    answer:
      "هو انحناء أو تقوس بيحصل فى القضيب، يعنى ببساطة اكتر ان القضيب وقت الانتصاب بيكون فيه اعوجاج اما ناحية اليمين او الشمال و ممكن يكون الاعوجاج لفوق او انحناء لتحت.",
  },
  {
    question: "ايه هى اسباب اعوجاج القضيب؟",
    answer:
      "في سببين: أسباب خلقية (عيب خلقي في النسيج الكهفي أو مجرى البول) وأسباب مكتسبة (مرض بيروني) بسبب السكر، نقص هرمون الذكورة، الصدمات، الأمراض المناعية، التدخين، أو زيادة الدهون.",
  },
  {
    question: "امتى المفروض اعالج اعوجاج القضيب؟",
    answer:
      "لو كان الاعوجاج أكبر من 30 درجة، أو بيسبب وجع وقت العلاقة الزوجية، أو مبقيناش قادرين على الايلاج، أو معاه ضعف فى الانتصاب.",
  },
  {
    question: "هل عملية اصلاح اعوجاج القضيب بتسبب ضعف جنسي؟",
    answer:
      "لا، العملية عمرها ما بتسبب عجز جنسى لاننا مش بنيجى خالص جنب النسيج الكهفى اللى بيكون مسؤول عن الانتصاب، بنعمل بس غرز بطريقة معينة لاصلاح الاعوجاج.",
  },
  {
    question: "هل العملية بتأثر على حجم العضو او طوله؟",
    answer:
      "لا، الغرز مش بتدوب يعنى نتيجة العملية مش مؤقتة، و كمان مش بتكون مكلكعه تحت الجلد، ولا باينه فى ملمس العضو، ولا هتأثر على حجم العضو او طوله.",
  },
  {
    question: "متى نحتاج تركيب دعامة؟",
    answer:
      "فى حالة لو الاعوجاج قصر كمان على الانتصاب وقتها العلاج الوحيد هيكون تركيب دعامة للقضيب لانها بتعالج الاعوجاج و بتعمل انتصاب كمان.",
  },
];

export default function PenileCurvaturePage() {
  const structuredData = {
    medicalProcedure: generateMedicalProcedureSchema({
      name: "إصلاح إعوجاج القضيب",
      description:
        "عملية جراحية لإصلاح انحناء أو تقوس القضيب الخلقي أو المكتسب (مرض بيروني)",
      procedureType: "جراحة المسالك البولية",
      bodyLocation: "العضو الذكري",
      preparation: "فحص شامل، تحديد درجة الإعوجاج، أشعة دوبلكس، تحليل هرمونات",
      followup: "متابعة دورية، فحص النتائج، تقييم الوظيفة الجنسية",
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
                name: "إصلاح إعوجاج القضيب",
                url: "/surgeries/penile-curvature",
              },
            ]}
          />

          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.container}>
              <div className={styles.heroGrid}>
                <div className={styles.heroImage}>
                  <Image
                    src="/correction.webp"
                    alt="إصلاح إعوجاج القضيب"
                    width={800}
                    height={600}
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Definition Section */}
          <section className={styles.definitionSection}>
            <h2 className={styles.sectionTitle}>ايه هو اعوجاج القضيب ؟</h2>
            <div className={styles.definitionContent}>
              <p className={styles.definitionText}>
                هو انحناء أو تقوس بيحصل فى القضيب، يعنى ببساطة اكتر ان القضيب
                وقت الانتصاب بيكون فيه اعوجاج اما ناحية اليمين او الشمال و ممكن
                يكون الاعوجاج لفوق او انحناء لتحت، و الاعوجاج دى بيكون ليه
                سببين:
              </p>
            </div>
          </section>

          {/* Anatomy Section */}
          <section className={styles.anatomySection}>
            <h2 className={styles.sectionTitle}>
              وعشان نقدر نفهم الأسباب كويس، تعالوا الاول نبص سوا على شكل العضو
              الذكرى من جوا
            </h2>
            <div className={styles.anatomyContent}>
              <p className={styles.anatomyText}>
                هنا هنلاقى ان العضو الذكرى بيتكون من 3 أنابيب، الانبوبتين الكبار
                دول اسمهم النسيج الكهفي و ده اللى بيكون مسؤول عن الانتصاب لما
                بنتعرض للأثارة الجنسيه، و الانبوبه الصغيره اللى تحت دى هى مجرى
                البول واللى بتكون موجوده جوا النسيج الاسفنجي.
              </p>
              <p className={styles.anatomyText}>
                و بعد ما عرفنا العضو الذكرى بيتكون من ايه، تعالوا بقى نعرف ايه
                هى اسباب اعوجاج القضيب و نبدأ بالعيب الخلقي.
              </p>
            </div>
          </section>

          {/* Causes Section */}
          <section className={styles.causesSection}>
            <h2 className={styles.sectionTitle}>أسباب خلقية</h2>
            <p className={styles.causesIntro}>
              بمعنى اننا اتولدنا بعيب خلقى اتسبب فى اعوجاج او تقوس فى القضيب.
            </p>

            <div className={styles.causeCard}>
              <h3 className={styles.causeTitle}>الأسباب الخلقية</h3>
              <p className={styles.causeDescription}>و ده بيحصل لسببين:</p>
              <div className={styles.causesList}>
                <div className={styles.causeItem}>
                  <div className={styles.causeNumber}>•</div>
                  <div className={styles.causeContent}>
                    <p>
                      لو في انبوبه من أنابيب النسيج الكهفي اطول من التانية، و ده
                      هيسبب اعوجاج للقضيب ناحية الانبوبه الاقصر، و العيب ده
                      بيكون صعب أن نلاحظه قبل مرحلة البلوغ.
                    </p>
                  </div>
                </div>
                <div className={styles.causeItem}>
                  <div className={styles.causeNumber}>•</div>
                  <div className={styles.causeContent}>
                    <p>
                      السبب التانى، ان يحصل عيب خلقي في مجرى البول، و ده معناه
                      إن فتحة البول مش بتكون فى مكانها الطبيعى، اللى هو فى رأس
                      العضو، و ده بسبب ان انبوبة مجرى البول بتكون قصيرة، فدة
                      بيعمل اعوجاج للقضيب لتحت، وده ممكن نلاحظة من واحنا صغيرين
                      لو البول كان بيخرج بطريقة غريبة أو بيخرج من الجنب، و بيكون
                      ظاهر اكتر على شكل العضو نفسه بعد البلوغ.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.causeCard}>
              <h3 className={styles.causeTitle}>أسباب مكتسبة</h3>
              <p className={styles.causeDescription}>
                و دى معناها ان العضو الذكرى فى الاول كان شكله طبيعى و معندناش اى
                مشكله فى الانتصاب او الايلاج وقت العلاقة الزوجية، لكن بعد كده
                بدأنا نلاحظ أن بدأ يكون فى انحناء في القضيب مكنش موجود قبل كده،
                و ممكن مع الوقت نلاقى الانحناء ده بيزيد، و بدأ ياثر على الايلاج
                وقت العلاقة الزوجية، و ابتدى كمان يكون فى ضعف انتصاب.
              </p>
              <p className={styles.causeDescription}>
                أما بالنسبة للأسباب المكتسبة لإعوجاج القضيب واللي بتسمي (مرض
                بيروني) دي بتظهر بعد ما كان القضيب مفهوش اي اعوجاج، وفيه مجموعة
                من الأمراض بتزود نسبة الإصابة بمرض بيروني زي:
              </p>
              <div className={styles.riskFactors}>
                <div className={styles.riskFactor}>• مرض السكر</div>
                <div className={styles.riskFactor}>
                  • لو عندنا نقص فى هرمون الذكورة
                </div>
                <div className={styles.riskFactor}>
                  • الصدمات و الخبطات المتكررة فى القضيب
                </div>
                <div className={styles.riskFactor}>
                  • لو اتصابنا بأمراض المناعية
                </div>
                <div className={styles.riskFactor}>• التدخين</div>
                <div className={styles.riskFactor}>
                  • و اخيراّ لو عندنا زيادة نسبة الدهون في الدم
                </div>
              </div>
            </div>
          </section>

          {/* When to Treat Section */}
          <section className={styles.treatmentIndicationsSection}>
            <h2 className={styles.sectionTitle}>
              طيب هو ايه علاج اعوجاج القضيب ؟
            </h2>
            <div className={styles.indicationsContent}>
              <p className={styles.indicationsText}>
                بس قبل ما نتكلم عن العلاج، لازم الاول نعرف انا امتى المفروض
                اعالج اعوجاج القضيب، لان مش كل حالات اعوجاج القضيب بتحتاج لعلاج
                يعنى لو كان الاعوجاج ده بسيط ميعديش 30 درجة (سواء ناحية اليمين
                او الشمال او انحناء لتحت أو لفوق) فدى نسبة طبيعية متحتجش اننا
                نعالجها، لكن نبدء ندور على علاج لو:
              </p>
              <div className={styles.indicationsList}>
                <div className={styles.indicationItem}>
                  <div className={styles.indicationIcon}>•</div>
                  <p>زاوية الاعوجاج كانت اكبر من 30 درجة.</p>
                </div>
                <div className={styles.indicationItem}>
                  <div className={styles.indicationIcon}>•</div>
                  <p>
                    ولو الاعوجاج ده كان شديد جدا و بقينا بسببة بنحس بوجع وقت
                    العلاقة الزوجية، أو مبقيناش قادرين اصلا ان يحصل ايلاج للعضو
                    جوه المهبل، و هنا لازم تاخد بالك من حاجة ان مش انت لوحدك
                    اللى هتحس بوجع من اعوجاج القضيب وقت الايلاج، هنا كمان الزوجة
                    بتكون حاسة بوجع وقت العلاقة الزوجية.
                  </p>
                </div>
                <div className={styles.indicationItem}>
                  <div className={styles.indicationIcon}>•</div>
                  <p>و اخيرا لو كان الاعوجاج ده معاه ضعف فى الانتصاب.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Diagnosis Section */}
          <section className={styles.diagnosisSection}>
            <h2 className={styles.sectionTitle}>
              و عشان نبدأ العلاج المناسب لحالتنا لازم فى الاول
            </h2>
            <div className={styles.diagnosisList}>
              <div className={styles.diagnosisItem}>
                <div className={styles.diagnosisIcon}>•</div>
                <p>
                  نعمل فحص نشوف بيه درجة الاعوجاج قد ايه، و نفحص العضو الذكرى
                  كويس جدا و نشوف هل الاعوجاج ده سببه، خلقى زى إن فتحة البول مش
                  فى مكانها، ولا مع الفحص لقينا كتل فى القضيب فيبقى السبب مرض
                  بيرونى.
                </p>
              </div>
              <div className={styles.diagnosisItem}>
                <div className={styles.diagnosisIcon}>•</div>
                <p>
                  و ممكن كمان نعمل تحليل هرمون عشان نتأكد من نسبة هرمون الذكورة.
                </p>
              </div>
              <div className={styles.diagnosisItem}>
                <div className={styles.diagnosisIcon}>•</div>
                <p>
                  و هنحتاج كمان نعمل أشعة دوبلكس على القضيب عشان نتأكد من وضع
                  الدورة الدموية و هل فى مشكلة فى ضخ الدم ولا لأ، و نشوف كمان
                  شكل الانسجة و لو فيها تليف نقدر نحدد حجمة، و كمان الأشعة
                  هتساعدنا نحدد زاوية الاعوجاج و درجته.
                </p>
              </div>
            </div>
          </section>

          {/* Treatment Section */}
          <section className={styles.treatmentSection}>
            <h2 className={styles.sectionTitle}>علاج إعوجاج القضيب المكتسب</h2>

            <div className={styles.treatmentCard}>
              <p className={styles.treatmentDescription}>
                طيب لو حددنا سبب اعوجاج القضيب و كان السبب مكتسب و نسبة الاعوجاج
                مش كبيرة اوى و مش مقصره على الانتصاب هنا بنبدأ بالعلاج الدوائى
                الاول لمده 6 شهور، عشان نعالج المرض اللى سبب اعوجاج للقضيب، و
                عشان نقلل فرص أن الاعوجاج يزيد، و فى بعض الحالات ممكن العلاج
                يجيب نتيجة شويه و يحسن الاعوجاج اللى حصل، لكن بعد الست شهور لو
                الوضع متحسنش او ابتدى يبقى اصعب، وقتها لازم نعمل عملية، و قبل ما
                تحس ان الموضوع صعب خلينى اطمنك ان العملية سهلة جدا و انها مش زى
                ما ناس بتقول عنها دى بتسبب ضعف جنسي، او ان القضيب طوله بيقصر بعد
                العملية خلينى اقولك ان ده عمره ما بيحصل، طبعا لو العملية اتعملت
                صح.
              </p>
            </div>

            <div className={styles.treatmentCard}>
              <h3 className={styles.treatmentTitle}>
                علاج إعوجاج القضيب الخلقي
              </h3>
              <div className={styles.treatmentContent}>
                <p>
                  نيجى بقى للسبب التانى: اعوجاج القضيب بسبب عيب خلقى بس الاعوجاج
                  مش مقصر على الانتصاب، دة بيكون حلة الوحيد العملية. و تعالى
                  نتكلم شوية عن العملية عشان تكون مطمن من ناحيتها فى العملية
                  احنا مش بنيجى خالص جنب النسيج الكهفى، اللى بيكون مسؤول عن
                  الانتصاب، عشان كده قولتلك ان العملية عمرها ما بتسبب عجز جنسى،
                  كل اللى بنعمله فى العملية اننا بنعمل غرز بطريقة معينة فى
                  القضيب عشان نصلح بيها الاعوجاج و نرجع شكل العضو طبيعى، و الغرز
                  دى مش بتدوب يعنى نتيجة العملية مش مؤقتة، و كمان مش بتكون
                  مكلكعه تحت الجلد، ولا باينه فى ملمس العضو، ولا هتأثر على حجم
                  العضو او طوله.
                </p>
              </div>
            </div>

            <div className={styles.treatmentCard}>
              <h3 className={styles.treatmentTitle}>تركيب دعامة القضيب</h3>
              <div className={styles.treatmentContent}>
                <p>
                  لكن فى حالة بقى لو الاعوجاج هنا قصر كمان على الانتصاب و قتها
                  العلاج الوحيد هيكون تركيب دعامة للقضيب و دى مش بنحتاج معاها
                  إننا نعمل غرز لانها بتعالج الاعوجاج و بتعمل انتصاب كمان.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.divider}>
            <div className={styles.container}>
              <h3>
                ولو عايز تطمن وتعرف هل حجم العضو الذكري هيتغير بعد تركيب دعامة
                القضيب ولا لا ، اسمع الفيديو ده من الدكتور اسامة البكل…
              </h3>
              <div className={styles.videoWrapper}>
                <video
                  className={styles.video}
                  controls
                  src="https://res.cloudinary.com/dvbusrvgi/video/upload/v1759056268/correction_ctvgeg.mp4"
                >
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>
              </div>
            </div>
          </section>
          <section className={styles.finalSection}>
            <div className={styles.finalContent}>
              <p className={styles.finalText}>
                ولو عاوز تعرف اكتر عن (دعامات العضو الذكري)، اتواصل معانا
                01018874287 واحنا هنحددلك ميعاد مع دكتور/ اسامه محمد البكل مدرس
                واستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية
                بطب القصر العيني.
              </p>
            </div>
          </section>
          {/* Final Message Section */}

          {/* Contact Section */}
          {/* <ContactSection /> */}

          {/* Booking Form */}
          {/* <BookingForm
            title="احجز موعدك لاستشارة إصلاح إعوجاج القضيب"
            subtitle="تواصل مع فريقنا الطبي لتحديد موعد مع د. أسامة البكل"
          /> */}
        </div>

        {/* News Section */}
        {/* <NewsSection /> */}
      </div>
    </MainLayout>
  );
}
