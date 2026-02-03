import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  UserPlus, 
  Clock, 
  Banknote, 
  Scale, 
  BarChart3, 
  Smartphone, 
  Lock,
  Check,
  ArrowRight
} from 'lucide-react';

import img from "../assets/ess.webp"

const Products = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Data Structure with IMAGES added
  const productModules = [
    {
      id: 1,
      title: "Employee Information & Core HR System",
      icon: Users,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop", // Team/Data Image
      desc: "A single source of truth for all workforce data.",
      features: [
        "Centralized Employee Database (Personal & Professional details)",
        "Role, department, and reporting structures",
        "Employment history and status changes",
        "Secure document storage (IDs, contracts, forms)",
        "Organizational Structure Management"
      ]
    },
    {
      id: 2,
      title: "Onboarding & Employee Lifecycle",
      icon: UserPlus,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop", // Handshake/Welcome Image
      desc: "Structured workflows from hiring to exit.",
      features: [
        "Digital Onboarding (Document collection & verification)",
        "Policy acknowledgment tracking",
        "Lifecycle Events (Confirmations, Promotions)",
        "Exit documentation and final settlements",
        "All events linked to payroll logic"
      ]
    },
    {
      id: 3,
      title: "Attendance, Time & Leave Intelligence",
      icon: Clock,
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop", // Time/Clock Image
      desc: "Data that impacts payroll, productivity, and compliance.",
      features: [
        "Daily attendance capture & Shift configurations",
        "Overtime calculations & Working hour rules",
        "Configurable leave policies & Accrual rules",
        "Intelligent Validation (Anomaly detection)",
        "Automated alerts for inconsistencies"
      ]
    },
    {
      id: 4,
      title: "Payroll Automation Engine",
      icon: Banknote,
      highlight: true, 
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop", // Finance/Calculation Image
      desc: "The core engine. Automated, accurate, and validated.",
      features: [
        "Multiple salary structures (Earnings & Deductions)",
        "Automated Monthly Processing linked to attendance",
        "Statutory deductions (PF, ESI, TDS, etc.)",
        "Rule-based pre-run validation",
        "Payslip generation & Accounting reports"
      ]
    },
    {
      id: 5,
      title: "Compliance & Statutory Management",
      icon: Scale,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop", // Legal/Gavel Image
      desc: "Compliance embedded into logic, not handled manually.",
      features: [
        "Automated statutory calculation rules",
        "Compliance-ready registers",
        "Audit-friendly data records",
        "Configurable rules for regulatory changes",
        "Reduces legal risk and compliance effort"
      ]
    },
    {
      id: 6,
      title: "Workforce Analytics & Insights",
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Analytics/Dashboard Image
      desc: "Transforming operational data into decision-ready insights.",
      features: [
        "Dashboards for Growth trends & Cost distribution",
        "Attendance and leave behavior analysis",
        "Predictive Insights (Attrition indicators)",
        "Cost optimization opportunities"
      ]
    },
    {
      id: 7,
      title: "Employee Self-Service Portal",
      icon: Smartphone,
      image: img, // Mobile/App Image
      desc: "Reducing HR workload and improving transparency.",
      features: [
        "Payslip access & Policy documents",
        "Leave requests and balance tracking",
        "Profile updates",
        "Notifications and announcements",
        "Mobile-responsive access"
      ]
    },
    {
      id: 8,
      title: "Security, Roles & Access Control",
      icon: Lock,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop", // Security/Lock Image
      desc: "Enterprise-grade security and data protection.",
      features: [
        "Role-based access permissions",
        "Department-level data visibility",
        "Activity logging and audit trails",
        "Secure authentication mechanisms",
        "Data encryption and privacy controls"
      ]
    }
  ];

  return (
    <div className="font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900"></div>
        
        {/* Subtle Background Image for Hero */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>


        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            AITIE <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">HR & Payroll</span> Platform
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            A unified software platform covering the complete employee lifecycle-from onboarding to payroll to compliance and analytics.
          </motion.p>
        </div>
      </div>

      {/* 2. MODULES GRID WITH IMAGES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" // Changed to 3 columns on large screens for better image layout
          >
            {productModules.map((module) => (
              <motion.div 
                key={module.id}
                variants={cardVariants}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl group ${
                  module.highlight 
                    ? "bg-white border-sky-300 shadow-lg shadow-sky-100/50" 
                    : "bg-white border-gray-200 hover:border-sky-200"
                }`}
              >
                {/* IMAGE HEADER */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                  
                  {/* Floating Icon over Image */}
                  <div className={`absolute bottom-4 left-4 p-3 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm ${
                    module.highlight ? "bg-sky-600 text-white" : "bg-white/95 text-slate-700"
                  }`}>
                    <module.icon size={24} />
                  </div>
                </div>

                {/* CONTENT BODY */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{module.title}</h3>
                  <p className={`text-sm font-medium mb-6 ${module.highlight ? "text-sky-700" : "text-gray-500"}`}>
                    {module.desc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                           <Check size={16} className={module.highlight ? "text-sky-600" : "text-green-500"} />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="py-24 bg-white border-t border-gray-100 text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ready to modernize your <span className="text-sky-600">workforce management?</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Experience the power of a unified platform designed for accuracy and scale. Let's build the future of your HR together.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-sky-200/40 w-full sm:w-auto hover:-translate-y-1">
                  Request a Live Demo
                  <ArrowRight size={20} />
                </button>
              </Link>
              <Link to="/services">
                <button className="px-8 py-4 bg-white border-2 border-gray-200 hover:border-sky-500 text-slate-700 hover:text-sky-600 font-semibold rounded-lg transition-all w-full sm:w-auto hover:-translate-y-1">
                  View Implementation Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;