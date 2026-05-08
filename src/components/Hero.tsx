import { motion } from 'motion/react';
import { ShieldCheck, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#f6f3f2] pt-20 pb-20 px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCMN6vYmNgclbr4rfe4P8BS92jSHiszWPQSxFKNuCfeZQ_e0MQxxVQ1tsn9_rDgM4FcbQDGuyqT_wlDctiDDiaNb8jd-v-ZmMvoMMhukGuvVFlU8gSpRzs0wkQK1f8s61gWbmFdLqbJAL6qUXznczTNVqhdmKq5bX_4IiKy965pZcR-nUURkgcj8NdxRNyAtV7gDjQdhbefkqUaLHGNZvkTQhIm8qve5klCxFfgGzJBAzadLGtE7otpb7WDMo-O4y0-7YjvySOHrXg"
          alt="Dental Professional"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start gap-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface leading-[1.1] tracking-tight">
            Creating Beautiful & <span className="text-brand-cyan">Confident Smiles</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Experience precision care in a serene, luxurious environment. We combine state-of-the-art technology with compassionate humanism to redefine your dental journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-brand-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-[0.98] transition-transform shadow-lg shadow-brand-cyan/20">
              Book a Consultation
            </button>
            <button className="border border-brand-cyan text-brand-cyan bg-transparent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-cyan/5 transition-colors">
              Explore Services
            </button>
          </div>
        </motion.div>

        <div className="lg:col-span-5 hidden lg:flex justify-end relative h-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="glass-panel p-8 rounded-[24px] shadow-2xl flex flex-col gap-6 max-w-xs absolute right-0 bottom-[-40px]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center">
                <ShieldCheck className="text-brand-cyan w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-on-surface">10+ Years</h3>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Of Excellence</p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-black/5"></div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center">
                <Users className="text-brand-cyan w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-on-surface">5,000+</h3>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Happy Patients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
