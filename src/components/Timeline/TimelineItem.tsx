import React from 'react';
import { MapPin } from 'lucide-react';

interface TimelineItemProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  achievements: string[];
  technologies: string[];
  logo: string;
}

const TimelineItem = ({ 
  company, 
  position, 
  duration, 
  location,
  achievements, 
  technologies,
  logo 
}: TimelineItemProps) => {
  return (
    <div className="bg-[#2D2D2D] rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-[#3DDC84] group">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <img 
            src={logo} 
            alt={company} 
            className="w-16 h-16 rounded-xl object-cover border-2 border-gray-600 group-hover:border-[#3DDC84] transition-colors duration-300"
          />
        </div>
        
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white group-hover:text-[#3DDC84] transition-colors duration-300">
              {position}
            </h3>
            <p className="text-[#3DDC84] font-medium text-lg mb-1">{company}</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm">
              <span className="font-medium">{duration}</span>
              <span className="hidden sm:block">•</span>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-white font-medium mb-3">Key Achievements:</h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-300 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#3DDC84] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-[#3DDC84] bg-opacity-10 text-[#3DDC84] px-3 py-1 rounded-full text-sm border border-[#3DDC84] border-opacity-30 hover:bg-opacity-20 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;