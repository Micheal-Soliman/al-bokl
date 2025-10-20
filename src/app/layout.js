import { Cairo } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/analytics/GoogleAnalytics";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "الرئيسية الدكتور أسامة البكل",
  description: "موقع الدكتور أسامة البكل, مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  // Add your Google Analytics Measurement ID here
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.variable}>
        {GA_MEASUREMENT_ID && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}
        {children}
        
      </body>
    </html>
  );
}
