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
  .services-section {
    background-color: #e6f7ff;
    padding: 80px 100px;
    text-align: center;
  }

  .services-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #0ea5e9;
    margin-bottom: 15px;
  }

  .services-subtitle {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 50px;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }

  /* GRID */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  /* CARD */
  .service-card {
    background: #fff;
    border-radius: 20px;
    padding: 45px 25px;
    height: 100%;
    box-shadow: 0 8px 20px rgba(0,0,0,0.05);
    transition: transform .3s ease, box-shadow .3s ease;
  }

  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 28px rgba(0,0,0,0.12);
  }

  .service-icon {
    font-size: 3.5rem;
    color: #0ea5e9;
    margin-bottom: 20px;
  }

  .service-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 12px;
  }

  .service-desc {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
  }

  /* TABLET */
  @media (max-width: 992px) {
    .services-section {
      padding: 70px 35px;
    }
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
    }
    .service-card {
      padding: 40px 20px;
    }
    .services-title {
      font-size: 2rem;
    }
  }

  /* MOBILE */
  @media (max-width: 600px) {
    .services-section {
      padding: 60px 25px;
    }
    .services-grid {
      grid-template-columns: 1fr;
      gap: 22px;
    }
    .service-card {
      padding: 35px 18px;
    }
    .service-icon {
      font-size: 3rem;
    }
    .services-title {
      font-size: 1.8rem;
    }
    .services-subtitle {
      font-size: 1rem;
    }
  }
        `}
      </style>

      <section className="services-section" id="departments">
        <h2 className="services-title">Award Winning Patient Care</h2>
        <p className="services-subtitle">
          Specialized healthcare services designed to meet every patient’s needs.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <FaVial className="service-icon" />
            <h3 className="service-title">Laboratory Services</h3>
            <p className="service-desc">
              Advanced lab diagnostics and testing for accurate medical analysis.
            </p>
          </div>

          <div className="service-card">
            <FaHeartbeat className="service-icon" />
            <h3 className="service-title">Heart Disease</h3>
            <p className="service-desc">
              Expert cardiology care for detection and treatment of heart issues.
            </p>
          </div>

          <div className="service-card">
            <FaTooth className="service-icon" />
            <h3 className="service-title">Dental Care</h3>
            <p className="service-desc">
              Comprehensive dental checkups, cosmetic treatments, and oral surgery.
            </p>
          </div>

          <div className="service-card">
            <FaUserInjured className="service-icon" />
            <h3 className="service-title">Body Surgery</h3>
            <p className="service-desc">
              Advanced surgical procedures with modern tools and expert precision.
            </p>
          </div>

          <div className="service-card">
            <FaBrain className="service-icon" />
            <h3 className="service-title">Neurology Surgery</h3>
            <p className="service-desc">
              Specialized brain & spine surgeries handled by professionals.
            </p>
          </div>

          <div className="service-card">
            <FaFemale className="service-icon" />
            <h3 className="service-title">Gynecology</h3>
            <p className="service-desc">
              Complete women’s healthcare from maternity to wellness.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
