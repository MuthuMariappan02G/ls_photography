import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

interface GalleryItem {
  title: string;
  images: string[];
  description: string;
}

const GalleryDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state as GalleryItem;

  if (!data) {
    return (
      <Container className="py-5 text-center">
        <h3>No Gallery Selected</h3>
        <Button variant="secondary" onClick={() => navigate("/")}>
          Go Home
        </Button>
      </Container>
    );
  }

  const { title, images, description } = data;

  return (
    <Container className="py-5">
      <Button
        variant="secondary"
        onClick={() => navigate(-1)}
        style={{ marginBottom: "30px" }}
      >
        ← Back
      </Button>

      <h2 className="text-center mb-3">{title}</h2>
      <p className="text-center text-muted mb-5">{description}</p>

      {/* Carousel-like horizontal scroll */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          paddingBottom: "10px",
        }}
      >
        {images.map((img, idx) => (
          <Card
            key={idx}
            style={{
              flex: "0 0 auto",
              width: "300px",
              border: "none",
              borderRadius: "10px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <Card.Img
              src={img}
              alt={`${title}-${idx}`}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Card>
        ))}
      </div>

      {/* Optional: Show all images stacked for smaller screens */}
      <Row className="mt-5 d-md-none">
        {images.map((img, idx) => (
          <Col key={idx} xs={12} className="mb-3">
            <Card>
              <Card.Img
                src={img}
                alt={`${title}-${idx}`}
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GalleryDetails;
