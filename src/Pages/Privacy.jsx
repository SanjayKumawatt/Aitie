import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye, FileText, Database } from 'lucide-react';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className="font-sans  bg-gray-50 min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 mb-6 transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-slate-400">Last Updated: {currentDate}</p>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200"
        >
          {/* Intro */}
          <div className="mb-10 border-b border-gray-100 pb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong className="text-slate-900">AITIE TECHNOLOGIES PRIVATE LIMITED</strong> (“AITIE”, “we”, “our”, “us”) is committed to protecting the privacy of individuals and organizations using our HR and payroll software platform.
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-sky-600" size={24} />
              <h2 className="text-xl font-bold text-slate-900">Information We Collect</h2>
            </div>
            
            <div className="ml-9 space-y-6">
              <div className="bg-sky-50 p-5 rounded-lg border border-sky-100">
                <h3 className="font-bold text-slate-800 mb-2">Personal & Employment Data</h3>
                <p className="text-gray-600">Employee names, contact details, employment records, salary components, attendance data, and statutory information.</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-2">System & Usage Data</h3>
                <p className="text-gray-600">IP addresses, device information, browser data, system logs, and interaction data.</p>
              </div>
            </div>
          </section>

          {/* Section 2: Purpose of Collection */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-sky-600" size={24} />
              <h2 className="text-xl font-bold text-slate-900">Purpose of Collection</h2>
            </div>
            <ul className="ml-9 list-disc list-outside space-y-2 text-gray-600 pl-4">
              <li>Operating HR and payroll workflows</li>
              <li>Processing salaries and statutory deductions</li>
              <li>Ensuring compliance and audit readiness</li>
              <li>Improving system performance and features</li>
            </ul>
          </section>

          {/* Section 3: Data Storage & Protection */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-sky-600" size={24} />
              <h2 className="text-xl font-bold text-slate-900">Data Storage & Protection</h2>
            </div>
            <p className="ml-9 text-gray-600 leading-relaxed">
              We apply technical and organizational controls to protect data from unauthorized access, loss, or misuse.
            </p>
          </section>

          {/* Section 4: Data Retention */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-sky-600" size={24} />
              <h2 className="text-xl font-bold text-slate-900">Data Retention</h2>
            </div>
            <p className="ml-9 text-gray-600 leading-relaxed">
              Data is retained only as long as required by operational, contractual, or legal obligations.
            </p>
          </section>

          {/* Section 5: User Rights */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-sky-600" size={24} />
              <h2 className="text-xl font-bold text-slate-900">User Rights</h2>
            </div>
            <p className="ml-9 text-gray-600 leading-relaxed">
              Users may request access, correction, or deletion of personal data subject to applicable laws.
            </p>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;