import { FC } from 'react';

interface Quest {
  title: string;
  progress: number;
  goal: number;
  reward: string;
}

const QuestItem: FC<Quest> = ({ title, progress, goal, reward }) => (
  <div className="p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-yellow-400/30 transition-colors">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-white font-medium">{title}</h3>
      <span className="text-yellow-400 text-sm">{reward}</span>
    </div>
    <div className="relative h-2 bg-white/20 rounded-full">
      <div 
        className="absolute h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-500"
        style={{ width: `${(progress/goal)*100}%` }}
      />
    </div>
    <div className="flex justify-between mt-2 text-sm text-white/60">
      <span>{progress}/{goal}</span>
      <span>+{Math.floor((progress/goal)*100)}%</span>
    </div>
  </div>
);

const DailyQuests = () => {
  const quests = [
    { title: 'Complete 3 Lessons', progress: 1, goal: 3, reward: '500 XP' },
    { title: 'Streak Builder', progress: 2, goal: 7, reward: '1000 XP' },
    { title: 'Community Help', progress: 0, goal: 5, reward: '750 XP' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-900/50 to-purple-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Daily Quests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quests.map((quest, index) => (
            <QuestItem key={index} {...quest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyQuests;
