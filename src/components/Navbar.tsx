// src/components/Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../cinebilet_logo.png';
import '../App.css'; // CSS dosyasını import ettiğinizden emin olun.

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-sm custom-navbar fixed-top p-3">
      <div className="container">
        <div className="col">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar-brand text-white active' : 'navbar-brand text-white'
            }
            to="/home"
          >
            <button type="button" className="btn btn-outlined-primary">
              Anasayfa
            </button>
          </NavLink>
        </div>
        <div className="col">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar-brand text-white active' : 'navbar-brand text-white'
            }
            to="/places"
          >
            <button type="button" className="btn btn-outlined-primary">
              Sinemalarımız
            </button>
          </NavLink>
        </div>
        <div className="col">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Avatar Logo" style={{ width: '100px' }} className="rounded-pill" />
          </a>
        </div>
        <div className="col">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar-brand text-white active' : 'navbar-brand text-white'
            }
            to="/about"
          >
            <button type="button" className="btn btn-outlined-primary">
              Hakkımızda
            </button>
          </NavLink>
        </div>
        <div className="col">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar-brand text-white active' : 'navbar-brand text-white'
            }
            to="/offers"
          >
            <button type="button" className="btn btn-outlined-primary">
              Kampanyalar
            </button>
          </NavLink>
        </div>
        <a className="navbar-brand text-white" href="#">
          <button type="button" className="btn btn-outline-primary">
            Giriş Yap
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
