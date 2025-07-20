import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Health_style.css";

const tips = [
  {
    icon: "🥗",
    title: "Eat a Balanced Diet",
    desc: "Include fruits, vegetables, and whole grains in your meals for optimal nutrition."
  },
  {
    icon: "💧",
    title: "Stay Hydrated",
    desc: "Drink plenty of water throughout the day to keep your body functioning well."
  },
  {
    icon: "🏃‍♂️",
    title: "Exercise Regularly",
    desc: "Engage in physical activity to boost your energy and mood."
  },
  {
    icon: "😴",
    title: "Prioritize Sleep",
    desc: "Aim for 7-9 hours of quality sleep for recovery and mental clarity."
  },
  {
    icon: "🧘‍♀️",
    title: "Manage Stress",
    desc: "Practice mindfulness, meditation, or hobbies to reduce stress."
  },
  {
    icon: "🚭",
    title: "Avoid Smoking & Limit Alcohol",
    desc: "Stay away from tobacco and drink alcohol in moderation."
  },
  {
    icon: "🩺",
    title: "Regular Check-ups",
    desc: "Visit your doctor for routine health screenings and advice."
  },
];

function Health() {
  const navigate = useNavigate();

  return (
    <div className="health-container">
      <nav className="health-navbar">
        <div className="health-navbar-spacer" />
        <div className="health-navbar-logo" onClick={() => navigate("/")}> 
          {/* Simple logo SVG */}
          <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" stroke="#4f8cff" strokeWidth="3" fill="#fff" />
            <path d="M20 32c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12z" stroke="#2dd4bf" strokeWidth="2.5" fill="#f5f7fa" />
            <circle cx="32" cy="32" r="6" fill="#4f8cff" />
          </svg>
        </div>
      </nav>
      <div className="health-hero">
        <h1 className="health-title">Health Consciousness</h1>
        <h2 className="health-subtitle">Empower Your Well-being with Smart Choices</h2>
      </div>
      <div className="health-cards-row">
        {tips.map((tip, idx) => (
          <div className="health-tip-card" key={idx}>
            <div className="health-tip-icon">{tip.icon}</div>
            <div className="health-tip-content">
              <div className="health-tip-title">{tip.title}</div>
              <div className="health-tip-desc">{tip.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <footer className="health-footer">
        <span>© {new Date().getFullYear()} Health Consciousness | Stay healthy, stay happy.</span>
      </footer>
    </div>
  );
}

export default Health; 