"use client";

import Link from "next/link";
import styles from "./BookingContact.module.css";

export default function BookingContact() {
  return (
    <section className={styles.bookingContact}>
      <div className={styles.container}>
        {/* Left Side - Blue Section */}
        <div className={styles.leftSection}>
          <div className={styles.blueCard}>
            <h2 className={styles.title}>حجز موعد في العيادة</h2>
            <p className={styles.description}>
              يمكنك الحجز مع الدكتور أسامة البكل في العيادة أو الحصول على
              استشارة طبية من خلال الهاتف أو الواتساب. نحن هنا لخدمتك في أي وقت
              لتقديم أفضل الخدمات الطبية المتخصصة
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span>+201017912197</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <span>+201018874287</span>
              </div>
            </div>
            <div className={styles.buttons}>
              <Link href="/contact" className={styles.bookingBtn}>
                احجز استشارتك الآن
              </Link>
              <Link
                href="https://wa.me/201017912197"
                className={styles.whatsappBtn}
              >
                تواصل عبر الواتساب
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Yellow Section */}
        <div className={styles.rightSection}>
          <div className={styles.yellowCard}>
            <div className={styles.patientReview}>
              <div className={styles.patientIcon}>
                <span>👤</span>
              </div>
              <div className={styles.reviewContent}>
                <p className={styles.patientName}><strong>أحد المرضى</strong></p>
                <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                <p className={styles.reviewText}>
                  الدكتور أسامة البوكل طبيب ممتاز ومتخصص في علاج المشاكل الجنسية
                  والعقم. لديه خبرة كبيرة وأسلوب راقي في التعامل مع المرضى.
                  نصيحتي لكل من يعاني من مشاكل جنسية أن يذهب إليه. العيادة مجهزة
                  بأحدث الأجهزة والتقنيات الطبية المتطورة. شكراً دكتور على كل
                  شيء وربنا يبارك فيك
                </p>
                <div className={styles.reviewDate}>منذ أسبوعين</div>
              </div>
            </div>
            <div className={styles.navigationDots}>
              <span className={styles.dot + " " + styles.active}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
