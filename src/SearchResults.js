import React from "react";
import { useLocation } from "react-router-dom";

const doctorsData = [
  {
    name: "Dr. Anjali Sharma",
    speciality: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Rajesh Kumar",
    speciality: "Neurologist",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Dr. Priya Verma",
    speciality: "Dermatologist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dr. Manoj Sinha",
    speciality: "Orthopedic",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Dr. Kavya Mehta",
    speciality: "Pediatrician",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Dr. Sandeep Rao",
    speciality: "ENT Specialist",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Dr. Neha Joshi",
    speciality: "Gynecologist",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Dr. Rohan Desai",
    speciality: "General Physician",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "Dr. Aishwarya Nair",
    speciality: "Psychiatrist",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    name: "Dr. Nikhil Sharma",
    speciality: "Oncologist",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    name: "Dr. Ritu Malhotra",
    speciality: "Endocrinologist",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Dr. Harish Gupta",
    speciality: "Pulmonologist",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },
  {
    name: "Dr. Simran Gill",
    speciality: "Cardiologist",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
  },
  {
    name: "Dr. Kunal Ahuja",
    speciality: "Neurologist",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    name: "Dr. Meera Iyer",
    speciality: "Dermatologist",
    image: "https://randomuser.me/api/portraits/women/64.jpg",
  },
  {
    name: "Dr. Hrithik Sen",
    speciality: "Orthopedic",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Dr. Shalini Reddy",
    speciality: "Dentist",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "Dr. Varun Shetty",
    speciality: "Radiologist",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    name: "Dr. Ananya Krishnan",
    speciality: "Nutritionist",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
  },
  {
    name: "Dr. Vivek Choudhary",
    speciality: "Nephrologist",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  }
];


const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase();

  const filteredDoctors = doctorsData.filter(
    (doc) =>
      doc.name.toLowerCase().includes(query) ||
      doc.speciality.toLowerCase().includes(query)
  );

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2 style={{ color: "#0ea5e9", marginBottom: "20px" }}>
        Search Results for: <span style={{ color: "#0284c7" }}>{query}</span>
      </h2>

      {filteredDoctors.length === 0 ? (
        <p>No doctors found.</p>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {filteredDoctors.map((doc, index) => (
            <div
              key={index}
              style={{
                width: "250px",
                background: "#fff",
                borderRadius: "12px",
                padding: "15px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                textAlign: "center",
              }}
            >
              <img
                src={doc.image}
                alt={doc.name}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <h3 style={{ marginTop: "12px", color: "#0f172a" }}>{doc.name}</h3>
              <p style={{ color: "#0ea5e9", fontWeight: "600" }}>
                {doc.speciality}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
