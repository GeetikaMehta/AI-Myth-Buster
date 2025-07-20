import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home_style.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Flairy SVG background */}
      <svg className="home-flair" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="300" rx="220" ry="120" fill="#4f8cff" fillOpacity="0.18" />
        <ellipse cx="650" cy="320" rx="180" ry="90" fill="#00ffd0" fillOpacity="0.13" />
        <ellipse cx="450" cy="200" rx="120" ry="60" fill="#22314a" fillOpacity="0.10" />
        <ellipse cx="500" cy="450" rx="100" ry="40" fill="#4f6d7a" fillOpacity="0.10" />
      </svg>
      {/* Extra abstract background shapes */}
      <svg className="home-bg-abstract" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1100" cy="100" r="90" fill="#4f8cff" fillOpacity="0.10" />
        <rect x="80" y="600" width="180" height="80" rx="30" fill="#2dd4bf" fillOpacity="0.10" />
        <ellipse cx="900" cy="700" rx="60" ry="30" fill="#22314a" fillOpacity="0.08" />
      </svg>
      <div className="home-main-content">
        {/* Section 1: Hero/title/buttons */}
        <div className="home-hero-section">
          <div className="home-square">
            <div className="home-icon">
              {/* Techy AI icon using SVG */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" stroke="#00ffd0" strokeWidth="3" fill="#23264a" />
                <path d="M20 32c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12z" stroke="#4f8cff" strokeWidth="2.5" fill="#1a1c2c" />
                <circle cx="32" cy="32" r="6" fill="#00ffd0" />
                <circle cx="24" cy="28" r="2" fill="#4f8cff" />
                <circle cx="40" cy="28" r="2" fill="#4f8cff" />
              </svg>
            </div>
            <h1 className="home-title">AI Misinformation Chatbot</h1>
            <h2 className="home-subtitle">Empowering Truth, Busting Myths</h2>
            <p className="home-desc">
              Enter any cultural or traditional claim and let our AI analyze it for scientific accuracy. Promote scientific literacy and dispel common misconceptions with a single click.
            </p>
            <div className="home-btn-row">
              <button className="home-chat-btn" onClick={() => navigate("/chat")}>Queries / Chat</button>
              <button className="home-health-btn" onClick={() => navigate("/health")}>Health</button>
            </div>
          </div>
        </div>
        {/* Section 3: Feature cards */}
        <div className="home-feature-section">
          <div className="home-feature-cards-row">
            <div className="home-feature-card">
              <img className="home-feature-img" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Healthy Food" />
              <div className="home-feature-content">
                <div className="home-feature-title">Healthy Eating</div>
                <div className="home-feature-desc">Discover the benefits of a balanced diet and how nutritious food fuels your body and mind.</div>
              </div>
            </div>
            <div className="home-feature-card">
              <img className="home-feature-img" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Running" />
              <div className="home-feature-content">
                <div className="home-feature-title">Active Living</div>
                <div className="home-feature-desc">Embrace an active lifestyle—regular movement and exercise are key to long-term health.</div>
              </div>
            </div>
            <div className="home-feature-card">
              <img className="home-feature-img" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Mindful Wellness" />
              <div className="home-feature-content">
                <div className="home-feature-title">Mindful Wellness</div>
                <div className="home-feature-desc">Prioritize your mental well-being with mindfulness, relaxation, and self-care practices.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <span>© {new Date().getFullYear()} AI Misinformation Chatbot | Promoting Truth & Wellness</span>
      </footer>
    </div>
  );
}

export default Home;
