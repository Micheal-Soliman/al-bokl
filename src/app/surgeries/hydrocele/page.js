import { Metadata } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import SurgeryImageCard from '../../components/ui/SurgeryImageCard';
import VideoSection from '../../components/ui/VideoSection';
import NewsSection from '../../components/home/NewsSection';
import ContactSection from '../../components/home/ContactSection';
import BookingForm from '../../components/ui/BookingForm';
import FinalMessage from '../../components/ui/FinalMessage';
import Breadcrumb from '../../components/ui/Breadcrumb';
import FAQ from '../../components/ui/FAQ';
import { generatePageMetadata } from '../../../lib/seo/metadata';
import { generateMedicalProcedureSchema, generateDoctorSchema, generateFAQSchema } from '../../../lib/seo/structured-data';
import styles from './page.module.css';

export const metadata = generatePageMetadata({
  title: 'القيلة المائية عند الرجال - الدكتور أسامة البكل',
  description: 'القيلة المائية هي تجمع للسوائل حولين الخصية ، وبتسبب ثقل كبير في الخصية هيمنعك من الحركة وكمان من ممارسة العلاقة الزوجية ، اعرف اكثر اي هي القيلة المائية واسبابها وطرق علاجها',
  keywords: 'القيلة المائية, تجمع السوائل حول الخصية, تورم الخصية, انتفاخ الخصية, عملية القيلة المائية, الغشاء البريتوني, د أسامة البكل',
  path: '/surgeries/hydrocele',
  image: '/images/hydrocele-surgery.jpg',
  type: 'article'
});

const faqData = [
  {
    question: "ايه هي القيلة المائية؟",
    answer: "هي ببساطة تجمع للسوائل حول الخصية، طيب ده بيحصل ازاى: الخصية بتبقى متحوطة بغشاء بريتوني رقيق جدا ده عشان يسهل نزول الخصية من البطن وقت التكوين فى رحم الام."
  },
  {
    question: "ايه هى اسباب القيلة المائية؟",
    answer: "لو عملنا عمليه فى الخصية زى الفتق الأربي، او التهاب فى مجرى البول والسائل المنوي بسبب بكتيريا، او خبطة جامده فى الخصية، او انسداد فى الاوعيه الليمفاويه."
  },
  {
    question: "ايه هى اعراض القيلة المائية؟",
    answer: "تورم و انتفاخ فى الخصية، عدم راحة فى الحركة أو وقت العلاقة الزوجية بسبب تقل الخصية، وممكن لو التورم كبير هيكون ظاهر فى اللبس."
  },
  {
    question: "ايه هو علاج القيلة المائية؟",
    answer: "عملية بسيطة جدا: نقدر نروح فى نفس اليوم، ممكن نعملها ببنج نصفى، مش بتاخد اكتر من ساعه، بنقدر نمارس العلاقة الزوجية بعد اسبوع من العمليه."
  },
  {
    question: "هل القيلة المائية مرض خطير؟",
    answer: "فى النهاية القيلة المائية نفسها مش مرض خطير و مش بيضر بالخصية، لكن لو اتأخرنا فى علاجة ممكن يبسبب ضرر."
  }
];

export default function HydrocelePage() {
  const structuredData = {
    medicalProcedure: generateMedicalProcedureSchema({
      name: 'عملية القيلة المائية',
      description: 'عملية جراحية بسيطة لعلاج تجمع السوائل حول الخصية وإزالة التورم والانتفاخ',
      procedureType: 'جراحة المسالك البولية',
      bodyLocation: 'الخصية',
      preparation: 'فحص شامل، أشعة دوبلكس على الخصية للتأكد من التشخيص',
      followup: 'متابعة الجرح، إزالة الدرنقة إن وجدت بعد 4-5 أيام'
    }),
    doctor: generateDoctorSchema(),
    faq: generateFAQSchema(faqData)
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
              structuredData.faq
            ])
          }}
        />
        
        <div className={styles.content}>
          {/* Breadcrumb Navigation */}
          <Breadcrumb 
            items={[
              {name: 'الرئيسية', url: '/'}, 
              {name: 'الجراحات', url: '/surgeries'}, 
              {name: 'عملية القيلة المائية', url: '/surgeries/hydrocele'}
            ]} 
          />

          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>القيلة المائية عند الرجال</h1>
              <p className={styles.heroDescription}>
                القيلة المائية هي تجمع للسوائل حولين الخصية، وبتسبب ثقل كبير في الخصية هيمنعك من الحركة وكمان من ممارسة العلاقة الزوجية.
              </p>
            </div>
          </section>

          {/* Definition Section */}
          <section className={styles.definitionSection}>
            <h2 className={styles.sectionTitle}>دلوقتى بقى تعالوا نعرف ايه هي القيله المائية</h2>
            <div className={styles.definitionContent}>
              <p className={styles.definitionText}>
                هي ببساطة تجمع للسوائل حول الخصية، طيب ده بيحصل ازاى: الخصية بتبقى متحوطة بغشاء بريتوني رقيق جدا ده عشان يسهل نزول الخصية من البطن وقت التكوين فى رحم الام، و كمان بيساعد الخصية انها تتحرك مع حركة أجسامنا جوه كيس الصفن، فالغشاء دة بيعمل افرازات، و الافرزات دى بعد كده بتتفرغ عن طريق الاوعية الليمفاوية الموجودة فى الحبل المنوى.
              </p>
              <p className={styles.definitionText}>
                طيب ايه هى اسباب و اعراض القيلة المائية:
              </p>
            </div>
          </section>

          {/* Causes Section */}
          <section className={styles.causesSection}>
            <h2 className={styles.sectionTitle}>و هنبدء دلوقتي بأسباب القيلة المائية</h2>
            <div className={styles.causesList}>
              <div className={styles.causeItem}>
                <div className={styles.causeNumber}>•</div>
                <div className={styles.causeContent}>
                  <p>لو عملنا عمليه فى الخصية زى الفتق الأربي، ممكن لو العمليه متعملتش كويس تسبب قيلة مائية.</p>
                </div>
              </div>
              <div className={styles.causeItem}>
                <div className={styles.causeNumber}>•</div>
                <div className={styles.causeContent}>
                  <p>لو حصل التهاب فى مجرى البول و السائل المنوي بسبب بكتيريا، و البكتريا دى اتنقلت للخصية او البربخ هتعمل ارتشاح و تكون ماية.</p>
                </div>
              </div>
              <div className={styles.causeItem}>
                <div className={styles.causeNumber}>•</div>
                <div className={styles.causeContent}>
                  <p>لو حصل خبطة جامده فى الخصية.</p>
                </div>
              </div>
              <div className={styles.causeItem}>
                <div className={styles.causeNumber}>•</div>
                <div className={styles.causeContent}>
                  <p>لو حصل انسداد فى الاوعيه الليمفاويه اللى بتكون مسؤولة تفريغ السوائل من الخصية، و ده بيكون بسبب اننا عملنا عملية الدوالى بالمنظار او الجراحة العادية هنا ممكن بالغلط يحصل ربط للاوعيه الليمفاوية.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Symptoms Section */}
          <section className={styles.symptomsSection}>
            <h2 className={styles.sectionTitle}>بعد ما عرفنا الاسباب تعالوا نعرف دلوقتى ايه هى اعراض القيلة المائية</h2>
            <div className={styles.symptomsList}>
              <div className={styles.symptomItem}>
                <div className={styles.symptomIcon}>•</div>
                <div className={styles.symptomContent}>
                  <p>لو لقينا تورم و انتفاخ فى الخصية.</p>
                </div>
              </div>
              <div className={styles.symptomItem}>
                <div className={styles.symptomIcon}>•</div>
                <div className={styles.symptomContent}>
                  <p>لو حسيت انك مش مرتاح فى الحركة، أو وقت العلاقة الزوجية بسبب تقل الخصية خصوصاّ لو كان التورم كبير.</p>
                </div>
              </div>
              <div className={styles.symptomItem}>
                <div className={styles.symptomIcon}>•</div>
                <div className={styles.symptomContent}>
                  <p>لو حسينا بتقل فى الخصية و زياده فى حجمها.</p>
                </div>
              </div>
              <div className={styles.symptomItem}>
                <div className={styles.symptomIcon}>•</div>
                <div className={styles.symptomContent}>
                  <p>ممكن بردو لو التورم كبير هيكون ظاهر فى اللبس.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Treatment Section */}
          <section className={styles.treatmentSection}>
            <h2 className={styles.sectionTitle}>طب ايه هو علاج القيلة المائية</h2>
            
            <div className={styles.treatmentContent}>
              <p className={styles.treatmentIntro}>
                عشان نحدد العلاج المناسب لازم الاول نعمل دوبلكس على الخصية عشان نتأكد ان التورم هنا سببه قيله مائيه مش اى حاجة تانى, و لما نتأكد انها قيلة مائيه هنا العلاج هيكون عملية بسيطة جدا:
              </p>
              
              <div className={styles.surgeryBenefits}>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>•</div>
                  <p>كمان نقدر نروح فى نفس اليوم.</p>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>•</div>
                  <p>و ممكن نعملها ببنج نصفى.</p>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>•</div>
                  <p>مش بتاخد اكتر من ساعه.</p>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>•</div>
                  <p>بنقدر نمارس العلاقة الزوجية بعد اسبوع من العمليه، عشان يكون الجرح التأم.</p>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>•</div>
                  <p>و نقدر نمارس شغلنا عادى بعد يومين او تلات ايام، و ده فى حالة اننا محتجناش نركب درنقة لان فى بعض الحالات لما بتكون الخصية منتفخة اوى و مليانة سوائل بنحتاج نركب درنقة لمدة 4 او 5 ايام و بعدين نشيلها.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final Message Section */}
          <section className={styles.complicationsSection}>
            <h2 className={styles.sectionTitle}>في النهاية</h2>
            <div className={styles.complicationsContent}>
              <p className={styles.complicationsText}>
                فى النهاية القيلة المائية نفسها مش مرض خطير و مش بيضر بالخصية، لكن لو اتأخرنا فى علاجة ممكن يبسبب ضرر زى اننا لو اتعرضنا لخبطة فى الخصية، وقتها ممكن يحصل نزيف دموى بسبب الفراغ اللى بتسببة القيله المائية فى كيس الصفن بدل ما الخصية كانت فيها ماية و سوائل مش مسببه ضرر للخصية، اتحول السائل ده لدم، لما هيحصله تجلط هيبدء يضغط على الخصية و ده ممكن يأثر عليها و يسببلها ضرر.
              </p>
              <p className={styles.complicationsText}>
                و دلوقتى لو محتاج تطمن على نفسك تقدر تتواصل مع فريقنا الطبى 01018874287، عشان تحدد معاد مع دكتور / اسامه محمد البكل مدرس واستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب القصر العيني، و نعمل الفحص و تطمن على نفسك.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <ContactSection />

          {/* Booking Form */}
          <BookingForm 
            title="احجز موعدك لاستشارة القيلة المائية"
            subtitle="تواصل مع فريقنا الطبي لتحديد موعد مع د. أسامة البكل"
          />
        </div>

        {/* News Section */}
        <NewsSection />
      </div>
    </MainLayout>
  );
}
