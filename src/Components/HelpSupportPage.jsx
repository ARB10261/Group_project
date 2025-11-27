import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaQuestionCircle,
  FaTools,
  FaUserShield,
  FaUserMd,
  FaCalendarCheck,
  FaMoneyBillWave,
} from "react-icons/fa";

const HelpSupportPage = () => {
  return (
    <>
      <style>{`
        .help-wrapper {
          font-family: "Poppins", sans-serif;
          padding: 0;
          background: #f8fbff;
        }

        /* HERO SECTION */
        .help-hero {
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          padding: 60px 20px;
          color: white;
          text-align: center;
        }

        .help-hero h1 {
          font-size: 38px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .help-hero p {
          font-size: 16px;
          opacity: 0.95;
        }

        /* SEARCH BAR */
        .help-search-box {
          max-width: 600px;
          margin: 20px auto 0 auto;
          display: flex;
          background: white;
          padding: 10px;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
        }

        .help-search-box input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 16px;
        }

        .help-search-box button {
          background: #0ea5e9;
          border: none;
          padding: 10px 18px;
          color: white;
          border-radius: 10px;
          cursor: pointer;
        }

        /* 3-COLUMN GRID SECTION */
        .help-section {
          padding: 60px 8%;
          text-align: center;
        }

        .help-section h2 {
          font-size: 32px;
          font-weight: 700;
          color: #0284c7;
          margin-bottom: 30px;
        }

        .help-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* 🔥 EXACTLY 3 CARDS PER ROW */
          gap: 25px;
          margin-top: 20px;
        }

        .help-card {
          background: white;
          padding: 25px;
          text-align: left;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(0,0,0,0.1);
          transition: 0.3s ease;
          cursor: pointer;
        }

        .help-card:hover {
          transform: translateY(-5px);
        }

        .help-card h3 {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 20px;
          color: #0ea5e9;
          margin-bottom: 10px;
        }

        .help-card p {
          color: #555;
          font-size: 15px;
          line-height: 1.6;
        }

        /* CONTACT SECTION */
        .help-contact {
          background: #e0f4ff;
          padding: 60px 10%;
          margin-top: 40px;
          text-align: center;
        }

        .help-contact h2 {
          font-size: 30px;
          font-weight: 700;
          color: #0284c7;
          margin-bottom: 20px;
        }

        .contact-boxes {
          margin-top: 25px;
          display: flex;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
        }

        .contact-box {
          background: white;
          padding: 25px;
          border-radius: 12px;
          width: 260px;
          text-align: center;
          box-shadow: 0 3px 12px rgba(0,0,0,0.1);
        }

        .contact-box h3 {
          color: #0284c7;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 20px;
          margin-bottom: 5px;
        }

        .contact-box p {
          font-size: 15px;
          color: #555;
        }

        /* EMERGENCY BOX */
        .emergency-box {
          margin: 50px auto 0 auto;
          background: #dc2626;
          color: white;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          max-width: 500px;
        }

        .emergency-box h3 {
          margin-bottom: 10px;
          font-size: 22px;
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .help-grid {
            grid-template-columns: repeat(2, 1fr); /* Tablet = 2 columns */
          }
          .help-section h2 {
            font-size: 28px;
          }
        }

        @media (max-width: 600px) {
          .help-grid {
            grid-template-columns: 1fr; /* Mobile = 1 column */
          }
          .help-hero h1 {
            font-size: 30px;
          }
          .help-section h2 {
            font-size: 26px;
          }
        }
      `}</style>

      <div className="help-wrapper">

        {/* HERO */}
        <div className="help-hero">
          <h1>Help & Support</h1>
          <p>Find answers, solve issues, or contact our support team anytime.</p>

          <div className="help-search-box">
            <input type="text" placeholder="Search help topics..." />
            <button>Search</button>
          </div>
        </div>

        {/* SUPPORT CARDS */}
        <div className="help-section">
          <h2>Browse Support Topics</h2>

          <div className="help-grid">
            <div className="help-card">
              <h3><FaQuestionCircle /> General Help</h3>
              <p>Learn how the system works, account setup, and common user queries.</p>
            </div>

            <div className="help-card">
              <h3><FaTools /> Technical Issues</h3>
              <p>Facing errors? Get solutions for login issues or bugs.</p>
            </div>

            <div className="help-card">
              <h3><FaUserShield /> Privacy & Security</h3>
              <p>Understand how your data is protected and safely stored.</p>
            </div>

            <div className="help-card">
              <h3><FaUserMd /> Doctor Support</h3>
              <p>Guidelines for doctors, staff onboarding & tools usage.</p>
            </div>

            <div className="help-card">
              <h3><FaCalendarCheck /> Appointment Issues</h3>
              <p>Help related to booking, canceling, rescheduling appointments.</p>
            </div>

            <div className="help-card">
              <h3><FaMoneyBillWave /> Payments & Billing</h3>
              <p>Refunds, failed payments, invoices, and billing assistance.</p>
            </div>
          </div>
        </div>

        {/* CONTACT SUPPORT */}
        <div className="help-contact">
          <h2>Contact Our Support Team</h2>

          <div className="contact-boxes">
            <div className="contact-box">
              <h3><FaPhoneAlt /> Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="contact-box">
              <h3><FaEnvelope /> Email</h3>
              <p>support@healthcareplus.com</p>
            </div>

            <div className="contact-box">
              <h3><FaHeadset /> Live Chat</h3>
              <p>Chat with our team instantly.</p>
            </div>
          </div>

          <div className="emergency-box">
            <h3>🚨 Emergency Support</h3>
            <p>For medical emergencies, visit your nearest hospital immediately.</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default HelpSupportPage;
