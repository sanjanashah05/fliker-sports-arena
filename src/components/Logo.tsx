
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary-600 to-primary-400 flex items-center justify-center">
          <div className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center">
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="absolute -right-1 -top-1 h-4 w-4 bg-accent rounded-full flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="text-2xl font-heading font-extrabold">
        <span className="text-primary">Fli</span>
        <span className="text-secondary">ker</span>
      </div>
    </div>
  );
};

export default Logo;
