import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Button } from "react-bootstrap";
import Course from '../Course/Course';
import './CoursesSection.css'

const CoursesSection = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('coursesShort.JSON')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])
  return (
    <div>
      <Container>
        <h1 className="page-title">Courses</h1>

          <div className="all-course mx-auto">
            {
              courses.map(course => <Course key={course.id} course={course}></Course>)
            }
          </div>
      </Container>
    </div>
  );
};

export default CoursesSection;