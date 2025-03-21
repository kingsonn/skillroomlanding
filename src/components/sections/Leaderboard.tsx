import { FC } from 'react';
import { motion } from 'framer-motion';

const Leaderboard: FC = () => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-white mb-4 font-oxanium">Leaderboard</h2>
      <div className="space-y-4">
        {/* Leaderboard content will go here */}
        <p className="text-blue-100">Coming soon...</p>
      </div>
    </motion.div>
  );
};

export default Leaderboard;
