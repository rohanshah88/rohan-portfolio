import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Skills from './components/Skills';
import ProjectsGrid from './components/ProjectsGrid';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <main className="px-4 md:px-8 lg:px-20 max-w-screen-xl mx-auto space-y-20">
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Hero />
      <section id="about"><Bio /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><ProjectsGrid /></section>
      <section id="contact"><Contact /></section>
    </div>
    </main>
  );
}

export default App;
