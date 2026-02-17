import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PerformanceDashboard: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-slate-900 relative overflow-hidden border-t border-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight">
                        Real-Time <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Performance Metrics.</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Our platform delivers industry-leading speed, accuracy, and user engagement.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Metric Card 1: Market Velocity */}
                    <MetricCard
                        title="Market Velocity"
                        value="42%"
                        trend="+12% vs last month"
                        icon="🚀"
                        delay={0}
                    >
                        {/* SVG Trend Line */}
                        <div className="h-16 w-full mt-4 relative">
                            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                                <path d="M0,40 Q25,35 40,20 T100,5" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                                <circle cx="100" cy="5" r="3" fill="#10b981" className="animate-pulse" />
                            </svg>
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-emerald-500/10 to-transparent" />
                        </div>
                    </MetricCard>

                    {/* Metric Card 2: ROI Projection */}
                    <MetricCard
                        title="ROI Projection"
                        value="12.5x"
                        trend="Avg. 5yr return"
                        icon="📈"
                        delay={0.1}
                    >
                        <div className="flex items-end gap-1 mt-6 h-12">
                            <div className="w-1/5 h-[40%] bg-emerald-900/50 rounded-t-sm" />
                            <div className="w-1/5 h-[60%] bg-emerald-800/50 rounded-t-sm" />
                            <div className="w-1/5 h-[50%] bg-emerald-700/50 rounded-t-sm" />
                            <div className="w-1/5 h-[80%] bg-emerald-600/50 rounded-t-sm" />
                            <div className="w-1/5 h-[100%] bg-emerald-500 rounded-t-sm shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                        </div>
                    </MetricCard>

                    {/* Metric Card 3: User Retention */}
                    <MetricCard
                        title="User Retention"
                        value="98.2%"
                        trend="Churn < 2%"
                        icon="👥"
                        delay={0.2}
                    >
                        <div className="mt-4 flex -space-x-3 overflow-hidden py-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className={`inline-block h-8 w-8 rounded-full ring-2 ring-slate-800 bg-emerald-${i * 100 + 400} flex items-center justify-center text-[10px] font-bold text-slate-900 border border-slate-600`}>
                                    U{i}
                                </div>
                            ))}
                            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-800 bg-slate-700 flex items-center justify-center text-[10px] text-white font-bold">+2k</div>
                        </div>
                    </MetricCard>
                </div>
            </div>
        </section>
    );
};

const MetricCard: React.FC<{ title: string, value: string, trend: string, icon: string, children: React.ReactNode, delay: number }> = ({ title, value, trend, icon, children, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        whileHover={{ y: -5 }}
        className="bg-slate-800 rounded-3xl border border-slate-700/50 p-8 shadow-xl flex flex-col justify-between"
    >
        <div>
            <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{title}</span>
                <span className="text-2xl">{icon}</span>
            </div>
            <div className="text-5xl font-black text-emerald-400 tracking-tight mb-2">{value}</div>
            <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                {trend}
            </div>
        </div>
        {children}
    </motion.div>
);

export default PerformanceDashboard;
