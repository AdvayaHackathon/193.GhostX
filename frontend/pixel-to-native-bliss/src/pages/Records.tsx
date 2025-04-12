
import React from 'react';
import BackButton from '@/components/BackButton';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';

const Records = () => {
  const navigate = useNavigate();

  // Mock data for health records
  const healthRecords = [
    {
      id: 1,
      title: 'Annual Checkup',
      date: '2024-01-15',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Respiratory Infection',
      date: '2023-12-03',
      status: 'Resolved'
    },
    {
      id: 3,
      title: 'Blood Test',
      date: '2023-11-20',
      status: 'Pending'
    }
  ];

  // Helper function to get color based on status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Resolved':
        return 'bg-purple-100 text-purple-800';
      case 'Pending':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="p-4 max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-6">
          <BackButton to="/dashboard" />
          <h1 className="text-2xl font-bold text-center flex-1 mr-8">Health Records</h1>
          <Button 
            onClick={() => navigate('/assessment')}
            className="bg-health-primary hover:bg-health-primary/90 rounded-full w-10 h-10 p-0"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-4">
          {healthRecords.map(record => (
            <div 
              key={record.id}
              className="bg-white rounded-lg shadow-sm p-4 transition-all hover:shadow-md cursor-pointer"
              onClick={() => navigate(`/records/${record.id}`)}
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium">{record.title}</h3>
                <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(record.status)}`}>
                  {record.status}
                </span>
              </div>
              <div className="text-gray-500 text-sm">
                {record.date}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Records;
