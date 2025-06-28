import React from 'react';
import EducationCard from './EducationCard';

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Sandip University",
    year: "2022-2025",
    score: "8.5 GPA",
    courses: ["Data Structures", "Android Development", "Web Technologies", "Database Management"]
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "KTHM College",
    year: "2020-2022",
    score: "53.00%",
    courses: ["Computer Science", "Mathematics", "Physics"]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "K. K. Wagh English School, Nashik",
    year: "2010-2020",
    score: "Completed",
    courses: ["English", "Mathematics", "Science", "Social Studies"]
  }
];

const Education = () => {
  return (
    <section className="bg-[#121212] py-20" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Education & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationData.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;