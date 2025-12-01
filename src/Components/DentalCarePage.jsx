import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Dental from "../assets/Dental.jpg"; // hero / content image
import Dental2 from "../assets/Dental2.jpg"; // about section image

const DentalCarePage = () => {
  const floatingAnimation = {
    animation: "float 3s ease-in-out infinite",
  };

  // 👇 scroll to "Our Dental Services" section
  const handleScrollToServices = () => {
    const section = document.getElementById("dental-services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 👇 Intersection Observer for lazy-loading animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".lazy-section, .lazy-card");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        backgroundColor: "#f5f7fb",
        color: "#1d3c88",
      }}
    >
      {/* === HERO SECTION === */}
      <section
        className="lazy-section"
        style={{
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          padding: "60px 20px 40px",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Left Text */}
        <div style={{ maxWidth: "420px", textAlign: "left" }}>
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#1976d2",
              marginBottom: "8px",
            }}
          >
            Dental Care
          </p>
          <h1
            style={{
              fontSize: "34px",
              lineHeight: "1.25",
              margin: "0 0 15px",
              color: "#1d3c88",
              fontWeight: 700,
            }}
          >
            Changing lives
            <br />
            one smile at a time
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "#6c757d",
              lineHeight: "1.7",
              marginBottom: "22px",
            }}
          >
            Gentle, modern dentistry for the whole family. From routine
            cleanings to smile makeovers, we help you feel confident every time
            you smile.
          </p>

          <button
            onClick={handleScrollToServices}
            style={{
              padding: "10px 26px",
              backgroundColor: "#1976d2",
              color: "#fff",
              borderRadius: "4px",
              border: "none",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "background-color 0.3s ease, transform 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#145ca4";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#1976d2";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View All Services
          </button>
        </div>

        {/* Right Hero Image */}
        <div>
          <img
            src={Dental}
            alt="Dental Care"
            style={{
              maxWidth: "420px",
              width: "100%",
              borderRadius: "10px",
              ...floatingAnimation,
            }}
          />
        </div>
      </section>

      {/* KEYFRAMES & ANIMATION CLASSES */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .lazy-section.animate, .lazy-card.animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          @media (max-width: 768px) {
            .dental-features-grid {
              grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
            }

            .dental-services-grid {
              grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
            }

            .dental-two-col {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      {/* === SMALL FEATURE STRIP (4 CARDS) === */}
      <section
        className="lazy-section"
        style={{
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          backgroundColor: "#1976d2",
          padding: "24px 20px",
        }}
      >
        <div
          className="dental-features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "18px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <FeatureCard
            icon="🦷"
            title="Excellent Service"
            description="Comfort-focused care with modern equipment."
          />
          <FeatureCard
            icon="✅"
            title="Trusted Quality"
            description="Treatments planned around your needs."
          />
          <FeatureCard
            icon="🪙"
            title="Dental Implants"
            description="Restore missing teeth naturally."
          />
          <FeatureCard
            icon="⏰"
            title="24/7 Support"
            description="Emergency help when you need it."
          />
        </div>
      </section>

      {/* === OUR DENTAL SERVICES – 6 CARDS GRID === */}
      <section
        id="dental-services"
        className="lazy-section"
        style={{
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          padding: "50px 20px 40px",
          backgroundColor: "#f5f7fb",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "26px",
            color: "#1d3c88",
            marginBottom: "8px",
          }}
        >
          Our Dental Services
        </h2>
        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto 30px",
            fontSize: "14px",
            color: "#6c757d",
            lineHeight: "1.7",
          }}
        >
          A complete range of preventive, restorative, and cosmetic treatments
          to keep your teeth healthy and your smile bright.
        </p>

        <div
          className="dental-services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "22px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <ServiceCard
            className="lazy-card"
            badge="Preventive"
            title="Routine Checkups"
            description="Regular exams and cleanings to prevent cavities, gum disease, and other issues."
            image="/images/dental-checkup.jpg"
          />
          <ServiceCard
            className="lazy-card"
            badge="Hygiene"
            title="Teeth Cleaning"
            description="Professional cleaning to remove plaque, tartar, and stains for a fresher smile."
            image="/images/teeth-cleaning.jpg"
          />
          <ServiceCard
            className="lazy-card"
            badge="Cosmetic"
            title="Teeth Whitening"
            description="Safe whitening treatments that brighten your smile several shades."
            image="/images/teeth-whitening.jpg"
          />
          <ServiceCard
            className="lazy-card"
            badge="Restorative"
            title="Fillings & Crowns"
            description="Strong, natural-looking restorations to repair damaged or decayed teeth."
            image="/images/dental-crown.jpg"
          />
          <ServiceCard
            className="lazy-card"
            badge="Implants"
            title="Dental Implants"
            description="Permanent replacements for missing teeth that look and feel natural."
            image="/images/dental-implant.jpg"
          />
          <ServiceCard
            className="lazy-card"
            badge="Braces"
            title="Orthodontics"
            description="Braces and aligners to correct crooked, crowded, or misaligned teeth."
            image="/images/orthodontics.jpg"
          />
        </div>
      </section>

      {/* Rest of the sections remain same with lazy-section class for fade-in */}
      {/* ...About section and CTA can also have lazy-section class */}
    </div>
  );
};

// ✅ Make sure FeatureCard and ServiceCard can accept className
const FeatureCard = ({ icon, title, description, className = "" }) => {
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.18)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
  };

  return (
    <div
      className={`lazy-card ${className}`}
      style={{
        backgroundColor: "#1d3c88",
        color: "#fff",
        padding: "16px 14px",
        borderRadius: "6px",
        textAlign: "center",
        boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.8s, transform 0.8s",
        opacity: 0,
        transform: "translateY(30px)",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div style={{ fontSize: "26px", marginBottom: "6px" }}>{icon}</div>
      <h4
        style={{
          fontSize: "15px",
          margin: "0 0 6px",
          fontWeight: 600,
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontSize: "12px",
          margin: 0,
          lineHeight: "1.6",
          color: "#e3f2fd",
        }}
      >
        {description}
      </p>
    </div>
  );
};

const ServiceCard = ({ badge, title, description, image, className = "" }) => {
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 18px 40px rgba(25, 118, 210, 0.18)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(25, 118, 210, 0.1)";
  };

  return (
    <div
      className={`lazy-card ${className}`}
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        backgroundColor: "#ffffff",
        boxShadow: "0 10px 25px rgba(25, 118, 210, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.8s, transform 0.8s",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        opacity: 0,
        transform: "translateY(30px)",
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
            height: "190px",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
      <div style={{ padding: "12px 14px", textAlign: "left", flex: 1 }}>
        <p
          style={{
            fontSize: "11px",
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
            margin: "0 0 6px",
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

export default DentalCarePage;
