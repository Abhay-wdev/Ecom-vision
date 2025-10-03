import React from 'react';

const EnhancedLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative">
        {/* Outer ring */}
        <div className="absolute inset-0 animate-spin">
          <div className="h-12 w-12 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent"></div>
        </div>
        
        {/* Middle ring */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s' }}>
          <div className="h-8 w-8 m-2 rounded-full border-4 border-t-transparent border-r-teal-500 border-b-transparent border-l-pink-500"></div>
        </div>
        
        {/* Inner ring */}
        <div className="animate-spin" style={{ animationDuration: '3s' }}>
          <div className="h-4 w-4 m-4 rounded-full border-4 border-t-yellow-500 border-r-transparent border-b-orange-500 border-l-transparent"></div>
        </div>
        
        {/* Pulsing dot in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2 w-2 bg-indigo-600 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Loading text */}
      <div className="ml-4 text-lg font-medium text-gray-600 animate-pulse">
        Loading...
      </div>
    </div>
  );
};

export default EnhancedLoader;