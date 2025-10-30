// src/components/ServicesSection.js
import React from 'react';
import { useInView } from '../hooks/useInView';
import { Repeat2, Settings, Lock, User, BookOpen } from 'lucide-react';

const servicesData = [
  { icon: Repeat2, title: "Copy Trading", redirectLink: "https://forms.gle/apK4N89Jht5Nkd1i7", color: "text-cyan-400" },
  { icon: Settings, title: "Account Management", redirectLink: "https://forms.gle/apK4N89Jht5Nkd1i7", color: "text-yellow-500" },
  { icon: Lock, title: "Prop Firm Account Pass", redirectLink: "https://forms.gle/KEUf3uMSEP8qtsUu8", color: "text-red-500" },
  { icon: User, title: "1-to-1 Mentorship", redirectLink: "https://forms.gle/VAsxVkqmURfRtE5d7", color: "text-green-500" },
  { icon: BookOpen, title: "Forex Classes", redirectLink: "https://forms.gle/VAsxVkqmURfRtE5d7", color: "text-purple-500" },
];

const ServiceCard = ({ icon: Icon, title, redirectLink, delay, color }) => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const animateClasses = isInView 
    ? `opacity-100 translate-y-0`
    : `opacity-0 translate-y-12`; 

  return (
    <div 
      ref={ref}
      className={`p-6 bg-gray-800 rounded-lg border border-gray-700 
                  transition duration-700 ease-out transform ${animateClasses} ${delay}
                  hover:bg-gray-700 hover:shadow-2xl hover:border-cyan-500 group text-center`}
    >
      <Icon className={`w-10 h-10 ${color} mx-auto mb-4 transition-transform group-hover:scale-110`} />
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      
      <a href={redirectLink} target="_blank" rel="noopener noreferrer">
        <button 
          className="w-full py-3 mt-4 text-lg font-bold rounded-lg 
                     bg-cyan-500 text-gray-900 transition duration-300 hover:bg-cyan-400 hover:scale-[1.02]"
        >
          Register Now
        </button>
      </a>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Our Exclusive Services</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {servicesData.map((service, index) => (
            // Staggering the animation delay for a cascading effect
            <ServiceCard 
              key={index} 
              {...service} 
              delay={`delay-${index * 100}`} // e.g., delay-0, delay-100, delay-200...
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;