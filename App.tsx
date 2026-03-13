import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
            
{/* 1. Physical Intelligence */}
<Route path="/app/physical-intelligence" element={
  <FeatureLandingPage 
    h1="Train with feedback you can actually use"
    subhead="Form coaching, 3D scanning, vitals sync, workout planning, and running support—built into one connected system."
    directAnswer="EmbraceHealth Physical Intelligence combines camera-based movement analysis, body visualization, wearable sync, workout planning, and running support so users can train with clearer feedback and less friction."
    heroVideo="/fitness_int.mp4" // Correctly calling your new video file
    sections={[
      { 
        title: "Move with better mechanics", 
        body: "AI Form Coach gives users a simple score, clear cues, and a visible history of improvement.",
        detail: "Instead of filming a lift and guessing later, users see what needs work and what already improved in real-time." ,
      image: "/ai_form.png"
      },
      { 
        title: "See progress beyond the scale", 
        body: "3D body scans, guided progress photos, and body evolution views make change easier to trust.",
        detail: "When users can see shape, posture, and visual momentum, consistency becomes easier to maintain." ,
        image: "/3d_scan.png"
      },
      { 
        title: "Keep your data in one place", 
        body: "Vision Sync and wearable-linked views reduce manual entry for steps, sleep, and calories.",
        detail: "Your daily signals become part of one progress workflow instead of living across disconnected apps." ,
        image: "/vision_scan.png"
      }
    ]}
    comparison={[
      { label: "Real-time Feedback", us: "AI Form Coach (Sency.ai)", them: "Manual Video Review" },
      { label: "Visual Progress", us: "3D Body Evolutions", them: "Standard Scale Weight" },
      { label: "Data Hub", us: "One Dashboard", them: "5+ Disconnected Apps" }
    ]}
    faqs={[
      { q: "Do I need special hardware?", a: "No, our AI Form Coach works directly through your smartphone camera." },
      { q: "Which wearables sync?", a: "We support Apple Health, Google Fit, Oura, and Garmin." },
      { q: "What about running?", a: "The app includes a dedicated Running Coach for gait and performance tracking." }
    ]}
  />
} />

{/* 2. Nutrition & Kitchen Intelligence */}
<Route path="/app/nutrition-kitchen" element={
  <FeatureLandingPage 
    h1="Nutrition that starts with your camera"
    subhead="Photo-based food logging, recipe generation, meal planning, and kitchen workflows that make healthy eating easier to follow."
    directAnswer="EmbraceHealth Nutrition helps users log food faster, generate ideas from what they already have, build condition-aware meal plans, and turn plans into grocery action."
    heroVideo="/nutrition_hero.mp4" 
    sections={[
      { 
        title: "Log food faster", 
        body: "Photo Macro Logging reduces the friction of manual food search.",
        detail: "Instead of typing every item, users can snap a meal, review the estimate, and move on with their day.",
        image: "/nutrition_macro.png" // <--- Adds an image to Section 1
      },
      { 
        title: "Turn ingredients into decisions", 
        body: "Pantry Chef and MasterChef Replicator take uncertainty out of eating.",
        detail: "Users can scan a fridge for ideas or reverse-engineer a restaurant meal into a smarter at-home version.",
        image: "/pantry_chef.png" // <--- Adds an image to Section 2
      },
      { 
        title: "Plan what you'll actually follow", 
        body: "Clinical Meal Planner and Kitchen Library help users build repeatable meal systems, not random one-off recipes.",
        detail: "Drag-and-drop planning and grocery automation turn good intentions into execution.",
        image: "/meal_planner.png" // <--- Adds an image to Section 3
      }
    ]}
    comparison={[
      { label: "Food Logging", us: "Photo Macro Logging", them: "Manual Database Search (MyFitnessPal)" },
      { label: "Recipe Ideas", us: "AI Pantry Chef & Replicator", them: "Generic Recipe Blogs" },
      { label: "Meal Planning", us: "Clinical & Condition-Aware", them: "Rigid PDF Plans" }
    ]}
    faqs={[
      { q: "How accurate is the photo logging?", a: "Our computer-vision model is trained on food volume and density to provide highly accurate macro and calorie estimates." },
      { q: "Can it handle restaurant meals?", a: "Yes, the MasterChef Replicator can estimate nutrition facts from menu descriptions or photos of restaurant dishes." },
      { q: "Does it build grocery lists automatically?", a: "Yes, when you build a meal plan in the Kitchen Library, the app automatically converts the ingredients into a sorted grocery list." }
    ]}
  />
} />

{/* 3. Mental Health */}
<Route path="/app/mental-health" element={
              <FeatureLandingPage 
                h1="Know your capacity before your day starts"
                subhead="Readiness scoring, self-awareness assessments, mood check-ins, and sleep pathways designed to support follow-through."
                directAnswer="EmbraceHealth Mental Health combines recovery signals, self-assessments, and daily pulse check-ins so users can better understand their energy, motivation, and consistency patterns."
                heroVideo="/mental_hero.mp4" 
                sections={[
                  { 
                    title: "Start with a clearer read on your day", 
                    body: "Readiness Score helps users make more grounded decisions about effort, recovery, and expectations.",
                    detail: "It turns recovery-related inputs into something easier to understand and act on.",
                    image: "/readiness_score.png"
                  },
                  { 
                    title: "Learn your own patterns", 
                    body: "Assessment Hub gives users a structured place to explore self-awareness, motivation, and behavior patterns.",
                    detail: "Instead of vague wellness content, users get a clearer lens on themselves.",
                    image: "/assessment_hub.png"
                  },
                  { 
                    title: "Keep the habit loop alive", 
                    body: "Pulse Mood & Habits makes daily check-ins lightweight enough to sustain.",
                    detail: "That matters because a feature only helps if users actually keep using it.",
                    image: "/pulse_mood.png"
                  }
                ]}
                comparison={[
                  { label: "Daily Insights", us: "Biometric Readiness Score", them: "Subjective Guessing" },
                  { label: "Check-ins", us: "Frictionless Pulse Mood", them: "Heavy Text Journaling" },
                  { label: "Guidance", us: "Personalized Assessment Hub", them: "Generic Wellness Articles" }
                ]}
                faqs={[
                  { q: "How is the Readiness Score calculated?", a: "It analyzes your sleep patterns, heart rate variability (HRV), and previous daily activity to gauge your recovery." },
                  { q: "Are my assessments and mood logs private?", a: "Absolutely. All mental health and personal reflection data is encrypted and securely stored in your Health Wallet." },
                  { q: "Do I have to type long journal entries?", a: "No. Pulse Mood & Habits is designed for quick, one-tap daily check-ins so you stay consistent without feeling burdened." }
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
{/* Catch-all route to prevent blank screens. Sends users home if a link is broken. */}
<Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;