import React from 'react';

const AuditFlowchartSection: React.FC = () => (
  <section className="py-24 px-6 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto text-center">
      <span className="text-[11px] font-black text-red-500 uppercase tracking-[0.25em] mb-4 block">Quality Assurance Protocol</span>
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16">How we resolve <span className="text-red-500">imperfections.</span></h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {[
          { title: 'Automated Audit', desc: 'System flags issue', icon: '🚨', bg: 'bg-red-50', text: 'text-red-600' }, 
          { title: 'Jira Triage', desc: 'Assigned to expert', icon: '🎫', bg: 'bg-orange-50', text: 'text-orange-600' }, 
          { title: 'Code Patch', desc: 'Developer fixes bug', icon: '💻', bg: 'bg-blue-50', text: 'text-blue-600' }, 
          { title: 'CI/CD Test', desc: 'GitHub auto-tests', icon: '⚙️', bg: 'bg-purple-50', text: 'text-purple-600' }, 
          { title: 'Live Merge', desc: 'Fix pushed to users', icon: '✅', bg: 'bg-green-50', text: 'text-green-600' }
        ].map((node, i) => (
          <React.Fragment key={i}>
            <div className={`w-48 h-40 rounded-2xl border border-slate-200 flex flex-col items-center justify-center p-4 shadow-sm ${node.bg}`}>
              <div className="text-4xl mb-3 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">{node.icon}</div>
              <h4 className={`text-sm font-black text-center ${node.text}`}>{node.title}</h4>
              <p className="text-[10px] font-bold text-slate-500 mt-1">{node.desc}</p>
            </div>
            {i !== 4 && <div className="hidden md:block text-slate-300 font-black text-3xl">&rarr;</div>}
            {i !== 4 && <div className="block md:hidden text-slate-300 font-black text-3xl my-2">&darr;</div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);
export default AuditFlowchartSection;