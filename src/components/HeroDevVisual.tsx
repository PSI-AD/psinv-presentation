import React, { useState } from 'react';
import { motion } from 'framer-motion';

const techGroups = {
  languages: { color: 'from-blue-400 to-indigo-500', icons: ['⚛️ React', '📘 TS', '🟢 Node'] },
  tools: { color: 'from-purple-400 to-pink-500', icons: ['🛠️ Webpack', '📦 Git', '🎨 Figma'] },
  audit: { color: 'from-green-400 to-emerald-500', icons: ['📈 Lighthouse', '🔍 Semrush', '⚡ Vitals'] },
  infra: { color: 'from-cyan-400 to-blue-500', icons: ['☁️ Firebase', '🛡️ Cloudflare', '🚀 Vercel'] },
};

const HeroDevVisual: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    rest: {},
    hover: {}
  };

  // Animation to pull elements to center
  const convergeVariant = (xOffset: number, yOffset: number) => ({
    rest: { x: xOffset, y: yOffset, scale: 1, opacity: 0.8 },
    hover: { x: 0, y: 0, scale: 0.8, opacity: 0.4, transition: { type: 'spring', stiffness: 100, damping: 20 } }
  });

  return (
    <motion.div 
      className="relative min-h-[700px] flex flex-col items-center justify-center overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      variants={containerVariants}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
    >
      {/* Main Headlines */}
      <div className="relative z-20 text-center mb-8 pointer-events-none">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-black text-monday-navy leading-[1.05] tracking-tight mb-6">
          Develop with <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-monday-blue to-monday-green-dark">Ultimate Power.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
          Hover to see how we converge the world's best technologies into one seamless real estate engine.
        </motion.p>
      </div>

      {/* FLOATING TECH GROUPS */}
      {/* Top Left: Languages */}
      <motion.div variants={convergeVariant(-350, -200)} className="absolute z-10 hidden lg:flex flex-col gap-3 p-4 rounded-3xl bg-white/40 backdrop-blur-md border border-white/50 shadow-xl">
        <div className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">Core Stack</div>
        <div className="flex gap-2">{techGroups.languages.icons.map(ico => <span key={ico} className="px-3 py-1.5 bg-white rounded-full text-sm font-bold shadow-sm">{ico}</span>)}</div>
      </motion.div>

      {/* Top Right: Tools */}
      <motion.div variants={convergeVariant(350, -200)} className="absolute z-10 hidden lg:flex flex-col gap-3 p-4 rounded-3xl bg-white/40 backdrop-blur-md border border-white/50 shadow-xl text-right items-end">
        <div className="text-xs font-black uppercase tracking-widest text-purple-600 mb-2">Build Chain</div>
        <div className="flex gap-2">{techGroups.tools.icons.map(ico => <span key={ico} className="px-3 py-1.5 bg-white rounded-full text-sm font-bold shadow-sm">{ico}</span>)}</div>
      </motion.div>

      {/* Bottom Left: Audit */}
      <motion.div variants={convergeVariant(-380, 150)} className="absolute z-10 hidden lg:flex flex-col gap-3 p-4 rounded-3xl bg-white/40 backdrop-blur-md border border-white/50 shadow-xl">
        <div className="text-xs font-black uppercase tracking-widest text-green-600 mb-2">Performance QA</div>
        <div className="flex gap-2">{techGroups.audit.icons.map(ico => <span key={ico} className="px-3 py-1.5 bg-white rounded-full text-sm font-bold shadow-sm">{ico}</span>)}</div>
      </motion.div>

      {/* Bottom Right: Infra */}
      <motion.div variants={convergeVariant(380, 150)} className="absolute z-10 hidden lg:flex flex-col gap-3 p-4 rounded-3xl bg-white/40 backdrop-blur-md border border-white/50 shadow-xl text-right items-end">
        <div className="text-xs font-black uppercase tracking-widest text-cyan-600 mb-2">Infrastructure</div>
        <div className="flex gap-2">{techGroups.infra.icons.map(ico => <span key={ico} className="px-3 py-1.5 bg-white rounded-full text-sm font-bold shadow-sm">{ico}</span>)}</div>
      </motion.div>


      {/* Central Laptop (The Target) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
        className="relative z-0 mt-12 w-full max-w-4xl"
      >
         <div className="aspect-[16/9] bg-monday-navy rounded-t-[32px] border-[8px] border-b-0 border-slate-800 overflow-hidden relative shadow-2xl">
            {/* Screen Content */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-monday-navy to-[#0073ea]">
               <motion.div animate={isHovered ? { scale: 1.1, textShadow: "0 0 20px rgba(255,255,255,0.5)" } : {}} className="text-white text-4xl font-black flex flex-col items-center transition-all">
                 <span className="text-6xl mb-4">💠</span>
                 PSINV Unified Engine
                 {isHovered && <motion.span initial={{opacity:0}} animate={{opacity:1}} className="text-sm uppercase tracking-widest mt-2 text-blue-200">Technologies Integrated</motion.span>}
               </motion.div>
            </div>
         </div>
         <div className="w-full h-6 bg-slate-700 rounded-b-[32px] shadow-xl relative"><div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-2 bg-slate-600 rounded-b-xl"/></div>
      </motion.div>
    </motion.div>
  );
};
export default HeroDevVisual;