import React from 'react';

const teamMembers = [
  {
    name: 'XieL',
    role: 'Founder & Visionary',
    avatar: '👑',
    description:
      'Gw yg jadi otak di balik ORC Studio. Dari awal sampe sekarang semua gw gas sendiri: konsep, desain, script, sampe manage. Tapi makin gede makin sadar, ga bisa solo terus… makanya gw bangun tim biar ORC Studio makin gila vibes-nya 🔥',
  },
  {
    name: 'Pxnda',
    role: 'Creative Builder',
    avatar: '🐼',
    description:
      'Builder andalan yang kalo bikin map selalu detail+esthetic. Tangannya udah kayak brush, bikin dunia Roblox jadi cakep banget. 🏗️✨',
  },
  {
    name: 'Gilang',
    role: 'Scripting Geek',
    avatar: '⚡',
    description:
      'Si jenius coding yang tiap hari ngulik biar game tetep smooth. Kalo ada bug, biasanya dia yang first blood ngatasin. 👨‍💻',
  },
  {
    name: 'Rere',
    role: 'Community Vibes',
    avatar: '💬',
    description:
      'Orangnya rame, friendly, dan selalu connect sama player. Jadi jembatan antara tim sama komunitas. Player betah gara² dia! 🤝',
  },
  {
    name: 'Bebek',
    role: 'UI/UX Designer',
    avatar: '🦆',
    description:
      'Bikin UI yang ga cuma enak diliat tapi gampang dipake. Katanya sih motto dia: “UI harus no ribet no cry.” 🎨',
  },
  {
    name: 'Vjee',
    role: 'Gameplay Wizard',
    avatar: '🎮',
    description:
      'Orang di balik gameplay adiktif. Dari challenge kecil sampe sistem gede, dia yang bikin fun + nagih. 🪄',
  },
  {
    name: 'Jekpaw',
    role: 'Sound God',
    avatar: '🎵',
    description:
      'Tanpa musik/sfx dia, game cuma kayak dunia sepi. Jekpaw yang bikin vibes makin hidup. 🔊',
  },
  {
    name: 'Akira',
    role: 'Story Teller',
    avatar: '📖',
    description:
      'Punya imajinasi liar + storytelling yang dalem. Jalan cerita game jadi ga flat berkat dia. 🌌',
  },
  {
    name: 'All',
    role: 'All-rounder',
    avatar: '🌐',
    description:
      'Si paling bisa apa aja. Mau bantu desain, script, ide, semua bisa di-handle. Flex banget! 🛠️',
  },
  {
    name: 'Nutie',
    role: 'Event Hype',
    avatar: '✨',
    description:
      'Event in-game ga bakal seru kalo ga ada dia. Selalu mikirin cara biar player rame lagi rame lagi. 🚀',
  },
];



const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-300 animate-pulse">
          Tim di Balik ORC Studio
        </h2>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-neutral-900 border border-amber-500/20 rounded-3xl p-8 shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:scale-[1.02] backdrop-blur-lg"
          >
            <div className="text-6xl mb-4">{member.avatar}</div>
            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
            <p className="text-sm uppercase tracking-widest text-amber-400 mb-4">
              {member.role}
            </p>
            <p className="text-base leading-relaxed text-neutral-300">
              {member.description}
            </p>

            {/* Optional glowing ring effect */}
            <div className="absolute -inset-1 rounded-3xl blur-md bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 opacity-20 animate-spin-slow"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
