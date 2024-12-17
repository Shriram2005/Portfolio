import React from 'react';
import { Github, ExternalLink, PlayCircle } from 'lucide-react';

const projects = [
  {
    title: "Fashion App",
    description: "E-commerce app with Material You design system and dynamic theming",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    techStack: ["Jetpack Compose", "Kotlin", "Firebase"],
    metrics: { downloads: "10K+", rating: 4.8 },
    links: {
      demo: "#",
      playStore: "#",
      github: "#"
    }
  },
  {
    title: "To-Do List App",
    description: "Productivity app with offline-first architecture and cloud sync",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    techStack: ["Kotlin", "Room DB", "WorkManager"],
    metrics: { downloads: "5K+", rating: 4.6 },
    links: {
      demo: "#",
      playStore: "#",
      github: "#"
    }
  },
  {
    title: "Amazon Clone",
    description: "Full-featured e-commerce platform with real-time updates",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80",
    techStack: ["HTML", "CSS", "JavaScript"],
    metrics: { downloads: "1K+", rating: 4.5 },
    links: {
      demo: "#",
      github: "#"
    }
  }
];

const Projects = () => {
  return (
    <section className="bg-[#1E1E1E] py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[#2D2D2D] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
            >
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-[#3DDC84] bg-opacity-20 text-[#3DDC84] px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.metrics && (
                  <div className="flex gap-4 mb-4 text-sm text-gray-400">
                    <span>📥 {project.metrics.downloads}</span>
                    <span>⭐ {project.metrics.rating}</span>
                  </div>
                )}
                <div className="flex gap-3">
                  <a href={project.links.demo} className="text-[#3DDC84] hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  {project.links.playStore && (
                    <a href={project.links.playStore} className="text-[#3DDC84] hover:text-white transition-colors">
                      <PlayCircle className="w-5 h-5" />
                    </a>
                  )}
                  <a href={project.links.github} className="text-[#3DDC84] hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;