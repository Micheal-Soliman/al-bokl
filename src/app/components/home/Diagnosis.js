import Link from "next/link";
import styles from "./Diagnosis.module.css";

export default function Diagnosis() {
  return (
    <section className={styles.diagnosisSection}>
      <div className="container">
        <div className={styles.diagnosisContent}>
          <div className={styles.textContent}>
            <div className={styles.header}>
              <span className={styles.subtitle}>نؤمن بأن</span>
              <h2 className={styles.title}>
                التشخيص الصحيح لسبب المشكلة هو العلاج نفسه
              </h2>
            </div>

            <div className={styles.description}>
              <p>
           العلاج دايمًا نتائجه بتكون ممتازة لما نبدأ بخطوات التشخيص الصح من البداية…
علشان نختار أقرب وأسرع وأنسب طريقة علاج لكل حالة، لازم الأول نفهم سبب المشكلة بدقة.

                {/* <br />
                <br />
                وأكتر حاجة بتألمنا هو إننا أحياناً بنلاقي إن المريض مشكلته بسيطة
                جداً وعلاجه كمان كان أبسط وماكنش محتاج تدخل جراحي , وبمجرد ما
                يبدأ ياخد العلاج نلاقي حالته إتحسنت جداً والنتائج إيجابية .
                <br />
                <br />
                لازم عشان نختار أقصر وأقرب وأوفر طرق العلاج … لازم نشخص صح الأول
                . */}
              </p>
            </div>
            {/* 
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🔬</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>فحص شامل</h3>
                  <p className={styles.featureDescription}>
                    نقوم بإجراء فحوصات شاملة ودقيقة لتحديد السبب الجذري للمشكلة
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.featureIcon}>👨‍⚕️</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>خبرة طبية</h3>
                  <p className={styles.featureDescription}>
                    فريق طبي متخصص بخبرة واسعة في مجال أمراض الذكورة والصحة
                    الجنسية
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.philosophy}>
              <p>
                ودايماً بيكون قرار إجراء التدخل الجراحي هو آخر الحلول الممكنة
                للتخلص نهائياً من المشكلة.
              </p>
            </div> */}

            <div className={styles.ctaSection}>
              <p className={styles.ctaText}>
                عشان كدا دايماً بنطلب من المريض :
              </p>
              <ul className={styles.requestList}>
                <li>معلومات</li>
                <li>أشعات</li>
                <li>تحاليل</li>
              </ul>
              <p className={styles.finalText}>
                وده لأن الخطوة الأولى في أي علاج ناجح هي إننا نحدد السبب الحقيقي للمشكلة، وبعدها نختار أفضل حل طبي مناسب لحالتك.

وفي بعض الحالات بيكون التدخل الجراحي هو آخر خطوة علاجية بعد استنفاد كل الطرق الأخرى، وبيكون فعلاً الحل النهائي للتخلص من المشكلة تمامًا.

              </p>
              <p className={styles.surgeryNote}>
                وبرضا بنكون حريص على إجراء التدخل الجراحي هو آخر الحلول المتاحة
                للتخلص نهائياً من المشكلة.
              </p>
            </div>

            <Link href="/contact" className={styles.appointmentBtn}>
              احجز كشفك الطبي
            </Link>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.doctorImage}>
              <img src="/home/3.webp" alt="د. أسامة البقل" />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayBanner}>
                  <div className={styles.bannerLeft}>
                    <span className={styles.bannerText}>
معنا… أنت في المكان الأكثر أمانًا واهتمامًا بصحتك                    </span>
                  </div>
                  <div className={styles.bannerRight}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
