import React, { useState } from "react";

const Patients = () => {
  const [showForm, setShowForm] = useState(false);
  const [patients, setPatients] = useState([
    { id: 1, name: "Rohit Sharma", age: 32, mobile: "9876543210" },
    { id: 2, name: "Priya Nair", age: 27, mobile: "9123456789" },
  ]);

  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    mobile: "",
  });

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
    setEditPatient({ name: patient.name, age: patient.age, mobile: patient.mobile });
  };

  const handleSave = (id) => {
    setPatients(
      patients.map((p) =>
        p.id === id ? { ...p, ...editPatient } : p
      )
    );
    setEditingId(null);
  };

  return (
    <>
      <style>{`
        .page-container { padding: 30px; color: #0f172a; }

        .header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
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

        .btn-add:hover { background: #0284c7; }

        .table-container {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 14px 10px; border-bottom: 1px solid #e2e8f0; }
        th { font-weight: 600; }

        .action-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;   /* 🔥 adds gap between buttons */
}


        .edit-btn { background: #eab308; color: white; }
        .delete-btn { background: #ef4444; color: white; }
        .save-btn { background: #0ea5e9; color: white; }

        .popup-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex; justify-content: center; align-items: center;
        }

        .popup-box {
          width: 420px;
          background: #fff;
          padding: 25px;
          border-radius: 10px;
          animation: zoom 0.3s ease;
        }

        @keyframes zoom {
          from { transform: scale(0.7); opacity: 0; }
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
          border: none;
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
                  {/* Editable inputs when editing */}
                  <td>
                    {editingId === p.id ? (
                      <input
                        value={editPatient.name}
                        onChange={(e) => setEditPatient({ ...editPatient, name: e.target.value })}
                      />
                    ) : (
                      p.name
                    )}
                  </td>

                  <td>
                    {editingId === p.id ? (
                      <input
                        type="number"
                        value={editPatient.age}
                        onChange={(e) => setEditPatient({ ...editPatient, age: e.target.value })}
                      />
                    ) : (
                      p.age
                    )}
                  </td>

                  <td>
                    {editingId === p.id ? (
                      <input
                        value={editPatient.mobile}
                        onChange={(e) => setEditPatient({ ...editPatient, mobile: e.target.value })}
                      />
                    ) : (
                      p.mobile
                    )}
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
