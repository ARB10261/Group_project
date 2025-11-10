import React from "react";
import heroimage from "../assets/heroimage.jpg"; // ✅ make sure this image exists in src/assets/

const HeroSection = () => {
  return (
    <>
      <style>
        {`
          /* ✅ Hero Section */
          .hero-section {
            background: url(${heroimage}) no-repeat center center/cover;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 60px 80px;
            position: relative;
          }

          /* ✅ Hero Content Card */
          .hero-content {
            max-width: 600px;
            background: rgba(255, 255, 255, 0.5); /* reduced opacity */
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(6px); /* nice glassmorphism effect */
          }

          .hero-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #000;
            margin-bottom: 20px;
          }

          .hero-subtitle {
            font-size: 1.1rem;
            color: #222;
            line-height: 1.6;
            margin-bottom: 30px;
          }

          .btn-primary-custom {
            background-color: #8A2BE2;
            color: #fff;
            border: none;
            border-radius: 30px;
            padding: 12px 30px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .btn-primary-custom:hover {
            background-color: #000;
            color: #fff;
          }

          /* ✅ Responsive Design */
          @media (max-width: 992px) {
            .hero-section {
              padding: 60px 30px;
              justify-content: center;
              text-align: center;
            }

            .hero-content {
              background: rgba(255, 255, 255, 0.75);
              padding: 30px 20px;
            }

            .hero-title {
              font-size: 2rem;
            }
          }
        `}
      </style>

      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering Digital Healthcare with{" "}
            <span style={{ color: "#8A2BE2" }}>HealthCare+</span>
          </h1>
          <p className="hero-subtitle">
            Simplify patient management, doctor scheduling, and appointments — all from a single platform.
            Deliver smarter, faster, and better healthcare services with modern digital tools.
          </p>
          <button className="btn-primary-custom">Book Appointment</button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
