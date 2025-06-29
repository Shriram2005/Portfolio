import React from 'react';
import TimelineItem from './TimelineItem';

const timelineData = [
  {
    company: "S.T.R.E.A.M. Edutech",
    position: "Android Developer",
    duration: "Sep 2024 - Feb 2025 · 6 mos",
    location: "Mumbai, Maharashtra, India · Remote",
    achievements: [
      "Developed native Android applications using Kotlin and Jetpack Compose",
      "Implemented modern Android architecture patterns (MVVM, Clean Architecture)",
      "Collaborated with cross-functional teams on educational technology solutions",
      "Optimized app performance and user experience for educational platforms"
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Android SDK", "MVVM"],
    logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  },
  {
    company: "Techentrance",
    position: "Android Developer",
    duration: "Aug 2024 - Jan 2025 · 6 mos",
    location: "Nashik, Maharashtra, India · Remote",
    achievements: [
      "Built and maintained Android applications with focus on user experience",
      "Integrated RESTful APIs and implemented data persistence solutions",
      "Participated in code reviews and followed best practices for mobile development",
      "Contributed to technical documentation and knowledge sharing sessions"
    ],
    technologies: ["Android Studio", "Java", "Kotlin", "Firebase"],
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
  },
  {
    company: "Technohacks",
    position: "Web Development Intern",
    duration: "Aug 2023 - Sept 2023",
    location: "Remote",
    achievements: [
      "Developed responsive web applications using modern frameworks",
      "Implemented CI/CD pipelines for automated deployment",
      "Collaborated with cross-functional teams on multiple projects",
      "Enhanced website performance and SEO optimization"
    ],
    technologies: ["React", "Node.js", "TypeScript", "HTML/CSS"],
    logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    company: "Lets Grow More",
    position: "Web Development Intern",
    duration: "Aug 2023 - Aug 2023",
    location: "Remote",
    achievements: [
      "Built and maintained multiple client websites",
      "Optimized website performance and SEO",
      "Mentored junior developers and conducted code reviews",
      "Implemented responsive design principles across projects"
    ],
    technologies: ["JavaScript", "HTML/CSS", "WordPress", "Bootstrap"],
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  }
];

const Timeline = () => {
  return (
    <section className="bg-[#121212] py-20 relative overflow-hidden" id="timeline">
      {/* Animated background pattern - contained within viewport */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-[#3DDC84] rounded-full blur-3xl top-20 right-20 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-[#61DAFB] rounded-full blur-3xl bottom-10 left-10 animate-pulse delay-1000"></div>
        <div className="absolute w-64 h-64 bg-[#3DDC84] rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building innovative Android applications and web solutions across diverse technology stacks
          </p>
        </div>
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