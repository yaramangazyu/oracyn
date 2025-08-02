import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Music, Music as MusicOff } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  musicPlaying: boolean;
  setMusicPlaying: (playing: boolean) => void;
}

export default function Header({ 
  darkMode, 
  setDarkMode, 
  musicPlaying, 
  setMusicPlaying
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? darkMode 
          ? 'bg-gray-900/90 backdrop-blur-md border-b border-purple-500/20' 
          : 'bg-white/90 backdrop-blur-md border-b border-blue-200/20'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl ${
            darkMode ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
          }`}>
            ORC
          </div>
          <span className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Studio
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className={`hover:text-purple-400 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Home
          </a>
          <a href="#about" className={`hover:text-purple-400 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            About
          </a>
          <a href="#projects" className={`hover:text-purple-400 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Projects
          </a>
          <a href="#community" className={`hover:text-purple-400 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Community
          </a>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMusicPlaying(!musicPlaying)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            {musicPlaying ? <Music size={20} /> : <MusicOff size={20} />}
          </button>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md border-t border-purple-500/20`}>
          <div className="px-4 py-6 space-y-4">
            <a href="#home" className={`block hover:text-purple-400 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Home
            </a>
            <a href="#about" className={`block hover:text-purple-400 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              About
            </a>
            <a href="#projects" className={`block hover:text-purple-400 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Projects
            </a>
            <a href="#community" className={`block hover:text-purple-400 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Community
            </a>
          </div>
        </div>
      )}
    </header>
  );
}