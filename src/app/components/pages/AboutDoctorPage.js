"use client";

import Link from "next/link";
import styles from "./AboutDoctorPage.module.css";

export default function AboutDoctorPage() {
  const surgicalOperations = [
    {
      title: "دوالى الخصيه وتاثيرها على الانجاب",
      link: "/services/varicocele",
    },
    {
      title: "دعامات العضو الذكري",
      link: "/services/penile-implants",
    },
    {
      title: "اصلاح اعوجاج القضيب",
      link: "/services/penile-curvature",
    },
    {
      title: "القيلة المائية عند الرجال",
      link: "/services/hydrocele",
    },
    {
      title: "التفتيش الميكروسكوبي للخصية",
      link: "/services/microscopic-inspection",
    },
  ];

  const latestArticles = [
    {
      date: "30 أغسطس، 2025",
      title: "ما هي الحقن الموضعية المستخدمة في علاج ضعف الانتصاب ؟",
      link: "/articles/local-injections-erectile-dysfunction",
    },
    {
      date: "30 أغسطس، 2025",
      title: "هل تشوه الحيوانات المنوية سبب الاجهاض المتكرر ؟",
      link: "/articles/sperm-abnormality-miscarriage",
    },
    {
      date: "28 أغسطس، 2025",
      title: "متى تكون دوالي الخصية خطيرة ؟",
      link: "/articles/when-varicocele-dangerous",
    },
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      text: "الدكتور أسامة البكل طبيب ممتاز ومتفهم جداً. ساعدني في حل مشكلتي بطريقة احترافية وبنتائج ممتازة.",
      rating: 5,
    },
    {
      name: "محمد علي",
      text: "خبرة عالية ومتابعة مستمرة. الدكتور يشرح كل شيء بوضوح ويطمئن المريض.",
      rating: 5,
    },
    {
      name: "خالد أحمد",
      text: "نتائج ممتازة وعلاج فعال. أنصح بشدة بالدكتور أسامة البكل لكل من يعاني من مشاكل مشابهة.",
      rating: 5,
    },
  ];

  return (
    <div className={styles.aboutDoctorPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.badge}>
                <span>من هو :</span>
              </div>
              <h1 className={styles.doctorName}>الدكتور أسامة البكل</h1>
              <p className={styles.doctorTitle}>
                مدرس واستشاري طب وجراحة أمراض الذكوره وتأخر الإنجاب والصحة
                الجنسية بطب قصر العيني
              </p>
              <p className={styles.experience}>
                خبرة أكثر من 10 سنوات فى : علاج تأخر الإنجاب والمشاكل الجنسية
                وتأخر البلوغ
              </p>
              {/* <ul className="ullist"> */}
              <div>✅ عضو الأكاديمية الأوروبية للذكورة</div>
              <div>✅ عضو الجمعية المصرية للذكورة</div>
              <div>
                ✅ خبرة أكثر من 10 سنوات فى : علاج تأخر الإنجاب والمشاكل الجنسية
                وتأخر البلوغ
              </div>
              {/* </ul> */}
              <Link href="/contact" className={styles.bookingBtn}>
                <span>اضغط هنا لو محتاج تحجز كشف</span>
                <span className={styles.btnArrow}>←</span>
              </Link>
            </div>
            <div className={styles.heroImage}>
              <img src="/doc.webp" alt="الدكتور أسامة البكل" />
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className={styles.supportSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>معاك في كل وقت</h2>
            <p className={styles.sectionSubtitle}>عملاء سعداء</p>
          </div>

          {/* Testimonials */}
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <div className={styles.stars}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className={styles.star}>
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className={styles.testimonialText}>"{testimonial.text}"</p>
                  <div className={styles.testimonialAuthor}>
                    <strong>{testimonial.name}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className={styles.beliefsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>ما نؤمن به ...</h2>
          <div className={styles.beliefsContent}>
            <p>
              هو أن لكل مرض أكثر من طريق للعلاج , لكن أيهما أفضل وأسرع كنتيجة –
              وأقل تكلفة علي المريض , هذا هو ما نعمل لتحقيقة بعد توفيق الله لنا
              , ونؤمن أن هذا من أهم حقوقكم علينا , شفائكم ورسم البسمة في قلوبكم
              وعلي وجوهكم هي أعظم رسالة نسعي من أجلها بتوفيق الله .
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVisionSection}>
        <div className="container">
          <div className={styles.missionVisionGrid}>
            <div className={styles.missionCard}>
              <h3>مهمتنا</h3>
              <p>
                هي الوصول إلي التشخيص الصحيح لمشكلة المريض , ومن ثم وضع كل
                الحلول العلاجية سواء كان علاج دوائي أو عملية جراحية, وإختيار
                أفضلها نتيجة وأسرعها, مع المتابعة الدقيقة لحالة المريض بعد خطوة
                العلاج حتي مرحلة التعافي نهائياً .
              </p>
            </div>
            <div className={styles.visionCard}>
              <h3>رؤيتنا</h3>
              <p>
                هي أن نصبح المصدر الأول والأخير فى مصر والوطن العربي فى تثقيف كل
                مريض بحالته وبكل تفاصيلها , سواء كان لدية مشكلة فى تأخر الإنجاب
                أو مشكلة جنسية أو تأخر فى البلوغ .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className={styles.blogSection}>
        <div className="container">
          <div className={styles.blogHeader}>
            <h2>داخل المدونة في موقعنا :</h2>
            <p className={styles.blogSubtitle}>التوعية</p>
          </div>
          <div className={styles.blogContent}>
            <p>
              نقوم بنشر كل المعلومات الطبية لتوعية وتثقيف المرضي بكل تفاصيل
              حالتهم , وتوجيههم إلي الطريق الأقرب والأصح للعلاج , بعيداً كل
              البعد عن ما إذا كان المريض سيتوجه إلينا أو لغيرنا من الأساتذه
              الأطباء الكبار للبدء في العلاج .
            </p>
            <p>
              كل ما يهمنا هو تثقيف المريض بحالته والتوجيه الصحيح لأقرب وأفضل طرق
              العلاج , وعلي المريض بعد ذلك الإختيار .
            </p>
            <Link href="/articles" className={styles.blogBtn}>
              ثقف نفسك أكتر
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <h3>التشخيص السليم قبل إتخاذ القرار والتأكد</h3>
              <h4>قبل إتخاذ قرار إجراء العملية الجراحية</h4>
              <p>
                لابد وأن نتأكد بكافة الطرق والسبل أنه ليس هناك بديل للعلاج سوي
                التدخل الجراحي , وأن للتدخل الجراحي نتائجة الإيجابية المضمونة
                بالفعل .
              </p>
            </div>

            <div className={styles.processStep}>
              <h3>متابعة ما قبل العملية</h3>
              <h4>تجهيز المريض قبل العملية ومتابعته</h4>
              <p>
                هي من أهم عوامل نجاح التدخل الجراحي , فمن الممكن أن نلجأ أحياناً
                للعلاج الدوائي قبل العملية وذلك للحصول علي أعلي نسبة نجاح ممكنة
                من التدخل الجراحي .
              </p>
            </div>

            <div className={styles.processStep}>
              <h3>متابعة ما بعد العملية حتي التعافي</h3>
              <h4>علاقتنا بالمرضي لم تنتهي أبداً</h4>
              <p>
                وإهتمامنا بالمريض بعد العملية حتي التعافي هو النجاح الفعلي الذي
                نسعي دائماً إليه , حتي بعد التعافي لم تنتهي العلاقة , فنحن دائما
                بجوارك متي إحتجت إلينا ❤️
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Articles */}
      {/* <section className={styles.servicesArticlesSection}>
        <div className="container">
          <div className={styles.servicesArticlesGrid}>
            <div className={styles.servicesCard}>
              <h3>العمليات الجراحية</h3>
              <ul className={styles.servicesList}>
                {surgicalOperations.map((operation, index) => (
                  <li key={index}>
                    <Link href={operation.link}>{operation.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.articlesCard}>
              <h3>أحدث المقالات</h3>
              <div className={styles.articlesList}>
                {latestArticles.map((article, index) => (
                  <div key={index} className={styles.articleItem}>
                    <span className={styles.articleDate}>{article.date}</span>
                    <Link href={article.link} className={styles.articleTitle}>
                      {article.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className={styles.contactSection}>
        <div className={styles.contactSectionContainer}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <h3>201017912197+</h3>
              <p>لا تخجل أو تتأخر في التواصل معنا</p>
              <Link href="tel:+201017912197" className={styles.contactBtn}>
                اتصل الآن
              </Link>
            </div>

            <div className={styles.contactCard}>
              <h3>Booking@albokl.com</h3>
              <p>يمكنك أيضاً مراسلتنا عبر الإيميل</p>
              <Link
                href="mailto:Booking@albokl.com"
                className={styles.contactBtn}
              >
                راسلنا
              </Link>
            </div>

            <div className={styles.contactCard}>
              <h3>من السبت : الخميس</h3>
              <p>متواجدون من أجلكم</p>
              <Link href="/contact" className={styles.contactBtn}>
                احجز موعد
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
