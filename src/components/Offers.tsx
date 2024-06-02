// src/components/Offers.tsx
//
import React from 'react';
import Navbar from './Navbar';

const Offers: React.FC = () => {
  return (
    <div>
         <div className="container-fluid text-center p-5">
        <div className="row">
          <Navbar />
        </div>
      </div>
      <h1>Offers Page</h1>
      <p>Burada kampanyalar olacak...</p>
    </div>
  );
}

export default Offers;
