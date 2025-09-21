import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>
              نؤمن بأن التشخيص الصحيح لسبب المشكلة هو العلاج نفسه
            </h2>
            
            <div className={styles.aboutDescription}>
              <p>
                الدكتور أسامة البكل هو مدرس واستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بكلية طب قصر العيني - جامعة القاهرة.
              </p>
              <p>
                يتميز الدكتور أسامة بخبرة واسعة في تشخيص وعلاج جميع مشاكل الذكورة، من تأخر الإنجاب إلى المشاكل الجنسية والعمليات الجراحية المتخصصة.
              </p>
              <p>
                نحن نؤمن بأن كل مريض يستحق أفضل رعاية طبية ممكنة، ولذلك نقدم خدمات شاملة ومتكاملة تشمل التشخيص الدقيق والعلاج المناسب والمتابعة المستمرة.
              </p>
            </div>
          </div>

          {/* Patient Tests Section */}
          <div className={styles.testsSection}>
            <h3 className={styles.testsTitle}>
              الفحوصات المطلوبة للمريض
            </h3>
            
            <div className={styles.testsGrid}>
              <div className={styles.testCard}>
                <span className={styles.testIcon}>🧪</span>
                <h4 className={styles.testTitle}>تحليل السائل المنوي</h4>
                <p className={styles.testDescription}>
                  فحص شامل لتقييم جودة وكمية الحيوانات المنوية وحركتها وشكلها
                </p>
              </div>
              
              <div className={styles.testCard}>
                <span className={styles.testIcon}>🩸</span>
                <h4 className={styles.testTitle}>تحاليل الهرمونات</h4>
                <p className={styles.testDescription}>
                  قياس مستويات الهرمونات المؤثرة على الخصوبة والصحة الجنسية
                </p>
              </div>
              
              <div className={styles.testCard}>
                <span className={styles.testIcon}>🔬</span>
                <h4 className={styles.testTitle}>الفحص الإكلينيكي</h4>
                <p className={styles.testDescription}>
                  فحص طبي شامل لتقييم الحالة العامة واكتشاف أي مشاكل محتملة
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className={styles.statsSection}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>15+</span>
                <div className={styles.statLabel}>سنوات خبرة</div>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>5000+</span>
                <div className={styles.statLabel}>مريض سعيد</div>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>95%</span>
                <div className={styles.statLabel}>نسبة نجاح</div>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>24/7</span>
                <div className={styles.statLabel}>متاح دائماً</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
