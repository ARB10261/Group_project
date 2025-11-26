import React, { useState } from "react";

const Patients = () => {
  const [showForm, setShowForm] = useState(false);
  const [patients, setPatients] = useState([
    { id: 1, name: "Rohit Sharma", age: 32, mobile: "9876543210" },
    { id: 2, name: "Priya Nair", age: 27, mobile: "9123456789" },
  ]);

  const [newPatient, setNewPatient] = useState({ name: "", age: "", mobile: "" });

  const [editingId, setEditingId] = useState(null);
  const [editPatient, setEditPatient] = useState({
    name: "",
    age: "",
    mobile: "",
  });

  const handleAddPatient = () => {
    if (!newPatient.name || !newPatient.age || !newPatient.mobile) return;
    setPatients([...patients, { id: Date.now(), ...newPatient }]);
    setNewPatient({ name: "", age: "", mobile: "" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  const handleEdit = (patient) => {
    setEditingId(patient.id);
    setEditPatient(patient);
  };

  const handleSave = (id) => {
    setPatients(patients.map((p) => (p.id === id ? { ...p, ...editPatient } : p)));
    setEditingId(null);
  };

  return (
    <>
      <style>{`
        .page-container { padding: 30px; }

        .header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
          flex-wrap: wrap;
          gap: 15px;
        }

        .title {
          font-size: 2rem;
          font-weight: 700;
          color: #0ea5e9;
        }

        .btn-add {
          background: #0ea5e9;
          color: white;
          padding: 10px 18px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
        }

        .table-container {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          overflow-x: auto;
        }

        table { width: 100%; min-width: 650px; border-collapse: collapse; }
        th, td { padding: 14px 10px; border-bottom: 1px solid #e2e8f0; }

        td:last-child {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .action-btn {
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          color: #fff;
        }

        .edit-btn { background: #eab308; }
        .delete-btn { background: #ef4444; }
        .save-btn { background: #0ea5e9; }

        /* Popup */
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .popup-box {
          width: 90%;
          max-width: 420px;
          background: #fff;
          padding: 25px;
          border-radius: 10px;
          animation: zoom .3s ease;
        }

        @keyframes zoom {
          from { transform: scale(.7); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .popup-box input {
          width: 100%;
          margin-bottom: 12px;
          padding: 12px;
          border-radius: 6px;
          border: 1px solid #cbd5e1;
        }

        .popup-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        .cancel-btn {
          background: #475569;
          color: white;
          padding: 8px 16px;
          border-radius: 6px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 600px) {

          .title { font-size: 1.5rem; }
          .btn-add { width: 100%; text-align: center; }

          td:last-child {
            flex-direction: column;
            align-items: flex-start;
          }

          .action-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <div className="page-container">

        <div className="header-row">
          <h2 className="title">Patient Management</h2>
          <button className="btn-add" onClick={() => setShowForm(true)}>
            ➕ Register New Patient
          </button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Mobile</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {patients.map((p) => (
                <tr key={p.id}>

                  <td>
                    {editingId === p.id ? (
                      <input
                        value={editPatient.name}
                        onChange={(e) => setEditPatient({ ...editPatient, name: e.target.value })}
                      />
                    ) : p.name}
                  </td>

                  <td>
                    {editingId === p.id ? (
                      <input
                        type="number"
                        value={editPatient.age}
                        onChange={(e) => setEditPatient({ ...editPatient, age: e.target.value })}
                      />
                    ) : p.age}
                  </td>

                  <td>
                    {editingId === p.id ? (
                      <input
                        value={editPatient.mobile}
                        onChange={(e) => setEditPatient({ ...editPatient, mobile: e.target.value })}
                      />
                    ) : p.mobile}
                  </td>

                  <td>
                    {editingId === p.id ? (
                      <button className="action-btn save-btn" onClick={() => handleSave(p.id)}>
                        Save
                      </button>
                    ) : (
                      <button className="action-btn edit-btn" onClick={() => handleEdit(p)}>
                        Edit
                      </button>
                    )}

                    <button className="action-btn delete-btn" onClick={() => handleDelete(p.id)}>
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Popup Form */}
        {showForm && (
          <div className="popup-overlay">
            <div className="popup-box">
              <h3 style={{ marginBottom: "12px" }}>➕ Add New Patient</h3>

              <input
                type="text"
                placeholder="Patient Name"
                value={newPatient.name}
                onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
              />

              <input
                type="number"
                placeholder="Age"
                value={newPatient.age}
                onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
              />

              <input
                type="text"
                placeholder="Mobile Number"
                value={newPatient.mobile}
                onChange={(e) => setNewPatient({ ...newPatient, mobile: e.target.value })}
              />

              <div className="popup-actions">
                <button className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
                <button className="save-btn" onClick={handleAddPatient}>Save</button>
              </div>

            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default Patients;
