
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SymptomTag from '@/components/SymptomTag';
import BottomNavigation from '@/components/BottomNavigation';
import BackButton from '@/components/BackButton';
import { useToast } from '@/components/ui/use-toast';
import { Upload, Loader2 } from 'lucide-react';

const Assessment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [isLoading, setIsLoading] = useState(false);

  // Step 1: Symptoms
  const availableSymptoms = [
    'Fever', 'Cough', 'Headache', 'Fatigue', 'Nausea', 'Dizziness',
    'Chest Pain', 'Shortness of Breath'
  ];
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  // Step 2: Body area
  const bodyAreas = ['Head', 'Chest', 'Abdomen', 'Arms', 'Legs'];
  const [selectedBodyArea, setSelectedBodyArea] = useState<string | null>(null);

  const toggleSymptom = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const selectBodyArea = (area: string) => {
    setSelectedBodyArea(area);
  };

  const nextStep = () => {
    if (step === 1 && selectedSymptoms.length === 0) {
      toast({
        title: "Selection Required",
        description: "Please select at least one symptom",
        variant: "destructive",
      });
      return;
    }

    if (step === 2 && !selectedBodyArea) {
      toast({
        title: "Selection Required",
        description: "Please select an affected body area",
        variant: "destructive",
      });
      return;
    }

    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      submitAssessment();
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const submitAssessment = () => {
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      navigate('/results');
    }, 1500);
  };
  
  const getAssessment = () => {
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      navigate('/results');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 animate-fade-in">
      {/* Header */}
      <header className="bg-white p-4 shadow-sm flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/fc4eca13-802e-4377-92c3-2ddd71bbca04.png" 
            alt="HealthAI" 
            className="w-10 h-10 rounded-lg"
          />
          <h1 className="ml-2 text-xl font-semibold">HealthAI</h1>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-sm">Sarah Johnson</span>
          <img 
            src="/placeholder.svg" 
            alt="Profile" 
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 max-w-lg mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
          <h2 className="text-xl font-bold mb-2">AI Health Assessment</h2>
          
          <div className="flex space-x-2 mb-6">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div 
                key={index}
                className={`h-2 flex-1 rounded-full ${
                  index + 1 <= step ? 'bg-health-primary' : 'bg-gray-200'
                }`}
              ></div>
            ))}
          </div>
          
          {step === 1 && (
            <div className="animate-fade-in">
              <h3 className="font-medium text-lg mb-4">Select Your Symptoms</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {availableSymptoms.map(symptom => (
                  <SymptomTag 
                    key={symptom}
                    label={symptom}
                    selected={selectedSymptoms.includes(symptom)}
                    onClick={() => toggleSymptom(symptom)}
                  />
                ))}
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Selected Symptoms:</h4>
                <div className="min-h-8">
                  {selectedSymptoms.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {selectedSymptoms.map(symptom => (
                        <span 
                          key={symptom}
                          className="bg-health-primary text-white text-sm px-3 py-1 rounded-full"
                        >
                          {symptom}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">No symptoms selected</p>
                  )}
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button
                  onClick={nextStep}
                  className="bg-health-primary hover:bg-health-primary/90 text-white"
                >
                  Next Step
                </Button>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="animate-fade-in">
              <h3 className="font-medium text-lg mb-4">Body Area & Image Upload</h3>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">Select Affected Body Part</h4>
                <div className="flex flex-wrap gap-2">
                  {bodyAreas.map(area => (
                    <SymptomTag 
                      key={area}
                      label={area}
                      selected={selectedBodyArea === area}
                      onClick={() => selectBodyArea(area)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">Upload Image (Optional)</h4>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="flex flex-col items-center">
                    <Upload className="w-10 h-10 text-gray-400 mb-2" />
                    <p className="text-gray-500 mb-3">Drop your image here or click to upload</p>
                    <Button variant="outline" className="text-health-primary border-health-primary">
                      Choose File
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between">
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
                  Next Step
                </Button>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="animate-fade-in">
              <h3 className="font-medium text-lg mb-4">Review & Submit</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Selected Symptoms:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSymptoms.map(symptom => (
                      <span 
                        key={symptom}
                        className="bg-health-primary text-white text-sm px-3 py-1 rounded-full"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Affected Area:</h4>
                  <p>{selectedBodyArea}</p>
                </div>
              </div>
              
              <div className="flex justify-between mb-8">
                <Button
                  onClick={previousStep}
                  variant="outline"
                  className="border-health-primary text-health-primary"
                >
                  Previous
                </Button>
                <Button
                  onClick={getAssessment}
                  disabled={isLoading}
                  className="bg-health-primary hover:bg-health-primary/90 text-white"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Get Assessment"
                  )}
                </Button>
              </div>
              
              {/* Placeholder for assessment result */}
              {selectedSymptoms.includes('Fever') && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                    <h4 className="font-medium">Urgency Level: Medium</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Based on your symptoms, you may have a common fever.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Assessment;
