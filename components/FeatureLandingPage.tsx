import React from 'react';

interface FAQ {
  q: string;
  a: string;
}

interface SectionData {
  title: string;
  body: string;
  detail?: string;
  image?: string;
  video?: string;
}

interface ComparisonData {
  label: string;
  us: string;
  them: string;
}

// NEW: Added the optional 'image' property to accept your icon files
interface ProcessStep {
  title: string;
  bullets: string[];
  image?: string; 
}

interface LandingPageProps {
  h1: string;
  subhead: string;
  directAnswer: string;
  heroVideo?: string;
  heroImage?: string;
  
  topCtaText?: string;
  topCtaSubtext?: string;
  bottomCtaHeader?: string;
  bottomCtaText?: string;
  bottomCtaSubtext?: string;
  ctaLink?: string; 
  
  processFlow?: {
    heading: string;
    subheading?: string;
    steps: ProcessStep[];
  };

  sections: SectionData[];
  comparison: ComparisonData[];
  faqs: FAQ[];
}

const FeatureLandingPage: React.FC<LandingPageProps> = ({ 
  h1, subhead, directAnswer, heroVideo, heroImage,
  topCtaText, topCtaSubtext, bottomCtaHeader, bottomCtaText, bottomCtaSubtext, ctaLink,
  processFlow, sections, comparison, faqs 
}) => {
  return (
    <div className="pt-32 pb-20 bg-[#E6E7E9] min-h-screen font-['Outfit']">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* --- ARTICLE HEADER --- */}
        <header className="mb-16 animate-reveal">
          <h1 className="text-5xl md:text-8xl font-bold text-[#002534] serif mb-8 tracking-tighter leading-[0.9]">
            {h1}
          </h1>
          <p className="text-2xl text-[#002534]/60 max-w-3xl font-medium italic mb-10 leading-relaxed">
            {subhead}
          </p>
          
          {topCtaText && ctaLink && (
            <div className="flex flex-col items-start gap-3">
               <a href={ctaLink} className="px-10 py-4 bg-[#002534] text-white font-bold rounded-full hover:bg-black transition-all shadow-lg inline-block text-center">
                  {topCtaText}
               </a>
               {topCtaSubtext && <p className="text-sm text-[#002534]/70 italic pl-2">{topCtaSubtext}</p>}
            </div>
          )}
        </header>

        {/* --- DYNAMIC MEDIA CONTAINER --- */}
        <div className="mb-20 rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-[#002534]/5 animate-reveal relative aspect-video">
          {heroVideo ? (
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src={heroVideo} type="video/mp4" />
            </video>
          ) : heroImage ? (
             <img src={heroImage} alt="Feature Interface" className="w-full h-full object-cover" />
          ) : (
             <div className="w-full h-full flex items-center justify-center bg-white">
                <p className="opacity-20 font-bold uppercase tracking-widest text-xs text-center p-12">
                   Hero Media Placeholder
                </p>
             </div>
          )}
        </div>

        {/* --- THE DIRECT ANSWER --- */}
        <div className="max-w-4xl mb-32 animate-reveal" style={{ animationDelay: '0.2s' }}>
          <p className="text-[10px] font-black text-[#F26422] uppercase tracking-[0.3em] mb-6">The Bottom Line</p>
          <p className="text-3xl md:text-4xl font-bold text-[#002534] serif leading-tight">
            {directAnswer}
          </p>
        </div>

        {/* --- CONNECTED PROCESS FLOW --- */}
        {processFlow && (
          <div className="mb-32 bg-white rounded-[3rem] p-12 shadow-sm border border-[#002534]/5 animate-reveal">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#002534] serif mb-4">{processFlow.heading}</h2>
              {processFlow.subheading && <p className="text-xl text-[#002534]/60">{processFlow.subheading}</p>}
            </div>
            
            <div className="relative">
              {/* Adjusted the connecting line to align perfectly with the middle of the new, larger icon containers */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-[#E6E7E9] z-0">
                 <div className="h-full bg-[#00B6A0] w-full origin-left scale-x-100 transition-transform duration-1000"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-12 relative z-10">
                {processFlow.steps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    
                    {/* The Image/Number Container */}
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-4 border-[#00B6A0] shadow-lg mb-8 relative z-10 overflow-hidden p-4">
                      {step.image ? (
                        <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
                      ) : (
                        <span className="text-3xl font-bold text-[#002534]">{idx + 1}</span>
                      )}
                    </div>

                    {/* The Content */}
                    <h3 className="text-2xl font-bold text-[#F26422] mb-6 text-center">{step.title}</h3>
                    <ul className="space-y-4 w-full">
                      {step.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start text-[#002534]/80 font-medium">
                          <svg className="w-5 h-5 text-[#00B6A0] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- DETAILED CONTENT SECTIONS --- */}
        <div className="space-y-32 mb-32">
          {sections.map((section, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-16 items-center animate-reveal ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2">
                <div className="w-16 h-1 bg-[#B87333] mb-8" />
                <h2 className="text-4xl font-bold text-[#002534] serif mb-6">{section.title}</h2>
                <p className="text-xl text-[#002534]/70 leading-relaxed mb-6">{section.body}</p>
                {section.detail && <p className="text-lg text-[#002534]/50 leading-relaxed border-l-2 border-[#002534]/10 pl-6 italic">{section.detail}</p>}
              </div>
              <div className="md:w-1/2 w-full aspect-square bg-white rounded-[2.5rem] shadow-sm border border-[#002534]/5 flex items-center justify-center p-12 overflow-hidden relative">
                 {section.image ? (
                    <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                 ) : (
                    <p className="opacity-20 font-bold uppercase tracking-widest text-xs text-center p-12">
                      Screenshot / Video Placeholder
                    </p>
                 )}
              </div>
            </div>
          ))}
        </div>

        {/* --- THE COMPETITIVE EDGE (Comparison Chart) --- */}
        <div className="bg-[#002534] rounded-[3rem] p-12 md:p-20 text-white mb-32">
          <h2 className="text-4xl md:text-5xl font-bold serif mb-12 text-center">Why this is different</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest opacity-40">
                  <th className="pb-6 w-1/2">Capabilities</th>
                  <th className="pb-6">EmbraceHealth</th>
                  <th className="pb-6">Standard Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparison.map((row, i) => (
                  <tr key={i} className="group">
                    <td className="py-6 font-bold serif text-xl">{row.label}</td>
                    <td className="py-6 text-[#00B6A0] font-bold">{row.us}</td>
                    <td className="py-6 text-white/40">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl font-bold text-[#002534] serif mb-12">Common Questions</h2>
          <div className="space-y-12">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <p className="text-xl font-bold text-[#002534] mb-4">{faq.q}</p>
                <p className="text-[#002534]/60 leading-relaxed text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- DYNAMIC FINAL CONVERSION --- */}
        {bottomCtaText && ctaLink && (
          <div className="text-center py-20 bg-white rounded-[4rem] border border-[#002534]/5 shadow-sm mb-20">
            {bottomCtaHeader && <h3 className="text-4xl font-bold serif text-[#002534] mb-8">{bottomCtaHeader}</h3>}
            <div className="flex flex-col items-center gap-4">
               <a href={ctaLink} className="px-16 py-6 bg-[#B87333] text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-all text-xl inline-block">
                  {bottomCtaText}
               </a>
               {bottomCtaSubtext && <p className="text-sm text-[#002534]/70 italic max-w-md mx-auto">{bottomCtaSubtext}</p>}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default FeatureLandingPage;