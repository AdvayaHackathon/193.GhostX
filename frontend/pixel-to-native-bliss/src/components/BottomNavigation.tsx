
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ClipboardList, FileText, User } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    return currentPath.includes(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex justify-around items-center px-2 z-10">
      <Link 
        to="/dashboard" 
        className={`flex flex-col items-center w-1/4 ${isActive('/dashboard') ? 'text-health-primary' : 'text-gray-500'}`}
      >
        <Home className="w-6 h-6" />
        <span className="text-xs mt-1">Home</span>
      </Link>
      
      <Link 
        to="/assessment" 
        className={`flex flex-col items-center w-1/4 ${isActive('/assessment') ? 'text-health-primary' : 'text-gray-500'}`}
      >
        <ClipboardList className="w-6 h-6" />
        <span className="text-xs mt-1">Assessment</span>
      </Link>
      
      <Link 
        to="/records" 
        className={`flex flex-col items-center w-1/4 ${isActive('/records') ? 'text-health-primary' : 'text-gray-500'}`}
      >
        <FileText className="w-6 h-6" />
        <span className="text-xs mt-1">Records</span>
      </Link>
      
      <Link 
        to="/profile" 
        className={`flex flex-col items-center w-1/4 ${isActive('/profile') ? 'text-health-primary' : 'text-gray-500'}`}
      >
        <User className="w-6 h-6" />
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </div>
  );
};

export default BottomNavigation;
