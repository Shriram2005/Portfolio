import React, { useState } from 'react';
import { Code, Database, Globe, Smartphone, Star, Award, TrendingUp, Zap } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  experience: string;
  color: string;
  icon: string;
}

const skillsData: Skill[] = [
  // Mobile Development
  { name: 'Kotlin', level: 90, category: 'Mobile', experience: '2+ years', color: '#7F52FF', icon: '🎯' },
  { name: 'Jetpack Compose', level: 85, category: 'Mobile', experience: '1.5+ years', color: '#4285F4', icon: '🚀' },
  { name: 'Java', level: 85, category: 'Mobile', experience: '3+ years', color: '#ED8B00', icon: '☕' },
  { name: 'Android Studio', level: 90, category: 'Mobile', experience: '2+ years', color: '#3DDC84', icon: '🤖' },
  { name: 'MVVM', level: 85, category: 'Mobile', experience: '2+ years', color: '#FF6B6B', icon: '🏗️' },
  { name: 'Room DB', level: 80, category: 'Mobile', experience: '1.5+ years', color: '#4ECDC4', icon: '🗄️' },

  // Frontend Development
  { name: 'React', level: 85, category: 'Frontend', experience: '2+ years', color: '#61DAFB', icon: '⚛️' },
  { name: 'HTML5', level: 95, category: 'Frontend', experience: '4+ years', color: '#E34F26', icon: '🌐' },
  { name: 'CSS3', level: 90, category: 'Frontend', experience: '4+ years', color: '#1572B6', icon: '🎨' },
  { name: 'JavaScript', level: 85, category: 'Frontend', experience: '3+ years', color: '#F7DF1E', icon: '⚡' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend', experience: '2+ years', color: '#06B6D4', icon: '💨' },

  // Backend & Database
  { name: 'PHP', level: 75, category: 'Backend', experience: '2+ years', color: '#777BB4', icon: '🐘' },
  { name: 'MySQL', level: 80, category: 'Backend', experience: '2+ years', color: '#4479A1', icon: '🗃️' },
  { name: 'Firebase', level: 85, category: 'Backend', experience: '2+ years', color: '#FFCA28', icon: '🔥' },
  { name: 'Git', level: 90, category: 'Backend', experience: '3+ years', color: '#F05032', icon: '📝' },

  // Tools & Design
  { name: 'VS Code', level: 95, category: 'Tools', experience: '4+ years', color: '#007ACC', icon: '💻' },
  { name: 'Canva', level: 85, category: 'Tools', experience: '3+ years', color: '#00C4CC', icon: '🎭' },
  { name: 'Material Design', level: 90, category: 'Tools', experience: '2+ years', color: '#757575', icon: '📱' },
  { name: 'Figma', level: 80, category: 'Tools', experience: '1+ year', color: '#F24E1E', icon: '🎨' }
];

const categoryIcons = {
  Mobile: Smartphone,
  Frontend: Globe,
  Backend: Database,
  Tools: Code
};

const categoryColors = {
  Mobile: '#3DDC84',
  Frontend: '#61DAFB',
  Backend: '#FF6B6B',
  Tools: '#FFCA28'
};

const TechnicalStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Mobile', 'Frontend', 'Backend', 'Tools'];
  const filteredSkills = selectedCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  // Calculate statistics
  const totalSkills = skillsData.length;
  const avgProficiency = Math.round(skillsData.reduce((sum, skill) => sum + skill.level, 0) / totalSkills);
  const totalProjects = 15;
  const yearsExperience = 2;

  return (
    <div className="relative">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">
          Technical Expertise
        </h3>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
          Comprehensive skill set spanning mobile development, web technologies, and modern development tools
        </p>
        
        {/* Statistics Cards - Compact Design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
          <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] rounded-lg p-4 border border-gray-700/50">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-4 h-4 text-[#3DDC84] mr-2" />
              <span className="text-xl font-bold text-white">{totalSkills}+</span>
            </div>
            <p className="text-gray-400 text-xs">Technologies</p>
          </div>
          <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] rounded-lg p-4 border border-gray-700/50">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-4 h-4 text-[#61DAFB] mr-2" />
              <span className="text-xl font-bold text-white">{avgProficiency}%</span>
            </div>
            <p className="text-gray-400 text-xs">Avg Proficiency</p>
          </div>
          <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] rounded-lg p-4 border border-gray-700/50">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-4 h-4 text-[#FFCA28] mr-2" />
              <span className="text-xl font-bold text-white">{totalProjects}+</span>
            </div>
            <p className="text-gray-400 text-xs">Projects Built</p>
          </div>
          <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] rounded-lg p-4 border border-gray-700/50">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-4 h-4 text-[#FF6B6B] mr-2" />
              <span className="text-xl font-bold text-white">{yearsExperience}+</span>
            </div>
            <p className="text-gray-400 text-xs">Years Experience</p>
          </div>
        </div>
      </div>

      {/* Category Filter - Sleek Design */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => {
          const IconComponent = category === 'All' ? Star : categoryIcons[category as keyof typeof categoryIcons];
          const skillCount = category === 'All' ? skillsData.length : skillsData.filter(s => s.category === category).length;
          const isActive = selectedCategory === category;
          
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`group relative flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                isActive
                  ? 'bg-[#3DDC84] text-black shadow-lg shadow-[#3DDC84]/20'
                  : 'bg-[#1E1E1E] text-gray-300 hover:bg-[#2D2D2D] border border-gray-700/50 hover:border-[#3DDC84]/30'
              }`}
            >
              <div className="relative flex items-center gap-2">
                {IconComponent && <IconComponent className="w-4 h-4" />}
                <span>{category}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  isActive ? 'bg-black/20 text-black' : 'bg-gray-700/50 text-gray-400'
                }`}>
                  {skillCount}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Skills Grid - Compact Professional Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {filteredSkills.map((skill, index) => {
          const IconComponent = categoryIcons[skill.category as keyof typeof categoryIcons];
          const categoryColor = categoryColors[skill.category as keyof typeof categoryColors];
          
          return (
            <div
              key={skill.name}
              className="skill-card group bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] rounded-xl p-5 border border-gray-700/50 hover:border-[#3DDC84]/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3DDC84]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header - Compact */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{skill.icon}</div>
                    <div>
                      <h5 className="text-base font-semibold text-white group-hover:text-[#3DDC84] transition-colors">
                        {skill.name}
                      </h5>
                      <p className="text-gray-400 text-xs">{skill.experience}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-[#3DDC84]">{skill.level}%</div>
                  </div>
                </div>

                {/* Progress Bar - Sleek */}
                <div className="mb-3">
                  <div className="w-full bg-gray-700/50 rounded-full h-1.5">
                    <div 
                      className="h-1.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${categoryColor})`
                      }}
                    />
                  </div>
                </div>

                {/* Category Badge - Minimal */}
                <div className="flex items-center justify-between">
                  <span 
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium"
                    style={{ 
                      backgroundColor: `${categoryColor}15`,
                      color: categoryColor
                    }}
                  >
                    <IconComponent className="w-3 h-3" />
                    {skill.category}
                  </span>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnicalStack;