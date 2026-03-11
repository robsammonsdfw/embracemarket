import React from 'react';

interface FAQ {
  q: string;
  a: string;
}

interface LandingPageProps {
  h1: string;
  subhead: string;
  directAnswer: string;
  heroImage?: string;
  heroVideo?: string; // New prop for your Midjourney loops
  sections: { title: string; body: string; detail?: string }[];
  comparison: { label: string; us: string; them: string }[];
  faqs: FAQ[];
}

const FeatureLandingPage: React.FC<LandingPageProps> = ({ 
  h1, subhead, directAnswer, heroImage, heroVideo, sections, comparison, faqs 
}) => {
  return (
    <div className="pt-32 pb-20 bg-[#E6E7E9] min-h-screen font-['Outfit']">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header remains the same... */}
        <header className="mb-16 animate-reveal">
          <h1 className="text-5xl md:text-8xl font-bold text-[#002534] serif mb-8 tracking-tighter leading-[0.9]">
            {h1}
          </h1>
          <p className="text-2xl text-[#002534]/60 max-w-3xl font-medium italic mb-10 leading-relaxed">
            {subhead}
          </p>
          <button className="px-10 py-4 bg-[#002534] text-white font-bold rounded-full hover:bg-black transition-all shadow-lg">
            Register Now
          </button>
        </header>

        {/* --- DYNAMIC MEDIA CONTAINER --- */}
        <div className="mb-20 rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-[#002534]/5 animate-reveal relative aspect-video">
          {heroVideo ? (
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={heroImage} alt="Feature Interface" className="w-full h-full object-cover" />
          )}
        </div>

        {/* ...rest of the template (Direct Answer, Sections, Comparison, FAQ) remains the same */}
      </div>
    </div>
  );
};

export default FeatureLandingPage;