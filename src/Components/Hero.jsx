import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full   flex items-center justify-center overflow-hidden font-sans pt-10 pb-10">
      
      {/* 1. Background Image with Parallax Effect (Optional) or Static */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          // Tech/AI related background image
          backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        {/* Dark Blue/Slate Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-800/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col justify-center h-full">
        <div className="max-w-4xl">
          
          {/* Badge / Small Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-sky-500/10 border border-sky-400/30 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            <span className="text-sm font-semibold text-sky-300 tracking-wide uppercase">
              Next Gen HR Tech
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Designing the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
              HR & Payroll
            </span> Through <br />
            Intelligent Software
          </motion.h1>

          {/* Body Text 1: Company Intro */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed border-l-4 border-sky-500 pl-4"
          >
            <strong className="text-white font-semibold">AITIE TECHNOLOGIES PRIVATE LIMITED</strong> is a technology startup focused on building a comprehensive AI-powered HR and Payroll software platform that helps organizations manage their workforce with accuracy, compliance, transparency, and intelligence.
          </motion.p>

          {/* Body Text 2: The Problem/Solution */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-3xl"
          >
            We are building software for businesses that are growing, distributed, and increasingly complex-where traditional HR tools, spreadsheets, and manual payroll processes are no longer sustainable.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to={"/contact"} className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-sky-900/20 flex items-center justify-center gap-2">
              Get Started
              <ArrowRight size={20} />
            </Link>
            
            <Link
            to={"/about"}
             className="px-8 py-4 bg-transparent border border-gray-500 hover:border-white text-gray-300 hover:text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
              Learn More
              <ChevronRight size={20} />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Decorative Bottom Fade (Optional - smooth transition to next section) */}
      {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div> */}
    </section>
  );
};

export default Hero;