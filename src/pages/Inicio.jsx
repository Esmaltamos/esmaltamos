import React from 'react';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';
import OurServicesSection from '../components/OurServicesSection';

export default function Inicio() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <OurServicesSection />
      <CallToAction />
    </>
  );
}