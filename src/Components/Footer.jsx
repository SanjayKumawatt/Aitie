import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

import logo from "../assets/logo.png"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-gray-300 font-sans pt-16 pb-8 border-t border-slate-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Column 1: Company Info */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 group">
                            {/* Placeholder Icon/Logo */}
                            <img src={logo} className='h-13 mb-2' alt="" />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold leading-none tracking-tight text-white uppercase">
                                    AITIE TECHNOLOGIES
                                </span>
                                <span className="text-xs font-semibold text-gray-500 tracking-wider">
                                    PRIVATE LIMITED
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            Building the next generation of intelligent HR and Payroll solutions.
                            We empower organizations with accuracy, compliance, and automation.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'Products', path: '/products' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-sky-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                        <div className="space-y-4">

                            {/* Email */}
                            <div className="flex items-start gap-3">
                                <Mail className="text-sky-500 mt-1 flex-shrink-0" size={18} />
                                <a
                                    href="mailto:support@aitietechnologies.in"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    support@aitietechnologies.in
                                </a>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <MapPin className="text-sky-500 mt-1 flex-shrink-0" size={18} />
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    42, Sy No. 40/2 And 41/2, <br />
                                    Madhavaraju Layout, J P Nagar, <br />
                                    Bangalore, Bangalore South, <br />
                                    Karnataka, India, 560078
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Legal */}
                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 text-center md:text-left">
                        &copy; {currentYear} AITIE TECHNOLOGIES PRIVATE LIMITED. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="text-xs text-gray-500 hover:text-sky-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-of-service" className="text-xs text-gray-500 hover:text-sky-400 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;