import React from "react";
import { Container } from "react-bootstrap";

const AboutUsBody = () => {
  return (
    <div className="mt-5">
      <Container className="d-flex align-items-center">
        <div>
        <p className="details">
          If you want to learn what it takes to make the next move in your
          career, you’ve come to the right place. As a global destination for
          online learning, we make people capable to get what they truly
          deserve.
        </p>
        <p className="details">
          We have various courses on different topics like programming,
          marketing, creative writing, project management and many more.
        </p>
        <p className="details">
          It doesn't matter what sector are you in, we got you. Select the topic
          you're interested in and become an ultimate master of it.
        </p>
        <p className="details">
          Leader's University has started around 3 years ago. In this very small
          period of time we got over 3 Million students around the world. The
          main reasons behind our success is our students love the way we teach
          in Leader's University.
        </p>
        <p className="details">
          We builds leaders of the future. We feel what you need in order to get
          your dream job. And for that you need great resources to educate
          yourself. It seems a lot of work. We are here to make your task
          easier. Our instructors are dedicated to give you the most.
        </p>
        </div>
        <div>
        <img className="about-us-img" src="images/about-us.png" alt="" />
        </div>
      </Container>
    </div>
  );
};

export default AboutUsBody;
