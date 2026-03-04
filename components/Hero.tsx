import React from 'react';

const Hero: React.FC = () => {
  const SHOPIFY_BASE = "https://shop.embracehealth.ai";

  const MAIN_WIDGETS = [
    { name: 'Lose Weight', path: `${SHOPIFY_BASE}/collections/weight-loss`, desc: 'Access a range of GLP-1 treatment plans.' },
    { name: 'Have Better Sex', path: `${SHOPIFY_BASE}/collections/erectile-dysfunction`, desc: 'Clinically proven solutions for performance.' },
    { name: 'Regrow Hair', path: `${SHOPIFY_BASE}/collections/hair-loss`, desc: 'Stop hair loss and start growing.' },
    { name: 'Sleep Health', path: `${SHOPIFY_BASE}/collections/sleep`, desc: 'Better rest for a better life.' },
    { name: 'Labs & DNA', path: `${SHOPIFY_BASE}/pages/dna-test-kits`, desc: 'Genetic insights for health.' },
  ];

  const LOWER_FEATURES = [
    { name: 'Physical Intelligence', path: '#' },
    { name: 'Nutrition & Kitchen Intelligence', path: '#' },
    { name: 'Mental Health', path: '#' },
    { name: 'Progress Tracking', path: '#' },
    { name: 'Browse All Features', path: '#' },
  ];

  return (
    <section className="pt-48 pb-32 px-6 md:px-12 bg-[#E6E7E9]">
      <div className="max-w-[1450px] mx-auto">
        <div className="mb-20 animate-reveal">
          <h1 className="text-6xl md:text-[9.5rem] font-bold text-[#002534] serif mb-8 tracking-tighter leading-[0.85]">
            personalized to you
          </h1>
          <p className="text-[#002534]/40 text-2xl font-medium tracking-tight">Customized care starts here</p>
        </div>

        {/* Main 5 Widgets Linked to Shopify */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {MAIN_WIDGETS.map((item, idx) => (
            <a 
              key={item.name} 
              href={item.path}
              className="group p-8 bg-white rounded-[2.5rem] card-shadow-hover transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between min-h-[380px]"
              style={{ animationDelay: `${0.2 + (idx * 0.1)}s` }}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold serif text-[#002534] leading-tight">{item.name}</h3>
                  <div className="text-[#002534]/20 group-hover:text-[#F26422] transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </div>
                </div>
                <p className="text-xs text-[#002534]/40 max-w-[140px] leading-relaxed group-hover:text-[#002534] transition-colors">{item.desc}</p>
              </div>
              {/* Image Placeholder logic from original design would go here */}
              <div className="h-40 bg-gray-50/50 rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors border border-[#002534]/5">
                 <span className="text-[10px] uppercase tracking-widest font-bold opacity-20">Product Preview</span>
              </div>
            </a>
          ))}
        </div>

        {/* Lower Features Row */}
        <div>
          <h4 className="text-[#002534] font-bold mb-8 text-xl serif">Wait, there's more.</h4>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {LOWER_FEATURES.map((feature, idx) => (
              <a 
                key={feature.name}
                href={feature.path}
                className="group flex items-center justify-between p-6 bg-white rounded-3xl card-shadow-hover transition-all duration-500 hover:scale-[1.02]"
                style={{ animationDelay: `${0.7 + (idx * 0.1)}s` }}
              >
                <span className="font-bold text-[#002534] text-[10px] uppercase tracking-widest">{feature.name}</span>
                <div className="text-[#002534]/20 group-hover:text-[#00B6A0] transition-all group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;