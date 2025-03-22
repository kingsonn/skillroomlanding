'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@/lib/supabase';
import dynamic from 'next/dynamic';

const ReactConfetti = dynamic(() => import('react-confetti'), {
  ssr: false
});

// Custom animations for the background blobs
const blobAnimation = {
  initial: { scale: 0.8, opacity: 0.5 },
  animate: {
    scale: [0.8, 1.2, 0.8],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const GameHero = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showHelper, setShowHelper] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Show helper text and highlight effect after scrolling
    setShowHelper(true);
    // Hide helper text after 3 seconds
    setTimeout(() => setShowHelper(false), 3000);

    // Focus the input after scrolling
    setTimeout(() => {
      const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
      if (emailInput) {
        emailInput.focus();
      }
    }, 800); // Wait for scroll to complete
  };

  // Also show helper text when input is focused
  const handleInputFocus = () => {
    setShowHelper(true);
    setTimeout(() => setShowHelper(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) throw error;

      // Show success effects
      setShowConfetti(true);
      setShowSuccessModal(true);
      
      // Hide effects after delay
      setTimeout(() => {
        setShowConfetti(false);
        setShowSuccessModal(false);
      }, 6000);
      
      setSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-blue-600 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={500}
          gravity={0.15}
          wind={0.01}
          colors={['#EAB308', '#FDE047', '#FACC15', '#FFE580', '#60A5FA', '#3B82F6']}
          drawShape={ctx => {
            ctx.beginPath();
            for(let i = 0; i < 6; i++) {
              ctx.lineTo(10 * Math.cos(2 * Math.PI * i / 6), 10 * Math.sin(2 * Math.PI * i / 6));
            }
            ctx.closePath();
            ctx.fill();
          }}
        />
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 px-4"
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <motion.div 
            className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl p-8 shadow-2xl border border-yellow-300/20 relative z-10 max-w-md w-full"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", damping: 12 }}
          >
            <div className="text-center">
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 8, delay: 0.2 }}
              >
                <span className="text-4xl">🎉</span>
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold text-white mb-2 font-libre-baskerville text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Welcome to the Future!
              </motion.h3>
              
              <motion.p 
                className="text-blue-100 font-libre-baskerville text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                You&#39;re now on the waitlist for an incredible learning journey. Get ready to transform your career! &#x1F680;
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[10%] right-[10%] w-[40rem] h-[40rem] bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
          variants={blobAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute top-[20%] left-[15%] w-[35rem] h-[35rem] bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl"
          variants={blobAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[20%] w-[30rem] h-[30rem] bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"
          variants={blobAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Floating Game Elements */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <motion.div
          className="absolute top-20 left-[10%]"
          variants={floatingAnimation}
          animate="animate"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
            <span className="text-2xl">⚔️</span>
          </div>
        </motion.div>
        <motion.div
          className="absolute top-40 right-[15%]"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
            <span className="text-2xl">🏆</span>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-[20%]"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "1s" }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
            <span className="text-2xl">⭐</span>
          </div>
        </motion.div>
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-8 lg:py-20">
        {/* Main Hero Content */}
        <div className="max-w-[85rem] mx-auto">
          <div className="text-center space-y-6 lg:space-y-8 mb-0 md:mt-0 mt-10 lg:mb-24">
            <motion.div
              className="inline-block mb-2 lg:mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-1.5 lg:px-4 lg:py-2 border border-white/20">
                <span className="text-yellow-300 font-semibold text-sm lg:text-base font-libre-baskerville">🎮 Coming Soon</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.2] tracking-tight font-libre-baskerville text-center px-4 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Level Up Your Career
              <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4 my-2 lg:my-4 flex-wrap">
                <span className="lg:hidden font-libre-baskerville text-center w-full">with Supercharged Learning</span>
                <span className="hidden lg:inline font-libre-baskerville">with</span>
                <motion.div
                  className="relative inline-flex items-center justify-center hidden lg:flex"
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: { scale: 1 },
                    animate: {
                      scale: [1, 1.2, 1],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }
                  }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-yellow-300/30 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Lightning container */}
                  <div className="relative bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full p-3 shadow-lg">
                    {/* Inner glow */}
                    <motion.div
                      className="absolute inset-0 bg-yellow-300/50 rounded-full blur-sm"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Lightning icon */}
                    <motion.span 
                      className="relative z-10 text-blue-900 text-3xl block font-libre-baskerville"
                      animate={{
                        y: [0, -2, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ⚡
                    </motion.span>
                  </div>
                </motion.div>
                <span className="hidden lg:inline font-libre-baskerville">Supercharged Learning</span>
              </div>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-libre-baskerville mb-6 lg:mb-8 px-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Be the first to experience our revolutionary learning platform. Join the waitlist for exclusive early access.
            </motion.p>

            {/* Email Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto px-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={handleInputFocus}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border transition-all duration-300 text-white placeholder-white/50 focus:outline-none ${
                      showHelper 
                        ? 'border-yellow-300 shadow-[0_0_15px_rgba(253,224,71,0.3)]' 
                        : 'border-white/20 focus:border-yellow-300/50'
                    }`}
                    required
                    disabled={isLoading}
                  />
                  {showHelper && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -top-6 left-0 text-yellow-300 text-sm font-medium font-libre-baskerville"
                    >
                      Add your email here ↓
                    </motion.div>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className={`w-full sm:w-auto px-6 py-4 sm:py-3 bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-blue-900 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl font-libre-baskerville tracking-wide text-base sm:text-sm whitespace-nowrap ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span className="font-libre-baskerville">Joining...</span>
                    </div>
                  ) : (
                    <span className="font-libre-baskerville">Join Waitlist</span>
                  )}
                </motion.button>
              </div>
            </motion.form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-300 mb-8 font-libre-baskerville text-center"
              >
                🎉 Thanks for joining! We&#39;ll notify you when we launch.
              </motion.div>
            )}

           {/* Feature Cards */}
<motion.div
  className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-4 mb-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
>
  {/* AI Learning Card */}
  <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 shadow-lg text-left">
    <div className="flex items-start gap-4">
      <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3.5 rounded-lg">
        <span className="text-2xl">🤖</span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2 text-left font-libre-baskerville">
          AI-Powered Learning
        </h3>
        <p className="text-blue-100 text-left font-libre-baskerville">
          Personalized learning paths and real-time AI feedback to fast-track your journey.
        </p>
      </div>
    </div>
  </div>

  {/* Hands-On Projects Card */}
  <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 shadow-lg text-left">
    <div className="flex items-start gap-4">
      <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-3.5 rounded-lg">
        <span className="text-2xl">💼</span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2 text-left font-libre-baskerville">
          Hands-On Projects
        </h3>
        <p className="text-blue-100 text-left font-libre-baskerville">
          Work on real-world challenges, build a job-ready portfolio, and stand out to recruiters.
        </p>
      </div>
    </div>
  </div>

  {/* Job Simulations Card */}
  <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 shadow-lg text-left">
    <div className="flex items-start gap-4">
      <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3.5 rounded-lg">
        <span className="text-2xl">🎯</span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2 text-left font-libre-baskerville">
          Job Simulations
        </h3>
        <p className="text-blue-100 text-left font-libre-baskerville">
          Practice real workplace scenarios with AI-driven roleplays and industry challenges.
        </p>
      </div>
    </div>
  </div>

  {/* Fast-Track Careers Card */}
  <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 shadow-lg text-left">
    <div className="flex items-start gap-4">
      <div className="bg-gradient-to-br from-green-400 to-green-600 p-3.5 rounded-lg">
        <span className="text-2xl">🚀</span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2 text-left font-libre-baskerville">
          Fast-Track Careers
        </h3>
        <p className="text-blue-100 text-left font-libre-baskerville">
          Master in-demand skills. Boost your career—all for just ₹500 per career path.
        </p>
      </div>
    </div>
  </div>
</motion.div> 

            {/* FAQ Section */}
            <div className="max-w-5xl mx-auto px-4 py-12 lg:py-16">
              {/* Section title */}
              <div className="mb-8 lg:mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-libre-baskerville text-center">Frequently Asked Questions</h2>
                <p className="text-xl text-blue-100 font-libre-baskerville text-center">Everything you need to know about our platform.</p>
              </div>

              {/* Left-aligned FAQ content */}
              <div className="space-y-6 lg:space-y-8 text-left">
                {[
                   { "question": "When will the platform launch?", "answer": "We're gearing up for launch soon! Join our waitlist to get early access, exclusive perks, and a chance to shape the future of AI-powered upskilling." }, { "question": "How much will it cost?", "answer": "We believe in affordable upskilling. Our platform will have a 500 Rs. per career path plan." }, { "question": "Do I need prior experience?", "answer": "Not at all! Whether you're a complete beginner or an experienced professional, our AI-powered learning paths adapt to your level, making upskilling smooth and effective." }, { "question": "What makes your platform different?", "answer": "Unlike traditional courses, we use AI-driven personalization, gamification, and real-world job simulations to make learning fun, interactive, and directly applicable to real jobs." }
                ].map((faq, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-3 font-libre-baskerville text-left">{faq.question}</h3>
                    <p className="text-blue-100 font-libre-baskerville text-left">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="text-center mt-12 lg:mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-lg lg:text-xl text-blue-100 font-libre-baskerville mb-6 lg:mb-8 text-center">
                Ready to start your learning journey?
              </p>
              <motion.button
                onClick={scrollToTop}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-medium transition-all font-libre-baskerville inline-flex items-center gap-2 lg:gap-3"
              >
                <span className="font-libre-baskerville">Join the Waitlist</span>
                <span className="text-lg lg:text-xl">↑</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameHero;