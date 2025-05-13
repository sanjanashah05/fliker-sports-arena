
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { Camera, User } from 'lucide-react';

const roles = [
  { id: 'player', name: 'Player', description: 'I play in matches and tournaments' },
  { id: 'organizer', name: 'Organizer', description: 'I create and manage tournaments' },
  { id: 'fan', name: 'Fan', description: 'I watch and follow matches' },
];

const sports = [
  { id: 'cricket', name: 'Cricket' },
  { id: 'kabaddi', name: 'Kabaddi' },
  { id: 'basketball', name: 'Basketball' },
  { id: 'football', name: 'Football' },
];

const ProfileSetup: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  const handleSportToggle = (sportId: string) => {
    setSelectedSports(prev => {
      if (prev.includes(sportId)) {
        return prev.filter(id => id !== sportId);
      } else {
        return [...prev, sportId];
      }
    });
  };

  const handleContinue = () => {
    if (name && selectedRole) {
      navigate('/sport-selection');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <div className="p-6">
        <Logo />
      </div>
      
      <div className="flex-1 flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-6">Complete Your Profile</h1>
        
        <div className="mb-6 flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={48} className="text-gray-400" />
            </div>
            <button className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2">
              <Camera size={18} />
            </button>
          </div>
          <p className="text-sm text-gray-500">Add a profile photo</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Your Role
            </label>
            <div className="space-y-2">
              {roles.map((role) => (
                <div
                  key={role.id}
                  className={`p-3 border rounded-lg cursor-pointer flex items-center ${
                    selectedRole === role.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedRole(role.id)}
                >
                  <div className="flex-1">
                    <p className="font-medium">{role.name}</p>
                    <p className="text-sm text-gray-500">{role.description}</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border ${
                      selectedRole === role.id
                        ? 'border-primary-500 bg-primary-500'
                        : 'border-gray-400'
                    } flex items-center justify-center`}
                  >
                    {selectedRole === role.id && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Favorite Sports (Optional)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {sports.map((sport) => (
                <div
                  key={sport.id}
                  className={`p-3 border rounded-lg cursor-pointer text-center ${
                    selectedSports.includes(sport.id)
                      ? 'border-primary-500 bg-primary-50 text-primary-600'
                      : 'border-gray-300'
                  }`}
                  onClick={() => handleSportToggle(sport.id)}
                >
                  {sport.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-auto pt-6">
          <Button
            onClick={handleContinue}
            className="w-full bg-primary hover:bg-primary-600 text-white py-3"
            disabled={!name || !selectedRole}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
