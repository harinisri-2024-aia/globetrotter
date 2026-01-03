import React from "react";
import DestinationCard from "../components/DestinationCard";

// Import images
import ParisImg from "../assets/paris.jpg";
import TokyoImg from "../assets/tokyo.jpg";
import NewYorkImg from "../assets/newyork.jpg";
import SydneyImg from "../assets/sydney.jpg";

const Destinations = () => {
  const destinations = [
    { name: "Paris", image: ParisImg, description: "The city of love and lights." },
    { name: "Tokyo", image: TokyoImg, description: "A vibrant blend of tradition and technology." },
    { name: "New York", image: NewYorkImg, description: "The city that never sleeps." },
    { name: "Sydney", image: SydneyImg, description: "Famous for its stunning harbor and Opera House." }
  ];

  return (
    <div className="destinations-container">
      {destinations.map(dest => (
        <DestinationCard
          key={dest.name}
          image={dest.image}
          name={dest.name}
          description={dest.description}
        />
      ))}
    </div>
  );
};

export default Destinations;
