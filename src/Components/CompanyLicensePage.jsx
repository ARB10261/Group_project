import React, { useState } from "react";

const sections = [
  { id: "registration", title: "Company Registration" },
  { id: "certifications", title: "Certifications" },
  { id: "legal", title: "Legal Compliance" },
  { id: "insurance", title: "Insurance Coverage" },
  { id: "audit", title: "Audit Reports" },
  { id: "partners", title: "Authorized Partners" },
  { id: "manufacturing", title: "Medical Device Licensing" },
  { id: "terms", title: "Terms of Use" },
  { id: "contact", title: "Contact & Support" },
];

const CompanyLicensePage = () => {
  const [activeSection, setActiveSection] = useState("registration");

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 20,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style>{`
        .license-page {
          display: flex;
          padding: 0;
          background: #f8fbff;
          font-family: "Poppins", sans-serif;
          min-height: 100vh;
        }

        /* LEFT SIDEBAR */
        .license-sidebar {
          width: 260px;
          background: #fff;
          padding: 25px 20px;
          border-right: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;

          /* Make items fill space vertically */
          display: flex;
          flex-direction: column;
        }

        .license-menu {
          list-style: none;
          padding: 0;
          margin: 0;

          /* Spread items evenly */
          display: flex;
          flex-direction: column;
          gap: 25px;
          flex: 1;
          justify-content: space-between;
        }

        .license-menu li {
          padding: 12px;
          background: #f1f5f9;
          color: #475569;
          border-radius: 6px;
          cursor: pointer;
          font-size: 15px;
          transition: 0.25s ease;
        }

        .license-menu li:hover,
        .license-menu li.active {
          background: #0ea5e9;
          color: #fff;
        }

        /* RIGHT CONTENT */
        .license-content {
          flex: 1;
          padding: 40px 60px;
        }

        .section-block {
          margin-bottom: 60px;
          background: #fff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.05);
        }

        .section-block h2 {
          color: #0284c7;
          margin-bottom: 10px;
          font-size: 24px;
        }

        .section-block p {
          color: #555;
          font-size: 16px;
          line-height: 1.7;
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .license-page {
            flex-direction: column;
          }

          .license-sidebar {
            width: 100%;
            height: auto;
            position: relative;
            border-right: none;
            border-bottom: 1px solid #e5e7eb;
          }

          .license-menu {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 12px;
            justify-content: flex-start;
          }

          .license-menu li {
            flex: 1;
            text-align: center;
          }

          .license-content {
            padding: 30px 20px;
          }
        }

        @media (max-width: 600px) {
          .license-menu {
            gap: 10px;
          }

          .license-menu li {
            flex: 1 1 45%;
          }
        }

      `}</style>

      <div className="license-page">

        {/* LEFT SIDEBAR */}
        <div className="license-sidebar">
          <ul className="license-menu">
            {sections.map((sec) => (
              <li
                key={sec.id}
                className={activeSection === sec.id ? "active" : ""}
                onClick={() => scrollToSection(sec.id)}
              >
                {sec.title}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="license-content">

          {sections.map((sec) => (
            <div key={sec.id} id={sec.id} className="section-block">
              <h2>{sec.title}</h2>
              <p>
                This section contains detailed information about <strong>{sec.title}</strong>. 
                All legal, technical, and compliance details are listed here.  
                HealthCare+ ensures full transparency and up-to-date documentation.
              </p>
            </div>
          ))}

        </div>

      </div>
    </>
  );
};

export default CompanyLicensePage;
