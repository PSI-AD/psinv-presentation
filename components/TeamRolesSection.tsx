import React from 'react';

const roles = [
  { title: 'Project Manager', icon: '🎯', color: 'text-blue-600 bg-blue-50', border: 'hover:border-blue-200', desc: 'Strategic roadmaps & sprint planning.' },
  { title: 'UX Researcher', icon: '🧠', color: 'text-purple-600 bg-purple-50', border: 'hover:border-purple-200', desc: 'User journey & friction reduction.' },
  { title: 'UI Designer', icon: '✨', color: 'text-pink-600 bg-pink-50', border: 'hover:border-pink-200', desc: 'High-fidelity mockups & design systems.' },
  { title: 'Frontend Dev', icon: '⚛️', color: 'text-cyan-600 bg-cyan-50', border: 'hover:border-cyan-200', desc: 'React architecture & user interfaces.' },
  { title: 'Backend Dev', icon: '⚙️', color: 'text-emerald-600 bg-emerald-50', border: 'hover:border-emerald-200', desc: 'API development & database indexing.' },
  { title: 'DevOps Eng', icon: '☁️', color: 'text-indigo-600 bg-indigo-50', border: 'hover:border-indigo-200', desc: 'CI/CD pipelines & server scaling.' },
  { title: 'QA Analyst', icon: '🔍', color: 'text-amber-600 bg-amber-50', border: 'hover:border-amber-200', desc: 'Automated testing & bug triaging.' },
  { title: 'SEO Expert', icon: '📈', color: 'text-orange-600 bg-orange-50', border: 'hover:border-orange-200', desc: 'Technical SEO & organic growth.' },
  { title: 'Content Writer', icon: '✍️', color: 'text-teal-600 bg-teal-50', border: 'hover:border-teal-200', desc: 'Platform copy & property taxonomy.' },
  { title: 'Data Engineer', icon: '📊', color: 'text-yellow-600 bg-yellow-50', border: 'hover:border-yellow-200', desc: 'Data scraping & CRM normalization.' },
  { title: 'Security Admin', icon: '🛡️', color: 'text-red-600 bg-red-50', border: 'hover:border-red-200', desc: 'SSL management & data compliance.' },
  { title: 'Motion Designer', icon: '🎬', color: 'text-fuchsia-600 bg-fuchsia-50', border: 'hover:border-fuchsia-200', desc: 'Micro-interactions & CSS styling.' }
];

const TeamRolesSection: React.FC = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-[11px] font-black text-[#0073EA] uppercase tracking-[0.25em] mb-4 block">The Brains Behind the Code</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">A Symphony of <span className="text-[#0073EA]">Specialists.</span></h2>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">It takes more than a coder to build an empire. Our platform is the combined output of 12 distinct disciplines.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roles.map((role, i) => (
          <div key={i} className={`p-6 rounded-3xl bg-white border-2 border-slate-100 ${role.border} hover:shadow-xl transition-all duration-300 group`}>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 ${role.color} group-hover:scale-110 transition-transform`}>{role.icon}</div>
            <h3 className="font-black text-slate-900 text-lg mb-2">{role.title}</h3>
            <p className="text-sm font-bold text-slate-500 leading-relaxed">{role.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default TeamRolesSection;