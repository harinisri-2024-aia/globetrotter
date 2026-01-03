import React from "react";

const DestinationCard = ({ image, name, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h3 className="card-title">{name}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default DestinationCard;
