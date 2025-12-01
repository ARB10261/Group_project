import React from "react";
import heartImage from "../assets/heart-image.png"; // Adjust the path as necessary

const CardiologyPage = () => {
  const floatingAnimation = {
    animation: "float 3s ease-in-out infinite",
  };

  return (
    <div
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: "60px 20px",
        textAlign: "center",
        background: "#fff",
      }}
    >
      {/* Header */}
      <p style={{ color: "#1d3c88", marginBottom: "10px", fontSize: "16px" }}>
        Our Expert
      </p>
      <h1
        style={{
          fontSize: "36px",
          color: "#1976d2",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        Department of Heart <br /> & Vascular Surgery
      </h1>
      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto 50px",
          color: "#6c757d",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      >
        In most countries, a retail outlet for prescription drugs is subject to
        legislation; with requirements for storage conditions, staff
        qualifications, equipment, record keeping especially of controlled drugs
        and other matters.
      </p>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "50px",
        }}
      >
        {/* Left Info */}
        <div style={{ textAlign: "left", maxWidth: "250px" }}>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
          >
            <div
              style={{
                backgroundColor: "#1d3c88",
                color: "#fff",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "10px",
              }}
            >
              1
            </div>
            <h3 style={{ color: "#1976d2", margin: 0 }}>Efficient Drugs</h3>
          </div>
          <p style={{ color: "#6c757d", fontSize: "14px" }}>
            The best specialists of the city expect your health is your most
            important.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#1d3c88",
                color: "#fff",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "10px",
              }}
            >
              2
            </div>
            <h3 style={{ color: "#1976d2", margin: 0 }}>Our Mission</h3>
          </div>
          <p style={{ color: "#6c757d", fontSize: "14px" }}>
            Experienced doctors are ready to help at Medical Center.
          </p>
        </div>

        {/* Center Heart Image */}
        <div>
          <img
            src={heartImage}
            alt="Heart"
            loading="lazy"
            className="lazy-image"
            onLoad={(e) => e.currentTarget.classList.add("loaded")}
            style={{
              maxWidth: "300px",
              width: "100%",
              borderRadius: "10px",
              ...floatingAnimation,
            }}
          />
        </div>

        {/* Right Info */}
        <div style={{ textAlign: "left", maxWidth: "250px" }}>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
          >
            <div
              style={{
                backgroundColor: "#1d3c88",
                color: "#fff",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "10px",
              }}
            >
              3
            </div>
            <h3 style={{ color: "#1976d2", margin: 0 }}>Our Vision</h3>
          </div>
          <p style={{ color: "#6c757d", fontSize: "14px" }}>
            We are always ready to help you at the time you need help.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#1d3c88",
                color: "#fff",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "10px",
              }}
            >
              4
            </div>
            <h3 style={{ color: "#1976d2", margin: 0 }}>Medical Service</h3>
          </div>
          <p style={{ color: "#6c757d", fontSize: "14px" }}>
            Anytime you need help, you may contact us and our receptionist.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }

          .lazy-image {
            opacity: 0;
            transition: opacity 0.8s ease-in-out;
          }
          .lazy-image.loaded {
            opacity: 1;
          }

          /* 3 Columns on Medium & Large Screens */
          @media (min-width: 768px) {
            .services-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>

      {/* === Cardiac Services Section === */}
      <div
        style={{
          padding: "60px 20px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2 style={{ color: "#1976d2", fontSize: "32px", marginBottom: "10px" }}>
          Get A Cardiac Service
        </h2>
        <p
          style={{
            color: "#6c757d",
            maxWidth: "700px",
            margin: "0 auto 40px",
            fontSize: "14px",
            lineHeight: "1.6",
          }}
        >
          Likewise, many pharmacies are now rather grocery store-like in their
          design. In addition to medicines and prescriptions, many now sell a
          diverse arrangement.
        </p>

        {/* Services Grid */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            justifyItems: "center",
          }}
        >
          {/* Existing Card 1 */}
          <ServiceCard
            image="/images/angiography.jpg"
            label="Cardio-Med"
            title="Angiography"
          />

          {/* Existing Card 2 */}
          <ServiceCard
            image="/images/heart-failure.jpg"
            label="Health Care"
            title="Heart Failure"
          />

          {/* Existing Card 3 */}
          <ServiceCard
            image="/images/heart-bypass.jpg"
            label="Cardio-Med"
            title="Heart Bypass"
          />

          {/* Existing Card 4 */}
          <ServiceCard
            image="/images/heart-transplant.jpg"
            label="Doctor"
            title="Heart Transplant"
          />

          {/* ➕ New Card 5 */}
          <ServiceCard
            image="/images/cardiac-rehab.jpg"
            label="Rehab"
            title="Cardiac Rehabilitation"
          />

          {/* ➕ New Card 6 */}
          <ServiceCard
            image="/images/echocardiogram.jpg"
            label="Diagnostics"
            title="Echocardiogram"
          />
        </div>
      </div>
    </div>
  );
};

/* Reusable Card Component */
const ServiceCard = ({ image, label, title }) => (
  <div
    style={{
      width: "100%",
      borderRadius: "10px",
      overflow: "hidden",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <img
      src={image}
      alt={title}
      loading="lazy"
      className="lazy-image"
      onLoad={(e) => e.currentTarget.classList.add("loaded")}
      style={{ width: "100%", height: "200px", objectFit: "cover" }}
    />
    <div style={{ padding: "10px", textAlign: "left" }}>
      <p style={{ fontSize: "12px", margin: 0, color: "#1976d2" }}>{label}</p>
      <h3 style={{ margin: 0, fontSize: "16px", color: "#1d3c88" }}>{title}</h3>
    </div>
  </div>
);

export default CardiologyPage;
