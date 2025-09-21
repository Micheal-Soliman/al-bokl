import MainLayout from '../components/layout/MainLayout';
import SexualHealthPage from '../components/pages/SexualHealthPage';

export default function SexualHealth() {
  return (
    <MainLayout>
      <SexualHealthPage />
    </MainLayout>
  );
}

export const metadata = {
  title: 'المشاكل الجنسية - الدكتور أسامة البكل',
  description: 'علاج المشاكل الجنسية: ضعف الإنتصاب، سرعة القذف، فقدان الرغبة الجنسية، مشاكل الهرمونات',
};
