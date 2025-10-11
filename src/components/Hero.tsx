import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/images/wedding/W1.jpg";
import img2 from "../assets/images/wedding/W2.jpg";
import img3 from "../assets/images/wedding/W3.jpg";
import img4 from "../assets/images/wedding/W4.jpg";
import img5 from "../assets/images/wedding/W5.jpg";
import img6 from "../assets/images/wedding/W6.jpg";
import img7 from "../assets/images/wedding/W7.jpg";
import img8 from "../assets/images/wedding/W8.jpg";
import img9 from "../assets/images/wedding/W9.jpg";
import img10 from "../assets/images/wedding/W10.jpg";
import img11 from "../assets/images/wedding/W11.jpg";
import img12 from "../assets/images/wedding/W11.jpg";

const Hero: React.FC = () => {
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="hero d-flex align-items-center"
      style={{
        minHeight: "91vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      />

      <Container
        className="hero-content text-white position-relative"
        style={{ zIndex: 2 }}
      >
        <Row>
          <Col md={6}>
            <h1 className="display-4 fw-bold text-white">
              Capture. Create. Cherish.
            </h1>
            <p className="lead text-white">
              LS Photography — Fine art & lifestyle photographer.
              <br />
              Unique visual stories for individuals and brands.
            </p>
            <div className="d-flex gap-2">
              <Button
                variant="primary"
                onClick={() => navigate("/contact")}
              >
                Contact
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
