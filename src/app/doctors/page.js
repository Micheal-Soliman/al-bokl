import MainLayout from '../components/layout/MainLayout';
import DoctorsPage from '../components/pages/DoctorsPage';

export default function Doctors() {
  return (
    <MainLayout>
      <DoctorsPage />
    </MainLayout>
  );
}

export const metadata = {
  title: 'للأطباء - الدكتور أسامة البكل',
  description: 'معلومات مخصصة للأطباء والزملاء في المجال الطبي',
};
