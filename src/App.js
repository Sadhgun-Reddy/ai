import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs"; // Import the AboutUsPage component
import HomePage from "./components/HomePage"; // Replace this with your actual home page component
import PricingSection from "./components/PricingSection";

function App() {
  return (
    <Router>
      <Navbar /> {/* Display the Navbar on all pages */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pricing-section" element={<PricingSection/>}/>
      </Routes>
    </Router>
  );
}

export default App;
