
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import SportCard from '@/components/SportCard';

const SportSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleSportSelect = (sport: string) => {
    console.log(`Selected sport: ${sport}`);
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <div className="p-6">
        <Logo />
      </div>
      
      <div className="flex-1 flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-2">Pick a Sport</h1>
        <p className="text-gray-600 mb-6">Choose a sport to get started with</p>
        
        <div className="space-y-4">
          <SportCard
            name="Cricket"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 12L8 8M12 12l4 4" />
              </svg>
            }
            color="bg-primary-100 text-primary-600"
            onClick={() => handleSportSelect('cricket')}
          />
          
          <SportCard
            name="Kabaddi"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 7V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" />
                <path d="M10 12h4" />
                <circle cx="12" cy="12" r="8" />
              </svg>
            }
            color="bg-secondary-100 text-secondary-600"
            onClick={() => handleSportSelect('kabaddi')}
          />
          
          <SportCard
            name="Basketball"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M4.93 4.93 19.07 19.07M9.17 4.93a15.66 15.66 0 0 0 10.6 5.5M4.93 9.17a15.66 15.66 0 0 0 5.5 10.6" />
              </svg>
            }
            color="bg-accent-100 text-accent-600"
            onClick={() => handleSportSelect('basketball')}
          />
          
          <SportCard
            name="Football"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="m7.42 10.5 3.54-3.54 3.54 3.54-3.54 3.54z" />
                <path d="m7.42 10.5-2.83 2.83M13.5 16.58l-2.83 2.83M10.5 7.42 7.68 4.6M16.58 13.5l2.83-2.83" />
              </svg>
            }
            color="bg-blue-100 text-blue-600"
            onClick={() => handleSportSelect('football')}
          />
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-6">
          Don't worry, you can always switch between sports later
        </p>
      </div>
    </div>
  );
};

export default SportSelection;
