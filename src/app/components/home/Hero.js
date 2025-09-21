import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Decorative Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.blueShape}></div>
        <div className={styles.orangeCircle}></div>
        <div className={styles.whiteCircle}></div>
        
        {/* Left Side Space Circles */}
        <div className={styles.leftSpaceCircles}>
          <div className={styles.spaceCircle1}></div>
          <div className={styles.spaceCircle2}></div>
          <div className={styles.spaceCircle3}></div>
          <div className={styles.spaceCircle4}></div>
        </div>
        
        {/* Enhanced Geometric Elements */}
        <div className={styles.triangles}>
          <div className={styles.triangle}></div>
          <div className={styles.triangle}></div>
          <div className={styles.triangle}></div>
        </div>
        <div className={styles.geometricLines}></div>
        <div className={styles.floatingDots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.wavyLines}></div>
      </div>

      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroImage}>
            <div className={styles.imageFrame}>
              <img src="/home/3.webp" alt="د. أسامة البقل" />
            </div>
          </div>
          
          <div className={styles.heroText}>
            <div className={styles.doctorLabel}>الدكتور</div>
            <h1 className={styles.doctorName}>أسامة البكل</h1>
            <p className={styles.doctorTitle}>
              مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب
              <br />
              والصحة الجنسية بطب قصر العيني
            </p>
            <button className={styles.contactBtn}>
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
