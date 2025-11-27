import React from "react";

const GeneralMedicinePage = () => {
  return (
    <>
      <style>
        {`
        .gm-page {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #f5f7fb;
          min-height: 100vh;
          padding-bottom: 60px;
        }

        /* HERO SECTION */
        .gm-hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 20px 40px 20px;
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .gm-hero-left-title {
          font-size: 3rem;
          line-height: 1.1;
          color: #020617;
          margin-bottom: 18px;
        }
        .gm-hero-left-title span {
          color: #2563eb;
        }

        .gm-hero-subtitle {
          font-size: 0.98rem;
          color: #6b7280;
          max-width: 520px;
          margin-bottom: 22px;
        }

        .gm-hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 22px;
          border-radius: 999px;
          border: none;
          background: #2563eb;
          color: #ffffff;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          box-shadow: 0 16px 35px rgba(37, 99, 235, 0.4);
          transition: 0.2s;
          text-decoration: none;
        }
        .gm-hero-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        .gm-hero-badges {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 18px;
        }
        .gm-badge {
          background: #ffffff;
          border-radius: 999px;
          padding: 8px 16px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
          font-size: 0.8rem;
          color: #4b5563;
        }
        .gm-badge span {
          font-weight: 700;
          color: #2563eb;
        }

        .gm-hero-right {
          display: flex;
          justify-content: center;
        }
        .gm-hero-card {
          position: relative;
          width: 280px;
          background: #ffffff;
          border-radius: 32px;
          padding: 22px 20px 26px 20px;
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.18);
          overflow: hidden;
        }
        .gm-hero-circle {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 999px;
          background: radial-gradient(circle at 30% 20%, #60a5fa, #1d4ed8);
          top: -90px;
          right: -80px;
          opacity: 0.16;
        }
        .gm-doc-photo-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .gm-doc-photo {
          width: 160px;
          height: 160px;
          border-radius: 999px;
          object-fit: cover;
          border: 4px solid #e5f0ff;
          z-index: 1;
        }
        .gm-doc-name {
          text-align: center;
          font-weight: 700;
          color: #111827;
          margin-top: 6px;
          font-size: 1rem;
        }
        .gm-doc-role {
          text-align: center;
          font-size: 0.8rem;
          color: #6b7280;
          margin-bottom: 10px;
        }

        .gm-hero-stats-row {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }
        .gm-stat-box {
          background: #f3f4ff;
          border-radius: 16px;
          padding: 8px 10px;
          flex: 1;
          text-align: center;
          margin: 0 4px;
        }
        .gm-stat-number {
          font-size: 0.95rem;
          font-weight: 700;
          color: #2563eb;
        }
        .gm-stat-label {
          font-size: 0.7rem;
          color: #6b7280;
        }

        /* BRAND ROW */
        .gm-brand-row {
          max-width: 900px;
          margin: 0 auto;
          padding: 10px 20px 30px 20px;
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
          font-size: 0.82rem;
          color: #6b7280;
        }
        .gm-brand-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .gm-brand-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #2563eb;
        }

        /* SECTION TITLE */
        .gm-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px 10px 20px;
        }
        .gm-section-label {
          text-align: center;
          font-size: 0.9rem;
          font-weight: 600;
          color: #2563eb;
          margin-bottom: 4px;
        }
        .gm-section-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          color: #020617;
          margin-bottom: 8px;
        }
        .gm-section-subtitle {
          text-align: center;
          font-size: 0.95rem;
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto 26px auto;
        }

        /* CARDS GRID */
        .gm-cards-grid {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px 40px 20px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        /* CARD HOVER EFFECTS */
        .gm-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 20px 18px;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .gm-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.2);
        }

        .gm-card-icon {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: #eff4ff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          font-size: 20px;
          color: #2563eb;
          transition: background 0.3s ease, transform 0.3s ease, color 0.3s ease;
        }
        .gm-card:hover .gm-card-icon {
          background: #2563eb;
          color: #ffffff;
          transform: scale(1.2);
        }

        .gm-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #020617;
          margin-bottom: 6px;
        }
        .gm-card-text {
          font-size: 0.9rem;
          color: #6b7280;
          line-height: 1.6;
        }

        /* RESPONSIVE */
        @media (max-width: 960px) {
          .gm-hero {
            grid-template-columns: 1fr;
            text-align: left;
          }
        }
        @media (max-width: 768px) {
          .gm-hero-left-title {
            font-size: 2.3rem;
          }
          .gm-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}
      </style>

      <main className="gm-page">
        {/* HERO */}
        <section className="gm-hero">
          <div>
            <h1 className="gm-hero-left-title">
              Your <span>General Medicine</span> Care Starts Here
            </h1>
            <p className="gm-hero-subtitle">
              General Medicine is your first point of contact for any health concern.
              Our physicians provide complete care — from common infections and fevers
              to long-term conditions like diabetes and blood pressure.
            </p>

            <a href="#gm-services" className="gm-hero-btn">
              View General Medicine Services
            </a>

            <div className="gm-hero-badges">
              <div className="gm-badge">
                <span>24/7</span> OPD Support
              </div>
              <div className="gm-badge">
                <span>10+ </span> General Physicians
              </div>
              <div className="gm-badge">
                <span>1000+ </span> Patients Managed
              </div>
            </div>
          </div>

          <div className="gm-hero-right">
            <div className="gm-hero-card">
              <div className="gm-hero-circle" />
              <div className="gm-doc-photo-wrapper">
                <img
                  src="https://images.pexels.com/photos/8376231/pexels-photo-8376231.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="General physician"
                  className="gm-doc-photo"
                />
              </div>
              <div className="gm-doc-name">Dr. Ananya Rao</div>
              <div className="gm-doc-role">Senior General Physician</div>

              <div className="gm-hero-stats-row">
                <div className="gm-stat-box">
                  <div className="gm-stat-number">8+ yrs</div>
                  <div className="gm-stat-label">Experience</div>
                </div>
                <div className="gm-stat-box">
                  <div className="gm-stat-number">4.9★</div>
                  <div className="gm-stat-label">Patient Rating</div>
                </div>
                <div className="gm-stat-box">
                  <div className="gm-stat-number">15k+</div>
                  <div className="gm-stat-label">Consultations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BRAND ROW */}
        <div className="gm-brand-row">
          <div className="gm-brand-item">
            <span className="gm-brand-dot" />
            <span>Trusted Family Physicians</span>
          </div>
          <div className="gm-brand-item">
            <span className="gm-brand-dot" />
            <span>Evidence-Based Treatment</span>
          </div>
          <div className="gm-brand-item">
            <span className="gm-brand-dot" />
            <span>Continuous Follow-up Care</span>
          </div>
        </div>

        {/* SECTION TITLE */}
        <section id="gm-services" className="gm-section">
          <p className="gm-section-label">Our General Medicine Services</p>
          <h2 className="gm-section-title">
            We Have the Medical Options You Need
          </h2>
          <p className="gm-section-subtitle">
            From everyday illnesses to chronic disease management, our General Medicine
            team coordinates your complete health journey and guides you to specialists
            when needed.
          </p>
        </section>

        {/* CARDS GRID */}
        <section className="gm-cards-grid">
          <article className="gm-card">
            <div className="gm-card-icon">🏥</div>
            <h3 className="gm-card-title">Common Illness Treatment</h3>
            <p className="gm-card-text">
              Diagnosis and treatment for fever, infections, headaches, cough & cold,
              stomach pain, body aches, allergies, and other day-to-day health problems.
            </p>
          </article>

          <article className="gm-card">
            <div className="gm-card-icon">🩺</div>
            <h3 className="gm-card-title">Chronic Disease Management</h3>
            <p className="gm-card-text">
              Long-term monitoring and control of diabetes, hypertension, thyroid
              issues, asthma, and high cholesterol with personalized medication
              and follow-ups.
            </p>
          </article>

          <article className="gm-card">
            <div className="gm-card-icon">🧪</div>
            <h3 className="gm-card-title">Preventive Health Check-ups</h3>
            <p className="gm-card-text">
              Regular health screenings, lab tests, vaccination advice, and lifestyle
              counselling to detect risks early and keep you and your family healthy.
            </p>
          </article>

          <article className="gm-card">
            <div className="gm-card-icon">👨‍👩‍👧</div>
            <h3 className="gm-card-title">Family & Senior Care</h3>
            <p className="gm-card-text">
              Dedicated care plans for children, adults, and seniors including routine
              check-ups, medicine review, and coordination with specialists.
            </p>
          </article>

          <article className="gm-card">
            <div className="gm-card-icon">📊</div>
            <h3 className="gm-card-title">Follow-up & Monitoring</h3>
            <p className="gm-card-text">
              Track your vitals, lab reports, and treatment progress with scheduled
              follow-up visits and reminders through the HealthCare+ system.
            </p>
          </article>

          <article className="gm-card">
            <div className="gm-card-icon">📱</div>
            <h3 className="gm-card-title">Tele-Consultation Support</h3>
            <p className="gm-card-text">
              Get medical advice from your general physician through secure online
              consultations for minor issues and prescription follow-ups.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default GeneralMedicinePage;
