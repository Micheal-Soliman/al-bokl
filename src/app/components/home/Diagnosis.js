import Link from 'next/link';
import styles from './Diagnosis.module.css';

export default function Diagnosis() {
  return (
    <section className={styles.diagnosisSection}>
      <div className="container">
        <div className={styles.diagnosisContent}>
          <div className={styles.textContent}>
            <div className={styles.header}>
              <span className={styles.subtitle}>نؤمن بأن</span>
              <h2 className={styles.title}>
                التشخيص الصحيح لسبب المشكلة هو
                العلاج نفسه
              </h2>
            </div>

            <div className={styles.description}>
              <p>
                بنشار فريق خبرة لو محتاج مساعدة عندنا سنوات خبرة لو محتاج تعالج مشاكل عندنا سنوات خبرة، بناخد
                الوقت اللازم لو مشاكل جنسية لكل ناس خاص كان الطرق اللي ناس عليه، وليه تم تشخيصهم من البداية عليه، وبنالي طرق العلاج في الآخر صحيح بالضمان.
              </p>
            </div>

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
                    فريق طبي متخصص بخبرة واسعة في مجال أمراض الذكورة والصحة الجنسية
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.philosophy}>
              <p>
                ودايماً بيكون قرار إجراء التدخل الجراحي هو آخر الحلول الممكنة للتخلص نهائياً من المشكلة.
              </p>
            </div>

            <div className={styles.ctaSection}>
              <p className={styles.ctaText}>عشان كدا دايماً بنطلب من المريض :</p>
              <ul className={styles.requestList}>
                <li>معلومات</li>
                <li>أشعات</li>
                <li>تحاليل</li>
              </ul>
              <p className={styles.finalText}>
                عشان نقدر نعرف ونتأكد من سبب المشكلة، ونختار أفضل وأمهر طرق العلاج المناسبة.
              </p>
              <p className={styles.surgeryNote}>
                وبرضا بنكون حريص على إجراء التدخل الجراحي هو آخر الحلول المتاحة للتخلص نهائياً من المشكلة.
              </p>
            </div>

            <Link href="/contact" className={styles.appointmentBtn}>
              اضغط هنا لو محتاج تحجز كشف
            </Link>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.doctorImage}>
              <img src="/home/3.webp" alt="د. أسامة البقل" />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayBanner}>
                  <div className={styles.bannerLeft}>
                    <span className={styles.bannerText}>معنا ♥ زيت في أكتر مكان آمان !</span>
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
