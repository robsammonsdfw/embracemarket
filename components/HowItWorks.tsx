
import React from 'react';
import { HOW_IT_WORKS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
          <div className="animate-reveal">
            <h2 className="text-6xl md:text-8xl font-bold text-[#002534] serif leading-none tracking-tighter mb-8">
              how it <br /> works.
            </h2>
            <p className="text-xl text-[#002534]/60 max-w-md leading-relaxed">
              Modern healthcare doesn't need to be complicated. We've streamlined everything into three simple steps.
            </p>
          </div>
          <div className="hidden lg:block animate-reveal" style={{ animationDelay: '0.2s' }}>
             <div className="p-8 bg-[#E6E7E9] rounded-[3rem] inline-flex items-center space-x-4">
                <span className="w-3 h-3 bg-[#00B6A0] rounded-full animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#002534]">Clinically Verified 24/7</span>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {HOW_IT_WORKS.map((item, idx) => (
            <div 
              key={idx} 
              className="group animate-reveal"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="mb-10 flex items-baseline">
                <span className="text-5xl font-bold text-[#F26422] serif italic opacity-20 group-hover:opacity-100 transition-opacity">
                  {item.step}
                </span>
                <div className="h-px bg-[#002534]/10 flex-grow ml-6"></div>
              </div>
              <h3 className="text-3xl font-bold text-[#002534] serif mb-6">{item.title}</h3>
              <p className="text-lg text-[#002534]/50 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-[#002534]/5 flex flex-col md:flex-row justify-between items-center gap-8 animate-reveal">
           <p className="text-[#002534]/40 font-medium">Licensed in all 50 states.</p>
           <div className="flex space-x-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <span className="text-xl font-black italic tracking-tighter">Telehealth.Co</span>
              <span className="text-xl font-black italic tracking-tighter">MedStandard</span>
              <span className="text-xl font-black italic tracking-tighter">H-Global</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
