import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center font-bold text-lg">
            <span className=' text-4xl'>L</span>
        <span className="animate-spin text-6xl font-bolder text-blue-500">O</span> <span className='text-4xl'>ading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
