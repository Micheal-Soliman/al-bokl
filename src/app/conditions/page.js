import { generateSEOMetadata } from '../../lib/seo/articleSEO';
import MainLayout from '../components/layout/MainLayout';
import ConditionsPage from '../components/pages/ConditionsPage';

export const metadata = generateSEOMetadata({
  title: 'الحالات المرضية - د. أسامة البكل',
  description: 'تعرف على الحالات المرضية التي نعالجها: ضعف الانتصاب، سرعة القذف، نقص هرمون الذكورة، دوالي الخصيتين، والعقم عند الرجال.',
  keywords: ['الحالات المرضية', 'ضعف الانتصاب', 'سرعة القذف', 'نقص هرمون الذكورة', 'دوالي الخصيتين', 'العقم عند الرجال'],
  canonical: '/conditions',
  breadcrumb: [
    { name: 'الرئيسية', url: '/' },
    { name: 'الحالات المرضية', url: '/conditions' }
  ]
});

export default function Conditions() {
  return (
    <MainLayout>
      <ConditionsPage />
    </MainLayout>
  );
}
