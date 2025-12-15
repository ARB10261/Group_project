import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import babyImage from "../Images/baby image.jpg";
import cancerimage from "../Images/cancer image.jpg";
import cardioimage from "../Images/Cardio image.jpg";
import Womencareimage from "../Images/Womencare image.jpg";
import AboutImage from "../assets/AboutImage.jpg";
import Healthcareimage1 from "../Images/Healthcare image1.jpg";
import Healthserviceimage from "../Images/Healthservice image.jpg";

const countryList = [
  { name: "Bosnia", code: "BA" },
  { name: "Bulgaria", code: "BG" },
  { name: "Denmark", code: "DK" },
  { name: "Georgia", code: "GE" },
  { name: "Greece", code: "GR" },
  { name: "India", code: "IN" },
  { name: "Norway", code: "NO" },
  { name: "Romania", code: "RO" },
  { name: "Sweden", code: "SE" },
  { name: "Ukraine", code: "UA" },
  { name: "Cyprus", code: "CY" },
  { name: "Hungary", code: "HU" },
  { name: "Poland", code: "PL" },
  { name: "Serbia", code: "RS" },
  { name: "Turkey", code: "TR" },
];

const specialtyCards = [
  { name: "Women's Health Center", img: Womencareimage },
  { name: "Medical Diagnostics", img: Healthcareimage1 },
  { name: "Global Health Services", img: Healthserviceimage },
  { name: "Women & Child Hospital", img: babyImage },
  { name: "Cancer Institute", img: cancerimage },
  { name: "Cardiology Care", img: cardioimage },
];

const About = () => {
  return (
    <div style={{ fontFamily: '"Poppins", sans-serif' }}>

      {/* INLINE CSS FOR HOVER EFFECTS */}
      <style>
        {`
          .service-card {
            width: 100%;
            background: #fff;
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
            transition: 0.3s ease;
            cursor: pointer;
          }

          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0px 6px 16px rgba(0,0,0,0.15);
          }

          .country-item {
            transition: 0.3s ease;
            padding: 6px 8px;
            border-radius: 8px;
          }

          .country-item:hover {
            background: #f0f9ff;
            transform: translateX(5px);
          }
        `}
      </style>

      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${AboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          padding: "80px 0",
        }}
      >
        <Container>
          <h1 style={{ fontSize: "48px", fontWeight: "700", maxWidth: "600px" }}>
            Where caring for your <br /> health is all we do
          </h1>
          <p style={{ maxWidth: "600px", marginTop: "20px", fontSize: "18px" }}>
            Experience world-class healthcare with HealthCare+, powered by
            technology and compassion.
          </p>
        </Container>
      </section>

      {/* PERSONAL CARE */}
      <section style={{ background: "#ffffff", padding: "70px 0" }}>
        <Container>
          <h2 className="text-center" style={{ color: "#0ea5e9", fontWeight: "700" }}>
            Personal care & healthy living
          </h2>

          <p style={para} className="mt-4 text-center">
            HealthCare+ is a digital healthcare management system that connects
            patients and doctors with seamless technology.
          </p>

          <ul
            className="mt-4"
            style={{
              listStyle: "none",
              padding: 0,
              maxWidth: "700px",
              margin: "auto",
              color: "#111",
            }}
          >
            {[
              "✔ Easy patient registration",
              "✔ Doctor availability & smart scheduling",
              "✔ Automated appointment reminders",
              "✔ Real-time performance and health reports",
            ].map((item, idx) => (
              <li key={idx} style={{ fontSize: "18px", marginBottom: "10px" }}>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* SPECIALTY CARDS */}
      <section style={{ background: "#f3f4f6", padding: "70px 0" }}>
        <Container>
          <h2 className="text-center" style={{ color: "#0ea5e9", fontWeight: "700" }}>
            Our Specialty Centers
          </h2>

          <Row className="mt-4 g-4">
            {specialtyCards.map((item) => (
              <Col key={item.name} xs={12} sm={6} md={4} lg={4}>
                <Card className="text-center service-card">
                  <Card.Img
                    variant="top"
                    src={item.img}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body style={{ background: "#0ea5e9" }}>
                    <Card.Title style={{ color: "white", fontSize: "20px" }}>
                      {item.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* WORLD MAP + COUNTRY LIST */}
      <section style={{ background: "#ffffff", padding: "70px 0" }}>
        <Container>
          <h2 className="text-center mb-5" style={{ color: "#0ea5e9", fontWeight: "700" }}>
            We serve across the globe
          </h2>

          <Row className="align-items-center g-4">
            <Col xs={12} lg={6}>
              <img
                src="https://img.freepik.com/free-vector/professional-medical-infographic-with-photo_23-2148370869.jpg?w=740"
                className="img-fluid rounded shadow"
                alt="World Map"
              />
            </Col>

            <Col xs={12} lg={6}>
              <Row>
                {countryList.map((c) => (
                  <Col xs={6} key={c.name} className="mb-3">
                    <div className="d-flex align-items-center gap-2 country-item">
                      <img
                        src={`https://flagsapi.com/${c.code}/flat/32.png`}
                        alt={c.name}
                        style={{ borderRadius: "4px" }}
                      />
                      <span style={{ color: "#111", fontWeight: 500 }}>
                        {c.name}
                      </span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
};

/* STYLE OBJECT */
const para = {
  fontSize: "17px",
  color: "#374151",
  lineHeight: "1.8",
};

export default About;
