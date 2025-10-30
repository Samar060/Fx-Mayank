// src/components/AchievementsSection.js
import React from 'react';
import { useInView } from '../hooks/useInView';
import { Trophy, Star } from 'lucide-react';


const AchievementCard = ({ title, description, image, delay }) => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  
  const animateClasses = isInView 
    ? `opacity-100 translate-y-0`
    : `opacity-0 translate-y-12`; 

  return (
    <div 
      ref={ref}
      className={`p-6 bg-gray-800 rounded-lg border border-gray-700 transition duration-700 ease-out transform ${animateClasses} ${delay}
                  hover:bg-gray-700 hover:shadow-2xl hover:border-yellow-500`}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover rounded-md mb-4 border-2 border-gray-600"
      />
      <h3 className="text-2xl font-bold mb-2 text-yellow-500 flex items-center">
        <Trophy className="w-5 h-5 mr-2"/>
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const AchievementsSection = () => {
  const achievements = [
    { 
      title: "IGA Award from kangana Ranaut", 
      description: "Recognized for excellence in mentorship and contribution to the trading community.", 
      image: '/kangana_x_mayank .jpg', 
      delay: "delay-100" 
    },
    { 
      title: "Strong Core Team ", 
      description: "The driving force behind Grow Capitalist — our dedicated team of investors, analysts, and mentors working together to build the next generation of successful traders.", 
      image: '/strong_core_team.jpg', 
      delay: "delay-300" 
    },
     { 
      title: "Invited to Dubai Forex Expo 2023 ", 
      description: "Represented Grow Capitalist on an international stage, sharing insights and strategies with leading global brokers and traders.", 
      image: '/forex_expo.png', 
      delay: "delay-300" 
    }
    // Add more achievements here if available
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4 flex justify-center items-center">
            <Star className="w-7 h-7 text-yellow-500 mr-3"/>
            Our Major Achievements
        </h2>
        <p className="text-gray-400 mb-12">Building credibility through recognized excellence.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach, index) => (
            <AchievementCard key={index} {...ach} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;