// src/pages/Places.tsx
import React from "react";
import MapComponent from "../components/MapComponent";
import Navbar from "./Navbar";

const Places: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="container-fluid text-center p-5">
        <div className="row">
          <Navbar />
        </div>
      </div>
      <h1>Sinemalarımız</h1>
      <MapComponent />
    </div>
  );
};

export default Places;
