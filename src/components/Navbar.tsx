// src/components/NavBar.tsx
import React from 'react';
import logo from '../logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-danger fixed-top p-3">
      <div className="container">
        <div className="col">
          <a className="navbar-brand hover-overlay hover-zoom hover-shadow ripple text-white" href="#">
            <button type="button" className="btn btn-outlined-primary">Anasayfa</button>
          </a>
        </div>
        <div className="col">
          <a className="navbar-brand hover-overlay hover-zoom hover-shadow ripple text-white" href="#">
            <button type="button" className="btn btn-outlined-primary">Sinemalarımız</button>
          </a>
        </div>
        <div className="col">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Avatar Logo" style={{ width: '40px' }} className="rounded-pill" />
          </a>
        </div>
        <div className="col">
          <a className="navbar-brand text-white" href="#">
            <button type="button" className="btn btn-outlined-primary">Hakkımızda</button>
          </a>
        </div>
        <div className="col">
          <a className="navbar-brand text-white" href="#">
            <button type="button" className="btn btn-outlined-primary">Kampanyalar</button>
          </a>
        </div>
        <a className="navbar-brand text-white" href="#">
          <button type="button" className="btn btn-outline-primary">Giriş Yap</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
