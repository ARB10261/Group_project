import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import doctorImg from "../assets/heroimage.jpg";

const words = ["health", "safety", "happiness"];

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);

  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search?query=${query}`);
  };

  // Typing Animation Logic
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
          animation: "bubble 2s ease-in-out infinite",
          marginRight: "2px",
        }}
      >
        {char}
      </span>
    ));

  return (
    <>
      <style>{`
  @keyframes bubble {
    0%, 100% { transform: translateY(0) scale(1); opacity: 1; }
    50% { transform: translateY(-6px) scale(1.12); opacity: 0.85; }
  }

  .hero-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 100px 90px;
    min-height: 100vh;
    background: url(${doctorImg}) no-repeat center/cover;
    color: #fff;
    position: relative;
    text-align: center;
  }

  .hero-wrapper::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.55);
  }

  .hero-left {
    position: relative;
    max-width: 800px;
    width: 100%;
    z-index: 2;
    margin-bottom: 40px;
  }

  .hero-title {
    font-size: 3.3rem;
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 22px;
  }

  .typing-word {
    color: #ffffff;
    font-weight: 900;
  }

  .hero-subtitle {
    font-size: 1.15rem;
    color: #e8e8e8;
    line-height: 1.7;
    margin-bottom: 45px;
  }

  /* Search Bar */
  .search-container {
    width: 95%;
    max-width: 900px;
    display: flex;
    align-items: center;
    background: rgba(0, 67, 87, 0.45);
    padding: 12px 20px;
    border-radius: 40px;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255,255,255,0.25);
    z-index: 2;
  }

  .search-input {
    flex: 1;
    border: none;
    background: transparent;
    color: #fff;
    font-size: 1.05rem;
    outline: none;
  }

  .search-btn {
    background: #0ea5e9;
    border: none;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.3rem;
    color: #fff;
  }

  /* Options */
  .options-container {
    margin-top: 35px;
    width: 90%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    gap: 14px;
    z-index: 2;
  }

  .option-box {
    flex: 1;
    background: transparent;
    padding: 16px 22px;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid rgba(255,255,255,0.15);
    cursor: pointer;
    font-weight: 500;
    transition: 0.25s ease;
    font-size: 0.95rem;
  }

  .option-box:hover {
    background: #0ea5e9;
    border-color: #fff;
    transform: translateY(-3px);
  }

  /* Tablet Responsive */
  @media (max-width: 992px) {
    .hero-title {
      font-size: 2.7rem;
    }

    .hero-wrapper {
      padding: 100px 30px 70px;
    }

    .options-container {
      gap: 12px;
    }
  }

  /* Mobile Responsive */
  @media (max-width: 650px) {
    .hero-title {
      font-size: 2.2rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }

    .options-container {
      flex-direction: column;
      gap: 16px;
    }

    .option-box {
      width: 100%;
      justify-content: space-between;
    }

    .search-container {
      width: 100%;
      padding: 10px 15px;
    }
  }
`}</style>

      <section className="hero-wrapper">
        <div className="hero-left">
          <h1 className="hero-title">
            WE CARE ABOUT YOUR{" "}
            <span className="typing-word">{bubbleLetters(displayText)}</span>
          </h1>

          <p className="hero-subtitle">
            Your health is our priority. We connect you with expert doctors and
            personalized medical care — anytime, anywhere.
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search For Doctors & Specialities..."
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            <i className="bi bi-search"></i>
          </button>
        </div>

        {/* Options */}
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
