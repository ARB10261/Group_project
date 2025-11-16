import React from "react";
import { FaEnvelope, FaPhone, FaLocationDot, FaClock } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <style>{`
        .contact-wrapper {
          min-height: calc(100vh - 200px); /* leave space for navbar + footer */
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 40px 20px;
          background: #f5f5ff;
        }

        .contact-container {
          width: 100%;
          max-width: 1100px;
          background: #ffffff;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
          padding: 30px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 24px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        /* 🔥 Card hover */
        .contact-container:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 35px rgba(15, 23, 42, 0.18);
        }

        .contact-left h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1e1e1e;
          margin-bottom: 6px;
        }

        .contact-left p.subtitle {
          font-size: 0.95rem;
          color: #6b7280;
          margin-bottom: 18px;
        }

        .highlight-text {
          color: #8A2BE2;
          font-weight: 600;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 8px;
        }

        .form-row-inline {
          display: flex;
          gap: 12px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #4b5563;
        }

        .form-control-hc {
          border-radius: 10px;
          border: 1px solid #d1d5db;
          padding: 9px 11px;
          font-size: 0.9rem;
          outline: none;
          transition: border 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease, background-color 0.15s ease;
          background-color: #ffffff;
        }

        /* ✨ Hover + focus on inputs */
        .form-control-hc:hover {
          border-color: #a855f7;
          background-color: #faf5ff;
        }

        .form-control-hc:focus {
          border-color: #8A2BE2;
          box-shadow: 0 0 0 3px rgba(138, 43, 226, 0.15);
          transform: translateY(-1px);
          background-color: #fdf4ff;
        }

        textarea.form-control-hc {
          resize: vertical;
          min-height: 110px;
        }

        .btn-submit {
          align-self: flex-start;
          background: linear-gradient(135deg, #8A2BE2, #4C1D95);
          color: #fff;
          border: none;
          padding: 10px 22px;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 6px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 8px 20px rgba(76, 29, 149, 0.25);
          transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
        }

        /* ✨ Button hover */
        .btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(76, 29, 149, 0.3);
          filter: brightness(1.05);
        }

        .btn-submit:active {
          transform: translateY(0);
          box-shadow: 0 4px 10px rgba(76, 29, 149, 0.2);
        }

        /* Right info card */
        .contact-right {
          border-radius: 18px;
          background: radial-gradient(circle at top left, #8A2BE2 0, #4C1D95 30%, #111827 100%);
          color: #f9fafb;
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .contact-right-header h3 {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .contact-right-header p {
          font-size: 0.9rem;
          color: #e5e7eb;
        }

        .info-list {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          padding: 6px 8px;
          border-radius: 10px;
          transition: background 0.15s ease, transform 0.15s ease;
        }

        /* ✨ Info item hover */
        .info-item:hover {
          background: rgba(15, 23, 42, 0.45);
          transform: translateY(-1px);
        }

        .info-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-item-title {
          font-weight: 600;
          margin-bottom: 2px;
        }

        .info-item-text {
          color: #e5e7eb;
          font-size: 0.86rem;
        }

        .contact-note {
          margin-top: 18px;
          font-size: 0.8rem;
          color: #d1d5db;
        }

        .contact-note span {
          color: #facc15;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .contact-container {
            padding: 22px 18px;
          }
          .form-row-inline {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="contact-wrapper">
        <div className="contact-container">
          {/* LEFT: FORM */}
          <div className="contact-left">
            <h2>Contact <span className="highlight-text">HealthCare+</span></h2>
            <p className="subtitle">
              Have questions about appointments, doctors, or technical support?  
              Send us a message and our team will get back to you shortly.
            </p>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for contacting HealthCare+! We will reach out soon.");
              }}
            >
              <div className="form-row-inline">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    className="form-control-hc"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    className="form-control-hc"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row-inline">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    className="form-control-hc"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="form-group">
                  <label>Department</label>
                  <select className="form-control-hc">
                    <option value="">Select department</option>
                    <option>General Enquiry</option>
                    <option>Appointments</option>
                    <option>Technical Support</option>
                    <option>Doctor/Staff</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Your Message *</label>
                <textarea
                  className="form-control-hc"
                  placeholder="Describe your query..."
                  required
                />
              </div>

              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: INFO CARD */}
          <div className="contact-right">
            <div className="contact-right-header">
              <h3>Reach Us Directly</h3>
              <p>
                You can connect with our support team for emergency queries,
                appointment issues, or platform support.
              </p>
            </div>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon-box">
                  <FaPhone />
                </div>
                <div>
                  <div className="info-item-title">Helpline</div>
                  <div className="info-item-text">+91 98765 43210</div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="info-item-title">Email Support</div>
                  <div className="info-item-text">support@healthcareplus.com</div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <FaLocationDot />
                </div>
                <div>
                  <div className="info-item-title">Location</div>
                  <div className="info-item-text">Visakhapatnam, Andhra Pradesh</div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <FaClock />
                </div>
                <div>
                  <div className="info-item-title">Working Hours</div>
                  <div className="info-item-text">Mon - Fri: 09:00 AM - 06:00 PM</div>
                </div>
              </div>
            </div>

            <p className="contact-note">
              For emergency medical help, please contact your nearest hospital directly or dial{" "}
              <span>108</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
