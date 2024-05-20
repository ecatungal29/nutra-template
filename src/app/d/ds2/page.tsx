'use client'
import React, { useEffect, useState } from 'react';
import LeaveAlertModal from '../components/LeaveAlertModal';
import Heading from './Sections/Heading';
import Hero from './Sections/Hero';
import ArrowSection from './Sections/ArrowSection';
import DsTwoBigbottle from './Sections/DsTwoBigbottle';
import DstwoCopyOne from './Sections/DstwoCopyOne';
import DsTwoRecap from './Sections/DsTwoRecap';
import DstwoCopyTwo from './Sections/DstwoCopyTwo';
import DsTwoCopyThree from './Sections/DsTwoCopyThree';
import DsTwoLastChance from './Sections/DsTwoLastChance';
import DsTwoBonus from './Sections/DsTwoBonus';
import DsTwoCopyFour from './Sections/DsTwoCopyFour';
import Footer from '@/app/components/Footer';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = ''; // Needed for Chrome
      return ''; // Needed for other browsers
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientY < 10) {
        setIsModalOpen(true);
      }
    };

    // window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      // window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <LeaveAlertModal isOpen={isModalOpen} onClose={closeModal} />
      <Heading />
      <Hero />
      <ArrowSection />
      <DsTwoBigbottle />
      <DstwoCopyOne />
      <DsTwoRecap />
      <DstwoCopyTwo />
      <DsTwoBigbottle />
      <DsTwoCopyThree />
      <DsTwoLastChance />
      <DsTwoBonus />
      <DsTwoCopyFour />
      <DsTwoBigbottle />
      <Footer />
    </>
  );
}
