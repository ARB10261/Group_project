import React, { useState } from "react";

const faqSections = [
  { id: "general", title: "General Questions" },
  { id: "appointments", title: "Appointments" },
  { id: "payments", title: "Payments & Billing" },
  { id: "medical", title: "Medical Records" },
  { id: "security", title: "Security & Privacy" },
  { id: "technical", title: "Technical Support" },
];

const FAQsPage = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (id) => {
    setOpen(open === id ? null : id);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <style>{`
        .faq-wrapper {
          display: flex;
          background: #f8fbff;
          min-height: 100vh;
          font-family: "Poppins", sans-serif;
        }

        /* SIDEBAR */
        .faq-sidebar {
          width: 260px;
          background: #fff;
          padding: 20px;
          border-right: 1px solid #e5e7eb;
          position: sticky;
          top: 10px;
          height: fit-content;
        }

        .faq-sidebar td {
          padding: 12px 5px;
          cursor: pointer;
          color: #0284c7;
          font-size: 15px;
          border-bottom: 1px solid #e5e7eb;
          transition: 0.25s;
        }

        .faq-sidebar td:hover {
          background: #e0f4ff;
          border-radius: 6px;
          padding-left: 10px;
          color: #005f88;
        }

        /* CONTENT */
        .faq-content {
          flex: 1;
          padding: 40px 60px;
        }

        .section-title {
          font-size: 28px;
          font-weight: 700;
          color: #0ea5e9;
          margin-bottom: 20px;
        }

        /* ACCORDION */
        .faq-box {
          background: white;
          border-radius: 10px;
          margin-bottom: 12px;
          border: 1px solid #e0e6ed;
          overflow: hidden;
          transition: 0.3s;
        }

        .faq-question {
          padding: 15px;
          font-size: 16px;
          font-weight: 600;
          color: #0284c7;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-answer {
          padding: 0 15px 15px;
          color: #555;
          font-size: 15px;
          line-height: 1.6;
        }

        .arrow {
          transition: 0.3s;
        }

        .arrow.open {
          transform: rotate(90deg);
        }

        /* OUTER RESPONSIVE */
        @media (max-width: 900px) {
          .faq-wrapper {
            flex-direction: column;
          }

          .faq-sidebar {
            width: 100%;
            position: relative;
            border-right: none;
            border-bottom: 1px solid #ddd;
            margin-bottom: 20px;
          }

          .faq-content {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="faq-wrapper">
        {/* LEFT SIDEBAR */}
        <div className="faq-sidebar">
          <table style={{ width: "100%" }}>
            <tbody>
              {faqSections.map((sec) => (
                <tr key={sec.id}>
                  <td onClick={() => scrollToSection(sec.id)}>{sec.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT CONTENT */}
        <div className="faq-content">

          {/* === SECTION 1 === */}
          <div id="general">
            <h2 className="section-title">General Questions</h2>

            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(1)}>
                What is HealthCare+?
                <span className={`arrow ${open === 1 ? "open" : ""}`}>▶</span>
              </div>
              {open === 1 && (
                <div className="faq-answer">
                  HealthCare+ is a digital healthcare system for booking appointments,
                  accessing reports, and managing medical services.
                </div>
              )}
            </div>

            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(2)}>
                Is HealthCare+ free to use?
                <span className={`arrow ${open === 2 ? "open" : ""}`}>▶</span>
              </div>
              {open === 2 && (
                <div className="faq-answer">Basic features are free. Some services may require payment.</div>
              )}
            </div>
          </div>

          {/* === SECTION 2 === */}
          <div id="appointments" style={{ marginTop: "60px" }}>
            <h2 className="section-title">Appointments</h2>

            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(3)}>
                How do I book an appointment?
                <span className={`arrow ${open === 3 ? "open" : ""}`}>▶</span>
              </div>
              {open === 3 && (
                <div className="faq-answer">
                  Use the search option to find specialists and book appointments instantly.
                </div>
              )}
            </div>

            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(4)}>
                Can I cancel or reschedule?
                <span className={`arrow ${open === 4 ? "open" : ""}`}>▶</span>
              </div>
              {open === 4 && (
                <div className="faq-answer">
                  Yes, appointments can be rescheduled depending on doctor availability.
                </div>
              )}
            </div>
          </div>

          {/* === SECTION 3 === */}
          <div id="payments" style={{ marginTop: "60px" }}>
            <h2 className="section-title">Payments & Billing</h2>

            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(5)}>
                What payment methods are accepted?
                <span className={`arrow ${open === 5 ? "open" : ""}`}>▶</span>
              </div>
              {open === 5 && (
                <div className="faq-answer">
                  We accept UPI, credit/debit cards, and online wallets.
                </div>
              )}
            </div>

            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(6)}>
                Are payments refundable?
                <span className={`arrow ${open === 6 ? "open" : ""}`}>▶</span>
              </div>
              {open === 6 && (
                <div className="faq-answer">
                  Refunds depend on service type. Emergency cancellations are not refundable.
                </div>
              )}
            </div>
          </div>

          {/* === SECTION 4 === */}
          <div id="medical" style={{ marginTop: "60px" }}>
            <h2 className="section-title">Medical Records</h2>

            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(7)}>
                Are my reports safe on HealthCare+?
                <span className={`arrow ${open === 7 ? "open" : ""}`}>▶</span>
              </div>
              {open === 7 && (
                <div className="faq-answer">
                  Yes. All medical reports are encrypted and securely stored.
                </div>
              )}
            </div>
          </div>

          {/* === SECTION 5 === */}
          <div id="security" style={{ marginTop: "60px" }}>
            <h2 className="section-title">Security & Privacy</h2>

            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(8)}>
                Is my data shared with anyone?
                <span className={`arrow ${open === 8 ? "open" : ""}`}>▶</span>
              </div>
              {open === 8 && (
                <div className="faq-answer">
                  No. Your data is not shared without your consent.
                </div>
              )}
            </div>
          </div>

          {/* === SECTION 6 === */}
          <div id="technical" style={{ marginTop: "60px" }}>
            <h2 className="section-title">Technical Support</h2>

            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(9)}>
                What if the app is not working?
                <span className={`arrow ${open === 9 ? "open" : ""}`}>▶</span>
              </div>
              {open === 9 && (
                <div className="faq-answer">
                  Try refreshing or updating the app. You can also contact support anytime.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FAQsPage;
