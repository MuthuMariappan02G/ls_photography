import React, { useState } from 'react'
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap'

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section bg-light">
      <Container>
        <h2 className="mb-4">Contact</h2>
        <Row>
          <Col md={6}>
            <p className="text-muted">Interested in booking or collaboration? Send a message.</p>
            {sent && <Alert variant="success">Message sent (demo)</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Your name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="you@example.com" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} required />
              </Form.Group>
              <Button type="submit">Send Message</Button>
            </Form>
          </Col>
          <Col md={6}>
            <div className="p-3 border rounded">
              <h5>Studio</h5>
              <p className="mb-1 text-muted">Email: hello@lsphotography.com</p>
              <p className="mb-1 text-muted">Phone: +91 98765 43210</p>
              <p className="mb-1 text-muted">Location: Chennai, India</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
