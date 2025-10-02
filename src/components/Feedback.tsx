import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaUserCircle, FaStar, FaRegStar } from 'react-icons/fa';

interface FeedbackItem {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

const sampleFeedback: FeedbackItem[] = [
  { id: 1, name: 'Alice', comment: 'Great service!', rating: 5 },
  { id: 2, name: 'Bob', comment: 'Good experience.', rating: 4 },
  { id: 3, name: 'Charlie', comment: 'Could be better.', rating: 3 },
  { id: 4, name: 'David', comment: 'Not satisfied.', rating: 2 },
  { id: 5, name: 'Eva', comment: 'Excellent!', rating: 5 },
  { id: 6, name: 'Frank', comment: 'Average service.', rating: 3 },
  { id: 7, name: 'Grace', comment: 'Loved it!', rating: 5 },
  { id: 8, name: 'Hannah', comment: 'Okay experience.', rating: 3 },
  { id: 9, name: 'Ian', comment: 'Very helpful.', rating: 4 },
  { id: 10, name: 'Jane', comment: 'Not impressed.', rating: 2 },
];

const Feedback: React.FC = () => {
  const cardsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(sampleFeedback.length / cardsPerPage);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <FaStar key={i} color="gold" /> : <FaRegStar key={i} color="gold" />);
    }
    return stars;
  };

  const currentFeedback = sampleFeedback.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">User Feedback</h2>
      <Row className="justify-content-center">
        {currentFeedback.map((item) => (
          <Col key={item.id} md={3}>
            <Card className="mb-3 text-center">
              <Card.Body>
                <FaUserCircle size={25} className="mb-2 text-primary" />
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.comment}</Card.Text>
                <div>{renderStars(item.rating)}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* Dots */}
      <div className="d-flex justify-content-center mt-3">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentPage(idx)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: idx === currentPage ? '#007bff' : '#ccc',
              display: 'inline-block',
              margin: '0 5px',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </Container>
  );
};

export default Feedback;
