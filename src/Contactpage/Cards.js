import React, { useState } from "react";
import { FaLocationDot, FaEnvelope, FaPhone, FaClock } from "react-icons/fa6";

const Cards = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // if already sent and user edits again, reset button text
    if (isSent) setIsSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    // clear form
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });

    // change button text
    setIsSent(true);

    // show popup
    setShowPopup(true);

    // auto-hide popup after 2.5s
    setTimeout(() => {
      setShowPopup(false);
    }, 2500);
  };

  return (
    <>
      <style>{`
        .contact-root {
          min-height: 100vh;
          background: #f3f4f6;
          padding: 40px 20px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          box-sizing: border-box;
        }

        .contact-layout {
          width: 100%;
          max-width: 1180px;
          display: grid;
          grid-template-columns: 0.9fr 1.4fr;
          gap: 26px;
        }

        /* LEFT SIDE PANEL */
        .contact-left-panel {
          background: linear-gradient(160deg, #0099cc, #0077b6);
          border-radius: 18px;
          padding: 26px 24px 26px;
          color: #e5f4ff;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
        }

        .contact-left-title {
          font-size: 1.7rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .contact-left-text {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 24px;
          max-width: 380px;
        }

        .contact-card-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 4px;
        }

        .contact-card-item {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 18px 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.15s ease;
          cursor: default;
        }

        .contact-card-item:hover {
          background: rgba(255, 255, 255, 0.14);
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
        }

        .contact-card-icon {
          width: 52px;
          height: 52px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          flex-shrink: 0;
        }

        .contact-card-content-title {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 4px;
          color: #ffffff;
        }

        .contact-card-content-text {
          font-size: 0.86rem;
          opacity: 0.9;
        }

        /* RIGHT SIDE: MAP + FORM */
        .contact-right-main {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-map-wrapper {
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.12);
        }

        .contact-map-frame {
          border: 0;
          width: 100%;
          height: 260px;
        }

        .contact-form-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 24px 24px 26px;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.12);
        }

        .contact-form-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 6px;
        }

        .contact-form-subtitle {
          font-size: 0.9rem;
          color: #6b7280;
          margin-bottom: 16px;
        }

        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 10px;
        }

        .contact-form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #4b5563;
        }

        .contact-input,
        .contact-textarea {
          width: 100%;
          border-radius: 10px;
          border: 1px solid #d1d5db;
          padding: 10px 12px;
          font-size: 0.9rem;
          outline: none;
          transition: border 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
        }

        .contact-input:focus,
        .contact-textarea:focus {
          border-color: #0ea5e9;
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.25);
          transform: translateY(-1px);
        }

        .contact-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #9ca3af;
        }

        .contact-full-width {
          grid-column: span 2;
        }

        .contact-submit-btn {
          margin-top: 12px;
          padding: 11px 26px;
          border-radius: 999px;
          border: none;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 10px 24px rgba(2, 132, 199, 0.35);
          transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
        }

        .contact-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(2, 132, 199, 0.45);
          filter: brightness(1.03);
        }

        .contact-submit-btn:active {
          transform: translateY(0);
          box-shadow: 0 7px 16px rgba(2, 132, 199, 0.28);
        }

        /* Popup overlay */
        .contact-popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          animation: fadeInOverlay 0.25s ease-out forwards;
        }

        .contact-popup {
          background: #ffffff;
          border-radius: 18px;
          padding: 20px 22px;
          max-width: 320px;
          width: 90%;
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.35);
          text-align: center;
          animation: popupBounce 0.25s ease-out forwards;
        }

        .contact-popup-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 6px;
        }

        .contact-popup-text {
          font-size: 0.9rem;
          color: #4b5563;
          margin-bottom: 14px;
        }

        .contact-popup-btn {
          padding: 8px 18px;
          border-radius: 999px;
          border: none;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }

        @keyframes popupBounce {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInOverlay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 960px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .contact-root {
            padding: 24px 14px;
          }
          .contact-form-card {
            padding: 18px 16px 20px;
          }
          .contact-form-grid {
            grid-template-columns: 1fr;
          }
          .contact-full-width {
            grid-column: span 1;
          }
        }
      `}</style>

      <div className="contact-root">
        <div className="contact-layout">
          {/* LEFT PANEL */}
          <aside className="contact-left-panel">
            <h2 className="contact-left-title">Contact Information</h2>
            <p className="contact-left-text">
              Get in touch with our team for appointments, service enquiries, or general
              questions. We are based in Visakhapatnam and happy to help you with any
              support related to our hospital and services.
            </p>

            <div className="contact-card-list">
              <div className="contact-card-item">
                <div className="contact-card-icon">
                  <FaLocationDot />
                </div>
                <div>
                  <div className="contact-card-content-title">Our Location</div>
                  <div className="contact-card-content-text">
                    HealthCare+ Hospital, MVP Colony,<br />
                    Visakhapatnam, Andhra Pradesh, 530017
                  </div>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-card-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="contact-card-content-title">Email Us</div>
                  <div className="contact-card-content-text">
                    support@healthcareplusvizag.com
                  </div>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-card-icon">
                  <FaPhone />
                </div>
                <div>
                  <div className="contact-card-content-title">Call Us</div>
                  <div className="contact-card-content-text">
                    +91 98765 43210
                  </div>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-card-icon">
                  <FaClock />
                </div>
                <div>
                  <div className="contact-card-content-title">Working Hours</div>
                  <div className="contact-card-content-text">
                    Monday – Saturday: 9:00 AM – 7:00 PM
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE */}
          <main className="contact-right-main">
            {/* Map */}
            <div className="contact-map-wrapper">
              <iframe
                title="HealthCare+ Visakhapatnam"
                className="contact-map-frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.406899580144!2d83.303!3d17.738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394318b98aaabf%3A0x9e8b6b2120!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Form */}
            <section className="contact-form-card">
              <h3 className="contact-form-title">Send Us a Message</h3>
              <p className="contact-form-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit mauris hendrerit faucibus
                imperdiet nec eget felis.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <div className="contact-form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className="contact-input"
                      placeholder="Your full name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact-form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="contact-input"
                      placeholder="you@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact-form-group contact-full-width">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="contact-input"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact-form-group contact-full-width">
                    <label>Message</label>
                    <textarea
                      name="message"
                      className="contact-textarea"
                      placeholder="Write your message here..."
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button type="submit" className="contact-submit-btn">
                  {isSent ? "Sent" : "Send Message"}
                </button>
              </form>
            </section>
          </main>
        </div>

        {showPopup && (
          <div
            className="contact-popup-overlay"
            onClick={() => setShowPopup(false)}
          >
            <div
              className="contact-popup"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="contact-popup-title">Form Submitted</div>
              <div className="contact-popup-text">
                Thank you for reaching out to us. Our team will get back to you shortly.
              </div>
              <button
                type="button"
                className="contact-popup-btn"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cards;
