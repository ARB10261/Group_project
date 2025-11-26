import React from "react";
import { FaUserCircle, FaQuoteLeft } from "react-icons/fa";

const FeedbackSection = () => {
  return (
    <>
      <style>{`
  /* Section Layout */
  .feedback-section {
    background-color: #e6f7ff;
    padding: 100px 80px;
    text-align: center;
  }

  .feedback-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #0ea5e9;
    margin-bottom: 10px;
  }

  .feedback-subtitle {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 60px;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }

  /* Grid Layout */
  .feedback-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    max-width: 1000px;
    margin: 0 auto;
  }

  /* Card */
  .feedback-card {
    background: #fff;
    border-radius: 20px;
    padding: 30px 25px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    animation: fadeUp 0.9s forwards;
  }

  .feedback-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
  }

  .feedback-quote {
    color: #0ea5e9;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .feedback-text {
    font-size: 1rem;
    color: #555;
    line-height: 1.7;
    margin-bottom: 20px;
  }

  .feedback-user {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .feedback-user-icon {
    font-size: 2rem;
    color: #0ea5e9;
  }

  .feedback-user-name {
    font-weight: 600;
    color: #000;
    font-size: 1.1rem;
  }

  /* Bottom card */
  .feedback-bottom {
    grid-column: span 2;
    display: flex;
    justify-content: center;
  }

  .feedback-bottom .feedback-card {
    width: 65%;
  }

  /* Animation */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Responsive */
  @media (max-width: 992px) {
    .feedback-section {
      padding: 70px 30px;
    }

    .feedback-grid {
      grid-template-columns: 1fr;
    }

    .feedback-bottom {
      grid-column: 1;
    }

    .feedback-bottom .feedback-card {
      width: 100%;
    }

    .feedback-title {
      font-size: 2rem;
    }

    .feedback-card {
      padding: 25px 20px;
    }
  }
      `}</style>

      {/* Feedback Section */}
      <section className="feedback-section" id="feedback">
        <h2 className="feedback-title">We Served Over 5000+ Patients</h2>
        <p className="feedback-subtitle">
          Trusted by patients and doctors for fast, reliable, and digital healthcare solutions.
          Your health, our priority — powered by HealthCare+ innovation.
        </p>

        <div className="feedback-grid">
          {/* Top Left */}
          <div className="feedback-card">
            <FaQuoteLeft className="feedback-quote" />
            <p className="feedback-text">
              “HealthCare+ made booking appointments so simple! I could easily find the right doctor and manage my visits without stress.”
            </p>
            <div className="feedback-user">
              <FaUserCircle className="feedback-user-icon" />
              <span className="feedback-user-name">Aarav Sharma</span>
            </div>
          </div>

          {/* Top Right */}
          <div className="feedback-card">
            <FaQuoteLeft className="feedback-quote" />
            <p className="feedback-text">
              “Amazing system! The reminders and online records saved me so much time. I always recommend HealthCare+ to my friends.”
            </p>
            <div className="feedback-user">
              <FaUserCircle className="feedback-user-icon" />
              <span className="feedback-user-name">Neha Patel</span>
            </div>
          </div>

          {/* Bottom Center */}
          <div className="feedback-bottom">
            <div className="feedback-card">
              <FaQuoteLeft className="feedback-quote" />
              <p className="feedback-text">
                “As a doctor, I love how organized everything is. Scheduling, patient history, and reports — all in one place!”
              </p>
              <div className="feedback-user">
                <FaUserCircle className="feedback-user-icon" />
                <span className="feedback-user-name">Dr. Rahul Mehta</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default FeedbackSection;
