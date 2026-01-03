import React from "react";
import "./TripDetails.css";

// Import images
import ParisImg from "../assets/paris.jpg";
import TokyoImg from "../assets/tokyo.jpg";
import NewYorkImg from "../assets/newyork.jpg";
import SydneyImg from "../assets/sydney.jpg";

const TripDetails = () => {
  return (
    <div className="trip-details-container">
      <h1>Explore Destinations</h1>
      <div className="trip-cards">
        <div className="trip-card">
          <img src={ParisImg} alt="Paris" />
          <h3>Paris</h3>
        </div>
        <div className="trip-card">
          <img src={TokyoImg} alt="Tokyo" />
          <h3>Tokyo</h3>
        </div>
        <div className="trip-card">
          <img src={NewYorkImg} alt="New York" />
          <h3>New York</h3>
        </div>
        <div className="trip-card">
          <img src={SydneyImg} alt="Sydney" />
          <h3>Sydney</h3>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
