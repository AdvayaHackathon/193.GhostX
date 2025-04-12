
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import ProgressBar from '@/components/ProgressBar';
import { useToast } from '@/components/ui/use-toast';

const HealthProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // Step 1: Basic Measurements
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  // Step 2: Medical History
  const [conditions, setConditions] = useState({
    diabetes: false,
    hypertension: false,
    asthma: false,
    heartDisease: false,
    arthritis: false,
    none: false,
  });
  const [medications, setMedications] = useState('');

  // Step 3: Symptoms
  const [symptoms, setSymptoms] = useState('');

  const handleConditionChange = (condition: keyof typeof conditions) => {
    if (condition === 'none') {
      // If 'none' is selected, uncheck all others
      if (!conditions.none) {
        setConditions({
          diabetes: false,
          hypertension: false,
          asthma: false,
          heartDisease: false,
          arthritis: false,
          none: true,
        });
      }
    } else {
      // If any condition is selected, uncheck 'none'
      setConditions({
        ...conditions,
        [condition]: !conditions[condition],
        none: false,
      });
    }
  };

  const nextStep = () => {
    if (step === 1) {
      if (!height || !weight) {
        toast({
          title: "Missing information",
          description: "Please fill in all fields before continuing",
          variant: "destructive",
        });
        return;
      }
    }
    
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      completeProfile();
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const completeProfile = () => {
    // In a real app, you'd save the profile data here
    toast({
      title: "Profile Completed",
      description: "Your health profile has been saved successfully",
    });
    
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white p-6 pb-24 animate-fade-in">
      <div className="max-w-md mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Complete Your Health Profile
          </h1>
          <p className="text-gray-600 mt-2">
            Help us provide more accurate diagnoses by sharing some basic health information
          </p>
        </div>

        <ProgressBar 
          currentStep={step} 
          totalSteps={totalSteps} 
          className="mb-8"
        />

        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                Height (cm)
              </label>
              <Input
                id="height"
                type="number"
                placeholder="Enter your height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                Weight (kg)
              </label>
              <Input
                id="weight"
                type="number"
                placeholder="Enter your weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="pt-4">
              <Button
                onClick={nextStep}
                className="bg-health-primary hover:bg-health-primary/90 text-white"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pre-existing Conditions
              </label>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(conditions).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Checkbox
                      id={key}
                      checked={value}
                      onCheckedChange={() => handleConditionChange(key as keyof typeof conditions)}
                    />
                    <label
                      htmlFor={key}
                      className="text-sm text-gray-700 capitalize cursor-pointer"
                    >
                      {key === 'heartDisease' ? 'Heart Disease' : key}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="medications" className="block text-sm font-medium text-gray-700">
                Current Medications
              </label>
              <Textarea
                id="medications"
                placeholder="Enter any medications you're currently taking"
                value={medications}
                onChange={(e) => setMedications(e.target.value)}
                className="min-h-24"
              />
            </div>

            <div className="flex space-x-4 pt-4">
              <Button
                onClick={previousStep}
                variant="outline"
                className="border-health-primary text-health-primary"
              >
                Previous
              </Button>
              <Button
                onClick={nextStep}
                className="bg-health-primary hover:bg-health-primary/90 text-white"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">
                Current Symptoms
              </label>
              <Textarea
                id="symptoms"
                placeholder="Describe any symptoms you're currently experiencing"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="min-h-32"
              />
            </div>

            <div className="flex space-x-4 pt-4">
              <Button
                onClick={previousStep}
                variant="outline"
                className="border-health-primary text-health-primary"
              >
                Previous
              </Button>
              <Button
                onClick={completeProfile}
                className="bg-health-primary hover:bg-health-primary/90 text-white"
              >
                Complete Profile
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthProfile;
