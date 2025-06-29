import React from 'react';
import CoreCompetencies from './CoreCompetencies';
import ServicesGrid from './ServicesGrid';
import TechnicalStack from './TechnicalStack';

const Skills = () => {
  return (
    <section className="bg-[#1A1A1A] py-20 relative overflow-hidden" id="skills">
      {/* Animated background pattern - contained within viewport */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-[#61DAFB] rounded-full blur-3xl top-10 left-1/4 animate-pulse delay-500"></div>
        <div className="absolute w-64 h-64 bg-[#3DDC84] rounded-full blur-3xl bottom-20 right-1/3 animate-pulse delay-1500"></div>
        <div className="absolute w-80 h-80 bg-[#61DAFB] rounded-full blur-3xl top-1/2 right-10 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive technical expertise and professional services to bring your digital vision to life
          </p>
        </div>
        
        <CoreCompetencies />
        <ServicesGrid />
        <TechnicalStack />
      </div>
    </section>
  );
};

export default Skills;