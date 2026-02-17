import React from 'react';

const CoreTechnologySearch: React.FC = () => {
  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <div className="bg-white dark:bg-slate-800 rounded-[32px] p-10 shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="flex items-center space-x-4 mb-8 border-b border-slate-100 dark:border-slate-700 pb-6">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-mondayBlue text-2xl font-black">⚛️</div>
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">React.js Architecture</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Zero-Reload Framework</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-500 text-2xl font-black">🧠</div>
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">AI Data Structuring</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Automated Organization</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Built with React & AI.<br />
            <span className="text-mondayBlue">Engineered for the User.</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            We utilized React to build a frictionless experience. Instead of loading new pages, our platform filters thousands of properties instantly—feeling more like a native app than a website.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            Behind the scenes, AI algorithms ensure our massive data sets are perfectly organized, presenting complex market insights in a clean, digestible format that drives decisions.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-full border border-slate-200 dark:border-slate-700">Instant Search</span>
            <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-full border border-slate-200 dark:border-slate-700">Predictive Loading</span>
            <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-full border border-slate-200 dark:border-slate-700">Automated Freshness</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTechnologySearch;
