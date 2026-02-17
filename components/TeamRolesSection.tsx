import React from 'react';

const roles = [
  { title: 'Project Manager', icon: '🎯', color: 'bg-blue-100 text-blue-600', desc: 'Strategic roadmaps & sprint planning.' },
  { title: 'UX Researcher', icon: '🧠', color: 'bg-purple-100 text-purple-600', desc: 'User journey & friction reduction.' },
  { title: 'UI Designer', icon: '✨', color: 'bg-pink-100 text-pink-600', desc: 'High-fidelity mockups & design systems.' },
  { title: 'Frontend Dev', icon: '⚛️', color: 'bg-cyan-100 text-cyan-600', desc: 'React architecture & user interfaces.' },
  { title: 'Backend Dev', icon: '⚙️', color: 'bg-emerald-100 text-emerald-600', desc: 'API development & database indexing.' },
  { title: 'DevOps Eng', icon: '☁️', color: 'bg-indigo-100 text-indigo-600', desc: 'CI/CD pipelines & server scaling.' },
  { title: 'QA Analyst', icon: '🔍', color: 'bg-amber-100 text-amber-600', desc: 'Automated testing & bug triaging.' },
  { title: 'SEO Expert', icon: '📈', color: 'bg-orange-100 text-orange-600', desc: 'Technical SEO & organic growth.' },
  { title: 'Content Writer', icon: '✍️', color: 'bg-teal-100 text-teal-600', desc: 'Platform copy & property taxonomy.' },
  { title: 'Data Engineer', icon: '📊', color: 'bg-yellow-100 text-yellow-700', desc: 'Data scraping & CRM normalization.' },
  { title: 'Security Admin', icon: '🛡️', color: 'bg-red-100 text-red-600', desc: 'SSL management & data compliance.' },
  { title: 'Motion Designer', icon: '🎬', color: 'bg-fuchsia-100 text-fuchsia-600', desc: 'Micro-interactions & CSS animations.' }
];

const TeamRolesSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] font-black text-[#0073EA] uppercase tracking-[0.25em] mb-4 block">The Brains Behind the Code</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">A Symphony of <span className="text-[#0073EA]">Specialists.</span></h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">Our platform is the combined output of 12 distinct disciplines working in parallel.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, i) => (
            <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${role.color} mb-4`}>{role.icon}</div>
              <h3 className="font-black text-slate-900 text-lg mb-2">{role.title}</h3>
              <p className="text-xs font-bold text-slate-500 leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TeamRolesSection;