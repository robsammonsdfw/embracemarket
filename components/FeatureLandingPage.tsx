/* components/FeatureLandingPage.tsx */
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

interface LandingPageProps {
  h1: string;
  subhead: string;
  directAnswer: string;
  heroVideo?: string;
  heroImage?: string;
  topCtaText: string;
  topCtaSubtext: string;
  bottomCtaText: string;
  bottomCtaSubtext: string;
  sections: SectionData[];
  comparison: ComparisonData[];
  faqs: FAQ[];
}

const FeatureLandingPage: React.FC<LandingPageProps> = ({ 
  h1, subhead, directAnswer, heroVideo, heroImage,
  topCtaText, topCtaSubtext, bottomCtaText, bottomCtaSubtext,
  sections, comparison, faqs 
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
          <div className="flex flex-col items-start gap-3">
             <button className="px-10 py-4 bg-[#002534] text-white font-bold rounded-full hover:bg-black transition-all shadow-lg">
                {topCtaText}
             </button>
             <p className="text-sm text-[#002534]/70 italic pl-2">{topCtaSubtext}</p>
          </div>
        </header>

        {/* --- DYNAMIC MEDIA CONTAINER --- */}
        <div className="mb-20 rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-[#002534]/5 animate-reveal relative aspect-video">
          {heroVideo ? (
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : heroImage ? (
             <img src={heroImage} alt="Feature Interface" className="w-full h-full object-cover" />
          ) : (
             <div className="w-full h-full flex items-center justify-center bg-white">
                <p className="opacity-20 font-bold uppercase tracking-widest text-xs text-center p-12">
                   Hero Video Placeholder
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
        <div className="max-w-3xl mb-32">
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

        {/* --- FINAL CONVERSION --- */}
        <div className="text-center py-20 bg-white rounded-[4rem] border border-[#002534]/5 shadow-sm">
          <h3 className="text-4xl font-bold serif text-[#002534] mb-8">Ready to find your baseline?</h3>
          <div className="flex flex-col items-center gap-4">
             <button className="px-16 py-6 bg-[#B87333] text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-all text-xl">
                {bottomCtaText}
             </button>
             <p className="text-sm text-[#002534]/70 italic">{bottomCtaSubtext}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeatureLandingPage;