import React from "react";
import babyImage from "../Images/baby image.jpg";
import cancerimage from "../Images/cancer image.jpg";
import cardioimage from "../Images/Cardio image.jpg";
import Healthcareimage from "../Images/Healthcareimage.jpg";
import Womencareimage from "../Images/Womencare image.jpg";
import Healthcareimage1 from "../Images/Healthcare image1.jpg";
import Healthserviceimage from "../Images/Healthservice image.jpg";

const countryList = [
  { name: "Bosnia", code: "BA" },
  { name: "Bulgaria", code: "BG" },
  { name: "Denmark", code: "DK" },
  { name: "Georgia", code: "GE" },
  { name: "Greece", code: "GR" },
  { name: "India", code: "IN" },
  { name: "Norway", code: "NO" },
  { name: "Romania", code: "RO" },
  { name: "Sweden", code: "SE" },
  { name: "Ukraine", code: "UA" },
  { name: "Cyprus", code: "CY" },
  { name: "Hungary", code: "HU" },
  { name: "Poland", code: "PL" },
  { name: "Serbia", code: "RS" },
  { name: "Turkey", code: "TR" },
];

const About = () => {
  return (
    <div
      style={{
        fontFamily:
          '"Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        background: "#ffffff",
        color: "#111827",
      }}
    >
      {/* INLINE STYLE FOR HOVERS USING CLASSES */}
      <style>{`
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: scale(1.05);
          box-shadow: 0px 10px 25px rgba(15, 23, 42, 0.18);
        }

        .map-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .map-hover:hover {
          transform: scale(1.03);
          box-shadow: 0px 10px 30px rgba(15, 23, 42, 0.25);
        }

        .flag-hover {
          transition: transform 0.25s ease, color 0.25s ease;
        }
        .flag-hover:hover {
          transform: translateX(6px);
          color: #0ea5e9;
        }

        /* 🔥 Appointment button hover */
        .appointment-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        }
        .appointment-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 45px rgba(2, 132, 199, 0.65);
          filter: brightness(1.05);
        }
        .appointment-btn:active {
          transform: translateY(0);
          box-shadow: 0 14px 30px rgba(2, 132, 199, 0.45);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 32px !important;
          }
        }
      `}</style>

      {/* --------------------------------------------------
        HERO SECTION (height increased)
      -------------------------------------------------- */}
      <header
        style={{
          padding: "120px 5% 100px",
          minHeight: "80vh",
          backgroundImage: `linear-gradient(rgba(15,23,42,0.6), rgba(15,23,42,0.6)), url(${Healthcareimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          className="hero-title"
          style={{
            fontSize: "48px",
            fontWeight: "700",
            maxWidth: "600px",
            lineHeight: 1.2,
          }}
        >
          Where caring for your <br /> health is all we do
        </h1>

        <p
          style={{
            maxWidth: "600px",
            marginTop: "20px",
            fontSize: "18px",
            color: "#e5e7eb",
          }}
        >
          Experience world-class healthcare with HealthCare+ Hospitals, powered
          by technology and compassion.
        </p>

        {/* <button
          className="appointment-btn"
          style={{
            marginTop: "25px",
            padding: "12px 30px",
            background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
            border: "none",
            borderRadius: "999px",
            color: "#ffffff",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: 600,
            boxShadow: "0 18px 40px rgba(2, 132, 199, 0.55)",
            display: "inline-block",   // ✅ keep width tight to content
            width: "auto",             // ✅ ignore any external width:100%
          }}
        >
          Book an Appointment
        </button> */}


      </header>

      {/* --------------------------------------------------
        ABOUT SECTION
      -------------------------------------------------- */}
      <section
        style={{
          padding: "80px 10%",
          background: "#ffffff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "900px", width: "100%" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#0ea5e9",
              marginBottom: "25px",
            }}
          >
            Personal care & healthy living
          </h2>

          <p style={para}>
            HealthCare+ is a next–generation digital healthcare management
            system designed to streamline patient experiences and improve
            clinical efficiency. Our goal is to make healthcare more accessible,
            reliable, and seamlessly connected for everyone.
          </p>

          <p style={para}>
            From appointment bookings to real-time medical data management,
            HealthCare+ empowers both patients and healthcare professionals to
            engage with advanced technology while keeping human care at the
            center of every interaction.
          </p>

          <ul style={{ padding: 0, listStyle: "none", marginTop: "25px" }}>
            {[
              "✔ Easy patient registration",
              "✔ Doctor availability & smart scheduling",
              "✔ Automated appointment reminders",
              "✔ Real-time performance and health reports",
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "10px",
                  fontSize: "17px",
                  fontWeight: "500",
                  color: "#111827",
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          <p style={{ ...para, marginTop: "25px" }}>
            With a strong focus on personalized care and healthy living, our
            platform helps individuals stay informed, connected, and proactive
            about their health—ensuring they always receive the best possible
            care.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------
        SPECIALTY CARDS
      -------------------------------------------------- */}
      <section style={{ padding: "60px 5%", background: "#f3f4f6" }}>
        <h2 style={headingCenter}>Our Specialty Centers</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "25px",
            marginTop: "30px",
            justifyContent: "center",
          }}
        >
          {[
            { name: "Women's Health Center", img: Womencareimage },
            { name: "Medical Diagnostics", img: Healthcareimage1 },
            { name: "Global Health Services", img: Healthserviceimage },
            { name: "Women & Child Hospital", img: babyImage },
            { name: "Cancer Institute", img: cancerimage },
            { name: "Cardiology Care", img: cardioimage },
          ].map((item) => (
            <div key={item.name} className="hover-card" style={cardStyle}>
              <img
                src={item.img}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
                alt={item.name}
              />
              <div style={{ padding: "16px" }}>
                <h3
                  style={{
                    fontSize: "19px",
                    fontWeight: "600",
                    color: "#0f172a",
                  }}
                >
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------
        WORLD MAP + COUNTRIES
      -------------------------------------------------- */}
      <section style={{ padding: "60px 5%", background: "#ffffff" }}>
        <h2 style={headingCenter}>We serve across the globe</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          {/* MAP */}
          <img
            src="https://img.freepik.com/free-vector/professional-medical-infographic-with-photo_23-2148370869.jpg?w=740"
            className="map-hover"
            style={{
              width: "600px",
              maxWidth: "100%",
              borderRadius: "14px",
              border: "3px solid #0ea5e9",
            }}
            alt="World medical network"
          />

          {/* COUNTRY LIST */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px 40px",
              fontSize: "17px",
            }}
          >
            {countryList.map((c) => (
              <div
                key={c.name}
                className="flag-hover"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={`https://flagsapi.com/${c.code}/flat/32.png`}
                  alt={c.name}
                  style={{ borderRadius: "4px" }}
                />
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/* ---------------------------------------------
    STYLE VARIABLES
--------------------------------------------- */
const headingCenter = {
  fontSize: "36px",
  fontWeight: "700",
  textAlign: "center",
  color: "#0ea5e9",
};

const para = {
  fontSize: "17px",
  color: "#374151",
  lineHeight: "1.8",
};

const cardStyle = {
  width: "300px",
  background: "#ffffff",
  borderRadius: "14px",
  overflow: "hidden",
  cursor: "pointer",
  boxShadow: "0px 4px 12px rgba(15, 23, 42, 0.08)",
};

export default About;
