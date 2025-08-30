import React, { useRef, useEffect, useState } from "react";

const SubHeader = ({ title, details }) => {
  const titleRef = useRef(null);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  useEffect(() => {
    if (titleRef.current) {
      setUnderlineWidth(titleRef.current.offsetWidth);
    }
  }, [title]);

  return (
    <div className="flex flex-col justify-center items-center space-y-1.5">
      {/* Title */}
      <p ref={titleRef} className="H2-U text-brand1">{title}</p>

      {/* Underline with dots */}
      <div
        className="relative bg-brand1 h-[1.5px]"
        style={{ width: `${underlineWidth}px` }}
      >
        <span
          className="absolute bg-brand1 rounded-full"
          style={{ width: "6px", height: "6px", top: "-2.25px", left: "-6px" }}
        ></span>
        <span
          className="absolute bg-brand1 rounded-full"
          style={{ width: "6px", height: "6px", top: "-2.25px", right: "-6px" }}
        ></span>
      </div>

      {/* Details */}
      <p className="Code-M text-white px-5 text-center">{details}</p>
    </div>
  );
};

export default SubHeader;
