import React from "react";
import babyImage from "../Images/baby image.jpg";
import cancerimage from "../Images/cancer image.jpg";
import cardioimage from "../Images/Cardio image.jpg";
import Healthcareimage from "../Images/Healthcareimage.jpg";



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
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            maxWidth: "600px",
            lineHeight: "1.2",
          }}
        >
          Where caring for your <br /> Health is all we do
        </h1>

        <p
          style={{
            maxWidth: "600px",
            marginTop: "20px",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Experience world-class healthcare with Healthcare+ Hospitals.
          Personalized care, advanced treatments, and expert doctors dedicated
          to your well-being.
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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "40px",
          }}
        >

          {/* IMAGE GRID */}
          <div style={{ display: "flex", gap: "15px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <img src="/assets/about1.jpg" style={aboutSmallImage} alt="About 1" />
              <img src="/assets/about3.jpg" style={aboutSmallImage} alt="About 3" />
            </div>

            <div>
              <img
                src={Healthcareimage}
                alt="Healthcare About"
                style={aboutLargeImage}
              />
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h2 style={heading}>Personal care & healthy living</h2>

            <p style={para}>
              HealthCare+ is a digital healthcare management system designed to
              simplify hospital operations. It connects patients, doctors, and
              administrators on a single platform, enabling seamless management
              of appointments, records, and schedules with just a few clicks.
            </p>

            <ul style={{ padding: 0, listStyle: "none" }}>
              {[
                "✔ Easy patient registration and record tracking",
                "✔ Doctor availability and scheduling system",
                "✔ Smart appointment management with reminders",
                "✔ Real-time analytics and performance reports",
              ].map((item, i) => (
                <li key={i} style={listItem}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          SPECIALTY CENTERS
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
            <div
              key={item.name}
              style={{
                width: "300px",
                background: "#fff",
                borderRadius: "14px",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <img
                src={item.img}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                alt={item.name}
              />
              <div style={{ padding: "16px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: "600" }}>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------
          WORLD MAP SECTION
      -------------------------------------------------- */}
      <section style={{ padding: "60px 5%" }}>
        <h2 style={headingCenter}>We serve across the globe</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "40px",
            gap: "40px",
            justifyContent: "center",
          }}
        >
          <img
            src="https://img.freepik.com/free-vector/professional-medical-infographic-with-photo_23-2148370869.jpg?w=740"
            style={{ width: "600px", maxWidth: "100%", borderRadius: "12px" }}
            alt="Map"
          />

          <ul style={{ fontSize: "18px", lineHeight: "2" }}>
            {[
              "Bosnia",
              "Bulgaria",
              "Denmark",
              "Georgia",
              "Greece",
              "India",
              "Norway",
              "Romania",
              "Sweden",
              "Ukraine",
              "Cyprus",
              "Hungary",
              "Poland",
              "Serbia",
              "Turkey",
            ].map((country) => (
              <li key={country}>🌍 {country}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* --------------------------------------------------
          RESPONSIVE DESIGN
      -------------------------------------------------- */}
      <style>
        {`
          @media (max-width: 768px) {
            h1 { font-size: 32px !important; }
            h2 { text-align: center !important; }
            section div { flex-direction: column !important; text-align: center !important; }
            img { width: 100% !important; height: 240px !important; }
          }
        `}
      </style>
    </div>
  );
};


/* ---------------------------------------------
    REUSABLE STYLE OBJECTS
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
  marginBottom: "12px",
  lineHeight: "1.3",
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
  lineHeight: "1.6",
  marginBottom: "20px",
};

const listItem = {
  fontSize: "16px",
  marginBottom: "10px",
  fontWeight: "500",
  color: "#333",
};

export default CompleteWebsite;
