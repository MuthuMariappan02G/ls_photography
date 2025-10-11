import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavbarTop";
import Home from "./pages/Home";
import Gallery from "./components/Gallery";
import GalleryDetails from "./components/GalleryDetails";
import Services from "./components/Services";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import BookingPage from "./components/Booking";

const App: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery-details" element={<GalleryDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
