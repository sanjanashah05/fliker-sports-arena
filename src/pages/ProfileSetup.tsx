
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { Camera, User, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

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
  const { user, profile, isLoading: authLoading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
  const [name, setName] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  // Load existing profile data if available
  useEffect(() => {
    if (profile) {
      setName(profile.full_name || '');
      setSelectedRole(profile.role || '');
      setAvatarUrl(profile.avatar_url || null);
    }
    
    // Load user's sports preferences if they exist
    const loadUserSports = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('user_sports')
          .select('sport_id')
          .eq('user_id', user.id);
          
        if (error) throw error;
        
        if (data && data.length > 0) {
          setSelectedSports(data.map(item => item.sport_id));
        }
      } catch (error) {
        console.error('Error loading user sports:', error);
      }
    };
    
    loadUserSports();
  }, [profile, user]);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setAvatarUrl(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSportToggle = (sportId: string) => {
    setSelectedSports(prev => {
      if (prev.includes(sportId)) {
        return prev.filter(id => id !== sportId);
      } else {
        return [...prev, sportId];
      }
    });
  };

  const uploadAvatar = async () => {
    if (!avatarFile || !user) return null;
    
    try {
      const fileExt = avatarFile.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;
      
      // Check if storage bucket exists, create if not
      const { data: buckets } = await supabase.storage.listBuckets();
      const avatarBucketExists = buckets?.some(b => b.name === 'avatars');
      
      if (!avatarBucketExists) {
        await supabase.storage.createBucket('avatars', { public: true });
      }
      
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, avatarFile);
        
      if (uploadError) throw uploadError;
      
      const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading avatar:', error);
      return null;
    }
  };

  const handleContinue = async () => {
    if (!name || !selectedRole || !user) return;
    
    try {
      setIsLoading(true);
      
      // Upload avatar if selected
      const publicUrl = avatarFile ? await uploadAvatar() : avatarUrl;
      
      // Update user profile
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          full_name: name,
          role: selectedRole,
          avatar_url: publicUrl,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);
        
      if (profileError) throw profileError;
      
      // Update user sports preferences
      if (selectedSports.length > 0) {
        // Delete existing preferences
        await supabase
          .from('user_sports')
          .delete()
          .eq('user_id', user.id);
          
        // Insert new preferences
        const sportsData = selectedSports.map(sportId => ({
          user_id: user.id,
          sport_id: sportId,
        }));
        
        const { error: sportsError } = await supabase
          .from('user_sports')
          .insert(sportsData);
          
        if (sportsError) throw sportsError;
      }
      
      toast({
        title: "Profile updated!",
        description: "Your profile has been successfully updated.",
      });
      
      navigate('/sport-selection');
    } catch (error: any) {
      toast({
        title: "Error updating profile",
        description: error.message || "There was a problem updating your profile.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <div className="p-6">
        <Logo />
      </div>
      
      <div className="flex-1 flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-6">Complete Your Profile</h1>
        
        <div className="mb-6 flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {avatarUrl ? (
                <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <User size={48} className="text-gray-400" />
              )}
            </div>
            <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2 cursor-pointer">
              <Camera size={18} />
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
                disabled={isLoading}
              />
            </label>
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
              disabled={isLoading}
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
                  onClick={() => !isLoading && setSelectedRole(role.id)}
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
                  onClick={() => !isLoading && handleSportToggle(sport.id)}
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
            disabled={isLoading || !name || !selectedRole}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              'Continue'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
