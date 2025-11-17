import styles from './Hero.module.css';
import Image from 'next/image';

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
              <Image 
                src="/home/DSC03817.JPG" 
                alt="د. أسامة البقل" 
                width={800}
                height={600}
                priority
                quality={80}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          
          <div className={styles.heroText}>
            <h1 className={styles.doctorName}>الدكتور أسامة البكل - إستشاري طب وجراحة أمراض الذكورة</h1>
            <p className={styles.doctorTitle}>
              إستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب بطب القصر العيني 
              {/* <br />
              والصحة الجنسية بطب قصر العيني */}
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
