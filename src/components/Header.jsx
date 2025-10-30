// src/components/Header.js
import React from 'react';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Achievements", href: "#achievements" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-500">
          Grow Capitalist
        </div>
        <div className="space-x-8 hidden md:flex">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-cyan-400 transition duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
        <a 
          href="#services" 
          className="px-4 py-2 bg-cyan-500 text-gray-900 font-bold rounded-lg 
                     hover:bg-cyan-400 transition duration-300 hidden sm:block"
        >
          Register Now
        </a>
      </nav>
    </header>
  );
};

export default Header;