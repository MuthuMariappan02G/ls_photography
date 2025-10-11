import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCamera } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: "#fdfdfd" }}>
      <Container>
        <div className="text-center mb-4">
          <div
            style={{
              display: "inline-flex",
              backgroundColor: "#fff3e0",
              padding: "20px",
              borderRadius: "50%",
              marginBottom: "15px",
            }}
          >
            <FaCamera size={30} color="#ff9800" />
          </div>
          <h2>About LS-Photography</h2>
        </div>
        <p className="text-center text-muted mb-4">
          Welcome to LS-Photography, where we believe every moment tells a story worth capturing.
          With years of experience and a passion for the art of photography, we specialize in
          transforming fleeting moments into timeless memories.
        </p>
        <p className="text-center text-muted mb-4">
          Our approach combines technical expertise with artistic vision to deliver stunning
          photographs that you'll treasure forever. Whether it's a wedding, family portrait, or
          special event, we're dedicated to capturing the emotion, joy, and beauty of your most
          precious moments.
        </p>
        <p className="text-center text-muted mb-5">
          We pride ourselves on our attention to detail, creative compositions, and the ability to
          make our clients feel comfortable and natural in front of the camera. Your satisfaction
          and happiness are our top priorities.
        </p>
        <Row className="g-4 justify-content-center">
          <Col md={5}>
            <Card className="shadow-sm p-4 h-100">
              <h5 className="mb-3">Contact Information</h5>
              <p>
                <FaEnvelope className="me-2 text-primary" />
                <strong>Email:</strong> contact@ls-photography.com
              </p>
              <p>
                <FaPhone className="me-2 text-primary" />
                <strong>Phone:</strong> +1 (234) 567-890
              </p>
              <p>
                <FaMapMarkerAlt className="me-2 text-primary" />
                <strong>Location:</strong> Professional Photography Studio (Available for on-location shoots)
              </p>
            </Card>
          </Col>

          <Col md={5}>
            <Card className="shadow-sm p-4 h-100">
              <h5 className="mb-3">Why Choose Us?</h5>
              <ul className="mb-0 text-muted">
                <li>Professional equipment and expertise</li>
                <li>Personalized service and attention</li>
                <li>Competitive pricing packages</li>
                <li>Fast turnaround on edited photos</li>
                <li>100% satisfaction guarantee</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
