import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  ArrowLeft, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Scaling,
  ArrowRight
} from 'lucide-react';

const Mission = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="font-sans">
      
      {/* 1. HERO BANNER */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-sky-900/20"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-6">
            <Link to="/about" className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium">
              <ArrowLeft size={16} />
              Back to About Us
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
              <Target className="text-sky-500" size={40} />
              Our Mission
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl">
              Driving the future of workforce management with intelligence, accuracy, and scale.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. CORE MISSION STATEMENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
              "To build an AI-enabled HR and payroll platform that empowers organizations to manage their workforce with precision."
            </h2>
            <div className="h-1 w-24 bg-sky-500 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* 3. MISSION PILLARS (The 4 Points) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">How We Achieve This</h3>
            <p className="text-gray-600">Our mission is built upon four core pillars.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            
            {/* Pillar 1: Inefficiencies */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-sky-300 transition-all group">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Eliminate Manual Inefficiencies</h4>
              <p className="text-gray-600 leading-relaxed">
                We automate repetitive administrative tasks, replacing spreadsheets and manual entry with intelligent workflows that save time and reduce human error.
              </p>
            </motion.div>

            {/* Pillar 2: Accuracy & Compliance */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-sky-300 transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Ensure Accuracy & Compliance</h4>
              <p className="text-gray-600 leading-relaxed">
                Our platform embeds complex regulatory logic directly into calculations, ensuring 100% statutory compliance and zero payroll leakage.
              </p>
            </motion.div>

            {/* Pillar 3: Actionable Insights */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-sky-300 transition-all group">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Provide Actionable Insights</h4>
              <p className="text-gray-600 leading-relaxed">
                We don't just store data; we analyze it. AI-driven dashboards give leaders real-time visibility into workforce trends, costs, and productivity.
              </p>
            </motion.div>

            {/* Pillar 4: Scalability */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-sky-300 transition-all group">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                <Scaling size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Scale Seamlessly</h4>
              <p className="text-gray-600 leading-relaxed">
                From startups to enterprises, our infrastructure is designed to handle growing employee counts and complex organizational structures without breaking.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-6">Be Part of Our Mission</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Whether you are a business looking to optimize operations or a talent looking to build the future, join us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact">
              <button className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg transition-all flex items-center gap-2 justify-center w-full sm:w-auto">
                Partner With Us
                <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="/career">
              <button className="px-8 py-3 bg-transparent border border-slate-600 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all justify-center w-full sm:w-auto">
                Join Our Team
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Mission;