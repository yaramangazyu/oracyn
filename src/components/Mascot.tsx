import React, { useState } from 'react';

interface MascotProps {
  darkMode: boolean;
}

export default function Mascot({ darkMode }: MascotProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {/* Speech Bubble */}
      {showMessage && (
        <div
          className={`absolute bottom-20 right-0 p-4 rounded-2xl shadow-lg max-w-xs transform transition-all duration-300 ${
            darkMode
              ? 'bg-gray-800 text-white border border-purple-500/30'
              : 'bg-white text-gray-900 border border-purple-200'
          }`}
        >
          <div className="text-sm font-medium">
            🎮 Welcome to the Club! Ready to explore epic worlds and join our
            legendary community?
          </div>
          <div
            className={`absolute bottom-0 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent ${
              darkMode ? 'border-t-gray-800' : 'border-t-white'
            } transform translate-y-full`}
          />
        </div>
      )}

      {/* Mascot */}
      <div
        className={`relative w-20 h-20 cursor-pointer transition-all duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Glow Effect */}
        <div
          className={`absolute inset-0 rounded-full blur-xl opacity-30 animate-pulse ${
            darkMode ? 'bg-purple-500' : 'bg-blue-500'
          }`}
        />

        {/* Mascot Body */}
        <div
          className={`relative w-full h-full rounded-full flex items-center justify-center text-3xl font-bold transition-all duration-300 ${
            darkMode
              ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl shadow-purple-500/30'
              : 'bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-2xl shadow-blue-500/30'
          } ${isHovered ? 'rotate-12' : 'rotate-0'}`}
        >
          🧌
          {/* Eyes Animation */}
          <div
            className="absolute top-4 left-3 w-2 h-2 bg-white rounded-full animate-ping"
            style={{ animationDelay: '0s' }}
          />
          <div
            className="absolute top-4 right-3 w-2 h-2 bg-white rounded-full animate-ping"
            style={{ animationDelay: '0.5s' }}
          />
        </div>

        {/* Floating Particles */}
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 rounded-full animate-ping ${
                  darkMode ? 'bg-purple-400' : 'bg-blue-400'
                }`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </>
        )}

        {/* Pulsing Ring */}
        <div
          className={`absolute inset-0 rounded-full border-2 animate-pulse ${
            darkMode ? 'border-purple-400/50' : 'border-blue-400/50'
          }`}
          style={{ animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' }}
        />
      </div>

      {/* Floating Text */}
      <div
        className={`absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } ${darkMode ? 'text-purple-300' : 'text-blue-600'}`}
      >
        Click me!
      </div>
    </div>
  );
}
