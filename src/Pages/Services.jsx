import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Settings2, 
  DatabaseZap, 
  Puzzle, 
  Headphones, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const servicesData = [
    {
      id: 1,
      icon: Settings2,
      color: "text-blue-600",
      bg: "bg-blue-50",
      title: "Platform Implementation & Configuration",
      desc: "We help organizations configure:",
      points: [
        "HR policies",
        "Payroll structures",
        "Attendance and leave rules",
        "Approval workflows"
      ]
    },
    {
      id: 2,
      icon: DatabaseZap,
      color: "text-purple-600",
      bg: "bg-purple-50",
      title: "Secure Data Migration",
      desc: "Seamless transition ensuring data integrity:",
      points: [
        "Migration from spreadsheets or legacy systems",
        "Data validation and cleansing",
        "Structured onboarding of historical records"
      ]
    },
    {
      id: 3,
      icon: Puzzle,
      color: "text-orange-600",
      bg: "bg-orange-50",
      title: "Custom Configuration & Extensions",
      desc: "Tailoring the platform to your unique needs:",
      points: [
        "Organization-specific rules",
        "Custom reports and dashboards",
        "Workflow adaptations"
      ]
    },
    {
      id: 4,
      icon: Headphones,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      title: "Ongoing Support & Optimization",
      desc: "Ensuring long-term stability and performance:",
      points: [
        "Platform monitoring",
        "Issue resolution",
        "Continuous improvements",
        "Performance tuning"
      ]
    }
  ];

  return (
    <div className="font-sans">
      
      {/* 1. HERO BANNER */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            {/* <div className="inline-block px-4 py-2 bg-slate-800 rounded-full border border-slate-700 mb-6">
              <span className="text-sky-400 font-semibold uppercase text-sm tracking-wide">
                Product-Supporting • Not Consultancy
              </span>
            </div> */}
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              We provide technical services designed to ensure your AITIE platform implementation is successful, secure, and optimized for your growth.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {servicesData.map((service) => (
              <motion.div 
                key={service.id}
                variants={cardVariants}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-sky-100 transition-all duration-300 group"
              >
                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center ${service.color} group-hover:scale-110 transition-transform`}>
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gray-100 mb-6"></div>

                {/* Description & List */}
                <p className="text-gray-500 font-medium mb-4">{service.desc}</p>
                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 size={18} className="text-sky-500 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Need help implementing AITIE?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our technical experts are ready to assist you with migration, configuration, and optimization.
          </p>
          
          <Link to="/contact">
            <button className="px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-all flex items-center gap-2 mx-auto shadow-lg shadow-sky-200">
              Contact Support Team
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;