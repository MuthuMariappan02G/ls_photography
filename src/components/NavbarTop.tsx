import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar: React.FC = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{
        backgroundColor: "#000"
      }}
    >
      <Container
        fluid
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            fontWeight: "bold",
            color: "white",
            marginLeft: "0",
            paddingLeft: "10px",
            textDecoration: "none",
          }}
        >
          LS Photography
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <Nav style={{ display: "flex", alignItems: "center" }}>
            {[
              { to: "/", label: "Home" },
              { to: "/gallery", label: "Gallery" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/feedback", label: "Feedback" },
              { to: "/contact", label: "Contact" },
            ].map((link, index) => (
              <Nav.Link
                key={index}
                as={Link}
                to={link.to}
                style={{
                  color: "white",
                  margin: "0 10px",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                {link.label}
              </Nav.Link>
            ))}
            <Button
              style={{
                backgroundColor: "#ffcc00",
                color: "#000",
                fontWeight: "600",
                border: "none",
                padding: "6px 16px",
                borderRadius: "6px",
                marginLeft: "10px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <Link
                to="/booking"
                style={{
                  color: "#000",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                Book Now
              </Link>
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
