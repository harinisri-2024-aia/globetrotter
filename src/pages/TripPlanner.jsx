import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TripPlanner.css";

const TripPlanner = () => {
  const [tripName, setTripName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Trip "${tripName}" planned!`);
    setTripName("");
  };

  return (
    <div className="trip-container">
      <h1>Trip Planner</h1>
      <form onSubmit={handleSubmit} className="trip-form">
        <input
          type="text"
          placeholder="Enter Trip Name"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
          required
        />
        <button type="submit">Start Planning</button>
      </form>

      <Link to="/">
        <button className="back-button">Back to Home</button>
      </Link>
    </div>
  );
};

export default TripPlanner;
