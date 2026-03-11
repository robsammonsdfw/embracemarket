import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroGrid from './components/HeroGrid';
import LabsSection from './components/LabsSection';
import TestosteroneFeature from './components/TestosteroneFeature';
import PromptsList from './components/PromptsList';
import Footer from './components/Footer';
import FeatureLandingPage from './components/FeatureLandingPage';

// Scroll to top component to ensure new pages start at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <HeroGrid />
    <section className="bg-[#B87333] py-40 text-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        <h2 className="text-7xl md:text-9xl font-bold serif mb-12 leading-[0.85] tracking-tighter animate-reveal">
          Access a range of <br /> GLP-1 treatments
        </h2>
        <button className="px-16 py-6 bg-white text-[#B87333] font-bold rounded-full shadow-2xl hover:scale-105 transition-all text-xl">
          See treatment plans
        </button>
      </div>
    </section>

    <LabsSection />

    <section className="py-40 bg-[#2d1b10] text-white">
      <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
         <div className="order-2 lg:order-1 animate-reveal">
            <h2 className="text-7xl md:text-8xl font-bold serif mb-10 tracking-tighter leading-none">it's personal.</h2>
            <p className="max-w-xl text-2xl text-white/50 mb-14 leading-relaxed font-light italic">
              "Personalized wellness isn't just a buzzword. It's about seeing your own data and acting on it."
            </p>
            <button className="px-14 py-6 bg-[#B87333] text-white font-bold rounded-full shadow-2xl transition-all text-xl">
              Get your plan
            </button>
         </div>
         <div className="order-1 lg:order-2 relative animate-reveal">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border border-white/10 group">
               <img src="/hero.png" className="w-full aspect-[4/5] object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000" />
            </div>
         </div>
      </div>
    </section>

    <TestosteroneFeature />
    <PromptsList />
  </>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F9F7F2]">
        <Header onLoginClick={() => console.log('Login Clicked')} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Physical Intelligence Landing Page */}
            <Route path="/app/physical-intelligence" element={
              <FeatureLandingPage 
                h1="Train with feedback you can actually use"
                subhead="Form coaching, 3D scanning, vitals sync, workout planning, and running support—built into one connected system."
                directAnswer="EmbraceHealth Physical Intelligence combines camera-based movement analysis, body visualization, wearable sync, workout planning, and running support so users can train with clearer feedback and less friction."
                sections={[
                  { title: "Move with better mechanics", body: "AI Form Coach gives users a simple score, clear cues, and a visible history of improvement. Instead of filming a lift and guessing what went wrong later, users can see what needs work." },
                  { title: "See progress beyond the scale", body: "3D body scans, guided progress photos, and body evolution views make change easier to trust. When users can see shape and posture, consistency becomes easier to maintain." },
                  { title: "Keep your data in one place", body: "Vision Sync and wearable-linked views reduce manual entry. Steps, sleep, and calories become part of one progress workflow instead of living across disconnected apps." }
                ]}
                faqs={[
                  { q: "Do I need special hardware?", a: "No, our AI Form Coach works directly through your smartphone camera." },
                  { q: "Which wearables sync?", a: "We support Apple Health, Google Fit, Oura, and Garmin." }
                ]}
              />
            } />

            {/* Nutrition & Kitchen Intelligence Landing Page */}
            <Route path="/app/nutrition-kitchen" element={
              <FeatureLandingPage 
                h1="Stop guessing, start logging with vision"
                subhead="Photo macro logging, pantry-based AI recipes, and metabolic insights designed to fit your kitchen."
                directAnswer="Kitchen Intelligence removes the friction of manual logging by using photo-recognition to identify macros and AI to turn what you already have into personalized, goal-aligned meals."
                sections={[
                  { title: "Photo Macro Logging", body: "Skip the database search. Take a photo of your meal and let the AI identify ingredients and estimate macros in seconds." },
                  { title: "The Pantry Chef", body: "Tell the app what is in your kitchen and get immediate recipes that match your current goals and inventory." },
                  { title: "Metabolic Insights", body: "Visualize the relationship between what you eat and how you feel, tracking energy levels against nutritional intake." }
                ]}
                faqs={[
                  { q: "How accurate is photo logging?", a: "Our computer-vision model is trained specifically on food volume and density to provide high-accuracy macro estimates." },
                  { q: "Can it handle restaurant meals?", a: "Yes, the AI Replicator can estimate nutrition facts from menu descriptions or photos of restaurant dishes." }
                ]}
              />
            } />

            {/* Mental Health Landing Page */}
            <Route path="/app/mental-health" element={
              <FeatureLandingPage 
                h1="Connect your mind to your metrics"
                subhead="Mood tracking, AI journaling, and personal resilience scores that link lifestyle to mental clarity."
                directAnswer="Our Mental Health feature helps you identify patterns between your physical habits and your state of mind through interactive journaling and data-driven insights."
                sections={[
                  { title: "Mood & Signal Tracking", body: "Identify specific patterns between your sleep, diet, and mental clarity to understand what drives your best days." },
                  { title: "AI Interactive Journaling", body: "Capture your thoughts through voice or text check-ins. The AI identifies trends and helps you visualize your mental state over time." },
                  { title: "Personal Resilience Score", body: "A daily metric that tells you your current capacity for stress and focus based on your combined biometric data." }
                ]}
                faqs={[
                  { q: "Is my journaling private?", a: "Yes, all mental health data is encrypted and only accessible to you within your secure Health Wallet." },
                  { q: "How does it link to physical data?", a: "The app automatically correlates your mood logs with your sleep and activity data from the same day." }
                ]}
              />
            } />

            {/* Progress Tracking Landing Page */}
            <Route path="/app/progress-tracking" element={
              <FeatureLandingPage 
                h1="Your health data, finally integrated"
                subhead="A digital twin dashboard and secure health wallet that brings clinical and app data into one view."
                directAnswer="Progress Tracking at EmbraceHealth isn't just a list of numbers; it's a secure ecosystem that pulls your clinical results and daily habits into a single, visual Digital Twin."
                sections={[
                  { title: "Digital Twin Dashboard", body: "Visualize your entire health profile in one place. See how your labs, movements, and nutrition work together to form your current baseline." },
                  { title: "The Health Wallet", body: "A secure, portable record of your progress. Keep your clinical standards, telehealth consents, and data history in your pocket." },
                  { title: "Automated Data Sync", body: "Reduce friction by letting the app pull data automatically from your connected devices and previous lab results." }
                ]}
                faqs={[
                  { q: "Can I export my data?", a: "Yes, the Health Wallet allows you to export summaries to share with your outside clinical providers." },
                  { q: "How often does it update?", a: "Your dashboard updates in real-time as data is received from your synced wearables and apps." }
                ]}
              />
            } />

            {/* Browse All App Features */}
            <Route path="/app/features" element={
              <FeatureLandingPage 
                h1="One ecosystem for your total health"
                subhead="Physical, Nutrition, Mental, and Clinical data working together to help you find your baseline."
                directAnswer="The EmbraceHealth app is a connected system where every feature informs the other, giving you a comprehensive view of your wellness that disconnected apps can't provide."
                sections={[
                  { title: "Integrated Intelligence", body: "Experience how your Physical Intelligence data informs your Nutrition needs and impacts your Mental clarity." },
                  { title: "Unified Workflow", body: "Stop jumping between five different apps. Manage your labs, track your lifts, and log your meals in one place." },
                  { title: "AI-Driven Results", body: "Benefit from a system that identifies cross-feature patterns to give you insights that manual tracking misses." }
                ]}
                faqs={[
                  { q: "Is the app free?", a: "Core tracking features are available to all members, with advanced AI coaching included in specific treatment plans." },
                  { q: "Can I use it without a prescription?", a: "Yes, the App Intelligence features can be used independently of our clinical treatment plans." }
                ]}
              />
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;