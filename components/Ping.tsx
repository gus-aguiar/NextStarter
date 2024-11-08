import React from "react";

const Ping = () => {
  return (
    <div className="relative">
      <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary rounded-full animate-ping opacity-75"></span>
      <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary rounded-full"></span>
    </div>
  );
};

export default Ping;
