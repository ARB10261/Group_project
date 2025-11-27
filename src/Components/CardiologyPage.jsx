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

{/* === Cardiac Services Section === */}
<div style={{ padding: "60px 20px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
  {/* Section Header */}
  <h2 style={{ color: "#1976d2", fontSize: "32px", marginBottom: "10px" }}>
    Get A Cardiac Service
  </h2>
  <p style={{ color: "#6c757d", maxWidth: "700px", margin: "0 auto 40px", fontSize: "14px", lineHeight: "1.6" }}>
    Likewise, many pharmacies are now rather grocery store-like in their design. In addition to medicines and prescriptions, many now sell a diverse arrangement.
  </p>

  {/* Services Grid */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      justifyItems: "center",
    }}
  >
    {/* Card 1 */}
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
        src="/images/angiography.jpg"
        alt="Angiography"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div style={{ padding: "10px", textAlign: "left" }}>
        <p style={{ fontSize: "12px", margin: 0, color: "#1976d2" }}>Cardio-Med</p>
        <h3 style={{ margin: 0, fontSize: "16px", color: "#1d3c88" }}>Angiography</h3>
      </div>
    </div>

    {/* Card 2 */}
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
        src="/images/heart-failure.jpg"
        alt="Heart Failure"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div style={{ padding: "10px", textAlign: "left" }}>
        <p style={{ fontSize: "12px", margin: 0, color: "#1976d2" }}>Health Care</p>
        <h3 style={{ margin: 0, fontSize: "16px", color: "#1d3c88" }}>Heart Failure</h3>
      </div>
    </div>

    {/* Card 3 */}
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
        src="/images/heart-bypass.jpg"
        alt="Heart Bypass"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div style={{ padding: "10px", textAlign: "left" }}>
        <p style={{ fontSize: "12px", margin: 0, color: "#1976d2" }}>Cardio-Med</p>
        <h3 style={{ margin: 0, fontSize: "16px", color: "#1d3c88" }}>Heart Bypass</h3>
      </div>
    </div>

    {/* Card 4 */}
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
        src="/images/heart-transplant.jpg"
        alt="Heart Transplant"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div style={{ padding: "10px", textAlign: "left" }}>
        <p style={{ fontSize: "12px", margin: 0, color: "#1976d2" }}>Doctor</p>
        <h3 style={{ margin: 0, fontSize: "16px", color: "#1d3c88" }}>Heart Transplant</h3>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default CardiologyPage;
