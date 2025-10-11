import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    location: "",
    service: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted, navigate]);

  return (
    <div
      style={{
        minHeight: "91vh",
        backgroundColor: "#f4f4f4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            width: "100%",
            maxWidth: "650px",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
            Book Your Session
          </h3>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "15px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1 }}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginTop: "5px",
                }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginTop: "5px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "15px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1 }}>
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +1 9876543210"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginTop: "5px",
                }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label>Location:</label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="City or venue location"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginTop: "5px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "15px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1 }}>
              <label>Service Type:</label>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginTop: "5px",
                }}
              >
                <option value="">Select a service</option>
                <option value="Wedding">Wedding</option>
                <option value="Portrait">Portrait</option>
                <option value="Event">Event</option>
                <option value="Product">Product</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div style={{ flex: 1 }}>
              <label>Preferred Date:</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginTop: "5px",
                }}
              />
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#000",
              color: "#ffcc00",
              fontWeight: "600",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#222")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#000")
            }
          >
            Confirm Booking
          </button>
        </form>
      ) : (
        <div
          style={{
            textAlign: "center",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>✅ Booking Completed!</h3>
          <p>
            Thank you, <b>{formData.name}</b>! We’ll contact you soon at your{" "} 
            <b>{formData.email} </b>.
          </p>
          <p>Redirecting to the main page...</p>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
