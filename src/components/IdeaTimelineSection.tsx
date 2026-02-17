import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { day: 'Day 1-2', title: 'Ideation & Scoping', desc: 'Translating business requirements into technical specs.', color: 'bg-[#FFCB00]' },
  { day: 'Day 3-7', title: 'UX/UI Prototyping', desc: 'Wireframing in Figma and finalizing user journeys.', color: 'bg-[#00C875]' },
  { day: 'Day 8', title: 'Architecture Sync', desc: 'Database schema design and API endpoint mapping.', color: 'bg-[#0073EA]' },
  { day: 'Day 9-21', title: 'Parallel Development', desc: 'Frontend React build alongside Node.js backend logic.', color: 'bg-[#E2445C]' },
  { day: 'Day 22-25', title: 'QA & Refinement', desc: 'Automated testing and manual bug squashing.', color: 'bg-[#A259FF]' },
  { day: 'Day 26+', title: 'Live Deployment', desc: 'CI/CD pipeline triggers and post-launch monitoring.', color: 'bg-[#00D2FF]' }
];

const IdeaTimelineSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <span className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.25em] mb-4 block">Delivery Velocity</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">From Idea to <br/><span className="text-emerald-500">Production.</span></h2>
          <p className="text-lg text-slate-500 font-medium">We employ strict Agile methodologies. A feature isn't just coded; it travels through a rigorous pipeline to ensure zero regressions.</p>
        </div>

        <div className="lg:w-2/3 relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-1 bg-slate-200 rounded-full" />
          
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-20"
              >
                <div className={`absolute left-0 top-1 w-14 h-14 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${step.color} text-white font-black text-sm`}>
                  {i + 1}
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-lg mb-4">{step.day}</span>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
export default IdeaTimelineSection;