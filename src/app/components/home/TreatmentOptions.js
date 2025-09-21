import { TREATMENTS } from '../utils/constants';
import Button from '../ui/Button/Button';
import Card from '../ui/Card/Card';
import Section from '../ui/Section/Section';
import styles from './TreatmentOptions.module.css';

export default function TreatmentOptions() {
  return (
    <Section background="white" padding="large">
      <div className={styles.treatmentHeader}>
        <h2 className={styles.treatmentTitle}>
          علاج كل ما يخص تأخر الإنجاب والمشاكل الجنسية
        </h2>
        <p className={styles.treatmentSubtitle}>
          نوفر حلول شاملة ومتخصصة لجميع المشاكل المتعلقة بالصحة الإنجابية والجنسية
        </p>
      </div>
      
      <div className={styles.treatmentGrid}>
        {TREATMENTS.map((treatment, index) => (
          <Card key={index} variant="default" hover={true} padding="large">
            <div className={styles.treatmentIcon}>🏥</div>
            <h3 className={styles.treatmentCardTitle}>{treatment.name}</h3>
            <Button 
              variant="primary"
              size="medium"
              href={treatment.link}
            >
              اعرف أكثر
            </Button>
          </Card>
        ))}
      </div>
      
      <Card variant="blue" padding="large" className={styles.callToAction}>
        <div className={styles.ctaContent}>
          <h3 className={styles.ctaTitle}>
            هل تعاني من أي من هذه المشاكل؟
          </h3>
          <p className={styles.ctaText}>
            لا تتردد في التواصل معنا للحصول على استشارة طبية متخصصة وخطة علاج مناسبة
          </p>
          <div className={styles.ctaButtons}>
            <Button 
              variant="white"
              size="large"
              href="/contact"
            >
              احجز استشارة
            </Button>
            <Button 
              variant="outline"
              size="large"
              href="/services"
              className={styles.ctaButtonSecondary}
            >
              تعرف على خدماتنا
            </Button>
          </div>
        </div>
      </Card>
    </Section>
  );
}
