import React from 'react';

interface FAQ {
  q: string;
  a: string;
}

interface LandingPageProps {
  h1: string;
  subhead: string;
  directAnswer: string;
  sections: { title: string; body: string }[];
  faqs: FAQ[];
  accentColor?: string;
}

const FeatureLandingPage: React.FC<LandingPageProps> = ({ 
  h1, subhead, directAnswer, sections, faqs, accentColor = "#B87333" 
}) => {
  return (
    <div className="pt-32 pb-20 bg-[#E6E7E9] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Hero Section */}
        <header className="mb-20 animate-reveal">
          <h1 className="text-6xl md:text-8xl font-bold text-[#002534] serif mb-8 tracking-tighter leading-none">
            {h1}
          </h1>
          <p className="text-2xl text-[#002534]/60 max-w-2xl font-medium italic mb-10">
            {subhead}
          </p>
          <button className="px-12 py-5 bg-[#002534] text-white font-bold rounded-full hover:bg-black transition-all shadow-xl active:scale-95">
            Register Now
          </button>
        </header>

        {/* Direct Answer Box */}
        <div className="bg-white rounded-[3rem] p-12 mb-20 shadow-sm border border-[#002534]/5 animate-reveal" style={{ animationDelay: '0.2s' }}>
          <p className="text-2xl text-[#002534] leading-relaxed font-medium">
            {directAnswer}
          </p>
        </div>

        {/* Feature Sections */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {sections.map((section, idx) => (
            <div key={idx} className="animate-reveal" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
              <div className="w-12 h-1 bg-[#F26422] mb-8" />
              <h3 className="text-3xl font-bold text-[#002534] serif mb-6">{section.title}</h3>
              <p className="text-lg text-[#002534]/60 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl animate-reveal" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-4xl font-bold text-[#002534] serif mb-12">Common Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#002534]/10 pb-8">
                <p className="text-xl font-bold text-[#002534] mb-4">{faq.q}</p>
                <p className="text-[#002534]/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
            <button className="px-16 py-6 bg-[#B87333] text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-all text-xl">
                Signup Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureLandingPage;