import React from 'react';
const steps = [
  { day: 'Phase 1', title: 'Ideation', desc: 'Strategy & Specs', color: 'bg-amber-400' },
  { day: 'Phase 2', title: 'UX/UI', desc: 'Figma Prototyping', color: 'bg-emerald-500' },
  { day: 'Phase 3', title: 'Development', desc: 'React & Node Build', color: 'bg-blue-600' },
  { day: 'Phase 4', title: 'Deployment', desc: 'CI/CD & Monitoring', color: 'bg-rose-500' }
];
const IdeaTimelineSection: React.FC = () => (
  <section className="py-20 px-6 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-slate-900 mb-4">Delivery Velocity.</h2>
        <p className="text-slate-600">From concept to production in record time.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-black shadow-lg ${s.color}`}>
              {i + 1}
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">{s.day}</span>
            <h3 className="text-xl font-black text-slate-900 mb-2">{s.title}</h3>
            <p className="text-sm text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default IdeaTimelineSection;