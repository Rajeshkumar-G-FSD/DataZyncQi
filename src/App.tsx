/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel3D from './components/Carousel3D';
import Services from './components/Services';
import Booking from './components/Booking';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-bg select-none">
      <Navbar />
      <main>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <Carousel3D />
            <Services />
            <About />
            <Booking />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

