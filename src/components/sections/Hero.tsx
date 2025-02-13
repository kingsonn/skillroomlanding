'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email collection logic
    setSubmitted(true);
    setEmail('');
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
      <div className="absolute inset-0 pointer-events-none">
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

      <div className="relative container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        {/* Main Hero Content */}
        <div className="max-w-[85rem] mx-auto">
          <div className="text-center space-y-8 mb-16 lg:mb-24">
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                <span className="text-yellow-300 font-semibold">🎮 Coming Soon</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Level Up Your Career
              <div className="flex items-center justify-center gap-4 my-4">
                with
                <motion.div
                  className="relative inline-flex items-center justify-center"
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
                Supercharged Learning
              </div>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-exo2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Be the first to experience our revolutionary learning platform. Join the waitlist for exclusive early access.
            </motion.p>

            {/* Pricing Highlight */}
            <motion.div
              className="flex flex-col items-center justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 border border-white/20">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💎</span>
                  <p className="text-white font-medium text-xl">
                    <span className="text-yellow-300 font-bold">₹200-800</span> per career path
                  </p>
                </div>
              </div>
              <motion.p 
                className="text-blue-100 mt-3 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Early access members get special pricing
              </motion.p>
            </motion.div>

            <motion.form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full sm:w-96 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 font-oxanium"
                required
              />
              <motion.button
                type="submit"
                className="group relative w-full sm:w-auto bg-yellow-300 hover:bg-yellow-200 text-blue-900 px-8 py-4 rounded-xl text-xl font-bold transition-all shadow-lg hover:shadow-xl overflow-hidden font-oxanium tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">GET EARLY ACCESS</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  animate={{ scale: [0.8, 1.2, 0.8] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.button>
            </motion.form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-300 mb-8"
              >
                🎉 Thanks for joining! We'll notify you when we launch.
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
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-lg">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-white font-bold text-xl font-oxanium">AI Powered 1:1 Guidance</h3>
                </div>
                <p className="text-blue-100 text-lg">
                  Get personalized mentoring and feedback from our advanced AI system, tailored to your learning style.
                </p>
              </motion.div>

              {/* Hyper Personalization Card */}
              <motion.div
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-300/50 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-lg">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-white font-bold text-xl font-oxanium">Hyper Personalized Learning</h3>
                </div>
                <p className="text-blue-100 text-lg">
                  Adaptive learning path that adjusts to your speed, understanding, and personal goals in real-time.
                </p>
              </motion.div>

              {/* Hands-on Learning Card */}
              <motion.div
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-300/50 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 rounded-lg">
                    <span className="text-2xl">💪</span>
                  </div>
                  <h3 className="text-white font-bold text-xl font-oxanium">Hands-on Learning</h3>
                </div>
                <p className="text-blue-100 text-lg">
                  Learn by doing with interactive projects and real-world challenges that matter.
                </p>
              </motion.div>

              {/* No Theory Card */}
              <motion.div
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-300/50 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-lg">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-white font-bold text-xl font-oxanium">No Boring Theory</h3>
                </div>
                <p className="text-blue-100 text-lg">
                  Skip the textbooks. Dive straight into practical, engaging content that accelerates your growth.
                </p>
              </motion.div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              className="max-w-3xl mx-auto mt-32 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Keep the header centered */}
              <div className="text-center mb-16 pt-8">
                <motion.h2 
                  className="text-4xl font-bold text-white mb-4 font-oxanium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Frequently Asked Questions
                </motion.h2>
                <motion.p 
                  className="text-blue-100 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Everything you need to know about our platform
                </motion.p>
              </div>

              {/* Left-aligned FAQ content */}
              <div className="space-y-8 text-left">
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
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-yellow-300/50 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-yellow-300 text-lg font-bold font-oxanium mt-1">Q.</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-4 font-oxanium">
                          {faq.question}
                        </h3>
                        <p className="text-blue-100 text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Keep the CTA centered */}
              <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-blue-100 text-xl mb-8">
                  Ready to start your learning journey?
                </p>
                <motion.button
                  onClick={() => document.querySelector('input[type="email"]')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium transition-all font-oxanium inline-flex items-center gap-3 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Join the Waitlist</span>
                  <span className="text-xl transform group-hover:-translate-y-1 transition-transform">↑</span>
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