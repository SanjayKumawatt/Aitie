import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  RefreshCcw, 
  ShieldCheck, 
  Bot, 
  BarChart3, 
  Zap,
  Rocket,
  Building2,
  Globe,
  Users,
  Layers,
  BrainCircuit,
  Scaling
} from 'lucide-react';

const FeaturesAndSolutions = () => {
  return (
    <div className="font-sans">
      
      {/* SECTION 1: OUR SOLUTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Text Content */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h6 className="text-sky-600 font-bold uppercase tracking-wider mb-2">Our Solution</h6>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  A Unified Workforce Intelligence Platform
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  AITIE is building a platform where:
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Database, text: "Employee data lives in one secure system" },
                    { icon: RefreshCcw, text: "Attendance, leave, and payroll are fully integrated" },
                    { icon: ShieldCheck, text: "Compliance logic is embedded into calculations" },
                    { icon: Bot, text: "AI assists HR teams with validation, alerts, and insights" },
                    { icon: BarChart3, text: "Leaders gain real-time visibility into workforce trends" },
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-sky-50 transition-colors"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                        <item.icon size={20} />
                      </div>
                      <span className="text-gray-700 font-medium text-lg">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Impact Box (Right Side) */}
            <div className="lg:w-1/2 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden text-white"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl -ml-10 -mb-10"></div>
                
                <Zap size={48} className="text-yellow-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Proactive, Not Reactive</h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  "Instead of reacting to problems, organizations using AITIE can <span className="text-white font-bold border-b-2 border-sky-400">anticipate, automate, and optimize</span>."
                </p>
                <div className="h-1 w-20 bg-sky-500 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO AITIE IS BUILT FOR */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who AITIE Is Built For</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our platform is designed to support businesses at every stage of their growth journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Rocket, 
                title: "Startups", 
                desc: "Moving from spreadsheets to systems." 
              },
              { 
                icon: Building2, 
                title: "SMEs", 
                desc: "Managing multi-department teams." 
              },
              { 
                icon: Globe, 
                title: "Enterprises", 
                desc: "With complex payroll & distributed locations." 
              },
              { 
                icon: Users, 
                title: "HR Teams", 
                desc: "Seeking automation, accuracy, and control." 
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl hover:border-sky-500 transition-all hover:bg-slate-800"
              >
                <item.icon size={32} className="text-sky-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT MAKES AITIE DIFFERENT */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Makes AITIE Different</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-sky-500"
            >
              <div className="mb-6 bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center text-sky-600">
                <Layers size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Built as a Core System, Not a Tool</h3>
              <p className="text-gray-600 leading-relaxed">
                AITIE is designed as a foundational workforce system, not a collection of disconnected features. It is the single source of truth.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-purple-500"
            >
              <div className="mb-6 bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center text-purple-600">
                <BrainCircuit size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Intelligence Embedded in Workflows</h3>
              <p className="text-gray-600 leading-relaxed">
                AI is used for validation, pattern detection, alerts, and insights-drastically reducing errors and the need for manual review.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-emerald-500"
            >
              <div className="mb-6 bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center text-emerald-600">
                <Scaling size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Designed for Long-Term Scale</h3>
              <p className="text-gray-600 mb-4">
                The platform is architected to support:
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Increasing employee counts</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Growing payroll complexity</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Regulatory evolution</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>Expanding organizational structures</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default FeaturesAndSolutions;