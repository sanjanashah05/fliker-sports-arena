
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Auth: React.FC = () => {
  const navigate = useNavigate();

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // For demo purposes, we'll just navigate to the profile setup
    navigate('/profile-setup');
  };

  const handlePhoneLogin = () => {
    console.log('Login with phone');
    // For demo purposes, we'll just navigate to the profile setup
    navigate('/profile-setup');
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <div className="p-6">
        <Logo />
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2">Welcome</h1>
          <p className="text-gray-600 mb-8">Sign in to continue to Fliker</p>
          
          <div className="space-y-4 mb-8">
            <Button
              onClick={() => handleSocialLogin('Google')}
              variant="outline"
              className="w-full flex items-center justify-center gap-2 bg-white"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </Button>
            
            <Button
              onClick={() => handleSocialLogin('Facebook')}
              variant="outline"
              className="w-full flex items-center justify-center gap-2 bg-white"
            >
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Continue with Facebook
            </Button>
            
            <Button
              onClick={() => handleSocialLogin('Apple')}
              variant="outline"
              className="w-full flex items-center justify-center gap-2 bg-white"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="black">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.38-1.09-.52-2.08-.53-3.19 0-1.42.68-2.25.53-3.23-.38C3.72 16.21 3.15 12.93 4.5 9.5 5.36 7.42 6.94 6.28 8.76 6.1c1.31-.12 2.41.52 3.28 1.23.51.42 1.06 1.27 2.17 1.04.87-.19 2.54-1.35 3.25-1.06 1.01.41 1.76.99 2.25 1.68-4.81 2.9-4.01 10.16 1.67 11.67-.39.91-.9 1.64-1.33 2.07v.01c-.06.05-.12.09-.19.14-.05.04-.11.09-.17.13-.38.27-.77.51-1.14.77zM14.02 0c.14 1.36-.38 2.69-1.3 3.67-.86.94-2.23 1.65-3.57 1.52-.16-1.31.39-2.64 1.26-3.57.99-1.07 2.38-1.69 3.61-1.62z" />
              </svg>
              Continue with Apple
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-muted text-gray-500">Or</span>
              </div>
            </div>
            
            <Button
              onClick={handlePhoneLogin}
              className="w-full bg-primary hover:bg-primary-600 text-white"
            >
              Continue with Phone Number
            </Button>
          </div>
          
          <p className="text-center text-sm text-gray-600">
            By continuing, you agree to our
            <a href="#" className="text-primary ml-1">Terms of Service</a>
            <span className="mx-1">and</span>
            <a href="#" className="text-primary">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
