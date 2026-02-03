import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  Eye, 
  FileKey, 
  Database, 
  UserCheck, 
  RefreshCw,
  ArrowLeft
} from 'lucide-react';

const Security = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="font-sans pt-20">
      
      {/* 1. HERO BANNER */}
      <div className="bg-slate-950 text-white py-20 relative overflow-hidden">
        {/* Matrix/Code Background Effect */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-efc535b5c47c?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/95 to-slate-950"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-8 transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mx-auto mb-6 border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
              <ShieldCheck size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Security & Data Protection
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Employee and payroll data is highly sensitive. <br />
              <span className="text-white font-semibold">AITIE</span> is designed with security at every layer.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. SECURITY ARCHITECTURE (Two Columns) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Column 1: Technical Safeguards */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <Lock size={28} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Technical Safeguards</h2>
              </div>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 bg-white p-1 rounded border border-gray-200 text-blue-500 h-fit">
                    <FileKey size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Encryption of Sensitive Data</h3>
                    <p className="text-sm text-gray-600 mt-1">Data is encrypted both in transit (TLS) and at rest (AES-256) to prevent unauthorized access.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-white p-1 rounded border border-gray-200 text-blue-500 h-fit">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Controlled Access Permissions</h3>
                    <p className="text-sm text-gray-600 mt-1">Role-based access control (RBAC) ensures users only see what they need to work.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-white p-1 rounded border border-gray-200 text-blue-500 h-fit">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Secure Authentication</h3>
                    <p className="text-sm text-gray-600 mt-1">Multi-factor authentication support and secure session management.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-white p-1 rounded border border-gray-200 text-blue-500 h-fit">
                    <Eye size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">System Activity Monitoring</h3>
                    <p className="text-sm text-gray-600 mt-1">Real-time logging of all critical actions to detect anomalies instantly.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Column 2: Operational Safeguards */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:border-emerald-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
                  <Server size={28} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Operational Safeguards</h2>
              </div>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 bg-white p-1 rounded border border-gray-200 text-emerald-500 h-fit">
                    <Database size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Data Minimization</h3>
                    <p className="text-sm text-gray-600 mt-1">We only collect and process data that is strictly necessary for HR operations.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-white p-1 rounded border border-gray-200 text-emerald-500 h-fit">
                    <RefreshCw size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Secure Backups</h3>
                    <p className="text-sm text-gray-600 mt-1">Automated, encrypted backups ensure data is never lost, even in disasters.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-white p-1 rounded border border-gray-200 text-emerald-500 h-fit">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Controlled Data Access</h3>
                    <p className="text-sm text-gray-600 mt-1">Strict internal protocols govern how our support team accesses customer data.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-white p-1 rounded border border-gray-200 text-emerald-500 h-fit">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Privacy-by-Design</h3>
                    <p className="text-sm text-gray-600 mt-1">Privacy isn't an afterthought; it's embedded in the architecture from day one.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. TRUST BADGE */}
      <section className="py-16 bg-emerald-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Your Trust is Our Foundation</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
            We understand that behind every data point is a real person. 
            We protect your workforce data as if it were our own.
          </p>
          <Link to="/contact">
            <button className="px-6 py-3 bg-white text-emerald-900 font-bold rounded-lg hover:bg-emerald-50 transition-colors">
              Contact Security Team
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Security;