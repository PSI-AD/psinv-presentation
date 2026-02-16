
import React from 'react';
import { motion } from 'framer-motion';

const ProjectComparison: React.FC = () => {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-black text-[#2B2C32]">Project Comparison</h3>
        <div className="w-8 h-8 bg-[#FF3D57] rounded-lg flex items-center justify-center text-white shadow-lg shadow-rose-500/10">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      </div>

      <div className="flex space-x-3 flex-grow">
        <div className="flex-1 bg-white border border-gray-100 rounded-xl p-3 shadow-sm relative">
          <div className="absolute top-2 right-2 text-green-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-full h-12 bg-gray-50 rounded-lg mb-2" />
          <div className="h-2 w-full bg-gray-100 rounded-full mb-1" />
          <div className="h-2 w-3/4 bg-gray-100 rounded-full" />
        </div>
        <div className="flex-1 bg-white border border-gray-100 rounded-xl p-3 shadow-sm relative">
           <div className="absolute top-2 right-2 text-green-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-full h-12 bg-gray-50 rounded-lg mb-2" />
          <div className="h-2 w-full bg-gray-100 rounded-full mb-1" />
          <div className="h-2 w-3/4 bg-gray-100 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ProjectComparison;
