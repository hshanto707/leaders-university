import React from 'react';
import { Card } from "react-bootstrap";
import './Trainer.css'

const Trainer = (props) => {
  const { name, role, img } = props.trainer;

  return (
    <div>
      <Card className="trainer-card">
        <Card.Img className="trainer-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Text className="category text-danger">{role}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Trainer;