// src/pages/Places.tsx
import React from 'react';
import MapComponent from '../components/MapComponent';
import Navbar from './Navbar';

const Places: React.FC = () => {
  return (
    <div className="container mt-5">
      <Navbar />
      <h1>Sinemalarımız</h1>
      <MapComponent />
    </div>
  );
}

export default Places;
