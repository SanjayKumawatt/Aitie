import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Data structure based on your uploaded images
  const navItems = [
    { title: "Home", path: "/" },
    {
      title: "About",
      path: "/about",
      dropdown: [
        { title: "Mission", path: "/about/mission" },
        { title: "Vision", path: "/about/vision" },
        // { title: "Values", path: "/about/values" },
      ],
    },
    {
      title: "Our Services",
      path: "/services",
    //   dropdown: [
    //     { title: "Permanent Hiring Solutions", path: "/services/permanent-hiring" },
    //     { title: "Contractual Hiring Solutions", path: "/services/contractual-hiring" },
    //     { title: "Recruitment Process Outsourcing", path: "/services/rpo" },
    //     { title: "Payroll Management Services", path: "/services/payroll" },
    //     { title: "HR Training & Development Services", path: "/services/training" },
    //   ],
    },
    { title: "Our Products", path: "/products" },
    {
      title: "Industries We Serve",
      path: "/industries",
    //   dropdown: [
    //     { title: "Information Technology", path: "/industries/it" },
    //     { title: "Consulting", path: "/industries/consulting" },
    //     { title: "Manufacturing", path: "/industries/manufacturing" },
    //     { title: "Real Estate", path: "/industries/real-estate" },
    //     { title: "BFSI", path: "/industries/bfsi" },
    //     { title: "EPC", path: "/industries/epc" },
    //   ],
    },
    // { title: "Career", path: "/career" },
    { title: "Contact", path: "/contact" },
  ];

  // Animation variants for dropdowns
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, display: "none" },
    visible: { 
      opacity: 1, 
      y: 0, 
      display: "block",
      transition: { duration: 0.2 } 
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      transition: { duration: 0.2 },
      transitionEnd: { display: "none" }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            {/* Placeholder Icon/Logo */}
            <img src={logo} className='h-11 ' alt="" />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none tracking-tight text-gray-900 uppercase">
                AITIE TECHNOLOGIES
              </span>
              <span className="text-xs font-semibold text-gray-500 tracking-wider">
                PRIVATE LIMITED
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-sky-600 py-6 border-b-[3px] border-transparent ${
                      isActive ? "border-sky-500 text-sky-600" : "text-gray-700"
                    }`
                  }
                >
                  {item.title}
                  {item.dropdown && <ChevronDown size={14} />}
                </NavLink>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute top-[80%] left-0 w-64 bg-[#222] text-white shadow-xl rounded-sm overflow-hidden"
                      >
                        <div className="flex flex-col py-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="px-5 py-3 text-sm hover:bg-sky-600 transition-colors border-b border-gray-700 last:border-0"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="flex flex-col p-4 space-y-2 max-h-[80vh] overflow-y-auto">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-2">
                  <div className="flex justify-between items-center">
                    <Link
                      to={item.path}
                      className="text-gray-800 font-medium py-2 block w-full"
                      onClick={() => !item.dropdown && setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.dropdown && (
                       <ChevronDown size={16} className="text-gray-400" />
                    )}
                  </div>
                  
                  {/* Mobile Dropdown Items (Always visible for simplicity or you can toggle) */}
                  {item.dropdown && (
                    <div className="pl-4 mt-1 bg-gray-50 rounded-md">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block py-2 text-sm text-gray-600 hover:text-sky-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;