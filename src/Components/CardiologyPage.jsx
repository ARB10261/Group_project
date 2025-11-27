import React from "react";
import heartImage from "../assets/heart-image.png"; // Update the correct path

const CardiologyPage = () => {
<<<<<<< HEAD
  // Floating animation for heart image
=======
>>>>>>> cfbf434dc3838050bd3c2091d73b44c88c5e3396
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
<<<<<<< HEAD
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
=======
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
>>>>>>> cfbf434dc3838050bd3c2091d73b44c88c5e3396
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "50px",
<<<<<<< HEAD
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
=======
          padding: "40px 20px",
        }}
      >
        {/* Left Points */}
        <div style={{ maxWidth: "260px", textAlign: "left" }}>
          <CardPoint number="1" title="Efficient Drugs" text="The best cardiology specialists ensure high-quality treatments for your heart health." />

          <CardPoint number="2" title="Our Mission" text="Delivering modern cardiac care with compassion and precision." />
        </div>

        {/* Floating Heart Image */}
>>>>>>> cfbf434dc3838050bd3c2091d73b44c88c5e3396
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

<<<<<<< HEAD
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
=======
        {/* Right Points */}
        <div style={{ maxWidth: "260px", textAlign: "left" }}>
          <CardPoint number="3" title="Our Vision" text="Creating a healthier tomorrow with expert heart & vascular care." />

          <CardPoint number="4" title="Medical Service" text="24/7 cardiac emergency support with advanced diagnosis." />
>>>>>>> cfbf434dc3838050bd3c2091d73b44c88c5e3396
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

          @media (max-width: 768px) {
            .cardio-services-grid {
              grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)) !important;
            }
          }
        `}
      </style>

<<<<<<< HEAD
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
=======
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
>>>>>>> cfbf434dc3838050bd3c2091d73b44c88c5e3396
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
