import React from 'react';
import ScrollingRow, { TechItem } from './ScrollingRow';

const TechnicalStack: React.FC = () => {
  // Define rows of technologies with icon + label
  const row1: TechItem[] = [
    { name: 'Nodejs', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
    { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
    { name: 'Supabase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg' },
    { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  ];

  const row2: TechItem[] = [
    { name: 'Tailwind', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Firebase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-original.svg' },
    { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
    { name: 'PHP', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
    { name: 'VS Code', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg' },
    { name: 'Figma', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg' },
    { name: 'Canva', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg' },
  ];

  const row3: TechItem[] = [
    { name: 'Android', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg' },
    { name: 'Kotlin', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg' },
    { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Jetpack', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg' },
    { name: 'Room DB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg' },
    { name: 'Material', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  ];

  return (
    <div className="relative">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-white mb-3">Technical Expertise</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A curated set of tools and technologies I use day-to-day across mobile and web.
        </p>
      </div>

      <div className="space-y-6">
        <ScrollingRow items={row3} direction="left" speedSec={50} />
        <ScrollingRow items={row2} direction="right" speedSec={45} />
        <ScrollingRow items={row1} direction="left" speedSec={40} />
      </div>
    </div>
  );
};

export default TechnicalStack;