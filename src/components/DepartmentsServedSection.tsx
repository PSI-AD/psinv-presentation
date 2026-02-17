import React from 'react';
const departments = [
  { name: 'Sales', icon: '🤝', color: 'bg-emerald-500' },
  { name: 'Marketing', icon: '📢', color: 'bg-pink-500' },
  { name: 'HR', icon: '👥', color: 'bg-amber-500' },
  { name: 'Management', icon: '📈', color: 'bg-blue-600' }
];
const DepartmentsServedSection: React.FC = () => (
  <section className="py-20 px-6 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
      <div className="lg:w-1/3">
        <h2 className="text-4xl font-black mb-6 text-white">Empowering the Entire Company.</h2>
        <p className="text-slate-400">Our engine accelerates every department at PSINV.</p>
      </div>
      <div className="lg:w-2/3 grid grid-cols-2 gap-4 w-full">
        {departments.map((d, i) => (
          <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-white/5 flex items-center gap-6">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${d.color}`}>{d.icon}</div>
            <h3 className="text-xl font-bold">{d.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default DepartmentsServedSection;