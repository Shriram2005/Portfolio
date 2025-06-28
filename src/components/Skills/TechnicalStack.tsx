import React from 'react';
import { Code, Wrench, Target } from 'lucide-react';

const technicalData = [
  {
    category: "Development",
    icon: Code,
    sections: [
      {
        title: "Mobile",
        skills: [
          { name: "Jetpack Compose", level: 85 },
          { name: "Kotlin", level: 90 },
          { name: "Java", level: 85 },
          { name: "MVVM", level: 85 },
          { name: "Room DB", level: 80 }
        ]
      },
      {
        title: "Frontend",
        skills: [
          { name: "React", level: 85 },
          { name: "HTML5", level: 95 },
          { name: "CSS3", level: 90 },
          { name: "JavaScript", level: 85 },
          { name: "Tailwind CSS", level: 90 }
        ]
      },
      {
        title: "Backend",
        skills: [
          { name: "PHP", level: 75 },
          { name: "MySQL", level: 80 },
          { name: "Firebase", level: 85 },
          { name: "Git", level: 90 }
        ]
      }
    ]
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    sections: [
      {
        title: "IDEs",
        skills: [
          { name: "Android Studio", level: 90 },
          { name: "VS Code", level: 95 }
        ]
      },
      {
        title: "Design",
        skills: [
          { name: "Canva", level: 85 },
          { name: "Material Design", level: 90 }
        ]
      },
      {
        title: "Cloud & AI",
        skills: [
          { name: "Firebase", level: 85 },
          { name: "ChatGPT", level: 80 }
        ]
      }
    ]
  },
  {
    category: "Core Skills",
    icon: Target,
    sections: [
      {
        title: "Programming Concepts",
        skills: [
          { name: "Data Structures & Algorithms", level: 85 },
          { name: "Object-Oriented Programming", level: 90 },
          { name: "Clean Architecture", level: 80 },
          { name: "Responsive Design", level: 95 }
        ]
      }
    ]
  }
];

const TechnicalStack = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Stack</h3>
      <div className="space-y-8">
        {technicalData.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <div key={categoryIndex} className="bg-[#1E1E1E] rounded-xl p-6 border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="bg-[#3DDC84] bg-opacity-20 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                  <IconComponent className="w-5 h-5 text-[#3DDC84]" />
                </div>
                <h4 className="text-xl font-semibold text-white">{category.category}</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="bg-[#2D2D2D] rounded-lg p-4">
                    <h5 className="text-lg font-medium text-white mb-4 border-b border-gray-700 pb-2">
                      {section.title}
                    </h5>
                    <div className="space-y-3">
                      {section.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-300 text-sm">{skill.name}</span>
                            <span className="text-[#3DDC84] text-sm font-medium">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-[#3DDC84] to-[#2ECC71] h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnicalStack;