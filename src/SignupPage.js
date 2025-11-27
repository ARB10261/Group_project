import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Signup from "./assets/Signup.jpg";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [otpClicked, setOtpClicked] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    login();
    navigate("/");
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
    display: flex;
    min-height: 100vh;
  }

  /* LEFT IMAGE SECTION */
  .image-section {
    width: 45%;
    background: #dfe8ff;
  }

  .image-section img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* RIGHT FORM SECTION */
  .form-section {
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
  }

  .form-box {
    width: 80%;
    max-width: 450px;
  }

  .brand-wrapper {
    text-align: center;
    margin-bottom: 20px;
  }

  .brand {
    font-size: 38px;
    font-weight: bold;
    color: #0ea5e9;
  }

  .tagline {
    color: #555;
    font-size: 16px;
  }

  .row-inputs {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
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

  .otp-btn {
    padding: 10px 14px;
    border-radius: 8px;
    border: 1.8px solid #0ea5e9;
    background: transparent;
    color: #0ea5e9;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .active-otp {
    background: #0ea5e9 !important;
    color: white !important;
  }

  .register-btn {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    background: #0ea5e9;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
  }

  .or-divider {
    text-align: center;
    margin: 18px 0;
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
    border: 1.8px solid #0ea5e9;
    background: transparent;
    display: flex;
    justify-content: center;
    gap: 8px;
    align-items: center;
    cursor: pointer;
    color: #0ea5e9;
    font-size: 14px;
    transition: 0.2s ease;
  }

  .social-small-btn:hover {
    background: #e6f7ff;
  }

  .login-text {
    text-align: center;
    margin-top: 8px;
    color: #000000b6;
  }

  /* 📱 MOBILE RESPONSIVE */
  @media (max-width: 900px) {
    .full-container {
      flex-direction: column;
    }

    .image-section {
      width: 100%;
      height: 220px;
    }

    .form-section {
      width: 100%;
      padding: 30px 20px;
    }

    .form-box {
      width: 100%;
    }

    .row-inputs {
      flex-direction: column;
    }

    .otp-box {
      flex-direction: column;
    }

    .otp-btn {
      width: 100%;
      text-align: center;
    }
  }

  /* 📱 VERY SMALL SCREENS */
  @media (max-width: 480px) {
    .brand {
      font-size: 30px;
    }

    .image-section {
      display: none;  /* Hide large image on very small devices */
    }

    .form-section {
      padding-top: 40px;
    }
  }
`}</style>

      <div className="full-container">

        {/* LEFT IMAGE */}
        <div className="image-section">
          <img src={Signup} alt="Signup illustration" />
        </div>

        {/* RIGHT FORM */}
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
                <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                  <i className="fa-regular fa-eye"></i>
                </span>
              </div>

              <div className="otp-box">
                <Form.Control type="text" placeholder="Enter OTP" />
                <button
                  type="button"
                  className={`otp-btn ${otpClicked ? "active-otp" : ""}`}
                  onClick={() => setOtpClicked(true)}
                >
                  Get OTP
                </button>
              </div>

              <Button type="submit" className="register-btn">Register</Button>

              <div className="or-divider">or</div>

              <div className="social-row">
                <div className="social-small-btn">
                  <FcGoogle size={20} /> Google
                </div>

                <div className="social-small-btn">
                  <FaApple size={20} /> Apple
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
