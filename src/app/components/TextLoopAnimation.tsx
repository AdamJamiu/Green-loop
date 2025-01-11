"use client";

import React, { useState, useEffect } from "react";

export interface TextLoopProps {
  data: string[];
  color?: string;
}

const TextLoopAnimation = ({ data, color }: TextLoopProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    // <div className="text-loop-container">
    <div
      key={currentTextIndex}
      className={`${color} text-slide-in p-0 m-0 w-max`}
    >
      {data[currentTextIndex]}
    </div>
    // </div>
  );
};

export default TextLoopAnimation;
