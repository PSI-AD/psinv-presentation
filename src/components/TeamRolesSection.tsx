import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  { id: 'pm', title: 'Product Manager', icon: '🎯', color: 'bg-blue-100 text-blue-600', deliverable: 'Strategic roadmaps, sprint planning, and cross-functional alignment.' },
  { id: 'ux', title: 'UX Researcher', icon: '🧠', color: 'bg-purple-100 text-purple-600', deliverable: 'User journey mapping, heatmaps, and friction reduction.' },
  { id: 'ui', title: 'UI Designer', icon: '✨', color: 'bg-pink-100 text-pink-600', deliverable: 'High-fidelity mockups, design systems, and visual accessibility.' },
  { id: 'fe', title: 'Frontend Engineer', icon: '⚛️', color: 'bg-cyan-100 text-cyan-600', deliverable: 'React architecture, state management, and 60fps animations.' },
  { id: 'be', title: 'Backend Engineer', icon: '⚙️', color: 'bg-emerald-100 text-emerald-600', deliverable: 'API development, database indexing, and CRM synchronization.' },
  { id: 'devops', title: 'DevOps / Cloud', icon: '☁️', color: 'bg-indigo-100 text-indigo-600', deliverable: 'CI/CD pipelines, automated deployments, and server scaling.' },
  { id: 'qa', title: 'QA Analyst', icon: '🔍', color: 'bg-amber-100 text-amber-600', deliverable: 'Automated testing, cross-browser validation, and bug triaging.' },
  { id: 'seo', title: 'SEO Specialist', icon: '📈', color: 'bg-orange-100 text-orange-600', deliverable: 'Technical SEO audits, schema markup, and organic growth.' },
  { id: 'content', title: 'Content Strategist', icon: '✍️', color: 'bg-teal-100 text-teal-600', deliverable: 'Platform copy, property taxonomy, and brand voice.' },
  { id: 'data', title: 'Data Engineer', icon: '📊', color: 'bg-yellow-100 text-yellow-600', deliverable: 'Data scraping, cleansing, and normalization pipelines.' },
  { id: 'sec', title: 'Security Analyst', icon: '🛡️', color: 'bg-red-100 text-red-600', deliverable: 'Penetration testing, SSL management, and data compliance.' },
  { id: 'motion', title: 'Motion Designer', icon: '🎬', color: 'bg-fuchsia-100 text-fuchsia-600', deliverable: 'Micro-interactions, layout shifts, and CSS physics.' }
];

const TeamRolesSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] font-black text-monday-blue uppercase tracking-[0.25em] mb-4 block">The Brains Behind the Code</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">A Symphony of <span className="text-monday-blue">Specialists.</span></h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">It takes more than a coder to build an empire. Our platform is the combined output of 12 distinct disciplines working in parallel.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {roles.map((role) => (
            <div 
              key={role.id}
              onMouseEnter={() => setHoveredId(role.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-monday-blue hover:shadow-xl transition-all duration-300 cursor-default min-h-[160px] flex flex-col justify-center overflow-hidden group"
            >
              <div className="flex items-center gap-4 relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${role.color} transition-transform group-hover:scale-110`}>
                  {role.icon}
                </div>
                <h3 className="font-black text-slate-900 text-lg leading-tight">{role.title}</h3>
              </div>

              <AnimatePresence>
                {hoveredId === role.id && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-slate-900 p-6 flex flex-col justify-center z-20"
                  >
                    <span className="text-[10px] text-monday-blue font-black uppercase tracking-widest mb-2">Core Deliverable</span>
                    <p className="text-sm font-bold text-white leading-relaxed">{role.deliverable}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TeamRolesSection;