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

  // Each letter bubbles in sync (no stagger delay)
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
            align-items: center;
            justify-content: flex-start;
            padding: 80px 100px;
            min-height: 100vh;
            background: url(${doctorImg}) no-repeat center center/cover;
            color: #fff;
            position: relative;
          }

          /* Add overlay for better text visibility */
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
            position: relative; /* make sure text is above overlay */
            max-width: 550px;
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
            white-space: nowrap;
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

          @media (max-width: 992px) {
            .hero-wrapper {
              flex-direction: column;
              text-align: center;
              padding: 50px 20px;
            }
          }
        `}
      </style>

      <section className="hero-wrapper">
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
      </section>
    </>
  );
};

export default HeroSection;
