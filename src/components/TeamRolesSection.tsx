import React from 'react';
const roles = [
  { title: 'Project Manager', icon: '🎯', desc: 'Strategy & Sprints', color: 'text-blue-600 bg-blue-50' },
  { title: 'UX Researcher', icon: '🧠', desc: 'User Journeys', color: 'text-purple-600 bg-purple-50' },
  { title: 'UI Designer', icon: '✨', desc: 'Visual Systems', color: 'text-pink-600 bg-pink-50' },
  { title: 'Frontend Dev', icon: '⚛️', desc: 'React Architecture', color: 'text-cyan-600 bg-cyan-50' },
  { title: 'Backend Dev', icon: '⚙️', desc: 'API & DB', color: 'text-emerald-600 bg-emerald-50' },
  { title: 'DevOps', icon: '☁️', desc: 'CI/CD Pipelines', color: 'text-indigo-600 bg-indigo-50' },
  { title: 'QA Lead', icon: '🔍', desc: 'Automated Testing', color: 'text-amber-600 bg-amber-50' },
  { title: 'Security', icon: '🛡️', desc: 'Data Compliance', color: 'text-red-600 bg-red-50' }
];
const TeamRolesSection: React.FC = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-slate-900 mb-4">A Symphony of Specialists.</h2>
        <p className="text-slate-500">The 8 distinct disciplines building this platform.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {roles.map((r, i) => (
          <div key={i} className="p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-2xl mb-3 ${r.color}`}>{r.icon}</div>
            <h3 className="font-bold text-slate-900">{r.title}</h3>
            <p className="text-xs text-slate-600">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default TeamRolesSection;