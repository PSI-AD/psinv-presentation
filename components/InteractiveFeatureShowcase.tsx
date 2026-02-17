
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    id: 1,
    title: "Mortgage Calculator",
    icon: "🧮",
    short: "Browser-Side Math",
    detail: "Zero-latency financial modeling. Users can adjust rates, down payments, and terms instantly without server round-trips.",
    color: "bg-monday-yellow",
    text: "text-yellow-700"
  },
  {
    id: 2,
    title: "Map Polygon Search",
    icon: "🗺️",
    short: "Draw Your Area",
    detail: "Don't just search by city. Users can draw custom shapes on the map to define exact neighborhoods for hyper-local discovery.",
    color: "bg-monday-blue",
    text: "text-blue-700"
  },
  {
    id: 3,
    title: "Market Trends",
    icon: "📈",
    short: "5-Year Data",
    detail: "We integrate directly with Dubai Land Department APIs to show verified historical transaction data for every community.",
    color: "bg-monday-green-dark",
    text: "text-emerald-700"
  },
  {
    id: 4,
    title: "Nearby Lifestyle",
    icon: "b",
    short: "Contextual Data",
    detail: "Our engine calculates proximity to schools, malls, and metro stations, giving every property a 'Lifestyle Score' automatically.",
    color: "bg-monday-navy",
    text: "text-indigo-300"
  }
];

const InteractiveFeatureShowcase: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
           <span className="text-[11px] font-black text-monday-yellow uppercase tracking-[0.25em] mb-4 block">Interactive Toolset</span>
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
             Tools that <span className="text-monday-yellow">empower</span> decisions.
           </h2>
        </div>

        {/* Using Flexbox for the expanding card effect */}
        <div className="flex flex-col lg:flex-row gap-6 min-h-[400px]">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
              layout
              className={`relative rounded-[32px] p-8 cursor-pointer overflow-hidden transition-all duration-500 ease-out flex flex-col justify-between ${
                hoveredId === feature.id 
                  ? 'flex-[2] bg-slate-50 shadow-2xl scale-[1.02] z-10' 
                  : 'flex-[1] bg-white border border-slate-100 hover:border-slate-200'
              }`}
            >
              {/* Background Color Blob */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 ${feature.color}`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6 ${feature.color} bg-opacity-20`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-tight mb-2">
                  {feature.title}
                </h3>
                <p className={`text-xs font-bold uppercase tracking-widest ${feature.text}`}>
                  {feature.short}
                </p>
              </div>

              <AnimatePresence>
                {hoveredId === feature.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="h-px w-full bg-slate-200 my-6" />
                    <p className="text-sm font-medium text-slate-500 leading-relaxed">
                      {feature.detail}
                    </p>
                    <div className="mt-6 flex items-center text-xs font-black text-slate-900 group">
                      Explore Tool <span className="ml-2 transition-transform group-hover:translate-x-1">-></span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatureShowcase;
