
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import BottomNav from '@/components/BottomNav';
import { User, Settings, ChevronRight, Award, Users, Bell, Shield, HelpCircle, Loader2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Profile: React.FC = () => {
  const { user, profile, isLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [isSigningOut, setIsSigningOut] = useState(false);
  
  const handleSignOut = async () => {
    try {
      setIsSigningOut(true);
      await signOut();
    } catch (error) {
      setIsSigningOut(false);
    }
  };
  
  const menuItems = [
    { icon: <Settings size={20} />, label: 'Account Settings', onClick: () => navigate('/settings') },
    { icon: <Users size={20} />, label: 'My Teams', onClick: () => navigate('/teams') },
    { icon: <Award size={20} />, label: 'Achievements', onClick: () => navigate('/achievements') },
    { icon: <Bell size={20} />, label: 'Notifications', onClick: () => navigate('/notifications') },
    { icon: <Shield size={20} />, label: 'Privacy', onClick: () => navigate('/privacy') },
    { icon: <HelpCircle size={20} />, label: 'Help & Support', onClick: () => navigate('/support') },
  ];
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-muted pb-16">
      {/* Header */}
      <div className="bg-primary text-white py-6 px-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
            {profile?.avatar_url ? (
              <img 
                src={profile.avatar_url} 
                alt={profile.full_name || 'User'} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <User size={32} />
            )}
          </div>
          <div>
            <h1 className="text-xl font-bold">{profile?.full_name || 'User'}</h1>
            <p className="text-sm opacity-80">{profile?.role || 'Sports Enthusiast'}</p>
          </div>
        </div>
      </div>
      
      {/* Profile Stats */}
      <div className="p-4">
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="grid grid-cols-3 text-center">
            <div className="border-r border-gray-200">
              <div className="text-xl font-bold">0</div>
              <div className="text-xs text-gray-500">Teams</div>
            </div>
            <div className="border-r border-gray-200">
              <div className="text-xl font-bold">0</div>
              <div className="text-xs text-gray-500">Matches</div>
            </div>
            <div>
              <div className="text-xl font-bold">0</div>
              <div className="text-xs text-gray-500">Achievements</div>
            </div>
          </div>
        </div>
        
        {/* Menu Items */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              onClick={item.onClick}
              className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0 cursor-pointer hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <div className="text-gray-500">{item.icon}</div>
                <div>{item.label}</div>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
          ))}
        </div>
        
        {/* Sign Out Button */}
        <Button
          variant="outline"
          className="w-full border-red-300 text-red-600 hover:bg-red-50"
          onClick={handleSignOut}
          disabled={isSigningOut}
        >
          {isSigningOut ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing out...
            </>
          ) : (
            'Sign Out'
          )}
        </Button>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          Fliker v1.0.0
        </p>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav active="profile" />
    </div>
  );
};

export default Profile;
