import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  const { userRole } = useContext(AuthContext);

  const title = userRole ? `${userRole} Dashboard` : "Dashboard";

  const renderContent = () => {
    const cardClass = "dash-card";

    switch (userRole) {
      case "Admin":
        return (
          <>
            <p>As an Admin, you can manage the entire hospital system.</p>

            <Row>
              <Col md={4} sm={6} xs={12}>
                <Link to="/patients" className={cardClass}>👥 Patient Management</Link>
              </Col>

              <Col md={4} sm={6} xs={12}>
                <Link to="/doctors" className={cardClass}>👨‍⚕️ Doctor Management</Link>
              </Col>

              <Col md={4} sm={6} xs={12}>
                <Link to="/appointments" className={cardClass}>📅 Appointment System</Link>
              </Col>

              <Col md={4} sm={6} xs={12}>
                <Link to="/records" className={cardClass}>📋 Medical Records</Link>
              </Col>

              <Col md={4} sm={6} xs={12}>
                <Link to="/reports" className={cardClass}>📊 Reports & Analytics</Link>
              </Col>
            </Row>
          </>
        );

      case "Doctors":
        return (
          <>
            <p>As a Doctor, you can see your patients and appointments.</p>

            <Row>
              <Col md={4} sm={6} xs={12}>
                <Link to="/appointments" className={cardClass}>📅 My Appointments</Link>
              </Col>

              <Col md={4} sm={6} xs={12}>
                <Link to="/records" className={cardClass}>📋 Patient Medical Records</Link>
              </Col>

              <Col md={4} sm={6} xs={12}>
                <Link to="/patients" className={cardClass}>👥 My Patients</Link>
              </Col>
            </Row>
          </>
        );

      case "Reception":
        return (
          <>
            <p>As Reception, you can register patients and manage appointments.</p>

            <Row>
              <Col md={6} sm={12}>
                <Link to="/patients" className={cardClass}>➕ Register / View Patients</Link>
              </Col>

              <Col md={6} sm={12}>
                <Link to="/appointments" className={cardClass}>📅 Book / Reschedule Appointments</Link>
              </Col>
            </Row>
          </>
        );

      case "Nurse":
        return (
          <>
            <p>As Nurse, you can assist doctors with patients and records.</p>

            <Row>
              <Col md={6} sm={12}>
                <Link to="/patients" className={cardClass}>👥 Patient List</Link>
              </Col>

              <Col md={6} sm={12}>
                <Link to="/records" className={cardClass}>📋 Medical Records</Link>
              </Col>
            </Row>
          </>
        );

      default:
        return <p>Select a module from the top menu to get started.</p>;
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

        .dash-card {
          background: #0f172a;
          color: #e5e7eb;
          padding: 18px 20px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 500;
          box-shadow: 0 4px 12px rgba(15,23,42,0.4);
          transition: 0.25s ease;
          display: block;
          margin-bottom: 20px;
          text-align: center;
        }

        .dash-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(15,23,42,0.7);
          color: #0ea5e9;
        }
      `}</style>

      <Container fluid className="dashboard-wrapper">
        <h2 className="dashboard-title">{title}</h2>
        {renderContent()}
      </Container>
    </>
  );
}
