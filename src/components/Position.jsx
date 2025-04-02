import React from 'react';

const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="relative top-10 cursor-default font-medium text-white text-[16px] xs:text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[66px] leading-[32px] 2xl:leading-[40px] w-full flex justify-center items-center">
      <div className="absolute inset-0 top-[-30px] sm:top-[-10px] lg:top-0 flex flex-col">

        <div 
          className="text first absolute left-1 md:left-2 2xl:left-4 flex" 
          aria-label="Software Developer"
          // style={{ zIndex: 3 }} // Highest z-index for the first text
        >
          {produceSpans("Software Developer", "animate-textRotate1 cycle-1")}
        </div>
        <div 
          className="text second absolute left-1 md:left-2 2xl:left-4 flex" 
          aria-label="Team Leader"
          // style={{ zIndex: 2 }} // Middle z-index
        >
          {produceSpans("Team Leader", "animate-textRotate2 cycle-2")}
        </div>
        <div 
          className="text third absolute left-1 md:left-2 2xl:left-4 flex" 
          aria-label="Problem Solver"
          // style={{ zIndex: 1 }} // Lowest z-index
        >
          {produceSpans("Problem Solver", "animate-textRotate3 cycle-3")}
        </div>
      </div>
    </div>
  );
};

export default Position;