import React from "react";
import heartImage from "../assets/heart-image.png"; // Update the correct path

const CardiologyPage = () => {
  const floatingAnimation = {
    animation: "float 3s ease-in-out infinite",
  };

  const cardiacServices = [
    {
      tag: "Cardio-Med",
      title: "Angiography",
      img: "/images/angiography.jpg",
    },
    {
      tag: "Health Care",
      title: "Heart Failure",
      img: "/images/heart-failure.jpg",
    },
    {
      tag: "Cardio-Med",
      title: "Heart Bypass",
      img: "/images/heart-bypass.jpg",
    },
    {
      tag: "Doctor",
      title: "Heart Transplant",
      img: "/images/heart-transplant.jpg",
    },
    {
      tag: "Monitoring",
      title: "ICU Cardiac Care",
      img: "/images/cardiac-icu.jpg",
    },
    {
      tag: "Surgery",
      title: "Valve Replacement",
      img: "/images/valve-replace.jpg",
    },
  ];

  return (
    <div
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: "#fff",
      }}
    >
      {/* Header Section */}
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <p style={{ color: "#1d3c88", fontSize: "16px" }}>Our Expert</p>

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
            margin: "0 auto",
            color: "#6c757d",
            lineHeight: "1.6",
          }}
        >
          We provide world-class cardiac treatment with advanced technology,
          skilled surgeons, and compassionate care for every patient.
        </p>
      </div>

      {/* Main 3-Column Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "50px",
          padding: "40px 20px",
        }}
      >
        {/* Left Points */}
        <div style={{ maxWidth: "260px", textAlign: "left" }}>
          <CardPoint number="1" title="Efficient Drugs" text="The best cardiology specialists ensure high-quality treatments for your heart health." />

          <CardPoint number="2" title="Our Mission" text="Delivering modern cardiac care with compassion and precision." />
        </div>

        {/* Floating Heart Image */}
        <div>
          <img
            src={heartImage}
            alt="Heart Model"
            style={{
              maxWidth: "300px",
              width: "100%",
              ...floatingAnimation,
            }}
          />
        </div>

        {/* Right Points */}
        <div style={{ maxWidth: "260px", textAlign: "left" }}>
          <CardPoint number="3" title="Our Vision" text="Creating a healthier tomorrow with expert heart & vascular care." />

          <CardPoint number="4" title="Medical Service" text="24/7 cardiac emergency support with advanced diagnosis." />
        </div>
      </div>

      {/* Floating Animation Keyframe */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      {/* Cardiac Service Cards Section */}
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#1976d2", fontSize: "32px", marginBottom: "10px" }}>
          Get A Cardiac Service
        </h2>

        <p
          style={{
            color: "#6c757d",
            maxWidth: "700px",
            margin: "0 auto 40px",
            lineHeight: "1.6",
          }}
        >
          Choose from our advanced treatments performed by experienced cardiologists.
        </p>

        {/* Cards Grid */}
        <div
          className="card-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "25px",
            padding: "0 20px",
          }}
        >
          {cardiacServices.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>

        {/* RESPONSIVE GRID */}
        <style>
          {`
            @media (max-width: 992px) {
              .card-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }

            @media (max-width: 768px) {
              .card-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

/* ---------------------------------------
   SUB COMPONENTS
----------------------------------------*/

const CardPoint = ({ number, title, text }) => (
  <div style={{ marginBottom: "30px" }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "#1d3c88",
          color: "#fff",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "12px",
        }}
      >
        {number}
      </div>

      <h3 style={{ color: "#1976d2", margin: 0, fontSize: "18px" }}>{title}</h3>
    </div>

    <p style={{ color: "#6c757d", fontSize: "14px", marginLeft: "44px" }}>
      {text}
    </p>
  </div>
);

const ServiceCard = ({ item }) => (
  <div
    style={{
      width: "100%",
      background: "#fff",
      borderRadius: "10px",
      overflow: "hidden",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: "0.3s",
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <img
      src={item.img}
      alt={item.title}
      style={{ width: "100%", height: "220px", objectFit: "cover" }}
    />

    <div style={{ padding: "10px", textAlign: "left" }}>
      <p style={{ fontSize: "12px", color: "#1976d2", margin: 0 }}>{item.tag}</p>
      <h3 style={{ fontSize: "18px", margin: "5px 0", color: "#1d3c88" }}>
        {item.title}
      </h3>
    </div>
  </div>
);

export default CardiologyPage;
