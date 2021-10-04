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

        <div className="courses-container align-items-center">
          <div className="all-course">
            {
              courses.map(course => <Course key={course.id} course={course}></Course>)
            }
          </div>
          <div>
            <Button className="primary-button course-button px-4" variant="danger">View All</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CoursesSection;