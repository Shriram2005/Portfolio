import React from 'react';
import CoreCompetencies from './CoreCompetencies';
import ServicesGrid from './ServicesGrid';
import TechnicalStack from './TechnicalStack';

const Skills = () => {
  return (
    <section className="bg-[#121212] py-20" id="skills">
      <div className="container mx-auto px-4">
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