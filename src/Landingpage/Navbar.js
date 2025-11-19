import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { AuthContext } from "../AuthContext"; // ✅ AUTH CONTEXT

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext); // ✅ AUTH STATE

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
          letter-spacing: 0.03em;
        }

        .navbar-brand span {
          color: #0284c7;
        }

        .navbar-nav {
          margin: 0 auto;
          gap: 20px;
        }

        .nav-link {
          font-weight: 500;
          color: #e5e7eb !important;
          transition: all 0.25s ease;
          position: relative;
          padding-bottom: 3px;
          font-size: 0.95rem;
        }

        /* Hover underline + color */
        .nav-link:hover {
          color: #0ea5e9 !important;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 2px;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          transition: width 0.25s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* ACTIVE NAV-LINK STYLE */
        .nav-link.active {
          color: #0ea5e9 !important;
          font-weight: 600;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .btn-custom {
          border-radius: 999px;
          padding: 6px 20px;
          font-weight: 500;
          border: 1px solid #1f2937;
          color: #f9fafb;
          background: #020617;
          transition: all 0.25s ease;
          box-shadow: 0 4px 10px rgba(15, 23, 42, 0.85);
          font-size: 0.9rem;
        }

        .btn-custom:hover {
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 8px 18px rgba(2, 132, 199, 0.45);
          transform: translateY(-1px);
        }

        .btn-custom:active {
          transform: translateY(0);
          box-shadow: 0 4px 10px rgba(2, 132, 199, 0.3);
        }

        .navbar-toggler {
          border-color: #1f2937;
        }

        .navbar-toggler-icon {
          filter: invert(90%);
        }

        @media (max-width: 992px) {
          .navbar {
            background: #020617;
          }

          .navbar-nav {
            gap: 10px;
          }

          .nav-link {
            padding-top: 6px;
            padding-bottom: 6px;
          }

          .btn-custom {
            margin-top: 8px;
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
