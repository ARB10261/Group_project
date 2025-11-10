import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  return (
    <>
      {/* ✅ Internal CSS using style tag */}
      <style>
        {`
          body {
            font-family: "Poppins", sans-serif;
          }

          /* ✅ Navbar Styling */
          .navbar {
            background-color: #fff;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          }

          .navbar-brand {
            font-weight: 700;
            color: #8A2BE2 !important;
            font-size: 1.5rem;
          }

          /* ✅ Center Menu */
          .navbar-nav {
            margin: 0 auto;
            gap: 20px;
          }

          /* ✅ Nav links */
          .nav-link {
            font-weight: 500;
            color: #000 !important;
            transition: all 0.3s ease;
            position: relative;
          }

          .nav-link:hover {
            color: #8A2BE2 !important;
          }

          .nav-link.active {
            color: #8A2BE2 !important;
            font-weight: 600;
          }

          /* ✅ Buttons (Right Side) */
          .btn-custom {
            border: 1px solid #000;
            color: #000;
            border-radius: 25px;
            padding: 6px 20px;
            background: transparent;
            font-weight: 500;
            transition: all 0.3s ease;
          }

          .btn-custom:hover,
          .btn-custom:active {
            background-color: #000;
            color: #fff;
            border-color: #000;
          }

          .navbar-toggler {
            border-color: rgba(0, 0, 0, 0.1);
          }

          .dropdown-menu {
            border-radius: 10px;
            border: 1px solid #eee;
          }

          .dropdown-item:hover {
            background-color: #f5f0ff;
            color: #8A2BE2;
          }
        `}
      </style>

      {/* ✅ Navbar */}
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          {/* ✅ Brand Name */}
          <a className="navbar-brand" href="#">
            HealthCare<span style={{ color: "#8A2BE2" }}>+</span>
          </a>

          {/* ✅ Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* ✅ Navbar Menu */}
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            {/* ✅ Center Menu */}
            <ul className="navbar-nav text-center mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>

              {/* ✅ Departments Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="departmentsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Departments
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="departmentsDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Hospital Administrators
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Doctors
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Reception Staff
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Nurses
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            {/* ✅ Right-aligned Buttons */}
            <div className="d-flex">
              <a href="#" className="btn btn-custom me-2">
                Login
              </a>
              <a href="#" className="btn btn-custom">
                Signup
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
