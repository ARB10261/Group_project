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
      <section
        style={{
          padding: "80px 5%",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${Healthcareimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "700", maxWidth: "600px", lineHeight: "1.2" }}>
          Where caring for your <br /> Health is all we do
        </h1>

        <p style={{ maxWidth: "600px", marginTop: "20px", fontSize: "18px", lineHeight: "1.6" }}>
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
      </section>

      {/* --------------------------------------------------
          ABOUT SECTION
      -------------------------------------------------- */}
      <section style={{ padding: "60px 5%", background: "#fff" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
          <div style={{ display: "flex", gap: "15px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <img src={Womencareimage} style={aboutSmallImage} alt="" />
              <img src={Healthcareimage1} style={aboutSmallImage} alt="" />
            </div>

            <div>
              <img src={Healthserviceimage} alt="" style={aboutLargeImage} />
            </div>
          </div>

          <div style={{ flex: 1, minWidth: "300px" }}>
            <h2 style={heading}>Personal care & healthy living</h2>
            <p style={para}>HealthCare+ is a digital healthcare management system.</p>

            <ul style={{ padding: 0, listStyle: "none" }}>
              {[
                "✔ Easy patient registration",
                "✔ Doctor availability system",
                "✔ Smart appointment reminders",
                "✔ Real-time performance reports",
              ].map((item, i) => (
                <li key={i} style={listItem}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          SPECIALTY CENTERS (Hover Effect Only)
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
            { name: "Women & Child Hospital", img: babyImage },
            { name: "Cancer Institute", img: cancerimage },
            { name: "Cardiology Care", img: cardioimage },
          ].map((item) => (
            <div key={item.name} className="hover-card" style={cardStyle}>
              <img
                src={item.img}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                alt=""
              />
              <div style={{ padding: "16px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: "600" }}>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------
          WORLD MAP SECTION + FLAGS
      -------------------------------------------------- */}
      <section style={{ padding: "60px 5%" }}>
        <h2 style={headingCenter}>We serve across the globe</h2>

        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "40px", gap: "40px", justifyContent: "center" }}>
          
          <img
            src="https://img.freepik.com/free-vector/professional-medical-infographic-with-photo_23-2148370869.jpg?w=740"
            style={{ width: "600px", maxWidth: "100%", borderRadius: "12px" }}
            alt=""
          />

          <ul style={{ fontSize: "18px", lineHeight: "2", padding: 0, listStyle: "none" }}>
            {countryList.map((c) => (
              <li key={c.name} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <img
                  src={`https://flagsapi.com/${c.code}/flat/32.png`}
                  alt=""
                  width="32"
                  height="22"
                  style={{ borderRadius: "4px" }}
                />
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

/* ---------------------------------------------
    STYLES 
--------------------------------------------- */

const aboutSmallImage = {
  width: "240px",
  height: "180px",
  objectFit: "cover",
  borderRadius: "12px",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
};

const aboutLargeImage = {
  width: "260px",
  height: "380px",
  objectFit: "cover",
  borderRadius: "12px",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
};

const heading = {
  fontSize: "36px",
  fontWeight: "700",
  color: "#0057d9",
};

const headingCenter = {
  fontSize: "36px",
  fontWeight: "700",
  textAlign: "center",
  color: "#0057d9",
};

const para = {
  fontSize: "17px",
  color: "#444",
};

const listItem = {
  fontSize: "16px",
  marginBottom: "10px",
  fontWeight: "500",
};

/* Hover Card Style */
const cardStyle = {
  width: "300px",
  background: "#fff",
  borderRadius: "14px",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.3s ease, boxShadow 0.3s ease",
};

/* Add Hover Effec */
document.addEventListener("mouseover", (e) => {
  if (e.target.closest(".hover-card")) {
    const card = e.target.closest(".hover-card");
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0px 6px 18px rgba(0,0,0,0.15)";
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.closest(".hover-card")) {
    const card = e.target.closest(".hover-card");
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.1)";
  }
});

export default CompleteWebsite;
