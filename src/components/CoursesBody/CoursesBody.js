import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Course from '../Course/Course';
import './CoursesBody.css'

const CoursesBody = () => {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    fetch('courses.JSON')
      .then(res => res.json())
      .then(data => setAllCourses(data))
  }, [])
  return (
    <div>
      <Container className="all-courses">
          {
            allCourses.map(course => <Course key={course.id} course={course}></Course>)
          }
      </Container>
    </div>
  );
};

export default CoursesBody;