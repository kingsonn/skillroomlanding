'use client';

import { motion } from 'framer-motion';
import SkillPathCalculator from './SkillPathCalculator';

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
                <span className="text-yellow-300 font-semibold">🎮 Quest: Master Your Skills</span>
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
              className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-exo2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Join the quest for knowledge and unlock your potential with personalized skill paths
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <motion.button
                className="group relative w-full sm:w-auto bg-yellow-300 hover:bg-yellow-200 text-blue-900 px-8 py-4 rounded-xl text-xl font-bold transition-all shadow-lg hover:shadow-xl overflow-hidden font-oxanium tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">START YOUR JOURNEY</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  animate={{ scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
              <motion.a
                href="#features"
                className="text-blue-100 hover:text-white flex items-center gap-2 group px-4 py-2 font-oxanium tracking-wide"
                whileHover={{ x: 5 }}
              >
                VIEW SKILL TREE
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>
            </div>

            {/* Achievement Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: "🎯", label: "ACTIVE LEARNERS", value: "19,317", subtext: "+24% this month" },
                { icon: "⚡", label: "SKILLS MASTERED", value: "127,544", subtext: "Across all paths" },
                { icon: "🏆", label: "CERTIFICATIONS", value: "45,230", subtext: "Earned by users" },
                { icon: "💼", label: "JOB SUCCESS", value: "92%", subtext: "Employment rate" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-white font-bold text-2xl font-oxanium">{stat.value}</div>
                  <div className="text-blue-100 font-medium font-oxanium tracking-wider text-sm">{stat.label}</div>
                  <div className="text-blue-200 text-sm mt-1 font-exo2">{stat.subtext}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Trust Bar with Game Elements */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌟</span>
                <p className="text-white font-medium">
                  Trusted by <span className="text-yellow-300 font-bold">500+</span> companies worldwide
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
              {[
                'Google',
                'Microsoft',
                'Amazon',
                'Meta',
                'Apple'
              ].map((company, i) => (
                <motion.div
                  key={company}
                  className="text-blue-100/60 font-semibold text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.1, color: "#fff" }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skill Path Calculator Section */}
      <SkillPathCalculator />
    </section>
  );
};

export default GameHero;