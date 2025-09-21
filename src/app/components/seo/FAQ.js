'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';
import { createFAQStructuredData } from './StructuredData';

export default function FAQ({ faqs, title = "الأسئلة الشائعة" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqStructuredData = createFAQStructuredData(faqs);

  return (
    <div className={styles.faqSection}>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />
      
      <h2 className={styles.faqTitle}>{title}</h2>
      
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={`${styles.faqQuestion} ${openIndex === index ? styles.active : ''}`}
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className={styles.questionText}>{faq.question}</span>
              <span className={styles.toggleIcon}>
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            
            <div
              id={`faq-answer-${index}`}
              className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ''}`}
              aria-hidden={openIndex !== index}
            >
              <div className={styles.answerContent}>
                {typeof faq.answer === 'string' ? (
                  <p>{faq.answer}</p>
                ) : (
                  faq.answer
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
