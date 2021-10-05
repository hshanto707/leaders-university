import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink className="text-logo" to="/home">
            <div className="d-flex align-items-center">
              <img className="logo" src="images/favicon.png" alt="" />
              <h2>Leader's University</h2>
            </div>
          </NavLink>
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about-us">
              About Us
            </NavLink>
            <NavLink className="nav-link" to="/courses">
              Courses
            </NavLink>
            <NavLink className="nav-link" to="/trainers">
              Trainers
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
