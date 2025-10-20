"use client";

import styles from "./MedicalStats.module.css";
import { useState, useEffect, useRef } from "react";
import CounterNumber from "./CounterNumber";

export default function MedicalStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Exact order and labels from the new image - right to left reading
  const topRowStats = [
    { number: 288, label: "تركيب\nدعامة مرنة", icon: "✓" },
    { number: 373, label: "تركيب\nدعامة\nهيدروليكية", icon: "✓" },
    { number: 432, label: "عملية\nدوالي", icon: "✓" },
  ];

  const bottomRowStats = [
    { number: 204, label: "عملية إصلاح إعوجاج القضيب", icon: "✓" },
    {
      number: 231,
      label: `عملية قيلة مائية`,
      icon: "✓",
    },
    { number: 472, label: " عملية تفتيش ميكروسكوبي ناجحه", icon: "✓" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.medicalStats}>
      <div className={styles.backgroundOverlay}></div>

      {/* Decorative Background Elements */}
      <div className={styles.decorativeElements}>
        <div className={styles.floatingCircle1}></div>
        <div className={styles.floatingCircle2}></div>
        <div className={styles.floatingCircle3}></div>
        <div className={styles.geometricShape1}></div>
        <div className={styles.geometricShape2}></div>
        <div className={styles.medicalCross}></div>
      </div>

      <div className="container">
        <div className={styles.content}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <h2 className={styles.mainTitle}>
              قد وفقنا الله لإجراء أكثر من 2000 عملية جراحية ناجحة
            </h2>
            <p className={styles.description}>
              نقوم بالعديد من العمليات الجراحية يومياً، وهذا ما يضيف إلى كل يوم
              المزيد من الخبرة والممارسة والتقنيات العالية في إجراء العمليات
              الجراحية بكل إحترافية للوصول إلى أفضل معدلات النجاح وتحقيق الأهداف
              العلاجية في العملية.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className={styles.statsGrid}>
            {/* Top Row */}
            <div className={styles.statsRow}>
              {topRowStats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statNumber}>
                    <CounterNumber
                      targetNumber={stat.number}
                      isVisible={isVisible}
                      duration={2000 + index * 200}
                    />
                  </div>
                  {stat.label && (
                    <div className={styles.statLabel}>
                      {stat.label.split("\n").map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className={styles.statsRow}>
              {bottomRowStats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statNumber}>
                    <CounterNumber
                      targetNumber={stat.number}
                      isVisible={isVisible}
                      duration={2000 + (index + 3) * 200}
                    />
                  </div>
                  {stat.label && (
                    <div className={styles.statLabel}>
                      {stat.label.split("\n").map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
