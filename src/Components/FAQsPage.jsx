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

        /* SIDEBAR (same as Terms page style) */
        .faq-sidebar {
          width: 260px;
          background: #fff;
          padding: 20px;
          border-right: 1px solid #e5e7eb;
          position: sticky;
          top: 10px;
          height: calc(100vh - 20px);    /* full height */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .faq-sidebar table {
          width: 100%;
          height: 100%; /* fill the sidebar */
        }

        .faq-sidebar td {
          padding: 18px 10px;
          cursor: pointer;
          color: #0284c7;
          font-size: 15px;
          border-bottom: 1px solid #e5e7eb;
          transition: 0.25s ease;
        }

        .faq-sidebar td:hover {
          background: #e0f4ff;
          border-radius: 6px;
          padding-left: 14px;
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

        /* ACCORDION (FAQs) */
        .faq-box {
          background: white;
          border-radius: 10px;
          margin-bottom: 12px;
          border: 1px solid #e0e6ed;
          overflow: hidden;
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

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .faq-wrapper { flex-direction: column; }

          .faq-sidebar {
            width: 100%;
            height: auto;
            position: relative;
            border-right: none;
            border-bottom: 1px solid #ddd;
          }

          .faq-sidebar table {
            height: auto;
          }

          .faq-content {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="faq-wrapper">

        {/* LEFT SIDEBAR (same as T&C) */}
        <div className="faq-sidebar">
          <table>
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
          
          {/* SECTION 1 */}
          <div id="general">
            <h2 className="section-title">General Questions</h2>

            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(1)}>
                What is HealthCare+?
                <span className={`arrow ${open === 1 ? "open" : ""}`}>▶</span>
              </div>
              {open === 1 && (
                <div className="faq-answer">
                  HealthCare+ helps you book appointments, access records, and manage your healthcare online.
                </div>
              )}
            </div>

            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(2)}>
                Is it free to use?
                <span className={`arrow ${open === 2 ? "open" : ""}`}>▶</span>
              </div>
              {open === 2 && (
                <div className="faq-answer">
                  Yes, basic features are free. Some services may require payment.
                </div>
              )}
            </div>
          </div>

          {/* SECTION 2 */}
          <div id="appointments" style={{ marginTop: "60px" }}>
            <h2 className="section-title">Appointments</h2>

            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(3)}>
                How do I book an appointment?
                <span className={`arrow ${open === 3 ? "open" : ""}`}>▶</span>
              </div>
              {open === 3 && (
                <div className="faq-answer">Search for a doctor and choose any available time slot.</div>
              )}
            </div>
          </div>

          {/* SECTION 3 */}
          <div id="payments" style={{ marginTop: "60px" }}>
            <h2 className="section-title">Payments & Billing</h2>

            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(4)}>
                What payment methods are accepted?
                <span className={`arrow ${open === 4 ? "open" : ""}`}>▶</span>
              </div>
              {open === 4 && (
                <div className="faq-answer">UPI, Debit/Credit Cards, Net Banking, Wallets.</div>
              )}
            </div>
          </div>

          {/* SECTION 4 */}
          <div id="medical" style={{ marginTop: "60px" }}>
            <h2 className="section-title">Medical Records</h2>
            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(5)}>
                Are my records safe?
                <span className={`arrow ${open === 5 ? "open" : ""}`}>▶</span>
              </div>
              {open === 5 && (
                <div className="faq-answer">Yes, all records are encrypted and securely stored.</div>
              )}
            </div>
          </div>

          {/* SECTION 5 */}
          <div id="security" style={{ marginTop: "60px" }}>
            <h2 className="section-title">Security & Privacy</h2>
            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(6)}>
                Do you share my data?
                <span className={`arrow ${open === 6 ? "open" : ""}`}>▶</span>
              </div>
              {open === 6 && (
                <div className="faq-answer">Never without your permission.</div>
              )}
            </div>
          </div>

          {/* SECTION 6 */}
          <div id="technical" style={{ marginTop: "60px" }}>
            <h2 className="section-title">Technical Support</h2>
            <div className="faq-box">
              <div className="faq-question" onClick={() => toggleFAQ(7)}>
                App not working?
                <span className={`arrow ${open === 7 ? "open" : ""}`}>▶</span>
              </div>
              {open === 7 && (
                <div className="faq-answer">Try restarting or updating the app.</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FAQsPage;
