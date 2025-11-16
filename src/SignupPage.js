import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Signup from "./assets/Signup.jpg";
import { AuthContext } from "./AuthContext";   // ✅ Import AuthContext
import { useNavigate } from "react-router-dom"; // ✅ Redirect

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [otpClicked, setOtpClicked] = useState(false);

  const { login } = useContext(AuthContext);  // 🔥 Use login() from context
  const navigate = useNavigate();             // 🔥 To redirect

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOtpClick = () => {
    setOtpClicked(true);
  };

  // 🔥 When user clicks Register
  const handleRegister = (e) => {
    e.preventDefault();

    login();        // 🔥 Mark user as logged in
    navigate("/");  // 🔥 Redirect to home
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          background: #f3f6fb;
        }

        .full-container {
          height: 100vh;
          display: flex;
        }

        .image-section {
          width: 40%;
          background: #dfe8ff;
        }

        .image-section img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .form-section {
          width: 60%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .form-box {
          width: 75%;
          max-width: 480px;
        }

        .brand-wrapper {
          text-align: center;
          margin-bottom: 20px;
        }

        .brand {
          font-size: 40px;
          color: #1c3c87;
          font-weight: bold;
        }

        .tagline {
          color: #555;
        }

        .row-inputs {
          display: flex;
          gap: 15px;
          margin-bottom: 15px;
        }

        .row-inputs .form-control {
          flex: 1;
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

        .otp-box {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .otp-input {
          flex: 1;
        }

        .otp-btn {
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid #193a81;
          background: transparent;
          color: #193a81;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .active-otp {
          background: #193a81 !important;
          color: white !important;
          border-color: #193a81 !important;
        }

        .register-btn {
          width: 100%;
          padding: 12px;
          background: #193a81;
          border: none;
          color: white;
          border-radius: 8px;
          margin-top: 5px;
        }

        .or-divider {
          text-align: center;
          margin: 15px 0;
          color: #555;
        }

        .social-row {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .social-small-btn {
          flex: 1;
          padding: 10px;
          border-radius: 40px;
          border: 1px solid #193a81;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          color: #193a81;
          font-size: 14px;
        }

        .social-small-btn:hover {
          background: #e8edff;
        }

        .login-text {
          text-align: center;
        }
      `}</style>

      <div className="full-container">

        <div className="image-section">
          <img src={Signup} alt="Healthcare" />
        </div>

        <div className="form-section">
          <div className="form-box">

            <div className="brand-wrapper">
              <h1 className="brand">Healthcare+</h1>
              <p className="tagline">Create your new account</p>
            </div>

            <Form onSubmit={handleRegister}>

              <div className="row-inputs">
                <Form.Control type="text" placeholder="First Name" required />
                <Form.Control type="text" placeholder="Last Name" required />
              </div>

              <div className="row-inputs">
                <Form.Control type="email" placeholder="Email" required />
                <Form.Control type="number" placeholder="Phone Number" required />
              </div>

              <div className="password-box">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                <span className="eye-icon" onClick={togglePassword}>
                  <i className="fa-regular fa-eye"></i>
                </span>
              </div>

              <div className="otp-box">
                <Form.Control
                  type="text"
                  placeholder="Enter OTP"
                  className="otp-input"
                />
                <button
                  type="button"
                  className={`otp-btn ${otpClicked ? "active-otp" : ""}`}
                  onClick={handleOtpClick}
                >
                  Get OTP
                </button>
              </div>

              <Button type="submit" className="register-btn">
                Register
              </Button>

              <div className="or-divider">or</div>

              <div className="social-row">

                <div
                  className="social-small-btn"
                  onClick={() =>
                  (window.location.href =
                    "https://accounts.google.com/o/oauth2/auth")
                  }
                >
                  <FcGoogle size={18} />
                  Google
                </div>

                <div
                  className="social-small-btn"
                  onClick={() =>
                  (window.location.href =
                    "https://appleid.apple.com/auth/authorize")
                  }
                >
                  <FaApple size={18} />
                  Apple
                </div>
              </div>

              <p className="login-text">
                Already have an account? <a href="/login">Login</a>
              </p>

            </Form>

          </div>
        </div>
      </div>
    </>
  );
}
