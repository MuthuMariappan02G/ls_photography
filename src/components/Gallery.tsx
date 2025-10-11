import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import w1 from "../assets/images/gallery/wedding/w1.jpg";
import w2 from "../assets/images/gallery/wedding/w2.jpg";
import mat1 from "../assets/images/gallery/maternity/m1.jpg";
import mat2 from "../assets/images/gallery/maternity/m2.jpg";
import nb1 from "../assets/images/gallery/newborn/nb1.jpg";
import nb2 from "../assets/images/gallery/newborn/nb2.jpg";
import bday1 from "../assets/images/gallery/birthday/bday1.jpg";
import bday2 from "../assets/images/gallery/birthday/bday2.jpg";
import cs1 from "../assets/images/gallery/cakesmash/cs1.jpg";
import cs2 from "../assets/images/gallery/cakesmash/cs2.jpg";
import fam1 from "../assets/images/gallery/family/Fam1.jpg";
import fam2 from "../assets/images/gallery/family/Fam2.jpg";

const categories = [
  {
    id: 1,
    title: "Wedding",
    images: [w1, w2],
    description: "Capture every precious moment of your wedding day.",
  },
  {
    id: 2,
    title: "Maternity",
    images: [mat1, mat2],
    description: "Beautiful maternity moments captured perfectly.",
  },
  {
    id: 3,
    title: "Newborn",
    images: [nb1, nb2],
    description: "Precious early days of your newborn captured beautifully.",
  },
  {
    id: 4,
    title: "Birthday",
    images: [bday1, bday2],
    description: "Celebrate birthdays with memorable photography.",
  },
  {
    id: 5,
    title: "Cake Smash",
    images: [cs1, cs2],
    description: "Fun and creative cake smash photography.",
  },
  {
    id: 6,
    title: "Family",
    images: [fam1, fam2],
    description: "Family moments captured for a lifetime.",
  },
];


const Gallery: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section
      id="gallery"
      style={{
        padding: "60px 0",
        backgroundColor: "#fdf6f0",
      }}
    >
      <Container>
        <h2 className="mb-5 text-center">LS Gallery</h2>
        <Row className="g-4">
          {categories.map((cat) => (
            <Col key={cat.id} md={4}>
              <Card
                style={{
                  position: "relative",
                  overflow: "hidden",
                  border: "none",
                  cursor: "pointer",
                  height: "350px",
                  transform: hoveredId === cat.id ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={() => setHoveredId(cat.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Card.Img
                  src={cat.images[0]}
                  alt={cat.title}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    filter: hoveredId === cat.id ? "brightness(0.7)" : "brightness(1)",
                    transition: "all 0.3s ease-in-out",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    opacity: hoveredId === cat.id ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <h5 style={{ color: "#fff", marginBottom: "10px" }}>{cat.title}</h5>
                  <Button
                    variant="light"
                    size="sm"
                    onClick={() =>
                      navigate("/gallery-details", { state: { ...cat } })
                    }
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
