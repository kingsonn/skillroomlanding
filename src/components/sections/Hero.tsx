'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';

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
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: email}]);
  
      if (error) throw error;
  
      setSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Error saving email:', error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-blue-600 relative overflow-hidden">
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
                <span className="text-yellow-300 font-semibold text-sm lg:text-base">🎮 Coming Soon</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Level Up Your Career
              <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4 my-2 lg:my-4">
                <span className="lg:hidden">with Supercharged Learning</span>
                <span className="hidden lg:inline">with</span>
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
                  <div className="relative bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full p-4 shadow-lg">
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
                      className="relative z-10 text-blue-900 text-4xl block"
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
                <span className="hidden lg:inline">Supercharged Learning</span>
              </div>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-exo2 mb-6 lg:mb-8 px-4"
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
                      className="absolute -top-6 left-0 text-yellow-300 text-sm font-medium"
                    >
                      Add your email here ↓
                    </motion.div>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className={`w-full sm:w-auto px-6 py-4 sm:py-3 bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-blue-900 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl font-oxanium tracking-wide text-base sm:text-sm whitespace-nowrap ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Joining...</span>
                    </div>
                  ) : (
                    'Join Waitlist'
                  )}
                </motion.button>
              </div>
            </motion.form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-300 mb-8"
              >
                🎉 Thanks for joining! We&apos;ll notify you when we launch.
              </motion.div>
            )}

            {/* Feature Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* AI Guidance Card */}
              <motion.div
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-300/50 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3.5 rounded-lg">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-white font-bold text-lg lg:text-xl font-oxanium">1:1 Guidance</h3>
                </div>
                <p className="text-blue-100/90 text-base leading-relaxed">
                  Get personalized mentoring and feedback from our advanced AI system, tailored to your learning style.
                </p>
              </motion.div>

              {/* Hyper Personalization Card */}
              <motion.div
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-300/50 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3.5 rounded-lg">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-white font-bold text-lg lg:text-xl font-oxanium">Personalised Path</h3>
                </div>
                <p className="text-blue-100/90 text-base leading-relaxed">
                  Adaptive learning path that adjusts to your speed, understanding, and personal goals in real-time.
                </p>
              </motion.div>

              {/* Hands-on Learning Card */}
              <motion.div
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-300/50 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-3.5 rounded-lg">
                    <span className="text-2xl">💪</span>
                  </div>
                  <h3 className="text-white font-bold text-lg lg:text-xl font-oxanium">Hands-on Projects</h3>
                </div>
                <p className="text-blue-100/90 text-base leading-relaxed">
                  Learn by doing with interactive projects and real-world challenges that matter.
                </p>
              </motion.div>

              {/* No Theory Card */}
              <motion.div
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-300/50 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 p-3.5 rounded-lg">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-white font-bold text-lg lg:text-xl font-oxanium">Skip the Theory</h3>
                </div>
                <p className="text-blue-100/90 text-base leading-relaxed">
                  Skip the textbooks. Dive straight into practical, engaging content that accelerates your growth.
                </p>
              </motion.div>

              {/* Pricing Card - Special Highlight */}
              <motion.div
                className="group col-span-1 md:col-span-2 bg-gradient-to-br from-yellow-300/20 to-yellow-400/20 backdrop-blur-sm rounded-xl p-8 border-2 border-yellow-300/50 hover:border-yellow-300 transition-all relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-900 text-xs font-bold px-4 py-1.5 rounded-bl-lg">
                  Early Access Offer
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mt-4">
                  {/* Icon */}
                  <div className="flex items-center justify-center bg-gradient-to-br from-yellow-300 to-yellow-400 p-4 rounded-xl shadow-lg shadow-yellow-400/20">
                    <span className="text-3xl leading-none">💎</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col items-center sm:items-start">
                    {/* Price */}
                    <div className="mb-3">
                      <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1 sm:gap-2 font-oxanium">
                        <span className="text-white font-bold text-2xl lg:text-3xl tracking-wide">₹199</span>
                        <span className="text-white/90 text-lg lg:text-xl">per career path</span>
                      </div>
                    </div>

                    {/* Lifetime Access Badge */}
                    <div className="flex items-center justify-center sm:justify-start mb-4 whitespace-nowrap">
                      <span className="text-yellow-300 text-lg leading-none inline-flex">✨</span>
                      <p className="text-yellow-300 font-semibold tracking-wide inline-flex">
                        Lifetime Access Included
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-blue-100/90 text-base leading-relaxed text-center sm:text-left">
                    Unlock your dream career with affordable, tailor-made training that promises 1000x ROI—because every rupee builds a brighter future.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              className="max-w-3xl mx-auto mt-16 lg:mt-32 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Keep the header centered */}
              <div className="text-center mb-12 lg:mb-16">
                <motion.h2 
                  className="mt-16 text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-4 font-oxanium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Frequently Asked Questions
                </motion.h2>
                <motion.p 
                  className="text-base lg:text-lg text-blue-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Everything you need to know about our platform
                </motion.p>
              </div>

              {/* Left-aligned FAQ content */}
              <div className="space-y-6 lg:space-y-8 text-left">
                {[
                  {
                    question: "When will the platform launch?",
                    answer: "We're planning to launch in Q2 2024. Early access members will get first access to the platform and exclusive features."
                  },
                  {
                    question: "What career paths are available?",
                    answer: "We'll offer paths in Software Development, Data Science, AI/ML, Product Management, and Digital Marketing. More paths will be added based on community demand."
                  },
                  {
                    question: "How is this different from other platforms?",
                    answer: "Our platform combines AI-powered 1:1 guidance, hands-on learning, and hyper-personalized paths that adapt to your learning style and pace. No more one-size-fits-all courses."
                  },
                  {
                    question: "What's included in the early access?",  
                    answer: "Early access members get special pricing, priority access to new features, direct access to our team for feedback, and lifetime benefits on the platform."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/20 hover:border-yellow-300/50 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3 lg:gap-4">
                      <span className="text-yellow-300 text-base lg:text-lg font-bold font-oxanium mt-1">Q.</span>
                      <div className="flex-1">
                        <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 font-oxanium">
                          {faq.question}
                        </h3>
                        <p className="text-blue-100 text-base lg:text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                className="text-center mt-12 lg:mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-lg lg:text-xl text-blue-100 mb-6 lg:mb-8">
                  Ready to start your learning journey?
                </p>
                <motion.button
                  onClick={scrollToTop}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-medium transition-all font-oxanium inline-flex items-center gap-2 lg:gap-3 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Join the Waitlist</span>
                  <span className="text-lg lg:text-xl transform group-hover:-translate-y-1 transition-transform">↑</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameHero;