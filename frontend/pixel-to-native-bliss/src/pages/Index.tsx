
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white animate-fade-in">
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/fc4eca13-802e-4377-92c3-2ddd71bbca04.png" 
            alt="HealthAI Logo" 
            className="w-24 h-24 rounded-2xl shadow-lg"
          />
        </div>
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          AI-Powered<br />Early Diagnosis
        </h1>
        
        <p className="text-center text-gray-600 mb-10 max-w-sm">
          Advanced healthcare diagnostics powered by artificial intelligence for early detection and prevention
        </p>
        
        <Button 
          onClick={() => navigate('/login')}
          className="w-full bg-health-primary hover:bg-health-primary/90 text-white font-medium py-6"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Index;
