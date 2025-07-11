import React from 'react';
import './Bio.css';
import profileImage from '../assets/profile.jpg'; // Replace this with your image path

export default function Bio() {
  return (
    <section className="bio">
      <div className="bio-image">
        <img src={profileImage} alt="Rohan Shah" />
      </div>
      <div className="bio-text">
        <h2>About Me</h2>
        <p>
          I’m <strong>Rohan Shah</strong>, a BCA student and aspiring web developer. I love building websites that combine good design with clean code.
        </p>
        <p>
          I’m currently learning <strong>React.js</strong>, and exploring full-stack development with <strong>JavaScript</strong>, <strong>PHP</strong>, and <strong>MySQL</strong>.
        </p>
        <p>
          I believe in learning by doing — this portfolio is one step in that journey.
        </p>
      </div>
    </section>
  );
}
