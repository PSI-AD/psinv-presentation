import React from 'react';
const AuditFlowchartSection: React.FC = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-black text-slate-900 mb-12">Quality Assurance Protocol.</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {[
          { t: 'Audit', i: '🚨', c: 'bg-red-50' },
          { t: 'Triage', i: '🎫', c: 'bg-orange-50' },
          { t: 'Patch', i: '💻', c: 'bg-blue-50' },
          { t: 'Test', i: '⚙️', c: 'bg-purple-50' },
          { t: 'Merge', i: '✅', c: 'bg-green-50' }
        ].map((n, i) => (
          <React.Fragment key={i}>
            <div className={`w-32 h-32 rounded-2xl flex flex-col items-center justify-center p-4 border border-slate-100 ${n.c}`}>
              <div className="text-3xl mb-2">{n.i}</div>
              <h4 className="text-xs font-black text-slate-900">{n.t}</h4>
            </div>
            {i !== 4 && <div className="hidden md:block text-slate-200 text-2xl">&rarr;</div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);
export default AuditFlowchartSection;