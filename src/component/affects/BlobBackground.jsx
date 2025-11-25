import React from "react";

const BlobBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-blue-300 rounded-full blur-[120px] opacity-40 -top-32 -left-20 animate-pulse"></div>
      <div className="absolute w-[450px] h-[450px] bg-purple-300 rounded-full blur-[150px] opacity-40 -bottom-32 -right-10 animate-bounce"></div>
      <div className="absolute w-[350px] h-[350px] bg-blue-500 rounded-full blur-[180px] opacity-30 top-1/3 left-1/3 animate-spin-slow"></div>
    </div>
  );
};

export default BlobBackground;
