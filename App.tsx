import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HeroGrid from './components/HeroGrid';
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
            GLP-1 Options
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="hidden xl:flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
            <span>Licensed MDs</span>
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

    {/* 2. THE SLEEP SECTION (Using former Testosterone Layout Logic) */}
    <section className="relative w-full bg-[#002534] min-h-[600px] md:h-[750px] overflow-hidden flex items-center">
      
      {/* The Dynamic Movie (Full Width Background) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          {/* Note: Update this to your desired sleep background video */}
          <source src="/sleep_bg.mp4" type="video/mp4" />
        </video>
        {/* Gradient to fade edges into the dark blue */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002534] via-transparent to-[#002534]"></div>
      </div>

      <div className="max-w-[1450px] mx-auto px-6 md:px-12 w-full h-full grid lg:grid-cols-2 items-center relative z-20">
        
        {/* LEFT SIDE: Grounded Person (Properly scaled) */}
        <div className="absolute bottom-0 left-0 lg:left-12 w-full lg:w-1/2 h-[85%] flex justify-center lg:justify-start items-end pointer-events-none">
          <img 
            /* Note: Update this to your desired sleep foreground image */
            src="/sleep_man.png" 
            className="h-full w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            alt="Struggling to sleep" 
          />
        </div>

        {/* RIGHT SIDE: Strategic Verbiage (Aligned in the grid) */}
        <div className="lg:col-start-2 py-20 lg:py-0">
          <h2 className="text-5xl md:text-7xl font-bold serif tracking-tighter leading-[0.95] mb-6 text-white">
            Still tired...<br />
            <span className="text-[#F26422]">Even after a full night's sleep?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-6 leading-relaxed max-w-lg">
            If you are experiencing daytime fatigue, waking up frequently, or can't tolerate your CPAP machine, it's time to find your baseline.
          </p>
          
          <a href="/article/science-of-glp1" className="inline-block text-[#00B6A0] font-medium text-base md:text-lg underline underline-offset-4 mb-10 hover:text-white transition-colors">
            Did you know poor sleep is directly correlated to weight retention? Learn the science.
          </a>

          <ul className="space-y-4 mb-12">
            <li className="flex items-center text-white/90 font-bold text-lg">
              <svg className="w-6 h-6 text-[#F26422] mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
              Waking Frequently
            </li>
            <li className="flex items-center text-white/90 font-bold text-lg">
              <svg className="w-6 h-6 text-[#F26422] mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
              Daytime Fatigue
            </li>
            <li className="flex items-center text-white/90 font-bold text-lg">
              <svg className="w-6 h-6 text-[#F26422] mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
              CPAP Intolerance
            </li>
          </ul>

          <a 
            href="/app/sleep-health" 
            className="inline-block px-12 py-5 bg-[#00B6A0] text-white font-black uppercase tracking-widest text-[12px] rounded-full shadow-2xl hover:scale-105 hover:bg-white hover:text-[#002534] transition-all"
          >
            Explore Sleep Solutions
          </a>
        </div>
      </div>
    </section>

    {/* 3. THE BASELINE SECTION: DNA / Conversational logic (White Background) */}
    <section className="py-24 bg-white">
      <div className="max-w-[1450px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
        <div className="animate-reveal">
          <h2 className="text-6xl md:text-8xl font-bold serif text-[#002534] tracking-tighter leading-[0.85] mb-8">
            Find your <br /> baseline.
          </h2>
          <p className="text-2xl text-[#002534]/50 mb-10 leading-relaxed font-light italic max-w-lg">
            "Better data leads to better decisions. Clinical testing reimagined for your home."
          </p>
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div>
              <p className="text-[#00B6A0] font-black text-xs uppercase tracking-widest mb-2">Diagnostics</p>
              <p className="text-[#002534] font-bold">98% Accuracy</p>
            </div>
            <div>
              <p className="text-[#00B6A0] font-black text-xs uppercase tracking-widest mb-2">Speed</p>
              <p className="text-[#002534] font-bold">48hr Results</p>
            </div>
          </div>
          <a 
            href="https://shop.embracehealth.ai/pages/dna-test-kits"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-[#002534] text-white font-bold rounded-full hover:shadow-2xl transition-all text-center"
          >
            Start My DNA Test
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
            <source src="/labsviles.mp4" type="video/mp4" />
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

            {/* 6. Sleep Health Landing Page */}
            <Route path="/app/sleep-health" element={
              <FeatureLandingPage 
                h1="A simple path to better sleep"
                subhead="Frictionless, at-home sleep apnea testing and personalized, non-invasive treatment plans designed for your baseline."
                directAnswer="EmbraceHealth Sleep eliminates the complexities of clinical sleep studies. We provide highly accurate home testing, integrate with major insurance, and offer comfortable CPAP alternatives like custom oral appliances for proven results."
                heroVideo="/sleep_hero.mp4" 
                
                ctaLink="https://dummy-quiz-link.com/sleep-test" 
                topCtaText="Take The First Step"
                topCtaSubtext="Click the button to take your Sleep Quiz now and get help with sleep apnea."
                bottomCtaHeader="Ready to sleep better?"
                bottomCtaText="Take The First Step"
                bottomCtaSubtext="Click the button to take your Sleep Quiz now and get help with sleep apnea."

                processFlow={{
                  heading: "A simple, transparent process",
                  subheading: "EmbraceHealth handles everything from online evaluation to delivery of treatment and free ongoing care.",
                  steps: [
                    {
                      title: "Start Your Journey",
                      image: "/step1_phone.png",
                      bullets: [
                        "Select Your Treatment Focus",
                        "Choose Your Medication",
                        "Checkout & Complete Your Health Questionnaire"
                      ]
                    },
                    {
                      title: "Doctor Review",
                      image: "/step2_rx.png",
                      bullets: [
                        "A licensed US physician reviews your information.",
                        "Physician will determine what is medically appropriate for you.",
                        "Your prescription is sent to our pharmacy."
                      ]
                    },
                    {
                      title: "Discrete Delivery",
                      image: "/step3_box.png",
                      bullets: [
                        "Shipping is included.",
                        "Discreet packaging is used.",
                        "Delivered to your doorstep."
                      ]
                    }
                  ]
                }}

                sections={[
                  { 
                    title: "The frictionless home test", 
                    body: "Forget cumbersome, expensive, in-lab sleep studies. EmbraceHealth brings the test directly to your door.",
                    detail: "The at-home WatchPAT® ONE test is disposable, accurate, provides results within 24-48 hours, and costs only $259. Experience an 89% correlation with PSG gold standard, all from the comfort of your own bed.",
                    image: "/diagnostics_compare.png"
                  },
                  { 
                    title: "A better way to treat sleep apnea", 
                    body: "If CPAP therapy has been a struggle, we offer proven, comfortable CPAP alternatives like personalized oral sleep appliances.",
                    detail: "Our non-invasive therapies deliver improved real-world outcomes: better sleep, reduced blood pressure, and improved cognition. They are comfortable, quiet, portable, and deliver proven 90%+ compliance compared to just 50% for standard CPAP.",
                    image: "/therapy_compare.png"
                  },
                ]}
                comparison={[
                  { label: "Testing Location", us: "At Home", them: "Clinical Sleep Lab" },
                  { label: "Test Method", us: "At-Home WatchPAT® (98% success rate)", them: "In-Lab Sleep Study ( cumbersome)" },
                  { label: "Therapy Options", us: "Comfortable CPAP Alternatives (Custom Oral Appliances)", them: "Generic CPAP Machines" },
                  { label: "Patient Compliance", us: "Proven 90%+", them: "~50% for CPAP" }
                ]}
                faqs={[
                  { q: "Is the home sleep test accurate?", a: "Yes, the WatchPAT® test is FDA-cleared and provides a highly accurate correlation (89%) with the gold standard gold in-lab PSG tests." },
                  { q: "Is this covered by insurance?", a: "We are in-network with Medicare and major PPO carriers for your convenience." },
                  { q: "Do I have to wear a large CPAP mask?", a: "No. Our personalized therapies use comfortable oral appliances that are quiet, non-invasive, and require no hoses or straps." }
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