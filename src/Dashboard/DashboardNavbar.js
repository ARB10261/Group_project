import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const DashboardNavbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <style>{`
        .dash-navbar {
          background: #0f172a;
          padding: 14px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          position: sticky;
          top: 0;
          z-index: 999;
        }

        .dash-brand {
          font-size: 1.6rem;
          font-weight: 700;
          color: #0ea5e9;
          text-decoration: none !important;
        }

        .dash-links {
          display: flex;
          gap: 28px;
          align-items: center;
        }

        .dash-links a {
          text-decoration: none;
          font-weight: 500;
          color: #e2e8f0;
          transition: 0.25s ease;
          position: relative;
        }

        .dash-links a:hover,
        .dash-links a.active {
          color: #0ea5e9;
        }

        .dash-links a::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background: #0ea5e9;
          transition: width 0.25s ease;
        }

        .dash-links a:hover::after,
        .dash-links a.active::after {
          width: 100%;
        }

        .logout-btn {
          background: #0ea5e9;
          padding: 8px 22px;
          border-radius: 25px;
          border: none;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .logout-btn:hover {
          background: #0284c7;
        }

        /* Small footer */
        .dashboard-footer {
          background: #0f172a;
          color: #94a3b8;
          text-align: center;
          padding: 14px;
          font-size: 0.85rem;
          margin-top: 40px;
        }

        .dashboard-footer span {
          color: #0ea5e9;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .dash-navbar {
            flex-direction: column;
            gap: 15px;
            padding: 15px;
          }

          .dash-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 18px;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="dash-navbar">
        <NavLink to="/" className="dash-brand">HealthCare+</NavLink>

        <div className="dash-links">
          <NavLink to="/patients">Patients</NavLink>
          <NavLink to="/doctors">Doctors</NavLink>
          <NavLink to="/appointments">Appointments</NavLink>
          <NavLink to="/records">Records</NavLink>
          <NavLink to="/reports">Reports</NavLink>
        </div>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </nav>

     
    </>
  );
};

export default DashboardNavbar;
