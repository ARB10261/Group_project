import React from "react";

const services = [
  { name: "24/7 Emergency Care", img: "https://i-media.vyaparify.com/vcards/blogs/64783/24-hours-medical-servises-24-7-medical-call-center-emergency-patient-support-first-aid-doctor-holding-in-hand-24x7-sign-and-medicine-icons-network-connection-on-virtual-screen-illustration-vector.jpg" },
  { name: "Advanced Diagnostics", img: "https://avignadiagnostics.com/creating-clarity/wp-content/uploads/2024/10/Types-of-diagnostic-labs-552x289.jpg" },
  { name: "Surgical Services", img: "https://ssir.org/images/articles/Fall2019_Feature_Sonderman_EyeSurgery592x333.jpg" },
  { name: "Ambulance & Transport", img: "https://testcv.tatamotors.com/assets/cv/files/2023-10/Features-of-the-TWA-for-Patient-Transport.jpg?VersionId=Qe8fK4EyEuW_5plSwFyCkzdMRDrUe93_" },
  { name: "Wellness & Preventive Care", img: "https://www.denverhealthmedicalplan.org/sites/default/files/styles/full_width/public/2020-09/preventive_care.jpg?itok=4kGgxRZJ" },
  { name: "Pharmacy Services", img: "https://www.integrityhospital.in/wp-content/uploads/2024/01/IMG_4972.jpeg" },
];

const ServicePage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff" }}>

      {/* HERO SECTION */}
      <header
        style={{
          minHeight: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // left-align
          padding: "60px 5%",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('data:image/jpeg;base64,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')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div style={{ textAlign: "left", maxWidth: "700px" }}>
          <h1 style={{ fontSize: "50px", fontWeight: "700", marginBottom: "15px" }}>
            Our HealthCare+ Medical Services
          </h1>
          <p style={{ fontSize: "20px", lineHeight: "1.6" }}>
            Delivering world-class care with compassion, technology, and expertise.
          </p>
        </div>
      </header>

      {/* SERVICE GRID */}
      <section style={{ padding: "60px 7%" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            textAlign: "center",
            color: "#0057d9",
            marginBottom: "40px",
          }}
        >
          What We Offer
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {services.map((item) => (
            <div key={item.name} className="service-card" style={cardStyle}>
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "100%", height: "210px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#003f8a",
                    marginBottom: "10px",
                  }}
                >
                  {item.name}
                </h3>
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Providing trusted and advanced healthcare solutions.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          background: "#0057d9",
          padding: "60px 7%",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "15px" }}>
          Need Medical Assistance?
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "25px" }}>
          Our dedicated team is here to guide you at every step of your health journey.
        </p>

        <button
          style={{
            padding: "14px 35px",
            fontSize: "18px",
            fontWeight: "600",
            background: "white",
            color: "#0057d9",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Book an Appointment
        </button>
      </section>
    </div>
  );
};

/* CARD STYLE */
const cardStyle = {
  width: "320px",
  background: "#fff",
  borderRadius: "14px",
  overflow: "hidden",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};

/* GLOBAL HOVER EFFECTS */
document.addEventListener("mouseover", (e) => {
  if (e.target.closest(".service-card")) {
    const card = e.target.closest(".service-card");
    card.style.transform = "translateY(-6px)";
    card.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.15)";
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.closest(".service-card")) {
    const card = e.target.closest(".service-card");
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.1)";
  }
});

export default ServicePage;
