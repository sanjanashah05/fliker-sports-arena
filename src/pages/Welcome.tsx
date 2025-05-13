
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <div 
        className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-secondary to-secondary-700"
      >
        <div className="flex flex-col items-center justify-center w-full max-w-md">
          <div className="bg-white rounded-3xl p-8 w-full flex flex-col items-center shadow-lg">
            <div className="mb-6 transform scale-150">
              <Logo />
            </div>
            
            <h1 className="text-3xl font-bold text-center mb-3">Welcome to Fliker</h1>
            <p className="text-center text-gray-600 mb-8">Bringing Every Match to Life!</p>
            
            <div className="relative w-full h-48 mb-8 overflow-hidden rounded-xl">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
                <div className="bg-primary-100 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-600">Cricket</span>
                </div>
                <div className="bg-secondary-100 flex items-center justify-center">
                  <span className="text-lg font-bold text-secondary-600">Kabaddi</span>
                </div>
                <div className="bg-accent-100 flex items-center justify-center">
                  <span className="text-lg font-bold text-accent-600">Basketball</span>
                </div>
                <div className="bg-blue-100 flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-600">Football</span>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={() => navigate('/auth')}
              className="w-full bg-primary hover:bg-primary-600 text-white font-bold py-3 rounded-xl mb-4"
            >
              Get Started
            </Button>
          </div>
          
          <p className="text-white text-sm mt-6 opacity-80 text-center">
            Join amateur and professional sports enthusiasts and bring your game to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
