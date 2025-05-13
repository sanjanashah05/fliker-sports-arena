
import React from 'react';

interface SportCardProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}

const SportCard: React.FC<SportCardProps> = ({ name, icon, color, onClick }) => {
  return (
    <div 
      className="fliker-card cursor-pointer w-full" 
      onClick={onClick}
    >
      <div className="p-4 flex items-center gap-3">
        <div className={`sport-icon ${color}`}>
          {icon}
        </div>
        <div className="font-heading font-semibold">{name}</div>
      </div>
    </div>
  );
};

export default SportCard;
