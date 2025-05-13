
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, PlusCircle, Calendar, User } from 'lucide-react';

interface BottomNavProps {
  active: 'home' | 'explore' | 'create' | 'matches' | 'profile';
}

const BottomNav: React.FC<BottomNavProps> = ({ active }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 px-4 z-10">
      <Link to="/" className={`nav-item ${active === 'home' ? 'text-primary' : 'text-gray-500'}`}>
        <Home size={24} />
        <span>Home</span>
      </Link>
      <Link to="/explore" className={`nav-item ${active === 'explore' ? 'text-primary' : 'text-gray-500'}`}>
        <Search size={24} />
        <span>Explore</span>
      </Link>
      <Link to="/create" className={`nav-item ${active === 'create' ? 'text-primary' : 'text-gray-500'}`}>
        <PlusCircle size={32} className={active === 'create' ? 'text-primary' : 'text-primary-400'} />
        <span>Create</span>
      </Link>
      <Link to="/matches" className={`nav-item ${active === 'matches' ? 'text-primary' : 'text-gray-500'}`}>
        <Calendar size={24} />
        <span>My Matches</span>
      </Link>
      <Link to="/profile" className={`nav-item ${active === 'profile' ? 'text-primary' : 'text-gray-500'}`}>
        <User size={24} />
        <span>Profile</span>
      </Link>
    </div>
  );
};

export default BottomNav;
