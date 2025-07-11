import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Hi, I’m <span className="highlight">Rohan Shah</span>
        </h1>
        <h2 className="hero-subtitle">
          Aspiring Web Developer <span className="divider">↔</span> Passionate Learner
        </h2>
        <p className="hero-description">
          I design and build modern web experiences using <strong>React</strong>, <strong>JavaScript</strong>, and creativity.
        </p>
        <a href="#projects" className="hero-button">View My Work</a>
      </div>
    </section>
  );
}
