import React from "react";
import { Card } from "react-bootstrap";
import './Course.css'

const Course = (props) => {
  const { title, trainer, img, category, description, price } = props.course;
  
  return (
    <div>
      <Card className="course-card">
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Text className="category text-danger">{category}</Card.Text>
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text>{trainer}</Card.Text>
          <Card.Text className="details">{description}</Card.Text>
          <Card.Text className="price text-danger">${price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
