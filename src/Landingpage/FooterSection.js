import React from "react";
import { FaEnvelope, FaClock, FaLocationDot, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <>
      <style>
        {`
          /* ✅ Footer Layout */
          .footer-section {
            background: #0f172a;
            color: #e5e7eb;
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
            color: #0ea5e9;
          }

          .brand-name span {
            color: #0284c7;
          }

          .brand-tagline {
            font-size: 0.9rem;
            color: #9ca3af;
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
            color: #0ea5e9;
            font-size: 1.2rem;
            transition: color 0.25s ease, transform 0.25s ease;
          }

          .social-icons a:hover {
            color: #ffffff;
            transform: translateY(-2px);
          }

          /* ✅ Section Titles */
          .footer-title {
            font-size: 1.15rem;
            font-weight: 700;
            color: #0ea5e9;
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
            color: #d1d5db;
            cursor: pointer;
            transition: color 0.25s ease, transform 0.15s ease;
          }

          .footer-list li:hover {
            color: #0ea5e9;
            transform: translateX(2px);
          }

          /* ✅ Contact Details */
          .footer-contact li {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #e5e7eb;
            font-size: 0.9rem;
            margin-bottom: 8px;
          }

          .footer-contact svg {
            color: #0ea5e9;
            flex-shrink: 0;
          }

          /* ✅ Subscribe Box */
          .subscribe-box {
            margin-top: 15px;
            display: flex;
            align-items: center;
            background: #111827;
            border-radius: 999px;
            overflow: hidden;
            width: 100%;
            max-width: 280px;
            border: 1px solid #1f2937;
          }

          .subscribe-box input {
            flex: 1;
            padding: 8px 12px;
            border: none;
            outline: none;
            background: transparent;
            color: #f9fafb;
            font-size: 0.85rem;
          }

          .subscribe-box input::placeholder {
            color: #6b7280;
          }

          .subscribe-box button {
            background: linear-gradient(135deg, #0ea5e9, #0284c7);
            color: #fff;
            border: none;
            padding: 8px 16px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.85rem;
            transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
            box-shadow: 0 6px 16px rgba(2, 132, 199, 0.4);
            white-space: nowrap;
          }

          .subscribe-box button:hover {
            filter: brightness(1.05);
            transform: translateY(-1px);
            box-shadow: 0 10px 22px rgba(2, 132, 199, 0.55);
          }

          .subscribe-box button:active {
            transform: translateY(0);
            box-shadow: 0 5px 12px rgba(2, 132, 199, 0.35);
          }

          /* ✅ Footer Bottom Inside Layout */
          .footer-bottom {
            text-align: center;
            color: #9ca3af;
            border-top: 1px solid #1f2937;
            padding-top: 20px;
            width: 100%;
            font-size: 0.85rem;
          }

          .footer-bottom span {
            color: #0ea5e9;
            font-weight: 600;
          }

          /* ✅ Responsive Design */
          @media (max-width: 992px) {
            .footer-section {
              padding: 40px 20px;
            }

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
            <h2 className="brand-name">
              HealthCare<span>+</span>
            </h2>
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
           <span></span>.
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
