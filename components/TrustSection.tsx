
import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-40 bg-[#002534] text-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className="text-6xl md:text-8xl font-bold serif tracking-tighter leading-none mb-10">
            trusted by <br /> thousands.
          </h2>
          <div className="flex justify-center space-x-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} width="24" height="24" viewBox="0 0 24 24" fill="#00B6A0"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ))}
          </div>
          <p className="mt-6 text-[#00B6A0] font-bold tracking-widest uppercase text-xs">4.9/5 Average Rating</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <Testimonial 
            quote="The GLP-1 program changed my relationship with food. The medical support is top-notch."
            author="David R."
            treatment="Weight Loss"
          />
          <Testimonial 
            quote="Simple, discreet, and it actually works. The testosterone plan gave me my energy back."
            author="Mark S."
            treatment="TRT Program"
            featured
          />
          <Testimonial 
            quote="I was skeptical about hair loss treatments, but 6 months in and the results are undeniable."
            author="James T."
            treatment="Hair Regrowth"
          />
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({ quote, author, treatment, featured = false }: any) => (
  <div className={`p-12 rounded-[4rem] transition-all duration-700 hover:-translate-y-4 ${featured ? 'bg-[#F26422] text-white shadow-2xl scale-105 z-10' : 'bg-white/5 border border-white/10'}`}>
    <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12 italic">"{quote}"</p>
    <div>
      <p className="font-bold text-lg">{author}</p>
      <p className={`text-sm uppercase tracking-widest font-bold mt-1 ${featured ? 'text-white/60' : 'text-[#00B6A0]'}`}>{treatment}</p>
    </div>
  </div>
);

export default TrustSection;
