import React from 'react';
import { Code2, Download, Eye, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-[#121212] flex items-center justify-center relative overflow-hidden pt-16 pb-8">
      {/* Animated background pattern - contained within viewport */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-[#3DDC84] rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-[#3DDC84] rounded-full blur-3xl bottom-10 right-10 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
            
            {/* Content - Mobile First */}
            <div className="order-1 text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Shriram Mange
                  <span className="block text-[#3DDC84] text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2">
                    Android Developer
                  </span>
                </h1>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 text-gray-400 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#3DDC84] flex-shrink-0" />
                    <span>Nashik, Maharashtra, India</span>
                  </div>
                  <div className="hidden sm:block text-gray-600">•</div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#3DDC84] flex-shrink-0" />
                    <span>Available for Projects</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Passionate Android developer with expertise in <strong className="text-[#3DDC84]">Kotlin</strong> and <strong className="text-[#3DDC84]">Jetpack Compose</strong>. 
                Crafting beautiful, performant mobile experiences and full-stack web solutions. 
                Currently working with leading tech companies to build innovative applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button 
                  onClick={scrollToProjects}
                  className="btn-primary bg-[#3DDC84] text-black px-6 sm:px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
                  aria-label="View my projects"
                >
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Projects
                </button>
                <button 
                  onClick={scrollToContact}
                  className="border border-[#3DDC84] text-[#3DDC84] px-6 sm:px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#3DDC84] hover:bg-opacity-10 transition-colors text-sm sm:text-base"
                  aria-label="Get in touch"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Get In Touch
                </button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-8 sm:gap-12 pt-8 mt-8 border-t border-gray-700 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#3DDC84] mb-1">15+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#3DDC84] mb-1">2+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#3DDC84] shadow-2xl">
                  <img 
                    src="/profile-pic.png" 
                    alt="Shriram Mange - Android Developer"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-[#3DDC84] rounded-full p-3 sm:p-4 shadow-lg">
                  <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;