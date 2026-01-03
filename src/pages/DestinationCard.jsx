import React from 'react';
import './DestinationCard.css';

export default function DestinationCard({ title, description, image }) {
  return (
    <div className="destination-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
