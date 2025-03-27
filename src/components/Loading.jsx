import React from 'react';
import logo from '../assets/logo.png';

const Loading = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[rgb(7,110,111)] via-[rgb(7,110,111)]/80 to-[rgb(7,110,111)]/60 backdrop-blur-sm z-50">
      <div className="relative flex flex-col items-center">
        {/* Logo container */}
        <div className="relative w-32 h-32">
          {/* Logo with smooth rotation */}
          <img 
            src={logo} 
            alt="Logo" 
            className="w-full h-full object-contain animate-spin"
            style={{ animationDuration: '5s' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading; 