import React from "react";
import brainImage from "../assets/brain-image.png"; // keep your path

const NeurologyPage = () => {
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
          color: "#5c6bc0",
          marginBottom: "10px",
          fontSize: "16px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Our Specialist
      </p>
      <h1
        style={{
          fontSize: "36px",
          color: "#283593",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        Department of Brain & <br /> Neurological Sciences
      </h1>
      <p
        style={{
          maxWidth: "720px",
          margin: "0 auto 45px",
          color: "#6c757d",
          fontSize: "16px",
          lineHeight: "1.7",
        }}
      >
        Our Neurology department provides comprehensive care for patients with
        disorders of the brain, spine, and nervous system. With advanced
        diagnostic tools and experienced neurologists, we deliver timely,
        accurate, and compassionate treatment.
      </p>

      {/* Main Content */}
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
          {/* Point 1 */}
          <FeaturePoint
            number="1"
            title="Comprehensive Care"
            description="From headaches to complex neurological conditions, our team ensures complete evaluation and personalized care."
          />
          {/* Point 2 */}
          <FeaturePoint
            number="2"
            title="Expert Neurologists"
            description="Our neurologists and neurosurgeons work together to provide accurate diagnoses and advanced treatments."
          />
        </div>

        {/* Center Brain Image */}
        <div>
          <img
            src={brainImage}
            alt="Brain"
            style={{
              maxWidth: "320px",
              width: "100%",
              // No borderRadius, no boxShadow, just the floating animation
              ...floatingAnimation,
            }}
          />
        </div>



        {/* Right Info */}
        <div style={{ textAlign: "left", maxWidth: "260px" }}>
          {/* Point 3 */}
          <FeaturePoint
            number="3"
            title="Advanced Technology"
            description="Equipped with modern MRI, CT, and EEG facilities for accurate and early detection of neurological disorders."
          />
          {/* Point 4 */}
          <FeaturePoint
            number="4"
            title="24/7 Emergency Care"
            description="Round-the-clock stroke and neurology emergency services for critical time-sensitive conditions."
          />
        </div>
      </div>

      {/* Floating keyframes animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }

          /* Simple responsive helpers (optional) */
          @media (max-width: 768px) {
            .neuro-services-grid {
              grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)) !important;
            }
          }
        `}
      </style>

      {/* === Neurology Services Section === */}
      <div
        style={{
          padding: "10px 20px 20px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Section Header */}
        <h2
          style={{
            color: "#283593",
            fontSize: "30px",
            marginBottom: "10px",
            fontWeight: "700",
          }}
        >
          Advanced Neurology Services
        </h2>
        <p
          style={{
            color: "#6c757d",
            maxWidth: "720px",
            margin: "0 auto 35px",
            fontSize: "14px",
            lineHeight: "1.7",
          }}
        >
          We offer a wide range of neurological services, from evaluation and
          diagnosis to treatment and rehabilitation. Our goal is to improve your
          quality of life with patient-centered, evidence-based care.
        </p>

        {/* Services Grid – 6 cards, clean layout */}
        <div
          className="neuro-services-grid"
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
            badge="Brain Health"
            title="Epilepsy & Seizure Care"
            description="Advanced evaluation and treatment for seizure disorders with continuous monitoring and medication management."
            image="/images/epilepsy-care.jpg"
          />
          {/* Card 2 */}
          <ServiceCard
            badge="Emergency Care"
            title="Stroke Management Unit"
            description="Time-critical treatment for stroke patients with dedicated protocols to reduce disability and improve outcomes."
            image="/images/stroke-unit.jpg"
          />
          {/* Card 3 */}
          <ServiceCard
            badge="Spine Care"
            title="Spine & Nerve Disorders"
            description="Management of slipped disc, nerve compression, and spinal cord disorders with minimally invasive options."
            image="/images/spine-disorders.jpg"
          />
          {/* Card 4 */}
          <ServiceCard
            badge="Nerve & Muscle"
            title="Neuromuscular Disorders"
            description="Specialized care for conditions like neuropathy, myopathy, and muscular dystrophy with rehabilitation support."
            image="/images/neuromuscular.jpg"
          />
          {/* Card 5 */}
          <ServiceCard
            badge="Memory Clinic"
            title="Dementia & Cognitive Care"
            description="Assessment and management of memory loss, dementia, and cognitive decline with support for patients and families."
            image="/images/dementia-care.jpg"
          />
          {/* Card 6 */}
          <ServiceCard
            badge="Pediatric Neuro"
            title="Pediatric Neurology"
            description="Services for childhood epilepsy, developmental delay, cerebral palsy, and learning difficulties."
            image="/images/pediatric-neuro.jpg"
          />
        </div>
      </div>
    </div>
  );
};

/* === Small reusable components to keep layout clean === */

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
          backgroundColor: "#283593",
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
          color: "#3949ab",
          margin: 0,
          fontSize: "18px",
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
    e.currentTarget.style.boxShadow =
      "0 18px 45px rgba(40, 53, 147, 0.18)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 10px 30px rgba(40, 53, 147, 0.10)";
  };

  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        backgroundColor: "#f5f6ff",
        boxShadow: "0 10px 30px rgba(40, 53, 147, 0.10)",
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
      <div style={{ padding: "15px 18px", textAlign: "left", flex: 1 }}>
        <p
          style={{
            fontSize: "12px",
            margin: "0 0 6px",
            color: "#5c6bc0",
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
            fontSize: "18px",
            color: "#283593",
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

export default NeurologyPage;
