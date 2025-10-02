import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTwitter } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className="footer-dark mt-auto">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <strong>LS Photography</strong>
            <div className="text-white small">© {new Date().getFullYear()} LS Photography. All rights reserved.</div>
          </Col>
          <Col md={6} className="text-md-end">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <FaInstagram size={20} />
            </a> 
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaTwitter size={20} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
