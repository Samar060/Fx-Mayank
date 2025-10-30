// src/components/HeroSection.js
import React from 'react';
import { Award, Users } from 'lucide-react';
import mayankimag from '../assets/mayanj_pic.jpg'

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 bg-gray-900 text-white min-h-screen flex items-center p-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* === LEFT CONTENT (Text & Info) === */}
        <div className="space-y-6">
          <p className="text-xl text-yellow-500 animate-in fade-in duration-700 delay-300">
            India's Leading Forex Mentor
          </p>
          
          {/* Headline Animation: Slide-up on initial load */}
          <h1 
            className="text-5xl md:text-6xl font-extrabold text-white 
                       animate-in slide-in-from-bottom-8 duration-700 ease-out delay-500"
          >
            Hello, I'm <span className="text-cyan-400">Mayank Gupta</span>.
          </h1>
          
          <p 
            className="text-2xl text-gray-300 max-w-lg 
                       animate-in slide-in-from-bottom-4 duration-700 ease-out delay-700"
          >
            6+ years of expertise in Forex Trading, empowering the next generation of successful traders.
          </p>
          
          {/* Key Metrics */}
          <div className="flex space-x-8 pt-4 animate-in fade-in duration-700 delay-1000">
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-yellow-500" />
              <span className="text-2xl font-bold">6+ Years</span>
              <span className="text-gray-400">Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-yellow-500" />
              <span className="text-2xl font-bold">300+</span>
              <span className="text-gray-400">Students Mentored</span>
            </div>
          </div>
          
          <a href="https://t.me/+_cwICfdPWxg2YmQ1" target="_blank" rel="noopener noreferrer">
            <button 
              className="mt-8 px-10 py-4 text-lg font-bold rounded-lg 
                         bg-yellow-500 text-gray-900 transition duration-300 ease-in-out 
                         hover:bg-yellow-400 hover:scale-[1.03] hover:shadow-lg hover:shadow-yellow-500/50"
            >
              Join Telegram: Grow Capitalist
            </button>
          </a>
        </div>

        {/* === RIGHT CONTENT (Image) === */}
        <div className="relative h-96 w-full hidden md:block">
          {/* Placeholder for Mayank Gupta's Photo */}
          <div 
            className="absolute inset-0 bg-cover bg-center rounded-xl shadow-2xl shadow-cyan-500/30 
                       animate-in fade-in duration-1000 delay-200"
            style={{ 
              backgroundImage: `url(${mayankimag})`,
            }}
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;