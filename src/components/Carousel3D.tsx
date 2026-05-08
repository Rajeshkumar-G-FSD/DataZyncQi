import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop",
    title: "Precision Environments",
    desc: "Modern clinical spaces designed for comfort and clarity."
  },
  {
    url: "https://images.unsplash.com/photo-1579154234436-392c553ff770?q=80&w=2070&auto=format&fit=crop",
    title: "Technological Edge",
    desc: "Advanced surgical suites featuring the latest in dental robotics."
  },
  {
    url: "https://images.unsplash.com/photo-1593062361466-22cd5dfda019?q=80&w=2070&auto=format&fit=crop",
    title: "Radiant Outcomes",
    desc: "Achieving biological perfection through data-driven aesthetics."
  },
  {
    url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
    title: "The DataZync Team",
    desc: "World-class professionals committed to your lifelong health."
  }
];

export default function Carousel3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-brand-cyan mb-4 block uppercase tracking-[0.3em]">Excellence in Motion</span>
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface">Precision Visualized</h2>
        </div>

        <div className="relative h-[400px] md:h-[600px] perspective-1000 flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            {images.map((image, index) => {
              const offset = (index - currentIndex + images.length) % images.length;
              const isCenter = offset === 0;
              const isLeft = offset === images.length - 1;
              const isRight = offset === 1;

              if (!isCenter && !isLeft && !isRight) return null;

              return (
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8, 
                    x: direction > 0 ? 300 : -300,
                    rotateY: direction > 0 ? 45 : -45 
                  }}
                  animate={{
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 1 : 0.8,
                    x: isCenter ? 0 : isLeft ? -300 : 300,
                    rotateY: isCenter ? 0 : isLeft ? 45 : -45,
                    zIndex: isCenter ? 10 : 5,
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.8, 
                    x: direction > 0 ? -300 : 300,
                    rotateY: direction > 0 ? -45 : 45
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute w-full max-w-4xl h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                  onClick={() => {
                    if (isLeft) prevSlide();
                    if (isRight) nextSlide();
                  }}
                >
                   <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12 transition-opacity duration-500 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-white/80 text-sm md:text-lg max-w-md">{image.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute inset-x-0 bottom-[-60px] flex justify-center items-center gap-8">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-black/10 hover:bg-brand-cyan hover:border-brand-cyan hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {images.map((_, i) => (
                <div 
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-brand-cyan' : 'bg-black/10'}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full border border-black/10 hover:bg-brand-cyan hover:border-brand-cyan hover:text-white transition-all shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
