import React, { useState, useEffect } from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            darkMode
              ? 'bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900'
              : 'bg-gradient-to-br from-blue-100 via-purple-100 to-gray-50'
          }`}
        />

        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-32 rounded-full blur-xl opacity-20 animate-pulse ${
              darkMode
                ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                : 'bg-gradient-to-r from-blue-400 to-purple-400'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `translate(${mousePosition.x * 0.01}px, ${
                mousePosition.y * 0.01
              }px)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <h1
          className={`text-6xl md:text-8xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Welcome to{' '}
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent animate-pulse">
            ORC Studio
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl md:text-2xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Where{' '}
          <span className="text-purple-400 font-semibold">Imagination</span>{' '}
          Meets <span className="text-blue-400 font-semibold">Innovation</span>{' '}
          in Roblox
        </p>

        {/* 🎉 CHIBI MASKOT */}
        <div className="mb-4 flex justify-center">
          <img
            src="https://s14.gifyu.com/images/bNSz3.gif" // ganti path dengan file kamu
            alt="Chibi ORC Mascot"
            className="w-24 h-24 md:w-32 md:h-32 drop-shadow-xl transition-all duration-500 ease-out"
          />
        </div>

        {/* Description */}
        <p
          className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          Hai, selamat datang di ORC Studio ini tempatnya semua hal seru di
          Roblox. Pengen party di club? Bisa. Mau obby yang bikin kesel? Ada.
          Atau cuma pengen chill bareng temen? Masuk aja, tempatnya udah siap.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3"
          >
            <Play
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
            Join Us on Roblox
          </a>

          <button
            onClick={handleScrollToProjects}
            className={`group px-8 py-4 border-2 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 ${
              darkMode
                ? 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900'
                : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
            }`}
          >
            <ExternalLink
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
            Explore Projects
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            darkMode ? 'border-gray-400' : 'border-gray-600'
          }`}
        >
          <div
            className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
              darkMode ? 'bg-gray-400' : 'bg-gray-600'
            }`}
          />
        </div>
      </div>
    </section>
  );
}
