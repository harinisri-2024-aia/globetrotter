import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import TripPlanner from "./pages/TripPlanner";
import Auth from "./pages/Auth";
import TripDetails from "./pages/TripDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/trip-planner" element={<TripPlanner />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/trip-details" element={<TripDetails />} />
    </Routes>
  );
}

export default App;
