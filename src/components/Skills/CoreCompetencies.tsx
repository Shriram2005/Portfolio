import React from 'react';
import { Smartphone, Globe, Brain } from 'lucide-react';

const competencies = [
  {
    icon: Smartphone,
    title: "Android Development",
    description: "Native Android apps with Kotlin/Java, Jetpack Compose, and modern architecture patterns",
    skills: ["Kotlin", "Java", "Jetpack Compose", "MVVM"]
  },
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description: "End-to-end web solutions from responsive frontends to scalable backend systems",
    skills: ["React", "PHP", "MySQL", "Firebase"]
  },
  {
    icon: Brain,
    title: "Problem-Solving & Architecture",
    description: "Clean code architecture, design patterns, and efficient algorithm implementation",
    skills: ["Clean Architecture", "Design Patterns", "DSA", "OOP"]
  }
];

const CoreCompetencies = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Competencies</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {competencies.map((competency, index) => {
          const IconComponent = competency.icon;
          return (
            <div 
              key={index}
              className="bg-[#2D2D2D] rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-[#3DDC84]"
            >
              <div className="bg-[#3DDC84] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconComponent className="w-8 h-8 text-[#3DDC84]" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{competency.title}</h4>
              <p className="text-gray-400 mb-4 leading-relaxed">{competency.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {competency.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-[#3DDC84] bg-opacity-10 text-[#3DDC84] px-3 py-1 rounded-full text-sm border border-[#3DDC84] border-opacity-30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreCompetencies;