import React from "react";
import d1 from "../assets/d1.jpg"; // ✅ make sure this image exists in src/assets

const AppointmentSection = () => {
  return (
    <>
      <style>
        {`
          /* ✅ Section Layout */
          .appointment-section {
            display: flex;
            
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 80px 100px;
            background: #fff;
            flex-wrap: wrap;
          }

          /* ✅ Center the entire layout on the page */
          .appointment-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            max-width: 1100px; /* ✅ Centers content area */
            margin: 0 auto; /* ✅ Centers horizontally */
            width: 100%;
          }

          /* ✅ Portrait Image Card */
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

          /* ✅ Right Form Card */
          .appointment-form {
            flex: 1.2;
            background: #f9f6ff;
            padding: 40px 50px;
            border-radius: 20px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
          }

          .appointment-title {
            font-size: 2rem;
            font-weight: 700;
            color: #8A2BE2;
            text-align: center;
            margin-bottom: 30px;
          }

          /* ✅ Form Grid Layout */
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
            transition: border 0.3s ease;
          }

          input:focus,
          select:focus,
          textarea:focus {
            border-color: #8A2BE2;
          }

          textarea {
            resize: none;
            grid-column: span 2;
            height: 100px;
          }

          /* ✅ Button Styling */
          .btn-book {
            background-color: #8A2BE2;
            color: #fff;
            border: none;
            border-radius: 30px;
            padding: 12px 0;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 40%;
            justify-self: start;
            grid-column: span 2;
          }

          .btn-book:hover {
            background-color: #000;
          }

          /* ✅ Responsive Design */
          @media (max-width: 992px) {
            .appointment-section {
              padding: 60px 30px;
            }

            .appointment-container {
              flex-direction: column;
              align-items: center;
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
        `}
      </style>

      {/* ✅ Appointment Section */}
      <section className="appointment-section" id="appointment">
        <div className="appointment-container">
          {/* Left Image (Portrait Card) */}
          <div className="appointment-image">
            <img src={d1} alt="Book Appointment" />
          </div>

          {/* Right Form */}
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

              <button type="submit" className="btn-book">
                Make Appointment
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentSection;
