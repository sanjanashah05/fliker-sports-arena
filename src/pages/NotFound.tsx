
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-muted">
      <Logo />
      
      <div className="mt-8 text-center">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl font-medium mb-6">Page not found</p>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/">
          <Button className="bg-primary hover:bg-primary-600 text-white">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
