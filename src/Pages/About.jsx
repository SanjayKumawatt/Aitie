import React from 'react';
import { Link } from 'react-router-dom';
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
  Hourglass,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const About = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="font-sans "> {/* pt-20 to account for fixed header */}
      
      {/* 1. PAGE HEADER / BANNER */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-sky-900/20"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <div className="flex justify-center items-center gap-2 text-sky-200 text-sm font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">About Us</span>
          </div>
        </div>
      </div>

      {/* 2. INTRODUCTION & EXPERTISE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16"
          >
            <h2 className="text-sm font-bold text-sky-600 tracking-widest uppercase mb-3">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              AITIE TECHNOLOGIES PRIVATE LIMITED
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We are an Indian technology startup building next-generation HR and Payroll software for businesses operating in fast-changing regulatory and workforce environments.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We believe HR systems should not just record data-they should actively support decision-making, accuracy, and compliance.
            </p>

            {/* Link Button */}
            <Link to="/contact">
               <button className="px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-all flex items-center gap-2">
                 Get in Touch with Us
                 <ArrowRight size={18} />
               </button>
            </Link>
          </motion.div>

          {/* Team Expertise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Code2, title: "Software Engineering", desc: "Expertise in modern tech stacks." },
              { icon: Users, title: "HR & Payroll", desc: "Deep domain understanding." },
              { icon: Database, title: "Data-Driven", desc: "System design principles." },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-sky-50 border border-sky-100 p-6 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sky-600 mb-4 shadow-sm">
                  <item.icon size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-sky-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-sky-100 rounded-lg text-sky-600">
                  <Lightbulb size={28} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To create a future where organizations manage their workforce through intelligent, automated, and compliant digital systems, reducing operational friction and enabling sustainable growth.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-slate-800"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-100 rounded-lg text-slate-800">
                  <Target size={28} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 mb-6 font-medium">
                To build an AI-enabled HR and payroll platform that:
              </p>
              <ul className="space-y-3">
                {[
                  "Eliminates manual HR inefficiencies",
                  "Ensures payroll accuracy and compliance",
                  "Provides actionable workforce insights",
                  "Scales seamlessly with business growth"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">{text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                 <Link to="/services" className="text-sky-600 font-semibold hover:text-sky-700 inline-flex items-center gap-1 group">
                    Explore Our Solutions 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. PHILOSOPHY SECTION */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -ml-40 -mb-40"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Product-First Philosophy</h2>
            <p className="text-slate-400 text-lg">
              We don't just build software; we engineer solutions for longevity and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="group bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-sky-900/10">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA for Philosophy Section */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="mt-16 text-center"
          >
             <p className="text-slate-400 mb-6">Want to see our philosophy in action?</p>
             <Link to="/contact">
                <button className="px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-sky-50 transition-colors shadow-lg shadow-sky-900/20">
                    Contact Our Team
                </button>
             </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default About;