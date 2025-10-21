import React from 'react';
import ScrollReveal from '../ScrollReveal';
import EducationCard from './EducationCard';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: "Master of Computer Applications",
    degreeShort: "MCA",
    institution: "K.K. Wagh Institute of Engineering",
    location: "Nashik, Maharashtra",
    year: "2025-2027",
    status: "Pursuing",
    score: "Ongoing",
    scoreType: "Status",
    level: "postgraduate",
    showScore: false,
    description: "Advanced computer science program focusing on emerging technologies, research, and advanced software development methodologies.",
    courses: [
      "Advanced Algorithms",
      "Advanced Database Systems",
      "Web Services & Cloud Computing",
      "Machine Learning",
      "Software Architecture",
      "Data Science"
    ],
    achievements: [
      "Pursuing Advanced Studies in Computer Science",
      "Focus on Industry-Ready Technologies",
      "Research-Oriented Coursework"
    ],
    skills: ["Research", "Advanced Problem Solving", "Technical Leadership"],
    logo: "/logos/KKW.png"
  },
  {
    id: 3,
    degree: "Bachelor of Computer Applications",
    degreeShort: "BCA",
    institution: "Sandip University",
    location: "Nashik, Maharashtra",
    year: "2022-2025",
    status: "Completed",
    score: "8.5 GPA",
    scoreType: "CGPA",
    level: "undergraduate",
    showScore: true,
    description: "Comprehensive computer science program focusing on modern software development practices and emerging technologies.",
    courses: [
      "Data Structures & Algorithms",
      "Android Development",
      "Web Technologies",
      "Database Management Systems",
      "Software Engineering",
      "Object-Oriented Programming"
    ],
    achievements: [
      "Dean's List - Consistent Academic Excellence",
      "Best Project Award - Android Development",
      "Active Member - Tech Innovation Club"
    ],
    skills: ["Problem Solving", "Team Leadership", "Project Management"],
    logo: "/logos/sandip_university.png"
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate",
    degreeShort: "HSC",
    institution: "KTHM College",
    location: "Nashik, Maharashtra",
    year: "2020-2022",
    status: "Completed",
    score: "53.00%",
    scoreType: "Percentage",
    level: "secondary",
    showScore: false,
    description: "Science stream with focus on Mathematics and Computer Science fundamentals.",
    courses: [
      "Computer Science",
      "Mathematics",
      "Physics",
      "Chemistry",
      "English"
    ],
    achievements: [
      "Computer Science Topper",
      "Mathematics Excellence Award",
      "Perfect Attendance"
    ],
    skills: ["Analytical Thinking", "Mathematical Reasoning", "Scientific Method"],
    logo: "/logos/KTHM.jpeg"
  },
  {
    id: 4,
    degree: "Secondary School Certificate",
    degreeShort: "SSC",
    institution: "K. K. Wagh English School",
    location: "Nashik, Maharashtra",
    year: "2010-2020",
    status: "Completed",
    score: "Distinction",
    scoreType: "Grade",
    level: "primary",
    showScore: false,
    description: "Foundation education with emphasis on holistic development and academic excellence.",
    courses: [
      "English Language",
      "Mathematics",
      "Science",
      "Social Studies",
      "Hindi"
    ],
    achievements: [
      "School Topper - Mathematics",
      "Best Student Award",
      "Sports Excellence - Cricket"
    ],
    skills: ["Communication", "Critical Thinking", "Leadership"],
    logo: "/logos/KKW.png"
  }
];

const Education = () => {
  return (
    <section className="bg-[#1A1A1A] py-12 sm:py-16 lg:py-20 relative overflow-hidden" id="education">
      {/* Animated background pattern - mobile optimized */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-[#3DDC84] rounded-full blur-3xl top-5 left-5 sm:top-10 sm:left-10 animate-pulse"></div>
        <div className="absolute w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-[#61DAFB] rounded-full blur-3xl top-10 right-10 sm:top-20 sm:right-20 animate-pulse delay-800"></div>
        <div className="absolute w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-[#3DDC84] rounded-full blur-3xl bottom-10 left-1/4 animate-pulse delay-1600"></div>
        <div className="absolute w-44 h-44 sm:w-60 sm:h-60 lg:w-76 lg:h-76 bg-[#61DAFB] rounded-full blur-3xl bottom-5 right-1/4 animate-pulse delay-2400"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - Mobile Optimized */}
        <ScrollReveal direction="up" duration={600} delay={100}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#3DDC84] to-[#2ECC71] rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg shadow-[#3DDC84]/20">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
              Education & Qualifications
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4">
              Academic journey spanning computer science, mathematics, and technology with a focus on 
              practical application and continuous learning
            </p>
            
            {/* Education Statistics - Mobile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mt-6 sm:mt-8 px-4">
              <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700/50">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DDC84] mr-2" />
                  <span className="text-lg sm:text-xl font-bold text-white">15+</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Years of Education</p>
              </div>
              <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700/50">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#61DAFB] mr-2" />
                  <span className="text-lg sm:text-xl font-bold text-white">8.5</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Current CGPA</p>
              </div>
              <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700/50 sm:col-span-1 col-span-1">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFCA28] mr-2" />
                  <span className="text-lg sm:text-xl font-bold text-white">4</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">Institutions</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Education Timeline - Mobile Optimized */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            {educationData.map((item, index) => (
              <ScrollReveal 
                key={item.id}
                direction="up" 
                duration={600} 
                delay={200 + (index * 150)}
                threshold={0.1}
              >
                <EducationCard 
                  {...item} 
                  index={index}
                  isLast={index === educationData.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Call to Action - Mobile Optimized */}
        <ScrollReveal direction="up" duration={600} delay={500}>
          <div className="text-center mt-12 sm:mt-16 px-4">
            <div className="bg-gradient-to-r from-[#1E1E1E] to-[#2D2D2D] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50 max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Continuous Learning</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Always exploring new technologies and expanding knowledge through online courses, 
                certifications, and hands-on projects.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <span className="bg-[#3DDC84]/10 text-[#3DDC84] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border border-[#3DDC84]/20">
                  Self-Directed Learning
                </span>
                <span className="bg-[#61DAFB]/10 text-[#61DAFB] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border border-[#61DAFB]/20">
                  Industry Certifications
                </span>
                <span className="bg-[#FFCA28]/10 text-[#FFCA28] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border border-[#FFCA28]/20">
                  Practical Projects
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Education;