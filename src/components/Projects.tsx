import React from 'react';
import { Github, ExternalLink, PlayCircle, Globe, Smartphone, Cpu, FileText, Scan, Stethoscope, Calculator, QrCode, ShoppingCart } from 'lucide-react';

const projects = [
  {
    title: "Zervista - Salon Management System",
    description: "Comprehensive salon & parlour service management system with customer management, staff management, analytics, and inventory tracking",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    icon: Smartphone,
    techStack: ["Flutter", "Firebase", "Dart"],
    metrics: { type: "Play Store", value: "Live App" },
    features: ["Online Appointments", "Service Catalog", "Staff Management", "Analytics Dashboard"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.zervista&pcampaignid=web_share",
      github: "#"
    }
  },
  {
    title: "Sandip ERP Login System",
    description: "University ERP System web application for Sandip University's ERP system with efficient direct access",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    icon: Globe,
    techStack: ["Web Technologies", "University Integration"],
    metrics: { type: "GitHub", value: "Open Source" },
    features: ["Direct ERP Access", "University Integration", "Efficient Login", "Student Portal"],
    links: {
      github: "https://github.com/Shriram2005/Sandip-ERP-Login",
      demo: "#"
    }
  },
  {
    title: "Smart Assistant for Blind People",
    description: "IoT-based smart assistant using Raspberry Pi for reading printed text with OCR technology and text-to-speech conversion",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80",
    icon: Cpu,
    techStack: ["Raspberry Pi", "Python", "OCR", "IoT"],
    metrics: { type: "Impact", value: "Accessibility" },
    features: ["Text Recognition", "Audio Feedback", "Portable Design", "Voice Commands"],
    links: {
      github: "https://github.com/Shriram2005/Smart-Assistant-for-Blind-People-using-Raspberry-Pi",
      demo: "#"
    }
  },
  {
    title: "Pdfdroid - PDF Toolkit",
    description: "Comprehensive PDF management web application with multiple utility features including merge, split, compress, and convert functionality",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
    icon: FileText,
    techStack: ["Web Technologies", "PDF.js", "JavaScript"],
    metrics: { type: "Live Site", value: "Production" },
    features: ["PDF Editing", "File Conversion", "Compression Tools", "Batch Processing"],
    links: {
      demo: "https://pdfdroid.netlify.app",
      github: "#"
    }
  },
  {
    title: "Barcode Product Scanner",
    description: "E-Commerce Product Images Manager App with barcode scanning technology and inventory tracking system",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
    icon: Scan,
    techStack: ["Android", "Barcode Scanning", "Database"],
    metrics: { type: "Features", value: "Inventory Mgmt" },
    features: ["Barcode Scanning", "Product Database", "Image Management", "Inventory Control"],
    links: {
      github: "https://github.com/Shriram2005/Barcode-Product-Scanner",
      demo: "#"
    }
  },
  {
    title: "MediScribe OCR",
    description: "Medical Prescription Recognition System using Paddle OCR and Python to digitize handwritten prescriptions",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
    icon: Stethoscope,
    techStack: ["Python", "Paddle OCR", "Database"],
    metrics: { type: "Healthcare", value: "Medical AI" },
    features: ["Text Recognition", "Medication Database", "Prescription History", "Export Functionality"],
    links: {
      github: "https://github.com/Shriram2005/MediScribe-OCR",
      demo: "#"
    }
  },
  {
    title: "Calculator App",
    description: "Mobile Calculator Application built with Kotlin and Jetpack Compose featuring modern UI design and smooth animations",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    icon: Calculator,
    techStack: ["Kotlin", "Jetpack Compose", "Android"],
    metrics: { type: "UI/UX", value: "Modern Design" },
    features: ["Basic Arithmetic", "Modern UI", "Smooth Animations", "Responsive Layout"],
    links: {
      github: "https://github.com/Shriram2005/Calculator-App-Jetpack-Compose",
      demo: "#"
    }
  },
  {
    title: "QR-Barcode Scanner App",
    description: "Multi-Purpose Scanner Application using Jetpack Compose and Google ML Kit with real-time scanning capabilities",
    image: "https://images.unsplash.com/photo-1606166187734-a4cb74079037?auto=format&fit=crop&w=800&q=80",
    icon: QrCode,
    techStack: ["Jetpack Compose", "Google ML Kit", "Kotlin"],
    metrics: { type: "ML Kit", value: "Real-time" },
    features: ["QR Code Scanning", "Barcode Recognition", "Multiple Formats", "Real-time Processing"],
    links: {
      github: "https://github.com/Shriram2005/QR-Barcode-Scanner-App",
      demo: "#"
    }
  },
  {
    title: "Neutralise E-commerce",
    description: "Modern E-Commerce Platform developed with modern web technologies and responsive design",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    icon: ShoppingCart,
    techStack: ["Modern Web Tech", "Responsive Design"],
    metrics: { type: "E-commerce", value: "Full Stack" },
    features: ["Product Catalog", "User Management", "Shopping Cart", "Responsive Design"],
    links: {
      github: "https://github.com/Shriram2005/Neutralise-E-commerce",
      demo: "#"
    }
  }
];

const Projects = () => {
  return (
    <section className="bg-[#1E1E1E] py-20" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions spanning mobile apps, web applications, IoT devices, and AI-powered tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <article 
                key={index}
                className="bg-[#2D2D2D] rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-[#3DDC84] group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} project screenshot`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-[#3DDC84] bg-opacity-20 backdrop-blur-sm rounded-lg p-2">
                    <IconComponent className="w-6 h-6 text-[#3DDC84]" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#3DDC84] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-[#3DDC84] bg-opacity-10 text-[#3DDC84] px-3 py-1 rounded-full text-xs border border-[#3DDC84] border-opacity-30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <span className="text-[#3DDC84]">●</span>
                      <span>{project.metrics.type}: {project.metrics.value}</span>
                    </div>
                    <div className="space-y-1">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="w-1 h-1 bg-[#3DDC84] rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4 border-t border-gray-700">
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        className="text-[#3DDC84] hover:text-white transition-colors p-2 hover:bg-[#3DDC84] hover:bg-opacity-10 rounded-lg"
                        title="Live Demo"
                        aria-label={`View live demo of ${project.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.playStore && (
                      <a 
                        href={project.links.playStore} 
                        className="text-[#3DDC84] hover:text-white transition-colors p-2 hover:bg-[#3DDC84] hover:bg-opacity-10 rounded-lg"
                        title="Play Store"
                        aria-label={`Download ${project.title} from Play Store`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PlayCircle className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        className="text-[#3DDC84] hover:text-white transition-colors p-2 hover:bg-[#3DDC84] hover:bg-opacity-10 rounded-lg"
                        title="GitHub Repository"
                        aria-label={`View ${project.title} source code on GitHub`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Shriram2005" 
            className="inline-flex items-center gap-2 bg-[#3DDC84] text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all projects on GitHub"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;