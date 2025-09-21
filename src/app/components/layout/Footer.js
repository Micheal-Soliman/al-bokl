// Icons replaced with emojis for compatibility
import Link from 'next/link';
// import { siteConfig } from '../utils/constants';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "عن الدكتور", href: "/about" },
    { name: "تأخر الإنجاب", href: "/fertility" },
    { name: "المشاكل الجنسية", href: "/sexual-health" },
    { name: "العمليات الجراحية", href: "/surgeries" },
    { name: "المقالات", href: "/articles" },
    { name: "تواصل معنا", href: "/contact" }
  ];

  const services = [
    { name: "عملية دوالي الخصيتين", href: "/surgeries/varicocele" },
    { name: "التفتيش الميكروسكوبي", href: "/surgeries/microscopic-inspection" },
    { name: "دعامات العضو الذكري", href: "/surgeries/penile-implants" },
    { name: "إصلاح إعوجاج القضيب", href: "/surgeries/penile-curvature" },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* About Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>الدكتور أسامة البكل</h3>
            <p className={styles.footerText}>
              مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                📘
              </a>
              <a href="#" className={styles.socialLink}>
                📷
              </a>
              <a href="#" className={styles.socialLink}>
                📺
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>روابط سريعة</h3>
            <div className={styles.footerLinks}>
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  className={styles.footerLink}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>خدماتنا</h3>
            <div className={styles.footerLinks}>
              {services.map((service, index) => (
                <Link 
                  key={index}
                  href={service.href} 
                  className={styles.footerLink}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>معلومات التواصل</h3>
            <div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <div>
                  <p className={styles.contactText}>+201017912197</p>
                  <p className={styles.contactText}>+201018874287</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <p className={styles.contactText}>Booking@albokl.com</p>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🕒</span>
                <p className={styles.contactText}>السبت - الأربعاء: 12:00 ظ - 8:00 م</p>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <p className={styles.contactText}>الشيخ زايد، محور 26 يوليو، توين تاورز برج C، الدور الثاني، عيادة D</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <div className={styles.footerBottomLinks}>
              <Link href="/privacy" className={styles.footerBottomLink}>
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className={styles.footerBottomLink}>
                شروط الاستخدام
              </Link>
              <Link href="/disclaimer" className={styles.footerBottomLink}>
                إخلاء المسؤولية
              </Link>
            </div>
            <p className={styles.copyright}>
              © {currentYear} الدكتور أسامة البكل. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
