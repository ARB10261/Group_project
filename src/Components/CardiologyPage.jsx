import React from "react";
import heartImage from "../assets/heart-image.png"; // Adjust the path as necessary

const CardiologyPage = () => {
  // Floating animation keyframes as a style string
  const floatingAnimation = {
    animation: "float 3s ease-in-out infinite",
  };

  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: "60px 20px",
        textAlign: "center",
        background: "#fff",
      }}
    >
      {/* Header */}
      <p style={{ color: "#1d3c88", marginBottom: "10px", fontSize: "16px" }}>Our Expert</p>
      <h1 style={{ fontSize: "36px", color: "#1976d2", fontWeight: "700", marginBottom: "20px" }}>
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
        In most countries, a retail outlet for prescription drugs is subject to legislation; with requirements
        for storage conditions, staff qualifications, equipment, record keeping especially of controlled drugs
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
          <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
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
            The best specialists of the city expect your health is your most important.
          </p>

          <div style={{ display: "flex", alignItems: "center", marginTop: "20px", marginBottom: "10px" }}>
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

        {/* Center Heart Image with floating animation */}
        <div>
          <img
            src={heartImage}
            alt="Heart"
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
          <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
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

          <div style={{ display: "flex", alignItems: "center", marginTop: "20px", marginBottom: "10px" }}>
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

      {/* Floating keyframes animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
};

export default CardiologyPage;
