import React from 'react';
import { Container, Button } from "react-bootstrap";
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div>
      <div className="hero-container">
        <Container className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="main-title">Welcome To <br/> Leader's University</h1>
            <h3 className="secondary-title">
              Learn From The Best Trainers To Unlock The Next Level <br/> Of Your Career
            </h3>
          </div>
          <div>
            <img className="hero-img" src="images/hero.png" alt="" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;