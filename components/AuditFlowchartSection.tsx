import React from 'react';
const AuditFlowchartSection: React.FC = () => (
  <section className="py-24 px-6 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto text-center">
      <span className="text-[11px] font-black text-red-500 uppercase tracking-[0.25em] mb-4 block">Quality Assurance Protocol</span>
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16">How we resolve <span className="text-red-500">errors.</span></h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {[
          { title: 'Automated Audit', icon: '🚨' }, { title: 'Jira Triage', icon: '🎫' }, 
          { title: 'Code Patch', icon: '💻' }, { title: 'CI/CD Test', icon: '⚙️' }, { title: 'Live Merge', icon: '✅' }
        ].map((node, i) => (
          <React.Fragment key={i}>
            <div className="w-40 h-32 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center justify-center p-4">
              <div className="text-3xl mb-2">{node.icon}</div>
              <h4 className="text-xs font-black text-slate-900 text-center">{node.title}</h4>
            </div>
            {i !== 4 && <div className="hidden md:block text-slate-300 font-black text-2xl">&rarr;</div>}
            {i !== 4 && <div className="block md:hidden text-slate-300 font-black text-2xl">&darr;</div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);
export default AuditFlowchartSection;