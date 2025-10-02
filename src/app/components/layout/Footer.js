// Icons replaced with emojis for compatibility
import Link from "next/link";
// import { siteConfig } from '../utils/constants';
import styles from "./Footer.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "عن الدكتور", href: "/about" },
    { name: "تأخر الإنجاب", href: "/fertility" },
    { name: "المشاكل الجنسية", href: "/sexual-health" },
    { name: "العمليات الجراحية", href: "/surgeries" },
    { name: "المقالات", href: "/articles" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  const services = [
    { name: "عملية دوالي الخصيتين", href: "/surgeries/varicocele" },
    { name: "التفتيش الميكروسكوبي", href: "/surgeries/microscopic-inspection" },
    { name: "دعامات العضو الذكري", href: "/surgeries/penile-implants" },
    { name: "إصلاح إعوجاج القضيب", href: "/surgeries/penile-curvature" },
  ];

  const clinics = [
    {
      name: "عيادة الشيخ زايد",
      location:
        "توين تاورز الشيخ زايد محور ٢٦ يوليو - برج C الدور الثاني عيادة D",
      hours: ["الإثنين ٨ ل ١١ م", "الأربعاء ٧ مساءً حتى 10 مساءً"],
      mapLink: "https://maps.app.goo.gl/o19rgM12eVzAFX3y8",
    },
    {
      name: "عيادة الجيزة",
      location:
        "30 ش مراد - بالقرب من ميدان الجيزة و حديقة الحيوان - الدور الرابع - عيادة 312",
      hours: [
        "الأحد – من 3 حتى 8 مساءً",
        "الثلاثاء – من 3 حتى 8 مساءً",
        "الأربعاء – من 2 حتى 5 مساءً",
      ],
      mapLink: "https://maps.app.goo.gl/dKdzFCAewVMvjE1o6",
    },
    {
      name: "عيادة شبين الكوم - المنوفية",
      location: "برج الديوان - ميدان شرف - الدور الخامس",
      hours: ["السبت من كل أسبوع – من 1 حتى 5 مساءً"],
      mapLink: "https://maps.app.goo.gl/BUsVzBLoHiypUSa66",
    },
    {
      name: "عيادة أشمون - المنوفية",
      location:
        "ش عبد المنعم رياض - خلف مكتب البريد - مستشفى الدكتور محمد البكل",
      hours: ["الإثنين من كل أسبوع – من 1 حتى 5 مساءً"],
      mapLink: "https://maps.app.goo.gl/tUThtGhDPPPiwV766",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* About Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>الدكتور أسامة البكل</h3>
            <p className={styles.footerText}>
              مدرس واستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب بطب القصر
              العيني
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
                  <p className={styles.contactText}>+01018874287</p>
                  <p className={styles.contactText}>+01017912197</p>
                  <p className={styles.contactText}>+01034637761 (Call)</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <p className={styles.contactText}>Booking@albokl.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* import { FaWhatsapp } from 'react-icons/fa'; */}
        {/* Clinics Section */}
        <div className={styles.clinicsSection}>
          <h3 className={styles.clinicsTitle}>عياداتنا</h3>
          <div className={styles.clinicsGrid}>
            {clinics.map((clinic, index) => (
              <div key={index} className={styles.clinicCard}>
                <div className={styles.clinicHeader}>
                  <span className={styles.clinicIcon}>📍</span>
                  <h4 className={styles.clinicName}>{clinic.name}</h4>
                </div>
                <p className={styles.clinicLocation}>{clinic.location}</p>
                <div className={styles.clinicHours}>
                  <span className={styles.hoursIcon}>🕒</span>
                  <div className={styles.hoursText}>
                    {clinic.hours.map((hour, idx) => (
                      <p key={idx}>{hour}</p>
                    ))}
                  </div>
                </div>

                <a
                  href={clinic.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapLinkText}
                >
                  <span>عرض على الخريطة</span>
                  <span className={styles.arrowIcon}>←</span>
                </a>

                {/* Contact Buttons */}
                <div className={styles.clinicContactButtons}>
                  <div className={styles.whatsappButtonsRow}>
                    <a
                      href="https://wa.me/201018874287"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.whatsappButton}
                    >
                      <FaWhatsapp />
                      <span>واتساب 1</span>
                    </a>
                    <a
                      href="https://wa.me/201017912197"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.whatsappButton}
                    >
                      <FaWhatsapp />
                      <span>واتساب 2</span>
                    </a>
                  </div>
                  <a
                    href="https://wa.me/201034637761"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactButton}
                  >
                    <span className={styles.phoneIcon}>📞</span>
                    <span>للتواصل: 01034637761</span>
                  </a>
                </div>
              </div>
            ))}
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
