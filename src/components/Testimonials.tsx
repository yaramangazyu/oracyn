import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsProps {
  darkMode: boolean;
}

const testimonials = [
  {
    id: 1,
    name: 'OracynRere',
    avatar: '💃',
    rating: 5,
    text: 'Pertama kali masuk Neon Nightclub langsung jatuh cinta! Lampunya, musiknya, dan crowd-nya semua perfect! 🔥',
    project: 'Neon Nightclub',
  },
  {
    id: 2,
    name: 'OracynZayn',
    avatar: '🧠',
    rating: 5,
    text: 'Cyber Obby Challenge ngajarin aku sabar HAHA! Tapi bikin ketagihan. Puzzle dan desainnya top tier! 🚀',
    project: 'Cyber Obby Challenge',
  },
  {
    id: 3,
    name: 'OracynLala',
    avatar: '🌈',
    rating: 5,
    text: 'Cosmic Lounge tuh healing banget. Suka ngobrol santai sambil main mini games, tempatnya aesthetic parah! 💫',
    project: 'Cosmic Hangout Lounge',
  },
  {
    id: 4,
    name: 'OracynDev',
    avatar: '🛠️',
    rating: 5,
    text: 'Community Nexus bener-bener bikin user merasa dihargai. Ide-ideku dimasukin ke update, keren banget tim ORC! 💬',
    project: 'Community Nexus',
  },
  {
    id: 5,
    name: 'OracynNite',
    avatar: '🎧',
    rating: 5,
    text: 'Baru sekali join event di ORC, langsung pengen balik terus. Malam minggu paling seru ya di Neon Nightclub! 🌃',
    project: 'Neon Nightclub',
  },
  {
    id: 6,
    name: 'OracynKai',
    avatar: '🌀',
    rating: 5,
    text: 'Level 39 di Cyber Obby bikin aku pengen banting keyboard... tapi malah ketagihan wkwkwk. Gokil sih desainnya! 🤯',
    project: 'Cyber Obby Challenge',
  },
  {
    id: 7,
    name: 'OracynVivi',
    avatar: '🦄',
    rating: 5,
    text: 'Cosmic Hangout tuh tempat paling cozy di Roblox. Gak nyangka bisa nemu sahabat beneran dari game ini! 💕',
    project: 'Cosmic Hangout Lounge',
  },
  {
    id: 8,
    name: 'OracynMax',
    avatar: '💡',
    rating: 5,
    text: 'Vote fitur di Community Nexus tuh bikin aku ngerasa jadi bagian dari dev tim. Interaktif banget! 🙌',
    project: 'Community Nexus',
  },
  {
    id: 9,
    name: 'OracynSasa',
    avatar: '👑',
    rating: 5,
    text: 'Neon Nightclub selalu rame, serasa pesta tiap hari. Outfit dan animasi dance-nya keren-keren! 💃🕺',
    project: 'Neon Nightclub',
  },
  {
    id: 10,
    name: 'OracynJay',
    avatar: '🔥',
    rating: 5,
    text: 'Cyber Obby bukan sekadar game, itu ujian hidup 😭 Tapi puas banget tiap berhasil tamatin stage sulit!',
    project: 'Cyber Obby Challenge',
  },
  {
    id: 11,
    name: 'OracynMika',
    avatar: '🦋',
    rating: 5,
    text: 'Main Cosmic Lounge pas lagi suntuk tuh kayak recharge energi sosial. Vibes chill dan fun bgt! 🌟',
    project: 'Cosmic Hangout Lounge',
  },
  {
    id: 12,
    name: 'OracynTheo',
    avatar: '📢',
    rating: 5,
    text: 'Gak nyangka voting-ku beneran dipakai buat update fitur baru. Ini yang bikin Community Nexus beda! 🔧',
    project: 'Community Nexus',
  },
  {
    id: 13,
    name: 'OracynNara',
    avatar: '🎉',
    rating: 5,
    text: 'Kalo weekend gak mampir ke Neon Nightclub tuh kayak ada yang kurang. Musik & crowd-nya juara! 🕺',
    project: 'Neon Nightclub',
  },
  {
    id: 14,
    name: 'OracynLeo',
    avatar: '🧗',
    rating: 5,
    text: 'Cyber Obby beneran bikin tangan berkeringat. Tapi desain stage-nya bikin terus penasaran! 🧩',
    project: 'Cyber Obby Challenge',
  },
  {
    id: 15,
    name: 'OracynGwen',
    avatar: '🎀',
    rating: 5,
    text: 'Di Cosmic Lounge aku bisa jadi diri sendiri. Ga ada toxic, semuanya chill dan supportive! 💖',
    project: 'Cosmic Hangout Lounge',
  },
  {
    id: 16,
    name: 'OracynRez',
    avatar: '📈',
    rating: 5,
    text: 'Fitur ide pengguna yang diimplementasi itu next-level! Community Nexus beneran buat komunitas! 🧠',
    project: 'Community Nexus',
  },
  {
    id: 17,
    name: 'OracynKyla',
    avatar: '💃',
    rating: 5,
    text: 'Ngedance rame-rame di Neon Nightclub bikin malam minggu berasa di dunia lain. Seru abis! 🌌',
    project: 'Neon Nightclub',
  },
  {
    id: 18,
    name: 'OracynDio',
    avatar: '🥵',
    rating: 5,
    text: 'Stage 56 di Cyber Obby kayak neraka kecil, tapi aku suka tantangannya! Bikin nagih beneran. 💪',
    project: 'Cyber Obby Challenge',
  },
  {
    id: 19,
    name: 'OracynYaya',
    avatar: '🌸',
    rating: 5,
    text: 'Temenku semua ketularan main Cosmic Lounge. Kita jadi sering nongkrong virtual bareng! 🥰',
    project: 'Cosmic Hangout Lounge',
  },
  {
    id: 20,
    name: 'OracynArv',
    avatar: '🧬',
    rating: 5,
    text: 'ORC Studio bikin game bukan buat main doang, tapi buat komunitas berkembang bareng. Salut! 🫡',
    project: 'All Projects',
  },
];

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="community"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Apa Kata{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Komunitas
            </span>{' '}
            Kami
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Gak cuma dari kami, ini kata para pemain hebat yang bikin komunitas
            ORC luar biasa
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div
                    className={`p-8 rounded-2xl text-center transition-all duration-300 ${
                      darkMode
                        ? 'bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20'
                        : 'bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200'
                    }`}
                  >
                    <div className="text-6xl mb-4">{testimonial.avatar}</div>
                    <h4
                      className={`text-xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {testimonial.name}
                    </h4>
                    <div
                      className={`text-sm mb-4 ${
                        darkMode ? 'text-purple-300' : 'text-purple-600'
                      }`}
                    >
                      Bermain: {testimonial.project}
                    </div>
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-400 fill-current"
                          size={24}
                        />
                      ))}
                    </div>
                    <p
                      className={`text-lg leading-relaxed ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 ${
              darkMode
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 ${
              darkMode
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-purple-500 w-8'
                  : darkMode
                  ? 'bg-gray-600 hover:bg-gray-500'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <h3
            className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Siap Jadi Bagian dari{' '}
            <span className="text-purple-400">Legenda</span>?
          </h3>
          <p
            className={`text-lg mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Gabung bersama pemain dan kreator di komunitas Discord kami!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://discord.gg/ZXcCAyMZ6x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              Gabung Discord
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border-2 border-yellow-400 text-yellow-500 bg-white dark:bg-neutral-900 dark:border-yellow-500 dark:text-yellow-400 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-yellow-100 dark:hover:bg-yellow-800"
            >
              💛 Donasi via Saweria
            </a>
          </div>
          <p
            className={`mt-4 text-sm italic ${
              darkMode ? 'text-yellow-300' : 'text-yellow-700'
            }`}
          >
            90% donasi digunakan untuk berbagi ke orang-orang yang membutuhkan.
          </p>
        </div>
      </div>
    </section>
  );
}
