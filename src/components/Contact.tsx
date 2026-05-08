import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Home } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#f6f3f2] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-8">Connect With Us</h2>
          <p className="text-lg text-on-surface-variant mb-12 max-w-lg leading-relaxed">
            Our patient care team is available to assist you with scheduling, consultations, and answering any questions regarding your treatment journey.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/5 shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="text-brand-cyan w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-on-surface">Clinic Address</h4>
                <p className="text-on-surface-variant mt-2 leading-relaxed">
                  1200 Luxury Avenue, Suite 400<br />
                  Metropolis, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/5 shrink-0 group-hover:scale-110 transition-transform">
                <Clock className="text-brand-cyan w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-on-surface">Working Hours</h4>
                <p className="text-on-surface-variant mt-2 leading-relaxed">
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  Saturday: By Appointment Only
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/5 shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="text-brand-cyan w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-on-surface">Direct Line</h4>
                <p className="text-on-surface-variant mt-2 leading-relaxed font-semibold">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Mock */}
        <div className="h-[450px] lg:h-auto w-full rounded-2xl overflow-hidden shadow-2xl relative border border-black/5 bg-white">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBwnk50N42sTreSGbNU9HPJAsZek1YZHHtQB_lFYNx-VrLP1xM2TCPsalrMQyWy62O9qJEc1JuanbQYeMZbhLp3chf7_i-beIgrkobVeENSBW80yftaDMNm-90VhSjh0Sps35Yus2hN_M69dAmARXpXJftqS3rGttEwe88L5_2yT7n2NeZxckYnxA7QBxxo9RG6dxy0PwRyqJpzUgme16o39uHPdCK2rqWhAIPq7938G-hLv8joyZoPdu0c7KnzHsHgO6W4OMIGAS8"
            className="w-full h-full object-cover grayscale opacity-80"
            alt="Clinic Location Map"
          />
          {/* Map Pin Mock */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center border border-brand-cyan/20">
              <Home className="text-brand-cyan w-7 h-7 fill-brand-cyan/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
