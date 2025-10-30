// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AchievementsSection from './components/AchievementsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
// Note: You must configure Tailwind to enable custom animations (animate-in, delays)

const App = () => {
  return (
    <div className="app-container font-sans bg-gray-900">
      <Header />
      <main>
        <HeroSection />
        <AchievementsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      
      {/* Risk Disclosure Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 p-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Mayank Gupta Trading. | Trading Forex is risky. Please consult a financial advisor.
      </footer>
    </div>
  );
};

export default App;