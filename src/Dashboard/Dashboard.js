import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { userRole } = useContext(AuthContext);

  const title = userRole ? `${userRole} Dashboard` : "Dashboard";

  const renderContent = () => {
    switch (userRole) {
      case "Admin":
        return (
          <>
            <p>As an Admin, you can manage the entire hospital system.</p>
            <div className="dash-grid">
              <Link to="/patients" className="dash-card">👥 Patient Management</Link>
              <Link to="/doctors" className="dash-card">👨‍⚕️ Doctor Management</Link>
              <Link to="/appointments" className="dash-card">📅 Appointment System</Link>
              <Link to="/records" className="dash-card">📋 Medical Records</Link>
              <Link to="/reports" className="dash-card">📊 Reports & Analytics</Link>
            </div>
          </>
        );

      case "Doctors":
        return (
          <>
            <p>As a Doctor, you can see your patients and appointments.</p>
            <div className="dash-grid">
              <Link to="/appointments" className="dash-card">📅 My Appointments</Link>
              <Link to="/records" className="dash-card">📋 Patient Medical Records</Link>
              <Link to="/patients" className="dash-card">👥 My Patients</Link>
            </div>
          </>
        );

      case "Reception":
        return (
          <>
            <p>As Reception, you can register patients and manage appointments.</p>
            <div className="dash-grid">
              <Link to="/patients" className="dash-card">➕ Register / View Patients</Link>
              <Link to="/appointments" className="dash-card">📅 Book / Reschedule Appointments</Link>
            </div>
          </>
        );

      case "Nurse":
        return (
          <>
            <p>As Nurse, you can assist doctors with patients and records.</p>
            <div className="dash-grid">
              <Link to="/patients" className="dash-card">👥 Patient List</Link>
              <Link to="/records" className="dash-card">📋 Medical Records</Link>
            </div>
          </>
        );

      default:
        return (
          <p>Select a module from the top menu to get started.</p>
        );
    }
  };

  return (
    <>
      <style>{`
        .dashboard-wrapper {
          padding: 30px 40px;
        }

        .dashboard-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .dash-grid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .dash-card {
          background: #0f172a;
          color: #e5e7eb;
          padding: 18px 20px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 500;
          box-shadow: 0 4px 12px rgba(15,23,42,0.4);
          transition: 0.25s ease;
        }

        .dash-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(15,23,42,0.7);
          color: #0ea5e9;
        }
      `}</style>

      <div className="dashboard-wrapper">
        <h2 className="dashboard-title">{title}</h2>
        {renderContent()}
      </div>
    </>
  );
}
