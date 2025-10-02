import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarTop: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        {/* Brand aligned left */}
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          LS Photography
        </Navbar.Brand>

        {/* Toggle (for mobile) */}
        <Navbar.Toggle
          aria-controls="ls-nav"
          className="p-1"
          style={{ transform: "scale(0.8)" }}
        />

        {/* Nav links aligned right */}
        <Navbar.Collapse id="ls-nav" className="justify-content-end">
          <Nav className="align-items-lg-end">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button variant="primary" className="ms-3 d-none d-lg-inline">
              Book a Session
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarTop
