import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, CheckCircle2, AlertTriangle, Copyright, Server, Gavel } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      
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
            Terms & Conditions
          </motion.h1>
          <p className="text-slate-400">Please read these terms carefully before using our platform.</p>
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
          
          {/* Section 1: Acceptance */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="text-sky-600" size={24} />
              <h2 className="text-xl font-bold text-slate-900">Acceptance</h2>
            </div>
            <p className="ml-9 text-gray-600 leading-relaxed border-l-4 border-sky-100 pl-4">
              By accessing or using AITIE’s platform, you agree to these Terms.
            </p>
          </section>

          {/* Section 2: Services */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Server className="text-sky-600" size={24} />
              <h2 className="text-xl font-bold text-slate-900">Services</h2>
            </div>
            <p className="ml-9 text-gray-600 leading-relaxed">
              AITIE provides HR and payroll software services on a subscription or usage basis, subject to availability and updates.
            </p>
          </section>

          {/* Section 3: User Obligations */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-sky-600" size={24} />
              <h2 className="text-xl font-bold text-slate-900">User Obligations</h2>
            </div>
            <div className="ml-9">
              <p className="text-gray-600 mb-2">Users are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 bg-gray-50 p-4 rounded-lg">
                <li>Accuracy of data</li>
                <li>Lawful use of the platform</li>
                <li>Security of login credentials</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Intellectual Property */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Copyright className="text-sky-600" size={24} />
              <h2 className="text-xl font-bold text-slate-900">Intellectual Property</h2>
            </div>
            <p className="ml-9 text-gray-600 leading-relaxed">
              All software, designs, and content belong to <strong className="text-slate-800">AITIE TECHNOLOGIES PRIVATE LIMITED</strong>.
            </p>
          </section>

          {/* Section 5: Limitation of Liability */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-sky-600" size={24} />
              <h2 className="text-xl font-bold text-slate-900">Limitation of Liability</h2>
            </div>
            <p className="ml-9 text-gray-600 leading-relaxed">
              Services are provided “as is” to the extent permitted by law.
            </p>
          </section>

          {/* Section 6: Termination */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full border-2 border-sky-600 flex items-center justify-center text-sky-600 font-bold text-xs">!</div>
              <h2 className="text-xl font-bold text-slate-900">Termination</h2>
            </div>
            <p className="ml-9 text-gray-600 leading-relaxed">
              Access may be suspended or terminated for misuse or violation of terms.
            </p>
          </section>

          {/* Section 7: Governing Law */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Gavel className="text-sky-600" size={24} />
              <h2 className="text-xl font-bold text-slate-900">Governing Law</h2>
            </div>
            <p className="ml-9 text-gray-600 leading-relaxed">
              These Terms are governed by the laws of India.
            </p>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;