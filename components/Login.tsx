
import React, { useState } from 'react';

interface LoginProps {
  onBack: () => void;
}

const Login: React.FC<LoginProps> = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Placeholder for the Backend Lambda Service URL
      const LAMBDA_URL = 'https://api.embracehealth.ai/auth/login'; 
      
      const response = await fetch(LAMBDA_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials or service unavailable.');
      }

      const data = await response.json();
      // Handle successful login (e.g., save token, redirect)
      console.log('Login successful:', data);
      alert('Login successful! (Simulated)');
    } catch (err: any) {
      setError(err.message || 'An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E6E7E9] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[3rem] shadow-2xl p-12 animate-reveal">
        <button 
          onClick={onBack}
          className="mb-8 text-[#002534]/40 hover:text-[#002534] transition-colors flex items-center text-sm font-bold uppercase tracking-widest"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </button>

        <div className="mb-12">
          <h2 className="text-5xl font-bold text-[#002534] serif mb-4 tracking-tighter">Welcome back.</h2>
          <p className="text-[#002534]/50 font-medium">Access your personalized health dashboard.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#002534]/40 mb-2 ml-4">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 bg-[#F9F7F2] border border-transparent focus:border-[#00B6A0] rounded-full outline-none transition-all text-[#002534] font-medium"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#002534]/40 mb-2 ml-4">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 bg-[#F9F7F2] border border-transparent focus:border-[#00B6A0] rounded-full outline-none transition-all text-[#002534] font-medium"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="p-4 bg-red-50 text-red-500 text-sm rounded-2xl font-medium border border-red-100">
              {error}
            </div>
          )}

          <button 
            type="submit"
            disabled={loading}
            className={`w-full py-5 bg-[#002534] text-white font-bold rounded-full shadow-xl transition-all hover:bg-black flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : 'Sign In'}
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#002534]/40 font-medium">
            Don't have an account? <a href="#" className="text-[#F26422] font-bold">Start your visit</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
