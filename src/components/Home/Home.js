import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* HERO IMAGE */}
      <div className="hero-container">
        <Container className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="main-title">Welcome To <br/> Leader's University</h1>
            <h3 className="secondary-title">
              Learn From The Best Trainers To Unlock The Next Level <br/> Of Your Career
            </h3>
            <Button className="primary-button" variant="outline-dark">Contact Us</Button>
          </div>
          <div>
            <img src="images/hero.png" alt="" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
