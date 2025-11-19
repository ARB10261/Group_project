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

const CompleteWebsite = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff" }}>

      {/* --------------------------------------------------
        HERO SECTION
      -------------------------------------------------- */}
      <header
        style={{
          padding: "80px 5%",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${Healthcareimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "700", maxWidth: "600px" }}>
          Where caring for your <br /> Health is all we do
        </h1>

        <p style={{ maxWidth: "600px", marginTop: "20px", fontSize: "18px" }}>
          Experience world-class healthcare with Healthcare+ Hospitals.
        </p>

        <button
          style={{
            marginTop: "25px",
            padding: "12px 30px",
            background: "#0057d9",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Book an Appointment
        </button>
      </header>

      {/* --------------------------------------------------
        ABOUT SECTION (improved spacing)
      -------------------------------------------------- */}
      <section
        style={{
          padding: "80px 10%",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "900px", width: "100%" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#0057d9",
              marginBottom: "25px",
            }}
          >
            Personal care & healthy living
          </h2>

          <p style={para}>
            HealthCare+ is a next–generation digital healthcare management system
            designed to streamline patient experiences and improve clinical
            efficiency. Our goal is to make healthcare more accessible, reliable,
            and seamlessly connected for everyone.
          </p>

          <p style={para}>
            From appointment bookings to real-time medical data management,
            HealthCare+ empowers both patients and healthcare professionals to
            engage with the latest technology in the medical field.
          </p>

          <ul style={{ padding: 0, listStyle: "none", marginTop: "25px" }}>
            {[
              "✔ Easy patient registration",
              "✔ Doctor availability system",
              "✔ Smart appointment reminders",
              "✔ Real-time performance reports",
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "12px",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          <p style={{ ...para, marginTop: "25px" }}>
            With a strong focus on personalized care and healthy living, our
            platform helps individuals stay informed, stay connected, and stay
            healthy—ensuring they always receive the best possible care.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------
        SPECIALTY CARDS (6 Hover Cards)
      -------------------------------------------------- */}
      <section style={{ padding: "60px 5%", background: "#f7faff" }}>
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
                alt=""
              />
              <div style={{ padding: "16px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: "600" }}>
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------
        WORLD MAP + 2 COLUMN COUNTRIES + Hover
      -------------------------------------------------- */}
      <section style={{ padding: "60px 5%" }}>
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
          {/* MAP WITH HOVER */}
          <img
            src="https://img.freepik.com/free-vector/professional-medical-infographic-with-photo_23-2148370869.jpg?w=740"
            className="map-hover"
            style={{
              width: "600px",
              maxWidth: "100%",
              borderRadius: "12px",
              border: "4px solid #0057d9",
              transition: "0.3s",
            }}
            alt=""
          />

          {/* COUNTRY LIST (2 columns) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px 40px",
              fontSize: "18px",
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
                  transition: "0.3s",
                }}
              >
                <img
                  src={`https://flagsapi.com/${c.code}/flat/32.png`}
                  alt=""
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
  color: "#0057d9",
};

const para = {
  fontSize: "17px",
  color: "#444",
  lineHeight: "1.8",
};

const cardStyle = {
  width: "300px",
  background: "#fff",
  borderRadius: "14px",
  overflow: "hidden",
  cursor: "pointer",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

/* ---------------------------------------------
    GLOBAL HOVER EVENTS
--------------------------------------------- */

document.addEventListener("mouseover", (e) => {
  if (e.target.closest(".hover-card")) {
    const card = e.target.closest(".hover-card");
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0px 6px 18px rgba(0,0,0,0.15)";
  }
  if (e.target.closest(".map-hover")) {
    e.target.style.transform = "scale(1.03)";
    e.target.style.boxShadow = "0px 6px 18px rgba(0,0,0,0.2)";
  }
  if (e.target.closest(".flag-hover")) {
    e.target.closest(".flag-hover").style.transform = "translateX(6px)";
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.closest(".hover-card")) {
    const card = e.target.closest(".hover-card");
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.1)";
  }
  if (e.target.closest(".map-hover")) {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "none";
  }
  if (e.target.closest(".flag-hover")) {
    e.target.closest(".flag-hover").style.transform = "translateX(0)";
  }
});

export default CompleteWebsite;