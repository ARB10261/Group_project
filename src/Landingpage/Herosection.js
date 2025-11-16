import React, { useEffect, useState } from "react";
import doctorImg from "../assets/heroimage.jpg";

const words = ["health", "sushi", "steak"];

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let charIndex = 0;
    const typingSpeed = 120;

    const type = () => {
      if (typing) {
        if (charIndex < words[currentWord].length) {
          setDisplayText(words[currentWord].slice(0, charIndex + 1));
          charIndex++;
          setTimeout(type, typingSpeed);
        } else {
          setTimeout(() => setTyping(false), 1200);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(words[currentWord].slice(0, charIndex - 1));
          charIndex--;
          setTimeout(type, typingSpeed / 2);
        } else {
          setTyping(true);
          setCurrentWord((prev) => (prev + 1) % words.length);
        }
      }
    };

    type();
  }, [currentWord, typing]);

  const bubbleLetters = (text) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        style={{
          display: "inline-block",
          animationName: "bubble",
          animationDuration: "2s",
          animationIterationCount: "infinite",
          animationTimingFunction: "ease-in-out",
        }}
      >
        {char}
      </span>
    ));

  return (
    <>
      <style>
        {`
          @keyframes bubble {
            0%, 100% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
            50% {
              transform: translateY(-6px) scale(1.15);
              opacity: 0.8;
            }
          }

          .hero-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 80px 100px;
            min-height: 100vh;
            background: url(${doctorImg}) no-repeat center center/cover;
            color: #fff;
            position: relative;
          }

          .hero-wrapper::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
          }

          .hero-left {
  position: relative;
  max-width: 650px;
  width: 100%;
  text-align: left;       /* Align all text to LEFT */
  margin-right: auto;     /* Push the content to the LEFT side */
  margin-bottom: 60px;
  z-index: 2;
}


          .tagline {
            color: #4a6bff;
            font-size: 0.9rem;
            letter-spacing: 2px;
            margin-bottom: 15px;
            font-weight: 600;
          }

          .hero-title {
            font-size: 3rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .typing-word {
            color: #00cfff;
            font-weight: 800;
          }

          .hero-subtitle {
            font-size: 1.1rem;
            color: #f0f0f0;
            margin-bottom: 35px;
            line-height: 1.6;
          }

          .appointment-btn {
            background: linear-gradient(to right, #3e7bff, #1a4bff);
            color: #fff;
            padding: 12px 30px;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            transition: 0.3s ease;
          }

          .appointment-btn:hover {
            background: linear-gradient(to right, #1a4bff, #3e7bff);
          }

          /* ---------------- SEARCH BAR ---------------- */
          .search-container {
            width: 80%;
            max-width: 900px;
            display: flex;
            align-items: center;
            background: rgba(0, 67, 87, 0.4);
            padding: 10px 20px;
            border-radius: 40px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(4px);
            z-index: 2;
          }

          .search-input {
            flex: 1;
            border: none;
            background: transparent;
            color: #fff;
            font-size: 1rem;
            outline: none;
          }

          .search-input::placeholder {
            color: #d2d2d2;
          }

          .search-btn {
            background: #ff8800;
            border: none;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #fff;
            font-size: 1.2rem;
          }

          /* ---------------- OPTIONS BAR ---------------- */
          .options-container {
            margin-top: 30px;
            width: 90%;
            max-width: 1050px;
            display: flex;
            justify-content: space-between;
            gap: 8px;
            z-index: 2;
          }

          .option-box {
            flex: 1;
            background: rgba(255, 255, 255, 0.75);
            padding: 14px 20px;
            border-radius: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 2px solid rgba(0, 0, 0, 0.15);
            cursor: pointer;
            font-weight: 500;
            font-size: 0.95rem;
            transition: 0.2s ease;
          }

          .option-box i {
            font-size: 1.3rem;
          }

          .option-box:hover {
            background: #fff;
            border-color: #000;
          }
        `}
      </style>

      <section className="hero-wrapper">

        {/* ORIGINAL LEFT CONTENT (unchanged) */}
        <div className="hero-left">
          <div className="tagline">COMMITTED TO SUCCESS</div>

          <h1 className="hero-title">
            WE CARE ABOUT YOUR{" "}
            <span className="typing-word">{bubbleLetters(displayText)}</span>
          </h1>

          <p className="hero-subtitle">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            uquip ex ea commodo consequat is aute irure.
          </p>

          <button className="appointment-btn">Appointment →</button>
        </div>

        {/* ✅ ADDED SEARCH BAR */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search For Doctors & Specialities..."
            className="search-input"
          />
          <button className="search-btn">
            <i className="bi bi-search"></i>
          </button>
        </div>

        {/* ✅ ADDED OPTIONS BAR */}
        <div className="options-container">
          <div className="option-box">
            <span>Book Appointment</span>
            <i className="bi bi-arrow-right-circle"></i>
          </div>

          <div className="option-box">
            <span>Find Hospital</span>
            <i className="bi bi-arrow-right-circle"></i>
          </div>

          <div className="option-box">
            <span>Book Health Check</span>
            <i className="bi bi-arrow-right-circle"></i>
          </div>

          <div className="option-box">
            <span>Get Expert Opinion</span>
            <i className="bi bi-arrow-right-circle"></i>
          </div>
        </div>

      </section>
    </>
  );
};

export default HeroSection;
