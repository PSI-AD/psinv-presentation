
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { AmenityScore } from '../types';

const LifestyleAnalysis: React.FC = () => {
  const data: AmenityScore[] = [
    { name: 'Walk', score: 85, color: '#6161FF' },
    { name: 'Transit', score: 92, color: '#2B2C32' },
    { name: 'Bike', score: 78, color: '#6161FF' },
    { name: 'School', score: 65, color: '#e6e9ef' },
    { name: 'Safety', score: 88, color: '#6161FF' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-700">Area Insight</h3>
        <div className="flex space-x-2">
          <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded">HIGH DEMAND</span>
        </div>
      </div>

      <div className="flex-grow min-h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fontWeight: 600, fill: '#9ca3af' }}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '10px' }}
            />
            <Bar dataKey="score" radius={[4, 4, 0, 0]} barSize={20}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="p-2 border border-gray-100 rounded-md bg-gray-50">
          <p className="text-[10px] font-bold text-gray-400 uppercase">Commute</p>
          <p className="text-sm font-extrabold text-[#2B2C32]">12 min</p>
        </div>
        <div className="p-2 border border-gray-100 rounded-md bg-gray-50">
          <p className="text-[10px] font-bold text-gray-400 uppercase">Growth</p>
          <p className="text-sm font-extrabold text-[#6161FF]">+4.2%</p>
        </div>
      </div>
    </div>
  );
};

export default LifestyleAnalysis;
