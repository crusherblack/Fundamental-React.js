import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home" className="text-white">
        React-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/" className="text-white">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/modal" className="text-white">
              Modal
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/counter" className="text-white">
              Counter
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/form" className="text-white">
              Form
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
