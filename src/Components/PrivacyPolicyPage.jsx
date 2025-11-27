import React from "react";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "collection", title: "Information We Collect" },
  { id: "usage", title: "How We Use Data" },
  { id: "medical", title: "Medical Data Protection" },
  { id: "sharing", title: "Information Sharing" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "rights", title: "Your Rights" },
  { id: "retention", title: "Data Retention" },
  { id: "security", title: "Security Measures" },
  { id: "children", title: "Children’s Privacy" },
  { id: "updates", title: "Policy Updates" },
  { id: "contact", title: "Contact Us" },
];

const PrivacyPolicyPage = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <style>{`
        .policy-wrapper {
          display: flex;
          background: #f8fbff;
          min-height: 100vh;
          font-family: "Poppins", sans-serif;
        }

        /* SIDEBAR (same design as Terms page) */
        .sidebar {
          width: 260px;
          background: #ffffff;
          padding: 20px;
          border-right: 1px solid #e5e7eb;
          position: sticky;
          top: 10px;
          height: calc(100vh - 20px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .sidebar table {
          width: 100%;
          height: 100%;
        }

        .sidebar td {
          padding: 18px 10px;
          cursor: pointer;
          color: #0284c7;
          font-size: 15px;
          border-bottom: 1px solid #e5e7eb;
          transition: 0.25s ease;
        }

        .sidebar td:hover {
          background: #e0f4ff;
          border-radius: 6px;
          padding-left: 14px;
          color: #005f88;
        }

        /* RIGHT CONTENT */
        .policy-content {
          flex: 1;
          padding: 50px 60px;
        }

        .section-block {
          margin-bottom: 60px;
        }

        .section-block h2 {
          font-size: 28px;
          font-weight: 700;
          color: #0ea5e9;
          margin-bottom: 12px;
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
        @media (max-width: 900px) {
          .policy-wrapper {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            height: auto;
            border-right: none;
            border-bottom: 1px solid #ddd;
            position: relative;
          }

          .sidebar table {
            height: auto;
          }

          .policy-content {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="policy-wrapper">

        {/* LEFT SIDEBAR */}
        <div className="sidebar">
          <table>
            <tbody>
              {sections.map((section) => (
                <tr key={section.id}>
                  <td onClick={() => handleScroll(section.id)}>
                    {section.title}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT CONTENT */}
        <div className="policy-content">

          {/* INTRODUCTION */}
          <div id="intro" className="section-block">
            <h2>Introduction</h2>
            <p>
              At HealthCare+, we prioritize the privacy and confidentiality of your
              personal and medical data. This policy explains what we collect, how we use it,
              and how we keep it safe.
            </p>
          </div>

          {/* COLLECTION */}
          <div id="collection" className="section-block">
            <h2>Information We Collect</h2>
            <ul>
              <li>Personal details (name, age, gender, contact info)</li>
              <li>Medical history, diagnosis & prescriptions</li>
              <li>Appointment details & medical interactions</li>
              <li>IP address, device details, browser type</li>
              <li>Payment details (encrypted)</li>
            </ul>
          </div>

          {/* USAGE */}
          <div id="usage" className="section-block">
            <h2>How We Use Data</h2>
            <ul>
              <li>To manage appointments & consultations</li>
              <li>To provide personalized healthcare services</li>
              <li>To improve platform experience</li>
              <li>For reminders & notifications</li>
            </ul>
          </div>

          {/* MEDICAL DATA */}
          <div id="medical" className="section-block">
            <h2>Medical Data Protection</h2>
            <p>Your medical data is encrypted and stored on secure, HIPAA-level servers.</p>
          </div>

          {/* SHARING */}
          <div id="sharing" className="section-block">
            <h2>Information Sharing</h2>
            <p>We only share data with trusted sources such as:</p>
            <ul>
              <li>Doctors & hospitals for your treatment</li>
              <li>Govt authorities (only when legally required)</li>
              <li>Secure third-party labs or payment processors</li>
            </ul>
          </div>

          {/* COOKIES */}
          <div id="cookies" className="section-block">
            <h2>Cookies & Tracking</h2>
            <p>We use cookies to improve performance, analytics, and personalization.</p>
          </div>

          {/* RIGHTS */}
          <div id="rights" className="section-block">
            <h2>Your Rights</h2>
            <ul>
              <li>Right to access your data</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to delete account/data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </div>

          {/* RETENTION */}
          <div id="retention" className="section-block">
            <h2>Data Retention</h2>
            <p>Data is retained as long as necessary for medical, legal, and operational reasons.</p>
          </div>

          {/* SECURITY */}
          <div id="security" className="section-block">
            <h2>Security Measures</h2>
            <ul>
              <li>End-to-end encryption</li>
              <li>Regular audits</li>
              <li>Strict access controls</li>
            </ul>
          </div>

          {/* CHILDREN */}
          <div id="children" className="section-block">
            <h2>Children’s Privacy</h2>
            <p>We do not collect data from children under 16 without guardian consent.</p>
          </div>

          {/* UPDATES */}
          <div id="updates" className="section-block">
            <h2>Policy Updates</h2>
            <p>You will be notified whenever this policy is updated.</p>
          </div>

          {/* CONTACT */}
          <div id="contact" className="section-block">
            <h2>Contact Us</h2>
            <p>
              Email: privacy@healthcareplus.com <br />
              Phone: +91 98765 43210
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
