import React from 'react';
import { Smartphone, Globe, Search, Palette, Users, Brush } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: "Custom Mobile App Development",
    description: "Native Android applications with modern UI/UX and robust backend integration",
    features: ["Jetpack Compose", "Material Design", "Firebase Integration", "Play Store Deployment"]
  },
  {
    icon: Globe,
    title: "Modern Web Solutions",
    description: "Responsive web applications built with cutting-edge technologies",
    features: ["React Development", "Progressive Web Apps", "API Integration", "Cloud Deployment"]
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your website's visibility and search engine rankings",
    features: ["Technical SEO", "Performance Optimization", "Schema Markup", "Analytics Setup"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance user experience",
    features: ["Wireframing", "Prototyping", "User Research", "Design Systems"]
  },
  {
    icon: Users,
    title: "Technical Consulting",
    description: "Strategic guidance for your technology decisions and architecture",
    features: ["Architecture Review", "Technology Stack", "Best Practices", "Code Review"]
  },
  {
    icon: Brush,
    title: "Digital Design Services",
    description: "Creative digital assets and branding solutions",
    features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"]
  }
];

const ServicesGrid = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={index}
              className="bg-[#1E1E1E] rounded-xl p-6 hover:bg-[#2D2D2D] transition-all duration-300 border border-gray-800 hover:border-[#3DDC84] group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#3DDC84] bg-opacity-20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:bg-opacity-30 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-[#3DDC84]" />
                </div>
                <h4 className="text-lg font-semibold text-white">{service.title}</h4>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#3DDC84] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesGrid;