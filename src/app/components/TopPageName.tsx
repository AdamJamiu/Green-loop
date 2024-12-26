"use client";

import { useEffect, useState } from "react";

type ITopPageProps = {
  title: string;
};

const TopPageName = ({ title }: ITopPageProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Tracks vertical scroll position
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div
      className={`${
        scrollPosition > 40 ? "h-[10vh]" : "sm:h-[35vh] md:h-[30vh] h-[25vh]"
      } z-10 bg-[#1A1F1A] flex justify-center items-end font-satoshi pb-10 md:pb-16`}
    >
      <h1 className="w-full text-center text-white text-xl md:text-4xl">
        {title}
      </h1>
    </div>
  );
};

export default TopPageName;
