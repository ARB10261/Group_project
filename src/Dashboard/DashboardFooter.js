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
  .dashboard-footer span {
    color: #0ea5e9;
    font-weight: 600;
  }
`}</style>


      <footer className="dashboard-footer">
        © {new Date().getFullYear()} <span>HealthCare+</span> — All Rights Reserved.
      </footer>
    </>
  );
};

export default DashboardFooter;
