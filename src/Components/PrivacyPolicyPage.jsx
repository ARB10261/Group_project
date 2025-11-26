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
      <style>
        {`
      .policy-container {
        display: flex;
        padding: 40px 5%;
        background: #f8fbff;
        font-family: 'Poppins', sans-serif;
        gap: 40px;
      }

      /* LEFT SIDEBAR */
      .sidebar {
        width: 260px;
        background: #ffffff;
        border-radius: 10px;
        padding: 20px;
        height: fit-content;
        box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        position: sticky;
        top: 20px;
      }

      .sidebar table {
        width: 100%;
        border-collapse: collapse;
      }

      .sidebar td {
        padding: 10px 8px;
        cursor: pointer;
        color: #0284c7;
        border-bottom: 1px solid #e5e7eb;
        font-size: 14px;
      }

      .sidebar td:hover {
        background: #e0f4ff;
        color: #0369a1;
        border-radius: 6px;
      }

      /* RIGHT CONTENT */
      .policy-content {
        flex: 1;
      }

      .section-block {
        margin-bottom: 60px;
        padding-bottom: 20px;
        border-bottom: 1px solid #e5e7eb;
      }

      .section-block h2 {
        font-size: 26px;
        font-weight: 700;
        color: #0ea5e9;
        margin-bottom: 10px;
      }

      .section-block p,
      .section-block li {
        font-size: 16px;
        color: #555;
        margin-bottom: 10px;
        line-height: 1.8;
      }

      ul {
        padding-left: 20px;
      }

      /* RESPONSIVE */
      @media (max-width: 900px) {
        .policy-container {
          flex-direction: column;
        }
        .sidebar {
          width: 100%;
          position: relative;
        }
      }
      `}
      </style>

      <div className="policy-container">

        {/* LEFT SIDE NAVIGATION */}
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

        {/* RIGHT SIDE POLICY CONTENT */}
        <div className="policy-content">

          {/* Introduction */}
          <div id="intro" className="section-block">
            <h2>Introduction</h2>
            <p>
              At HealthCare+, we prioritize the protection and confidentiality of your personal and
              medical information. This Privacy Policy explains how we collect, use, and safeguard
              your data.
            </p>
          </div>

          {/* Info We Collect */}
          <div id="collection" className="section-block">
            <h2>Information We Collect</h2>
            <ul>
              <li>Personal details (name, age, gender, contact info)</li>
              <li>Medical history, diagnosis, prescriptions</li>
              <li>Appointment details & interaction records</li>
              <li>IP address, device info, location (with consent)</li>
              <li>Payment and billing details (if applicable)</li>
            </ul>
          </div>

          {/* How We Use Data */}
          <div id="usage" className="section-block">
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To book and manage appointments</li>
              <li>To provide personalized healthcare</li>
              <li>For patient–doctor communication</li>
              <li>To improve platform performance</li>
              <li>To send reminders and notifications</li>
            </ul>
          </div>

          {/* Medical Protection */}
          <div id="medical" className="section-block">
            <h2>Medical Data Protection</h2>
            <p>Your health data is encrypted and securely stored on HIPAA-grade servers.</p>
          </div>

          {/* Sharing */}
          <div id="sharing" className="section-block">
            <h2>Information Sharing</h2>
            <p>We only share your information with:</p>
            <ul>
              <li>Doctors & hospitals involved in your treatment</li>
              <li>Government bodies (only when legally required)</li>
              <li>Third-party labs or payment processors</li>
            </ul>
          </div>

          {/* Cookies */}
          <div id="cookies" className="section-block">
            <h2>Cookies & Tracking</h2>
            <p>Cookies help us improve performance & personalize your experience.</p>
          </div>

          {/* Rights */}
          <div id="rights" className="section-block">
            <h2>Your Rights</h2>
            <ul>
              <li>Right to access your medical records</li>
              <li>Right to request corrections</li>
              <li>Right to delete account/data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </div>

          {/* Retention */}
          <div id="retention" className="section-block">
            <h2>Data Retention</h2>
            <p>Your data is retained only for medical, legal or operational reasons.</p>
          </div>

          {/* Security */}
          <div id="security" className="section-block">
            <h2>Security Measures</h2>
            <ul>
              <li>End-to-end encryption</li>
              <li>Regular security audits</li>
              <li>Secure access control</li>
            </ul>
          </div>

          {/* Children */}
          <div id="children" className="section-block">
            <h2>Children’s Privacy</h2>
            <p>
              We do not collect data from children under 16 unless provided by parents/guardians.
            </p>
          </div>

          {/* Updates */}
          <div id="updates" className="section-block">
            <h2>Policy Updates</h2>
            <p>You will be notified about major Privacy Policy updates.</p>
          </div>

          {/* Contact */}
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
