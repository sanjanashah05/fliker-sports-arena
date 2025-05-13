
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background">
      <Header />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl font-medium mb-6">Page not found</p>
        <p className="text-muted-foreground mb-8">
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
