
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

const AuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          throw error;
        }
        
        if (data?.session) {
          // Check if user has completed profile setup
          const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .select('full_name')
            .eq('id', data.session.user.id)
            .single();
            
          if (profileError || !profileData || !profileData.full_name) {
            // User needs to complete profile setup
            navigate('/profile-setup');
          } else {
            // User already has a profile, go to home
            navigate('/sport-selection');
          }
        } else {
          // No session, redirect to auth
          navigate('/auth');
        }
      } catch (err: any) {
        console.error('Error during auth callback:', err);
        setError(err.message || 'An error occurred during authentication');
        // Redirect to auth after a short delay
        setTimeout(() => navigate('/auth'), 3000);
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted p-4">
      {error ? (
        <div className="text-center">
          <h1 className="text-xl font-bold text-destructive mb-2">Authentication Error</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm">Redirecting you back to the login page...</p>
        </div>
      ) : (
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <h1 className="text-xl font-bold mb-2">Completing Authentication</h1>
          <p className="text-gray-600">Please wait while we log you in...</p>
        </div>
      )}
    </div>
  );
};

export default AuthCallback;
