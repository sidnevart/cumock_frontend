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
          <h1 className="hero-title">Соревновательное программирование</h1>
          <p className="hero-subtitle">
            Бросьте вызов себе, соревнуйтесь с другими и поднимите свои навыки программирования на новый уровень
          </p>
          {!isAuthenticated && (
            <Link to="/register" className="cta-button">
              Начать путь
            </Link>
          )}
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">PvP Соревнования</h3>
              <p className="feature-description">
                Соревнуйтесь с другими программистами в режиме реального времени
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Умное отслеживание</h3>
              <p className="feature-description">
                Следите за своим прогрессом с помощью детальной статистики
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Целевая практика</h3>
              <p className="feature-description">
                Фокусируйтесь на слабых местах с персональными рекомендациями
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">ИИ-обучение</h3>
              <p className="feature-description">
                Получайте умные подсказки и учитесь на своих ошибках быстрее
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">Как это работает</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Выберите задачу</h3>
              <p className="step-description">
                Выберите из множества задач или присоединитесь к PvP битве
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Напишите решение</h3>
              <p className="step-description">
                Создайте свое решение на любимом языке программирования
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Тестирование</h3>
              <p className="step-description">
                Проверьте код на тестовых примерах и отправьте решение
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="step-title">Развивайтесь</h3>
              <p className="step-description">
                Учитесь на обратной связи и соревнуйтесь с другими
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;