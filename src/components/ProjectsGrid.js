import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectsGrid.css';

const projects = [
  {
    title: "Python Calculator",
    desc: "A simple command-line calculator built with Python.",
    img: "https://via.placeholder.com/400x240",
    link: "#"
  },
  {
    title: "HTML Login Page",
    desc: "Responsive login form using HTML and CSS only.",
    img: "https://via.placeholder.com/400x240",
    link: "#"
  },
  {
    title: "React Portfolio",
    desc: "This very portfolio! Built using React from scratch.",
    img: "https://via.placeholder.com/400x240",
    link: "#"
  },
];

export default function ProjectsGrid() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}
