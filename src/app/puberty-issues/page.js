import MainLayout from '../components/layout/MainLayout';
import PubertyIssuesPage from '../components/pages/PubertyIssuesPage';

export default function PubertyIssues() {
  return (
    <MainLayout>
      <PubertyIssuesPage />
    </MainLayout>
  );
}

export const metadata = {
  title: 'مشاكل البلوغ - الدكتور أسامة البكل',
  description: 'علاج مشاكل البلوغ: تأخر البلوغ، البلوغ المبكر، مشاكل النمو',
};
