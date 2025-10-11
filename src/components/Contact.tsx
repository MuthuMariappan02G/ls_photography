import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="py-5"
      style={{ backgroundColor: "#f8f9fa", overflow: "hidden" }}
    >
      <Container>
        <h2 className="text-center mb-5 fw-bold">📩 Contact Me</h2>
        <Row className="g-4">
          <Col xs={12} md={6}>
            <Card className="shadow-sm border-0 p-4 rounded-3 h-100">
              <h5 className="mb-3 text-secondary">Get In Touch</h5>
              {sent && <Alert variant="success">✅ Your message has been sent!</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Type your message..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{ resize: "none" }}
                    required
                  />
                </Form.Group>

                <div className="text-end">
                  <Button variant="dark" type="submit">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className="shadow-sm border-0 p-4 rounded-3 h-100">
              <h5 className="mb-3 text-secondary">📍 Studio Info</h5>
              <p>
                <strong>Email:</strong> hello@lsphotography.com
              </p>
              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong>Location:</strong> Chennai, India
              </p>
              <hr />
              <p className="text-muted">
                Available for bookings, collaborations, and event photography. Drop a message
                — I’ll get back to you shortly!
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
