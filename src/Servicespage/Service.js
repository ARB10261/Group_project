import React from "react";
import { useNavigate } from "react-router-dom";
import Seva from "../assets/Seva.jpg";

const services = [
  {
    name: "24/7 Emergency Care",
    img: "https://i-media.vyaparify.com/vcards/blogs/64783/24-hours-medical-servises-24-7-medical-call-center-emergency-patient-support-first-aid-doctor-holding-in-hand-24x7-sign-and-medicine-icons-network-connection-on-virtual-screen-illustration-vector.jpg"
  },
  {
    name: "Advanced Diagnostics",
    img: "https://avignadiagnostics.com/creating-clarity/wp-content/uploads/2024/10/Types-of-diagnostic-labs-552x289.jpg"
  },
  {
    name: "Surgical Services",
    img: "https://ssir.org/images/articles/Fall2019_Feature_Sonderman_EyeSurgery592x333.jpg"
  },
  {
    name: "Ambulance & Transport",
    img: "https://testcv.tatamotors.com/assets/cv/files/2023-10/Features-of-the-TWA-for-Patient-Transport.jpg"
  },
  {
    name: "Wellness & Preventive Care",
    img: "https://www.denverhealthmedicalplan.org/sites/default/files/styles/full_width/public/2020-09/preventive_care.jpg"
  },
  {
    name: "Pharmacy Services",
    img: "https://www.integrityhospital.in/wp-content/uploads/2024/01/IMG_4972.jpeg"
  }
];

const ServicePage = () => {
  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate("/login"); // Navigate to login page on button click
  };

  return (
    <>
      <style>{`
        .service-wrapper {
          font-family: Arial, sans-serif;
          background: #fff;
        }

        /* HERO SECTION */
        .service-hero {
          height: 650px;
          display: flex;
          align-items: center;
          padding: 60px 7%;
          justify-content: flex-start;
          color: #fff;
          background-image: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${Seva});
          background-size: cover;
          background-position: center;
        }

        .service-hero h1 {
          font-size: 50px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .service-hero p {
          font-size: 20px;
          max-width: 600px;
          line-height: 1.6;
        }

        /* SERVICE GRID */
        .service-section {
          padding: 60px 7%;
        }

        .service-title {
          text-align: center;
          font-size: 36px;
          font-weight: 700;
          color: #0ea5e9;
          margin-bottom: 40px;
        }

        .service-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
        }

        .service-card {
          width: 320px;
          background: #fff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
          transition: 0.3s ease;
          cursor: pointer;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0px 6px 16px rgba(0,0,0,0.15);
        }

        .service-card img {
          width: 100%;
          height: 210px;
          object-fit: cover;
        }

        .service-card h3 {
          font-size: 22px;
          color: #0ea5e9;
          margin-bottom: 10px;
          text-align: center;
        }

        .service-card p {
          font-size: 16px;
          color: #555;
          line-height: 1.6;
          padding: 0 12px 20px;
          text-align: center;
        }

        /* CTA SECTION */
        .cta-section {
          background: #0ea5e9;
          padding: 60px 7%;
          color: #fff;
          text-align: center;
        }

        .cta-section h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .cta-section p {
          font-size: 18px;
          margin-bottom: 25px;
        }

        .cta-btn {
          padding: 14px 35px;
          background: white;
          color: #0ea5e9;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .cta-btn:hover {
          background-color: #cce7f9;
        }

        /* ------------------------ RESPONSIVE DESIGN ------------------------ */

        /* Tablets */
        @media (max-width: 992px) {
          .service-hero {
            height: 500px;
            padding: 40px 6%;
          }

          .service-hero h1 {
            font-size: 38px;
          }

          .service-hero p {
            font-size: 18px;
          }
        }

        /* Mobiles */
        @media (max-width: 600px) {
          .service-hero {
            height: 430px;
            padding: 30px 5%;
            text-align: left;
          }

          .service-hero h1 {
            font-size: 30px;
          }

          .service-hero p {
            font-size: 16px;
            width: 100%;
          }

          .service-card {
            width: 100%;
          }

          .service-title {
            font-size: 28px;
          }

          .cta-section h2 {
            font-size: 28px;
          }

          .cta-btn {
            width: 100%;
          }
        }
      `}</style>

      <div className="service-wrapper">
        {/* HERO */}
        <header className="service-hero">
          <div>
            <h1>Our HealthCare+ Services</h1>
            <p>Delivering world-class care with compassion, innovation and technology.</p>
          </div>
        </header>

        {/* SERVICE GRID */}
        <section className="service-section">
          <h2 className="service-title">What We Offer</h2>

          <div className="service-grid">
            {services.map((item) => (
              <div key={item.name} className="service-card">
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <p>
                  Providing trusted and advanced healthcare solutions with modern
                  technology and expert doctors.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2>Need Medical Assistance?</h2>
          <p>Our dedicated team is here to support you at every step.</p>

          <button className="cta-btn" onClick={handleAppointmentClick}>
            Book an Appointment
          </button>
        </section>
      </div>
    </>
  );
};

export default ServicePage;
