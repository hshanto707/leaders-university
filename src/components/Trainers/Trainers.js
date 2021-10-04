import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Button } from "react-bootstrap";
import Trainer from '../Trainer/Trainer';

const Trainers = () => {
  const [allTrainers, setAllTrainers] = useState([])

  useEffect(() => {
    fetch('trainers.JSON')
      .then(res => res.json())
      .then(data => setAllTrainers(data))
  }, [])
  return (
    <div>
      <Container>
        <div className="all-trainers">
          {
            allTrainers.map(trainer => <Trainer key={trainer.id} trainer={trainer}></Trainer>)
          }
        </div>
      </Container>
    </div>
  );
};

export default Trainers;