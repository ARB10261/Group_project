import React from "react";
import heartImage from "../assets/heart-image.png"; // Adjust the path as necessary

const CardiologyPage = () => {
  // Floating animation for heart image
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
      <p
        style={{
          color: "#1d3c88",
          marginBottom: "10px",
          fontSize: "16px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
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
          margin: "0 auto 45px",
          color: "#6c757d",
          fontSize: "16px",
          lineHeight: "1.7",
        }}
      >
        Our Cardiology department offers preventive care, diagnostic tests, and
        advanced treatments for heart and vascular diseases. We combine
        experienced cardiologists, modern equipment, and compassionate care to
        protect your heart health.
      </p>

      {/* Main Content (Hero Layout) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "50px",
          marginBottom: "50px",
        }}
      >
        {/* Left Info */}
        <div style={{ textAlign: "left", maxWidth: "260px" }}>
          <FeaturePoint
            number="1"
            title="Efficient Treatment"
            description="Accurate diagnosis and personalized treatment plans for every heart condition."
          />
          <FeaturePoint
            number="2"
            title="Our Mission"
            description="To provide safe, ethical, and evidence-based cardiac care focused on long-term wellness."
          />
        </div>

        {/* Center Heart Image (no background, no shadow) */}
        <div>
          <img
            src={heartImage}
            alt="Heart"
            style={{
              maxWidth: "300px",
              width: "100%",
              ...floatingAnimation,
            }}
          />
        </div>

        {/* Right Info */}
        <div style={{ textAlign: "left", maxWidth: "260px" }}>
          <FeaturePoint
            number="3"
            title="Our Vision"
            description="Early detection, prevention, and advanced cardiac interventions for healthier communities."
          />
          <FeaturePoint
            number="4"
            title="24/7 Cardiac Care"
            description="Emergency heart care, continuous monitoring, and post-procedure support round the clock."
          />
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

          @media (max-width: 768px) {
            .cardio-services-grid {
              grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)) !important;
            }
          }
        `}
      </style>

      {/* === Cardiac Services Section === */}
      <div
        style={{
          padding: "40px 20px 20px",
          textAlign: "center",
        }}
      >
        {/* Section Header */}
        <h2
          style={{
            color: "#1976d2",
            fontSize: "30px",
            marginBottom: "10px",
            fontWeight: "700",
          }}
        >
          Get a Cardiac Service
        </h2>
        <p
          style={{
            color: "#6c757d",
            maxWidth: "700px",
            margin: "0 auto 35px",
            fontSize: "14px",
            lineHeight: "1.7",
          }}
        >
          From routine heart check-ups to complex cardiac surgeries, we provide
          a complete range of cardiac services with modern technology, skilled
          experts, and a patient-first approach.
        </p>

        {/* Services Grid – 6 cards */}
        <div
          className="cardio-services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "24px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* Card 1 */}
          <ServiceCard
            badge="Cardio-Med"
            title="Angiography"
            description="Contrast imaging to detect blockages and narrowing in coronary arteries with high precision."
            image="/images/angiography.jpg"
          />

          {/* Card 2 */}
          <ServiceCard
            badge="Health Care"
            title="Heart Failure Care"
            description="Comprehensive management including medication, lifestyle changes, and regular follow-up."
            image="/images/heart-failure.jpg"
          />

          {/* Card 3 */}
          <ServiceCard
            badge="Cardio-Med"
            title="Heart Bypass Surgery"
            description="Coronary artery bypass grafting (CABG) to restore adequate blood flow to the heart muscle."
            image="/images/heart-bypass.jpg"
          />

          {/* Card 4 */}
          <ServiceCard
            badge="Doctor"
            title="Heart Transplant"
            description="Evaluation, surgery, and long-term follow-up for patients needing heart transplantation."
            image="/images/heart-transplant.jpg"
          />

          {/* Card 5 */}
          <ServiceCard
            badge="Diagnostic"
            title="Echocardiography"
            description="Ultrasound-based imaging to assess heart structure, pumping strength, and valve function."
            image="/images/echocardiography.jpg"
          />

          {/* Card 6 */}
          <ServiceCard
            badge="Monitoring"
            title="Holter & ECG Monitoring"
            description="Continuous ECG and rhythm monitoring to detect arrhythmias and other electrical abnormalities."
            image="/images/holter-monitor.jpg"
          />
        </div>
      </div>
    </div>
  );
};

/* === Reusable Components === */

const FeaturePoint = ({ number, title, description }) => (
  <>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
      }}
    >
      <div
        style={{
          backgroundColor: "#1d3c88",
          color: "#fff",
          borderRadius: "50%",
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "10px",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        {number}
      </div>
      <h3
        style={{
          color: "#1976d2",
          margin: 0,
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        {title}
      </h3>
    </div>
    <p
      style={{
        color: "#6c757d",
        fontSize: "14px",
        marginBottom: "20px",
        lineHeight: "1.6",
      }}
    >
      {description}
    </p>
  </>
);

const ServiceCard = ({ badge, title, description, image }) => {
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 18px 40px rgba(25, 118, 210, 0.18)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(25, 118, 210, 0.10)";
  };

  return (
    <div
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        backgroundColor: "#f5f7fb",
        boxShadow: "0 10px 25px rgba(25, 118, 210, 0.10)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div style={{ overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "scale(1.06)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        />
      </div>
      <div style={{ padding: "12px 14px", textAlign: "left", flex: 1 }}>
        <p
          style={{
            fontSize: "12px",
            margin: "0 0 6px",
            color: "#1976d2",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontWeight: 600,
          }}
        >
          {badge}
        </p>
        <h3
          style={{
            margin: "0 0 8px",
            fontSize: "16px",
            color: "#1d3c88",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            color: "#6c757d",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardiologyPage;
