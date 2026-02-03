import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  ArrowLeft, 
  ArrowRight, 
  Zap, 
  Leaf, 
  ShieldCheck, 
  Cpu
} from 'lucide-react';

const Vision = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="font-sans ">
      
      {/* 1. HERO BANNER */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {/* Abstract Background for 'Vision' / Future */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="mb-8 flex justify-center">
            <Link to="/about" className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700">
              <ArrowLeft size={16} />
              Back to About Us
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-16 h-16 mx-auto bg-sky-500/20 rounded-full flex items-center justify-center text-sky-400 mb-6 border border-sky-500/30 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                <Lightbulb size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Our Vision
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              "To create a future where organizations manage their workforce through <span className="text-white font-semibold">intelligent, automated, and compliant</span> digital systems."
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. THE CORE VISION BREAKDOWN */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Text Context */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Redefining the Workplace Operating System
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We envision a world where HR and Payroll are no longer back-office headaches but strategic advantages. We see a future where technology removes the friction between an employee joining a company and their ability to be productive and paid accurately.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At AITIE, we are not just building software; we are building the <strong>digital backbone</strong> for the modern workforce.
              </p>
              
              <Link to="/products">
                <button className="text-sky-600 font-bold hover:text-sky-800 flex items-center gap-2 group transition-all">
                  See How We Build It 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </button>
              </Link>
            </motion.div>

            {/* Right Side: Visualizing the Future (3 Points) */}
            <div className="space-y-6">
              {[
                {
                  icon: Cpu,
                  color: "text-purple-600",
                  bg: "bg-purple-50",
                  title: "Intelligent Systems",
                  desc: "Moving beyond data entry to data intelligence. Systems that think, alert, and advise."
                },
                {
                  icon: ShieldCheck,
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                  title: "Total Compliance",
                  desc: "A regulatory environment where businesses are safe, compliant, and transparent by default."
                },
                {
                  icon: Leaf,
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                  title: "Sustainable Growth",
                  desc: "Enabling companies to scale their teams 10x without increasing administrative chaos."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-4 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
                >
                  <div className={`flex-shrink-0 w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. FUTURE GOAL / IMPACT STATEMENT */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                <Zap size={32} className="text-yellow-300 fill-yellow-300" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Reducing operational friction.<br/> Enabling sustainable growth.
            </h2>
            <p className="text-sky-100 text-xl mb-10 max-w-2xl mx-auto">
              This is the future we are coding every single day at AITIE Technologies.
            </p>
            
            <Link to="/contact">
              <button className="px-10 py-4 bg-white text-blue-700 font-bold rounded-lg shadow-xl hover:bg-sky-50 transition-all transform hover:-translate-y-1">
                Join Our Journey
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Vision;