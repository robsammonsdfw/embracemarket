import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SleepQuiz: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // State to hold the actual answers
  const [stopBang, setStopBang] = useState<Record<number, string>>({});
  const [epworth, setEpworth] = useState<Record<number, number>>({});
  const [medicalHistory, setMedicalHistory] = useState<Record<string, boolean>>({});

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Auth Check (Temporarily forced to false until we build the Shopify Login)
    const isAuthenticated = false; 
    const currentUserId = null; 

    if (!isAuthenticated) {
      // Save their progress to local storage so they don't lose their answers!
      localStorage.setItem('pendingSleepQuiz', JSON.stringify({ stopBang, epworth, medicalHistory }));
      navigate('/login');
      return; 
    }

    // 2. Exact API Endpoint from your AWS API Gateway
    const API_URL = import.meta.env?.VITE_API_URL || process.env?.REACT_APP_API_URL || 'https://xmpbc16u1f.execute-api.us-west-1.amazonaws.com/default';

    // 3. Secure Fetch Call
    try {
      const response = await fetch(`${API_URL}/sleep-quiz`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}` // Uncomment when login is ready
        },
        body: JSON.stringify({
          userId: currentUserId,
          stopBang,
          epworth,
          medicalHistory
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Quiz saved with ID:", data.id);
        alert("Quiz Completed! Your results have been securely sent to your physician.");
        // navigate('/dashboard'); // Uncomment when dashboard is ready
      } else {
        const errorData = await response.json();
        console.error("Backend Error:", errorData);
        alert("There was an issue saving your results. Please try again.");
      }
    } catch (error) {
      console.error("Network or Submission failed:", error);
      alert("Unable to connect to the server. Please check your connection.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] pt-[160px] pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* PROGRESS BAR */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-bold text-[#002534] uppercase tracking-widest">
              {step === 1 && "Step 1: Stop-Bang Assessment"}
              {step === 2 && "Step 2: Epworth Sleepiness Scale"}
              {step === 3 && "Step 3: Medical History"}
            </h2>
            <span className="text-sm font-medium text-[#002534]/60">
              {step} / {totalSteps}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-[#00B6A0] h-2.5 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* QUIZ FORM */}
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-3xl p-8 md:p-12">
          
          {/* --- PAGE 1: STOP-BANG --- */}
          {step === 1 && (
            <div className="animate-reveal">
              <h1 className="text-3xl font-bold text-[#002534] mb-2 serif">Initial Sleep Screening</h1>
              <p className="text-[#002534]/60 mb-8">Please answer the following yes or no questions.</p>
              
              <div className="space-y-6">
                {[
                  "Do you snore loudly?",
                  "Do you often feel tired, fatigued, or sleepy during the day?",
                  "Has anyone observed you stop breathing during your sleep?",
                  "Do you have or are you being treated for high blood pressure?",
                  "Is your BMI (Body Mass Index) higher than 28?",
                  "Are you 50 years of age or older?",
                  "Male: is your neck size 17\" or greater? Female: 16\" or greater?",
                  "Is your gender male?"
                ].map((question, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#F9F7F2] rounded-2xl border border-[#002534]/5">
                    <label className="text-[#002534] font-medium mb-3 sm:mb-0 sm:mr-4 flex-1">{question}</label>
                    <div className="flex gap-3">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name={`stopbang-${idx}`} 
                          value="yes"
                          checked={stopBang[idx] === 'yes'}
                          onChange={() => setStopBang({...stopBang, [idx]: 'yes'})}
                          className="w-5 h-5 text-[#00B6A0] focus:ring-[#00B6A0] border-gray-300" 
                        />
                        <span className="ml-2 text-[#002534] font-medium">Yes</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name={`stopbang-${idx}`} 
                          value="no"
                          checked={stopBang[idx] === 'no'}
                          onChange={() => setStopBang({...stopBang, [idx]: 'no'})}
                          className="w-5 h-5 text-[#00B6A0] focus:ring-[#00B6A0] border-gray-300" 
                        />
                        <span className="ml-2 text-[#002534] font-medium">No</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- PAGE 2: EPWORTH SLEEPINESS SCALE --- */}
          {step === 2 && (
            <div className="animate-reveal">
              <h1 className="text-3xl font-bold text-[#002534] mb-2 serif">Epworth Sleepiness Scale</h1>
              <p className="text-[#002534]/60 mb-6">
                In the absence of caffeine, energy drinks, etc., how likely are you to doze off or fall asleep in the following situations, in contrast to feeling just tired?
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-[#002534]/5 rounded-2xl text-sm font-medium text-[#002534]">
                <div><span className="font-bold text-[#F26422]">0</span> = Would Never Doze</div>
                <div><span className="font-bold text-[#F26422]">1</span> = Slight Chance</div>
                <div><span className="font-bold text-[#F26422]">2</span> = Moderate Chance</div>
                <div><span className="font-bold text-[#F26422]">3</span> = High Chance</div>
              </div>

              <div className="space-y-6">
                {[
                  "Sitting and reading.",
                  "Watching TV.",
                  "Sitting inactive in a public place (e.g. a theater or a meeting).",
                  "As a passenger in a car for an hour without a break.",
                  "Lying down to rest in the afternoon when circumstances permit.",
                  "Sitting and talking to someone.",
                  "Sitting quietly after lunch without alcohol.",
                  "In a car while stopped for a few minutes in traffic."
                ].map((scenario, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-[#002534]/10 pb-6">
                    <label className="text-[#002534] font-medium mb-3 md:mb-0 md:mr-4 flex-1">{idx + 1}. {scenario}</label>
                    <div className="flex gap-2 justify-between md:justify-end">
                      {[0, 1, 2, 3].map(score => (
                        <label key={score} className="relative cursor-pointer">
                          <input 
                            type="radio" 
                            name={`epworth-${idx}`} 
                            value={score} 
                            checked={epworth[idx] === score}
                            onChange={() => setEpworth({...epworth, [idx]: score})}
                            className="peer sr-only" 
                          />
                          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-200 peer-checked:bg-[#00B6A0] peer-checked:border-[#00B6A0] peer-checked:text-white text-[#002534] font-bold transition-all hover:bg-gray-50">
                            {score}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- PAGE 3: MEDICAL HISTORY --- */}
          {step === 3 && (
            <div className="animate-reveal">
              <h1 className="text-3xl font-bold text-[#002534] mb-2 serif">Medical History</h1>
              <p className="text-[#002534]/60 mb-8">Please check any conditions you currently have or have had in the past.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {[
                  "High Blood Pressure",
                  "Pulmonary Disease",
                  "Congestive Heart Failure",
                  "Heart Disease / Heart attack",
                  "TMJ / TMD? Morning Headaches?",
                  "Diabetes",
                  "Depression / mood Disorders",
                  "History of Stroke(s)",
                  "Nocturia (frequent nighttime trips to bathroom)",
                  "MEN: Erectile Dysfunction",
                  "Sleep Apnea",
                  "Nocturnal Acid Reflux",
                  "Mouth breathing",
                  "Disturbed, restless, or un-refreshed sleep",
                  "Choking or gasping during sleep",
                  "Fragmented sleep",
                  "Frequent arousals/awakening from sleep"
                ].map((condition, idx) => (
                  <label key={idx} className="flex items-start cursor-pointer group p-3 hover:bg-[#F9F7F2] rounded-xl transition-colors">
                    <div className="flex items-center h-5">
                      <input 
                        type="checkbox" 
                        checked={!!medicalHistory[condition]}
                        onChange={(e) => setMedicalHistory({...medicalHistory, [condition]: e.target.checked})}
                        className="w-5 h-5 text-[#00B6A0] bg-white border-gray-300 rounded focus:ring-[#00B6A0]" 
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <span className="font-medium text-[#002534] group-hover:text-[#00B6A0] transition-colors">{condition}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* NAVIGATION BUTTONS */}
          <div className="mt-10 flex items-center justify-between border-t border-[#002534]/10 pt-8">
            <button
              type="button"
              onClick={handleBack}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                step === 1 
                  ? 'opacity-0 pointer-events-none' 
                  : 'bg-white text-[#002534] border-2 border-[#002534]/20 hover:border-[#002534] hover:bg-gray-50'
              }`}
              disabled={step === 1}
            >
              Back
            </button>

            {step < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-10 py-3 bg-[#002534] text-white font-bold rounded-full shadow-lg hover:bg-[#00B6A0] transition-all text-sm"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-10 py-3 bg-[#F26422] text-white font-bold rounded-full shadow-lg hover:bg-[#d9561a] transition-all text-sm"
              >
                Finish Assessment
              </button>
            )}
          </div>

        </form>
      </div>
    </div>
  );
};

export default SleepQuiz;