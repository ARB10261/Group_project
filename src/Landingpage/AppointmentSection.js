import React from "react";
import d1 from "../assets/d1.jpg"; // ensure the image exists

const AppointmentSection = () => {
  return (
    <>
      <style>{`
        .appointment-section {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 80px 100px;
          background: #fff;
          flex-wrap: wrap;
        }

        .appointment-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }

        .appointment-image {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .appointment-image img {
          width: 100%;
          max-width: 380px;
          height: 520px;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .appointment-form {
          flex: 1.2;
          background: #f0faff;
          padding: 40px 50px;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
        }

        .appointment-title {
          font-size: 2rem;
          font-weight: 700;
          color: #0ea5e9;
          text-align: center;
          margin-bottom: 30px;
        }

        form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        input,
        select,
        textarea {
          width: 100%;
          padding: 12px 15px;
          border-radius: 10px;
          border: 1px solid #ccc;
          font-size: 1rem;
          outline: none;
        }

        input:focus,
        select:focus,
        textarea:focus {
          border-color: #0ea5e9;
        }

        textarea {
          grid-column: span 2;
          resize: none;
          height: 100px;
        }

        .btn-book {
          background-color: #0ea5e9;
          color: #fff;
          border: none;
          border-radius: 30px;
          padding: 12px 0;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          width: 40%;
          justify-self: start;
          grid-column: span 2;
          transition: 0.3s ease;
        }

        .btn-book:hover {
          background-color: #0284c7;
        }

        @media (max-width: 992px) {
          .appointment-section {
            padding: 60px 30px;
          }

          .appointment-container {
            flex-direction: column;
            gap: 40px;
          }

          .appointment-image img {
            max-width: 80%;
            height: 400px;
          }

          .appointment-form {
            width: 100%;
            padding: 30px 25px;
          }

          form {
            grid-template-columns: 1fr;
          }

          textarea {
            grid-column: span 1;
          }

          .btn-book {
            width: 60%;
            justify-self: center;
          }
        }
      `}</style>

      <section className="appointment-section" id="appointment">
        <div className="appointment-container">

          <div className="appointment-image">
            <img src={d1} alt="Appointment" />
          </div>

          <div className="appointment-form">
            <h2 className="appointment-title">Book Appointment</h2>

            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Phone Number" required />

              <select required>
                <option value="">Choose Department</option>
                <option>Laboratory Services</option>
                <option>Heart Disease</option>
                <option>Dental Care</option>
                <option>Body Surgery</option>
                <option>Neurology Surgery</option>
                <option>Gynecology</option>
              </select>

              <select required>
                <option value="">Select Doctor</option>
                <option>Dr. Ramesh Kumar</option>
                <option>Dr. Priya Nair</option>
                <option>Dr. Rahul Mehta</option>
                <option>Dr. Ananya Sharma</option>
                <option>Dr. Sameer Patel</option>
              </select>

              <input type="date" required />
              <input type="time" required />

              <textarea placeholder="Your Message" required></textarea>

              <button type="submit" className="btn-book">Make Appointment</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentSection;
