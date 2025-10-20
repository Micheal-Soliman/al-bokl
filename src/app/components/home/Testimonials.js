import Button from '../ui/Button/Button';
import Card from '../ui/Card/Card';
import Section from '../ui/Section/Section';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: "معتز",
      text: "الحمد لله تم الشفاء بإذن الله على يد الدكتور أسامة البكل. خبرة ومهارة عالية في التشخيص والعلاج.",
      rating: 5
    },
    {
      name: "أحمد محمد",
      text: "دكتور محترم جداً ومتفهم. ساعدني في حل مشكلتي بطريقة علمية ومدروسة. أنصح بزيارته.",
      rating: 5
    },
    {
      name: "محمود علي",
      text: "تجربة ممتازة مع الدكتور أسامة. العلاج كان فعال والمتابعة مستمرة. شكراً دكتور.",
      rating: 5
    }
  ];

  return (
    <Section background="light-blue" padding="large">
      <div className={styles.testimonialsHeader}>
        <h2 className={styles.testimonialsTitle}>آراء المرضى</h2>
        <p className={styles.testimonialsSubtitle}>
          تجارب حقيقية من مرضانا الكرام
        </p>
      </div>
      
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <Card key={index} variant="default" hover={true} padding="large">
            <div className={styles.testimonialRating}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className={styles.star}>⭐</span>
              ))}
            </div>
            <p className={styles.testimonialText}>&ldquo;{testimonial.text}&rdquo;</p>
            <div className={styles.testimonialAuthor}>
              <strong>{testimonial.name}</strong>
            </div>
          </Card>
        ))}
      </div>
      
      <Card variant="blue" padding="large" className={styles.callToAction}>
        <h3 className={styles.ctaTitle}>
          انضم إلى مرضانا الراضين
        </h3>
        <p className={styles.ctaText}>
          احجز استشارتك اليوم واحصل على أفضل رعاية طبية متخصصة
        </p>
        <Button 
          variant="white"
          size="large"
          href="/contact"
        >
          ابدأ رحلة العلاج
        </Button>
      </Card>
    </Section>
  );
}
