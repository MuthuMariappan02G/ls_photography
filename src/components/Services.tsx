import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCameraRetro, FaVideo, FaPhotoVideo, FaBaby, FaRegNewspaper, FaRegSmile, FaPaperPlane } from 'react-icons/fa';

const Services: React.FC = () => {
  const items = [
    {
      title: 'Wedding Photography',
      desc: 'Capture every precious moment of your special day from preparations to the final dance.',
      icon: <FaCameraRetro />
    },
    {
      title: 'Portrait Sessions',
      desc: 'Professional portrait photography for individuals, families, and groups.',
      icon: <FaPhotoVideo />
    },
    {
      title: 'Event Coverage',
      desc: 'Complete event photography services for birthdays, anniversaries, corporate events, and more.',
      icon: <FaRegSmile />
    },
    {
      title: 'Maternity & Newborn',
      desc: 'Tender and beautiful photography capturing the joy of expecting and early days of your newborn.',
      icon: <FaBaby />
    },
    {
      title: 'Videography Services',
      desc: 'Cinematic video production to complement your photography, creating stunning memories in motion.',
      icon: <FaVideo />
    },
    {
      title: 'Traditional Photography',
      desc: 'Expert photography for traditional ceremonies and cultural events with sensitivity.',
      icon: <FaRegNewspaper />
    },
    {
      title: 'Custom Packages',
      desc: 'Every event is unique. Contact us to create a customized photography package for your needs.',
      icon: <FaPaperPlane />
    },
  ];

  return (
    <section id="services" className="section py-5">
      <Container>
        <h2 className="mb-5 text-center">Our Services</h2>
        <p className="text-center mb-4 text-muted">
          Professional photography services tailored to capture your most precious moments
        </p>
        <Row className="g-4">
          {items.map((s) => (
            <Col md={4} key={s.title}>
              <Card className="h-100 text-center p-4 shadow-sm">
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
