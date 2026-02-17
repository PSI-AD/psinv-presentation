
import React from 'react';
import { motion } from 'framer-motion';

const UxDesignHub: React.FC = () => {
  return (
    <section className="bg-monday-grey py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 transform -rotate-2 hover:rotate-0 transition-transform">
               <div className="w-10 h-10 bg-pink-100 text-pink-500 rounded-xl flex items-center justify-center mb-4 text-xl">🎨</div>
               <h4 className="font-black text-slate-900 mb-1">Design System</h4>
               <p className="text-xs text-gray-500 font-medium">Strict component library ensuring 100% visual consistency.</p>
            </div>
            <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 transform translate-y-8 rotate-2 hover:rotate-0 transition-transform">
               <div className="w-10 h-10 bg-purple-100 text-purple-500 rounded-xl flex items-center justify-center mb-4 text-xl">📱</div>
               <h4 className="font-black text-slate-900 mb-1">Fluid Responsive</h4>
               <p className="text-xs text-gray-500 font-medium">Perfect rendering from 4K monitors down to mobile screens.</p>
            </div>
            <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 transform -rotate-1 hover:rotate-0 transition-transform">
               <div className="w-10 h-10 bg-amber-100 text-amber-500 rounded-xl flex items-center justify-center mb-4 text-xl">♿</div>
               <h4 className="font-black text-slate-900 mb-1">A11y Compliant</h4>
               <p className="text-xs text-gray-500 font-medium">Built with full ARIA support for screen readers and accessibility.</p>
            </div>
            <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 transform translate-y-8 rotate-1 hover:rotate-0 transition-transform flex flex-col justify-center items-center text-center">
               <div className="text-3xl font-black text-monday-blue mb-1">100+</div>
               <p className="text-xs font-bold uppercase tracking-widest text-gray-400">UI Components</p>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <div className="inline-block px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
            User Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Complex data made <br/><span className="text-monday-blue">beautifully simple.</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            We don't just dump data on the screen. Our dedicated UX architecture ensures that every property, metric, and market trend is presented with absolute clarity, guiding the user naturally toward conversion.
          </p>
        </div>

      </div>
    </section>
  );
};
export default UxDesignHub;
