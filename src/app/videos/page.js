// "use client";
import MainLayout from "../components/layout/MainLayout";
import { generateSEOMetadata } from "../../lib/seo/articleSEO";
import Link from "next/link";
import styles from "./videos.module.css";
// import { useState } from "react";
import Videos from "../components/Videos/page";

// SEO metadata
export async function generateMetadata() {
  return generateSEOMetadata({
    title: "الفيديوهات التعليمية - د. أسامة البكل",
    description:
      "مجموعة شاملة من الفيديوهات التعليمية والتوعوية المتخصصة في أمراض الذكورة والصحة الجنسية مع د. أسامة البكل.",
    keywords: [
      "فيديوهات تعليمية",
      "أمراض الذكورة",
      "الصحة الجنسية",
      "تعليم طبي",
      "فيديوهات طبية",
      "د أسامة البكل",
    ],
    canonical: "/videos",
    image: "/images/videos/medical-education.webp",
  });
}

export default function VideosPage() {
  const tabs = {
    "تأخر الإنجاب": [
      "https://www.youtube.com/embed/2E0N5Esd7Ho",
      "https://www.youtube.com/embed/E_w2fJ_Dh68",
      "https://www.youtube.com/embed/Sy_NauCgzfI",
    ],
    "المشاكل الجنسية": [
      "https://www.youtube.com/embed/jh0vB33C2dQ",
      "https://www.youtube.com/embed/zNnx2xj0zEA",
    ],
    "تحليل السائل المنوي": [
      "https://www.youtube.com/embed/cI4hS8aNQhU",
      "https://www.youtube.com/embed/1B1bD9Fq8c0",
    ],
  };

  // const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

  return (
    <MainLayout>
      <div className={styles.videosPage}>
        {/* Hero Section */}
        {/* <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>الفيديوهات التعليمية</h1>
              <p className={styles.heroDescription}>
                مكتبة شاملة من الفيديوهات التعليمية والتوعوية في أمراض الذكورة
                والصحة الجنسية. محتوى علمي موثوق ومبسط للجميع.
              </p>
              <div className={styles.heroButtons}>
                <Link href="#featured" className={styles.primaryBtn}>
                  شاهد الفيديو المميز
                </Link>
                <Link href="#categories" className={styles.secondaryBtn}>
                  تصفح الفئات
                </Link>
              </div>
            </div>
          </div>
        </section> */}
        <Videos />
        {/* CTA Section */}
        {/* <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>هل لديك سؤال طبي؟</h2>
              <p>
                إذا لم تجد إجابة سؤالك في الفيديوهات، يمكنك حجز استشارة متخصصة
                مع د. أسامة البكل للحصول على إجابات شخصية ومفصلة.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact/appointment" className={styles.primaryBtn}>
                  احجز استشارة متخصصة
                </Link>
                <Link href="tel:+201017912197" className={styles.secondaryBtn}>
                  اتصل الآن: 01017912197
                </Link>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </MainLayout>
  );
}
