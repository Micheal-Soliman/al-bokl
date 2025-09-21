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
  title: 'دوالى الخصيه وتاثيرها على الانجاب - الدكتور أسامة البكل',
  description: 'دوالي الخصية هي مشكلة صحية شائعة بتصيب حوالي 15% من الرجال ، وبتكون السبب في مشكلة أكبر وهي العقم وتأخر الإنجاب عند حوالي 40% من الرجال.',
  keywords: 'دوالي الخصية, تأخر الإنجاب, الجراحة الميكروسكوبية, علاج دوالي الخصية, عملية دوالي الخصية, الخصوبة',
  path: '/surgeries/varicocele',
  image: '/images/varicocele-surgery.jpg',
  type: 'article'
});


const faqData = [
  {
    question: "ازاى بتحصل دوالى الخصية؟",
    answer: "دوالى الخصية بتحصل بسبب ضعف فى جدار الوريد اللى بيكون مسؤل عن انه يخرج بقايا الدم من الخصية، و بسبب الضعف ده الدم مبيخرجش و بيفضل متجمع فى الوريد اللى بيفضل يتمدد عشان يستوعب كل الدم اللى بيترسب فيه."
  },
  {
    question: "ايه هى اعراض دوالي الخصية؟",
    answer: "الأعراض تشمل: الاحساس بتقل في الخصية، ألم فى الخصية عند الجلوس و بذل اى مجهود، تأخر فى الانجاب، تضخم في أوردة الخصية، تورم فى كيس الصفن، وانكماش أو ضمور فى الخصية."
  },
  {
    question: "امتى دوالى الخصية تكون محتاجة لعلاج؟",
    answer: "لو بنحس بوجع مستمر، لو دوالى الخصية هى السبب فى تأخر الانجاب، أو لو فى انعدام في الحيونات المنويه و كان فى دوالى بدرجة كبيرة."
  },
  {
    question: "ليه الجراحة الميكروسكوبية هي الأفضل؟",
    answer: "لأن الميكروسكوب الجراحي بيساعد في تكبير مكان العملية وتحديد الشرايين والأوردة بشكل واضح، وبيمكن الجراح من الوصول للأوردة الدقيقة وربطها، وتجنب ربط الشريان الخصوي والأوعية الليمفاوية."
  },
  {
    question: "كم تستغرق العملية ومتى يمكن العودة للعمل؟",
    answer: "العملية مش بتاخد أكتر من ساعة، والمريض بيقدر يروح البيت في نفس اليوم، ويرجع للشغل بعد 3-5 أيام، ويمارس العلاقة الزوجية بعد أسبوع من وقت العملية."
  },
  {
    question: "ازاي دوالي الخصية بتأثر على الإنجاب؟",
    answer: "دوالي الخصية بترفع درجة حرارة الخصية وبتنتج مواد مؤكسدة بتضر بالهرمونات المسؤولة عن إنتاج الحيوانات المنوية، وبتأثر على جودة الحيوانات المنوية من حيث العدد والحركة والتشوهات."
  }
];

export default function VaricocelePage() {
  const structuredData = {
    medicalProcedure: generateMedicalProcedureSchema({
      name: 'عملية دوالي الخصية بالميكروسكوب',
      description: 'عملية دوالي الخصية بالميكروسكوب الجراحي لعلاج دوالي الخصية وتحسين الخصوبة وتخفيف الألم',
      procedureType: 'جراحة المسالك البولية',
      bodyLocation: 'الخصية',
      preparation: 'فحص شامل، تحليل السائل المنوي، فحص الهرمونات',
      followup: 'متابعة التحسن في جودة الحيوانات المنوية، تخفيف الألم'
    }),
    doctor: generateDoctorSchema(),
    faq: generateFAQSchema(faqData)
  };

  return (
    <MainLayout>
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
      <div className={styles.container}>
          {/* Breadcrumb Navigation */}
          <Breadcrumb 
            items={[
              {name: 'الرئيسية', url: '/'}, 
              {name: 'الجراحات', url: '/surgeries'}, 
              {name: 'عملية دوالي الخصية', url: '/surgeries/varicocele'}
            ]} 
          />
        
        <div className={styles.content}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>دوالى الخصيه وتاثيرها على الانجاب</h1>
          <p className={styles.heroSubtitle}>
            الخصية هى مصنع الخصوبة و الصفات الذكورية، و ده لانها المسؤولة عن تصنيع الحيوانات المنوية، و انتاج هرمون الذكورة، عشان كده اى مشكلة فيها بتسبب قلق كبير جدا، لانها بتأثر على القدره الجنسية و الانجابيه.
          </p>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            
            {/* How Varicocele Occurs */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>ازاى بتحصل دوالى الخصية</h2>
              
              <SurgeryImageCard 
                imageSrc="/microscopic-varicocelectomy.webp"
                imageAlt="دوالي الخصية وتأثيرها على الخصوبة"
                title="دوالي الخصية وتأثيرها على الإنجاب"
                description="فهم آلية حدوث دوالي الخصية وتأثيرها على الحيوانات المنوية والخصوبة"
              />

              <p className={styles.introText}>
                دوالى الخصية بتحصل بسبب ضعف فى جدار الوريد اللى بيكون مسؤل عن انه يخرج بقايا الدم من الخصية بعد ما تكون استفادت منها للدورة الدموية، و بسبب الضعف ده الدم مبيخرجش و بيفضل متجمع فى الوريد اللى بيفضل يتمدد عشان يستوعب كل الدم اللى بيترسب فيه، و هو ده اللى بيسبب دوالي الخصية و كمان ترسب الدم بيضر بالحيوانات المنويه لانه بيكون مليان بمواد مؤكسده.
              </p>
            </div>

            {/* Causes of Varicocele */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>تعالوا بقى دلوقتى نعرف اى هى اسباب الاصابه بدوالي الخصيه</h2>
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>1</span>
                  <p>عوامل وراثية، بمعنى وجود تاريخ مرضى فى الإصابة بدوالي الخصية.</p>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>2</span>
                  <p>لو حصل تورم الغدد الليمفاوية.</p>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>3</span>
                  <p>التعرض المستمر للإثارة الجنسية بدون ممارسة.</p>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>4</span>
                  <p>الاصابة بجلطات الاوردة.</p>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>5</span>
                  <p>لو عندنا خلل في الأوردة الدموية المغذية.</p>
                </div>
              </div>
            </div>

            {/* Symptoms Section */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>طيب ازاى اقدر اعرف ان انا عندى دوالي فى الخصية</h2>
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>•</span>
                  <p>الاحساس بتقل في الخصية</p>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>•</span>
                  <p>لو حسيت بألم فى الخصية عند الجلوس و بذل اى مجهود، والالم ده بيختفى بمجرد الاستلقاء و الراحة.</p>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>•</span>
                  <p>لو فى تأخر فى الانجاب لان دوالي الخصية بتأثر على الخصوبة و على الحيوانات المنوية.</p>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>•</span>
                  <p>تضخم في أوردة الخصية.</p>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>•</span>
                  <p>لو حسيت بتورم فى كيس الصفن و ده ممكن نلاحظه بمجرد النظر أو عن طريق لمس كيس الصفن.</p>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>•</span>
                  <p>و اخيرا من اضرار دوالى الخصية انكماش أو ضمور فى الخصية.</p>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>•</span>
                  <p>نقص فى نسبة هرمون الذكورة.</p>
                </div>
              </div>
            </div>

            {/* When Treatment is Needed */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>امتى دوالى الخصية تكون محتاجة لعلاج</h2>
              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>1</span>
                  <p>لو بنحس بوجع مستمر، وبيزيد مع الوقفة و بيقل مع الراحة.</p>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>2</span>
                  <p>لو دوالى الخصية هى السبب فى تأخر الانجاب، لان فى بعض الحالات دوالي الخصية مش بتأثر على الانجاب و خصوصاّ لو كانت الدوالى من الدرجة الاولى.</p>
                </div>
                <div className={styles.benefitItem}>
                  <span className={styles.benefitNumber}>3</span>
                  <p>لو فى انعدام في الحيونات المنويه، و كان فى دوالى بدرجة كبيرة هنا لازم نعالج دوالى الخصية و بعد العلاج 40 % من المرضى بيقدروا يطلعوا حيوانات منوية وقت القذف، بس لازم نتأكد من ان هرمون FSH و هرمون LH نسبتهم طبيعيه و ان الخصيتين فى حجمهم الطبيعى.</p>
                </div>
              </div>
            </div>

              {/* How Varicocele Affects Fertility */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>طب ازاي دوالي الخصية بتكون هي السبب في تاخر الانجاب</h2>
                <p className={styles.introText}>
                  في البداية لازم تكون عارف ان الخصية هي المصنع اللي بينتج الحيوانات المنوية، وبتنتج حوالي 150 إلى 300 مليون حيوان منوي، و علشان الخصية تقدر تنتج حيوان منوي سليم يقدر يخصب البويضة ويكون جنين، لازم درجة حرارتها تكون أقل من درجة حرارة الجسم بحوالي درجتين، عشان كده ربنا خلق الخصية برا الجسم جوا كيس الصفن علشان يحميها من درجة الحرارة العالية وكمان عشان الدم اللي يوصلها يكون دم بارد علشان تقدر تنتج حيوانات منوية.
                </p>
                <p className={styles.highlightText}>
                  ولكن مع وجود دوالي الخصية، وخصوصاً لو كانت الدوالي من الدرجة الثانية أو الثالثة، فالدوالي هتسبب:
                </p>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>ضعف في الأوردة اللي بتخرج الدم من الخصية، وده طبعا هيتسبب في أن الدم يتراكم في الأوردة، و ده بيرفع درجة حرارة الخصية.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>وبسبب ارتفاع الحرارة وتراكم الدم هيتم إنتاج مواد مؤكسد (ROS)، و اللى بتضر بالهرمونات المسؤولة عن إنتاج الحيوانات المنوية، ده غير تأثيرها على جودة الحيوانات المنوية نفسها من حيث العدد و الحركة و التشوهات و كمان بتزود تكسير المادة الوراثية.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>و دوالي الخصية كمان هتأثر على خلايا ليدج المسؤولة عن إنتاج هرمون التستوستيرون، وده هيتسبب فى ان مستوياته تقل في الخصية و في الجسم و ده بيأثر على إنتاج الحيوان المنوي و جودتها و كمان ممكن يسبب ضعف في حركة الحيوانات المنوية، و نقص في عددها، وزيادة في نسبة التشوهات.</p>
                  </div>
                </div>
                <p className={styles.highlightText}>
                  وكل ده هيكون سبب تاخر الانجاب، لان مفيش حيوان منوي سليم قادر انه يخصب البويضة.
                </p>
              </div>

              {/* Treatment Options */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>و دلوقتى جه الوقت عشان نعرف ازاى بنعالج دوالى الخصية</h2>
                <p className={styles.highlightText}>
                  العلاج الوحيد لدوالي الخصية هو العملية، مفيش حاجة اسمها علاج بالاعشاب ولا بالمايه السخنه. بس و انت بتاخد قرار العملية لازم تبعد عن الجراحة بالمنظار و الاشعه التداخيله و هنعرف دلوقت ليه.
                </p>
              </div>

              {/* Traditional Surgery Problems */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>الجراحة التقليدية</h3>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>لان في الجراحة التقليدية الجراح بيعتمد على بصره و أدواته الجراحية فقط من غير استخدام أدوات حديثة تساعده يشوف مكان العملية بوضوح.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>وفي الجراحة التقليدية، الجراح مش بيقدر يشوف الأوردة الصغيرة و الدقيقة الثانوية اللي بدأت تتضخم، و ده بيخلي الدوالي ترجع تانى بعد فترة من العملية.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>ممكن نعرض الشريان الخصوي اللي بيغذي الخصية بالدم للقطع، لأنه بيكون موجود وسط الأوردة وبيكون صعب اننا نميزه بعنينا بدون تكبير، وبكده هنكون منعنا الدم من انه يوصل للخصية ويغذيها، وده ممكن يسبب ضمور للخصية.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>وممكن كمان في الجراحة التقليدية اننا نربط الأوعية الليمفاوية بالغلط وقت العملية، وهي اللي بتكون مسؤولة عن تصريف السوائل الزائدة من الخصية، ولو تم ربطها بالغلط، ده ممكن يسبب قيلة مائية على الخصية.</p>
                  </div>
                </div>
              </div>

              {/* Laparoscopic Surgery Problems */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>الجراحة بالمنظار</h3>
                <p className={styles.procedureText}>
                  مش بتخلينا نقدر نشوف كل الاورده الدقيقة جدا و كده ممكن نضر الشريان الخصوي وقت العملية، ونسبة ان دوالي الخصية ترجع تانى بتكون كبيرة.
                </p>
              </div>

              {/* Interventional Radiology Problems */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>الاشعه التداخيله</h3>
                <p className={styles.procedureText}>
                  دى بتكون مضرة للخصية اكتر من ضرر الدوالى نفسها لاننا بنعرض الخصية لجرعة كبيرة جدا من الإشعاع و ده بيضر الخصية، و كمان بيكون فى احتمال أن يحصل ارتجاع للدوالي مرة تانيه، لاننا مش بنقدر نوصل لكل الأوردة.
                </p>
              </div>

              {/* Microscopic Surgery Benefits */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>الجراحة الميكروسكوبية</h3>
                <p className={styles.highlightText}>
                  افضل واحسن طريقة نعمل بيها عملية دوالي الخصية هي الجراحة الميكروسكوبية:
                </p>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>لأن الميكروسكوب الجراحي بيساعد في تكبير مكان العملية، وده بيساعد في تحديد الشرايين والأوردة بشكل واضح جداً، لان المكان اللى احنا بنعمل فيه العملية هو مكان دقيق جدا.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>بفضل التكبير، الجراح بيقدر يتجنب ربط الشريان الخصوي، ويحافظ على وظيفة الخصية.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>الجراحة الميكروسكوبية بتمكن الجراح من الوصول للأوردة الدقيقة وربطها، عشان ميحصلش ارتجاع للدوالى مره تانيه وده اللي مش بنقدر نعمله في الجراحة التقليدية.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>الميكروسكوب الجراحي بيساعد الجراح إنه يميز الأوعية الليمفاوية ويتجنب ربطها، وبالتالي بيقلل من تكوّن قيلة مائية على الخصية.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>العملية مش بتاخد أكتر من ساعة، والمريض بيقدر يروح البيت في نفس اليوم، ويرجع للشغل بعد 3-5 أيام.</p>
                  </div>
                </div>
              </div>

              {/* Post-Surgery Recovery */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>اما بالنسبة لما بعد العملية</h3>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>بنقدر نروح بعد العملية بأربع ساعات أو اقل.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>و بنقدر ننزل الشغل بعد 3-5 أيام.</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <span className={styles.benefitNumber}>•</span>
                    <p>و كمان بنقدر اننا نمارس العلاقة الزوجية بعد أسبوع من وقت العملية.</p>
                  </div>
                </div>
              </div>

              <FinalMessage 
                title="🎯 في النهاية"
                mainText="خليني اقولك ان عملية دوالى الخصية، عملية سهلة و بسيطة جدا، المهم تتأكد انك فعلا محتاج العملية، وأن العملية تتم بطريقة صح، عشان الدوالي مترجعش تانى، او اننا نسبب مشكلة أكبر في الخصية ضررها يكون اصعب من الدوالى."
                points={[
                  "عملية بسيطة وسهلة جداً",
                  "الجراحة الميكروسكوبية هي الأفضل والأكثر أماناً",
                  "نتائج ممتازة في علاج تأخر الإنجاب"
                ]}
                benefits={[
                  { icon: "🚫", text: "تخلص من الألم المستمر" },
                  { icon: "👶", text: "حقق حلم الإنجاب" },
                  { icon: "❤️", text: "استعد حياتك الطبيعية" }
                ]}
                encouragementText="فلو قررت تبدأ العلاج تقدر تتواصل معانا، وهنحددلك اقرب معاد مع د/أسامة محمد البكل!"
              />

            <VideoSection 
              title="الفرق بين جراحة المنظار والميكروسكوب في علاج دوالي الخصية"
              videoId="https://res.cloudinary.com/dmt7nqvc0/video/upload/v1758025996/%D8%A7%D9%85%D8%AA%D9%89-%D9%8A%D8%AD%D8%B5%D9%84-%D8%A7%D9%86%D8%AC%D8%A7%D8%A8-%D9%88-%D8%AA%D8%AD%D8%B3%D9%86-%D9%81%D9%89-%D8%AA%D8%AD%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%B3%D8%A7%D8%A6%D9%84-%D8%A7%D9%84%D9%85%D9%86%D9%88%D9%89-%D8%A8%D8%B9%D8%AF-%D8%B9%D9%85%D9%84%D9%8A%D8%A9-%D8%AF%D9%88%D8%A7%D9%84%D9%89-%D8%A7%D9%84%D8%AE%D8%B5%D9%8A%D8%A9-%D8%AA%D8%A3%D8%AE%D8%B1-%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D8%A7%D8%A8-%D8%AF%D9%88%D8%A7%D9%84%D9%89-%D8%A7%D9%84%D8%AE%D8%B5%D9%8A%D8%A9_5_jynov5.mp4"
              videoType="cloudinary"
              description="ولو عايزين تعرفوا اكثر عن الفرق بين جراحة المنظار والميكروسكوب في علاج دوالي الخصية، تقدروا تعرفوا كل المعلومات عنهم في الفيديو ده من دكتور اسامة محمد البكل………"
            />

            <NewsSection />
            
            <ContactSection />
            
            <BookingForm />
          </div>

          {/* FAQ Section */}
          <FAQ faqs={faqData} title="الأسئلة الشائعة حول دوالي الخصية" />
        </div>
        </div>
      </div>
    </MainLayout>
  );
}
