import React from 'react';
const steps = [
  { day: 'Day 1-2', title: 'Ideation & Scoping', desc: 'Translating business requirements into technical specs.', color: 'bg-[#FFCB00]' },
  { day: 'Day 3-7', title: 'UX/UI Prototyping', desc: 'Wireframing in Figma and finalizing user journeys.', color: 'bg-[#00C875]' },
  { day: 'Day 8-21', title: 'Parallel Development', desc: 'Frontend React build alongside Node.js backend logic.', color: 'bg-[#0073EA]' },
  { day: 'Day 22+', title: 'QA & Deployment', desc: 'Automated testing and CI/CD pipeline triggers.', color: 'bg-[#E2445C]' }
];
const IdeaTimelineSection: React.FC = () => (
  <section className="py-24 px-6 bg-slate-50">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      <div className="lg:w-1/3">
        <span className="text-[11px] font-black text-[#00C875] uppercase tracking-[0.25em] mb-4 block">Delivery Velocity</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">From Idea to <br/><span className="text-[#00C875]">Production.</span></h2>
      </div>
      <div className="lg:w-2/3 space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6">
            <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-black ${step.color}`}>{i+1}</div>
            <div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">{step.day}</span>
              <h3 className="text-xl font-black text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-500 font-medium text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default IdeaTimelineSection;