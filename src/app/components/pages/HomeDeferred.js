"use client";

import dynamic from 'next/dynamic';

// Defer below-the-fold sections to client to avoid SSR/hydration cost on initial load
const MedicalStats = dynamic(() => import('../home/MedicalStats'), {
  ssr: false,
  loading: () => null,
});
const TreatmentServices = dynamic(() => import('../home/TreatmentServices'), {
  ssr: false,
  loading: () => null,
});
const BookingContact = dynamic(() => import('../home/BookingContact'), {
  ssr: false,
  loading: () => null,
});

export default function HomeDeferred() {
  return (
    <>
      <MedicalStats />
      <TreatmentServices />
      <BookingContact />
    </>
  );
}
