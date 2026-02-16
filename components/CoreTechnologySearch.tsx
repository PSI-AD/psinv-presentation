
import React from 'react';
import { motion } from 'framer-motion';

const CoreTechnologySearch: React.FC = () => {
  return (
    <section className="bg-[#F9FAFB] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Panel: Mockup Frame */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <div className="relative group">
            {/* Mockup Browser Window */}
            <div className="bg-white rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
              <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/50" />
                <div className="ml-4 h-4 w-[60%] bg-gray-200/50 rounded-full" />
              </div>
              
              <div className="p-8">
                {/* Abstract Search Bar UI */}
                <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center space-x-4">
                  <svg className="w-5 h-5 text-[#6161FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <div className="h-3 w-40 bg-gray-200 rounded-full" />
                  <div className="ml-auto flex space-x-2">
                    <div className="h-6 w-16 bg-[#6161FF]/10 rounded-md border border-[#6161FF]/20" />
                    <div className="h-6 w-16 bg-[#6161FF] rounded-md" />
                  </div>
                </div>

                {/* Grid Simulation: Al Reem / Yas Island */}
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <div className="h-20 bg-gradient-to-br from-gray-200 to-gray-100 rounded-lg mb-4" />
                      <div className="space-y-2">
                        <div className={`h-2 ${i % 2 === 0 ? 'w-full' : 'w-3/4'} bg-gray-200 rounded-full`} />
                        <div className="h-2 w-1/2 bg-gray-100 rounded-full" />
                      </div>
                      <div className="mt-4 flex justify-between">
                         <div className="h-4 w-12 bg-[#6161FF]/5 rounded" />
                         <div className="h-4 w-8 bg-gray-200/50 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Interaction Indicator */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 bg-[#6161FF] text-white px-6 py-4 rounded-2xl shadow-2xl z-20"
            >
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-black uppercase tracking-widest">Instant Response</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Panel: Technical Copy */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#2B2C32] leading-tight">
              Powered by React: <span className="text-[#6161FF]">Instant Discovery.</span>
            </h2>
            <div className="flex-shrink-0">
               <ReactLogo />
            </div>
          </div>

          <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-xl">
            To handle thousands of complex queries, we built our core search using React. 
            This allows users to filter by location, property type, and amenities instantly 
            without the page reloading. The benefit? Zero friction, zero wait times, and 
            a seamless user experience that keeps visitors engaged.
          </p>

          <div className="flex flex-wrap gap-3">
            <TechTag label="State Management" />
            <TechTag label="Asynchronous Loading" />
            <TechTag label="Zero-Reload" />
          </div>

          <div className="pt-8 border-t border-gray-200 flex items-center space-x-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">
                  Dev
                </div>
              ))}
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Optimized by our core architecture team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReactLogo = () => (
  <motion.div 
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="w-12 h-12 text-[#61DAFB]"
  >
    <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  </motion.div>
);

const TechTag: React.FC<{ label: string }> = ({ label }) => (
  <motion.span 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -2, borderColor: '#6161FF', color: '#6161FF' }}
    className="px-4 py-1.5 border border-gray-200 text-gray-400 text-[11px] font-black uppercase tracking-[0.15em] rounded-full transition-all cursor-default"
  >
    {label}
  </motion.span>
);

export default CoreTechnologySearch;
