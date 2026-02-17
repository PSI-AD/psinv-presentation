import React from 'react';
import { motion } from 'framer-motion';

const InteractiveToolsSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight">
                        Actionable Real Estate <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Intelligence.</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto md:mx-0" />
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1: ROI Calculator */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-800 rounded-3xl border border-slate-700/50 p-8 shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                        <div className="mb-8">
                            <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center text-2xl mb-4 border border-slate-600">📊</div>
                            <h3 className="text-2xl font-bold text-slate-100 mb-2">ROI & Yield Projector</h3>
                            <p className="text-slate-400">Instantly calculate cash-on-cash returns, cap rates, and long-term appreciation.</p>
                        </div>

                        {/* Mock Calculator UI */}
                        <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50 space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-slate-400 font-medium">
                                    <span>Property Value</span>
                                    <span className="text-emerald-400">$850,000</span>
                                </div>
                                <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                                    <div className="h-full w-3/4 bg-emerald-500 rounded-full" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-800 rounded-xl p-3 border border-slate-700">
                                    <label className="block text-xs uppercase text-slate-500 font-bold mb-1">Down Payment</label>
                                    <div className="text-slate-200 font-mono font-bold">$170,000</div>
                                </div>
                                <div className="bg-slate-800 rounded-xl p-3 border border-slate-700">
                                    <label className="block text-xs uppercase text-slate-500 font-bold mb-1">Interest Rate</label>
                                    <div className="text-slate-200 font-mono font-bold">5.25%</div>
                                </div>
                            </div>

                            <button className="w-full py-3 mt-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-900/20 text-sm">
                                Calculate Yield
                            </button>
                        </div>
                    </motion.div>

                    {/* Card 2: Interactive Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-800 rounded-3xl border border-slate-700/50 p-8 shadow-2xl relative overflow-hidden group flex flex-col"
                    >
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-emerald-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                        <div className="mb-6 relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center text-2xl mb-4 border border-slate-600">🌍</div>
                            <h3 className="text-2xl font-bold text-slate-100 mb-2">Market Discovery Map</h3>
                            <p className="text-slate-400">Heat-map visualization of emerging neighborhoods and off-market opportunities.</p>
                        </div>

                        {/* Mock Map UI */}
                        <div className="flex-1 bg-slate-900/80 rounded-2xl border border-slate-700/50 relative overflow-hidden min-h-[220px]">
                            {/* Map Grid Pattern */}
                            <div className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`,
                                    backgroundSize: '40px 40px'
                                }}
                            />

                            {/* Glowing Markers */}
                            <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_15px_3px_rgba(52,211,153,0.6)] animate-pulse" />
                            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_15px_3px_rgba(52,211,153,0.6)] animate-pulse delay-700" />
                            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_15px_3px_rgba(45,212,191,0.6)] animate-pulse delay-300" />

                            {/* Search Overlay */}
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="bg-slate-800/90 backdrop-blur-sm p-3 rounded-xl border border-slate-600 flex justify-between items-center">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-2">Region: Austin, TX</span>
                                    <button className="px-4 py-1.5 bg-slate-700 hover:bg-slate-600 text-emerald-400 text-xs font-bold rounded-lg border border-slate-600 transition-colors">
                                        Search Region
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default InteractiveToolsSection;
