import ScrollReveal from '../ScrollReveal';
import TimelineItem from './TimelineItem';

const timelineData = [
  {
    company: "Wind Hans Technology",
    position: "Full Stack Developer Intern",
    duration: "Jan 12, 2026 - Jan 27, 2026 · 15 days",
    location: "Nashik, Maharashtra, India · Offline",
    achievements: [
      "Developed an Employee Attendance Application using Android (Kotlin + Jetpack Compose)",
      "Designed and implemented key features including employee check-in/check-out, attendance tracking, and reporting"
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Android SDK", "Git"],
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    company: "Freelance Developer",
    position: "Self-Employed (Part-time / Project-based)",
    duration: "2025 - Present",
    location: "Nashik, India · Remote",
    achievements: [
      "Delivered 7+ end-to-end web and mobile applications for small businesses and clients",
      "Managed complete project lifecycle including requirements, development, testing, and deployment"
    ],
    technologies: ["React.js", "Flutter", "Firebase", "Node.js", "MySQL"],
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    company: "S.T.R.E.A.M. Edutech",
    position: "Android Intern",
    duration: "Sep 2024 - Feb 2025 · 6 mos",
    location: "Mumbai, Maharashtra, India · Remote",
    achievements: [
      "Developed a comprehensive School Management System as a solo developer, actively used by 150+ students",
      "Designed and implemented core modules for schedules, exams, assignments, and fee management",
      "Built native Android screens and components using Kotlin and Jetpack Compose"
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Android SDK", "Firebase", "SQL"],
    logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  },
  {
    company: "Techentrance",
    position: "Android Developer",
    duration: "Aug 2024 - Jan 2025 · 6 mos",
    location: "Nashik, Maharashtra, India · Remote",
    achievements: [
      "Built and maintained Android applications with focus on user experience",
      "Integrated RESTful APIs and implemented data persistence solutions"
    ],
    technologies: ["Android Studio", "Java", "Kotlin", "Firebase"],
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
  },
  /*
  {
    company: "Technohacks",
    position: "Web Development Intern",
    duration: "Aug 2023 - Sept 2023",
    location: "Remote",
    achievements: [
      "Developed responsive web applications using modern frameworks",
      "Implemented CI/CD pipelines for automated deployment"
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
      "Optimized website performance and SEO"
    ],
    technologies: ["JavaScript", "HTML/CSS", "WordPress", "Bootstrap"],
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  }
  */
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
        <ScrollReveal direction="up" duration={600} delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Building innovative Android applications and web solutions across diverse technology stacks
            </p>
          </div>
        </ScrollReveal>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {timelineData.map((item, index) => (
            <ScrollReveal 
              key={index}
              direction="up" 
              duration={600} 
              delay={200 + (index * 150)}
              threshold={0.1}
            >
              <TimelineItem {...item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;