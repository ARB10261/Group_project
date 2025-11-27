import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

const Appointments = () => {
  const [showForm, setShowForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "Rajesh",
      doctor: "Dr. Ramesh",
      dept: "Cardiology",
      date: "2025-02-12",
      time: "10:30",
      status: "Pending",
    },
  ]);

  const [newAppointment, setNewAppointment] = useState({
    patient: "",
    doctor: "",
    dept: "",
    date: "",
    time: "",
    status: "Pending",
  });

  const handleSave = () => {
    const { patient, doctor, dept, date, time } = newAppointment;
    if (!patient || !doctor || !dept || !date || !time) return;

    if (isEdit) {
      setAppointments(
        appointments.map((a) =>
          a.id === editId ? { ...a, ...newAppointment } : a
        )
      );
    } else {
      setAppointments([
        ...appointments,
        { id: Date.now(), ...newAppointment },
      ]);
    }

    setShowForm(false);
    setIsEdit(false);
    setNewAppointment({
      patient: "",
      doctor: "",
      dept: "",
      date: "",
      time: "",
      status: "Pending",
    });
  };

  const handleEdit = (appointment) => {
    setShowForm(true);
    setIsEdit(true);
    setEditId(appointment.id);
    setNewAppointment({ ...appointment });
  };

  const handleDelete = (id) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  return (
    <>
      <style>{`
        .page-container { padding: 30px; }
        .header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .title { font-size: 2rem; font-weight: 700; color: #0ea5e9; }
        .btn-add { background: #0ea5e9; color: white; padding: 10px 18px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; }
        
        .status-badge { padding: 6px 12px; border-radius: 14px; font-size: 0.85rem; }
        .pending { background: #facc15; }
        .confirmed { background: #4ade80; }
        .cancelled { background: #f87171; }

        /* POPUP */
        .popup-overlay { position: fixed; inset: 0; display: flex; justify-content: center; align-items: center; background: rgba(0,0,0,0.45); }
        .popup-box { width: 420px; background: #fff; padding: 25px; border-radius: 10px; animation: zoom 0.3s ease; }
        @keyframes zoom { from { transform: scale(0.6); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .popup-box input, .popup-box select { width: 100%; margin-bottom: 12px; padding: 12px; border-radius: 6px; border: 1px solid #cbd5e1; }
        .popup-actions { display: flex; justify-content: flex-end; gap: 10px; }
        .cancel-btn { background: #475569; padding: 8px 16px; border-radius: 6px; border: none; color: #fff; }
        .save-btn { background: #0ea5e9; padding: 8px 16px; border-radius: 6px; border: none; color: #fff; }

        /* RESPONSIVE BUTTON FIX */
        @media (max-width: 768px) {
          .action-buttons {
            flex-direction: column !important;
            gap: 6px !important;
          }
          .action-buttons button {
            width: 100%;
          }
        }
      `}</style>

      <div className="page-container">

        <div className="header-row">
          <h2 className="title">Appointment System</h2>
          <button
            className="btn-add"
            onClick={() => {
              setShowForm(true);
              setIsEdit(false);
              setNewAppointment({
                patient: "",
                doctor: "",
                dept: "",
                date: "",
                time: "",
                status: "Pending",
              });
            }}
          >
            📅 Book Appointment
          </button>
        </div>

        {/* Responsive Table */}
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th style={{ minWidth: "160px" }}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((a) => (
                <tr key={a.id}>
                  <td>{a.patient}</td>
                  <td>{a.doctor}</td>
                  <td>{a.dept}</td>
                  <td>{a.date}</td>
                  <td>{a.time}</td>
                  <td>
                    <span className={`status-badge ${a.status.toLowerCase()}`}>
                      {a.status}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex gap-2 action-buttons">
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => handleEdit(a)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => handleDelete(a.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </Table>
        </div>

        {/* Popup Form */}
        {showForm && (
          <div className="popup-overlay">
            <div className="popup-box">
              <h3 style={{ marginBottom: "10px" }}>
                {isEdit ? "Edit Appointment" : "Book Appointment"}
              </h3>

              <input
                type="text"
                placeholder="Patient Name"
                value={newAppointment.patient}
                onChange={(e) =>
                  setNewAppointment({ ...newAppointment, patient: e.target.value })
                }
              />

              <select
                value={newAppointment.doctor}
                onChange={(e) =>
                  setNewAppointment({ ...newAppointment, doctor: e.target.value })
                }
              >
                <option value="">Select Doctor</option>
                <option>Dr. Ramesh</option>
                <option>Dr. Priya</option>
                <option>Dr. Patel</option>
              </select>

              <select
                value={newAppointment.dept}
                onChange={(e) =>
                  setNewAppointment({ ...newAppointment, dept: e.target.value })
                }
              >
                <option value="">Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Dental</option>
                <option>Orthopedic</option>
              </select>

              <input
                type="date"
                value={newAppointment.date}
                onChange={(e) =>
                  setNewAppointment({ ...newAppointment, date: e.target.value })
                }
              />

              <input
                type="time"
                value={newAppointment.time}
                onChange={(e) =>
                  setNewAppointment({ ...newAppointment, time: e.target.value })
                }
              />

              <select
                value={newAppointment.status}
                onChange={(e) =>
                  setNewAppointment({ ...newAppointment, status: e.target.value })
                }
              >
                <option>Pending</option>
                <option>Confirmed</option>
                <option>Cancelled</option>
              </select>

              <div className="popup-actions">
                <button
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button className="save-btn" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Appointments;
