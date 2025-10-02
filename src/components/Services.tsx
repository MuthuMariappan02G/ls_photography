import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCameraRetro, FaVideo, FaPhotoVideo, FaBookOpen, FaPaperPlane } from 'react-icons/fa';

const Services: React.FC = () => {
  const items = [
    {
      title: 'Candid Photography',
      desc: 'Capture natural and spontaneous moments',
      icon: <FaCameraRetro />
    },
    {
      title: 'Traditional Photography',
      desc: 'Classic portraits & posed shots',
      icon: <FaPhotoVideo />
    },
    {
      title: 'Videography',
      desc: 'Event videos, highlight reels & storytelling',
      icon: <FaVideo />
    },
    {
      title: 'Drone Photography',
      desc: 'Aerial shots for weddings, events, and landscapes',
      icon: <FaPaperPlane />
    },
    {
      title: 'Album Designing',
      desc: 'Creative photo albums and layouts',
      icon: <FaBookOpen />
    },
  ];

  return (
    <section id="services" className="section">
      <Container>
        <h2 className="mb-4 text-center">Our Services</h2>
        <Row className="g-4">
          {items.map((s) => (
            <Col md={4} key={s.title}>
              <Card className="h-100 text-center p-3">
                <div style={{ fontSize: 36 }} className="text-primary mb-3">
                  {s.icon}
                </div>
                <Card.Title>{s.title}</Card.Title>
                <Card.Text className="text-muted">{s.desc}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
