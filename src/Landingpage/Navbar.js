import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { AuthContext } from "../AuthContext"; // ✅ ADD THIS

const Navbar = () => {

  const { isLoggedIn, logout } = useContext(AuthContext); // ✅ AUTH STATE

  return (
    <>
      <style>{`
  body {
    font-family: "Poppins", sans-serif;
  }
  .navbar {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
  .navbar-brand {
    font-weight: 700;
    color: #1a4bff !important;
    font-size: 1.5rem;
  }
  .navbar-nav {
    margin: 0 auto;
    gap: 20px;
  }
  .nav-link {
    font-weight: 500;
    color: #000 !important;
    transition: all 0.3s ease;
    position: relative;
  }

  /* 🔥 ACTIVE NAV-LINK STYLE */
  .nav-link.active {
    color: #8A2BE2 !important;
    font-weight: 600;
    border-bottom: 2px solid #8A2BE2;
    padding-bottom: 3px;
  }

  .btn-custom {
    border: 1px solid #000;
    color: #000;
    border-radius: 25px;
    padding: 6px 20px;
    background: transparent;
    font-weight: 500;
    transition: all 0.3s ease;
  }
`}</style>

      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">

          <NavLink className="navbar-brand" to="/">
            HealthCare<span style={{ color: "#8A2BE2" }}>+</span>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">

            <ul className="navbar-nav text-center mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>

            {/* ✅ AUTH BUTTONS */}
            <div className="d-flex">
              {!isLoggedIn ? (
                <>
                  <NavLink to="/login" className="btn btn-custom me-2">
                    Login
                  </NavLink>
                  <NavLink to="/signup" className="btn btn-custom">
                    Signup
                  </NavLink>
                </>
              ) : (
                <button onClick={logout} className="btn btn-custom">
                  Logout
                </button>
              )}
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
