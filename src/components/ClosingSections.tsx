import React from 'react';
import { motion } from 'framer-motion';

const ClosingSections: React.FC = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto text-center">

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="max-w-3xl mx-auto mb-24 bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-[3rem] border border-slate-700 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_70%)]" />

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight relative z-10">
                        Ready to revolutionize <br />your portfolio?
                    </h2>
                    <button className="relative z-10 px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg rounded-full transition-all shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.6)]">
                        Request Exclusive Access
                    </button>
                </motion.div>

                {/* Footer Links */}
                <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <div className="mb-4 md:mb-0 font-bold text-slate-400">
                        &copy; 2026 PSINV. All rights reserved.
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors">Contact Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ClosingSections;
