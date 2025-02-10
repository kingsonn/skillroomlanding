'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const SkillPathCalculator = () => {
  const [activeTab, setActiveTab] = useState<'generator' | 'calculator'>('generator');

  return (
    <section className="w-full bg-gradient-to-b from-blue-600 to-blue-700 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Plan Your Learning Journey
            </motion.h2>
            <motion.p 
              className="text-blue-100 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Discover your perfect skill path and calculate your career potential
            </motion.p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-blue-800/30 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('generator')}
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all ${
                  activeTab === 'generator'
                    ? 'bg-yellow-300 text-blue-900'
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                Skill Path Generator
              </button>
              <button
                onClick={() => setActiveTab('calculator')}
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all ${
                  activeTab === 'calculator'
                    ? 'bg-yellow-300 text-blue-900'
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                Employment Calculator
              </button>
            </div>
          </div>

          {/* Interactive Area */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            {activeTab === 'generator' ? (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="block text-white text-lg">I want to become a</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g., Full Stack Developer"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                        💼
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="block text-white text-lg">My current skill level is</label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300">
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-white text-lg">I can dedicate</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['2-4 hours/week', '5-10 hours/week', '11-20 hours/week', '20+ hours/week'].map((time) => (
                      <button
                        key={time}
                        className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-3 text-white transition-all"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-yellow-300 hover:bg-yellow-200 text-blue-900 rounded-xl px-8 py-4 text-xl font-bold transition-all shadow-lg hover:shadow-xl">
                  Generate My Learning Path 🚀
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="block text-white text-lg">Target Role</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g., AI Engineer"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                        💻
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="block text-white text-lg">Location</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g., United States"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">
                        🌎
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-white text-lg">Experience Level After Training</label>
                  <div className="grid grid-cols-3 gap-4">
                    {['Entry Level', 'Mid Level', 'Senior Level'].map((level) => (
                      <button
                        key={level}
                        className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-3 text-white transition-all"
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-yellow-300 hover:bg-yellow-200 text-blue-900 rounded-xl px-8 py-4 text-xl font-bold transition-all shadow-lg hover:shadow-xl">
                  Calculate Employment Potential 📊
                </button>

                {/* Sample Result Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white/5 rounded-xl p-6 text-center">
                    <div className="text-3xl mb-2">💰</div>
                    <div className="text-white text-2xl font-bold mb-1">$95,000</div>
                    <div className="text-blue-100">Average Salary</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <div className="text-white text-2xl font-bold mb-1">89%</div>
                    <div className="text-blue-100">Employment Rate</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 text-center">
                    <div className="text-3xl mb-2">🔥</div>
                    <div className="text-white text-2xl font-bold mb-1">High</div>
                    <div className="text-blue-100">Market Demand</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillPathCalculator;
