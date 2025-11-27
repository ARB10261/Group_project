import React, { useState } from "react";

const Reports = () => {
  const [filters, setFilters] = useState({
    from: "",
    to: "",
    dept: "",
    doctor: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const stats = [
    { label: "Total Appointments", value: 1240 },
    { label: "Completed Appointments", value: 980 },
    { label: "Cancelled", value: 140 },
    { label: "New Patients This Month", value: 320 },
  ];

  const tableData = [
    {
      id: 1,
      patient: "Arun",
      doctor: "Dr. Priya",
      dept: "Cardiology",
      status: "Completed",
      date: "2025-02-20",
    },
    {
      id: 2,
      patient: "Shreya",
      doctor: "Dr. Patel",
      dept: "Neurology",
      status: "Cancelled",
      date: "2025-02-18",
    },
    {
      id: 3,
      patient: "Rahul",
      doctor: "Dr. Ramesh",
      dept: "Dental",
      status: "Pending",
      date: "2025-02-17",
    },
  ];

  return (
    <>
      <style>{`
        .page-container { padding: 30px; }

        .title {
          font-size: 2rem;
          font-weight: 700;
          color: #0ea5e9;
          margin-bottom: 8px;
        }

        .subtitle {
          color: #64748b;
          margin-bottom: 25px;
        }

        /* Filters */
        .filters {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          gap: 12px;
          margin-bottom: 20px;
        }

        .filters input,
        .filters select {
          width: 100%;
          padding: 11px 12px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 0.95rem;
        }

        .filter-btn {
          background: #0ea5e9;
          color: white;
          border: none;
          padding: 11px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.95rem;
        }

        /* Stats Cards */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: #0f172a;
          color: white;
          padding: 20px;
          border-radius: 14px;
          box-shadow: 0 4px 14px rgba(15,23,42,0.45);
          transition: 0.25s ease;
        }

        .stat-card:hover {
          transform: translateY(-3px);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
        }

        .stat-label {
          font-size: 1rem;
          opacity: 0.85;
          margin-top: 6px;
        }

        /* Chart box */
        .chart-box {
          background: white;
          height: 280px;
          border-radius: 14px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.1);
          margin-bottom: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #64748b;
          font-size: 1.15rem;
          font-weight: 500;
        }

        /* Table */
        .table-container {
          background: white;
          border-radius: 14px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.1);
          padding: 20px;
          overflow-x: auto; /* 📱 Responsive Scroll */
        }

        table {
          width: 100%;
          min-width: 750px;
          border-collapse: collapse;
        }

        th, td {
          padding: 13px 10px;
          border-bottom: 1px solid #e2e8f0;
          text-align: left;
        }

        th {
          font-weight: 600;
          color: #0f172a;
          white-space: nowrap;
        }

        /* Status Pills */
        .status {
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .Completed { background: #bbf7d0; color: #166534; }
        .Cancelled { background: #fecaca; color: #991b1b; }
        .Pending { background: #fde68a; color: #92400e; }

        /* RESPONSIVE */
        @media (max-width: 600px) {
          .title {
            font-size: 1.6rem;
          }

          .chart-box {
            height: 220px;
            font-size: 1rem;
          }

          .filters {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page-container">
        <h2 className="title">Reports & Analytics</h2>
        <p className="subtitle">Track hospital growth and performance insights.</p>

        {/* Filters */}
        <div className="filters">
          <input type="date" name="from" value={filters.from} onChange={handleFilterChange} />
          <input type="date" name="to" value={filters.to} onChange={handleFilterChange} />

          <select name="dept" value={filters.dept} onChange={handleFilterChange}>
            <option value="">Department</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Dental</option>
            <option>General</option>
          </select>

          <select name="doctor" value={filters.doctor} onChange={handleFilterChange}>
            <option value="">Select Doctor</option>
            <option>Dr. Ramesh</option>
            <option>Dr. Priya</option>
            <option>Dr. Patel</option>
          </select>

          <button className="filter-btn">Apply Filters</button>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Chart Placeholder */}
        <div className="chart-box">
          📊 Chart Visualization Coming Soon…
        </div>

        {/* Table */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td>{row.patient}</td>
                  <td>{row.doctor}</td>
                  <td>{row.dept}</td>
                  <td>
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </td>
                  <td>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Reports;
