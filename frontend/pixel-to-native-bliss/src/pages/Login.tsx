
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BackButton from '@/components/BackButton';
import { useToast } from '@/components/ui/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // In a real app, you'd handle authentication here
    toast({
      title: "Success",
      description: "You have been logged in successfully",
    });
    
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white p-6 animate-fade-in">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <BackButton to="/" />
        </div>
        
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Welcome Back</h1>
          <p className="text-gray-600">Sign in to access your health dashboard</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input 
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a href="#" onClick={() => navigate('/forgot-password')} className="text-sm text-health-primary">
                Forgot password?
              </a>
            </div>
            <Input 
              id="password"
              type="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4"
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-health-primary hover:bg-health-primary/90 text-white py-6"
          >
            Sign In
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <span className="text-gray-600">Don't have an account?</span>{' '}
          <a href="#" onClick={() => navigate('/signup')} className="text-health-primary font-medium">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
