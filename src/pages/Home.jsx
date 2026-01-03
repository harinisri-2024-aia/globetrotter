import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Globetrotter</h1>
      <div className="home-buttons">
        <Link to="/auth">
          <button>Login / Sign Up</button>
        </Link>
        <Link to="/destinations">
          <button>Destinations</button>
        </Link>
        <Link
          to="/trip-details"
          state={{ destination: "Custom Trip" }}
        >
          <button>Trip Planner</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
