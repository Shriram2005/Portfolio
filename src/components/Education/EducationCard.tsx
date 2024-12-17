import React from 'react';

interface EducationCardProps {
  degree: string;
  institution: string;
  year: string;
  score: string;
  courses: string[];
}

const EducationCard = ({ 
  degree, 
  institution, 
  year, 
  score,
  courses 
}: EducationCardProps) => {
  return (
    <div className="bg-[#2D2D2D] rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
      <h3 className="text-xl font-semibold text-white mb-2">{degree}</h3>
      <p className="text-[#3DDC84] mb-1">{institution}</p>
      <div className="flex justify-between text-gray-400 text-sm mb-4">
        <span>{year}</span>
        <span>{score}</span>
      </div>
      <div className="space-y-2">
        <h4 className="text-white font-medium">Key Courses:</h4>
        <div className="flex flex-wrap gap-2">
          {courses.map((course, index) => (
            <span 
              key={index}
              className="bg-[#3DDC84] bg-opacity-20 text-[#3DDC84] px-3 py-1 rounded-full text-sm"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;