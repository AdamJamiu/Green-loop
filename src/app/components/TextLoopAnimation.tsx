"use client";

import React, { useState, useEffect } from "react";

const TextLoopAnimation = () => {
  const TEXTS: string[] = ["Plastics", "Papers", "Cartons", "Metals", "Cans"];
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [TEXTS.length]);

  return (
    // <div className="text-loop-container">
    <div key={currentTextIndex} className="text-slide-in p-0 m-0">
      {TEXTS[currentTextIndex]}
    </div>
    // </div>
  );
};

export default TextLoopAnimation;
