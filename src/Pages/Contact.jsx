import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, Loader2, Phone } from 'lucide-react';

const Contact = () => {
  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  // Input Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API Call (1.5 seconds delay)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Reset form
      // Yahan tum baad mein apna backend API connect kar sakte ho
    }, 1500);
  };

  return (
    <div className="font-sans">
      
      {/* 1. HERO BANNER */}
      <div className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-sky-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Have questions about our platform or need support? We are here to help.
          </p>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            
            {/* LEFT SIDE: Contact Information */}
            <div className="bg-slate-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Decorative Background Circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-sky-400">Contact Information</h3>
                
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 text-sky-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                      <a href="mailto:support@aitietech.in" className="text-slate-300 hover:text-white transition-colors">
                        support@aitietech.in
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 text-sky-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Our Office</h4>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        42, Sy No. 40/2 And 41/2,<br />
                        Madhavaraju Layout, J P Nagar,<br />
                        Bangalore South, Karnataka,<br />
                        India, 560078
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                <p className="text-slate-400 text-sm">
                  Business Hours: Mon - Fri, 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>

            {/* RIGHT SIDE: Contact Form */}
            <div className="p-10 bg-white relative">
              <AnimatePresence mode="wait">
                
                {status === 'success' ? (
                  // SUCCESS STATE (No Alert, just UI change)
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="h-full flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 mb-8 max-w-xs">
                      Thank you for reaching out. Our team will get back to you shortly at your provided email.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  // FORM STATE
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      {/* Phone (Optional) */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange} 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select 
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-white"
                      >
                        <option value="" disabled>Select a topic</option>
                        <option value="Demo Request">Request a Demo</option>
                        <option value="Sales Inquiry">Sales Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:bg-sky-400 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAP SECTION (Placeholder) */}
      {/* Agar map embed karna ho toh iframe yaha aayega, abhi ke liye visual element */}
      {/* <div className="h-64 w-full bg-slate-200 grayscale relative">
        <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500 font-medium">Map Location Visualization</p>
        </div>
        
      </div> */}

    </div>
  );
};

export default Contact;