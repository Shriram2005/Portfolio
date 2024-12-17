import React from 'react';

const skillCategories = [
  {
    title: "Android Development",
    skills: [
      { name: "Kotlin", level: 90 },
      { name: "Java", level: 85 },
      { name: "XML", level: 90 },
      { name: "Jetpack Compose", level: 85 }
    ]
  },
  {
    title: "Architecture",
    skills: [
      { name: "MVVM", level: 85 },
      { name: "Clean Architecture", level: 80 },
      { name: "Repository Pattern", level: 85 },
      { name: "Dependency Injection", level: 80 }
    ]
  },
  {
    title: "Libraries & SDKs",
    skills: [
      { name: "Android Jetpack", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "Room Database", level: 85 },
      { name: "Retrofit", level: 90 }
    ]
  }
];

const Skills = () => {
  return (
    <section className="bg-[#121212] py-20" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-[#1E1E1E] rounded-lg p-6"
              style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
            >
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-[#3DDC84]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#2D2D2D] rounded-full h-2">
                      <div 
                        className="bg-[#3DDC84] h-2 rounded-full transition-all duration-500"
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
    </section>
  );
};

export default Skills;