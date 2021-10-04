import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink
} from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavbarBrand to="/home">
            <div className="d-flex align-items-center">
              <img className="logo" src="images/favicon.png" alt="" />
              <h2>Leader's University</h2>
            </div>
          </NavbarBrand>
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/about-us">About Us</NavLink>
            <NavLink className="nav-link" to="/courses">Courses</NavLink>
            <NavLink className="nav-link" to="/courses">Trainers</NavLink>
          </Nav>

        </Container>
      </Navbar>
          {/* <nav className="navbar">
            <div className="navbar-container">
              <ul>
                <li className="nav-item">
                  <Link to="/" className="nav-links">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-links">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-links">
                    Products
                  </Link>
                </li>

                <li>
                  <Link to="/sign-up" className="nav-links-mobile">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </nav> */}
    </div>
  );
};

export default Header;
