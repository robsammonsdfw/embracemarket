import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HeroGrid from './components/HeroGrid';
import LabsSection from './components/LabsSection';
import TestosteroneFeature from './components/TestosteroneFeature';
import PromptsList from './components/PromptsList';
import Footer from './components/Footer';
import FeatureLandingPage from './components/FeatureLandingPage';
import SleepQuiz from './components/SleepQuiz';

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

    {/* 1. THE ACTION BAR: GLP-1 Options */}
    <section className="bg-[#B87333] py-8 text-white relative overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-5">
          <div className="hidden md:flex bg-white/20 p-2 rounded-xl backdrop-blur-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold serif tracking-tighter leading-tight">
            Weight Loss Options
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="hidden xl:flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
    {/* Added normal-case here to override the parent's uppercase class */}
    <span className="normal-case">Licensed MD's</span> 
    <span className="w-1 h-1 bg-white/30 rounded-full"></span>
    <span>Free Shipping</span>
    <span className="w-1 h-1 bg-white/30 rounded-full"></span>
    <span>100% Online</span>
</div>
          <a href="https://shop.embracehealth.ai/collections/weight-loss" className="px-10 py-4 bg-white text-[#B87333] font-bold rounded-full shadow-lg hover:scale-105 transition-all text-sm">
            Explore Treatments
          </a>
        </div>
      </div>
    </section>

    {/* 2. THE SLEEP HOOK: Animated background with grounded foreground image */}
{/* RESTORED: Fixed height on desktop (780px). Image will sit perfectly on the bottom again. */}
<section className="relative w-full bg-[#002534] min-h-[100svh] md:h-[765px] overflow-hidden flex lg:items-center">

      {/* The Dynamic Movie (Full Width Background) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover grayscale brightness-150 contrast-125"
        >
          <source src="/sleep_bg.mp4" type="video/mp4" />
        </video>
        {/* Gradient to fade edges into the dark blue */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002534] via-transparent to-[#002534]"></div>
      </div>

      <div className="max-w-[1450px] mx-auto px-6 md:px-12 w-full h-full grid lg:grid-cols-2 items-center relative z-20">
        
        {/* LEFT SIDE: Grounded Person (Properly scaled foreground image) */}
        <div className="absolute bottom-0 left-0 lg:left-12 w-full lg:w-1/2 h-[85%] flex justify-center lg:justify-start items-end pointer-events-none">
          <img 
            src="/sleep_man.png" 
            className="h-full w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            alt="Struggling to sleep" 
          />
        </div>

{/* RIGHT SIDE: Strategic Verbiage */}
<div className="lg:col-start-2 pt-8 pb-[22rem] lg:pb-0 lg:py-0 lg:pl-20 relative z-30">
          <h2 className="text-5xl md:text-7xl font-bold serif tracking-tighter leading-[0.95] mb-6 text-white">
          Sleep Apnea Care...<br />
            <span className="text-[#F26422]">Test at Home. Treat with the right option.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-6 leading-relaxed max-w-lg">
          Start with a Home Sleep Test (HST) to confirm obstructive sleep apnea. If diagnosed, our board certified sleep physicians help you choose effective therapy—CPAP or Oral Appliance Therapy (OAT)—based on your needs and comfort.
          </p>
          
          <a href="/article/science-of-glp1" className="inline-block text-[#00B6A0] font-medium text-base md:text-lg underline underline-offset-4 mb-8 hover:text-white transition-colors">
            Did you know poor sleep is directly correlated to weight retention? Learn the science.
          </a>

{/* All 3 specific bullet points with custom icons */}
<ul className="space-y-3 mb-10">
            {/* 1. Home Sleep Testing - Moon Icon */}
            <li className="flex items-center text-white/90 font-bold text-base md:text-lg">
              <svg className="w-5 h-5 text-[#F26422] mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              Home Sleep Testing (HST) – "Simple at-home testing to confirm OSA"
            </li>
            
            {/* 2. Results Review - Clinical Document Icon */}
            <li className="flex items-center text-white/90 font-bold text-base md:text-lg">
              <svg className="w-5 h-5 text-[#F26422] mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Results Review – "Clear next steps based on severity + symptoms"
            </li>
            
            {/* 3. Treatment Options - Medical Shield Icon */}
            <li className="flex items-center text-white/90 font-bold text-base md:text-lg">
              <svg className="w-5 h-5 text-[#F26422] mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              Treatment Options – CPAP or OAT (oral appliance).
            </li>
          </ul>

          <a 
            href="/app/sleep-health" 
            className="inline-block px-10 py-4 bg-[#00B6A0] text-white font-black uppercase tracking-widest text-[12px] rounded-full shadow-2xl hover:scale-105 hover:bg-white hover:text-[#002534] transition-all"
          >
            Explore Sleep Solutions
          </a>
        </div>
      </div>
    </section>

    {/* 3. THE DNA SECTION (White Background) */}
    <section className="py-24 bg-white">
      <div className="max-w-[1450px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
        <div className="animate-reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold serif text-[#002534] tracking-tighter leading-[1.05] mb-6">
            DNA Testing for Obesity Phenotyping <br />
            <span className="text-[#00B6A0]">Made Simple & Easy.</span>
          </h2>
          
          <p className="text-xl text-[#002534]/80 mb-6 leading-relaxed">
            We’ve brought together the brightest minds in health and fitness to deliver cutting-edge science, expert guidance, and proven strategies for lasting results.
          </p>
          
          <p className="text-xl text-[#002534]/80 mb-10 leading-relaxed">
            By analyzing traits that influence appetite and energy balance, our DNA Test identifies a patient’s root-cause (phenotype) and informs what will work better based on peer-reviewed clinical studies.
          </p>
          
          <div className="mb-10 bg-[#F9F7F2] p-6 rounded-3xl border border-[#002534]/5">
            <h3 className="text-xl font-bold text-[#002534] mb-2 flex items-center">
              Privacy Guaranteed
            </h3>
            <p className="text-base text-[#002534]/70 leading-relaxed">
              Your DNA privacy is our utmost priority. Rigorous security measures are employed to ensure your data remains confidential and protected throughout your health journey.
            </p>
          </div>

          <a 
            href="https://shop.embracehealth.ai/pages/dna-test-kits"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-[#00B6A0] font-bold text-lg underline underline-offset-4 hover:text-[#002534] transition-colors"
          >
            Learn more...
          </a>
        </div>

        {/* RIGHT SIDE: Video replaces the static image */}
        <div className="relative bg-[#F9F7F2] rounded-[4rem] p-4 md:p-8 overflow-hidden flex justify-center items-center shadow-inner group">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-auto rounded-[3rem] z-10 drop-shadow-2xl transition-transform duration-1000 group-hover:scale-[1.02]"
          >
            <source src="/dna_helix.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>

    <PromptsList />
  </>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F9F7F2]">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sleep-quiz" element={<SleepQuiz />} />
            {/* 1. Physical Intelligence */}
            <Route path="/app/physical-intelligence" element={
              <FeatureLandingPage 
                h1="Train with feedback you can actually use"
                subhead="Form coaching, 3D scanning, vitals sync, workout planning, and running support—built into one connected system."
                directAnswer="EmbraceHealth Physical Intelligence combines camera-based movement analysis, body visualization, wearable sync, workout planning, and running support so users can train with clearer feedback and less friction."
                heroVideo="/fitness_int.mp4"
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
            } />wwa

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
                    image: "/nutrition_macro.png"
                  },
                  { 
                    title: "Turn ingredients into decisions", 
                    body: "Pantry Chef and MasterChef Replicator take uncertainty out of eating.",
                    detail: "Users can scan a fridge for ideas or reverse-engineer a restaurant meal into a smarter at-home version.",
                    image: "/pantry_chef.png"
                  },
                  { 
                    title: "Plan what you'll actually follow", 
                    body: "Clinical Meal Planner and Kitchen Library help users build repeatable meal systems, not random one-off recipes.",
                    detail: "Drag-and-drop planning and grocery automation turn good intentions into execution.",
                    image: "/meal_planner.png"
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

            {/* 4. Progress Tracking */}
            <Route path="/app/progress-tracking" element={
              <FeatureLandingPage 
                h1="Your health data, finally integrated"
                subhead="A digital twin dashboard and secure health wallet that brings clinical and app data into one view."
                directAnswer="Progress Tracking at EmbraceHealth isn't just a list of numbers; it's a secure ecosystem that pulls your clinical results and daily habits into a single, visual Digital Twin."
                heroVideo="/dna_app.mp4" 
                sections={[
                  { 
                    title: "See your whole picture", 
                    body: "The Digital Twin Dashboard visualizes your entire health profile in one place.",
                    detail: "See exactly how your lab results, daily movements, and nutrition work together to form your current baseline.",
                    image: "/digital_twin.png"
                  },
                  { 
                    title: "Own your medical history", 
                    body: "The Health Wallet creates a secure, portable record of your progress.",
                    detail: "Keep your clinical standards, telehealth consents, and historical lab data right in your pocket.",
                    image: "/health_wallet.png"
                  },
                  { 
                    title: "Eliminate manual entry", 
                    body: "Automated Data Sync reduces friction by pulling data automatically.",
                    detail: "Connected devices and previous lab results populate your dashboard without you having to type a thing.",
                    image: "/auto_sync.png"
                  }
                ]}
                comparison={[
                  { label: "Data View", us: "Unified Digital Twin", them: "Scattered PDF Lab Results" },
                  { label: "Storage", us: "Secure Health Wallet", them: "Unsecure Email Attachments" },
                  { label: "Updates", us: "Real-time Automated Sync", them: "Manual Typing & Uploads" }
                ]}
                faqs={[
                  { q: "Can I export my data?", a: "Yes, the Health Wallet allows you to securely export summaries to share with your outside clinical providers." },
                  { q: "How often does it update?", a: "Your dashboard updates in real-time as data is received from your synced wearables and lab partners." }
                ]}
              />
            } />

            {/* 5. Browse All App Features */}
            <Route path="/app/features" element={
              <FeatureLandingPage 
                h1="One ecosystem for your total health"
                subhead="Physical, Nutrition, Mental, and Clinical data working together to help you find your baseline."
                directAnswer="The EmbraceHealth app is a connected system where every feature informs the other, giving you a comprehensive view of your wellness that disconnected apps can't provide."
                heroVideo="/features_hero.mp4" 
                sections={[
                  { 
                    title: "Integrated Intelligence", 
                    body: "Experience how your Physical Intelligence data informs your Nutrition needs and impacts your Mental clarity.",
                    detail: "When your app knows how you slept and lifted, it can tell you exactly what to eat.",
                    image: "/integrated_intel.png"
                  },
                  { 
                    title: "Unified Workflow", 
                    body: "Stop jumping between five different apps.",
                    detail: "Manage your clinical labs, track your lifts, and log your meals in one seamless environment.",
                    image: "/unified_workflow.png"
                  },
                  { 
                    title: "AI-Driven Results", 
                    body: "Benefit from a system that identifies cross-feature patterns.",
                    detail: "Get actionable insights that manual tracking across disconnected platforms completely misses.",
                    image: "/ai_results.png"
                  }
                ]}
                comparison={[
                  { label: "Data Interaction", us: "Cross-Feature Insights", them: "Isolated Silos" },
                  { label: "App Workflow", us: "One Unified Hub", them: "Juggling 5+ Apps" },
                  { label: "Personalization", us: "Adapts to Live Biometrics", them: "Static Daily Goals" }
                ]}
                faqs={[
                  { q: "Is the app free?", a: "Core tracking features are available to all members, with advanced AI coaching included in specific clinical treatment plans." },
                  { q: "Can I use it without a prescription?", a: "Yes, the App Intelligence features can be used independently to track and optimize your baseline, even without a clinical plan." }
                ]}
              />
            } />

            {/* 6. Sleep Health Landing Page (Updated with text from image_c1c98f.png) */}
            <Route path="/app/sleep-health" element={
              <FeatureLandingPage 
                h1="Many people know something is wrong—but don’t know what to do next."
                subhead="Get Started - We’ve made it easy for you."
                directAnswer="Untreated sleep apnea can impact your energy, focus, and overall quality of life. Treatment can help you feel more rested, improve daily performance, sleep more comfortably, and reduce long-term health risks."
                heroVideo="/sleep_hero.mp4" 
                
                ctaLink="/sleep-quiz"
                topCtaText="Take Quiz"
                topCtaSubtext="Find out if you qualify for an at-home sleep test in under 2 minutes."
                bottomCtaHeader="Ready to sleep better?"
                bottomCtaText="Take Quiz"
                bottomCtaSubtext="Take the first step toward reclaiming your energy."

                processFlow={{
                  heading: "STEP 1: Get diagnosed by taking our convenient Home Sleep Test",
                  subheading: "What’s included: Three virtual consultations with a Board-Certified Sleep Physician consisting of:",
                  steps: [
                    {
                      title: "1. Pre-Qualifying Consultation",
                      image: "/sleep_step1.png",
                      bullets: [
                        "Doctors will determine if you are a good candidate."
                      ]
                    },
                    {
                      title: "2. Post-Delivery Consultation",
                      image: "/sleep_step2.png",
                      bullets: [
                        "Doctors will explain the setup process."
                      ]
                    },
                    {
                      title: "3. Review Your Results",
                      image: "/sleep_step3.png",
                      bullets: [
                        "Doctors will review your results and recommend treatment.",
                        "Your results report will include a medical insurance-accepted Letter of Medical Necessity (LMN)."
                      ]
                    }
                  ]
                }}

                sections={[
                  { 
                    title: "STEP 2: Once you’ve been diagnosed, we offer:", 
                    body: "CPAP Alternative Therapy with FDA-Cleared Oral Appliances for Mild to Moderate apnea or for those who are CPAP Intolerant or Non-Compliant.",
                    detail: "Medical Insurance-Friendly Guidance for CPAP for Severe and Very Severe apnea. Coordinated Care with Board-Certified Sleep Physicians in all 50 states. Coordinated Care with Board-Certified Dentists (including your own dentist) in all 50 states (Additional fees may apply).",
                    image: "/oral_appliance.png"
                  }
                ]}
                comparison={[
                  { label: "Testing Location", us: "At Home", them: "Clinical Sleep Lab" },
                  { label: "Testing Equipment", us: "WatchPAT® ONE (Wrist/Finger)", them: "Wires glued to head/chest" },
                  { label: "Therapy Experience", us: "Quiet Oral Appliance", them: "Noisy CPAP Machine & Hoses" },
                  { label: "Patient Compliance", us: "Proven 90%+ Success", them: "High Abandonment Rate" }
                ]}
                faqs={[
                  { q: "How much does the at-home test cost?", a: "The WatchPAT® ONE home sleep test and the three included physician consultations cost $259." },
                  { q: "Is this covered by insurance?", a: "We are in-network with Medicare and major PPO carriers for the treatment phase and the custom oral appliances." },
                  { q: "What if my apnea is severe?", a: "Oral appliances are generally indicated for mild to moderate obstructive sleep apnea. If your test reveals severe apnea, our specialists will help guide you toward the most appropriate clinical therapy, which may include CPAP." }
                ]}
              />
            } />

            {/* 7. The Science of GLP-1 Article */}
            <Route path="/article/science-of-glp1" element={
              <FeatureLandingPage 
                h1="The Science of GLP-1"
                subhead="How modern medicine is changing weight loss."
                directAnswer="GLP-1 receptor agonists are not stimulants or crash diets. They are clinically proven biological tools that mimic naturally occurring hormones to regulate appetite, slow gastric emptying, and improve metabolic function—addressing the physiological root causes of weight retention."
                heroVideo="/glp1_hero.mp4" 
                
                topCtaText="Consult a Physician"
                topCtaSubtext="See if a GLP-1 treatment plan is clinically appropriate for your baseline."
                bottomCtaHeader="Ready to address your metabolic health?"
                bottomCtaText="Start Your Evaluation"
                bottomCtaSubtext="Complete your secure intake form to begin."
                ctaLink="/app/weight-loss-quiz"

                sections={[
                  { 
                    title: "The Biology of Fullness", 
                    body: "GLP-1 (Glucagon-like peptide-1) is a hormone naturally produced in your intestines after you eat. It communicates directly with the appetite centers in your brain to signal satiety.",
                    detail: "Medications like Semaglutide and Tirzepatide mimic this natural hormone. They keep you fuller for longer and drastically reduce the psychological 'food noise' that often derails traditional diet attempts.",
                    image: "/glp1_biology.png"
                  },
                  { 
                    title: "Beyond Calorie Counting", 
                    body: "For decades, weight loss was treated strictly as a willpower issue. Modern endocrinology reveals it is largely a metabolic and hormonal condition.",
                    detail: "By addressing biological resistance to weight loss and stabilizing insulin responses, these treatments allow your body to process energy efficiently instead of aggressively storing it as fat.",
                    image: "/metabolic_baseline.png"
                  },
                  { 
                    title: "Proven Clinical Efficacy", 
                    body: "The peer-reviewed data represents a paradigm shift in obesity medicine, demonstrating weight loss percentages historically only seen with bariatric surgery.",
                    detail: "In landmark, double-blind clinical trials, patients using high-dose once-weekly Semaglutide lost an average of 14.9% of their body weight, while those on Tirzepatide saw sustained reductions of up to 20.9%.",
                    image: "/clinical_efficacy.png"
                  }
                ]}
                comparison={[
                  { label: "Mechanism of Action", us: "Biological Hormone Regulation", them: "Metabolism Stimulants / Caffeine" },
                  { label: "Appetite Control", us: "Eliminates 'Food Noise' via the Brain", them: "Relies on Pure Willpower" },
                  { label: "Clinical Weight Loss", us: "15% - 20% Average Reduction", them: "3% - 5% Average Reduction" },
                  { label: "Metabolic Impact", us: "Improves Insulin Sensitivity", them: "Temporary Water/Muscle Loss" }
                ]}
                faqs={[
                  { 
                    q: "Are these treatments safe?", 
                    a: "Yes. GLP-1 medications are FDA-approved for weight management in adults with obesity or overweight with weight-related conditions. The most common side effects are transient gastrointestinal issues (like mild nausea) which typically subside as your body adjusts to the medication." 
                  },
                  { 
                    q: "Do I have to take it forever?", 
                    a: "Obesity is widely recognized by the medical community as a chronic metabolic disease. While some patients successfully taper off by utilizing the physical and nutritional intelligence tools in the EmbraceHealth app to maintain their new baseline, others may require long-term maintenance dosing to prevent weight regain." 
                  },
                  { 
                    q: "Clinical References & Citations", 
                    a: "1. Wilding, J. P. H., et al. (2021). 'Once-Weekly Semaglutide in Adults with Overweight or Obesity.' The New England Journal of Medicine, 384, 989-1002. | 2. Jastreboff, A. M., et al. (2022). 'Tirzepatide Once Weekly for the Treatment of Obesity.' The New England Journal of Medicine, 387, 205-216." 
                  }
                ]}
              />
            } />

            {/* 8. About Us */}
            <Route path="/about" element={
              <FeatureLandingPage 
                h1="Redefining healthcare"
                subhead="Personalized, affordable, and science-backed solutions designed to fit your needs."
                directAnswer="Welcome to EmbraceHealth.ai, where science meets simplicity. Our mission is to empower individuals with accessible, science-backed health solutions that foster confidence, improve well-being, and create lasting change."
                heroVideo="/about_hero.mp4" 
                
                topCtaText="Explore Treatments"
                ctaLink="https://shop.embracehealth.ai" 
                bottomCtaHeader="Ready to redefine your health journey?"
                bottomCtaText="Visit the Telemedicine Shop"
                bottomCtaSubtext="Explore our science-backed treatment options."

                sections={[
                  { 
                    title: "About Us", 
                    body: "We tailor every step to your unique biology and health goals.",
                    detail: "Welcome to Embrace Health.ai, where science meets simplicity to transform your health journey. At our core, we are dedicated to increasing access to care, offering solutions that are affordable, transparent, and supported by the latest advancements in science. Whether you're striving to lose weight, improve nutrition, address hair loss, or enhance men’s health, we’re here with a personalized approach designed to fit your needs.",
                    image: "/about_personalized.png"
                  },
                  { 
                    title: "Our Mission", 
                    body: "Our solutions are rooted in proven clinical research and advanced technology.",
                    detail: "To empower individuals with accessible, science-backed health solutions that foster confidence, improve well-being, and create lasting change.",
                    image: "/about_science.png"
                  },
                  { 
                    title: "Convenience & Support", 
                    body: "All-in-one health support through a single, empathetic ecosystem.",
                    detail: "Access everything through our app and website, enjoy discreet home delivery of medications, and receive expert support from our dedicated clinical partners.",
                    image: "/about_support.png"
                  }
                ]}
                comparison={[
                  { label: "Pricing", us: "Upfront & Cost Transparent", them: "Hidden Fees & Surprises" },
                  { label: "Approach", us: "Personalized to your Biology", them: "One-Size-Fits-All" },
                  { label: "Technology", us: "3D AI & DNA Integration", them: "Standard Symptom Guesswork" },
                  { label: "Delivery", us: "All-in-One App + Home Delivery", them: "Disjointed Clinics & Pharmacies" }
                ]}
                faqs={[
                  { q: "What is your core mission?", a: "To empower individuals with accessible, science-backed health solutions that foster confidence, improve well-being, and create lasting change." },
                  { q: "What makes EmbraceHealth different?", a: "We combine cutting-edge science (like DNA testing and 3D body mapping) with absolute cost transparency and expert medical empathy, ensuring your path to better health is clear, affordable, and fully supported." }
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