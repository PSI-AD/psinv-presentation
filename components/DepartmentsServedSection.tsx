import React from 'react';

const departments = [
  { name: 'Sales Team', icon: '🤝', desc: 'Direct lead generation, CRM integration, and hyper-fast property discovery for clients.', color: 'bg-emerald-500' },
  { name: 'Marketing Dept', icon: '📢', desc: 'SEO-optimized landing pages, pixel tracking, and automated campaign analytics.', color: 'bg-pink-500' },
  { name: 'Human Resources', icon: '👥', desc: 'Careers portal integration, internal team directories, and onboarding resources.', color: 'bg-amber-500' },
  { name: 'Management', icon: '📈', desc: 'Live performance dashboards, uptime monitoring, and automated ROI reporting.', color: 'bg-blue-600' }
];

const DepartmentsServedSection: React.FC = () => (
  <section className="py-24 px-6 bg-slate-900 text-white border-y border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
      <div className="lg:w-1/3">
        <span className="text-[11px] font-black text-[#00C875] uppercase tracking-[0.25em] mb-4 block">Enterprise Value</span>
        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">Empowering the <br/><span className="text-[#0073EA]">Entire Company.</span></h2>
        <p className="text-lg text-slate-400 font-medium">This isn't just a website for the public. It's an internal engine designed to accelerate every department within PSINV.</p>
      </div>
      <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {departments.map((dept, i) => (
          <div key={i} className="bg-[#1e293b] p-8 rounded-3xl border border-white/5 hover:bg-[#334155] transition-colors">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 ${dept.color}`}>{dept.icon}</div>
            <h3 className="text-2xl font-black mb-3">{dept.name}</h3>
            <p className="text-sm font-medium text-slate-400 leading-relaxed">{dept.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default DepartmentsServedSection;