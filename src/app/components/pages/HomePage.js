import Hero from '../home/Hero';
import Services from '../home/Services';
import Diagnosis from '../home/Diagnosis';
import BeliefSection from '../home/BeliefSection';
import HomeDeferred from './HomeDeferred';
import dynamic from 'next/dynamic';
// Keep articles server-rendered but code-split on client
const MedicalArticles = dynamic(() => import('../home/MedicalArticles'));

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Diagnosis />
      <HomeDeferred />
      <MedicalArticles />
      {/* <TreatmentOptions />
      <Testimonials /> */}
    </>
  );
}
