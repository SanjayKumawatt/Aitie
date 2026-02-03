import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  ShieldAlert, 
  Unplug, 
  EyeOff, 
  Clock, 
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

const problems = [
  {
    icon: <Calculator size={32} />,
    title: "Payroll Errors",
    desc: "Payroll errors caused by manual calculations and spreadsheet dependencies."
  },
  {
    icon: <ShieldAlert size={32} />,
    title: "Compliance Risks",
    desc: "High risk of penalties due to constantly changing labor laws and regulations."
  },
  {
    icon: <Unplug size={32} />,
    title: "Disconnected Systems",
    desc: "Fragmented tools for HR, attendance, and payroll that don't talk to each other."
  },
  {
    icon: <EyeOff size={32} />,
    title: "Limited Visibility",
    desc: "Lack of real-time insights into workforce data, leading to poor decision making."
  },
  {
    icon: <Clock size={32} />,
    title: "Time Wasted",
    desc: "HR teams lose hours every week on repetitive administrative tasks and data entry."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Difficulty Scaling",
    desc: "Operational bottlenecks that make it hard to scale HR processes as teams grow."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const ProblemSection = () => {
  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            The Problem We Are Solving
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Across industries, HR and payroll teams face the same fundamental challenges. 
            Legacy systems and manual processes are holding businesses back.
          </motion.p>
        </div>

        {/* Problems Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-sky-200 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-sky-50 rounded-lg flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-700 transition-colors">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Conclusion / Solution Statement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              These challenges increase operational cost, employee dissatisfaction, and legal risk.
            </h3>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 mb-8 rounded-full"></div>
              
              <p className="text-lg md:text-2xl font-medium text-sky-100 leading-relaxed">
                "AITIE exists to replace fragmented, manual HR operations with a <span className="text-sky-400 font-bold">single intelligent digital backbone</span>."
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSection;