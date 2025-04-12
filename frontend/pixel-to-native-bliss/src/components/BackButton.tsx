
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface BackButtonProps {
  to?: string;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to, className }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button 
      onClick={handleBack}
      className={`flex items-center text-health-primary font-medium ${className || ''}`}
    >
      <ChevronLeft className="w-5 h-5" />
      Back
    </button>
  );
};

export default BackButton;
