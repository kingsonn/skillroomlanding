import { FC } from 'react';

interface AvatarProps {
  level: number;
  progress: number;
  avatar: string;
}

const Avatar: FC<AvatarProps> = ({ level, progress, avatar }) => (
  <div className="relative group">
    <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 p-1">
      <div className="bg-gray-900 rounded-full p-2">
        <span className="text-6xl flex items-center justify-center h-full">{avatar}</span>
      </div>
      
      {/* Level Badge */}
      <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
        LV {level}
      </div>
    </div>
    
    {/* Progress Ring */}
    <div className="absolute inset-0">
      <svg className="transform -rotate-90 w-32 h-32">
        <circle
          cx="64"
          cy="64"
          r="58"
          className="stroke-current text-white/20"
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          cx="64"
          cy="64"
          r="58"
          className="stroke-current text-yellow-400"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray="364.24"
          strokeDashoffset={364.24 * (1 - progress)}
        />
      </svg>
    </div>
  </div>
);

export default Avatar;
