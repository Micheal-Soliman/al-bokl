import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "الرئيسية - الدكتور أسامة البكل",
  description: " موقع الدكتور أسامة البكل, مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.variable}>
        {children}
      </body>
    </html>
  );
}
