import { FC, useEffect, useState } from 'react';

interface AchievementPopupProps {
  title: string;
  description: string;
  icon: string;
  onClose: () => void;
}

const AchievementPopup: FC<AchievementPopupProps> = ({ title, description, icon, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-4 right-4 p-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl shadow-2xl transform transition-all duration-500 ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      <div className="flex items-center gap-4">
        <div className="text-4xl animate-badgeSpin">{icon}</div>
        <div>
          <h3 className="text-xl font-bold text-black">{title}</h3>
          <p className="text-sm text-black/80">{description}</p>
        </div>
      </div>
      <div className="absolute top-2 right-2 cursor-pointer" onClick={() => setVisible(false)}>
        <span className="text-black/60 hover:text-black/90 text-lg">×</span>
      </div>
    </div>
  );
};

export default AchievementPopup;
