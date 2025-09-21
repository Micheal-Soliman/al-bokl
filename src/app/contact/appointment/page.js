import { generateSEOMetadata } from '../../../lib/seo/articleSEO';
import MainLayout from '../../components/layout/MainLayout';
import AppointmentPage from '../../components/pages/AppointmentPage';

export const metadata = generateSEOMetadata({
  title: 'حجز موعد - د. أسامة البكل',
  description: 'احجز موعدك مع د. أسامة البكل استشاري أمراض الذكورة والصحة الجنسية. مواعيد متاحة من السبت للأربعاء من 12 ظهراً حتى 8 مساءً.',
  keywords: ['حجز موعد', 'استشارة طبية', 'د. أسامة البكل', 'أمراض الذكورة', 'الصحة الجنسية', 'عيادة الشيخ زايد'],
  canonical: '/contact/appointment',
  breadcrumb: [
    { name: 'الرئيسية', url: '/' },
    { name: 'التواصل', url: '/contact' },
    { name: 'حجز موعد', url: '/contact/appointment' }
  ]
});

export default function Appointment() {
  return (
    <MainLayout>
      <AppointmentPage />
    </MainLayout>
  );
}
