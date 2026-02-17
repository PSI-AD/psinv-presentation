import React from 'react';
import { motion } from 'framer-motion';

const AuditFlowchartSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[11px] font-black text-red-500 uppercase tracking-[0.25em] mb-4 block">Quality Assurance Protocol</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">How we resolve <span className="text-red-500">imperfections.</span></h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          
          {/* Connecting Line Desktop */}
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-slate-100 -z-10" />
          
          {[
            { id: '1', title: 'Automated Audit', desc: 'Lighthouse flags a drop in Core Web Vitals.', icon: '🚨', color: 'bg-red-50 border-red-200' },
            { id: '2', title: 'Jira Triage', desc: 'Ticket assigned to the specific specialist.', icon: '🎫', color: 'bg-orange-50 border-orange-200' },
            { id: '3', title: 'Code Patch', desc: 'Dev branches and fixes the specific component.', icon: '💻', color: 'bg-blue-50 border-blue-200' },
            { id: '4', title: 'CI/CD Review', desc: 'GitHub Actions automatically tests the branch.', icon: '⚙️', color: 'bg-purple-50 border-purple-200' },
            { id: '5', title: 'Live Merge', desc: 'Code is merged and 100/100 score is restored.', icon: '✅', color: 'bg-green-50 border-green-200' }
          ].map((node, i) => (
            <motion.div 
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`w-full md:w-40 h-48 bg-white rounded-2xl border-2 ${node.color} shadow-lg flex flex-col items-center justify-center p-4 text-center relative bg-white`}
            >
              <div className="text-3xl mb-3">{node.icon}</div>
              <h4 className="text-sm font-black text-slate-900 mb-2 leading-tight">{node.title}</h4>
              <p className="text-[10px] text-slate-500 font-bold leading-tight">{node.desc}</p>
              
              {/* Arrow for Mobile */}
              {i !== 4 && (
                 <div className="block md:hidden text-slate-300 mt-6">&darr;</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AuditFlowchartSection;