import React from "react";
import { useLocation } from "react-router-dom";

const doctorsData = [
  { name: "Dr. Anjali Sharma", speciality: "Cardiologist", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Dr. Rajesh Kumar", speciality: "Neurologist", image: "https://randomuser.me/api/portraits/men/46.jpg" },
  { name: "Dr. Priya Verma", speciality: "Dermatologist", image: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Dr. Manoj Sinha", speciality: "Orthopedic", image: "https://randomuser.me/api/portraits/men/55.jpg" },
  { name: "Dr. Kavya Mehta", speciality: "Pediatrician", image: "https://randomuser.me/api/portraits/women/50.jpg" },
  { name: "Dr. Sandeep Rao", speciality: "ENT Specialist", image: "https://randomuser.me/api/portraits/men/52.jpg" },
  { name: "Dr. Neha Joshi", speciality: "Gynecologist", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Dr. Rohan Desai", speciality: "General Physician", image: "https://randomuser.me/api/portraits/men/60.jpg" },
  { name: "Dr. Aishwarya Nair", speciality: "Psychiatrist", image: "https://randomuser.me/api/portraits/women/72.jpg" },
  { name: "Dr. Nikhil Sharma", speciality: "Oncologist", image: "https://randomuser.me/api/portraits/men/59.jpg" },
  { name: "Dr. Ritu Malhotra", speciality: "Endocrinologist", image: "https://randomuser.me/api/portraits/women/55.jpg" },
  { name: "Dr. Harish Gupta", speciality: "Pulmonologist", image: "https://randomuser.me/api/portraits/men/62.jpg" },
  { name: "Dr. Simran Gill", speciality: "Cardiologist", image: "https://randomuser.me/api/portraits/women/43.jpg" },
  { name: "Dr. Kunal Ahuja", speciality: "Neurologist", image: "https://randomuser.me/api/portraits/men/48.jpg" },
  { name: "Dr. Meera Iyer", speciality: "Dermatologist", image: "https://randomuser.me/api/portraits/women/64.jpg" },
  { name: "Dr. Hrithik Sen", speciality: "Orthopedic", image: "https://randomuser.me/api/portraits/men/50.jpg" },
  { name: "Dr. Shalini Reddy", speciality: "Dentist", image: "https://randomuser.me/api/portraits/women/75.jpg" },
  { name: "Dr. Varun Shetty", speciality: "Radiologist", image: "https://randomuser.me/api/portraits/men/70.jpg" },
  { name: "Dr. Ananya Krishnan", speciality: "Nutritionist", image: "https://randomuser.me/api/portraits/women/58.jpg" },
  { name: "Dr. Vivek Choudhary", speciality: "Nephrologist", image: "https://randomuser.me/api/portraits/men/72.jpg" },
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
    <>
      <style>{`
        .search-wrapper {
          padding: 40px 20px;
          text-align: center;
        }

        .search-title {
          color: #0ea5e9;
          font-size: 2rem;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .search-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          justify-content: center;
          margin-top: 30px;
        }

        .doctor-card {
          background: #fff;
          border-radius: 12px;
          padding: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          text-align: center;
          transition: 0.25s ease;
        }

        .doctor-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 7px 20px rgba(0,0,0,0.2);
        }

        .doctor-img {
          width: 100%;
          height: 220px;
          border-radius: 10px;
          object-fit: cover;
        }

        .doctor-name {
          margin-top: 12px;
          font-size: 1.1rem;
          color: #0f172a;
          font-weight: 600;
        }

        .doctor-speciality {
          color: #0ea5e9;
          font-weight: 600;
          margin-top: 5px;
        }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .search-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .search-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 500px) {
          .search-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="search-wrapper">
        <h2 className="search-title">
          Search Results for: <span style={{ color: "#0284c7" }}>{query}</span>
        </h2>

        {filteredDoctors.length === 0 ? (
          <p>No doctors found.</p>
        ) : (
          <div className="search-grid">
            {filteredDoctors.map((doc, index) => (
              <div key={index} className="doctor-card">
                <img src={doc.image} alt={doc.name} className="doctor-img" />
                <h3 className="doctor-name">{doc.name}</h3>
                <p className="doctor-speciality">{doc.speciality}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResults;
