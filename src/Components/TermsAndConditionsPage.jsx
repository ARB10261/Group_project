import React, { useState } from "react";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "dataCollection", title: "Data We Collect" },
  { id: "howWeUse", title: "How We Use Data" },
  { id: "sharing", title: "Data Sharing" },
  { id: "security", title: "Data Security Measures" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "rights", title: "Your Rights" },
  { id: "children", title: "Children's Privacy" },
  { id: "thirdparty", title: "Third-party Services" },
  { id: "disclaimer", title: "Medical Disclaimer" },
  { id: "changes", title: "Policy Updates" },
  { id: "contact", title: "Contact Information" },
];

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 15,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style>{`
        .privacy-wrapper {
          display: flex;
          background: #f8fbff;
          min-height: 100vh;
          font-family: "Poppins", sans-serif;
        }

        /* SIDEBAR */
        .privacy-sidebar {
          width: 260px;
          background: #fff;
          padding: 25px 20px;
          border-right: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          height: 100vh;

          display: flex;
          flex-direction: column;
        }

        .privacy-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 25px;
          flex: 1;
          justify-content: space-between;
        }

        .privacy-menu li {
          padding: 12px;
          background: #f1f5f9;
          color: #475569;
          border-radius: 6px;
          cursor: pointer;
          font-size: 15px;
          transition: 0.25s ease;
        }

        .privacy-menu li:hover,
        .privacy-menu li.active {
          background: #0ea5e9;
          color: #fff;
        }

        /* CONTENT AREA */
        .privacy-content {
          flex: 1;
          padding: 50px 60px;
        }

        .section-block {
          margin-bottom: 60px;
          background: #fff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.05);
        }

        .section-block h2 {
          font-size: 26px;
          font-weight: 700;
          color: #0284c7;
          margin-bottom: 10px;
        }

        .section-block p,
        .section-block li {
          color: #555;
          font-size: 16px;
          line-height: 1.7;
        }

        ul {
          padding-left: 20px;
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .privacy-wrapper {
            flex-direction: column;
          }

          .privacy-sidebar {
            width: 100%;
            height: auto;
            border-right: none;
            border-bottom: 1px solid #e5e7eb;
            position: relative;
          }

          .privacy-menu {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: flex-start;
          }

          .privacy-menu li {
            flex: 1 1 45%;
            text-align: center;
          }

          .privacy-content {
            padding: 30px 20px;
          }
        }

        @media (max-width: 600px) {
          .privacy-menu li {
            flex: 1 1 100%;
          }
        }

      `}</style>

      <div className="privacy-wrapper">

        {/* LEFT SIDE MENU */}
        <div className="privacy-sidebar">
          <ul className="privacy-menu">
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
        <div className="privacy-content">
          {sections.map((sec) => (
            <div key={sec.id} id={sec.id} className="section-block">
              <h2>{sec.title}</h2>
              <p>
                This section explains <strong>{sec.title}</strong> in detail. Your data privacy,
                legal rights, and safety are our priority. All information is encrypted and
                used responsibly as per Indian data protection standards.
              </p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default PrivacyPolicyPage;
