import React from "react";

const DashboardFooter = () => {
  return (
    <>
      <style>{`
        .dashboard-footer {
          background: #0f172a;
          color: #94a3b8;
          text-align: center;
          padding: 14px;
          font-size: 0.85rem;
          width: 100%;
          margin-top: auto;
        }

        /* For small screens */
        @media (max-width: 600px) {
          .dashboard-footer {
            font-size: 0.75rem;
            padding: 12px;
          }
        }
      `}</style>

      <footer className="dashboard-footer">
        © {new Date().getFullYear()} <span style={{color:"#0ea5e9", fontWeight:"600"}}>HealthCare+</span> — All Rights Reserved.
      </footer>
    </>
  );
};

export default DashboardFooter;
