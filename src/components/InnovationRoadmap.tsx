import React from 'react';
import { motion } from 'framer-motion';

const roadmapItems = [
    { quarter: "Q3 2026", title: "AI Predictive Modeling", desc: "Machine learning algorithms for price forecasting." },
    { quarter: "Q4 2026", title: "Blockchain Title Deeds", desc: "Smart contracts for instant property transfer." },
    { quarter: "Q1 2027", title: "Global Market Expansion", desc: "Opening markets in Europe and Asia." },
    { quarter: "Q2 2027", title: "DAO Governance", desc: "Community-led investment decisions." },
];

const InnovationRoadmap: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-slate-900 relative border-t border-slate-800">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-100 mb-6">
                        Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Vision.</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500/0 via-emerald-500 to-emerald-500/0 rounded-full" />

                    <div className="space-y-12">
                        {roadmapItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                {/* Card */}
                                <div className={`w-[45%] bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <div className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-2">{item.quarter}</div>
                                    <h3 className="text-xl font-bold text-slate-100 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-400">{item.desc}</p>
                                </div>

                                {/* Node */}
                                <div className="z-10 bg-slate-900 border-4 border-emerald-500 w-6 h-6 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]" />

                                {/* Spacer */}
                                <div className="w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovationRoadmap;
