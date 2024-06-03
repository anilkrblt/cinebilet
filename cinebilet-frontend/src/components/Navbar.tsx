// src/components/Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../cinebilet_logo.png";
import { useNavigate } from "react-router-dom";
import "../App.css"; // CSS dosyasını import ettiğinizden emin olun

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-sm custom-navbar fixed-top p-3 border border-5 rounded-3">
      <div className="container">
        <div className="col">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "navbar-brand text-white active"
                : "navbar-brand text-white"
            }
            to="/home"
          >
            <button type="button" className="btn btn-outlined-primary fs-6">
              <span className="fs-3">Ana Sayfa</span>
            </button>
          </NavLink>
        </div>
        <div className="col">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "navbar-brand text-white active"
                : "navbar-brand text-white"
            }
            to="/places"
          >
            <button type="button" className="btn btn-outlined-primary fs-3">
              Sinemalarımız
            </button>
          </NavLink>
        </div>
        <div className="col">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Avatar Logo"
              style={{ width: "100px" }}
              className="rounded-pill"
            />
          </a>
        </div>
        <div className="col">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "navbar-brand text-white active"
                : "navbar-brand text-white"
            }
            to="/about"
          >
            <button type="button" className="btn btn-outlined-primary fs-3">
              Hakkımızda
            </button>
          </NavLink>
        </div>
        <div className="col">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "navbar-brand text-white active"
                : "navbar-brand text-white"
            }
            to="/offers"
          >
            <button type="button" className="btn btn-outlined-primary fs-3">
              Kampanyalar
            </button>
          </NavLink>
        </div>
        <a className="navbar-brand text-white " href="#">
          <button
            onClick={handleLoginClick}
            type="button"
            className="btn btn-danger fs-3"
          >
            Giriş Yap
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
