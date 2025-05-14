import React from "react";

// import two files
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Navbar,Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
// using react-bootstrap for navbar

const NavBar = () => {
  return (

    // react botstrap 
    
    <Navbar fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/features">Features</Nav.Link>
            <Nav.Link as={Link} to="/features/features1">Features1</Nav.Link>
            <Nav.Link as={Link} to="/features/features2">Features2</Nav.Link>
            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
  );
};

export default NavBar;
