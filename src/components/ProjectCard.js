import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ title, desc, img, link }) {
  return (
    <div className="project-card">
      <div className="project-img-container">
        <img src={img} alt={title} className="project-img" />
        <div className="project-overlay">
          <a href={link} target="_blank" rel="noopener noreferrer" className="view-button">
            View Project
          </a>
        </div>
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
