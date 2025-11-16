import React from "react";
import { FaUserCircle, FaQuoteLeft } from "react-icons/fa";

const FeedbackSection = () => {
  return (
    <>
      <style>
        {`
          /* ✅ Section Layout */
          .feedback-section {
            background-color: #f9f6ff;
            padding: 100px 80px;
            text-align: center;
          }

          .feedback-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #00cfff;
            margin-bottom: 10px;
          }

          /* ✅ Subtitle */
          .feedback-subtitle {
            font-size: 1.1rem;
            color: #555;
            margin-bottom: 60px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.6;
          }

          /* ✅ Feedback Grid Layout */
          .feedback-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            justify-content: center;
            align-items: start;
            position: relative;
            max-width: 1000px;
            margin: 0 auto;
          }

          /* ✅ Single Feedback Card */
          .feedback-card {
            background: #fff;
            border-radius: 20px;
            padding: 30px 25px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
          }

          .feedback-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
          }

          .feedback-icon {
            font-size: 2rem;
            color: #00cfff;
            margin-bottom: 15px;
          }

          .feedback-quote {
            color: #00cfff;
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
            color: #00cfff;
          }

          .feedback-user-name {
            font-weight: 600;
            color: #000;
            font-size: 1.1rem;
          }

          /* ✅ Bottom Centered Card */
          .feedback-bottom {
            grid-column: span 2;
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }

          .feedback-bottom .feedback-card {
            width: 60%;
          }

          /* ✅ Responsive Design */
          @media (max-width: 992px) {
            .feedback-grid {
              grid-template-columns: 1fr;
            }

            .feedback-bottom {
              grid-column: span 1;
            }

            .feedback-bottom .feedback-card {
              width: 100%;
            }

            .feedback-title {
              font-size: 2rem;
            }
          }
        `}
      </style>

      {/* ✅ Feedback Section */}
      <section className="feedback-section" id="feedback">
        <h2 className="feedback-title">We served over 5000+ Patients</h2>
        <p className="feedback-subtitle">
          Trusted by patients and doctors for fast, reliable, and digital healthcare solutions.
          Your health, our priority — powered by HealthCare+ innovation.
        </p>

        <div className="feedback-grid">
          {/* Top Row - Two Cards */}
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

          <div className="feedback-card">
            <FaQuoteLeft className="feedback-quote" />
            <p className="feedback-text">
              “Amazing system! The reminders and online records saved me a lot of time. I always recommend HealthCare+ to my friends.”
            </p>
            <div className="feedback-user">
              <FaUserCircle className="feedback-user-icon" />
              <span className="feedback-user-name">Neha Patel</span>
            </div>
          </div>

          {/* Bottom Center Card */}
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
