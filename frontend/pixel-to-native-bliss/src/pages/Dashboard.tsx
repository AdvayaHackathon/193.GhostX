
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BottomNavigation from '@/components/BottomNavigation';
import { PlusCircle, FileText, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = "Sarah Johnson"; // In a real app, this would come from auth context

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
          <span className="mr-2 text-sm">{userName}</span>
          <img 
            src="/placeholder.svg" 
            alt="Profile" 
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 max-w-lg mx-auto">
        {/* Assessment Card */}
        <Card className="mb-5 bg-health-primary text-white overflow-hidden">
          <CardContent className="p-5">
            <h2 className="text-xl font-semibold mb-2">Start Assessment</h2>
            <p className="mb-4 text-sm opacity-90">
              Get an instant AI-powered health assessment based on your symptoms
            </p>
            <Button 
              onClick={() => navigate('/assessment')}
              variant="secondary" 
              className="bg-white text-health-primary hover:bg-gray-100"
            >
              Start Now
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-700 mb-3">Quick Actions</h2>
          <div className="bg-white rounded-lg shadow-sm">
            <div 
              className="p-4 border-b border-gray-100 flex items-center cursor-pointer"
              onClick={() => navigate('/assessment')}
            >
              <div className="p-2 bg-health-primary/10 rounded-lg mr-3">
                <PlusCircle className="w-5 h-5 text-health-primary" />
              </div>
              <div className="flex-1">
                <div className="font-medium">New Assessment</div>
                <div className="text-sm text-gray-500">
                  Start a new health assessment to get instant insights about your symptoms
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            
            <div 
              className="p-4 flex items-center cursor-pointer"
              onClick={() => navigate('/records')}
            >
              <div className="p-2 bg-health-primary/10 rounded-lg mr-3">
                <FileText className="w-5 h-5 text-health-primary" />
              </div>
              <div className="flex-1">
                <div className="font-medium">Health Records</div>
                <div className="text-sm text-gray-500">
                  Access your complete medical history and past assessments
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Recent Assessments */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-medium text-gray-700">Recent Assessments</h2>
            <Button 
              variant="link" 
              onClick={() => navigate('/records')}
              className="text-health-primary p-0 h-auto"
            >
              View All
            </Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-100">
            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-500">2024-01-15</span>
                <span className="px-3 py-1 text-xs bg-amber-100 text-amber-800 rounded-full">Medium</span>
              </div>
              <div className="font-medium">Respiratory Infection</div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-500">2023-12-28</span>
                <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full">Low</span>
              </div>
              <div className="font-medium">Migraine</div>
            </div>
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Dashboard;
