import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Factory, 
  Briefcase, 
  ShoppingBag, 
  HeartPulse, 
  ArrowRight,
  Layers,
  Settings2,
  Globe
} from 'lucide-react';

const Industries = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Industries Data with Images & Descriptions
  const industries = [
    {
      id: 1,
      title: "IT & Technology",
      icon: Monitor,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
      desc: "Perfect for managing distributed teams, project-based billing, and dynamic workforce structures common in tech startups and enterprises."
    },
    {
      id: 2,
      title: "Manufacturing & Operations",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      desc: "Robust handling of complex shift patterns, overtime calculations, factory act compliance, and blue-collar workforce management."
    },
    {
      id: 3,
      title: "Consulting & Professional Services",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
      desc: "Streamlined timesheet management, client-billable hours tracking, and flexible staffing models for consultancy firms."
    },
    {
      id: 4,
      title: "Retail & Distribution",
      icon: ShoppingBag,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      desc: "Managing multi-store locations, seasonal hiring spikes, sales incentives, and attendance across distributed outlets."
    },
    {
      id: 5,
      title: "Healthcare & Services",
      icon: HeartPulse,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
      desc: "Handling 24/7 rostering, critical compliance requirements, and specialized roles in hospitals and clinics."
    }
  ];

  return (
    <div className="font-sans">
      
      {/* 1. HERO BANNER */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/50"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Industries We Support
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            "AITIE is designed to be <span className="text-sky-400 font-semibold">industry-agnostic</span>, yet <span className="text-sky-400 font-semibold">adaptable</span>."
          </motion.p>
        </div>
      </div>

      {/* 2. INDUSTRIES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {industries.map((item) => (
              <motion.div 
                key={item.id}
                variants={cardVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:border-sky-200 transition-all duration-300 group"
              >
                {/* Image Area */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-sky-600 shadow-lg">
                    <item.icon size={24} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. ADAPTABILITY SECTION (Why it works everywhere) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why AITIE Fits Every Industry</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core architecture is built to handle complexity, regardless of the sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: Layers, 
                title: "Configurable Rules", 
                desc: "Define your own attendance policies, shift timings, and overtime logic without coding." 
              },
              { 
                icon: Settings2, 
                title: "Custom Workflows", 
                desc: "Create approval chains and onboarding steps that match your specific operational hierarchy." 
              },
              { 
                icon: Globe, 
                title: "Scalable Architecture", 
                desc: "Whether you have 50 employees in one office or 5000 across multiple sites, AITIE adapts." 
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center text-sky-600 mx-auto mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA FOOTER */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Don't see your industry listed?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Our platform is flexible enough to handle unique requirements. Let's discuss your specific needs.
          </p>
          <Link to="/contact">
            <button className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 mx-auto">
              Talk to an Expert
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Industries;