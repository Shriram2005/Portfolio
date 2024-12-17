import React from 'react';

interface TimelineItemProps {
  company: string;
  position: string;
  duration: string;
  achievements: string[];
  technologies: string[];
  logo: string;
}

const TimelineItem = ({ 
  company, 
  position, 
  duration, 
  achievements, 
  technologies,
  logo 
}: TimelineItemProps) => {
  return (
    <div className="bg-[#2D2D2D] rounded-lg p-6 relative">
      <div className="flex items-start gap-4">
        <img 
          src={logo} 
          alt={company} 
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold text-white">{position}</h3>
          <p className="text-[#3DDC84] mb-2">{company}</p>
          <p className="text-gray-400 text-sm mb-4">{duration}</p>
          
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-[#3DDC84] bg-opacity-20 text-[#3DDC84] px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;