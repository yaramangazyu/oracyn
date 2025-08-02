import React, { useState } from 'react';
import { ExternalLink, Eye, Users, Trophy, Gamepad2 } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const projects = [
  {
    id: 1,
    name: 'ORC Paradise',
    link: 'https://www.roblox.com/games/123456/ORC-Nightclub',
    category: 'Hiburan',
    description:
      'Club futuristik dengan lampu neon kece, area VIP keren, dan musik dari DJ pilihan. Yang bikin beda? Dance floor-nya bisa gerak bareng beat musik',
    features: [
      'Sistem VIP',
      'Pencahayaan Dinamis',
      'Acara DJ Langsung',
      'Battle Dance',
    ],
    players: '5.2K',
    rating: '4.9',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
    icon: Gamepad2,
    color: 'purple',
    locked: true,
  },
  {
    id: 2,
    name: 'Cyber Obby Challenge',
    link: 'https://www.roblox.com/games/123457/Cyber-Obby-Challenge',
    category: 'Petualangan',
    description:
      'Uji kemampuan parkour kamu di obby yang bikin mikir ini! Ada 50+ level unik, leaderboard global, dan hadiah keren menanti!',
    features: [
      '50+ Level',
      'Leaderboard Global',
      'Mode Lari Cepat',
      'Checkpoint Kustom',
    ],
    players: '8.7K',
    rating: '4.8',
    image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    icon: Trophy,
    color: 'blue',
    locked: true,
  },
  {
    id: 3,
    name: 'Cosmic Hangout Lounge',
    link: 'https://www.roblox.com/games/123458/Cosmic-Hangout-Lounge',
    category: 'Sosial',
    description:
      'Nongkrong bareng temen di lounge bertema luar angkasa yang punya mini game, zona chat, dan aktivitas interaktif seru!',
    features: [
      'Mini Game',
      'Sistem Chat',
      'Kostumisasi Avatar',
      'Pemutar Musik',
    ],
    players: '3.4K',
    rating: '4.7',
    image: 'https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg',
    icon: Users,
    color: 'green',
    locked: true,
  },
  {
    id: 4,
    name: 'Community Nexus',
    link: 'https://www.roblox.com/games/123459/Community-Nexus',
    category: 'Kolaboratif',
    description:
      'Dunia yang terus berkembang bersama komunitas! Kirim ide kamu, voting fitur, dan lihat map berubah tiap update.',
    features: [
      'Voting Komunitas',
      'Update Berkala',
      'Karya Pengguna',
      'Pusat Event',
    ],
    players: '12.1K',
    rating: '4.9',
    image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg',
    icon: Eye,
    color: 'orange',
    locked: true,
  },
];

export default function Projects({ darkMode }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const joinLocked = true; // Ganti ke false kalau tombol join ingin aktif

  const getColorClasses = (color: string) => {
    const colors = {
      purple: darkMode
        ? 'from-purple-600 to-purple-800'
        : 'from-purple-400 to-purple-600',
      blue: darkMode
        ? 'from-blue-600 to-blue-800'
        : 'from-blue-400 to-blue-600',
      green: darkMode
        ? 'from-green-600 to-green-800'
        : 'from-green-400 to-green-600',
      orange: darkMode
        ? 'from-orange-600 to-orange-800'
        : 'from-orange-400 to-orange-600',
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Proyek{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Terbaik
            </span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Semua yang kami buat punya satu tujuan: bikin kamu enjoy. Mulai dari
            map buat party sampai obby yang bikin geregetan, semuanya dibuat
            dengan detail dan cinta buat dunia Roblox.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                  darkMode
                    ? 'bg-gray-800 border border-gray-700 hover:border-purple-500/50'
                    : 'bg-white border border-gray-200 hover:border-purple-300'
                } ${
                  selectedProject === project.id
                    ? 'ring-4 ring-purple-400/50'
                    : ''
                }`}
                onClick={() => {
                  if (!project.locked) {
                    setSelectedProject(
                      selectedProject === project.id ? null : project.id
                    );
                  }
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${getColorClasses(
                      project.color
                    )} opacity-60`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="flex items-center bg-black/50 text-white px-2 py-1 rounded-full text-sm backdrop-blur-sm">
                      <Users size={14} className="mr-1" />
                      {project.players}
                    </div>
                    <div className="flex items-center bg-black/50 text-white px-2 py-1 rounded-full text-sm backdrop-blur-sm">
                      ⭐ {project.rating}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="text-white" size={24} />
                    </div>
                  </div>

                  {project.locked && (
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-10 text-white font-semibold text-sm">
                      🔒 Coming Soon
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {project.name}
                  </h3>
                  <p
                    className={`text-base mb-4 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-sm rounded-full ${
                          darkMode
                            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                            : 'bg-purple-100 text-purple-700 border border-purple-200'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (project.locked) e.preventDefault();
                        e.stopPropagation();
                      }}
                      className={`flex-1 py-3 px-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 ${
                        project.locked
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : `bg-gradient-to-r ${getColorClasses(
                              project.color
                            )} text-white hover:shadow-lg`
                      }`}
                    >
                      <ExternalLink size={18} className="mr-2" />
                      {project.locked ? 'Segera Hadir' : 'Mainkan Sekarang'}
                    </a>
                    <button
                      className={`px-4 py-3 border-2 rounded-lg font-semibold transition-all duration-300 ${
                        darkMode
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                      disabled={project.locked}
                    >
                      <Eye size={18} />
                    </button>
                  </div>
                </div>

                {selectedProject === project.id && !project.locked && (
                  <div className="absolute inset-0 border-4 border-purple-400 rounded-2xl pointer-events-none animate-pulse" />
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p
            className={`text-lg mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Siap buat ngerasain masa depan dunia gaming?
          </p>
          {joinLocked ? (
            <div className="inline-block px-8 py-4 bg-gray-300 text-gray-500 rounded-full font-semibold text-lg cursor-not-allowed">
              🔒 Gabung Segera Hadir
            </div>
          ) : (
            <a
              href="https://www.roblox.com/groups/1234567/ORC-Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              Gabung ke ORC Studio Sekarang
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
