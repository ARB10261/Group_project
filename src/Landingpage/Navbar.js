import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <>
      <style>{`
        body {
          font-family: "Poppins", sans-serif;
          background: linear-gradient(180deg, #020617, #0f172a);
          color: #e5e7eb;
        }

        .navbar {
          background: rgba(15, 23, 42, 0.96);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 14px rgba(15, 23, 42, 0.6);
        }

        .navbar .container {
          max-width: 1140px;
        }

        .navbar-brand {
          font-weight: 700;
          color: #0ea5e9 !important;
          font-size: 1.5rem;
        }

        .navbar-nav {
          gap: 20px; /* Removed margin: 0 auto */
        }

        .nav-item, .nav-link {
          position: relative;
          z-index: 10; /* Prevent overlapping clickable area */
        }

        .nav-link {
          font-weight: 500;
          color: #e5e7eb !important;
          transition: 0.25s;
          padding-bottom: 3px;
        }

        .nav-link:hover {
          color: #0ea5e9 !important;
        }

        .nav-link.active {
          color: #0ea5e9 !important;
          font-weight: 600;
        }

        .btn-custom {
          border-radius: 999px;
          padding: 6px 20px;
          font-weight: 500;
          border: 1px solid #1f2937;
          color: #f9fafb;
          background: #020617;
          transition: all 0.25s ease;
          font-size: 0.9rem;
          white-space: nowrap;
        }

        .btn-custom:hover {
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          color: #ffffff;
        }

        .navbar-toggler-icon {
          filter: invert(90%);
        }

        @media (max-width: 992px) {
          .auth-buttons {
            display: flex;
            justify-content: center;
            gap: 10px;
            padding: 10px 0;
          }

          .auth-buttons .btn-custom {
            padding: 6px 14px !important;
            width: auto !important;
            font-size: 0.85rem;
          }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            HealthCare<span>+</span>
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

            <div className="auth-buttons d-flex">
              {!isLoggedIn ? (
                <>
                  <NavLink to="/login" className="btn btn-custom">Login</NavLink>
                  <NavLink to="/signup" className="btn btn-custom">Signup</NavLink>
                </>
              ) : (
                <button onClick={logout} className="btn btn-custom">Logout</button>
              )}
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
