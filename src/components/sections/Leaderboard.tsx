import { FC } from 'react';

interface Leader {
  rank: number;
  name: string;
  xp: number;
  avatar: string;
}

const LeaderboardItem: FC<Leader> = ({ rank, name, xp, avatar }) => (
  <div className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-yellow-400/30 transition-colors">
    <div className="flex items-center gap-4">
      <span className="text-xl font-bold text-yellow-400 w-8">#{rank}</span>
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
        {avatar}
      </div>
      <span className="text-white font-medium">{name}</span>
    </div>
    <span className="text-yellow-400 font-semibold">{xp.toLocaleString()} XP</span>
  </div>
);

const Leaderboard = () => {
  const leaders = [
    { rank: 1, name: 'CodeMaster', xp: 24500, avatar: '👑' },
    { rank: 2, name: 'TechWizard', xp: 19800, avatar: '🧙' },
    { rank: 3, name: 'PixelArtist', xp: 16500, avatar: '🎨' },
    { rank: 4, name: 'Debugger', xp: 14200, avatar: '🐞' },
  ];

  return (
    <section id="leaderboard" className="py-20 bg-gradient-to-b from-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Global Leaderboard</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Compete with learners worldwide and climb the ranks
          </p>
        </div>
        <div className="grid gap-4 max-w-2xl mx-auto">
          {leaders.map((leader) => (
            <LeaderboardItem key={leader.rank} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
