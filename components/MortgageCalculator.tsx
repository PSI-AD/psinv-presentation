
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { MortgageState } from '../types';

const CountUpText: React.FC<{ value: number }> = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => 
    new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD', 
      maximumFractionDigits: 0 
    }).format(latest)
  );

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
    return () => controls.stop();
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
};

const MortgageCalculator: React.FC = () => {
  const [values, setValues] = useState<MortgageState>({
    homePrice: 450000,
    downPayment: 90000,
    interestRate: 6.5,
    loanTerm: 30
  });

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  useEffect(() => {
    const P = values.homePrice - values.downPayment;
    const r = (values.interestRate / 100) / 12;
    const n = values.loanTerm * 12;

    if (r === 0) {
      setMonthlyPayment(P / n);
    } else {
      const payment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setMonthlyPayment(payment);
    }
  }, [values]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h3 className="text-3xl font-extrabold text-[#6161FF]">
          <CountUpText value={monthlyPayment} />
          <span className="text-sm font-normal text-gray-400">/mo</span>
        </h3>
        <p className="text-xs text-gray-400 mt-1 uppercase font-bold tracking-tighter">Estimated Principal & Interest</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="flex justify-between text-xs font-bold text-gray-500 mb-1 uppercase">
            <span>Home Price</span>
            <span>{formatCurrency(values.homePrice)}</span>
          </label>
          <input 
            type="range" 
            min="100000" 
            max="2000000" 
            step="10000"
            value={values.homePrice}
            onChange={(e) => setValues({...values, homePrice: parseInt(e.target.value)})}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#6161FF]"
          />
        </div>

        <div>
          <label className="flex justify-between text-xs font-bold text-gray-500 mb-1 uppercase">
            <span>Down Payment</span>
            <span>{formatCurrency(values.downPayment)}</span>
          </label>
          <input 
            type="range" 
            min="0" 
            max={values.homePrice} 
            step="5000"
            value={values.downPayment}
            onChange={(e) => setValues({...values, downPayment: parseInt(e.target.value)})}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#6161FF]"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-bold text-gray-500 mb-1 uppercase">Rate (%)</label>
            <input 
              type="number" 
              value={values.interestRate}
              onChange={(e) => setValues({...values, interestRate: parseFloat(e.target.value) || 0})}
              className="w-full px-2 py-1 text-sm bg-gray-50 border border-gray-200 rounded-[8px] focus:outline-none focus:border-[#6161FF]"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-gray-500 mb-1 uppercase">Term (Yrs)</label>
            <select 
              value={values.loanTerm}
              onChange={(e) => setValues({...values, loanTerm: parseInt(e.target.value)})}
              className="w-full px-2 py-1 text-sm bg-gray-50 border border-gray-200 rounded-[8px] focus:outline-none focus:border-[#6161FF]"
            >
              <option value={15}>15 Years</option>
              <option value={30}>30 Years</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
