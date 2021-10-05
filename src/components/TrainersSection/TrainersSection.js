import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Button } from "react-bootstrap";
import Trainer from '../Trainer/Trainer';
import './TrainersSection.css'

const TrainersSection = () => {
  const [trainers, setTrainers] = useState([])

  useEffect(() => {
    fetch('trainersShort.JSON')
      .then(res => res.json())
      .then(data => setTrainers(data))
  }, [])
  return (
    <div>
      <Container>
        <h1 className="page-title">Trainers</h1>

        <div className="all-trainers">
            {
              trainers.map(trainer => <Trainer key={trainer.id} trainer={trainer}></Trainer>)
            }
        </div>
      </Container>
    </div>
  );
};

export default TrainersSection;