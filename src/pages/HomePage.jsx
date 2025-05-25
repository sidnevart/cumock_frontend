import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './HomePage.css';

function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Master Competitive Programming</h1>
          <p className="hero-subtitle">
            Challenge yourself, compete with others, and elevate your coding skills to new heights
          </p>
          {!isAuthenticated && (
            <Link to="/register" className="cta-button">
              Start Your Journey
            </Link>
          )}
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">PvP Code Battles</h3>
              <p className="feature-description">
                Challenge other programmers in real-time coding battles and prove your skills
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Smart Progress Tracking</h3>
              <p className="feature-description">
                Monitor your improvement with detailed statistics and performance analytics
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Targeted Practice</h3>
              <p className="feature-description">
                Focus on your weak areas with personalized problem recommendations
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">AI-Powered Learning</h3>
              <p className="feature-description">
                Get intelligent suggestions and learn from your mistakes faster
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Choose Your Challenge</h3>
              <p className="step-description">
                Select from a variety of programming problems or join a PvP battle
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Write Your Solution</h3>
              <p className="step-description">
                Code your solution in your preferred programming language
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Test and Submit</h3>
              <p className="step-description">
                Run your code against test cases and submit when ready
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="step-title">Improve and Compete</h3>
              <p className="step-description">
                Learn from feedback and challenge others to grow
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;