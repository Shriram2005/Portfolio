import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import { Award, Trophy, Users, Calendar, CheckCircle2, Star, ShieldCheck, ArrowUpRight } from 'lucide-react';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState<'certifications' | 'cocurricular' | 'extracurricular'>('certifications');

  const certifications = [
    {
      title: "Kotlin Complete App Development Masterclass",
      issuer: "Udemy",
      date: "Apr 2026",
      info: "67 hours Course",
      description: "Advanced Kotlin development, coroutines, architectural patterns (MVVM/MVI), and native app development practices."
    },
    {
      title: "GitHub Foundations Certification",
      issuer: "GitHub",
      date: "Jan 24, 2025",
      info: "Score: 82%",
      description: "Validated proficiency in Git version control, collaboration protocols, GitHub Actions, and repository security settings."
    },
    {
      title: "Mind Luster - Jetpack Compose Fundamentals",
      issuer: "Mind Luster",
      date: "Jul 2024",
      info: "Professional Certification",
      description: "Focused course on declarative UI concepts, custom modifiers, animations, state lifting, and Android navigation components."
    },
    {
      title: "NPTEL - Programming in Java",
      issuer: "NPTEL (IIT)",
      date: "Jan - Apr 2024",
      info: "12 Weeks | 71% (Elite)",
      description: "Academic qualification covering OOP, multi-threading, concurrency, networking, and core Java libraries."
    }
  ];

  const cocurricular = [
    {
      title: "1st Runner Up - LogicHunt Coding Competition",
      organizer: "KKWIEER",
      date: "Oct 2025",
      badge: "Runner Up",
      description: "Delivered optimized algorithms and outperformed dozens of participants by solving complex algorithmic and logical problems under strict constraints."
    },
    {
      title: "Winner - TechTrek 2k24 Coding Competition",
      organizer: "Sandip University",
      date: "Feb 2024",
      badge: "1st Position",
      description: "Secured first place by developing efficient and creative coding solutions, outperforming participants from various colleges."
    },
    {
      title: "Participant - Avishkar Project Presentation Competition",
      organizer: "KKWIEER",
      date: "Sept 2025",
      badge: "Finalist",
      description: "Effectively presented and defended innovative project ideas in front of a faculty jury and academic audience, demonstrating technical communication."
    },
    {
      title: "Hackathon Participations",
      organizer: "Global Tech Communities",
      date: "2023 - 2025",
      badge: "NASA, Sunhacks, VCET",
      description: "Collaborated in high-pressure team environments to ideate and build prototypes at NASA Space Apps 2025, Sunhacks 2024, and VCET 2023 Hackathon (Mumbai)."
    }
  ];

  const extracurricular = [
    {
      role: "Co-Head, Design Committee",
      event: "Ascend 2k26",
      organizer: "KKWIEER",
      date: "2026",
      description: "Managed the visual branding for the national level event. Created the main event banner and successfully developed and deployed the official event website."
    },
    {
      role: "Head, Design Committee",
      event: "TechTrek 2k24",
      organizer: "Sandip University",
      date: "2024",
      description: "Led the design operations. Designed premium promotional flyers, certificates, and built a custom automated distribution script for participants."
    },
    {
      role: "Open Source Contributor",
      event: "Hacktoberfest 2024",
      organizer: "GitHub Community",
      date: "Oct 2024",
      description: "Contributed code and documentation modifications to active open source GitHub repositories, participating in global collaborative software development."
    }
  ];

  return (
    <section className="bg-[#121212] py-20 relative overflow-hidden" id="achievements">
      {/* Background ambient glows */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute w-80 h-80 bg-[#3DDC84] rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-[#61DAFB] rounded-full blur-3xl bottom-10 right-10 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <ScrollReveal direction="up" duration={600} delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Achievements & Leadership</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Certifications, competitive accomplishments, and community leadership contributions
            </p>
          </div>
        </ScrollReveal>

        {/* Premium Tab Controls */}
        <ScrollReveal direction="up" duration={600} delay={200}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16 max-w-3xl mx-auto">
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 border ${
                activeTab === 'certifications'
                  ? 'bg-[#3DDC84] text-[#121212] border-[#3DDC84] shadow-[0_0_20px_rgba(61,220,132,0.25)] scale-105'
                  : 'bg-[#1E1E1E] text-gray-400 border-gray-800/80 hover:text-white hover:border-gray-700'
              }`}
            >
              <Award className="w-4.5 h-4.5" />
              Certifications
            </button>
            <button
              onClick={() => setActiveTab('cocurricular')}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 border ${
                activeTab === 'cocurricular'
                  ? 'bg-[#3DDC84] text-[#121212] border-[#3DDC84] shadow-[0_0_20px_rgba(61,220,132,0.25)] scale-105'
                  : 'bg-[#1E1E1E] text-gray-400 border-gray-800/80 hover:text-white hover:border-gray-700'
              }`}
            >
              <Trophy className="w-4.5 h-4.5" />
              Co-Curriculars
            </button>
            <button
              onClick={() => setActiveTab('extracurricular')}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 border ${
                activeTab === 'extracurricular'
                  ? 'bg-[#3DDC84] text-[#121212] border-[#3DDC84] shadow-[0_0_20px_rgba(61,220,132,0.25)] scale-105'
                  : 'bg-[#1E1E1E] text-gray-400 border-gray-800/80 hover:text-white hover:border-gray-700'
              }`}
            >
              <Users className="w-4.5 h-4.5" />
              Extra-Curriculars & Leadership
            </button>
          </div>
        </ScrollReveal>

        {/* Tab Content Display */}
        <div className="min-h-[350px]">
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <ScrollReveal 
                  key={index} 
                  direction="up" 
                  duration={600} 
                  delay={100 * index}
                >
                  <div className="bg-[#1E1E1E] border border-gray-800 hover:border-[#3DDC84] rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-[#3DDC84]/10 p-2 rounded-lg border border-[#3DDC84]/20 text-[#3DDC84] group-hover:bg-[#3DDC84]/20 transition-all duration-300">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-semibold text-white group-hover:text-[#3DDC84] transition-colors">
                          {cert.title}
                        </h4>
                      </div>
                      <p className="text-[#3DDC84] font-semibold text-sm mb-3 ml-10">
                        {cert.issuer} <span className="text-gray-500 font-normal">| {cert.info}</span>
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed ml-10">{cert.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 ml-10 md:ml-0 bg-[#121212] px-4 py-2.5 rounded-lg border border-gray-800">
                      <Calendar className="w-4 h-4 text-[#3DDC84]" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          {activeTab === 'cocurricular' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cocurricular.map((item, index) => (
                <ScrollReveal 
                  key={index} 
                  direction="up" 
                  duration={600} 
                  delay={100 * index}
                >
                  <div className="bg-[#1E1E1E] border border-gray-800 hover:border-[#3DDC84] rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-[#3DDC84]/10 p-2 rounded-lg border border-[#3DDC84]/20 text-[#3DDC84] group-hover:bg-[#3DDC84]/20 transition-all duration-300">
                          <Trophy className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-semibold text-white group-hover:text-[#3DDC84] transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-[#3DDC84] font-semibold text-sm mb-3 ml-10">
                        {item.organizer} <span className="text-gray-500 font-normal">| {item.badge}</span>
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed ml-10">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 ml-10 md:ml-0 bg-[#121212] px-4 py-2.5 rounded-lg border border-gray-800">
                      <Calendar className="w-4 h-4 text-[#3DDC84]" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          {activeTab === 'extracurricular' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {extracurricular.map((item, index) => (
                <ScrollReveal 
                  key={index} 
                  direction="up" 
                  duration={600} 
                  delay={100 * index}
                >
                  <div className="bg-[#1E1E1E] border border-gray-800 hover:border-[#3DDC84] rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-[#3DDC84]/10 p-2 rounded-lg border border-[#3DDC84]/20 text-[#3DDC84] group-hover:bg-[#3DDC84]/20 transition-all duration-300">
                          <Users className="w-5 h-5" />
                        </div>
                        <h4 className="text-xl font-semibold text-white group-hover:text-[#3DDC84] transition-colors">
                          {item.role}
                        </h4>
                      </div>
                      <p className="text-[#3DDC84] font-semibold text-sm mb-3 ml-10">
                        {item.event} <span className="text-gray-500 font-normal">| {item.organizer}</span>
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed ml-10">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 ml-10 md:ml-0 bg-[#121212] px-4 py-2.5 rounded-lg border border-gray-800">
                      <Calendar className="w-4 h-4 text-[#3DDC84]" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
