import { motion } from 'motion/react';
import { CheckCircle2, Award, ShieldCheck, Star, Quote } from 'lucide-react';

export default function About() {
  const timeline = [
    { year: "2015", title: "Foundation", desc: "DataZync opens its doors, introducing the concept of 'Precision Humanism' to the local community." },
    { year: "2018", title: "Technological Integration", desc: "Implementation of 3D CBCT scanning and digital impression systems, eliminating traditional molds." },
    { year: "2023", title: "Flagship Hospital", desc: "Expansion into our current 10,000 sq ft facility, featuring an in-house ceramics lab and sedation suites." }
  ];

  return (
    <section id="about">
      {/* Vision Section */}
      <div className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -inset-4 bg-[#d8e4ed]/50 rounded-3xl blur-3xl opacity-50"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB86bMi4lPaAITOlZChgm8AttaZzQNsYnuNWKZf5t-e_vf62xY7_arP_XlQlGc5vYukoo2m20DAIZEHsAvPexuZ-ZzhQYJIi41ej5frz1uALjbsL2pQV_l6-EVZwVh058j3wpR7OVqjPHkcV0fRzN53tdY7cSlSO88xdZs3nqX500r54V_nWMWZXu-IsTvnkH-aNq5nafgIk02pheSyuInlAD5ht-9I8LPRtW6JYqikY1ZBtt-d0wKIbM0kkemQ_HWV5zBVDUJP5MdR"
            alt="Dr. Elena Rostova"
            className="w-full h-auto rounded-2xl shadow-2xl relative z-10 border border-white"
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <span className="text-xs font-bold text-[#546067] mb-4 block uppercase tracking-[0.2em]">Our Origin</span>
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-8">The Vision of Dr. Elena Rostova</h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed italic border-l-4 border-brand-cyan/20 pl-6">
            <p>"I realized early in my career that the fear of the dentist was often a fear of the environment, not the procedure. The harsh lights, the clinical smells—it all stripped the humanity from healthcare."</p>
          </div>
          <p className="mt-8 text-on-surface-variant text-lg leading-relaxed">
            Dr. Rostova established DataZync to bridge the gap between technical perfection and holistic comfort. By integrating advanced diagnostic imaging with a serene, spa-like environment, the clinic redefines the standard of oral healthcare.
          </p>
          
          <div className="mt-10 flex items-center gap-4">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5j_jS0qXqVX7Tw7wpR-heAhjs69CQEIHCFhZF3fDZXWxKmeUmBjXxFVwGiC-pIKmX_1g5UMpkw4k7fbGk8-nx_htWbo0cAu5L5dGUUwKdm1J166bqiThIoOX7QywIJhPOZOgGeNt4Lxsc3ggcbUXaqjUJfjGuBOJyoIePBoefqiz4sSoA_tHJ98XaR4OLAokXSDZRcyARg3EjgcaX-UKF334ZcBM7QFU98bWUifg1fMPuDoBf6aKTxhmueAqOb228F2egpbg59zu1"
              alt="Dr. Elena Rostova Signature"
              className="w-14 h-14 rounded-full object-cover border-2 border-brand-cyan/20"
            />
            <div>
              <p className="font-bold text-on-surface">Dr. Elena Rostova</p>
              <p className="text-sm text-[#546067] font-medium">Founder & Chief Medical Officer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Legacy/Timeline */}
      <div className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-on-surface">A Legacy of Excellence</h2>
          <p className="text-on-surface-variant mt-4">Our journey towards redefining dental care.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#d8e4ed] transform md:-translate-x-1/2"></div>
          
          <div className="space-y-20">
            {timeline.map((item, index) => (
              <div key={item.year} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <h3 className="text-2xl font-bold text-on-surface">{item.title}</h3>
                  <p className="text-on-surface-variant mt-2 leading-relaxed">{item.desc}</p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#d8e4ed] border-4 border-white shadow-sm flex items-center justify-center z-10 transition-colors hover:bg-brand-cyan">
                  {index === timeline.length - 1 && <div className="w-2 h-2 rounded-full bg-brand-cyan"></div>}
                </div>
                
                <div className={`w-full md:w-5/12 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <span className={`text-6xl font-black ${index === timeline.length - 1 ? 'text-[#546067]' : 'text-[#e5e2e1]'}`}>{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Highlight */}
      <div className="py-24 bg-[#d8e4ed]/40 px-6 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-16 h-16 text-[#546067]/20 mx-auto mb-6 fill-current" />
          <p className="text-2xl font-bold text-[#121d23] mb-10 leading-relaxed">
            "I never thought I would use the word 'relaxing' to describe a dental visit. The team at DataZync completely changed my perspective. Their attention to detail and genuine care is unmatched."
          </p>
          <div className="font-bold text-[#546067]">
            — Michael T., Patient since 2019
          </div>
        </div>
      </div>

      {/* Recognition */}
      <div className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-on-surface mb-12">Recognized for Excellence</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: CheckCircle2, text: "American Dental Association" },
            { icon: Award, text: "Top Clinic Award 2023" },
            { icon: ShieldCheck, text: "ISO 9001 Healthcare" },
            { icon: Star, text: "5-Star Patient Rating" }
          ].map((badge, idx) => (
            <div key={idx} className="bg-white border border-black/5 rounded-full px-8 py-4 flex items-center gap-3 shadow-md shadow-black/5 hover:scale-105 transition-transform cursor-default">
              <badge.icon className="text-brand-cyan w-6 h-6 fill-brand-cyan/10" />
              <span className="font-semibold text-on-surface">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
