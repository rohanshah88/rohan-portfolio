import React from 'react';
import './Skills.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaPhp, FaDatabase, FaGitAlt, FaGithub,
} from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, level: 90, tip: 'Markup language for structuring web pages.' },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 85, tip: 'Used to style and layout web content.' },
      { name: 'JavaScript', icon: <FaJs />, level: 80, tip: 'Programming language of the web.' },
      { name: 'React', icon: <FaReact />, level: 75, tip: 'JS library for building user interfaces.' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP', icon: <FaPhp />, level: 70, tip: 'Scripting language used for web development.' },
      { name: 'MySQL', icon: <FaDatabase />, level: 75, tip: 'Relational database management system.' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 80, tip: 'Version control system for tracking code changes.' },
      { name: 'GitHub', icon: <FaGithub />, level: 85, tip: 'Platform for hosting and collaborating on code.' },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>My Skills</h2>
      {skillCategories.map((category, catIndex) => (
        <div className="skill-category" key={catIndex}>
          <h3>{category.title}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, index) => (
              <div
                className="skill-card circular"
                key={index}
                data-tooltip-id="skill-tooltip"
                data-tooltip-content={skill.tip}
              >
                <div className="circular-bar">
                  <CircularProgressbar
                    value={skill.level}
                    text={`${skill.level}%`}
                    styles={buildStyles({
                      textColor: '#1abc9c',
                      pathColor: '#1abc9c',
                      trailColor: '#ddd',
                    })}
                  />
                </div>
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Tooltip id="skill-tooltip" place="top" />
    </section>
  );
}
