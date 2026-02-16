
import React from 'react';
import { motion } from 'framer-motion';

const ConversionUXSection: React.FC = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[11px] font-black text-[#6161FF] uppercase tracking-[0.2em] mb-4 block">Optimization Layer</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#2B2C32] leading-tight">
            Conversion UX: <span className="text-gray-300">Engineered for Lead Gen.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Box 1 (Large - 2/3 Width, 2 Rows Tall) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 bg-[#F9FAFB] border border-gray-100 rounded-[32px] p-8 md:p-12 overflow-hidden flex flex-col"
          >
            <div className="relative flex-grow mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 relative overflow-hidden">
                    <div className="h-32 bg-gray-50 rounded-xl mb-4 relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/20 to-transparent" />
                       <div className="absolute top-2 left-2 px-2 py-1 bg-white/80 backdrop-blur-md rounded-md text-[8px] font-black text-[#6161FF]">
                         AVAILABLE
                       </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-3/4 bg-gray-100 rounded-full" />
                      <div className="h-2 w-1/2 bg-gray-50 rounded-full" />
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between">
                       <div className="h-3 w-12 bg-gray-100 rounded" />
                       <div className="h-3 w-8 bg-gray-100 rounded" />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Sticky Floating CTA Mockup */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-4 right-4 bg-[#25D366] text-white p-4 rounded-full shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] z-20 flex items-center space-x-3 cursor-pointer group"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.89 4.44-9.892 9.892-.001 2.325.64 4.144 2.141 5.86l-.949 3.468 3.3-.866z"/>
                </svg>
                <span className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-500 whitespace-nowrap text-xs font-black uppercase tracking-widest">Chat Now</span>
              </motion.div>
            </div>
            
            <div className="max-w-md">
              <h3 className="text-2xl font-black text-[#2B2C32] mb-4">Sticky CTAs</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                We optimized the CSS to ensure communication channels (WhatsApp, Phone) are always within a thumb's reach on mobile.
              </p>
            </div>
          </motion.div>

          {/* Box 2 (Square): Benefits Onboarding */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-3 text-[#6161FF]">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                 </svg>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em]">List Your Property</span>
              </div>
              
              <div className="space-y-3">
                {['Direct Buyer Access', 'Zero Listing Fees', 'Verified Leads Only'].map((benefit, i) => (
                  <div key={i} className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-100 group hover:border-[#6161FF] transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#6161FF] mr-3" />
                    <span className="text-xs font-bold text-gray-500">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="h-10 w-full bg-[#2B2C32] rounded-lg flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest cursor-pointer hover:bg-[#6161FF] transition-colors">
                Start Listing
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-black text-[#2B2C32] mb-3">Frictionless Onboarding</h3>
              <p className="text-gray-400 text-[13px] font-medium leading-relaxed">
                Clean form architecture designed to reduce bounce rates during lead generation.
              </p>
            </div>
          </motion.div>

          {/* Box 3 (Square): Responsive Metrics */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#2B2C32] rounded-[32px] p-8 text-white flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-4">
               <div className="px-2 py-1 border border-white/20 rounded-md text-[8px] font-black text-white/40 uppercase tracking-widest">
                 Pixel Perfect
               </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black leading-tight">Responsive by Design.</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                100% Mobile-First CSS. Whether on a 4K monitor or an iPhone, the grid dynamically re-flows.
              </p>
            </div>
            
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/5">
               <DeviceIcon type="desktop" />
               <DeviceIcon type="tablet" />
               <DeviceIcon type="mobile" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const DeviceIcon: React.FC<{ type: 'desktop' | 'tablet' | 'mobile' }> = ({ type }) => {
  const icons = {
    desktop: <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />,
    tablet: <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="2" />,
    mobile: <rect x="7" y="2" width="10" height="20" rx="2" strokeWidth="2" />
  };

  return (
    <div className="flex flex-col items-center group cursor-default">
      <motion.svg 
        whileHover={{ scale: 1.2, color: '#6161FF' }}
        className="w-8 h-8 text-white/10 transition-colors mb-2" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
      >
        {icons[type]}
        {type === 'desktop' && <path d="M8 21h8" strokeWidth="2" strokeLinecap="round" />}
      </motion.svg>
      <span className="text-[9px] font-black text-white/20 group-hover:text-white uppercase tracking-widest transition-colors">{type}</span>
    </div>
  );
};

export default ConversionUXSection;
