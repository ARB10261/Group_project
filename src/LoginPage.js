import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import Nurse from "./assets/Nurse.jpg";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState(""); // Selected role

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role (Admin / Doctors / Reception / Nurse)");
      return;
    }

    // 🔹 send role into AuthContext
    login(role);

    // 🔹 go to /dashboard (not "/")
    navigate("/dashboard");
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
   
  /* RIGHT ALIGN EMAIL & PASSWORD LABELS */
.form-box form label {
  text-align: left !important;
  width: 100%;
  display: block;
  color: #0099cc;
}

  .form-box {
    width: 70%;
    max-width: 420px;
    text-align: center;
  }

  .brand {
    font-size: 40px;
    color:  #0099cc;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .tagline {
    color: #555;
    margin-bottom: 25px;
  }

  .role-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 28px;
    flex-wrap: wrap;
  }

  .role-btn {
    padding: 7px 16px;
    border: 1px solid  #0099cc;
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
    text-align: left !important;
    width: 100%;
    display: block;
    color: #0099cc;
    font-weight: bold;
  }

  h3 {
    margin-bottom: 22px !important;
  }

  .password-box {
    position: relative;
    margin-bottom: 25px;
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
    background:  #0099cc;
    border: none;
    color: white;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`}</style>

      <div className="full-container">
        <div className="image-section">
          <img src={Nurse} alt="Hospital" />
        </div>

        <div className="form-section">
          <div className="form-box">

            <h1 className="brand">Healthcare+</h1>
            <p className="tagline">Your trusted digital health companion</p>

            {/* ROLE BUTTONS */}
            <div className="role-buttons">
              {["Admin", "Doctors", "Reception", "Nurse"].map((r) => (
                <button
                  key={r}
                  className={`role-btn ${role === r ? "active" : ""}`}
                  onClick={() => setRole(r)}
                >
                  {r}
                </button>
              ))}
            </div>

            <h3 style={{ marginBottom: "20px", color: "#333" }}>
              {role ? `${role} Login` : "General Login"}
            </h3>

            <Form onSubmit={handleLogin}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder={role ? `${role} email` : "Enter your email"}
                required
              />

              <Form.Label style={{ marginTop: "10px" }}>Password</Form.Label>
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
    </>
  );
}
