import React, { useState } from 'react';
import { Carousel, Card, Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { FaUserCircle, FaStar, FaRegStar } from 'react-icons/fa';

interface FeedbackItem {
  id: number;
  name: string;
  comment: string;
  rating: number;
  category: string;
}

const initialFeedback: FeedbackItem[] = [
  { id: 1, name: 'Alice', comment: 'Great service!', rating: 5, category: 'Wedding' },
  { id: 2, name: 'Bob', comment: 'Good experience.', rating: 4, category: 'Birthday' },
  { id: 3, name: 'Charlie', comment: 'Could be better.', rating: 3, category: 'Wedding' },
];

const FeedbackApp: React.FC = () => {
  const [feedback, setFeedback] = useState<FeedbackItem[]>(initialFeedback);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    rating: 0,
    category: 'Wedding',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStarClick = (star: number) => {
    setFormData({ ...formData, rating: star });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFeedback: FeedbackItem = {
      id: feedback.length + 1,
      ...formData,
      rating: formData.rating,
    };
    setFeedback([...feedback, newFeedback]);
    setFormData({ name: '', comment: '', rating: 0, category: 'Wedding' });
    setShowModal(false);
  };

  const cardsPerSlide = 3;
  const slides: FeedbackItem[][] = [];
  for (let i = 0; i < feedback.length; i += cardsPerSlide) {
    slides.push(feedback.slice(i, i + cardsPerSlide));
  }

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) =>
      i < rating ? <FaStar key={i} color="gold" /> : <FaRegStar key={i} color="gold" />
    );

  return (
    <Container className="my-5">
      <Row className="align-items-center mb-4">
        <Col>
          <h2>Client Feedback</h2>
          <p className="text-muted">Share your experience with us</p>
        </Col>
        <Col className="text-end">
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Give Feedback
          </Button>
        </Col>
      </Row>

      {feedback.length > 0 ? (
        <Carousel indicators={false}>
          {slides.map((slide, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {slide.map((item) => (
                  <Col key={item.id} md={4}>
                    <Card className="text-center mb-3 shadow-sm">
                      <Card.Body>
                        <FaUserCircle size={40} className="mb-2 text-primary" />
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle className="mb-1 text-muted">
                          {item.category}
                        </Card.Subtitle>
                        <Card.Text>{item.comment}</Card.Text>
                        <div>{renderStars(item.rating)}</div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p className="text-center text-muted">No feedback yet. Be the first to share!</p>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Your Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Event Type</Form.Label>
              <Form.Select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Corporate</option>
                <option>Portrait</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Feedback</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                placeholder="Write your feedback here..."
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <div>
                {Array.from({ length: 5 }, (_, i) => {
                  const starNum = i + 1;
                  return (
                    <span
                      key={i}
                      onClick={() => handleStarClick(starNum)}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1.5rem',
                        marginRight: '5px',
                      }}
                    >
                      {starNum <= formData.rating ? (
                        <FaStar color="gold" />
                      ) : (
                        <FaRegStar color="gold" />
                      )}
                    </span>
                  );
                })}
              </div>
            </Form.Group>

            <Button type="submit" variant="success" className="w-100">
              Submit Feedback
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default FeedbackApp;
