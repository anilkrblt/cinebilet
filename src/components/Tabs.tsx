// src/components/Tabs.tsx
import React from 'react';

const Tabs: React.FC = () => {
  return (
    <ul className="nav nav-tabs" role="tablist">
      <li className="nav-item">
        <a className="nav-link active" data-bs-toggle="tab" href="#home">Vizyondakiler</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-bs-toggle="tab" href="#menu1">Gelecek Filmler</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Türler</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Korku</a></li>
          <li><a className="dropdown-item" href="#">Aksiyon</a></li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Diller</a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Türkçe</a></li>
          <li><a className="dropdown-item" href="#">İngilizce</a></li>
        </ul>
      </li>
    </ul>
  );
}

export default Tabs;
