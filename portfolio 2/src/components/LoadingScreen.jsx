import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900"
    >
      <div className="relative flex items-center justify-center">
        <motion.div 
          className="w-24 h-24 border-4 border-red-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <motion.div 
          className="absolute text-white font-black text-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          S
        </motion.div>
      </div>
      <motion.p 
        className="mt-6 text-gray-400 tracking-widest uppercase text-xs"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Loading Studio
      </motion.p>
    </motion.div>
  );
}
