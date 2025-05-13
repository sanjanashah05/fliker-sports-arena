
import React from 'react';
import { useTheme } from '@/hooks/useTheme';

const Logo: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        {/* Sporty logo with motion lines */}
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary-600 to-primary-400 flex items-center justify-center shadow-lg">
          {/* Inner circle represents a sports ball */}
          <div className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center relative overflow-hidden">
            <div className="absolute h-full w-1 bg-white transform -rotate-45"></div>
            <div className="absolute h-full w-1 bg-white transform rotate-45"></div>
          </div>
        </div>
        {/* Motion effect lines */}
        <div className="absolute -right-1 -top-1">
          <div className="h-4 w-4 bg-accent rounded-full flex items-center justify-center">
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="absolute -left-1 -bottom-1 h-3 w-3 bg-secondary rounded-full"></div>
      </div>
      <div className="text-2xl font-heading font-extrabold">
        <span className="text-primary">Fli</span>
        <span className={theme === 'dark' ? 'text-white' : 'text-secondary'}>ker</span>
      </div>
    </div>
  );
};

export default Logo;
