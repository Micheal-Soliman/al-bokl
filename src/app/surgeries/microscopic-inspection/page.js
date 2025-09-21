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
  title: 'التفتيش الميكروسكوبي للخصية - أحدث وأدق التقنيات لاستخراج الحيوانات المنوية',
  description: 'أحدث وأدق التقنيات لاستخراج الحيوانات المنوية من الخصية في حالات انعدام الحيوانات المنوية في السائل المنوي. الدكتور أسامة البكل',
  keywords: 'التفتيش الميكروسكوبي, استخراج الحيوانات المنوية, انعدام الحيوانات المنوية, تأخر الإنجاب, الحقن المجهري',
  path: '/surgeries/microscopic-inspection',
  image: '/images/microscopic-inspection-surgery.jpg',
  type: 'article'
});


export default function MicroscopicInspectionPage() {
  const structuredData = {
    medicalProcedure: generateMedicalProcedureSchema({
      name: 'التفتيش الميكروسكوبي للخصية',
      description: 'أحدث وأدق التقنيات لاستخراج الحيوانات المنوية من الخصية في حالات انعدام الحيوانات المنوية في السائل المنوي',
      procedureType: 'جراحة المسالك البولية',
      bodyLocation: 'الخصية',
      preparation: 'تحليل السائل المنوي، فحص الهرمونات، التحليل الجيني، علاج دوالي الخصية إن وجدت',
      followup: 'استخراج الحيوانات المنوية للحقن المجهري أو التجميد'
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
        <div className={styles.content}>
          {/* Breadcrumb Navigation */}
          <Breadcrumb 
            items={[
              {name: 'الرئيسية', url: '/'}, 
              {name: 'الجراحات', url: '/surgeries'}, 
              {name: 'التفتيش الميكروسكوبي للخصية', url: '/surgeries/microscopic-inspection'}
            ]} 
          />

          {/* Hero Section */}
          <div className={styles.heroSection}>
            <h1 className={styles.mainTitle}>
              🔬 التفتيش الميكروسكوبي للخصية
            </h1>
            <p className={styles.heroDescription}>
              أحدث وأدق التقنيات لاستخراج الحيوانات المنوية من الخصية في حالات انعدام الحيوانات المنوية في السائل المنوي
            </p>
          </div>

          {/* Surgery Image Card */}
          <SurgeryImageCard 
            imageSrc="/images/microscopic-inspection-surgery.webp"
            imageAlt="التفتيش الميكروسكوبي للخصية - أحدث التقنيات"
            title="التفتيش الميكروسكوبي للخصية"
            description="أحدث وأدق التقنيات لاستخراج الحيوانات المنوية من الخصية بدقة عالية"
          />

          {/* What is Microscopic Inspection */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              ✨ ما هو التفتيش الميكروسكوبي للخصية؟
            </h2>
            <div className={styles.introText}>
              <p>
                💡 التفتيش الميكروسكوبى هو احدث و ادق التقنيات اللى نقدر نستخرج بيها حيوانات منوية من الخصية فى حالات انعدم الحيوانات المنوية فى السائل المنوى.
              </p>
            </div>
            
            <div className={styles.highlightText}>
              <p>
                🌟 و هنعرف حالا ليه التفتيش الميكروسكوبى يعتبر من ادق التقنيات:
              </p>
            </div>

            <div className={styles.procedureText}>
              {/* Surgery Images */}
              <SurgeryImageCard 
                title="صور العملية"
                images={[
                  {
                    src: "/images/microscopic-inspection-1.webp",
                    alt: "التفتيش الميكروسكوبي للخصية - المرحلة الأولى",
                    caption: "بداية عملية التفتيش الميكروسكوبي"
                  },
                  {
                    src: "/images/microscopic-inspection-2.webp", 
                    alt: "التفتيش الميكروسكوبي للخصية - الفحص",
                    caption: "فحص أنسجة الخصية تحت الميكروسكوب"
                  },
                  {
                    src: "/images/microscopic-inspection-3.webp",
                    alt: "التفتيش الميكروسكوبي للخصية - استخراج العينات",
                    caption: "استخراج الحيوانات المنوية بدقة عالية"
                  }
                ]}
              />

              {/* Educational Video */}
              <VideoSection 
                title="فيديو تعليمي عن التفتيش الميكروسكوبي"
                videoId="microscopic-inspection-procedure"
                description="شاهد شرح مفصل عن عملية التفتيش الميكروسكوبي للخصية وكيفية إجرائها بأحدث التقنيات الطبية المتطورة"
                thumbnail="/images/microscopic-video-thumb.webp"
              />
              <p>
                💡 التفتيش الميكروسكوبى هو احدث و ادق التقنيات اللى نقدر نستخرج بيها حيوانات منوية من الخصية فى حالات انعدم الحيوانات المنوية فى السائل المنوى.
              </p>
              <p>
                و ده لان كل خصية بتتكون من 250 جزء و كل جزء بيكون فيه من انبوبه الى 4 انابيب منوية و ده بيخلى المساحة و عدد الانابيب اللى بندور فيها على حيوانات منوية كبير جدا ، فالطريقة الوحيده اللى نقدر نوصل بيها لكل الانابيب دى فى عملية واحده هى التفتيش الميكروسكوبى .
              </p>
              <p>
                ده غير اننا كمان بنقدر بسبب التكبير ده اننا نبعد خالص عن الشرايين اللى بتغذى الخصية بالدم و بكده مش هيكون فى نزيف و لا ضرر فى الخصية بعد العملية .
              </p>
            </div>
          </div>

          {/* Why Microscopic Technique */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              🔬 لماذا التفتيش الميكروسكوبي هو الأدق؟
            </h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>1</span>
                <p>التفتيش الميكروسكوبى بيخلينا نكبر الجزء اللى بنشتغل فيه من 15 – 40 ضعف عن الطبيعى ، و بكده هنقدر اننا نميز كويس جدا الانسجة و الانابيب المنتفخة اللي احتمال وجود حيوانات منوية فيها بيكون اكبر و نبعد عن الانابيب المنكمشة اللي احتمال وجود حيوانات منوية فيها بيكون اقل بكتير</p>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>2</span>
                <p>ان النسيج اللى احنا هنطلعة احتمالية وجود حيوانات حيوانات منوية فيه كبير، وده اللى بيضمن نجاح العملية</p>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>3</span>
                <p>بيخلينا مناخدش انسجة كتير من الخصية ، لان زى ماقولنا بنبقى قادرين نحدد مكان النسيج اللى فيه انابيب منتفخة واحتمال كبير يكون فيها حيوانات منوية ، و كمان بيخلينا نقدر نسحب عدد انابيب قليل و مش بنحتاج اننا نقص النسيج كله</p>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.benefitNumber}>4</span>
                <p>وبكده نكون اخدنا العينه اللى محتاجنها و كمان حافظنا على انسجة الخصية ، لان الخصية مش بيكون عندها القدره انها تجدد او تنتج الانسجه دى مره تانية</p>
              </div>
            </div>
          </div>

          {/* How the Surgery Works */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              ⚕️ كيف تتم العملية؟
            </h2>
            <div className={styles.procedureCard}>
              <h3>خطوات العملية:</h3>
              <div className={styles.stepsList}>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>1</span>
                  <p>العملية هنا نقدر نعملها ببنج نصفى او كلى</p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>2</span>
                  <p>و بنعمل فتحة صغيرة جداّ فى نص كيس الصفن ، و بنخليه فى النص عشان بعد الجرح ما يلتئم ميبانش ليه اى اثر</p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>3</span>
                  <p>و بعد ما بنعمل الفتحة بنبد نخرج الخصية بره كيس الصفن</p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>4</span>
                  <p>بعد ما بنخرج الخصية بنبدء نعمل فيها فتحة طولية عشان نقدر نشوف كل انسجة الخصية</p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>5</span>
                  <p>و بنبدء بعد كده اننا نثبت الميكروسكوب على فتحة اللى عملناها فى الخصية ، ونبدء ندور على الانسجة اللى فيها انابيب منوية منتفخة</p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>6</span>
                  <p>و بعدين بنبدء اننا نخرج الانابيب المنتفخة من غير ما نقص النسيج كلة زى ما قولنا من شويه</p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>7</span>
                  <p>و بعدين نبعت الانابيب دى للمعمل يستخرج منها الحيوانات المنوية ، و بعد كده بيبدء يجهز الحيوانات المنوية اللى هنلقيها للحقن المجهرى او للتجميد</p>
                </div>
                <div className={styles.step}>
                  <span className={styles.stepNumber}>8</span>
                  <p>و بعد كده بنقفل الجرح اللى عملاناه فى الخصية و بنرجعها مكانها فى كيس الصفن و نقفل كيس الصفن بعد كده بغرز تجميلية</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cases that Need Microscopic Inspection */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              🎯 الحالات التي تحتاج للتفتيش الميكروسكوبي
            </h2>
            <div className={styles.casesList}>
              <div className={styles.caseItem}>
                <h4>🧬 حالات الكلاينفلتر</h4>
                <p>لان اصلا حجم الخصية بيكون صغير جدا فمش هينفع اننا كمان ناخد منة نسيج ،الافضل هنا اننا نعمل تفتيش ميكروسكوبى لان زى ما قولنا احنا بنقدر اننا نسحب بس الانابيب المنتفخة بس من غير ما نقص النسيج</p>
              </div>
              <div className={styles.caseItem}>
                <h4>🔄 الحالات التي فشلت فيها العينات السابقة</h4>
                <p>كل الحالات اللى عملت قبل كده عينة خصية بالابره او بالجراحة و مقدرناش اننا نلاقى فى العينة حيوانات منوية ، يفضل اننا نعملها فى المرة التانية بالتفتيش الميكروسكوبى و نفحص الخصية كويس عشان نضمن اكتر نجاح العملية</p>
              </div>
              <div className={styles.caseItem}>
                <h4>🔍 حالات عدم وجود بؤر منوية</h4>
                <p>و فى حالة ان فى اجزاء من الخصية مفيهوش بؤر منويه ، وقتها عشان نقدر ندور فى كل الخصية لازم نعمل التفتيش الميكروسكوبى ، لان ده اخر امل لمريض معندهوش الخلايا الام اللى بتصنع الحيوانات المنوية ، عشان كده لازم نتأكد و ندور كويس فى كل نسيج فى الخصية</p>
              </div>
            </div>
          </div>

          {/* Success Guarantee */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              ✅ كيف نضمن نجاح العملية؟
            </h2>
            <div className={styles.guaranteeList}>
              <div className={styles.guaranteeItem}>
                <h4>📋 تحليل السائل المنوي</h4>
                <p>لازم فى الاول نعمل تحليل للسائل المنوى و يفضل انه يتعمل اكتر مره ، و يكون فى وقت بين التحليلين على الاقل اسبوعين ، عشان نتأكد ان فى انعدام فعلا للحيوانات المنوية فى السائل المنوى</p>
              </div>
              <div className={styles.guaranteeItem}>
                <h4>🧬 التحليل الجيني</h4>
                <p>لازم نعمل تحليل جينى خصوصاّ لو عملنا قبل كده تفتيش ميكروسكوبى و فشل ، لان بعض المشاكل الجينية مش بيكون ليها علاج للأسف وفرص اننا نلاقي حيوانات منوية في التفتيش بتبقى صفر</p>
              </div>
              <div className={styles.guaranteeItem}>
                <h4>🩺 فحص الهرمونات</h4>
                <p>و لازم اننا نكون مطمنين ان الخصية وضعها كويس من ناحية الهرمونات بمعنى اننا لازم نعمل تحليل للهرمونات ، و لو لقينا اى نقص فى الهرمونات المسؤولة عن انتاج الحيوانات المنوية زى هرمون (FSH – LH) او هرمون الذكوره ، فكده لازم قبل ما نعمل التفتيش الميكروسكوبى نعوض الاول نقص الهرمونات دى بعلاج هرمونى لمده متقلش عن 3 شهور</p>
              </div>
              <div className={styles.guaranteeItem}>
                <h4>🩸 علاج دوالي الخصية</h4>
                <p>لو كان عندنا دوالى على الخصية من الدرجة التانية او التالته ، فالدوالى اصلا بتقلل من انتاج الخصية للحيوانات المنويه ، و عشان كده لو عالجناها بعمليه بسيطة ، ده هيرجع الخصية تنتج تانى حيوانات منوية</p>
              </div>
              <div className={styles.guaranteeItem}>
                <h4>💊 العلاج الكيميائي والإشعاعي</h4>
                <p>لو كنا بناخد اى علاج اشعاعى او كيميائى لازم نستنى فتره قبل ما نعمل التفتيش الميكروسكوبى متقلش عن 5 سنين من وقت اخر جلسة ، لان العلاج الكيميائى او الاشعاعى بيأثر على الخصية و على الحيوانات المنوية</p>
              </div>
            </div>
          </div>

          {/* Surgery Requirements */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              🏥 متطلبات نجاح العملية
            </h2>
            <div className={styles.requirementsList}>
              <div className={styles.requirementItem}>
                <span className={styles.requirementIcon}>👨‍⚕️</span>
                <p><strong>الخبرة الجراحية:</strong> لازم اللى يعمل العملية يكون عنده خبره كبيره جدا فى الجراحات الميكروسكوبيه ، عشان يقدر يميز الانابيب المنتفخة اللي احتمال اكبر نلاقي فيها حيوانات منوية عن غيرها</p>
              </div>
              <div className={styles.requirementItem}>
                <span className={styles.requirementIcon}>⏰</span>
                <p><strong>وقت العملية:</strong> عملية التفتيش الميكروسكوبى مينفعش يقل وقتها عن ساعة لساعتين ، وده مش عشان العمليه صعبه بالعكس دى سهله جدا ، لكن الوقت هنا عشان نكون فتشنا الخصيتين كويس جدا</p>
              </div>
              <div className={styles.requirementItem}>
                <span className={styles.requirementIcon}>🔬</span>
                <p><strong>جودة الميكروسكوب:</strong> الميكروسكوب نفسه اللى بنستخدمة فى الجراحة لازم تكون كفائته عالية جدا من ناحية الاضائة و التكبير و وضوح الصوره</p>
              </div>
              <div className={styles.requirementItem}>
                <span className={styles.requirementIcon}>🧪</span>
                <p><strong>معمل الأجنة:</strong> لازم كمان المكان اللى هنعمل فيه العملية يكون فيه معمل اجنة و يكون مجهز وفيه دكاتره عندهم خبرة عالية ،عشان يستلم العينة اول ما نطلعها و يبدأ ينتقى منها الحيوانات المنوية</p>
              </div>
              <div className={styles.requirementItem}>
                <span className={styles.requirementIcon}>🧵</span>
                <p><strong>الخيوط الجراحية:</strong> اخيراّ الخيوط اللى هنستعملها فى قفل الجرح لازم يكون بمواصفات معينه عشان متتفاعلش مع انسجة الخصية و يسبب فيها تليف وقت التأم الانسجة</p>
              </div>
            </div>
          </div>

          <FinalMessage 
            title="💪 لا تفقد الأمل - الحل موجود"
            mainText="و اخيراّ خلينى اقولك ان انا عارف ان انعدام الحيوانات المنوية و تأخر الحمل بيسبوا احباط و اكتئاب و بنحس ان موضوع ان يكون عندنا طفل دى حاجة مستحيلة ، بس صدقنى هو مش مستحيل ولا حاجة لو اتشخصنا صح و مشينا على خطة علاجية مناسبة لحالتنا هيكون عندنا اطفال مش طفل واحد"
            points={[
              "التفتيش الميكروسكوبي هو أحدث وأدق التقنيات",
              "نسبة نجاح عالية في استخراج الحيوانات المنوية",
              "حماية كاملة لأنسجة الخصية أثناء العملية"
            ]}
            benefits={[
              { "icon": "🎯", "text": "دقة عالية في الاستخراج" },
              { "icon": "🛡️", "text": "حماية أنسجة الخصية" },
              { "icon": "👶", "text": "تحقيق حلم الإنجاب" }
            ]}
            encouragementText="لا تدع اليأس يسيطر عليك... التقنيات الحديثة تحقق المعجزات!"
          />

          <NewsSection />
          
          <ContactSection />
          
          <BookingForm />

          {/* FAQ Section */}
          <FAQ 
            title="الأسئلة الشائعة حول التفتيش الميكروسكوبي"
            faqs={faqData}
          />
        </div>
      </div>
    </MainLayout>
  );
}

const faqData = [
  {
    question: "كم تستغرق عملية التفتيش الميكروسكوبي؟",
    answer: "تستغرق العملية من ساعة إلى ساعتين، وهذا الوقت ضروري للفحص الدقيق لكامل أنسجة الخصية للعثور على الحيوانات المنوية."
  },
  {
    question: "هل العملية مؤلمة؟",
    answer: "العملية تتم تحت التخدير الكامل أو النصفي، لذلك لن تشعر بأي ألم أثناء الجراحة. قد تشعر ببعض الانزعاج البسيط بعد العملية."
  },
  {
    question: "ما هي نسبة نجاح العملية؟",
    answer: "نسبة النجاح تعتمد على حالة المريض، لكن التفتيش الميكروسكوبي يحقق أعلى معدلات النجاح في استخراج الحيوانات المنوية مقارنة بالطرق التقليدية."
  },
  {
    question: "متى يمكنني العودة للعمل بعد العملية؟",
    answer: "يمكن العودة للأنشطة الطبيعية خلال أسبوع، مع تجنب الأنشطة الشاقة ورفع الأثقال لمدة أسبوعين إلى ثلاثة أسابيع."
  },
  {
    question: "هل يمكن تكرار العملية إذا فشلت؟",
    answer: "نعم، يمكن إعادة العملية، لكن يُفضل الانتظار فترة كافية وإجراء فحوصات شاملة لتحديد أسباب الفشل قبل المحاولة مرة أخرى."
  },
  {
    question: "ما هي التحضيرات المطلوبة قبل العملية؟",
    answer: "يجب إجراء تحاليل شاملة للسائل المنوي والهرمونات والتحليل الجيني، بالإضافة إلى علاج أي مشاكل مثل دوالي الخصية قبل العملية."
  }
];
