import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Menu, X, BarChart3 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { storageService } from '../services/storage';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setIsLoggedIn(storageService.isAdminLoggedIn());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', to: 'hero' },
    { name: 'Sobre', to: 'about' },
    { name: 'Serviços', to: 'services' },
    { name: 'Contato', to: 'contact' },
  ];

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-card shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex items-center cursor-pointer"
        >
          <Code className="h-8 w-8 text-primary mr-2" />
          <span className="text-xl font-bold">Paulo Ricardo</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-muted hover:text-primary font-medium transition-colors cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
          {isLoggedIn && (
            <RouterLink
              to="/dashboard"
              className="flex items-center text-muted hover:text-primary font-medium transition-colors"
            >
              <BarChart3 className="h-4 w-4 mr-1" />
              Dashboard
            </RouterLink>
          )}
          <ThemeToggle />
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="btn-primary"
          >
            Solicitar Orçamento
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-muted hover:text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-card absolute top-full left-0 w-full shadow-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-muted hover:text-primary py-2 font-medium"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            {isLoggedIn && (
              <RouterLink
                to="/dashboard"
                className="flex items-center text-muted hover:text-primary py-2 font-medium"
                onClick={closeMenu}
              >
                <BarChart3 className="h-4 w-4 mr-1" />
                Dashboard
              </RouterLink>
            )}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="btn-primary"
              onClick={closeMenu}
            >
              Solicitar Orçamento
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;