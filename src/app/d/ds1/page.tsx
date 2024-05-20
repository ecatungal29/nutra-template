'use client'
import React, { useEffect, useState } from 'react';
import LeaveAlertModal from '../components/LeaveAlertModal';
import Heading from './Sections/Heading';
import Hero from './Sections/Hero';
import ArrowSection from './Sections/ArrowSection';
import DsOneBigbottle from './Sections/DsOneBigbottle';
import DsoneCopyOne from './Sections/DsoneCopyOne';
import DsOneRecap from './Sections/DsOneRecap';
import DsoneCopyTwo from './Sections/DsoneCopyTwo';
import DsOneCopyThree from './Sections/DsOneCopyThree';
import DsOneLastChance from './Sections/DsOneLastChance';
import DsOneBonus from './Sections/DsOneBonus';
import DsOneCopyFour from './Sections/DsOneCopyFour';
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
      <DsOneBigbottle />
      <DsoneCopyOne />
      <DsOneRecap />
      <DsoneCopyTwo />
      <DsOneBigbottle />
      <DsOneCopyThree />
      <DsOneLastChance />
      <DsOneBonus />
      <DsOneCopyFour />
      <DsOneBigbottle />
      <Footer />
    </>
  );
}
