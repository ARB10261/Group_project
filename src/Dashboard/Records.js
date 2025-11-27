import React, { useState } from "react";

const Records = () => {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [records, setRecords] = useState([
    { id: 1, patient: "Rohit Sharma", diagnosis: "Hypertension", prescription: "Amlodipine 5mg", lab: "Blood Test" },
    { id: 2, patient: "Priya Nair", diagnosis: "Migraine", prescription: "Paracetamol 500mg", lab: "CT Scan" },
  ]);

  const [newRecord, setNewRecord] = useState({
    patient: "",
    diagnosis: "",
    prescription: "",
    lab: "",
  });

  const handleAddRecord = () => {
    const { patient, diagnosis, prescription, lab } = newRecord;
    if (!patient || !diagnosis || !prescription || !lab) return;

    if (editId) {
      setRecords(records.map(r => r.id === editId ? { ...r, ...newRecord } : r));
      setEditId(null);
    } else {
      setRecords([...records, { id: Date.now(), ...newRecord }]);
    }

    setNewRecord({ patient: "", diagnosis: "", prescription: "", lab: "" });
    setShowForm(false);
  };

  const handleEdit = (record) => {
    setNewRecord(record);
    setEditId(record.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setRecords(records.filter(r => r.id !== id));
  };

  return (
    <>
      <style>{`
        .page-container { padding: 30px; }

        .title {
          font-size: 2rem;
          font-weight: 700;
          color: #0ea5e9;
          margin-bottom: 6px;
        }

        .subtitle { color: #64748b; margin-bottom: 18px; }

        /* STAT CARDS */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-bottom: 25px;
        }

        .stat-card {
          background: #0f172a;
          color: #e5e7eb;
          padding: 16px 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.4);
        }

        .stat-label {
          font-size: 0.8rem;
          color: #93c5fd;
          text-transform: uppercase;
        }

        .stat-value {
          font-size: 1.4rem;
          font-weight: 700;
        }

        .top-actions {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 15px;
        }

        .btn-add {
          background: #0ea5e9;
          padding: 10px 18px;
          border: none;
          border-radius: 6px;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        /* TABLE */
        .table-container {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          overflow-x: auto; /* RESPONSIVE */
        }

        table {
          width: 100%;
          min-width: 750px; /* ensures responsive scrolling */
          border-collapse: collapse;
        }

        th, td {
          padding: 13px 10px;
          border-bottom: 1px solid #e2e8f0;
        }

        .lab-tag {
          background: #e0f2fe;
          color: #0369a1;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 0.8rem;
        }

        td:last-child {
          display: flex;
          flex-wrap: wrap; /* responsive */
          gap: 10px;
        }

        .action-btn {
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          color: white;
          font-size: 14px;
        }

        .edit-btn { background: #3b82f6; }
        .delete-btn { background: #ef4444; }

        /* POPUP */
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .popup-box {
          width: 92%;
          max-width: 450px;
          background: white;
          padding: 22px;
          border-radius: 10px;
          animation: zoom .25s ease;
        }

        @keyframes zoom {
          from { transform: scale(0.7); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .popup-box input,
        .popup-box textarea {
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

        .save-btn { background: #0ea5e9; padding: 8px 16px; border-radius: 6px; color: white; }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 600px) {

          .title { font-size: 1.6rem; }

          .btn-add {
            width: 100%;
            text-align: center;
          }

          td:last-child {
            flex-direction: column;
            gap: 8px;
          }

          .action-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <div className="page-container">
        <h2 className="title">Medical Records</h2>
        <p className="subtitle">Manage patient history, diagnosis, prescriptions & lab reports.</p>

        {/* STAT CARDS */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-label">Total Records</div>
            <div className="stat-value">{records.length}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Today Updates</div>
            <div className="stat-value">3</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Pending Lab Reports</div>
            <div className="stat-value">5</div>
          </div>
        </div>

        {/* TOP BUTTON */}
        <div className="top-actions">
          <button className="btn-add" onClick={() => setShowForm(true)}>
            📝 Add Medical Record
          </button>
        </div>

        {/* TABLE */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Diagnosis</th>
                <th>Prescription</th>
                <th>Lab Report</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {records.map(r => (
                <tr key={r.id}>
                  <td>{r.patient}</td>
                  <td>{r.diagnosis}</td>
                  <td>{r.prescription}</td>
                  <td><span className="lab-tag">{r.lab}</span></td>

                  <td>
                    <button className="action-btn edit-btn" onClick={() => handleEdit(r)}>Edit</button>
                    <button className="action-btn delete-btn" onClick={() => handleDelete(r.id)}>Delete</button>
                  </td>
                </tr>
              ))}

              {records.length === 0 && (
                <tr><td colSpan="5" style={{ textAlign: "center", padding: "15px" }}>No medical records found.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* POPUP */}
        {showForm && (
          <div className="popup-overlay">
            <div className="popup-box">

              <h3 style={{ marginBottom: 10 }}>
                {editId ? "Edit Medical Record" : "Add Medical Record"}
              </h3>

              <input
                type="text"
                placeholder="Patient Name"
                value={newRecord.patient}
                onChange={(e) => setNewRecord({ ...newRecord, patient: e.target.value })}
              />

              <textarea
                placeholder="Diagnosis"
                value={newRecord.diagnosis}
                onChange={(e) => setNewRecord({ ...newRecord, diagnosis: e.target.value })}
              />

              <textarea
                placeholder="Prescription"
                value={newRecord.prescription}
                onChange={(e) => setNewRecord({ ...newRecord, prescription: e.target.value })}
              />

              <input
                type="text"
                placeholder="Lab Report"
                value={newRecord.lab}
                onChange={(e) => setNewRecord({ ...newRecord, lab: e.target.value })}
              />

              <div className="popup-actions">
                <button className="cancel-btn" onClick={() => { setShowForm(false); setEditId(null); }}>Cancel</button>
                <button className="save-btn" onClick={handleAddRecord}>Save</button>
              </div>

            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default Records;
