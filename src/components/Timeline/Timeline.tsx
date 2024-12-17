import React from 'react';
import TimelineItem from './TimelineItem';

const timelineData = [
  {
    company: "Technohacks",
    position: "Web Development Intern",
    duration: "Aug 2023 - Present",
    achievements: [
      "Developed responsive web applications using modern frameworks",
      "Implemented CI/CD pipelines for automated deployment",
      "Collaborated with cross-functional teams on multiple projects"
    ],
    technologies: ["React", "Node.js", "TypeScript"],
    logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    company: "Lets Grow More",
    position: "Web Development Intern",
    duration: "Aug 2023 - Present",
    achievements: [
      "Built and maintained multiple client websites",
      "Optimized website performance and SEO",
      "Mentored junior developers"
    ],
    technologies: ["JavaScript", "HTML/CSS", "WordPress"],
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  }
];

const Timeline = () => {
  return (
    <section className="bg-[#1E1E1E] py-20" id="timeline">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Timeline</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;