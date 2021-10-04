import React from "react";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import CoursesSection from "../CoursesSection/CoursesSection";
import HeroSection from "../HeroSection/HeroSection";
import TrainersSection from "../TrainersSection/TrainersSection";
import "./Home.css";

const Home = () => {
  return (
    <div>

      {/* HERO IMAGE */}

      <HeroSection />

      {/* ABOUT US */}

      <AboutUsSection />

      {/* Courses */}

      <CoursesSection />

      {/* TRAINERS */}

      <TrainersSection />
      
    </div>
  );
};

export default Home;
