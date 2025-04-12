
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/BackButton';
import { Check, Clock, AlertTriangle, RefreshCw, Pill, User } from 'lucide-react';

const Results = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-10 animate-fade-in">
      <div className="p-4 max-w-lg mx-auto">
        <div className="mb-6">
          <BackButton />
        </div>
        
        <h1 className="text-2xl font-bold mb-1 text-center">Assessment Results</h1>
        <p className="text-gray-600 text-center mb-6">AI Analysis of Your Symptoms</p>

        {/* Primary Assessment */}
        <div className="bg-purple-50 rounded-lg p-5 mb-6">
          <div className="flex items-start mb-4">
            <div className="p-2 bg-purple-600 text-white rounded-full mr-3">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-semibold text-lg">Primary Assessment</h2>
              <p className="text-sm text-gray-600">Based on reported symptoms</p>
            </div>
          </div>
          
          <div className="border-t border-purple-100 pt-3 mb-4">
            <h3 className="font-medium mb-1">Possible Condition</h3>
            <p className="text-gray-700">Common Cold / Upper Respiratory Infection</p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Confidence Level</h3>
            <div className="h-3 w-full bg-purple-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-600 rounded-full"
                style={{ width: '85%' }}
              ></div>
            </div>
            <div className="flex justify-end mt-1">
              <span className="text-sm font-semibold text-purple-600">85%</span>
            </div>
          </div>
        </div>

        {/* Detailed Analysis */}
        <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
          <h2 className="font-semibold text-lg mb-4">Detailed Analysis</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="p-1 mt-0.5 rounded-full bg-gray-100 mr-3">
                <RefreshCw className="w-4 h-4 text-gray-700" />
              </div>
              <div>
                <h3 className="font-medium">Symptoms Match</h3>
                <p className="text-sm text-gray-600">
                  Your symptoms align with typical indicators of a common cold
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-1 mt-0.5 rounded-full bg-gray-100 mr-3">
                <Clock className="w-4 h-4 text-gray-700" />
              </div>
              <div>
                <h3 className="font-medium">Duration</h3>
                <p className="text-sm text-gray-600">
                  Expected recovery time: 7-10 days with proper rest
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-1 mt-0.5 rounded-full bg-gray-100 mr-3">
                <AlertTriangle className="w-4 h-4 text-gray-700" />
              </div>
              <div>
                <h3 className="font-medium">Warning Signs</h3>
                <p className="text-sm text-gray-600">
                  Seek immediate care if fever persists over 3 days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
          <h2 className="font-semibold text-lg mb-4">Recommended Actions</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-blue-100 mr-3">
                <Check className="w-4 h-4 text-blue-600" />
              </div>
              <p>Rest and hydration</p>
            </div>
            
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-blue-100 mr-3">
                <Pill className="w-4 h-4 text-blue-600" />
              </div>
              <p>Over-the-counter cold medication</p>
            </div>
            
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-blue-100 mr-3">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <p>Monitor symptoms for 3 days</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button 
            onClick={() => navigate('/dashboard')}
            className="w-full bg-health-primary hover:bg-health-primary/90 text-white"
          >
            Schedule Doctor Consultation
          </Button>
          
          <Button 
            onClick={() => navigate('/dashboard')}
            variant="outline"
            className="w-full border-health-primary text-health-primary"
          >
            Download Report
          </Button>
        </div>
        
        <p className="text-xs text-gray-500 text-center mt-6">
          This is an AI-generated assessment. Always consult with a healthcare professional for medical advice.
        </p>
      </div>
    </div>
  );
};

export default Results;
