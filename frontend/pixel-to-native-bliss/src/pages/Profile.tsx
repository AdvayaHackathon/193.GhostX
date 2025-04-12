
import React from 'react';
import BackButton from '@/components/BackButton';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Pencil, User, LogOut } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock user data
  const user = {
    name: 'Sarah Johnson',
    dateOfBirth: '04/15/1985',
    height: '165 cm',
    weight: '62 kg',
    bloodType: 'A+',
    allergies: 'Penicillin',
    conditions: 'Asthma',
    medications: 'Albuterol (as needed)',
    emergency: {
      name: 'John Smith',
      relationship: 'Spouse',
      phone: '(555) 123-4567'
    }
  };

  const handleLogout = () => {
    // In a real app, this would call an auth service to log out
    // For now, we'll just navigate to the login page
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="p-4 max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-6">
          <BackButton to="/dashboard" />
          <h1 className="text-2xl font-bold text-center flex-1 mr-8">Profile</h1>
          <Button 
            onClick={() => navigate('/edit-profile')}
            variant="ghost"
            size="icon"
            className="h-9 w-9"
          >
            <Pencil className="h-5 w-5" />
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center mb-4">
              <div className="bg-gray-200 rounded-full p-5 mb-2">
                <User className="h-10 w-10 text-gray-700" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-medium">{user.dateOfBirth}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Blood Type</p>
                <p className="font-medium">{user.bloodType}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Height</p>
                <p className="font-medium">{user.height}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Weight</p>
                <p className="font-medium">{user.weight}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Medical Information</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Allergies</p>
                <p className="font-medium">{user.allergies}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Existing Conditions</p>
                <p className="font-medium">{user.conditions}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Current Medications</p>
                <p className="font-medium">{user.medications}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Emergency Contact</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{user.emergency.name}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Relationship</p>
                <p className="font-medium">{user.emergency.relationship}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{user.emergency.phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Logout Button */}
        <Button 
          onClick={handleLogout}
          variant="outline" 
          className="w-full mt-6 border-health-primary text-health-primary hover:bg-health-primary hover:text-white flex items-center justify-center"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log Out
        </Button>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Profile;
