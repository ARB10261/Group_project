import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import Nurse from "./assets/Nurse.jpg";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role (Admin / Doctors / Reception / Nurse)");
      return;
    }

    login(role);
    navigate("/dashboard");
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #f3f6fb;
        }

        /* MAIN WRAPPER → FIXES FOOTER POSITION */
        .login-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .full-container {
          display: flex;
          flex: 1;
        }

        .image-section {
          width: 45%;
          background: #dfe8ff;
        }

        .image-section img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .form-section {
          width: 55%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
        }

        .form-box {
          width: 80%;
          max-width: 420px;
        }

        .brand {
          font-size: 40px;
          color: #0099cc;
          font-weight: bold;
          text-align: center;
          margin-bottom: 10px;
        }

        .tagline {
          text-align: center;
          color: #555;
          margin-bottom: 20px;
        }

        .role-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .role-btn {
          padding: 7px 16px;
          border: 1.5px solid #0099cc;
          background: transparent;
          border-radius: 20px;
          color: #0099cc;
          font-size: 13px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .role-btn.active {
          background: #0099cc;
          color: white;
        }

        .form-box form label {
          color: #0099cc;
          font-weight: bold;
          margin-bottom: 5px;
          text-align: left;
        }

        .password-box {
          position: relative;
          margin-bottom: 20px;
        }

        .eye-icon {
          position: absolute;
          right: 12px;
          top: 12px;
          cursor: pointer;
        }

        .login-btn {
          width: 100%;
          padding: 12px;
          background: #0099cc;
          border-radius: 8px;
          color: white;
          border: none;
          margin-top: 10px;
        }

        /* FOOTER */
        .login-footer {
          text-align: center;
          background: #0f172a;
          color: #94a3b8;
          padding: 12px;
          font-size: 0.9rem;
          margin-top: auto;
        }

        .login-footer span {
          color: #0ea5e9;
        }

        /* TABLET */
        @media (max-width: 992px) {
          .full-container {
            flex-direction: column;
          }

          .image-section {
            width: 100%;
            height: 260px;
          }

          .form-section {
            width: 100%;
            padding: 30px 20px;
          }

          .form-box {
            width: 90%;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .image-section {
            height: 180px;
          }

          .brand {
            font-size: 32px;
          }

          .role-btn {
            padding: 6px 14px;
            font-size: 12px;
          }
        }

        /* VERY SMALL */
        @media (max-width: 450px) {
          .image-section {
            display: none;
          }

          .form-box {
            width: 100%;
            padding: 0 15px;
          }
        }
      `}</style>

      {/* WRAPPER THAT KEEPS FOOTER IN PROPER POSITION */}
      <div className="login-wrapper">
        {/* MAIN PAGE CONTENT */}
        <div className="full-container">
          <div className="image-section">
            <img src={Nurse} alt="Hospital" />
          </div>

          <div className="form-section">
            <div className="form-box">
              <h1 className="brand">Healthcare+</h1>
              <p className="tagline">Your trusted digital health companion</p>

              <div className="role-buttons">
                {["Admin", "Doctors", "Reception", "Nurse"].map((r) => (
                  <button
                    key={r}
                    type="button"
                    className={`role-btn ${role === r ? "active" : ""}`}
                    onClick={() => setRole(r)}
                  >
                    {r}
                  </button>
                ))}
              </div>

              <Form onSubmit={handleLogin}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />

                <Form.Label style={{ marginTop: "10px" }}>
                  Password
                </Form.Label>

                <div className="password-box">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    required
                  />
                  <span className="eye-icon" onClick={togglePassword}>
                    <i className="fa-regular fa-eye"></i>
                  </span>
                </div>

                <Button type="submit" className="login-btn">
                  {role ? `Login as ${role}` : "Login"}
                </Button>
              </Form>
            </div>
          </div>
        </div>

        {/* FOOTER ALWAYS AT BOTTOM */}
        <footer className="login-footer">
          © {new Date().getFullYear()} <span>Healthcare+</span> — All Rights Reserved.
        </footer>
      </div>
    </>
  );
}
