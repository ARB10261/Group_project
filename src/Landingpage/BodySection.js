import React from "react";
import { FaRegUser, FaMedal, FaFlag, FaGlobe } from "react-icons/fa"; // ✅ icons
import bodyimg from "../assets/bodyimg.png"; // ✅ make sure this image exists in src/assets/

const BodySection = () => {
  return (
    <>
      <style>
        {`
          /* ✅ Body Section */
          .body-section {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 60px;
            padding: 80px 100px;
            background-color: #fff;
            flex-wrap: wrap;
          }

          .body-image {
            flex: 1;
            text-align: center;
          }

          .body-image img {
            width: 100%;
            max-width: 600px;
            border-radius: 20px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .body-image img:hover {
            transform: scale(1.03);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          }

          .body-content {
            flex: 1;
            text-align: left;
          }

          .body-title {
            font-size: 2.2rem;
            font-weight: 700;
            color:#00cfff;
            margin-bottom: 20px;
          }

          .body-text {
            font-size: 1.1rem;
            color: #444;
            line-height: 1.7;
            margin-bottom: 25px;
          }

          .body-highlights {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .body-highlights li {
            margin-bottom: 12px;
            font-size: 1rem;
            color: #222;
            display: flex;
            align-items: center;
          }

          .body-highlights li::before {
            content: "✔️";
            color: #00cfff;
            margin-right: 10px;
            font-size: 1.2rem;
          }

          /* ✅ Banner Section */
          .stats-banner {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 40px;
            background: #f9f6ff;
            padding: 60px 20px;
            text-align: center;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
          }

          .stat-item {
            flex: 1;
            min-width: 200px;
            transition: transform 0.3s ease;
          }

          .stat-item:hover {
            transform: translateY(-5px);
          }

          .stat-icon {
            font-size: 2.8rem;
            color: #00cfff;
            margin-bottom: 15px;
          }

          .stat-number {
            font-size: 2rem;
            font-weight: 700;
            color: #000;
            margin-bottom: 8px;
          }

          .stat-label {
            font-size: 1.1rem;
            color: #444;
          }

          /* ✅ Responsive Design */
          @media (max-width: 992px) {
            .body-section {
              flex-direction: column;
              text-align: center;
              padding: 60px 30px;
            }

            .body-content {
              text-align: center;
            }

            .body-title {
              font-size: 2rem;
            }

            .body-image img {
              max-width: 85%;
            }

            .stat-item {
              min-width: 150px;
            }

            .stat-number {
              font-size: 1.6rem;
            }
          }
        `}
      </style>

      {/* ✅ Body Section */}
      <section className="body-section" id="body">
        {/* Left Side Image */}
        <div className="body-image">
          <img src={bodyimg} alt="About HealthCare+" />
        </div>

        {/* Right Side Content */}
        <div className="body-content">
          <h2 className="body-title">
            Personal care <br /> & healthy living
          </h2>
          <p className="body-text">
            HealthCare+ is a digital healthcare management system designed to simplify
            hospital operations. It connects patients, doctors, and administrators on
            a single platform, enabling seamless management of appointments, records,
            and schedules with just a few clicks.
          </p>

          <ul className="body-highlights">
            <li>🩺 Easy patient registration and record tracking</li>
            <li>👨‍⚕️ Doctor availability and scheduling system</li>
            <li>📅 Smart appointment management with reminders</li>
            <li>📊 Real-time analytics and performance reports</li>
          </ul>
        </div>
      </section>

      {/* ✅ Statistics Banner Section */}
      <section className="stats-banner">
        <div className="stat-item">
          <FaRegUser className="stat-icon" />
          <div className="stat-number">58K+</div>
          <div className="stat-label">Happy People</div>
        </div>

        <div className="stat-item">
          <FaFlag className="stat-icon" />
          <div className="stat-number">700+</div>
          <div className="stat-label">Surgeries Completed</div>
        </div>

        <div className="stat-item">
          <FaMedal className="stat-icon" />
          <div className="stat-number">40+</div>
          <div className="stat-label">Expert Doctors</div>
        </div>

        <div className="stat-item">
          <FaGlobe className="stat-icon" />
          <div className="stat-number">20</div>
          <div className="stat-label">Worldwide Branches</div>
        </div>
      </section>
    </>
  );
};

export default BodySection;
