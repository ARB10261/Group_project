import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import Nurse from "./assets/Nurse.jpg";
import { AuthContext } from "./AuthContext";   // ✅ IMPORT LOGIN CONTEXT
import { useNavigate } from "react-router-dom"; // ✅ REDIRECT

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useContext(AuthContext);  // ✅ USE login()
  const navigate = useNavigate();             // ✅ REDIRECT HOME

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // You can add real login validation later
    login();           // 🔥 Mark user as logged in
    navigate("/");     // 🔥 Redirect home after login
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
          width: 70%;
          max-width: 420px;
        }

        .brand-wrapper {
          text-align: center;
          margin-bottom: 20px;
        }

        .brand {
          font-size: 40px;
          color: #00cfff;
          font-weight: bold;
        }

        .tagline {
          margin-bottom: 25px;
          color: #555;
        }

        .input-box {
          margin-bottom: 20px;
        }

        .password-box {
          position: relative;
        }

        .eye-icon {
          position: absolute;
          right: 12px;
          top: 12px;
          cursor: pointer;
        }

        .terms {
          font-size: 13px;
          color: #666;
          margin-bottom: 20px;
          margin-top: 10px;
          text-align: left;
        }

        .login-btn {
          width: 100%;
          padding: 12px;
          background: #00cfff;
          border: none;
          color: white;
          border-radius: 8px;
        }

        .or-divider {
          text-align: center;
          margin: 15px 0;
          color: #666;
        }

        .social-login {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .social-btn {
          width: 100%;
          padding: 12px;
          border-radius: 50px;
          border: 1px solid #ccc;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .signup-text {
          text-align: center;
          margin-top: 12px;
        }
      `}</style>

      <div className="full-container">

        <div className="image-section">
          <img src={Nurse} alt="Hospital" />
        </div>

        <div className="form-section">
          <div className="form-box">

            <div className="brand-wrapper">
              <h1 className="brand">Healthcare+</h1>
              <p className="tagline">Your trusted digital health companion</p>
            </div>

            <Form onSubmit={handleLogin}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="input-box"
                required
              />

              <Form.Label>Password</Form.Label>
              <div className="password-box">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />
                <span className="eye-icon" onClick={togglePassword}>
                  <i className="fa-regular fa-eye"></i>
                </span>
              </div>

              <p className="terms">
                By logging in, you accept our{" "}
                <a href="#">Terms & Conditions</a>.
              </p>

              {/* 🔥 LOGIN BUTTON CALLS handleLogin() */}
              <Button type="submit" className="login-btn">
                Login
              </Button>

              <div className="or-divider">or</div>

              <div className="social-login">

                <div
                  className="social-btn"
                  onClick={() => window.location.href="https://accounts.google.com/o/oauth2/auth"}
                >
                  <FcGoogle size={22} />
                  Continue with Google
                </div>

                <div
                  className="social-btn"
                  onClick={() =>
                    window.location.href = "https://www.facebook.com/v9.0/dialog/oauth"
                  }
                >
                  <FaFacebook size={22} color="#1877F2" />
                  Continue with Facebook
                </div>

                <div
                  className="social-btn"
                  onClick={() =>
                    window.location.href = "https://appleid.apple.com/auth/authorize"
                  }
                >
                  <FaApple size={22} />
                  Continue with Apple
                </div>

              </div>

              <p className="signup-text">
                Don’t have an account? <a href="/signup">Sign up</a>
              </p>
            </Form>

          </div>
        </div>
      </div>
    </>
  );
}
