import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Booking() {
  const [selectedDay, setSelectedDay] = useState(14);
  const slots = ["09:00 AM", "10:30 AM", "01:00 PM", "03:00 PM"];
  const [selectedSlot, setSelectedSlot] = useState("01:00 PM");

  return (
    <section id="booking" className="py-24 px-6 bg-[#d8e4ed]/20 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 md:p-16 shadow-2xl bg-white/80"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-4">Reserve Your Visit</h2>
            <p className="text-lg text-on-surface-variant">Select your preferred time for a consultation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Calendar Mock */}
            <div>
              <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6">Select Date</h3>
              <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <button className="p-1 hover:bg-black/5 rounded"><ChevronLeft className="w-5 h-5 text-on-surface-variant" /></button>
                  <span className="font-semibold text-on-surface">October 2024</span>
                  <button className="p-1 hover:bg-black/5 rounded"><ChevronRight className="w-5 h-5 text-on-surface-variant" /></button>
                </div>
                
                <div className="grid grid-cols-7 gap-2 text-center mb-4">
                  {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                    <span key={day} className="text-[10px] font-bold text-[#747878] uppercase">{day}</span>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {[...Array(31)].map((_, i) => {
                    const day = i + 1;
                    const isSelected = selectedDay === day;
                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`py-2 text-sm rounded-lg transition-all ${
                          isSelected 
                            ? 'bg-brand-cyan text-white shadow-md font-bold' 
                            : 'hover:bg-black/5 text-on-surface'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Slots & Form */}
            <div className="flex flex-col">
              <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6">Available Slots</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {slots.map(slot => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all border ${
                      selectedSlot === slot
                        ? 'bg-brand-cyan/5 border-brand-cyan text-brand-cyan'
                        : 'border-black/10 text-on-surface hover:border-brand-cyan'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full rounded-xl border border-black/10 bg-white/50 px-5 py-4 focus:outline-none focus:border-brand-cyan transition-all text-sm shadow-inner"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full rounded-xl border border-black/10 bg-white/50 px-5 py-4 focus:outline-none focus:border-brand-cyan transition-all text-sm shadow-inner"
                />
                <button className="w-full bg-brand-cyan text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-cyan-hover transition-all mt-4 shadow-lg shadow-brand-cyan/20">
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
