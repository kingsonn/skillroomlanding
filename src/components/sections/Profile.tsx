import { FC } from 'react';
import Badge from './Badges';

const ProfileStats = () => {
  const stats = [
    { label: 'Total XP', value: '18,450', icon: '🌟' },
    { label: 'Current Streak', value: '5 days', icon: '🔥' },
    { label: 'Completed Courses', value: '12', icon: '📚' },
    { label: 'Global Rank', value: '#142', icon: '🌍' },
  ];

  const achievements = [
    { icon: '🏆', title: 'Fast Learner', description: 'Complete 3 courses in a week', unlocked: true },
    { icon: '💡', title: 'Early Adopter', description: 'Join during beta phase', unlocked: true },
    { icon: '🚀', title: 'Speed Runner', description: 'Finish course in top 10% time', unlocked: false },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">My Learning Profile</h2>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{stat.icon}</span>
                <div>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Earned Badges</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Badge key={index} {...achievement} />
            ))}
          </div>
        </div>

        {/* Skill Roadmap */}
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">Learning Roadmap</h3>
          <div className="relative h-2 bg-white/20 rounded-full mb-8">
            <div className="absolute h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full w-3/4" />
          </div>
          <div className="flex justify-between text-white/80 mb-4">
            <span>Basic Concepts</span>
            <span>Advanced Topics</span>
            <span>Mastery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileStats;
