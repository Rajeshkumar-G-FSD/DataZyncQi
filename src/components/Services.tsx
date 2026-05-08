import { motion } from 'motion/react';
import { Stethoscope, UserRound, Sparkles, Box, ArrowRight, ExternalLink } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs font-bold text-brand-cyan uppercase tracking-[0.2em] mb-4 block">Clinical Excellence</span>
        <h2 className="text-4xl md:text-5xl font-bold text-on-surface">Comprehensive Care</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[minmax(300px,auto)]">
        {/* Main Service Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-8 bg-white rounded-2xl p-10 border border-black/5 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#d8e4ed]/30 to-transparent pointer-events-none"></div>
          <div>
            <div className="w-14 h-14 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-6">
              <Stethoscope className="text-brand-cyan w-8 h-8" />
            </div>
            <h3 className="text-3xl font-semibold text-on-surface mb-4">Cosmetic Dentistry</h3>
            <p className="text-on-surface-variant max-w-md text-lg leading-relaxed">
              Transform your smile with our premium veneers, whitening, and aesthetic contouring services tailored to your unique facial structure.
            </p>
          </div>
          <div className="mt-8">
            <button className="text-brand-cyan font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
              Learn more <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Implantology */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-4 bg-[#d8e4ed] rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center mb-6">
              <UserRound className="text-[#546067] w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-[#121d23] mb-4">Implantology</h3>
            <p className="text-[#3d484f] leading-relaxed">
              State-of-the-art titanium implants for permanent, natural-looking restoration.
            </p>
          </div>
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#121d23] shadow-sm self-end">
            <ExternalLink className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Pediatric Care */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-4 bg-white rounded-2xl p-10 border border-black/5 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-6">
              <Sparkles className="text-brand-cyan w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-on-surface mb-4">Pediatric Care</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Gentle, fear-free dentistry for our youngest patients in a welcoming environment.
            </p>
          </div>
        </motion.div>

        {/* Premium Service */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-8 bg-white rounded-2xl p-10 border border-[#D4AF37]/20 shadow-lg shadow-[#D4AF37]/5 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 bg-gold-gradient"
        >
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-6 text-[#D4AF37] font-bold text-xs uppercase tracking-widest">
              Premium Service
            </div>
            <h3 className="text-3xl font-semibold text-on-surface mb-4">Full Mouth Rehabilitation</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              A comprehensive reconstructive approach restoring function, health, and aesthetics to your entire mouth using advanced 3D planning and custom prosthetics.
            </p>
          </div>
          <div className="w-[140px] h-[140px] rounded-full bg-[#f1edec] flex items-center justify-center shrink-0 border border-black/5">
            <Box className="w-16 h-16 text-[#747878]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
