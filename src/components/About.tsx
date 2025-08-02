import React from 'react';

const teamMembers = [
  {
    name: 'XieL',
    role: 'Founder & Visionary',
    avatar: '👑',
    description:
      'Aku adalah pendiri ORC Studio sekaligus otak di balik visi besar membangun dunia Roblox yang immersive dan seru. Sampai saat ini, semua hal aku kerjakan sendiri, dari konsep, desain, scripting, hingga manajemen. Tapi aku sadar, untuk membawa ORC Studio ke level berikutnya, aku butuh tim yang solid untuk bertumbuh bersama.',
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
