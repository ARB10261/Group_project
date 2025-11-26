import React from "react";
import {
  FaEnvelope,
  FaClock,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <>
      <style>
        {`
          .footer-section {
            background: #0f172a;
            color: #e5e7eb;
            padding: 55px 80px;
          }

          /* ⭐ 4 Columns */
          .footer-top {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 45px;
            width: 100%;
            margin-bottom: 35px;
          }

          .footer-column {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          /* ⭐ Brand */
          .brand-name {
            font-size: 1.7rem;
            font-weight: 700;
            color: #0ea5e9;
            margin-bottom: 6px;
          }
          .brand-name span {
            color: #0284c7;
          }

          .brand-tagline {
            font-size: 0.9rem;
            color: #9ca3af;
            line-height: 1.4;
          }

          /* ⭐ Social Icons */
          .social-icons {
            display: flex;
            gap: 12px;
            margin-top: 8px;
          }
          .social-icons a {
            color: #0ea5e9;
            font-size: 1.25rem;
            transition: 0.25s;
          }
          .social-icons a:hover {
            color: #ffffff;
            transform: translateY(-2px);
          }

          /* ⭐ Titles */
          .footer-title {
            font-size: 1.15rem;
            font-weight: 700;
            color: #0ea5e9;
            margin-bottom: 10px;
          }

          /* ⭐ Lists */
          .footer-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .footer-list li {
            font-size: 0.92rem;
            margin-bottom: 8px;
            cursor: pointer;
            transition: color 0.25s, transform 0.25s;
            color: #d1d5db;
          }

          .footer-list li:hover {
            color: #0ea5e9;
            transform: translateX(3px);
          }

          /* ⭐ Contact Section */
          .footer-contact li {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
          }

          .footer-contact svg {
            color: #0ea5e9;
          }

          /* ⭐ Subscribe Box */
          .subscribe-box {
            display: flex;
            background: #111827;
            border-radius: 50px;
            margin-top: 10px;
            overflow: hidden;
            border: 1px solid #1f2937;
          }

          .subscribe-box input {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            color: #f9fafb;
            padding: 8px 12px;
          }

          .subscribe-box button {
            background: linear-gradient(135deg, #0ea5e9, #0284c7);
            border: none;
            color: white;
            padding: 8px 16px;
            cursor: pointer;
            font-weight: 600;
          }

          /* ⭐ Bottom */
          .footer-bottom {
            text-align: center;
            color: #9ca3af;
            font-size: 0.9rem;
            padding-top: 16px;
            border-top: 1px solid #1f2937;
          }

          .footer-bottom span {
            color: #0ea5e9;
            font-weight: 700;
          }

          /* 📱 Responsive */
          @media (max-width: 992px) {
            .footer-section {
              padding: 50px 40px;
            }
            .footer-top {
              grid-template-columns: repeat(2, 1fr);
              gap: 35px;
            }
          }

          @media (max-width: 600px) {
            .footer-section {
              padding: 40px 25px;
            }

            .footer-top {
              grid-template-columns: 1fr;
              text-align: center;
            }

            .footer-column {
              align-items: center;
            }

            .footer-contact li {
              justify-content: center;
            }

            .social-icons {
              justify-content: center;
            }

            .subscribe-box {
              width: 90%;
              margin: 10px auto 0;
            }
          }
      `}
      </style>

      <footer className="footer-section" id="footer">
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-column">
            <h2 className="brand-name">
              HealthCare<span>+</span>
            </h2>
            <p className="brand-tagline">
              Digital healthcare for everyone — connecting patients and doctors with ease.
            </p>

            <div className="social-icons">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

          {/* Departments Column */}
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

          {/* Support Column */}
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

          {/* Contact Column */}
          <div className="footer-column">
            <h3 className="footer-title">Get in Touch</h3>
            <ul className="footer-list footer-contact">
              <li><FaClock /> Mon – Fri : 09:00 AM – 06:00 PM</li>
              <li><FaEnvelope /> support@healthcareplus.com</li>
              <li><FaLocationDot /> Visakhapatnam, Andhra Pradesh</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} <span>HealthCare+</span> — All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
