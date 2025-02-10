import { FC } from 'react';

interface Activity {
  user: string;
  action: string;
  timestamp: string;
  avatar: string;
}

const ActivityItem: FC<Activity> = ({ user, action, timestamp, avatar }) => (
  <div className="p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-yellow-400/30 transition-colors">
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
        {avatar}
      </div>
      <div>
        <p className="text-white">
          <span className="font-semibold">{user}</span> {action}
        </p>
        <p className="text-sm text-white/60">{timestamp}</p>
      </div>
    </div>
  </div>
);

const ActivityFeed = () => {
  const activities = [
    { user: 'CodeMaster', action: 'unlocked the "JavaScript Guru" badge', timestamp: '2m ago', avatar: '👑' },
    { user: 'TechWizard', action: 'reached level 25', timestamp: '15m ago', avatar: '🧙' },
    { user: 'PixelArtist', action: 'completed the Design Fundamentals course', timestamp: '1h ago', avatar: '🎨' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-purple-900/50 to-blue-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Community Activity</h2>
        <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
          {activities.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityFeed;
