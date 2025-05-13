
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, PlusCircle, Calendar, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface BottomNavProps {
  active: 'home' | 'explore' | 'create' | 'matches' | 'profile';
}

const BottomNav: React.FC<BottomNavProps> = ({ active }) => {
  const { signOut, isLoading } = useAuth();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 px-4 z-10">
      <Link to="/home" className={`nav-item flex flex-col items-center ${active === 'home' ? 'text-primary' : 'text-gray-500'}`}>
        <Home size={24} />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link to="/explore" className={`nav-item flex flex-col items-center ${active === 'explore' ? 'text-primary' : 'text-gray-500'}`}>
        <Search size={24} />
        <span className="text-xs mt-1">Explore</span>
      </Link>
      <Link to="/create" className={`nav-item flex flex-col items-center ${active === 'create' ? 'text-primary' : 'text-gray-500'}`}>
        <PlusCircle size={32} className={active === 'create' ? 'text-primary' : 'text-primary-400'} />
        <span className="text-xs mt-1">Create</span>
      </Link>
      <Link to="/matches" className={`nav-item flex flex-col items-center ${active === 'matches' ? 'text-primary' : 'text-gray-500'}`}>
        <Calendar size={24} />
        <span className="text-xs mt-1">My Matches</span>
      </Link>
      <div className="flex flex-col items-center">
        {active === 'profile' ? (
          <button 
            onClick={() => !isLoading && signOut()} 
            className="flex flex-col items-center text-red-500"
            disabled={isLoading}
          >
            <LogOut size={24} />
            <span className="text-xs mt-1">Logout</span>
          </button>
        ) : (
          <Link to="/profile" className={`flex flex-col items-center ${active === 'profile' ? 'text-primary' : 'text-gray-500'}`}>
            <User size={24} />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BottomNav;
