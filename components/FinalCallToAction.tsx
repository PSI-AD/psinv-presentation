
import React from 'react';

const FinalCallToAction: React.FC = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-monday-blue to-[#00c875] rounded-[48px] p-16 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
        {/* Decorative background overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
            Ready to transform <br/>the workflow?
          </h2>
          <p className="text-xl font-medium text-white/90 mb-12 max-w-2xl mx-auto">
            The PSINV platform is fully operational, continuously optimized, and ready to scale our digital real estate presence to the next level.
          </p>
          <button className="px-10 py-5 bg-white text-monday-navy font-black rounded-full shadow-xl hover:scale-105 transition-transform text-lg">
            View Live Dashboard &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
export default FinalCallToAction;
