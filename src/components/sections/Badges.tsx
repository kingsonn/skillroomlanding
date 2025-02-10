import { FC } from 'react';

interface BadgeProps {
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
}

const Badge: FC<BadgeProps> = ({ icon, title, description, unlocked }) => (
  <div className={`p-6 rounded-2xl transition-all duration-300 ${unlocked ? 
    'bg-gradient-to-br from-yellow-400 to-orange-400 text-black' : 
    'bg-white/5 border border-white/10 grayscale'}`}>
    <div className="flex items-center gap-4">
      <div className={`text-4xl ${unlocked ? 'animate-badgeSpin' : 'opacity-50'}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>
      </div>
    </div>
  </div>
);

export default Badge;
