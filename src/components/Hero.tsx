import React from 'react';
import { Code2, Download, Eye } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#121212] flex items-center justify-center relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-[#3DDC84] rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#3DDC84] rounded-full blur-3xl -bottom-20 -right-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <Code2 className="w-16 h-16 text-[#3DDC84] mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Shriram Mange
            <span className="block text-[#3DDC84] text-2xl md:text-3xl mt-2">Android Developer</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Passionate Android developer crafting beautiful, performant mobile experiences with Kotlin and Jetpack Compose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#3DDC84] text-black px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors">
              <Eye className="w-5 h-5" />
              View Projects
            </button>
            <button className="border border-[#3DDC84] text-[#3DDC84] px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#3DDC84] hover:bg-opacity-10 transition-colors">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;