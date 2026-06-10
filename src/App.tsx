import React from 'react';
import Navbar from './components/Navigation/Navbar';
import BackToTopButton from './components/BackToTopButton';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills/Skills';
import Timeline from './components/Timeline/Timeline';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Timeline />
      <Education />
      <Achievements />
      <Contact />
      <BackToTopButton />
    </div>
  );
}

export default App;