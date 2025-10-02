import React, { useState, useEffect } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

// Wedding Images
import w1 from "../assets/images/gallery/wedding/w1.jpg"
import w2 from "../assets/images/gallery/wedding/w2.jpg"
import w3 from "../assets/images/gallery/wedding/w3.jpg"
import w4 from "../assets/images/gallery/wedding/w4.jpg"
import w5 from "../assets/images/gallery/wedding/w5.jpg"
import w6 from "../assets/images/gallery/wedding/w6.jpg"
import w7 from "../assets/images/gallery/wedding/w7.jpg"

// Maternity Images
import mat1 from "../assets/images/gallery/maternity/m1.jpg"
import mat2 from "../assets/images/gallery/maternity/m2.jpg"
import mat3 from "../assets/images/gallery/maternity/m3.jpg"
import mat4 from "../assets/images/gallery/maternity/m4.jpg"

// NewBorn Images
import nb1 from "../assets/images/gallery/newborn/nb1.jpg"
import nb2 from "../assets/images/gallery/newborn/nb2.jpg"
import nb3 from "../assets/images/gallery/newborn/nb3.jpg"
import nb4 from "../assets/images/gallery/newborn/nb4.jpg"

// Birthday Images
import bday1 from "../assets/images/gallery/birthday/bday1.jpg"
import bday2 from "../assets/images/gallery/birthday/bday2.jpg"
import bday3 from "../assets/images/gallery/birthday/bday3.jpg"

// CakeSmash Images
import cs1 from "../assets/images/gallery/cakesmash/cs1.jpg"
import cs2 from "../assets/images/gallery/cakesmash/cs2.jpg"
import cs3 from "../assets/images/gallery/cakesmash/cs3.jpg"

// Family Images
import fam1 from "../assets/images/gallery/family/Fam1.jpg"
import fam2 from "../assets/images/gallery/family/Fam2.jpg"
import fam3 from "../assets/images/gallery/family/Fam3.jpg"
import fam4 from "../assets/images/gallery/family/Fam4.jpg"
import fam5 from "../assets/images/gallery/family/Fam5.jpg"
import fam6 from "../assets/images/gallery/family/Fam6.jpg"

type Category = {
  id: number
  title: string
  images: string[]
}

const categories: Category[] = [
  { id: 1, title: "Wedding", images: [w1, w2, w3, w4, w5, w6, w7] },
  { id: 2, title: "Maternity", images: [mat1, mat2, mat3, mat4] },
  { id: 3, title: "Newborn", images: [nb1, nb2, nb3, nb4] },
  { id: 4, title: "Birthday", images: [bday1, bday2, bday3] },
  { id: 5, title: "Cake Smash", images: [cs1, cs2, cs3] },
  { id: 6, title: "Family", images: [fam1, fam2, fam3, fam4, fam5, fam6] },
]

const Gallery: React.FC = () => {
  const [indexes, setIndexes] = useState<number[]>(categories.map(() => 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((idx, i) => (idx + 1) % categories[i].images.length)
      )
    }, 3000) // change every 3s

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="gallery"
      style={{
        padding: "60px 0",
        backgroundColor: "#fdf6f0", // soft pastel
      }}
    >
      <Container>
        <h2 className="mb-4 text-center">LS Gallery</h2>
        <Row className="g-4">
          {categories.map((cat, i) => (
            <Col key={cat.id} md={4}>
              <Card
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "none",
                  transition: "transform 0.3s ease-in-out",
                  height: "350px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {/* dynamic image slideshow */}
                <Card.Img
                  variant="top"
                  src={cat.images[indexes[i]]}
                  alt={cat.title}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    transition: "opacity 0.8s ease-in-out",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0, 0, 0, 0.6)",
                    opacity: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "opacity 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.opacity = "1"
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.opacity = "0"
                  }}
                >
                  <h5 style={{ color: "#fff", marginBottom: "10px" }}>
                    {cat.title}
                  </h5>
                  <Button variant="light" size="sm">
                    View Details
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Gallery
