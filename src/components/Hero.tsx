import React from 'react';
import ScrollReveal from './ScrollReveal';
import ParticleBackground from './ParticleBackground';
import { Code2, Download, Eye, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-[#121212] flex items-center justify-center relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      {/* Particle Background */}
      <ParticleBackground className="absolute inset-0 z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 relative w-full">
        <div className="max-w-7xl mx-auto w-full">
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center justify-center space-y-8">
            {/* Profile Image - Top on Mobile */}
            <ScrollReveal direction="down" duration={800} delay={200}>
              <div className="flex justify-center relative z-20 w-full">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-[#3DDC84] shadow-2xl">
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
            </ScrollReveal>

            {/* Content - Bottom on Mobile */}
            <ScrollReveal direction="up" duration={800} delay={400}>
              <div className="text-center space-y-6 py-8 w-full">
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                    Shriram Mange
                    <span className="block text-[#3DDC84] text-xl sm:text-2xl mt-2">
                      Android Developer
                    </span>
                  </h1>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-gray-400 text-sm sm:text-base">
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
                
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                  Passionate Android developer with expertise in <strong className="text-[#3DDC84]">Kotlin</strong> and <strong className="text-[#3DDC84]">Jetpack Compose</strong>. 
                  Crafting beautiful, performant mobile experiences and full-stack web solutions. 
                  Currently working with leading tech companies to build innovative applications.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
                <div className="grid grid-cols-2 gap-8 sm:gap-12 pt-8 mt-8 border-t border-gray-700 max-w-md mx-auto">
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
            </ScrollReveal>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-12 items-center min-h-[calc(100vh-16rem)]">
            {/* Content - Left on Desktop */}
            <ScrollReveal direction="left" duration={800} delay={200}>
              <div className="text-left space-y-6 py-16 z-10">
                <div className="space-y-4">
                  <h1 className="text-6xl font-bold text-white leading-tight">
                    Shriram Mange
                    <span className="block text-[#3DDC84] text-4xl mt-2">
                      Android Developer
                    </span>
                  </h1>
                  
                  <div className="flex flex-row items-center gap-4 text-gray-400 text-base">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#3DDC84] flex-shrink-0" />
                      <span>Nashik, Maharashtra, India</span>
                    </div>
                    <div className="text-gray-600">•</div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#3DDC84] flex-shrink-0" />
                      <span>Available for Projects</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                  Passionate Android developer with expertise in <strong className="text-[#3DDC84]">Kotlin</strong> and <strong className="text-[#3DDC84]">Jetpack Compose</strong>. 
                  Crafting beautiful, performant mobile experiences and full-stack web solutions. 
                  Currently working with leading tech companies to build innovative applications.
                </p>
                
                <div className="flex flex-row gap-4 justify-start pt-4">
                  <button 
                    onClick={scrollToProjects}
                    className="btn-primary bg-[#3DDC84] text-black px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 text-base"
                    aria-label="View my projects"
                  >
                    <Eye className="w-5 h-5" />
                    View Projects
                  </button>
                  <button 
                    onClick={scrollToContact}
                    className="border border-[#3DDC84] text-[#3DDC84] px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#3DDC84] hover:bg-opacity-10 transition-colors text-base"
                    aria-label="Get in touch"
                  >
                    <Download className="w-5 h-5" />
                    Get In Touch
                  </button>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-12 pt-8 mt-8 border-t border-gray-700 max-w-md">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#3DDC84] mb-1">15+</div>
                    <div className="text-gray-400 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#3DDC84] mb-1">2+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Profile Image - Right on Desktop */}
            <ScrollReveal direction="right" duration={800} delay={400}>
              <div className="flex justify-end py-16 relative z-20">
                <div className="relative">
                  <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-[#3DDC84] shadow-2xl">
                    <img 
                      src="/profile-pic.png" 
                      alt="Shriram Mange - Android Developer"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#3DDC84] rounded-full p-4 shadow-lg">
                    <Code2 className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;