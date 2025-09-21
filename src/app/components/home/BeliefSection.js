import Section from '../ui/Section/Section';
import styles from './BeliefSection.module.css';
import Button from '../ui/Button/Button';

export default function BeliefSection() {
  return (
    <Section background="gradient" padding="large" variant="with-border">
      <div className={styles.beliefContent}>
        <div className={styles.beliefHeader}>
          <h3 className={styles.beliefSubtitle}>نؤمن بأن ...</h3>
          <h2 className={styles.beliefTitle}>
            التشخيص الدقيق هو أساس العلاج الناجح
          </h2>
        </div>
        
        <div className={styles.beliefGrid}>
          <div className={styles.beliefItem}>
            <div className={styles.beliefIcon}>🔬</div>
            <h4 className={styles.beliefItemTitle}>فحص شامل</h4>
            <p className={styles.beliefItemText}>
              نقوم بإجراء فحوصات شاملة ودقيقة لتحديد السبب الجذري للمشكلة
            </p>
          </div>
          
          <div className={styles.beliefItem}>
            <div className={styles.beliefIcon}>👨‍⚕️</div>
            <h4 className={styles.beliefItemTitle}>خبرة طبية</h4>
            <p className={styles.beliefItemText}>
              فريق طبي متخصص بخبرة واسعة في مجال أمراض الذكورة والصحة الجنسية
            </p>
            <p className={styles.surgeryNote}>
              ودايماً بيكون قرار إجراء التدخل الجراحي هو آخر الحلول الممكنة للتخلص نهائياً من المشكلة.
            </p>
          </div>

          <div className={styles.callToAction}>
            <a href="/contact" className={styles.ctaButton}>
              اضغط هنا لو محتاج تحجز كشف
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
