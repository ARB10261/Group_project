import React, { useState } from "react";

const Doctors = () => {
  const [showForm, setShowForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Ramesh Kumar", dept: "Cardiology", exp: "12 Years", phone: "9876543210" },
    { id: 2, name: "Dr. Ananya Sharma", dept: "Neurology", exp: "7 Years", phone: "9871112222" },
  ]);

  const [newDoctor, setNewDoctor] = useState({
    name: "",
    dept: "",
    exp: "",
    phone: "",
  });

  const handleSave = () => {
    if (!newDoctor.name || !newDoctor.dept || !newDoctor.exp || !newDoctor.phone) return;

    if (isEdit) {
      // ⭐ Update doctor
      setDoctors(
        doctors.map((d) =>
          d.id === editId ? { ...d, ...newDoctor } : d
        )
      );
    } else {
      // ⭐ Add new doctor
      setDoctors([...doctors, { id: Date.now(), ...newDoctor }]);
    }

    setNewDoctor({ name: "", dept: "", exp: "", phone: "" });
    setShowForm(false);
    setIsEdit(false);
  };

  const handleEdit = (doctor) => {
    setShowForm(true);
    setIsEdit(true);
    setEditId(doctor.id);
    setNewDoctor({
      name: doctor.name,
      dept: doctor.dept,
      exp: doctor.exp,
      phone: doctor.phone,
    });
  };

  const handleDelete = (id) => {
    setDoctors(doctors.filter((d) => d.id !== id));
  };

  return (
    <>
      <style>{`
        .page-container { padding: 30px; color: #0f172a; }
        .header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .title { font-size: 2rem; font-weight: 700; color: #0ea5e9; }
        .btn-add { background: #0ea5e9; color: white; padding: 10px 18px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; }
        .table-container { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 14px 10px; border-bottom: 1px solid #e2e8f0; }
        td:last-child { display: flex; gap: 12px; }
        .action-btn { padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; }
        .edit-btn { background: #eab308; color: #fff; }
        .delete-btn { background: #ef4444; color: #fff; }
        .popup-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.45); display: flex; justify-content: center; align-items: center; }
        .popup-box { width: 420px; background: #fff; padding: 25px; border-radius: 10px; animation: zoom .3s ease; }
        @keyframes zoom { from { transform: scale(.7); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .popup-box input, .popup-box select { width: 100%; margin-bottom: 12px; padding: 12px; border-radius: 6px; border: 1px solid #cbd5e1; }
        .popup-actions { display: flex; justify-content: flex-end; gap: 10px; }
        .cancel-btn { background: #475569; color: white; padding: 8px 16px; border-radius: 6px; border: none; }
        .save-btn { background: #0ea5e9; color: white; padding: 8px 16px; border-radius: 6px; border: none; }
      `}</style>

      <div className="page-container">
        <div className="header-row">
          <h2 className="title">Doctor Management</h2>
          <button
            className="btn-add"
            onClick={() => {
              setShowForm(true);
              setIsEdit(false);
              setNewDoctor({ name: "", dept: "", exp: "", phone: "" });
            }}
          >
            ➕ Add New Doctor
          </button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Department</th>
                <th>Experience</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((d) => (
                <tr key={d.id}>
                  <td>{d.name}</td>
                  <td>{d.dept}</td>
                  <td>{d.exp}</td>
                  <td>{d.phone}</td>
                  <td>
                    <button className="action-btn edit-btn" onClick={() => handleEdit(d)}>Edit</button>
                    <button className="action-btn delete-btn" onClick={() => handleDelete(d.id)}>Delete</button>
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
              <h3 style={{ marginBottom: "10px" }}>
                {isEdit ? "Edit Doctor" : "Add Doctor"}
              </h3>

              <input
                type="text"
                placeholder="Doctor Name"
                value={newDoctor.name}
                onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
              />
              <select
                value={newDoctor.dept}
                onChange={(e) => setNewDoctor({ ...newDoctor, dept: e.target.value })}
              >
                <option value="">Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Dental</option>
                <option>Orthopedic</option>
                <option>Gynecology</option>
              </select>
              <input
                type="text"
                placeholder="Experience"
                value={newDoctor.exp}
                onChange={(e) => setNewDoctor({ ...newDoctor, exp: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={newDoctor.phone}
                onChange={(e) => setNewDoctor({ ...newDoctor, phone: e.target.value })}
              />

              <div className="popup-actions">
                <button className="cancel-btn" onClick={() => setShowForm(false)}>
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

export default Doctors;
