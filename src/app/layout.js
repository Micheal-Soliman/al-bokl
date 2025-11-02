import { Cairo } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/analytics/GoogleAnalytics";
import MetaPixel from "./components/analytics/MetaPixel";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "الرئيسية الدكتور أسامة البكل",
  description: "موقع الدكتور أسامة البكل, مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني",
  icons: {
    icon: '/favicon.webp',
    apple: '/favicon.webp',
  },
  verification: {
    google: 'ZsLHn2oROl-NJ6fle80I8hTW92q9KqcycP8hjz6MDKE',
  },
};

export default function RootLayout({ children }) {
  // Add your Google Analytics Measurement ID here
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const META_PIXEL_ID = '2863839303813679';
  
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.variable}>
        {GA_MEASUREMENT_ID && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}
        <MetaPixel pixelId={META_PIXEL_ID} />
        {children}
        
      </body>
    </html>
  );
}
