import React from 'react';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline/Timeline';
import Education from './components/Education/Education';
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
      <Contact />
    </div>
  );
}

export default App;