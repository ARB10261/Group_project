import React from "react";
import {
  FaVial,
  FaHeartbeat,
  FaTooth,
  FaUserInjured,
  FaBrain,
  FaFemale,
} from "react-icons/fa";

const ServicesSection = () => {
  return (
    <>
      <style>
        {`
          /* ✅ Services Section */
          .services-section {
            background-color: #f9f6ff;
            padding: 80px 100px;
            text-align: center;
          }

          .services-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #8A2BE2;
            margin-bottom: 20px;
          }

          .services-subtitle {
            font-size: 1.1rem;
            color: #555;
            margin-bottom: 60px;
          }

          /* ✅ Grid Layout */
          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }

          /* ✅ Service Card */
          .service-card {
            background: #fff;
            border-radius: 20px;
            padding: 50px 25px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            height: 100%;
          }

          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
          }

          .service-icon {
            font-size: 3.5rem;
            color: #8A2BE2;
            margin-bottom: 20px;
          }

          .service-title {
            font-size: 1.4rem;
            font-weight: 600;
            color: #000;
            margin-bottom: 15px;
          }

          .service-desc {
            font-size: 1rem;
            color: #555;
            line-height: 1.6;
          }

          /* ✅ Responsive Design */
          @media (max-width: 992px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 600px) {
            .services-grid {
              grid-template-columns: 1fr;
            }

            .services-section {
              padding: 60px 30px;
            }

            .services-title {
              font-size: 2rem;
            }
          }
        `}
      </style>

      <section className="services-section" id="departments">
        <h2 className="services-title">Award winning patient care</h2>
        <p className="services-subtitle">
          Specialized healthcare services designed to meet every patient’s needs.
        </p>

        <div className="services-grid">
          {/* ✅ 1. Laboratory Services */}
          <div className="service-card">
            <FaVial className="service-icon" />
            <h3 className="service-title">Laboratory Services</h3>
            <p className="service-desc">
              Advanced lab diagnostics and testing for accurate medical analysis and treatment.
            </p>
          </div>

          {/* ✅ 2. Heart Disease */}
          <div className="service-card">
            <FaHeartbeat className="service-icon" />
            <h3 className="service-title">Heart Disease</h3>
            <p className="service-desc">
              Expert cardiology care for diagnosis, treatment, and prevention of heart conditions.
            </p>
          </div>

          {/* ✅ 3. Dental Care */}
          <div className="service-card">
            <FaTooth className="service-icon" />
            <h3 className="service-title">Dental Care</h3>
            <p className="service-desc">
              Comprehensive dental checkups, cosmetic care, and oral surgery by expert dentists.
            </p>
          </div>

          {/* ✅ 4. Body Surgery */}
          <div className="service-card">
            <FaUserInjured className="service-icon" />
            <h3 className="service-title">Body Surgery</h3>
            <p className="service-desc">
              Advanced surgical procedures with modern technology and post-surgery care.
            </p>
          </div>

          {/* ✅ 5. Neurology Surgery */}
          <div className="service-card">
            <FaBrain className="service-icon" />
            <h3 className="service-title">Neurology Surgery</h3>
            <p className="service-desc">
              Specialized neurological and spinal surgeries handled by experienced professionals.
            </p>
          </div>

          {/* ✅ 6. Gynecology */}
          <div className="service-card">
            <FaFemale className="service-icon" />
            <h3 className="service-title">Gynecology</h3>
            <p className="service-desc">
              Complete women’s healthcare including maternity, fertility, and reproductive wellness.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
