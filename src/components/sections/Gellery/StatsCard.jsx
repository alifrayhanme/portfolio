import React from "react";

const StatsCard = () => {
  return (
    <div className="bg-bg2 rounded-[80px] w-[215px] h-[378px] flex flex-col justify-center items-center gap-10 p-8 mx-auto">
      <div className="flex items-center justify-center gap-3">
        <p className="Number-M text-brand1 text-start">1</p>
        <p className="Para-M text-white text-start">Programming Language</p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <p className="Number-M text-brand1 text-start">8</p>
        <p className="Para-M text-white text-start">Development Tools</p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <p className="Number-M text-brand1 text-start">1</p>
        <p className="Para-M text-white text-start">Year of Experience</p>
      </div>
    </div>
  );
};

export default StatsCard;
