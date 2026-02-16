
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type LayerType = 'education' | 'retail' | 'connectivity';

interface Hotspot {
  id: number;
  x: number;
  y: number;
  name: string;
  match: number;
  type: LayerType;
}

const hotspots: Hotspot[] = [
  { id: 1, x: 30, y: 40, name: 'Skyline Heights', match: 98, type: 'connectivity' },
  { id: 2, x: 65, y: 25, name: 'The Grove Academics', match: 92, type: 'education' },
  { id: 3, x: 45, y: 70, name: 'Mercantile Square', match: 95, type: 'retail' },
  { id: 4, x: 80, y: 55, name: 'Harbor View', match: 89, type: 'connectivity' },
  { id: 5, x: 20, y: 75, name: 'Lakeside Campus', match: 94, type: 'education' },
];

const MapLifestyleIntelligence: React.FC = () => {
  const [activeLayers, setActiveLayers] = useState<LayerType[]>(['connectivity', 'education', 'retail']);
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);

  const toggleLayer = (layer: LayerType) => {
    setActiveLayers(prev => 
      prev.includes(layer) ? prev.filter(l => l !== layer) : [...prev, layer]
    );
  };

  return (
    <div className="flex flex-col md:flex-row bg-white border border-[#e6e9ef] rounded-[12px] overflow-hidden shadow-sm h-[600px]">
      {/* Left Side: Stylized Map */}
      <div className="w-full md:w-[60%] relative bg-[#F9FAFB] border-r border-[#e6e9ef] overflow-hidden group">
        <div className="absolute top-6 left-6 z-10">
           <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
             Interactive Canvas v2
           </span>
        </div>

        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          {/* Animated Map Lines */}
          <motion.path
            d="M 100 200 Q 300 100 500 300 T 900 200"
            fill="none"
            stroke="#6161FF"
            strokeWidth="1.5"
            strokeDasharray="10 10"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M 0 500 Q 250 400 500 500 T 1000 400"
            fill="none"
            stroke="#6161FF"
            strokeWidth="2"
            strokeDasharray="15 15"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.15 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path
            d="M 200 1000 Q 400 700 800 900"
            fill="none"
            stroke="#6161FF"
            strokeWidth="1.5"
            strokeDasharray="8 8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.1 }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Abstract Grid */}
          <defs>
            <pattern id="grid-map" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#e6e9ef" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-map)" />
        </svg>

        {/* Hotspots */}
        {hotspots.map((spot) => {
          const isActive = activeLayers.includes(spot.type);
          return (
            <div
              key={spot.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
              style={{ left: `${spot.x}%`, top: `${spot.y}%`, opacity: isActive ? 1 : 0.1, pointerEvents: isActive ? 'auto' : 'none' }}
              onMouseEnter={() => setHoveredHotspot(spot.id)}
              onMouseLeave={() => setHoveredHotspot(null)}
            >
              <div className="relative cursor-pointer">
                <motion.div
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-[#6161FF] rounded-full"
                />
                <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-colors duration-300 ${hoveredHotspot === spot.id ? 'bg-[#FFCB00]' : 'bg-[#6161FF]'}`} />
                
                <AnimatePresence>
                  {hoveredHotspot === spot.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-48"
                    >
                      <div className="bg-[#2B2C32] text-white p-3 rounded-[8px] shadow-2xl">
                        <p className="text-[11px] font-bold tracking-tight mb-1">{spot.name}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest">{spot.type}</span>
                          <span className="text-[10px] text-[#FFCB00] font-black">{spot.match}% MATCH</span>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-[#2B2C32] rotate-45 mx-auto -mt-1" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Side: Control Panel */}
      <div className="w-full md:w-[40%] p-10 flex flex-col justify-center bg-white">
        <div className="mb-10">
          <h2 className="text-3xl font-black text-[#2B2C32] leading-tight mb-4">Contextual Discovery</h2>
          <p className="text-gray-500 font-medium">We don't just show locations; <span className="text-[#6161FF]">we map lifestyles.</span></p>
        </div>

        <div className="space-y-4">
          <LayerToggle 
            label="Education Hubs" 
            active={activeLayers.includes('education')} 
            onClick={() => toggleLayer('education')} 
            color="#FF3D57"
          />
          <LayerToggle 
            label="Retail Access" 
            active={activeLayers.includes('retail')} 
            onClick={() => toggleLayer('retail')} 
            color="#FFCB00"
          />
          <LayerToggle 
            label="Connectivity" 
            active={activeLayers.includes('connectivity')} 
            onClick={() => toggleLayer('connectivity')} 
            color="#6161FF"
          />
        </div>

        <div className="mt-12 pt-12 border-t border-[#f0f0f5]">
          <div className="flex items-center space-x-3 text-[#6161FF]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-[11px] font-bold uppercase tracking-widest">Toggle layers to view correlations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LayerToggle: React.FC<{ label: string; active: boolean; onClick: () => void; color: string }> = ({ label, active, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-4 rounded-[12px] border transition-all duration-300 ${active ? 'bg-[#F1F1FB] border-[#6161FF]/20 shadow-sm' : 'bg-transparent border-gray-100 hover:border-gray-200'}`}
    >
      <div className="flex items-center space-x-4">
        <div 
          className="w-2.5 h-2.5 rounded-full" 
          style={{ backgroundColor: active ? color : '#e6e9ef' }} 
        />
        <span className={`text-sm font-bold transition-colors ${active ? 'text-[#2B2C32]' : 'text-gray-400'}`}>
          {label}
        </span>
      </div>
      <div className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${active ? 'bg-[#6161FF]' : 'bg-gray-200'}`}>
        <motion.div
          animate={{ x: active ? 20 : 2 }}
          initial={false}
          className="absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm"
        />
      </div>
    </button>
  );
};

export default MapLifestyleIntelligence;
