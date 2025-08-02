import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Mascot from './components/Mascot';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);

  // Smooth scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background music simulation
  useEffect(() => {
    if (musicPlaying) {
      console.log('🎵 Playing cyberpunk background music...');
    } else {
      console.log('🔇 Music paused');
    }
  }, [musicPlaying]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${darkMode ? '#1f2937' : '#f1f5f9'};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${darkMode ? '#6366f1' : '#8b5cf6'};
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${darkMode ? '#4f46e5' : '#7c3aed'};
        }
      `}</style>

      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        musicPlaying={musicPlaying}
        setMusicPlaying={setMusicPlaying}
      />
      
      <main>
        <div data-aos="fade-up">
          <Hero darkMode={darkMode} />
        </div>
        
        <div data-aos="fade-up">
          <About darkMode={darkMode} />
        </div>
        
        <div data-aos="fade-up">
          <Projects darkMode={darkMode} />
        </div>
        
        <div data-aos="fade-up">
          <Testimonials darkMode={darkMode} />
        </div>
      </main>
      
      <div data-aos="fade-up">
        <Footer darkMode={darkMode} />
      </div>
      
      <Mascot darkMode={darkMode} />
      
      {/* Music indicator */}
      {musicPlaying && (
        <div className="fixed bottom-8 left-8 z-40">
          <div className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
            darkMode ? 'bg-gray-800 text-white border border-purple-500/30' : 'bg-white text-gray-900 border border-purple-200'
          }`}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Cyberpunk Vibes Playing</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;