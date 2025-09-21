import Hero from '../home/Hero';
import Services from '../home/Services';
import Diagnosis from '../home/Diagnosis';
import BeliefSection from '../home/BeliefSection';
import MedicalStats from '../home/MedicalStats';
import TreatmentServices from '../home/TreatmentServices';
import BookingContact from '../home/BookingContact';
import MedicalArticles from '../home/MedicalArticles';
import TreatmentOptions from '../home/TreatmentOptions';
import Testimonials from '../home/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Diagnosis />
      <MedicalStats />
      <TreatmentServices />
      <BookingContact />
      <MedicalArticles />
      {/* <TreatmentOptions />
      <Testimonials /> */}
    </>
  );
}
