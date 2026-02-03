import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden font-sans">
      
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700 z-0"></div>
      
      {/* Decorative Background Patterns (Circles/Glows) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -ml-20 -mt-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl -mr-32 -mb-32"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your <br />
            <span className="text-sky-200">HR Operations?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-sky-50 mb-10 leading-relaxed opacity-90">
            Join the forward-thinking companies moving away from manual spreadsheets to 
            AITIE’s intelligent, automated, and compliant workforce platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button */}
            

            {/* Secondary Button */}
            <Link to={"/contact"} className="px-8 py-4 bg-transparent border-2 border-sky-200 text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              <Mail size={20} />
              Contact Sales
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;