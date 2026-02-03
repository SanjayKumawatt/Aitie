import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Code2, 
  Database, 
  Target, 
  Lightbulb, 
  CheckCircle,
  DraftingCompass,
  SearchCheck,
  ShieldCheck,
  Hourglass
} from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="font-sans">
      
      {/* PART 1: INTRODUCTION & TEAM */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-sm font-bold text-sky-600 tracking-widest uppercase mb-3">Who We Are</h2>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
              About AITIE TECHNOLOGIES <br className="hidden md:block"/> PRIVATE LIMITED
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              AITIE TECHNOLOGIES PRIVATE LIMITED is an Indian technology startup building next-generation HR and Payroll software for businesses operating in fast-changing regulatory and workforce environments.
            </p>
            <div className="bg-sky-50 p-6 rounded-xl border-l-4 border-sky-500 text-left md:text-center">
              <p className="text-sky-900 font-medium text-lg italic">
                "We believe HR systems should not just record data-they should actively support decision-making, accuracy, and compliance."
              </p>
            </div>
          </motion.div>

          {/* Team Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Code2, title: "Software Engineering", subtitle: "Expertise" },
              { icon: Users, title: "HR and Payroll", subtitle: "Domain Understanding" },
              { icon: Database, title: "Data-Driven", subtitle: "System Design Principles" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-white border border-gray-100 shadow-sm rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PART 2: VISION & MISSION */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-sky-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="text-sky-500" size={32} />
                <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To create a future where organizations manage their workforce through intelligent, automated, and compliant digital systems, reducing operational friction and enabling sustainable growth.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-slate-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-slate-700" size={32} />
                <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 mb-6">
                To build an AI-enabled HR and payroll platform that:
              </p>
              <ul className="space-y-4">
                {[
                  "Eliminates manual HR inefficiencies",
                  "Ensures payroll accuracy and compliance",
                  "Provides actionable workforce insights",
                  "Scales seamlessly with business growth"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>

      {/* PART 3: PRODUCT PHILOSOPHY */}
      <div className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product-First Philosophy</h2>
            <div className="h-1 w-24 bg-sky-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                icon: DraftingCompass, 
                title: "Design First", 
                text: "We design before we code." 
              },
              { 
                icon: SearchCheck, 
                title: "Validation", 
                text: "We validate with real workflows." 
              },
              { 
                icon: ShieldCheck, 
                title: "Reliability", 
                text: "We prioritize reliability over shortcuts." 
              },
              { 
                icon: Hourglass, 
                title: "Long Term", 
                text: "We build for years, not quick demos." 
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-sky-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-slate-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;