'use client';

import styles from './FinalMessage.module.css';

export default function FinalMessage({ 
  title = "🎯 الخطوة الأخيرة نحو الشفاء",
  mainText,
  points = [],
  benefits = [],
  encouragementText = "لا تدع الألم يوقف أحلامك... اتخذ الخطوة الآن!",
  className = '' 
}) {
  return (
    <div className={`${styles.finalMessage} ${className}`}>
      <h3 className={styles.finalTitle}>{title}</h3>
      <div className={styles.finalContent}>
        {mainText && (
          <p className={styles.finalText}>
            {mainText}
          </p>
        )}
        
        {points.length > 0 && (
          <div className={styles.finalPoints}>
            {points.map((point, index) => (
              <div key={index} className={styles.finalPoint}>
                <span className={styles.pointIcon}>✅</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        )}
        
        <div className={styles.callToAction}>
          <p className={styles.actionText}>
            <strong>حان الوقت لاتخاذ القرار الصحيح!</strong>
          </p>
          
          {benefits.length > 0 && (
            <div className={styles.benefits}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefit}>
                  <span className={styles.benefitIcon}>{benefit.icon}</span>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          )}
          
          <p className={styles.encouragement}>
            <strong>{encouragementText}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
