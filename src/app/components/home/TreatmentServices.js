"use client";

import styles from "./TreatmentServices.module.css";
import Link from "next/link";

export default function TreatmentServices() {
  const services = [
    {
      icon: "🏆",
      title: "علاج سرعة القذف",
      subtitle: "الأولي - الثانوي",
      description:
        "سرعة القذف مرض زى اى مرض وله علاج ، بس المهم اننا نتأكد اننا فعلا عندنا سرعة فى القذف , لان مش كل اللي بيشتكي من سرعة قذف بيبقى عنده فعلا سرعة فى القذف",
      link: "/services/premature-ejaculation",
    },
    {
      icon: "🔑",
      title: "علاج ضعف الإنتصاب",
      subtitle: "والتخلص منه نهائياً",
      description: `مهما كان سبب الضعف الجنسي عندك، إلا إن كل سبب وله علاجه المناسب لحالتك، وده بيحدده الدكتور بعد التشخيص الإكلينيكي والفحوصات اللازمة المطلوبة .`,
      link: "/services/erectile-dysfunction",
    },

    {
      icon: "👥",
      title: `مشاكل تأخر البلوغ`,
      subtitle: `من 9 : 14 سنة`,
      description: `تأخر البلوغ مرض لازم يتم علاجه فى فتره معينه ، لأن بعد الفتره دى علاج تأخر البلوغ وقتها بيكون مستحيل وصعب , والاستجابة للعلاج بتبقى اضعف وابطأ .`,
      link: "/services/premarital-counseling",
    },
    {
      icon: "🏥",
      title: `الإطمئنان قبل الزواج`,
      subtitle: `الإنتصاب - الإنجاب`,
      description: `أحياناً شباب كتير بتعاني من مشاكل جنسية ومشاكل في البلوغ بتأثر فيما بعد على العلاقة الزوجية بعد الزواج , فلازم نتطمن الأول ونعالج المشاكل من بدري .`,
      link: "/services/healthy-habits",
    },
    {
      icon: "🏥",
      title: `العادات الصحية وتأثرها`,
      subtitle: `علي الإنتصاب والإنجاب`,
      description: `كتير مننا بيقابل مشكل فى العلاقة الزوجية والإنجاب , ولكن بتكون مشكلته كلها في عادات صحية خاظئة بيتبعها فى حياته , وبمجرد تعديل العادات الصحية بتتحل مشكلته نهائياً دون اللجوء إلي العلاجات الدوائية والعمليات الجراحية .`,
      link: "/services/healthy-habits",
    },
  ];

  return (
    <section className={styles.treatmentServices}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerButton}>
              <span>تأثير المشاكل الصحية على الصحة الجنسية</span>
              {/* <span>الصحة الجنسية</span> */}
            </div>
            <h2 className={styles.mainTitle}>
              علاج كل ما يخص تأخر الإنجاب والمشاكل الجنسية
            </h2>
            <p className={styles.description}>
              ابتداء من البحث عن السبب الرئيسي للمشكلة , ومن ثم اقتراح كل الطرق
              الممكنة للعلاج , والمفاضله بينهم من حيث النتائج والظروف الاقتصادية وحالة المريض الصحية لضمان أفضل خطة علاج ممكنة , مع الأخذ في الإعتبار الرغبة في الحصول علي أعلي النتائج
              الممكنة والتخلص من المشكلة نهائياً .
            </p>
          </div>

          <div className={styles.successStoriesSection}>
            <Link href="/about" className={styles.successStoriesBtn}>
              <div className={styles.btnIconWrapper}>
                <span className={styles.btnIcon}>🏆</span>
              </div>
              <div className={styles.btnContent}>
                <span className={styles.btnTitle}>قصص النجاح</span>
                <span className={styles.btnSubtitle}>
                  اطلع على تجارب المرضى الناجحة
                </span>
              </div>
              <div className={styles.btnArrowWrapper}>
                <span className={styles.btnArrow}>←</span>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className={styles.serviceCardLink}
            >
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <div className={styles.readMore}>اقرأ المزيد ←</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
