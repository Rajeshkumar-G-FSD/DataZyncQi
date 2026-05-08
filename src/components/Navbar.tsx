import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Booking', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white/70 backdrop-blur-xl sticky top-0 w-full z-50 border-b border-black/5 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <div className="font-sans text-2xl font-bold tracking-tight text-on-surface uppercase sm:tracking-widest">
          DataZync
        </div>
        
        <div className="hidden md:flex items-center gap-12 font-medium text-on-surface-variant">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-brand-cyan transition-colors">
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <button className="bg-brand-cyan text-white px-6 py-2.5 rounded-lg hover:bg-brand-cyan-hover transition-all font-semibold hidden md:block shadow-sm">
            Book Appointment
          </button>
          
          <button 
            className="md:hidden text-on-surface p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-black/5 md:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-lg font-medium text-on-surface-variant hover:text-brand-cyan transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                className="bg-brand-cyan text-white px-6 py-3 rounded-lg font-semibold w-full"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
