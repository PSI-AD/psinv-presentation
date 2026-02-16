
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MapVisual: React.FC = () => {
  const [activePin, setActivePin] = useState<number | null>(null);

  // Mock property data
  const pins = [
    { id: 1, x: 25, y: 30, price: '$850k', color: '#6161FF' },
    { id: 2, x: 65, y: 45, price: '$1.2M', color: '#6161FF' },
    { id: 3, x: 45, y: 75, price: '$620k', color: '#6161FF' },
    { id: 4, x: 80, y: 20, price: '$2.1M', color: '#2B2C32' },
  ];

  return (
    <div className="relative w-full h-full bg-[#f9fafb] rounded-md overflow-hidden flex flex-col">
      <div className="p-3 border-b border-gray-100 flex justify-between items-center bg-white">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Inventory Map</span>
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
        </div>
      </div>
      
      <div className="flex-grow relative cursor-crosshair">
        {/* Abstracted Map Grid Background */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e6e9ef" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
          
          <path d="M 10 10 Q 30 5, 50 20 T 90 10" fill="none" stroke="#6161FF22" strokeWidth="2" strokeDasharray="4 2" />
          <path d="M 20 80 Q 40 90, 60 70 T 80 85" fill="none" stroke="#6161FF22" strokeWidth="2" strokeDasharray="4 2" />
        </svg>

        {/* Map Pins */}
        {pins.map(pin => (
          <motion.div 
            key={pin.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: pin.id * 0.1, type: "spring", stiffness: 200 }}
            className="absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            onMouseEnter={() => setActivePin(pin.id)}
            onMouseLeave={() => setActivePin(null)}
          >
            {/* Pulse Effect */}
            <motion.div 
              animate={{ 
                scale: [1, 1.8],
                opacity: [0.5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute inset-0 h-4 w-4 rounded-full"
              style={{ backgroundColor: pin.color }}
            />
            
            <div 
              className={`relative flex items-center justify-center h-4 w-4 rounded-full border-2 border-white shadow-lg transition-transform ${activePin === pin.id ? 'scale-125' : 'scale-100'}`}
              style={{ backgroundColor: pin.color }}
            />

            <AnimatePresence>
              {activePin === pin.id && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-3 z-10"
                >
                  <div className="bg-[#2B2C32] text-white text-[10px] font-bold py-1.5 px-3 rounded-[8px] whitespace-nowrap shadow-2xl border border-white/10">
                    {pin.price}
                  </div>
                  <div className="w-2 h-2 bg-[#2B2C32] rotate-45 mx-auto -mt-1 shadow-sm border-r border-b border-white/10"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {/* Floating Tooltips or labels */}
        <div className="absolute bottom-4 left-4 flex flex-col space-y-2 pointer-events-none">
          <div className="bg-white border border-gray-100 px-3 py-1.5 rounded-[8px] text-[10px] font-bold text-gray-500 shadow-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6161FF] animate-pulse"></span>
            LIVE FEED 2.5X
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapVisual;
