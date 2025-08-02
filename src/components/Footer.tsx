import React from 'react';
import { Mail, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={`py-16 ${
        darkMode
          ? 'bg-gray-900 border-t border-gray-800'
          : 'bg-gray-50 border-t border-gray-200'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl ${
                  darkMode
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                }`}
              >
                ORC
              </div>
              <span
                className={`font-bold text-2xl ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Studio
              </span>
            </div>
            <p
              className={`text-lg mb-6 max-w-md ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Creating legendary gaming experiences that push the boundaries of
              imagination and innovation in the Roblox universe.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#" // Ganti dengan link Roblox kamu
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg transition-all duration-300 hover:scale-105 flex items-center"
              >
                <ExternalLink size={18} className="mr-2" />
                Play on Roblox
              </a>

              <a
                href="https://discord.gg/ZXcCAyMZ6x" // Ganti dengan link Discord kamu
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  darkMode
                    ? 'bg-blue-800 text-white hover:bg-blue-700'
                    : 'bg-blue-600 text-white hover:bg-blue-500'
                }`}
              >
                <ExternalLink size={18} className="mr-2" />
                Join Discord
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`font-bold text-lg mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Community', 'Support'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className={`transition-colors ${
                        darkMode
                          ? 'text-gray-400 hover:text-purple-400'
                          : 'text-gray-600 hover:text-purple-600'
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4
              className={`font-bold text-lg mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Community
            </h4>
            <ul className="space-y-2">
              {[
                {
                  name: 'Discord Server',
                  url: 'https://discord.gg/ZXcCAyMZ6x',
                },
                {
                  name: 'Komunitas Roblox',
                  url: '#',
                },
              ].map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${
                      darkMode
                        ? 'text-gray-400 hover:text-blue-400'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center ${
            darkMode ? 'border-gray-800' : 'border-gray-200'
          }`}
        >
          <div
            className={`text-sm mb-4 md:mb-0 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            © 2025 ORC Studio. All rights reserved. | ORACYN
          </div>

          <div
            className={`flex items-center text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Made with <Heart className="text-red-500 mx-1" size={16} /> By Xiel
          </div>
        </div>

        {/* Additional Info */}
        <div
          className={`mt-8 text-center text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}
        ></div>
      </div>
    </footer>
  );
}
