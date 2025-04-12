
import React from 'react';

interface SymptomTagProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

const SymptomTag: React.FC<SymptomTagProps> = ({ 
  label, 
  selected = false, 
  onClick,
  className
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
      ${selected 
        ? 'bg-health-primary text-white' 
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      } ${className || ''}`}
    >
      {label}
    </button>
  );
};

export default SymptomTag;
