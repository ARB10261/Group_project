import React from "react"; 
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
    img: "https://testcv.tatamotors.com/assets/cv/files/2023-10/Features-of-the-TWA-for-Patient-Transport.jpg?VersionId=Qe8fK4EyEuW_5plSwFyCkzdMRDrUe93_"
  },
  {
    name: "Wellness & Preventive Care",
    img: "https://www.denverhealthmedicalplan.org/sites/default/files/styles/full_width/public/2020-09/preventive_care.jpg?itok=4kGgxRZJ"
  },
  {
    name: "Pharmacy Services",
    img: "https://www.integrityhospital.in/wp-content/uploads/2024/01/IMG_4972.jpeg"
  }
];

const ServicePage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff" }}>
      
      {/* HERO SECTION */}
      <header
        style={{
          height: "650px",  // 🔥 FIXED + Increased Height
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "60px 5%",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${Seva})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div style={{ textAlign: "left", maxWidth: "700px" }}>
          <h1 style={{ fontSize: "50px", fontWeight: "700", marginBottom: "15px" }}>
            Our HealthCare+ Services
          </h1>
          <p style={{ fontSize: "20px", lineHeight: "1.6" }}>
            Delivering world-class care with compassion, innovation and technology.
          </p>
        </div>
      </header>

      {/* SERVICE GRID */}
      <section style={{ padding: "60px 7%" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            textAlign: "center",
            color: "#0ea5e9",
            marginBottom: "40px",
          }}
        >
          What We Offer
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {services.map((item) => (
            <div
              key={item.name}
              className="service-card"
              style={cardStyle}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "100%", height: "210px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#0ea5e9",
                    textAlign: "center",
                    marginBottom: "10px",
                  }}
                >
                  {item.name}
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555", textAlign:"center" }}>
                  Providing trusted and advanced healthcare solutions with modern
                  technology and expert doctors.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          background: "#0ea5e9",
          padding: "60px 7%",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "15px" }}>
          Need Medical Assistance?
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "25px" }}>
          Our dedicated team is here to support you at every step.
        </p>

        <button
          style={{
            padding: "14px 35px",
            fontSize: "18px",
            fontWeight: "600",
            background: "white",
            color: "#0ea5e9",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Book an Appointment
        </button>
      </section>
    </div>
  );
};

/* CARD STYLE */
const cardStyle = {
  width: "320px",
  background: "#fff",
  borderRadius: "14px",
  overflow: "hidden",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};

export default ServicePage;
