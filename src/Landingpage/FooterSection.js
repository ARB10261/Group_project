import React from "react";
import { FaEnvelope, FaClock, FaLocationDot, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <>
      <style>
        {`
          /* ✅ Footer Layout */
          .footer-section {
            background-color: #1e1e1e;
            color: #ddd;
            padding: 50px 80px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;
          }

          .footer-top {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 40px;
          }

          .footer-column {
            flex: 1;
            min-width: 250px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }

          /* ✅ Brand */
          .footer-brand {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }

          .brand-name {
            font-size: 1.6rem;
            font-weight: 700;
            color: #8A2BE2;
          }

          .brand-tagline {
            font-size: 0.9rem;
            color: #ccc;
            margin-bottom: 8px;
            line-height: 1.4;
          }

          /* ✅ Social Icons */
          .social-icons {
            display: flex;
            gap: 12px;
            margin-top: 5px;
          }

          .social-icons a {
            color: #8A2BE2;
            font-size: 1.2rem;
            transition: color 0.3s ease, transform 0.3s ease;
          }

          .social-icons a:hover {
            color: #fff;
            transform: translateY(-2px);
          }

          /* ✅ Section Titles */
          .footer-title {
            font-size: 1.15rem;
            font-weight: 700;
            color: #8A2BE2;
            margin-bottom: 12px;
          }

          /* ✅ Footer Lists */
          .footer-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .footer-list li {
            margin-bottom: 8px;
            font-size: 0.9rem;
            color: #ccc;
            cursor: pointer;
            transition: color 0.3s ease;
          }

          .footer-list li:hover {
            color: #8A2BE2;
          }

          /* ✅ Contact Details */
          .footer-contact li {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #ccc;
            font-size: 0.9rem;
            margin-bottom: 8px;
          }

          .footer-contact svg {
            color: #8A2BE2;
            flex-shrink: 0;
          }

          /* ✅ Subscribe Box */
          .subscribe-box {
            margin-top: 15px;
            display: flex;
            align-items: center;
            background: #2a2a2a;
            border-radius: 25px;
            overflow: hidden;
            width: 100%;
            max-width: 280px;
          }

          .subscribe-box input {
            flex: 1;
            padding: 8px 12px;
            border: none;
            outline: none;
            background: transparent;
            color: #fff;
            font-size: 0.85rem;
          }

          .subscribe-box button {
            background: #8A2BE2;
            color: #fff;
            border: none;
            padding: 8px 15px;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.3s ease;
          }

          .subscribe-box button:hover {
            background: #000;
          }

          /* ✅ Footer Bottom Inside Layout */
          .footer-bottom {
            text-align: center;
            color: #aaa;
            border-top: 1px solid #333;
            padding-top: 20px;
            width: 100%;
            font-size: 0.85rem;
          }

          .footer-bottom span {
            color: #8A2BE2;
            font-weight: 600;
          }

          /* ✅ Responsive Design */
          @media (max-width: 992px) {
            .footer-top {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 25px;
            }

            .footer-column {
              align-items: center;
            }

            .social-icons {
              justify-content: center;
            }

            .footer-contact li {
              justify-content: center;
            }

            .subscribe-box {
              margin: 15px auto 0;
            }
          }
        `}
      </style>

      {/* ✅ Footer Section */}
      <footer className="footer-section" id="footer">
        <div className="footer-top">
          {/* Brand + Social Media */}
          <div className="footer-column footer-brand">
            <h2 className="brand-name">HealthCare+</h2>
            <p className="brand-tagline">
              Digital healthcare for everyone — connecting patients and doctors with ease.
            </p>

            <div className="social-icons">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Departments */}
          <div className="footer-column">
            <h3 className="footer-title">Departments</h3>
            <ul className="footer-list">
              <li>General Medicine</li>
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Dental Care</li>
              <li>Gynecology</li>
              <li>Laboratory</li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h3 className="footer-title">Support & Policies</h3>
            <ul className="footer-list">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>FAQs</li>
              <li>Help & Support</li>
              <li>Company License</li>
            </ul>

            <div className="subscribe-box">
              <input type="email" placeholder="Your Email Address" />
              <button>Subscribe</button>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3 className="footer-title">Get in Touch</h3>
            <ul className="footer-list footer-contact">
              <li>
                <FaClock /> Mon - Fri : 09:00 AM - 06:00 PM
              </li>
              <li>
                <FaEnvelope /> support@healthcareplus.com
              </li>
              <li>
                <FaLocationDot /> Visakhapatnam, Andhra Pradesh
              </li>
            </ul>
          </div>
        </div>

        {/* ✅ Footer Bottom (Inside layout) */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} <span>HealthCare+</span> | All Rights Reserved.  
          Designed by <span>Ajay Kumar</span>.
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
