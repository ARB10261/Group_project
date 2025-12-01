import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 ADD THIS
import labHeroImg from "../assets/lab/lab-hero.jpg"; // big banner image
import labDoc1 from "../assets/lab/lab-doctor-1.jpg";
import labDoc2 from "../assets/lab/lab-doctor-2.jpg";
import labDoc3 from "../assets/lab/lab-doctor-3.jpg";
import labDoc4 from "../assets/lab/lab-doctor-4.jpg";
import labDoc5 from "../assets/lab/lab-doctor-5.jpg"; // NEW
import labDoc6 from "../assets/lab/lab-doctor-6.jpg"; // NEW
import labDoc7 from "../assets/lab/lab-doctor-7.jpg"; // NEW
import labDoc8 from "../assets/lab/lab-doctor-8.jpg"; // NEW
import happyPatientImg from "../assets/lab/happy-patient.jpg";

const LaboratoryPage = () => {
  const [showAllDoctors, setShowAllDoctors] = useState(false);
  const navigate = useNavigate(); // 👈 INIT NAVIGATE

  const serviceCards = [
    {
      title: "Biochemistry",
      desc: "Comprehensive metabolic and biochemical panel testing with quick turnaround.",
    },
    {
      title: "Hematology",
      desc: "Accurate blood analysis using fully automated analyzers.",
    },
    {
      title: "Microbiology",
      desc: "Culture & sensitivity testing for a wide range of infections.",
    },
    {
      title: "Molecular Diagnostics",
      desc: "PCR-based tests for infectious and genetic conditions.",
    },
    {
      title: "Histopathology",
      desc: "Tissue examination and biopsy reporting by expert pathologists.",
    },
    {
      title: "Immunology",
      desc: "Hormone, allergy and autoimmune profile assessments.",
    },
    {
      title: "Clinical Pathology",
      desc: "Routine urine, stool and body fluid analysis for accurate diagnosis.",
    },
    {
      title: "Toxicology & Drug Screening",
      desc: "Screening and confirmation of therapeutic drugs and toxic substances.",
    },
  ];

  const doctorCards = [
    { img: labDoc1, name: "Dr. Anitha Rao", role: "Pathologist" },
    { img: labDoc2, name: "Dr. Rohan Mehta", role: "Microbiologist" },
    { img: labDoc3, name: "Dr. Saira Khan", role: "Biochemist" },
    { img: labDoc4, name: "Dr. Arjun Patel", role: "Molecular Biologist" },
    { img: labDoc5, name: "Dr. Neha Verma", role: "Clinical Pathologist" },
    { img: labDoc6, name: "Dr. Vivek Nair", role: "Immunologist" },
    { img: labDoc7, name: "Dr. Kiran Joshi", role: "Toxicologist" },
    { img: labDoc8, name: "Dr. Meera Iyer", role: "Lab Director" },
  ];

  const visibleDoctors = showAllDoctors ? doctorCards : doctorCards.slice(0, 4);

  return (
    <div
      style={{
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        background: "#f5f7fb",
        color: "#1f2b6c",
      }}
    >
      {/* SERVICES SECTION */}
      <section
        style={{
          padding: "80px 7%",
          textAlign: "center",
          background: "#ffffff",
        }}
      >
        <p
          style={{
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#159EEC",
            fontWeight: 600,
            fontSize: "13px",
            marginBottom: "8px",
          }}
        >
          Our Services
        </p>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            marginBottom: "40px",
          }}
        >
          We Provide Advanced Laboratory Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "24px",
          }}
        >
          {serviceCards.map((card, index) => (
            <div
              key={index}
              style={{
                padding: "26px 24px",
                borderRadius: "16px",
                background: "#f5f7fb",
                boxShadow: "0 16px 40px rgba(8, 15, 52, 0.08)",
                textAlign: "left",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              className="lab-service-card"
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "#1f2b6c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "18px",
                }}
              >
                {index + 1}
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#6b7280",
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LAB BANNER SECTION */}
      <section
        style={{
          position: "relative",
          height: "280px",
          overflow: "hidden",
          borderRadius: "20px",
          margin: "0 7% 60px 7%",
        }}
      >
        <img
          src={labHeroImg}
          alt="Laboratory"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.75)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "7%",
            color: "#ffffff",
          }}
        >
          <p
            style={{
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: "13px",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            Laboratory
          </p>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            Highly Equipped & Modern Lab
          </h2>
          <p style={{ maxWidth: "420px", fontSize: "14px", lineHeight: 1.7 }}>
            Our laboratory combines cutting-edge technology with experienced
            professionals to deliver fast and reliable diagnostic results.
          </p>
        </div>
      </section>

      {/* OUR DOCTORS / SCIENTISTS */}
      <section style={{ padding: "0 7% 70px 7%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "24px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#159EEC",
                fontWeight: 600,
                fontSize: "13px",
                marginBottom: "6px",
              }}
            >
              Our Team
            </p>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: 700,
              }}
            >
              Our Lab Specialists
            </h2>
          </div>
          <button
            onClick={() => setShowAllDoctors((prev) => !prev)}
            style={{
              padding: "10px 22px",
              borderRadius: "999px",
              background: "#1f2b6c",
              color: "#ffffff",
              border: "none",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(31, 43, 108, 0.4)",
            }}
          >
            {showAllDoctors ? "Show Less" : "View All"}
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "24px",
          }}
        >
          {visibleDoctors.map((doc, i) => (
            <div
              key={i}
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                background: "#ffffff",
                boxShadow: "0 14px 35px rgba(15, 23, 42, 0.08)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              className="lab-doctor-card"
            >
              <div style={{ overflow: "hidden", height: "230px" }}>
                <img
                  src={doc.img}
                  alt={doc.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  className="lab-doctor-image"
                />
              </div>
              <div style={{ padding: "16px 18px 20px 18px" }}>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    marginBottom: "4px",
                  }}
                >
                  {doc.name}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    marginBottom: "10px",
                  }}
                >
                  {doc.role}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#9ca3af",
                  }}
                >
                  10+ years of experience in advanced diagnostics.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HAPPY PATIENT / TESTIMONIAL */}
      <section
        style={{
          padding: "0 7% 70px 7%",
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          gap: "36px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 18px 45px rgba(15, 23, 42, 0.35)",
          }}
        >
          <img
            src={happyPatientImg}
            alt="Happy patient"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div>
          <p
            style={{
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#159EEC",
              fontWeight: 600,
              fontSize: "13px",
              marginBottom: "6px",
            }}
          >
            Testimonial
          </p>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 700,
              marginBottom: "14px",
            }}
          >
            Our Happy Patient
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#4b5563",
              lineHeight: 1.8,
              marginBottom: "18px",
            }}
          >
            “The lab team was very professional and the reports were delivered
            quickly. The staff clearly explained every test and made the whole
            process smooth and stress-free.”
          </p>
          <p
            style={{
              fontWeight: 600,
              fontSize: "15px",
              marginBottom: "2px",
            }}
          >
            Rahul Sharma
          </p>
          <p style={{ fontSize: "13px", color: "#9ca3af" }}>
            Corporate Health Checkup
          </p>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section
        style={{
          background: "#1f2b6c",
          color: "#ffffff",
          padding: "26px 7%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "24px 24px 0 0",
          marginTop: "30px",
        }}
      >
        <div>
          <p
            style={{
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: 600,
              marginBottom: "6px",
              color: "#A5C3FF",
            }}
          >
            Contact Us
          </p>
          <h3
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginBottom: "4px",
            }}
          >
            Need Any Lab Test?
          </h3>
          <p style={{ fontSize: "14px", color: "#d1d5db" }}>
            Call us for home sample collection or to know more about our test
            packages.
          </p>
        </div>
        <button
          onClick={() => navigate("/contact")}  // 👈 NAVIGATE TO CONTACT PAGE
          className="lab-contact-btn"          // 👈 CLASS FOR HOVER EFFECT
          style={{
            padding: "12px 30px",
            borderRadius: "999px",
            border: "none",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            background: "#ffffff",
            color: "#1f2b6c",
            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.5)",
          }}
        >
          Contact Us
        </button>
      </section>

      {/* HOVER EFFECTS (inline styles via <style> tag) */}
      <style>
        {`
          .lab-service-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 22px 50px rgba(15, 23, 42, 0.16);
          }

          .lab-doctor-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 22px 55px rgba(15, 23, 42, 0.18);
          }

          .lab-doctor-card:hover .lab-doctor-image {
            transform: scale(1.05);
          }

          /* 👇 CONTACT BUTTON HOVER EFFECT */
          .lab-contact-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 36px rgba(15, 23, 42, 0.65);
            filter: brightness(1.03);
          }

          .lab-contact-btn:active {
            transform: translateY(0);
            box-shadow: 0 8px 22px rgba(15, 23, 42, 0.5);
          }

          @media (max-width: 900px) {
            section[style*="grid-template-columns: 300px 1fr"] {
              grid-template-columns: 1fr;
              text-align: left;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LaboratoryPage;
