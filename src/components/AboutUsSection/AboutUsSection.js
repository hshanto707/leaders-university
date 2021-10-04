import React from 'react';
import { Container } from "react-bootstrap";
import './AboutUsSection.css'

const AboutUsSection = () => {
  return (
    <div>
      <Container>
        <h1 className="page-title">About Us</h1>

        <div className="d-flex align-items-center">
          <div>
            <img className="about-us-img" src="images/about-us.png" alt="" />
          </div>
          <div>
            <p className="details">If you want to learn what it takes to make the next move in your career, you’ve come to the right place. As a global destination for online learning, we make people capable to get what they truly deserve.</p>
            <p className="details">We have various courses on different topics like programming, marketing, creative writing, project management and many more.</p>
            <p className="details">It doesn't matter what sector are you in, we got you. Select the topic you're interested in and become an ultimate master of it.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsSection;