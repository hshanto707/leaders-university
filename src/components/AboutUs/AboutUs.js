import React from 'react';
import { Container } from "react-bootstrap";
import AboutUsBody from '../AboutUsBody/AboutUsBody';
import AboutUsHeroSection from '../AboutUsHeroSection/AboutUsHeroSection';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div>
      <AboutUsHeroSection />
      <AboutUsBody />
    </div>
  );
};

export default AboutUs;