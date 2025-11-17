import { Cairo } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/analytics/GoogleAnalytics";
import MetaPixel from "./components/analytics/MetaPixel";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap", // Prevent invisible text during font loading
  preload: true,
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata = {
  title: "-دكتور أسامة البكل",
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
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        {/* DNS prefetch for faster lookups */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={cairo.variable}>
        {GA_MEASUREMENT_ID && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}
        <MetaPixel pixelId={META_PIXEL_ID} />
        {children}
        
      </body>
    </html>
  );
}
