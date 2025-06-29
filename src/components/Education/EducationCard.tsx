import React, { useState, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award, 
  BookOpen, 
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface EducationCardProps {
  id: number;
  degree: string;
  degreeShort: string;
  institution: string;
  location: string;
  year: string;
  status: string;
  score: string;
  scoreType: string;
  level: string;
  showScore: boolean;
  description: string;
  courses: string[];
  achievements: string[];
  skills: string[];
  logo: string;
  index: number;
  isLast: boolean;
}

const EducationCard = ({ 
  degree, 
  degreeShort,
  institution, 
  location,
  year, 
  status,
  score,
  scoreType,
  level,
  showScore,
  description,
  courses,
  skills,
  logo,
  index,
  isLast
}: EducationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'undergraduate': return '#3DDC84';
      case 'secondary': return '#61DAFB';
      case 'primary': return '#FFCA28';
      default: return '#3DDC84';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'undergraduate': return GraduationCap;
      case 'secondary': return BookOpen;
      case 'primary': return Star;
      default: return GraduationCap;
    }
  };

  const levelColor = getLevelColor(level);
  const LevelIcon = getLevelIcon(level);

  return (
    <div className="relative">
      {/* Timeline Line - Mobile Responsive */}
      {!isLast && (
        <div className="absolute left-4 sm:left-8 top-16 sm:top-20 w-0.5 h-full bg-gradient-to-b from-gray-600 to-transparent z-0" />
      )}
      
      {/* Timeline Dot - Mobile Responsive */}
      <div 
        className="absolute left-2.5 sm:left-6 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 z-10 transition-all duration-500"
        style={{ 
          backgroundColor: levelColor,
          borderColor: levelColor,
          boxShadow: `0 0 15px ${levelColor}40`
        }}
      />

      {/* Card - Mobile Optimized */}
      <div
        ref={cardRef}
        className={`ml-8 sm:ml-16 transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 overflow-hidden group hover:shadow-2xl hover:shadow-black/20">
          {/* Header - Mobile Optimized */}
          <div className="p-4 sm:p-6 pb-3 sm:pb-4">
            <div className="flex items-start gap-3 sm:gap-4">
              {/* Institution Logo - Mobile Responsive */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img 
                    src={logo} 
                    alt={institution}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl object-cover border-2 border-gray-600/50 group-hover:border-gray-500/50 transition-colors duration-300"
                    loading="lazy"
                  />
                  <div 
                    className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg flex items-center justify-center text-black text-xs font-bold"
                    style={{ backgroundColor: levelColor }}
                  >
                    <LevelIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </div>
                </div>
              </div>

              {/* Main Info - Mobile Optimized */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-2">
                  <div className="mb-2 sm:mb-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#3DDC84] transition-colors duration-300 leading-tight">
                      {/* Show short degree name on mobile, full on desktop */}
                      <span className="sm:hidden">{degreeShort}</span>
                      <span className="hidden sm:inline">{degree}</span>
                    </h3>
                    <p className="text-[#3DDC84] font-semibold text-base sm:text-lg">{institution}</p>
                  </div>
                  <div className="self-start sm:text-right flex-shrink-0">
                    <div 
                      className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs font-medium border"
                      style={{ 
                        backgroundColor: `${levelColor}15`,
                        color: levelColor,
                        borderColor: `${levelColor}30`
                      }}
                    >
                      {status}
                    </div>
                  </div>
                </div>

                {/* Meta Information - Mobile Stack */}
                <div className={`grid ${showScore ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'} gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4`}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: levelColor }} />
                    <span>{year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: levelColor }} />
                    <span className="truncate">{location}</span>
                  </div>
                  {showScore && (
                    <div className="flex items-center gap-2">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: levelColor }} />
                      <span>{score}</span>
                    </div>
                  )}
                </div>

                {/* Description - Mobile Optimized */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {description}
                </p>

                {/* Quick Skills Preview - Mobile Responsive */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {skills.slice(0, window.innerWidth < 640 ? 2 : 3).map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium border"
                      style={{ 
                        backgroundColor: `${levelColor}10`,
                        color: levelColor,
                        borderColor: `${levelColor}20`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Expand Button - Touch Friendly */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors duration-300 hover:text-[#3DDC84] text-gray-400 group/btn py-2 -mx-2 px-2 rounded-lg"
                  aria-expanded={isExpanded}
                  aria-label={`${isExpanded ? 'Hide' : 'Show'} detailed information for ${degree}`}
                >
                  <span>{isExpanded ? 'Show Less' : 'Show Details'}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:scale-110" />
                  ) : (
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:scale-110" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Expandable Content - Mobile Optimized */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-[400px] sm:max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-700/50">
              <div className="pt-3 sm:pt-4 grid grid-cols-1 gap-4 sm:gap-6">
                {/* Coursework - Mobile Optimized */}
                <div>
                  <h4 className="flex items-center gap-2 text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: levelColor }} />
                    Key Coursework
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                    {courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                        <div 
                          className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: levelColor }}
                        />
                        <span className="leading-relaxed">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Skills - Mobile Optimized */}
                <div className="pt-3 sm:pt-4 border-t border-gray-700/30">
                  <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Skills Developed</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-xs font-medium border transition-all duration-300 hover:scale-105"
                        style={{ 
                          backgroundColor: `${levelColor}15`,
                          color: levelColor,
                          borderColor: `${levelColor}30`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hover Gradient Effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${levelColor}05, transparent 50%, ${levelColor}05)`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationCard;