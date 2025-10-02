import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Photographer from "../assets/images/photographer/pg1.jpg"

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={5}>
            <div style={{ width: "100%", height: "450px", overflow: "hidden", borderRadius: "10px" }}>
              <Image src={Photographer} alt="About LS"
                style={{ width: "100%", height: "100%", objectFit: "cover", }}
              />
            </div>
          </Col>
          <Col md={7}>
            <h3>About LS Photography</h3>
            <p className="text-muted">
              LS Photography is an independent studio focusing on storytelling through portraits and commercial photography.
              We create relaxed sessions and high-quality images for individuals, couples, and brands.
            </p>
            <ul>
              <li>Personalized photoshoots</li>
              <li>Brand & product photography</li>
              <li>Event coverage</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
