// src/components/About.tsx
import React from 'react';
import Navbar from './Navbar';

const About: React.FC = () => {
  return (
    <div>
        <Navbar></Navbar>
      <h1>About Page</h1>
      <p>Burada hakkımızda bilgiler olacak...</p>
    </div>
  );
}

export default About;
