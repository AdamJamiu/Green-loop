"use client";

import React, { useState, useEffect } from "react";

export interface TextLoopProps {
  data: string[];
  color?: string;
}

const TypewriterTextLoop = ({ data, color }: TextLoopProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    // Typing effect
    if (charIndex < data[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + data[currentTextIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      // Delay before switching to the next text
      const nextTimeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 2000); // Adjust delay before switching texts
      return () => clearTimeout(nextTimeout);
    }
  }, [charIndex, currentTextIndex, data]);

  return (
    <div className={`${color} typewriter p-0 m-0 w-max`}>
      {displayedText} <br />
    </div>
  );
};

export default TypewriterTextLoop;
