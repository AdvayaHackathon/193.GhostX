
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import BackButton from '@/components/BackButton';
import { useToast } from '@/components/ui/use-toast';

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, gender: value }));
  };

  const handleCheckboxChange = () => {
    setFormData(prev => ({ ...prev, agreeToTerms: !prev.agreeToTerms }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.email || !formData.password || !formData.fullName) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords don't match",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Error",
        description: "You must agree to the terms of service",
        variant: "destructive",
      });
      return;
    }

    // In a real app, you'd handle account creation here
    toast({
      title: "Account created",
      description: "Your account has been created successfully",
    });
    
    navigate('/health-profile');
  };

  return (
    <div className="min-h-screen bg-white p-6 animate-fade-in">
      <div className="max-w-md mx-auto pb-10">
        <div className="mb-6">
          <BackButton to="/" />
        </div>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Create Account</h1>
          <p className="text-gray-600">Join AI-Diagnosis for early health detection</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <Input 
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input 
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <Input 
              id="dateOfBirth"
              name="dateOfBirth"
              type="text"
              placeholder="MM/DD/YYYY"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <Select onValueChange={handleSelectChange} value={formData.gender}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input 
              id="password"
              name="password"
              type="password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <Input 
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={formData.agreeToTerms}
              onCheckedChange={handleCheckboxChange}
            />
            <label 
              htmlFor="terms" 
              className="text-sm text-gray-700 cursor-pointer"
            >
              I agree to the{" "}
              <a href="#" className="text-health-primary">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-health-primary">Privacy Policy</a>
            </label>
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-health-primary hover:bg-health-primary/90 text-white py-6"
          >
            Create Account
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <span className="text-gray-600">Already have an account?</span>{' '}
          <a href="#" onClick={() => navigate('/login')} className="text-health-primary font-medium">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
