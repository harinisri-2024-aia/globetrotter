import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DestinationDetail.css";

const DestinationDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const handleAddToTrip = () => {
    navigate("/trip-planner", { state: { city: name } });
  };

  return (
    <div className="destination-detail-page">
      <h1>{name}</h1>
      <p>Here you can see activities, tips, and add this destination to your trip.</p>
      <button onClick={handleAddToTrip}>Add to Trip Planner</button>
    </div>
  );
};

export default DestinationDetail;
